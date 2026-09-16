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

    const zoomNeedle="async function fitWidth(){if(!state.pdfDoc)return;await changeScale(await calculateFitWidthScale());}";
    if(p.editorMain.includes(zoomNeedle)){
      p.editorMain=p.editorMain.replace(zoomNeedle,zoomNeedle+"window.__auditPdfMobileZoom={changeScale,getScale:()=>state.scale};");
    }else{
      console.warn('AuditPDF Mobile could not expose the editor zoom bridge.');
    }

    document.body.innerHTML=p.body;
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
      if(!area||area.dataset.mobilePinchZoom==='1')return;
      area.dataset.mobilePinchZoom='1';

      let pinch=null;
      let zoomBusy=false;
      const distance=(a,b)=>Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);
      const midpoint=(a,b)=>({x:(a.clientX+b.clientX)/2,y:(a.clientY+b.clientY)/2});
      const raf=()=>new Promise(resolve=>requestAnimationFrame(resolve));

      area.addEventListener('touchstart',e=>{
        if(zoomBusy||e.touches.length!==2||!document.querySelector('.pdf-page'))return;
        const api=window.__auditPdfMobileZoom;
        if(!api||typeof api.getScale!=='function')return;
        const a=e.touches[0],b=e.touches[1],mid=midpoint(a,b),rect=area.getBoundingClientRect();
        const focusX=mid.x-rect.left,focusY=mid.y-rect.top;
        pinch={
          startDistance:Math.max(1,distance(a,b)),
          ratio:1,
          baseScale:api.getScale(),
          focusX,focusY,
          nx:(area.scrollLeft+focusX)/Math.max(1,area.scrollWidth),
          ny:(area.scrollTop+focusY)/Math.max(1,area.scrollHeight)
        };
        document.body.classList.remove('mobile-pages-open','mobile-ticks-open','mobile-markup-open','mobile-more-open');
      },{passive:true,capture:true});

      area.addEventListener('touchmove',e=>{
        if(!pinch||e.touches.length<2)return;
        e.preventDefault();
        const ratio=Math.max(.7,Math.min(1.8,distance(e.touches[0],e.touches[1])/pinch.startDistance));
        pinch.ratio=ratio;
        const pages=document.querySelector('.pages-container');
        if(pages){
          const pr=pages.getBoundingClientRect();
          const mid=midpoint(e.touches[0],e.touches[1]);
          pages.style.transformOrigin=`${mid.x-pr.left}px ${mid.y-pr.top}px`;
          pages.style.transform=`scale(${ratio})`;
          pages.style.willChange='transform';
        }
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
        if(Math.abs(gesture.ratio-1)<.04)return;
        const api=window.__auditPdfMobileZoom;
        if(!api||typeof api.changeScale!=='function')return;
        const target=Math.max(.75,Math.min(2.2,gesture.baseScale*gesture.ratio));
        if(Math.abs(target-gesture.baseScale)<.02)return;
        zoomBusy=true;
        try{
          await api.changeScale(target);
          await raf();
          await raf();
          area.scrollLeft=Math.max(0,gesture.nx*area.scrollWidth-gesture.focusX);
          area.scrollTop=Math.max(0,gesture.ny*area.scrollHeight-gesture.focusY);
        }catch(err){
          console.warn('AuditPDF Mobile pinch zoom failed',err);
        }finally{
          zoomBusy=false;
        }
      };

      area.addEventListener('touchend',e=>{if(pinch&&e.touches.length<2)finishPinch();},{passive:true,capture:true});
      area.addEventListener('touchcancel',()=>finishPinch(),{passive:true,capture:true});
      area.addEventListener('gesturestart',e=>e.preventDefault(),{passive:false,capture:true});
      area.addEventListener('gesturechange',e=>e.preventDefault(),{passive:false,capture:true});
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
