(async()=>{
  try{
    let b64=window.__auditPdfPayload||'';
    if(!b64)throw new Error('AuditPDF payload is missing.');
    if(b64.length===130148){
      const fixes=[[75627,'a','Z'],[79517,'Y','E']];
      let chars=null;
      for(const [pos,bad,good] of fixes){
        if(b64[pos]===bad){
          if(!chars)chars=b64.split('');
          chars[pos]=good;
        }
      }
      if(chars)b64=chars.join('');
    }

    const bin=atob(b64),bytes=new Uint8Array(bin.length);
    for(let i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);
    const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
    const text=await new Response(stream).text();
    const p=JSON.parse(text);

    // Repair SVG data-URI colors that were double URL-encoded in the mobile payload.
    const fixSvgEncoding=s=>typeof s==='string'?s.replaceAll('%2523','%23'):s;
    p.body=fixSvgEncoding(p.body);
    p.editorCss=fixSvgEncoding(p.editorCss);
    p.mobileCss=fixSvgEncoding(p.mobileCss);

    // Mobile-specific zoom range and a verified bridge into the editor's real zoom engine.
    p.editorMain=p.editorMain.replace('next=clamp(next,.75,2.2);if(Math.abs(next-old)<.01)return;','next=clamp(next,.45,3.0);if(Math.abs(next-old)<.01)return state.scale;');
    const zoomNeedle="async function fitWidth(){if(!state.pdfDoc)return;await changeScale(await calculateFitWidthScale());}";
    if(p.editorMain.includes(zoomNeedle)){
      p.editorMain=p.editorMain.replace(zoomNeedle,zoomNeedle+"window.__auditPdfMobileZoom={commit:async next=>{await changeScale(Number(next));return Number(state.scale);},getScale:()=>Number(state.scale),min:.45,max:3};");
    }else{
      console.warn('AuditPDF Mobile could not expose the editor zoom bridge.');
    }

    document.body.innerHTML=p.body;

    // Also repair already-parsed inline/image SVG references defensively.
    document.querySelectorAll('img').forEach(img=>{
      const src=img.getAttribute('src');
      if(src&&src.includes('%2523'))img.setAttribute('src',src.replaceAll('%2523','%23'));
    });
    document.querySelectorAll('svg [fill],svg [stroke]').forEach(el=>{
      for(const attr of ['fill','stroke']){
        const value=el.getAttribute(attr);
        if(value&&value.startsWith('%23'))el.setAttribute(attr,'#'+value.slice(3));
      }
    });

    const style=document.createElement('style');
    style.textContent=p.editorCss+'\n'+p.mobileCss;
    document.head.appendChild(style);

    const run=(src,label)=>{
      try{return new Function(src)();}
      catch(err){err.message=label+': '+err.message;throw err;}
    };

    run(p.platform,'Mobile platform');
    run(p.ui,'Mobile UI');

    const liftMobileDrawers=()=>{
      for(const sel of ['.pages-panel','.ticks-panel']){
        const el=document.querySelector(sel);
        if(el&&el.parentElement!==document.body)document.body.appendChild(el);
      }
    };

    const installPinchZoom=()=>{
      const area=document.querySelector('.document-area');
      if(!area||area.dataset.mobilePinchZoom==='2')return;
      area.dataset.mobilePinchZoom='2';

      let pinch=null;
      let zoomBusy=false;
      const distance=(a,b)=>Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);
      const midpoint=(a,b)=>({x:(a.clientX+b.clientX)/2,y:(a.clientY+b.clientY)/2});
      const raf=()=>new Promise(resolve=>requestAnimationFrame(resolve));
      const clampRatio=r=>Math.max(.55,Math.min(2.25,Number(r)||1));
      const deviation=r=>Math.abs(Math.log(Math.max(.001,r)));

      const applyPreview=(ratio,mid)=>{
        if(!pinch)return;
        ratio=clampRatio(ratio);
        pinch.ratio=ratio;
        if(deviation(ratio)>deviation(pinch.bestRatio))pinch.bestRatio=ratio;
        const pages=document.querySelector('.pages-container');
        if(!pages)return;
        const pr=pages.getBoundingClientRect();
        pages.style.transformOrigin=`${mid.x-pr.left}px ${mid.y-pr.top}px`;
        pages.style.transform=`scale(${ratio})`;
        pages.style.willChange='transform';
      };

      area.addEventListener('touchstart',e=>{
        if(zoomBusy||e.touches.length!==2||!document.querySelector('.pdf-page'))return;
        const api=window.__auditPdfMobileZoom;
        if(!api||typeof api.getScale!=='function')return;
        const a=e.touches[0],b=e.touches[1],mid=midpoint(a,b),rect=area.getBoundingClientRect();
        const focusX=mid.x-rect.left,focusY=mid.y-rect.top;
        pinch={
          startDistance:Math.max(1,distance(a,b)),
          ratio:1,bestRatio:1,gestureRatio:1,
          baseScale:Number(api.getScale())||.75,
          focusX,focusY,
          nx:(area.scrollLeft+focusX)/Math.max(1,area.scrollWidth),
          ny:(area.scrollTop+focusY)/Math.max(1,area.scrollHeight)
        };
        document.body.classList.remove('mobile-pages-open','mobile-ticks-open','mobile-markup-open','mobile-more-open');
      },{passive:true,capture:true});

      area.addEventListener('touchmove',e=>{
        if(!pinch||e.touches.length<2)return;
        e.preventDefault();
        const mid=midpoint(e.touches[0],e.touches[1]);
        applyPreview(distance(e.touches[0],e.touches[1])/pinch.startDistance,mid);
      },{passive:false,capture:true});

      area.addEventListener('gesturestart',e=>{
        if(pinch)e.preventDefault();
      },{passive:false,capture:true});
      area.addEventListener('gesturechange',e=>{
        if(!pinch)return;
        e.preventDefault();
        const ratio=clampRatio(e.scale);
        pinch.gestureRatio=ratio;
        const mid={x:Number(e.clientX)||area.getBoundingClientRect().left+area.clientWidth/2,y:Number(e.clientY)||area.getBoundingClientRect().top+area.clientHeight/2};
        applyPreview(ratio,mid);
      },{passive:false,capture:true});

      const finishPinch=async()=>{
        if(!pinch||zoomBusy)return;
        const gesture=pinch;
        pinch=null;
        const pages=document.querySelector('.pages-container');
        if(pages){
          pages.style.transform='';
          pages.style.transformOrigin='';
          pages.style.willChange='';
        }
        const finalRatio=deviation(gesture.ratio)>=.035?gesture.ratio:gesture.bestRatio;
        if(deviation(finalRatio)<.035)return;
        const api=window.__auditPdfMobileZoom;
        if(!api||typeof api.commit!=='function')return;
        const target=Math.max(api.min||.45,Math.min(api.max||3,gesture.baseScale*finalRatio));
        if(Math.abs(target-gesture.baseScale)<.015)return;
        zoomBusy=true;
        try{
          const committed=await api.commit(target);
          if(!Number.isFinite(committed)||Math.abs(committed-target)>.03){
            throw new Error(`Zoom did not commit (${committed} vs ${target})`);
          }
          await raf();
          await raf();
          area.scrollLeft=Math.max(0,gesture.nx*area.scrollWidth-gesture.focusX);
          area.scrollTop=Math.max(0,gesture.ny*area.scrollHeight-gesture.focusY);
        }catch(err){
          console.warn('AuditPDF Mobile pinch zoom failed',err);
          const msg=document.createElement('div');
          msg.textContent='Zoom could not be applied — try again';
          Object.assign(msg.style,{position:'fixed',left:'50%',bottom:'calc(var(--mobile-bottom) + 16px)',transform:'translateX(-50%)',zIndex:'2000',background:'#222',color:'#fff',padding:'9px 12px',borderRadius:'9px',font:'12px system-ui'});
          document.body.appendChild(msg);setTimeout(()=>msg.remove(),1800);
        }finally{
          zoomBusy=false;
        }
      };

      area.addEventListener('touchend',e=>{if(pinch&&e.touches.length<2)finishPinch();},{passive:true,capture:true});
      area.addEventListener('touchcancel',()=>finishPinch(),{passive:true,capture:true});
      area.addEventListener('gestureend',e=>{if(pinch){e.preventDefault();finishPinch();}},{passive:false,capture:true});
    };

    const mobileReady=()=>{liftMobileDrawers();installPinchZoom();};
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mobileReady,{once:true});
    else mobileReady();

    document.addEventListener('click',e=>{
      if(e.target.closest('.panel-tick,.tick-btn,.circle-tick')){
        setTimeout(()=>document.body.classList.remove('mobile-pages-open','mobile-ticks-open','mobile-markup-open','mobile-more-open'),0);
      }
    },true);

    window.__auditPdfRunEmbeddedEditor=async()=>run(p.editorMain,'Editor core');
    run(p.bootstrap,'Bootstrap');
    window.__auditPdfPayload='';
  }catch(err){
    console.error('AuditPDF Mobile startup failed',err);
    document.body.innerHTML='<div style="font:16px system-ui;padding:24px"><h2>AuditPDF could not start</h2><p>'+String(err.message||err)+'</p></div>';
  }
})();
