// Context for the archive reader. Exploration lives in the shared workspace.
(()=>{
  const archive=window.ODEDEX_ARCHIVE,body=document.getElementById('explorerBody');
  let reference=null;
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function render(){
    const record=(window.ODEDEX_LIBRARY||archive.records()).find(r=>r.id===document.getElementById('readerContent').dataset.readerId);
    document.getElementById('explorerTitle').textContent=reference?'Referencia':'Contexto del ejercicio';
    document.getElementById('explorerScope').textContent=record?.id||'';
    if(reference){
      const text=reference.transcription||reference.caption||'Referencia disponible en el material editorial.';
      const formula=value=>reference.type==='figure'?`<p>${esc(value)}</p>`:`<div class="reference-formula">\\(${esc(value)}\\)</div>`;
      body.innerHTML=`<div class="reference-view"><h3 class="reference-view-title">${esc(reference.locator||reference.id)}</h3>${typeof text==='object'?Object.entries(text).map(([key,value])=>`<p>${esc(key)}</p>${formula(value)}`).join(''):formula(text)}<p>Fuente: ${esc(reference.sourceKey||'sin especificar')}</p><button class="reader-action" data-explorer-reference-back>Volver al ejercicio</button></div>`;
      if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([body]).catch(()=>{});
      return;
    }
    if(!record){body.textContent='Abre una ficha para consultar su contexto.';return;}
    const list=(key,label)=>`<details><summary>${label}</summary>${record[key]?.length?`<ul>${record[key].map(value=>`<li>${esc(value)}</li>`).join('')}</ul>`:'<p>No hay datos declarados.</p>'}</details>`;
    body.innerHTML=`<h3 class="reference-view-title">${esc(record.title)}</h3><dl class="reader-meta"><dt>Fuente</dt><dd>${esc(record.sourceKey||record.source)}</dd><dt>Capítulo</dt><dd>${esc(record.chapter)} · sección ${esc(record.section)}</dd><dt>Dificultad</dt><dd>C ${record.difficulty.conceptual} / T ${record.difficulty.technical}</dd></dl><div class="explorer-details">${list('competencies','Competencias')}${list('hiddenCompetencies','Competencias ocultas')}${list('prerequisites','Prerrequisitos')}${list('references','Referencias')}</div>`;
  }
  body.addEventListener('click',event=>{if(event.target.closest('[data-explorer-reference-back]'))window.dispatchEvent(new CustomEvent('odedex:reference-close'));});
  document.getElementById('closeExplorer').addEventListener('click',()=>document.querySelector('[data-reader-action="close"]')?.click());
  window.addEventListener('odedex:reader-render',event=>{reference=event.detail.reference;render();});
  window.addEventListener('odedex:reference-open',event=>{reference=event.detail.reference;render();});
  window.addEventListener('odedex:reference-close',()=>{reference=null;render();});
  render();
})();
