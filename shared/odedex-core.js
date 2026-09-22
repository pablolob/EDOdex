(function(){
'use strict';
var PROGRESS_KEY='odedex:v2:progress', CONTEXT_KEY='odedex:v2:context', SEEDED_KEY='odedex:v2:demo-seeded';
var labels={
 'clasificar.orden':'Clasificar · orden','clasificar.linealidad':'Clasificar · linealidad',
 'verificar.sustitucion-directa':'Verificar · sustitución','verificar.dominio-intervalo':'Verificar · dominio',
 'seleccionar-metodo.justificar-eleccion':'Seleccionar · método',
 'analizar-cualitativamente.puntos-equilibrio':'Analizar · equilibrios','analizar-cualitativamente.estabilidad':'Analizar · estabilidad'
};
function safe(v,f){try{return JSON.parse(v)}catch(e){return f}}
function parseId(id){var m=/-c(\d+)-s(\d+)-e(\d+)$/.exec(String(id||''));return m?{chapter:+m[1],section:+m[2],exercise:+m[3]}:{};}
function loadProgress(){var p=safe(localStorage.getItem(PROGRESS_KEY),null);return p&&typeof p==='object'?{captures:p.captures||{},events:Array.isArray(p.events)?p.events:[]}:{captures:{},events:[]};}
function saveProgress(p){localStorage.setItem(PROGRESS_KEY,JSON.stringify(p));window.dispatchEvent(new CustomEvent('odedex:progress',{detail:p}));}
function loadContext(){var c=safe(localStorage.getItem(CONTEXT_KEY),null)||{};return Object.assign({selectedId:'',chapter:1,section:1,competency:'',updatedAt:''},c);}
function updateContext(partial){var c=Object.assign(loadContext(),partial||{});if(c.selectedId){var p=parseId(c.selectedId);if(p.chapter)c.chapter=p.chapter;if(p.section)c.section=p.section;}c.updatedAt=new Date().toISOString();localStorage.setItem(CONTEXT_KEY,JSON.stringify(c));window.dispatchEvent(new CustomEvent('odedex:context',{detail:c}));return c;}
function normalize(r,i){var p=parseId(r.id),d=r.difficulty||{};return {id:String(r.id||'demo-'+i),title:String(r.title||r.id),authors:Array.isArray(r.authors)?r.authors:[r.author||'ODEDEX'],source:String(r.sourceKey||r.source||'demo'),locator:String(r.sourceLocator||r.locator||''),chapter:+(r.chapter||p.chapter||1),chapterTitle:String(r.chapterTitle||''),section:+(r.section||p.section||1),exercise:+(r.exerciseNumber||p.exercise||i+1),topics:Array.isArray(r.topics)?r.topics:[],competencies:Array.isArray(r.competencies)?r.competencies:[],status:String(r.solutionStatus||r.status||'open'),conceptual:+(d.conceptual||1),technical:+(d.technical||1),blocked:String(r.blocked||''),content:r.content||''};}
var records=(window.ODEDEX_LIBRARY||[]).map(normalize);
records.forEach(function(r){r.competencies.forEach(function(k){if(!labels[k])labels[k]=String(k).replace(/[._-]/g,' ')})});
if(localStorage.getItem(SEEDED_KEY)){localStorage.removeItem(PROGRESS_KEY);localStorage.removeItem(SEEDED_KEY);}
var initialContext=loadContext();if(records[0]&&!records.some(function(r){return r.id===initialContext.selectedId}))updateContext({selectedId:records[0].id,chapter:records[0].chapter,section:records[0].section,competency:records[0].competencies[0]||''});
function isCaptured(id){return !!loadProgress().captures[typeof id==='string'?id:id.id];}
function toggleCapture(record){if(!record)return;var p=loadProgress(),id=record.id||record;if(p.captures[id]){delete p.captures[id];p.events.unshift({type:'release',id:id,at:new Date().toISOString()});}else{p.captures[id]={capturedAt:new Date().toISOString(),source:'ui'};p.events.unshift({type:'capture',id:id,at:new Date().toISOString()});}p.events=p.events.slice(0,300);saveProgress(p);return !p.captures[id];}
function pct(list){return list.length?Math.round(list.filter(function(r){return isCaptured(r.id)}).length/list.length*100):0;}
function byId(id){return records.find(function(r){return r.id===id})||records[0]||null;}
function contextRecord(){var c=loadContext();return byId(c.selectedId);}
function resetProgress(){localStorage.removeItem(PROGRESS_KEY);window.location.reload();}
window.ODEDEX={records:records,labels:labels,progressKey:PROGRESS_KEY,contextKey:CONTEXT_KEY,parseId:parseId,loadProgress:loadProgress,saveProgress:saveProgress,loadContext:loadContext,updateContext:updateContext,isCaptured:isCaptured,toggleCapture:toggleCapture,pct:pct,byId:byId,contextRecord:contextRecord,resetProgress:resetProgress,esc:function(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})},label:function(k){return labels[k]||String(k).replace(/[._-]/g,' ')} };
}());
