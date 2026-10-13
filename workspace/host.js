(function(){
  'use strict';
  const archive=window.ODEDEX_ARCHIVE;if(!archive)return;
  const KEY='odedex:terminal:selection:v1',VIEW='odedex:terminal:view:v1';
  const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}};
  const clean=ids=>Array.isArray(ids)?[...new Set(ids.filter(id=>typeof id==='string'&&id.length<200))]:[];
  let selected=new Set(clean(read(KEY,[]))),past=[],future=[],anchor=null;
  const saved=read(VIEW,{}),initialHash=location.hash.slice(1);
  const isExplore=mode=>['atlas','difficulty','chapters','hierarchy','network','course'].includes(mode);
  let exploreMode=isExplore(saved.exploreMode)?saved.exploreMode:'atlas';
  if(isExplore(new URLSearchParams(initialHash).get('mode')))exploreMode=new URLSearchParams(initialHash).get('mode');
  const rememberView=()=>store(VIEW,{surface:terminal.surface,hash:terminal.hash,exploreMode});
  const terminal=window.ODEDEX_TERMINAL={
    selected,isolated:false,api:null,surface:'archive',
    hash:isExplore(new URLSearchParams(initialHash).get('mode'))?initialHash:isExplore(new URLSearchParams(saved.hash).get('mode'))?saved.hash:'mode='+exploreMode,
    select(ids,sync=true){
      const valid=new Set(archive.records().map(record=>record.id)),next=new Set(clean(ids).filter(id=>valid.has(id)));
      if(next.size===selected.size&&[...next].every(id=>selected.has(id)))return;
      past.push([...selected]);past=past.slice(-30);future=[];set(next,sync);
    },
    show(mode){
      if(mode==='explore')mode=exploreMode;
      if(mode!=='archive'&&!isExplore(mode))mode='atlas';
      const isArchive=mode==='archive';
      terminal.surface=isArchive?'archive':'explore';
      document.getElementById('app').hidden=!isArchive;const main=document.getElementById('main');if(main)main.hidden=isArchive;else stage.hidden=isArchive;
      document.body.classList.toggle('terminal-exploring',!isArchive);
      if(isArchive){history.replaceState(null,'','#archive');archive.refresh();document.getElementById('recordList').focus({preventScroll:true});}
      else {exploreMode=mode;if(terminal.api)terminal.api.open(mode);else{const params=new URLSearchParams(terminal.hash);params.set('mode',mode);terminal.writeHash(String(params));}}
      rememberView();markNav(mode);window.scrollTo(0,0);window.dispatchEvent(new Event('odedex:view'));
    },
    writeHash(hash){terminal.hash=hash;const mode=new URLSearchParams(hash).get('mode');if(isExplore(mode))exploreMode=mode;if(terminal.surface==='explore'){history.replaceState(null,'','#'+hash);markNav(mode);}rememberView();},
    ready(){loading.hidden=true;terminal.api.open(exploreMode);paint();window.dispatchEvent(new Event('odedex:workspace-ready'));},
  };
  function store(key,value){try{localStorage.setItem(key,JSON.stringify(value));}catch{status.textContent='No se pudo guardar. Mantén abierta esta pestaña y exporta tus datos desde el archivo.';status.hidden=false;}}
  function set(next,sync){selected=next;terminal.selected=selected;store(KEY,[...selected]);if(sync)terminal.api?.select([...selected]);archive.refreshSelection();paint();}
  function markNav(mode){nav.querySelectorAll('[data-terminal-mode]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.terminalMode===(isExplore(mode)?'explore':mode))));}
  function paint(){
    const count=selected.size,visible=archive.visibleIds().filter(id=>selected.has(id)).length;
    document.getElementById('terminalSelectionCount').textContent=`${count.toLocaleString('es-ES')} seleccionados · ${visible.toLocaleString('es-ES')} en esta consulta`;
    nav.querySelector('.terminal-nav-count').textContent=`${count.toLocaleString('es-ES')} seleccionados`;
    for(const [action,disabled] of [['undo',!past.length],['redo',!future.length],['clear',!count],['isolate',!count&&!terminal.isolated]])document.querySelector(`[data-selection-action="${action}"]`).disabled=disabled;
    document.querySelector('[data-selection-action="isolate"]').setAttribute('aria-pressed',String(terminal.isolated));
    document.querySelectorAll('[data-terminal-pick]').forEach(input=>{input.checked=selected.has(input.dataset.terminalPick);const row=input.closest('.record-row');row.classList.toggle('is-picked',input.checked);row.setAttribute('aria-selected',String(input.checked));});
  }

  const nav=document.createElement('nav');nav.className='terminal-nav';nav.setAttribute('aria-label','Vistas de ODEDex');
  nav.innerHTML=[['archive','archivo',1],['explore','explorar',2]].map(([key,label,shortcut])=>`<button type="button" data-terminal-mode="${key}" aria-pressed="${key==='archive'}" title="Alt + ${shortcut}">${label}</button>`).join('')+'<span class="terminal-nav-count" aria-label="Selección compartida"></span>';
  const stage=document.createElement('main');stage.id='explore';stage.className='app terminal-stage';stage.hidden=true;
  const loading=document.createElement('p');loading.className='terminal-loading';loading.textContent='Preparando las herramientas…';stage.append(loading);
  const status=document.createElement('p');status.className='terminal-storage-warning';status.setAttribute('role','alert');status.hidden=true;
  document.body.prepend(nav,status);document.getElementById('app').after(stage);
  new ResizeObserver(()=>document.documentElement.style.setProperty('--terminal-nav-height',nav.offsetHeight+'px')).observe(nav);
  document.addEventListener('click',event=>{
    const open=event.target.closest('[data-terminal-mode]');if(open){terminal.show(open.dataset.terminalMode);return;}
    const pick=event.target.closest('[data-terminal-pick]');
    if(pick){event.stopImmediatePropagation();const id=pick.dataset.terminalPick,visible=archive.visibleIds();let ids=[id];if(event.shiftKey&&anchor&&visible.includes(anchor)){const a=visible.indexOf(anchor),b=visible.indexOf(id);ids=visible.slice(Math.min(a,b),Math.max(a,b)+1);}terminal.select(pick.checked?[...selected,...ids]:[...selected].filter(value=>!ids.includes(value)));anchor=id;document.getElementById('recordList').focus({preventScroll:true});return;}
    const action=event.target.closest('[data-selection-action]')?.dataset.selectionAction;
    if(action==='clear')terminal.select([]);
    if(action==='results'){const ids=archive.visibleIds(),op=document.getElementById('terminalSelectionOperation').value;terminal.select(op==='replace'?ids:op==='add'?[...selected,...ids]:[...selected].filter(id=>op==='intersect'?ids.includes(id):!ids.includes(id)));}
    if(action==='isolate'){terminal.isolated=!terminal.isolated;archive.refreshSelection();paint();}
    if(action==='undo'||action==='redo'){const from=action==='undo'?past:future,to=action==='undo'?future:past;if(from.length){to.push([...selected]);set(new Set(from.pop()),true);}}
  },true);
  document.addEventListener('keydown',event=>{
    if(document.getElementById('archivePopup').open)return;
    if(event.altKey&&['1','2'].includes(event.key)){event.preventDefault();terminal.show(['archive','explore'][Number(event.key)-1]);return;}
    if(event.key.toLowerCase()==='m'&&!event.ctrlKey&&!event.metaKey&&!event.altKey&&!event.target.matches('input,textarea,select,[contenteditable]')&&!event.target.closest('#archiveVisualizer')&&terminal.surface==='archive'&&!document.querySelector('dialog[open]')){const id=archive.activeId();if(id){event.preventDefault();terminal.select(selected.has(id)?[...selected].filter(value=>value!==id):[...selected,id]);}}
  });
  window.addEventListener('odedex:archive-render',paint);
  window.addEventListener('storage',event=>{if(event.key===KEY){past=[];future=[];selected=new Set(clean(read(KEY,[])));terminal.selected=selected;archive.refreshSelection();terminal.api?.select([...selected]);paint();}});
  window.addEventListener('hashchange',()=>{const hash=location.hash.slice(1);terminal.show(hash==='archive'?'archive':hash==='explore'?'explore':new URLSearchParams(hash).get('mode')||'atlas');});
  archive.refresh();paint();
  const start=initialHash==='archive'?'archive':initialHash==='explore'?'explore':initialHash?new URLSearchParams(initialHash).get('mode')||'atlas':saved.surface==='explore'?'explore':'archive';
  if(start!=='archive')terminal.show(start);
})();
