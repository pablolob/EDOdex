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
}());