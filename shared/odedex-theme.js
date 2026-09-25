(function(){
  'use strict';
  var KEY='odedex:theme';
  var themes={archive:{label:'Archivo',icon:'◐'},radar:{label:'Radar',icon:'◑'}};
  function get(){
    var saved='';
    try{saved=localStorage.getItem(KEY)||''}catch(error){}
    return themes[saved]?saved:'archive';
  }
  function apply(theme){
    theme=themes[theme]?theme:'archive';
    document.documentElement.dataset.theme=theme;
    document.documentElement.style.colorScheme=theme==='radar'?'light':'dark';
    return theme;
  }
  function toggle(){
    var next=apply(document.documentElement.dataset.theme==='archive'?'radar':'archive');
    try{localStorage.setItem(KEY,next)}catch(error){}
    window.dispatchEvent(new CustomEvent('odedex:theme',{detail:{theme:next}}));
    return next;
  }
  window.ODEDEX_THEME={get:get,apply:apply,toggle:toggle,themes:themes};
  apply(get());
  document.addEventListener('DOMContentLoaded',function(){
    var button=document.createElement('button');
    button.className='theme-toggle';
    button.type='button';
    function paint(){
      var next=document.documentElement.dataset.theme==='archive'?'Light':'Dark';
      button.innerHTML='<span class="theme-toggle-icon" aria-hidden="true">'+(next==='Light'?'◑':'◐')+'</span><span class="theme-toggle-label">'+next+'</span>';
      button.setAttribute('aria-label','Cambiar a modo '+next);
      button.title='Cambiar a modo '+next;
    }
    button.addEventListener('click',function(){toggle();paint()});
    document.body.appendChild(button);
    paint();
  });
}());
