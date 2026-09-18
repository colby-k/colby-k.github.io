(async()=>{
  try{
    let b64=window.__auditPdfPayload||'';
    if(!b64)throw new Error('AuditPDF payload is missing.');

    // Preserve the verified repair used by the mobile packaging build.
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

    const fixSvgEncoding=s=>typeof s==='string'?s.replaceAll('%2523','%23'):s;
    p.body=fixSvgEncoding(p.body);
    p.editorCss=fixSvgEncoding(p.editorCss);

    document.body.innerHTML=p.body;

    document.querySelectorAll('img').forEach(img=>{
      const src=img.getAttribute('src');
      if(src&&src.includes('%2523'))img.setAttribute('src',src.replaceAll('%2523','%23'));
    });

    const style=document.createElement('style');
    style.textContent=p.editorCss+`
      html,body{width:100%;height:100%;margin:0;overflow:hidden}
      body.auditpdf-windows{min-width:760px;background:#f5f5f5}
      @media (display-mode:standalone){
        body.auditpdf-windows{user-select:auto}
      }
    `;
    document.head.appendChild(style);

    const run=(src,label)=>{
      try{return new Function(src)();}
      catch(err){err.message=label+': '+err.message;throw err;}
    };

    // Web/PWA compatibility shim from the existing mobile package.
    // Deliberately DO NOT load p.mobileCss or p.ui here.
    run(p.platform,'Windows web platform');

    const findFileInput=()=>{
      const inputs=[...document.querySelectorAll('input[type="file"]')];
      return inputs.find(el=>(el.accept||'').toLowerCase().includes('pdf'))
        || inputs.find(el=>(el.accept||'').toLowerCase().includes('auditpdf'))
        || inputs[0]
        || null;
    };

    const deliverFileToEditor=async file=>{
      for(let attempt=0;attempt<80;attempt++){
        const input=findFileInput();
        if(input){
          try{
            const dt=new DataTransfer();
            dt.items.add(file);
            input.files=dt.files;
            input.dispatchEvent(new Event('change',{bubbles:true}));
            return true;
          }catch(err){
            console.warn('AuditPDF file-input handoff failed',err);
          }
        }
        await new Promise(resolve=>setTimeout(resolve,100));
      }

      try{
        const target=document.querySelector('.document-area')||document.body;
        const dt=new DataTransfer();
        dt.items.add(file);
        target.dispatchEvent(new DragEvent('drop',{bubbles:true,cancelable:true,dataTransfer:dt}));
        return true;
      }catch(err){
        console.warn('AuditPDF drop handoff failed',err);
        return false;
      }
    };

    const consumeLaunch=async launchParams=>{
      const handles=launchParams&&launchParams.files;
      if(!handles||!handles.length)return;
      for(const handle of handles){
        try{
          const file=await handle.getFile();
          if(!await deliverFileToEditor(file)){
            console.warn('AuditPDF could not deliver launched file:',file.name);
          }
        }catch(err){
          console.warn('AuditPDF could not open launched file',err);
        }
      }
    };

    if('launchQueue' in window && window.launchQueue&&typeof window.launchQueue.setConsumer==='function'){
      window.launchQueue.setConsumer(consumeLaunch);
    }

    if('serviceWorker' in navigator){
      navigator.serviceWorker.register('./sw.js').catch(err=>console.warn('AuditPDF service worker registration failed',err));
    }

    window.__auditPdfRunEmbeddedEditor=async()=>run(p.editorMain,'Editor core');
    run(p.bootstrap,'Bootstrap');
    window.__auditPdfPayload='';
  }catch(err){
    console.error('AuditPDF Windows startup failed',err);
    document.body.innerHTML='<div style="font:16px system-ui;padding:24px"><h2>AuditPDF could not start</h2><p>'+String(err.message||err)+'</p></div>';
  }
})();
