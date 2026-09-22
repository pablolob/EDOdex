(function () {
  'use strict';

  var O = window.ODEDEX;
  var dom = {
    app: document.getElementById('app'),
    panel: document.getElementById('explorerPanel'),
    title: document.getElementById('explorerTitle'),
    scope: document.getElementById('explorerScope'),
    body: document.getElementById('explorerBody'),
    modes: document.getElementById('explorerModes'),
    close: document.getElementById('closeExplorer'),
    reader: document.getElementById('readerContent')
  };
  var MODE_KEY = 'odedex:archive:explorer-mode';
  var STATE_KEY = 'odedex:archive:exploration-state';
  var MODE_LABELS = {
    similarity: 'Parecidos', difficulty: 'Dificultad', competencies: 'Competencias', coverage: 'Cobertura',
    dependencies: 'Dependencias', chapters: 'Capítulos', families: 'Familias', path: 'Camino', ladder: 'Escalera',
    compare: 'Comparar', contrast: 'Contrastes', content: 'Contenido', references: 'Referencias', personal: 'Mi mapa',
    session: 'Sesión', discover: 'Descubrir', gaps: 'Huecos', history: 'Historial', panorama: 'Panorama',
    constellation: 'Constelación', timeline: 'Línea temporal', activity: 'Actividad'
  };
  var state = {
    mode: 'similarity', scope: 'all', relation: 'exact', competency: '', topic: '', chapter: '', section: '',
    deltaC: 0, deltaT: 1, compareId: '', targetId: '', signature: '', ladderAxis: 'technical', contentFilter: 'all',
    selectedFamily: '', sessionIntent: 'practicar', route: [], discoverSeed: 0, history: [], reference: null, referenceKey: '',
    density: 'comfortable', showLabels: true, focus: 'all'
  };

  function safeJson(value, fallback) { try { return JSON.parse(value); } catch (error) { return fallback; } }
  function text(value) { return String(value == null ? '' : value); }
  function esc(value) { return O && O.esc ? O.esc(value) : text(value).replace(/[&<>"']/g, function (character) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]; }); }
  function records() { return O && Array.isArray(O.records) ? O.records : []; }
  function rawRecords() { return Array.isArray(window.ODEDEX_LIBRARY) ? window.ODEDEX_LIBRARY : []; }
  function rawRecord(record) { return rawRecords().find(function (item) { return item.id === record.id; }) || {}; }
  function arrayField(record, key) { var value = record && record[key]; if (!Array.isArray(value)) value = rawRecord(record)[key]; return Array.isArray(value) ? value : []; }
  function numberField(record, key, fallback) { var value = Number(record && record[key]); return Number.isFinite(value) ? value : fallback; }
  function conceptual(record) { return numberField(record, 'conceptual', numberField(record && record.difficulty, 'conceptual', 1)); }
  function technical(record) { return numberField(record, 'technical', numberField(record && record.difficulty, 'technical', 1)); }
  function competencies(record) { return arrayField(record, 'competencies'); }
  function topics(record) { return arrayField(record, 'topics'); }
  function prerequisites(record) { return arrayField(record, 'prerequisites').concat(arrayField(record, 'hiddenCompetencies')); }
  function status(record) { return text(record && (record.status || record.solutionStatus || 'open')); }
  function title(record) { return text(record && record.title); }
  function chapter(record) { return numberField(record, 'chapter', 1); }
  function section(record) { return numberField(record, 'section', 1); }
  function exercise(record) { return numberField(record, 'exercise', numberField(record, 'exerciseNumber', 0)); }
  function recordNumber(record) { return 'e' + String(exercise(record)).padStart(3, '0'); }
  function label(value) { return O && O.label ? O.label(value) : text(value).replace(/[._-]/g, ' '); }
  function difficulty(record) { return 'C' + conceptual(record) + ' / T' + technical(record); }
  function current() {
    var id = dom.reader && dom.reader.dataset.readerId;
    var context = O && O.loadContext ? O.loadContext() : {};
    return records().find(function (record) { return record.id === id; }) || records().find(function (record) { return record.id === context.selectedId; }) || records()[0] || null;
  }
  function unique(values) { return values.filter(function (value, index) { return value && values.indexOf(value) === index; }); }
  function sortedValues(values) { return unique(values).sort(function (left, right) { return text(left).localeCompare(text(right), 'es', { numeric: true }); }); }
  function overlap(left, right) { return competencies(left).filter(function (value) { return competencies(right).indexOf(value) !== -1; }); }
  function topicOverlap(left, right) { return topics(left).filter(function (value) { return topics(right).indexOf(value) !== -1; }); }
  function exactKey(record) { return competencies(record).slice().sort().join('|') || 'sin competencia'; }
  function familyKey(value) { return text(value).split('.')[0] || 'sin familia'; }
  function scopeMatches(record, source) {
    if (state.scope === 'chapter') return state.chapter ? chapter(record) === Number(state.chapter) : source && chapter(record) === chapter(source);
    if (state.scope === 'section') return state.chapter && state.section ? chapter(record) === Number(state.chapter) && section(record) === Number(state.section) : source && chapter(record) === chapter(source) && section(record) === section(source);
    if (state.scope === 'source') return source && text(record.source || record.sourceKey) === text(source.source || source.sourceKey);
    return true;
  }
  function personalData() { return safeJson(localStorage.getItem('odedex:v3:user-data'), { records: {}, events: [] }) || { records: {}, events: [] }; }
  function personalRecord(id) { var data = personalData(); return data.records && data.records[id] ? data.records[id] : {}; }
  function captured(record) { return O && O.isCaptured ? O.isCaptured(record.id) : Boolean(personalRecord(record.id).capturedAt); }
  function starred(record) { return Boolean(personalRecord(record.id).starred); }
  function savedState() {
    var saved = safeJson(localStorage.getItem(STATE_KEY), {});
    if (!saved || typeof saved !== 'object') return;
    Object.keys(state).forEach(function (key) { if (saved[key] !== undefined) state[key] = saved[key]; });
    state.route = Array.isArray(state.route) ? state.route : [];
    state.history = Array.isArray(state.history) ? state.history : [];
  }
  function persistState() {
    var copy = {};
    Object.keys(state).forEach(function (key) { if (key !== 'reference') copy[key] = state[key]; });
    try { localStorage.setItem(STATE_KEY, JSON.stringify(copy)); } catch (error) {}
  }
  function setMode(mode) { if (!MODE_LABELS[mode]) return; state.mode = mode; state.reference = null; persistState(); try { localStorage.setItem(MODE_KEY, mode); } catch (error) {} render(); }
  function setContext(record) {
    if (!record || !O || !O.updateContext) return;
    O.updateContext({ selectedId: record.id, chapter: chapter(record), section: section(record), competency: competencies(record)[0] || '' });
  }
  function openRecord(id) {
    var record = records().find(function (item) { return item.id === id; });
    if (!record) return;
    setContext(record);
    state.history = [record.id].concat(state.history.filter(function (item) { return item !== record.id; })).slice(0, 24);
    persistState();
    window.dispatchEvent(new CustomEvent('odedex:explorer-open', { detail: { id: record.id } }));
  }
  function selectedCompetency(source) { return state.competency || (source && competencies(source)[0]) || allCompetencies()[0] || ''; }
  function allCompetencies() { return sortedValues(records().reduce(function (all, record) { return all.concat(competencies(record)); }, [])); }
  function allTopics() { return sortedValues(records().reduce(function (all, record) { return all.concat(topics(record)); }, [])); }
  function allChapters() { return sortedValues(records().map(chapter)); }
  function chapterLabel(value) { var record = records().find(function (item) { return chapter(item) === Number(value); }); return record && record.chapterTitle ? record.chapterTitle : 'Capítulo ' + value; }
  function focusMatches(record) {
    if (state.focus === 'captured') return captured(record);
    if (state.focus === 'starred') return starred(record);
    if (state.focus === 'unseen') return !captured(record);
    return true;
  }
  function viewRecords(list) { return list.filter(focusMatches); }
  function recordsForCompetency(value) { return viewRecords(records().filter(function (record) { return competencies(record).indexOf(value) !== -1; })); }
  function relationScore(source, candidate) {
    var shared = overlap(source, candidate).length;
    var sharedTopics = topicOverlap(source, candidate).length;
    var dC = Math.abs(conceptual(source) - conceptual(candidate));
    var dT = Math.abs(technical(source) - technical(candidate));
    var score = shared * 50 + sharedTopics * 16 + (exactKey(source) === exactKey(candidate) ? 80 : 0);
    if (chapter(source) === chapter(candidate)) score += 8;
    if (section(source) === section(candidate)) score += 12;
    return { score: score - (dC + dT) * 7, shared: overlap(source, candidate), topics: topicOverlap(source, candidate), dC: dC, dT: dT };
  }
  function candidates(source) { return viewRecords(records().filter(function (record) { return (!source || record.id !== source.id) && scopeMatches(record, source); })); }
  function reason(source, record, preferred) {
    var relation = relationScore(source, record);
    var parts = [];
    if (preferred === 'exact' && exactKey(source) === exactKey(record)) parts.push('misma huella de competencias');
    else if (relation.shared.length) parts.push('comparte ' + relation.shared.slice(0, 2).map(label).join(', '));
    if (state.topic && topics(record).indexOf(state.topic) !== -1) parts.push('mismo tema');
    if (relation.dT) parts.push((relation.dT > 0 ? '+' : '') + relation.dT + ' técnica');
    if (relation.dC) parts.push((relation.dC > 0 ? '+' : '') + relation.dC + ' conceptual');
    if (chapter(source) === chapter(record)) parts.push('mismo capítulo');
    return parts.slice(0, 3).join(' · ') || 'conexión sugerida';
  }
  function scoreSimilarity(source, record) {
    var relation = relationScore(source, record);
    var targetC = Math.max(1, Math.min(4, conceptual(source) + Number(state.deltaC || 0)));
    var targetT = Math.max(1, Math.min(4, technical(source) + Number(state.deltaT || 0)));
    var score = relation.score - Math.abs(conceptual(record) - targetC) * 22 - Math.abs(technical(record) - targetT) * 22;
    if (state.competency && competencies(record).indexOf(state.competency) === -1) score -= 140;
    if (state.topic && topics(record).indexOf(state.topic) === -1) score -= 100;
    return score;
  }
  function matchedSimilarity(source) {
    var list = candidates(source).slice().sort(function (left, right) { return scoreSimilarity(source, right) - scoreSimilarity(source, left) || left.id.localeCompare(right.id, 'es', { numeric: true }); });
    if (state.relation === 'exact') list = list.filter(function (record) { return exactKey(record) === exactKey(source); });
    if (state.relation === 'shared') list = list.filter(function (record) { return overlap(source, record).length; });
    if (state.relation === 'topic') list = list.filter(function (record) { return topicOverlap(source, record).length; });
    return list.slice(0, 18);
  }
  function actionButton(action, value, caption) { return '<button class="lab-button lab-button-small" type="button" data-explorer-action="' + esc(action) + '" data-explorer-value="' + esc(value || '') + '">' + esc(caption) + '</button>'; }
  function displayControls() {
    var density = state.density === 'compact' ? 'compacta' : 'aireada';
    var labelsText = state.showLabels ? 'etiquetas sí' : 'etiquetas no';
    var focusLabels = { all: 'todo', unseen: 'sin capturar', captured: 'capturadas', starred: 'favoritas' };
    return '<div class="lab-display-controls"><span class="lab-toolbar-label">composición</span>' + actionButton('density', state.density === 'compact' ? 'comfortable' : 'compact', density) + actionButton('labels', '', labelsText) + '<label class="lab-control"><span>foco</span><select data-explorer-select="focus"><option value="all"' + (state.focus === 'all' ? ' selected' : '') + '>todo</option><option value="unseen"' + (state.focus === 'unseen' ? ' selected' : '') + '>sin capturar</option><option value="captured"' + (state.focus === 'captured' ? ' selected' : '') + '>capturadas</option><option value="starred"' + (state.focus === 'starred' ? ' selected' : '') + '>favoritas</option></select></label><span class="lab-focus-readout">' + esc(focusLabels[state.focus]) + '</span></div>';
  }
  function recordCard(record, why, options) {
    options = options || {};
    var routeAction = state.route.indexOf(record.id) === -1 ? actionButton('route-add', record.id, '+ sesión') : actionButton('route-remove', record.id, 'quitar');
    var compare = actionButton('compare', record.id, 'comparar');
    var extra = options.noActions ? '' : '<div class="lab-card-actions">' + routeAction + compare + '</div>';
    return '<article class="lab-record' + (record.id === (current() && current().id) ? ' is-current' : '') + '"><button class="lab-record-main" type="button" data-explorer-open="' + esc(record.id) + '"><span class="lab-record-id">' + esc(recordNumber(record)) + '</span><span class="lab-record-title">' + esc(title(record)) + '</span><span class="lab-record-why">' + esc(why || difficulty(record)) + '</span></button><span class="lab-record-meta">' + esc(difficulty(record)) + ' · ' + esc(status(record)) + '</span>' + extra + '</article>';
  }
  function group(titleText, content, count) { return '<section class="lab-section"><div class="lab-section-title"><h3>' + esc(titleText) + '</h3><span>' + esc(count == null ? '' : count) + '</span></div>' + content + '</section>'; }
  function chips(values, action, selected) { return sortedValues(values).map(function (value) { return '<button class="lab-chip' + (value === selected ? ' is-selected' : '') + '" type="button" data-explorer-action="' + esc(action) + '" data-explorer-value="' + esc(value) + '">' + esc(label(value)) + '</button>'; }).join(''); }
  function scopeControl() {
    return '<label class="lab-control"><span>alcance</span><select data-explorer-select="scope"><option value="all"' + (state.scope === 'all' ? ' selected' : '') + '>biblioteca</option><option value="source"' + (state.scope === 'source' ? ' selected' : '') + '>misma fuente</option><option value="chapter"' + (state.scope === 'chapter' ? ' selected' : '') + '>mismo capítulo</option><option value="section"' + (state.scope === 'section' ? ' selected' : '') + '>misma sección</option></select></label>';
  }
  function toolbar(source, extra) {
    return '<div class="lab-toolbar"><div class="lab-toolbar-line"><span class="lab-toolbar-label">partir de</span><strong>' + esc(source ? recordNumber(source) + ' · ' + title(source) : 'la biblioteca') + '</strong></div><div class="lab-toolbar-controls">' + scopeControl() + (extra || '') + '<button class="lab-button lab-button-small" type="button" data-explorer-action="reset">limpiar selección</button></div>' + displayControls() + '</div>';
  }
  function frame(source, kicker, description, content, extra) {
    return '<div class="lab-space lab-density-' + esc(state.density) + '"><header class="lab-intro"><p class="lab-kicker">' + esc(kicker) + '</p><h3>' + esc(MODE_LABELS[state.mode]) + '</h3><p>' + esc(description) + '</p></header>' + toolbar(source, extra) + content + '</div>';
  }
  function plot(source, list, titleText) {
    var width = 620, height = 285, left = 48, top = 25, right = 24, bottom = 42;
    function x(record) { return left + ((conceptual(record) - 1) / 3) * (width - left - right); }
    function y(record) { return top + (1 - ((technical(record) - 1) / 3)) * (height - top - bottom); }
    var grid = [1, 2, 3, 4].map(function (value) { return '<line class="lab-grid-line" x1="' + x({ conceptual: value, technical: 1 }) + '" y1="' + top + '" x2="' + x({ conceptual: value, technical: 1 }) + '" y2="' + (height - bottom) + '"></line><line class="lab-grid-line" x1="' + left + '" y1="' + y({ conceptual: 1, technical: value }) + '" x2="' + (width - right) + '" y2="' + y({ conceptual: 1, technical: value }) + '"></line><text class="lab-axis-label" x="' + (x({ conceptual: value, technical: 1 }) - 4) + '" y="' + (height - 19) + '">C' + value + '</text><text class="lab-axis-label" x="' + (left - 25) + '" y="' + (y({ conceptual: 1, technical: value }) + 3) + '">T' + value + '</text>'; }).join('');
    var pointCounts = {};
    var nodes = list.slice(0, 80).map(function (record) { var selected = source && source.id === record.id; var key = conceptual(record) + '|' + technical(record); var count = pointCounts[key] || 0; pointCounts[key] = count + 1; var offsetX = ((count % 5) - 2) * 7; var offsetY = (Math.floor(count / 5) % 2) * 9; return '<g class="lab-plot-node' + (selected ? ' is-current' : '') + '"><circle data-explorer-open="' + esc(record.id) + '" tabindex="0" role="button" aria-label="Abrir ' + esc(title(record)) + '" cx="' + (x(record) + offsetX) + '" cy="' + (y(record) - offsetY) + '" r="' + (selected ? 9 : 5) + '"></circle>' + (state.showLabels ? '<text pointer-events="none" x="' + (x(record) + offsetX + 7) + '" y="' + (y(record) - offsetY - 7) + '">' + esc(recordNumber(record)) + '</text>' : '') + '</g>'; }).join('');
    return '<section class="lab-plot-card"><div class="lab-section-title"><h3>' + esc(titleText || 'coordenadas de dificultad') + '</h3><span>' + list.length + ' ejercicios</span></div><svg class="lab-plot" viewBox="0 0 ' + width + ' ' + height + '" role="img" aria-label="Ejercicios situados por dificultad conceptual y técnica">' + grid + '<line class="lab-axis" x1="' + left + '" y1="' + (height - bottom) + '" x2="' + (width - right) + '" y2="' + (height - bottom) + '"></line><line class="lab-axis" x1="' + left + '" y1="' + top + '" x2="' + left + '" y2="' + (height - bottom) + '"></line>' + nodes + '<text class="lab-axis-name" x="' + (width / 2 - 30) + '" y="' + (height - 4) + '">dificultad conceptual</text><text class="lab-axis-name" transform="rotate(-90)" x="-' + (height / 2 + 35) + '" y="15">dificultad técnica</text></svg></section>';
  }
  function barChart(entries, titleText, action) {
    if (!entries.length) return '<p class="lab-empty">No hay datos para este foco.</p>';
    var width = 620, height = 205, left = 28, top = 22, right = 14, bottom = 43, max = Math.max.apply(null, entries.map(function (entry) { return entry.value; }).concat([1]));
    var slot = (width - left - right) / entries.length;
    var bars = entries.map(function (entry, index) { var barHeight = (entry.value / max) * (height - top - bottom); var x = left + index * slot + Math.max(2, slot * .15); var y = height - bottom - barHeight; var barWidth = Math.max(8, slot * .7); return '<g class="lab-bar-node"><rect data-explorer-action="' + esc(action || '') + '" data-explorer-value="' + esc(entry.key) + '" tabindex="0" role="button" aria-label="' + esc(entry.label + ': ' + entry.value) + '" x="' + x + '" y="' + y + '" width="' + barWidth + '" height="' + Math.max(2, barHeight) + '" rx="2"></rect>' + (state.showLabels ? '<text class="lab-bar-value" x="' + (x + barWidth / 2) + '" y="' + (y - 5) + '">' + entry.value + '</text><text class="lab-bar-label" x="' + (x + barWidth / 2) + '" y="' + (height - 25) + '">' + esc(entry.label) + '</text>' : '') + '</g>'; }).join('');
    return '<section class="lab-chart-card"><div class="lab-section-title"><h3>' + esc(titleText) + '</h3><span>máximo ' + max + '</span></div><svg class="lab-bar-chart" viewBox="0 0 ' + width + ' ' + height + '" role="img" aria-label="' + esc(titleText) + '"><line class="lab-axis" x1="' + left + '" y1="' + (height - bottom) + '" x2="' + (width - right) + '" y2="' + (height - bottom) + '"></line><line class="lab-axis" x1="' + left + '" y1="' + top + '" x2="' + left + '" y2="' + (height - bottom) + '"></line>' + bars + '</svg></section>';
  }
  function donutChart(entries, titleText, action) {
    var total = entries.reduce(function (sum, entry) { return sum + entry.value; }, 0) || 1;
    var colors = ['var(--accent)', 'var(--capture)', 'var(--warning)', 'var(--danger)', 'var(--line-strong)'];
    var offset = 0;
    var rings = entries.map(function (entry, index) { var percent = entry.value / total * 100; var ring = '<circle class="lab-donut-ring" cx="62" cy="62" r="39" pathLength="100" stroke="' + colors[index % colors.length] + '" stroke-dasharray="' + percent + ' ' + (100 - percent) + '" stroke-dashoffset="-' + offset + '"></circle>'; offset += percent; return ring; }).join('');
    var legend = entries.map(function (entry, index) { var tag = action ? 'button type="button" data-explorer-action="' + esc(action) + '" data-explorer-value="' + esc(entry.key) + '"' : 'span'; return '<' + tag + '><i style="background:' + colors[index % colors.length] + '"></i>' + esc(entry.label) + ' <strong>' + entry.value + '</strong></' + (action ? 'button' : 'span') + '>'; }).join('');
    return '<section class="lab-chart-card lab-donut-card"><div class="lab-section-title"><h3>' + esc(titleText) + '</h3><span>' + total + ' fichas</span></div><div class="lab-donut-layout"><svg class="lab-donut" viewBox="0 0 124 124" role="img" aria-label="' + esc(titleText) + '"><circle class="lab-donut-base" cx="62" cy="62" r="39"></circle>' + rings + '<text x="62" y="59">' + total + '</text><text x="62" y="72">total</text></svg><div class="lab-donut-legend">' + legend + '</div></div></section>';
  }
  function networkChart(source, list, titleText) {
    if (!source) return '<p class="lab-empty">Selecciona un ejercicio para desplegar la constelación.</p>';
    var width = 620, height = 315, cx = 310, cy = 152, radius = 108, items = list.slice(0, 12);
    var points = items.map(function (record, index) { var angle = -Math.PI / 2 + (Math.PI * 2 * index / Math.max(items.length, 1)); return { record: record, x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius }; });
    var edges = points.map(function (point) { return '<line class="lab-network-edge" x1="' + cx + '" y1="' + cy + '" x2="' + point.x + '" y2="' + point.y + '"></line>'; }).join('');
    var nodes = points.map(function (point) { return '<g class="lab-network-node"><circle data-explorer-open="' + esc(point.record.id) + '" tabindex="0" role="button" aria-label="Abrir ' + esc(title(point.record)) + '" cx="' + point.x + '" cy="' + point.y + '" r="18"></circle>' + (state.showLabels ? '<text x="' + point.x + '" y="' + (point.y + 3) + '">' + esc(recordNumber(point.record)) + '</text>' : '') + '</g>'; }).join('');
    return '<section class="lab-chart-card"><div class="lab-section-title"><h3>' + esc(titleText) + '</h3><span>' + items.length + ' conexiones</span></div><svg class="lab-network" viewBox="0 0 ' + width + ' ' + height + '" role="img" aria-label="' + esc(titleText) + '">' + edges + nodes + '<g class="lab-network-center"><circle cx="' + cx + '" cy="' + cy + '" r="30"></circle><text x="' + cx + '" y="' + (cy + 4) + '">' + esc(recordNumber(source)) + '</text></g></svg></section>';
  }
  function timelineChart(source) {
    var chapters = allChapters(), width = 620, height = 225, left = 30, right = 20, y = 104, span = width - left - right;
    var nodes = chapters.map(function (value, index) { var x = left + (chapters.length === 1 ? span / 2 : index / (chapters.length - 1) * span); var items = viewRecords(records().filter(function (record) { return chapter(record) === Number(value); })); var currentChapter = source && chapter(source) === Number(value); return '<g class="lab-timeline-node' + (currentChapter ? ' is-current' : '') + '"><line class="lab-timeline-stem" x1="' + x + '" y1="' + y + '" x2="' + x + '" y2="' + (y - 35 - Math.min(45, items.length * 2)) + '"></line><circle data-explorer-action="chapter" data-explorer-value="' + esc(value) + '" tabindex="0" role="button" aria-label="Capítulo ' + value + ', ' + items.length + ' ejercicios" cx="' + x + '" cy="' + y + '" r="' + (currentChapter ? 12 : 9) + '"></circle>' + (state.showLabels ? '<text x="' + x + '" y="' + (y + 29) + '">c' + value + '</text><text class="lab-timeline-count" x="' + x + '" y="' + (y - 43 - Math.min(45, items.length * 2)) + '">' + items.length + '</text>' : '') + '</g>'; }).join('');
    return '<section class="lab-chart-card"><div class="lab-section-title"><h3>densidad por capítulo</h3><span>pulsa un nodo para acotar</span></div><svg class="lab-timeline" viewBox="0 0 ' + width + ' ' + height + '" role="img" aria-label="Línea temporal de capítulos y densidad de ejercicios"><line class="lab-timeline-axis" x1="' + left + '" y1="' + y + '" x2="' + (width - right) + '" y2="' + y + '"></line>' + nodes + '</svg></section>';
  }
  function activityGrid() {
    var list = viewRecords(records()), cells = list.map(function (record) { var level = captured(record) ? 2 : (starred(record) ? 1 : 0); return '<button class="lab-activity-cell level-' + level + '" type="button" data-explorer-open="' + esc(record.id) + '" title="' + esc(recordNumber(record) + ' · ' + title(record)) + '"><span>' + (state.showLabels ? esc(recordNumber(record)) : '') + '</span></button>'; }).join('');
    return '<section class="lab-chart-card"><div class="lab-section-title"><h3>mapa de actividad</h3><span>capturas y favoritos</span></div><div class="lab-activity-grid">' + cells + '</div><div class="lab-activity-key"><span><i class="level-0"></i>sin marcar</span><span><i class="level-1"></i>favorita</span><span><i class="level-2"></i>capturada</span></div></section>';
  }
  function countEntries(values, keyLabel) {
    return values.map(function (value) { return { key: value, label: keyLabel ? keyLabel(value) : label(value), value: 0 }; }).map(function (entry) { entry.value = viewRecords(records()).filter(function (record) { return keyLabel === chapterLabel ? chapter(record) === Number(entry.key) : keyLabel === status ? status(record) === entry.key : competencies(record).indexOf(entry.key) !== -1; }).length; return entry; });
  }
  function renderPanorama(source) {
    var list = viewRecords(records());
    var chapterEntries = countEntries(allChapters(), chapterLabel);
    var statusEntries = countEntries(['verified', 'draft', 'open', 'blocked'], status).filter(function (entry) { return entry.value; });
    var competencyEntries = allCompetencies().map(function (value) { return { key: value, label: label(value), value: recordsForCompetency(value).length }; }).sort(function (a, b) { return b.value - a.value; }).slice(0, 7);
    return frame(source, 'ver el sistema de una vez', 'Una superficie de orientación para detectar densidades, estados y lugares vacíos antes de entrar en una relación concreta.', plot(source, list, 'panorama de dificultad') + '<div class="lab-chart-grid">' + barChart(chapterEntries, 'densidad por capítulo', 'chapter-filter') + donutChart(statusEntries, 'estado editorial', 'status-filter') + '</div>' + barChart(competencyEntries, 'competencias con más presencia', 'competency-filter') + timelineChart(source));
  }
  function renderConstellation(source) {
    var related = candidates(source).slice().sort(function (a, b) { return relationScore(source, b).score - relationScore(source, a).score; });
    var competencyEntries = allCompetencies().map(function (value) { return { key: value, label: label(value), value: recordsForCompetency(value).length }; }).sort(function (a, b) { return b.value - a.value; }).slice(0, 8);
    return frame(source, 'ver las conexiones', 'La ficha activa ocupa el centro; alrededor aparecen ejercicios relacionados por competencias, temas y proximidad. Cada nodo abre una nueva lectura.', networkChart(source, related, 'constelación desde ' + recordNumber(source)) + barChart(competencyEntries, 'peso de las competencias', 'competency-filter') + group('vecindario navegable', related.slice(0, 8).map(function (record) { return recordCard(record, reason(source, record)); }).join(''), Math.min(related.length, 8)));
  }
  function renderTimeline(source) {
    var list = viewRecords(records());
    return frame(source, 'leer en el tiempo', 'La secuencia editorial deja ver concentración, saltos y capítulos con los que todavía no has trabajado.', timelineChart(source) + plot(source, list, 'dificultad a lo largo del recorrido') + group('capítulos disponibles', allChapters().map(function (value) { var count = list.filter(function (record) { return chapter(record) === Number(value); }).length; return '<button class="lab-section-row" type="button" data-explorer-action="chapter-filter" data-explorer-value="' + esc(value) + '"><span>capítulo ' + value + '</span><strong>' + esc(chapterLabel(value)) + '</strong><small>' + count + ' ejercicios visibles</small></button>'; }).join(''), allChapters().length));
  }
  function renderActivity(source) {
    var list = viewRecords(records());
    var entries = [{ key: 'captured', label: 'capturadas', value: list.filter(captured).length }, { key: 'starred', label: 'favoritas', value: list.filter(starred).length }, { key: 'unseen', label: 'sin marcar', value: list.filter(function (record) { return !captured(record) && !starred(record); }).length }];
    var chapterEntries = allChapters().map(function (value) { return { key: value, label: 'c' + value, value: list.filter(function (record) { return chapter(record) === Number(value) && captured(record); }).length }; });
    return frame(source, 'seguir tu huella', 'La actividad no pretende medir dominio. Muestra qué has tocado y permite volver directamente a cualquier ficha.', activityGrid() + '<div class="lab-chart-grid">' + donutChart(entries, 'estado de tu biblioteca', 'focus-filter') + barChart(chapterEntries, 'capturas por capítulo', 'chapter-filter') + '</div>' + group('últimas fichas visitadas', state.history.map(function (id) { var record = records().find(function (item) { return item.id === id; }); return record ? recordCard(record, 'visitado', { noActions: true }) : ''; }).filter(Boolean).join(''), state.history.length));
  }
  function renderSimilarity(source) {
    var list = matchedSimilarity(source);
    var rel = '<div class="lab-segmented">' + ['exact', 'shared', 'topic', 'any'].map(function (value) { return '<button class="lab-segment' + (state.relation === value ? ' is-selected' : '') + '" type="button" data-explorer-action="relation" data-explorer-value="' + value + '">' + ({ exact: 'misma huella', shared: 'competencia común', topic: 'tema común', any: 'cualquier conexión' }[value]) + '</button>'; }).join('') + '</div>';
    var adjustment = '<div class="lab-adjustments"><span>respecto a este ejercicio</span>' + actionButton('adjust-c', '-1', '-1C') + actionButton('adjust-c', '0', 'igual C') + actionButton('adjust-c', '1', '+1C') + actionButton('adjust-t', '-1', '-1T') + actionButton('adjust-t', '0', 'igual T') + actionButton('adjust-t', '1', '+1T') + '</div>';
    var selectors = '<div class="lab-choice-block"><span class="lab-toolbar-label">afinar por competencia</span><div class="lab-chip-row">' + chips(competencies(source), 'competency', state.competency) + '</div><span class="lab-toolbar-label">afinar por tema</span><div class="lab-chip-row">' + chips(topics(source), 'topic', state.topic) + '</div></div>';
    var cards = list.length ? list.map(function (record) { return recordCard(record, reason(source, record, state.relation)); }).join('') : '<p class="lab-empty">No hay coincidencias con esta combinación. Cambia alcance, relación o salto de dificultad.</p>';
    return frame(source, 'encontrar el siguiente ejercicio', 'Parte de la ficha actual y decide qué debe conservarse y qué debe cambiar. La lista y el plano usan exactamente la misma selección.', '<section class="lab-controls-card">' + rel + adjustment + selectors + '</section>' + plot(source, list, 'misma huella, otra dificultad') + group('resultados accionables', cards, list.length));
  }
  function renderDifficulty(source) {
    var comp = selectedCompetency(source);
    var list = recordsForCompetency(comp).filter(function (record) { return scopeMatches(record, source); });
    var compControls = '<span class="lab-toolbar-label">competencia del eje</span><div class="lab-chip-row">' + chips(allCompetencies(), 'competency', comp) + '</div>';
    var cards = list.slice().sort(function (a, b) { return conceptual(a) + technical(a) - conceptual(b) - technical(b) || exercise(a) - exercise(b); }).map(function (record) { return recordCard(record, record.id === (source && source.id) ? 'ficha actual' : 'misma competencia · ' + difficulty(record)); }).join('');
    return frame(source, 'ver la progresión', 'El plano cartesiano responde a una pregunta concreta: qué ejercicios comparten una competencia y dónde están los más fáciles o difíciles.', '<section class="lab-controls-card">' + compControls + '</section>' + plot(source, list, 'competencia: ' + label(comp)) + group('ejercicios en esta coordenada conceptual', cards, list.length));
  }
  function renderCompetencies(source) {
    var families = sortedValues(allCompetencies().map(familyKey));
    var family = state.selectedFamily || families[0] || '';
    var familyValues = allCompetencies().filter(function (value) { return familyKey(value) === family; });
    var comp = state.competency || familyValues[0] || '';
    var list = recordsForCompetency(comp);
    var tree = '<div class="lab-family-row">' + families.map(function (value) { return '<button class="lab-family' + (value === family ? ' is-selected' : '') + '" type="button" data-explorer-action="family" data-explorer-value="' + esc(value) + '"><strong>' + esc(label(value)) + '</strong><span>' + allCompetencies().filter(function (item) { return familyKey(item) === value; }).length + ' ramas</span></button>'; }).join('') + '</div>';
    var branches = '<div class="lab-branch-list">' + familyValues.map(function (value) { return '<button class="lab-branch' + (value === comp ? ' is-selected' : '') + '" type="button" data-explorer-action="competency" data-explorer-value="' + esc(value) + '"><span>' + esc(label(value)) + '</span><strong>' + recordsForCompetency(value).length + '</strong></button>'; }).join('') + '</div>';
    return frame(source, 'navegar por capacidades', 'Abre una familia, baja hasta una competencia y usa sus ejercicios como una colección navegable. La taxonomía es la estructura, no una etiqueta decorativa.', '<section class="lab-controls-card"><span class="lab-toolbar-label">familias</span>' + tree + '<span class="lab-toolbar-label">competencias de ' + esc(label(family)) + '</span>' + branches + '</section>' + group('fichas de ' + label(comp), list.map(function (record) { return recordCard(record, difficulty(record) + ' · capítulo ' + chapter(record)); }).join(''), list.length));
  }
  function renderCoverage(source) {
    var comps = allCompetencies(), chapters = allChapters();
    var rows = comps.map(function (comp) {
      var cells = chapters.map(function (value) { var list = recordsForCompetency(comp).filter(function (record) { return chapter(record) === Number(value); }); return '<button class="lab-matrix-cell' + (list.length ? ' has-data' : '') + '" type="button" data-explorer-action="coverage-cell" data-explorer-value="' + esc(comp + '|' + value) + '" title="' + esc(label(comp) + ', capítulo ' + value + ': ' + list.length + ' ejercicios') + '">' + (list.length || '·') + '</button>'; }).join('');
      return '<div class="lab-matrix-row"><button class="lab-matrix-label" type="button" data-explorer-action="competency" data-explorer-value="' + esc(comp) + '">' + esc(label(comp)) + '</button>' + cells + '</div>';
    }).join('');
    var head = '<div class="lab-matrix-row lab-matrix-head"><span></span>' + chapters.map(function (value) { return '<span>c' + value + '</span>'; }).join('') + '</div>';
    var top = comps.map(function (value) { return { key: value, label: label(value), value: recordsForCompetency(value).length }; }).sort(function (a, b) { return b.value - a.value; }).slice(0, 8);
    return frame(source, 'ver dónde vive una idea', 'Esta matriz permite seguir una competencia a través del libro: dónde aparece, dónde se repite y qué capítulos todavía no la usan.', '<section class="lab-controls-card"><p class="lab-note">Pulsa una celda para convertir esa combinación competencia + capítulo en una exploración de ejercicios.</p><div class="lab-matrix">' + head + rows + '</div></section>' + barChart(top, 'competencias más extendidas', 'competency-filter'));
  }
  function renderDependencies(source) {
    var comp = selectedCompetency(source), direct = sortedValues(recordsForCompetency(comp).reduce(function (all, record) { return all.concat(prerequisites(record)); }, []));
    var later = allCompetencies().filter(function (value) { return value !== comp && recordsForCompetency(value).some(function (record) { return chapter(record) > (recordsForCompetency(comp)[0] ? chapter(recordsForCompetency(comp)[0]) : 0); }); }).slice(0, 14);
    var incoming = direct.length ? direct.map(function (value) { return '<button class="lab-node-row" type="button" data-explorer-action="competency" data-explorer-value="' + esc(value) + '"><span>prerrequisito declarado</span><strong>' + esc(label(value)) + '</strong></button>'; }).join('') : '<p class="lab-empty">No hay prerrequisitos explícitos en el índice actual. Se muestran después las competencias que aparecen en capítulos posteriores como pistas de continuidad, no como dependencias certificadas.</p>';
    var outgoing = later.map(function (value) { return '<button class="lab-node-row" type="button" data-explorer-action="competency" data-explorer-value="' + esc(value) + '"><span>aparece después</span><strong>' + esc(label(value)) + '</strong></button>'; }).join('');
    return frame(source, 'entender qué sostiene a qué', 'Explora dependencias declaradas y continuidad editorial. Las relaciones inferidas están marcadas como pistas para no confundirlas con una decisión pedagógica validada.', '<section class="lab-controls-card"><span class="lab-toolbar-label">competencia de partida</span><div class="lab-chip-row">' + chips(allCompetencies(), 'competency', comp) + '</div></section>' + group('antes: prerrequisitos declarados', incoming, direct.length) + group('después: posibles continuidades', outgoing, later.length));
  }
  function renderChapters(source) {
    var content = allChapters().map(function (value) {
      var chapterRecords = viewRecords(records()).filter(function (record) { return chapter(record) === Number(value); });
      var sections = sortedValues(chapterRecords.map(section)).map(function (sectionValue) { var sectionRecords = chapterRecords.filter(function (record) { return section(record) === Number(sectionValue); }); return '<button class="lab-section-row" type="button" data-explorer-action="chapter-section" data-explorer-value="' + esc(value + '|' + sectionValue) + '"><span>sección ' + esc(sectionValue) + '</span><strong>' + sectionRecords.length + ' ejercicios</strong><small>' + esc(sortedValues(sectionRecords.reduce(function (all, record) { return all.concat(competencies(record)); }, [])).slice(0, 3).map(label).join(' · ')) + '</small></button>'; }).join('');
      return '<article class="lab-chapter"><button class="lab-chapter-title" type="button" data-explorer-action="chapter" data-explorer-value="' + esc(value) + '"><span>capítulo ' + esc(value) + '</span><strong>' + esc(chapterLabel(value)) + '</strong><em>' + chapterRecords.length + '</em></button>' + sections + '</article>';
    }).join('');
    return frame(source, 'seguir la arquitectura editorial', 'Una navegación longitudinal por capítulos y secciones: útil para saltar de la ficha actual a otra zona del libro sin volver al índice plano.', timelineChart(source) + '<div class="lab-chapter-list">' + content + '</div>');
  }
  function renderFamilies(source) {
    var groups = {};
    records().forEach(function (record) { var key = exactKey(record); groups[key] = groups[key] || []; groups[key].push(record); });
    var keys = Object.keys(groups).sort(function (a, b) { return groups[b].length - groups[a].length || a.localeCompare(b); });
    var content = keys.map(function (key) { var list = groups[key], sample = list.slice(0, 3).map(function (record) { return recordNumber(record); }).join(' · '); return '<button class="lab-family-card' + (state.signature === key ? ' is-selected' : '') + '" type="button" data-explorer-action="signature" data-explorer-value="' + esc(key) + '"><span class="lab-family-card-title">' + esc(key.split('|').map(label).join(' + ')) + '</span><strong>' + list.length + '</strong><small>' + esc(sample + (list.length > 3 ? ' · …' : '')) + '</small></button>'; }).join('');
    var selected = state.signature && groups[state.signature] ? group('ejercicios de esta familia', groups[state.signature].map(function (record) { return recordCard(record, difficulty(record)); }).join(''), groups[state.signature].length) : '';
    return frame(source, 'ver familias, no fichas sueltas', 'Agrupa por combinación exacta de competencias. Así se puede estudiar cómo una misma estructura se repite con otros niveles, capítulos o contextos.', '<div class="lab-family-grid">' + content + '</div>' + selected);
  }
  function bridge(source, target) {
    if (!source || !target) return [];
    var middle = records().filter(function (record) { return record.id !== source.id && record.id !== target.id; }).map(function (record) { return { record: record, score: overlap(source, record).length * 35 + overlap(target, record).length * 35 + topicOverlap(source, record).length * 8 + topicOverlap(target, record).length * 8 - Math.abs(conceptual(record) - conceptual(source)) * 4 - Math.abs(technical(record) - technical(target)) * 4 }; }).sort(function (a, b) { return b.score - a.score; })[0];
    return middle ? [source, middle.record, target] : [source, target];
  }
  function renderPath(source) {
    var target = records().find(function (record) { return record.id === state.targetId; });
    var choices = candidates(source).slice().sort(function (a, b) { return relationScore(source, b).score - relationScore(source, a).score; }).slice(0, 8);
    var chooser = group('elige un destino', choices.map(function (record) { return recordCard(record, reason(source, record), { noActions: true }).replace('data-explorer-open', 'data-explorer-target'); }).join(''), choices.length);
    if (!target) return frame(source, 'conectar dos puntos', 'Elige una ficha de destino y la interfaz construirá un recorrido intermedio usando competencias compartidas, temas y distancia de dificultad.', chooser);
    var steps = bridge(source, target);
    var route = steps.map(function (record, index) { return '<div class="lab-path-step"><span>' + (index + 1) + '</span><button type="button" data-explorer-open="' + esc(record.id) + '"><strong>' + esc(recordNumber(record)) + '</strong><em>' + esc(title(record)) + '</em><small>' + esc(difficulty(record)) + '</small></button></div>'; }).join('<div class="lab-path-arrow">↓</div>');
    return frame(source, 'conectar dos puntos', 'Camino sugerido entre la ficha activa y el destino. Cada paso se puede abrir y convertir en nuevo punto de partida.', '<section class="lab-target-card"><span>destino</span><strong>' + esc(recordNumber(target) + ' · ' + title(target)) + '</strong><button class="lab-button lab-button-small" type="button" data-explorer-action="clear-target">cambiar destino</button></section><div class="lab-path">' + route + '</div>');
  }
  function renderLadder(source) {
    var comp = selectedCompetency(source), list = recordsForCompetency(comp), axis = state.ladderAxis;
    var columns = [1, 2, 3, 4].map(function (level) { var items = list.filter(function (record) { return (axis === 'conceptual' ? conceptual(record) : technical(record)) === level; }); return '<section class="lab-ladder-column"><header><strong>' + (axis === 'conceptual' ? 'C' : 'T') + level + '</strong><span>' + items.length + '</span></header>' + items.slice(0, 8).map(function (record) { return '<button type="button" data-explorer-open="' + esc(record.id) + '"><b>' + esc(recordNumber(record)) + '</b><small>' + esc(title(record)) + '</small></button>'; }).join('') + (items.length > 8 ? '<small class="lab-more">+' + (items.length - 8) + ' más</small>' : '') + '</section>'; }).join('');
    return frame(source, 'subir un peldaño', 'Elige una competencia y avanza por niveles. La escalera convierte “más difícil” en una secuencia de ejercicios reales.', '<section class="lab-controls-card"><span class="lab-toolbar-label">competencia</span><div class="lab-chip-row">' + chips(allCompetencies(), 'competency', comp) + '</div><div class="lab-segmented"><button class="lab-segment' + (axis === 'technical' ? ' is-selected' : '') + '" type="button" data-explorer-action="ladder-axis" data-explorer-value="technical">técnica</button><button class="lab-segment' + (axis === 'conceptual' ? ' is-selected' : '') + '" type="button" data-explorer-action="ladder-axis" data-explorer-value="conceptual">conceptual</button></div></section><div class="lab-ladder">' + columns + '</div>');
  }
  function compareTable(source, target) {
    var fields = [['dificultad', difficulty(source), difficulty(target)], ['capítulo', chapter(source), chapter(target)], ['sección', section(source), section(target)], ['estado', status(source), status(target)], ['competencias', competencies(source).map(label).join(' · '), competencies(target).map(label).join(' · ')], ['temas', topics(source).map(label).join(' · ') || '—', topics(target).map(label).join(' · ') || '—']];
    return '<div class="lab-compare-table">' + fields.map(function (field) { return '<div class="lab-compare-row"><span>' + esc(field[0]) + '</span><strong>' + esc(field[1]) + '</strong><strong>' + esc(field[2]) + '</strong></div>'; }).join('') + '</div>';
  }
  function renderCompare(source) {
    var target = records().find(function (record) { return record.id === state.compareId; });
    var choices = candidates(source).slice().sort(function (a, b) { return relationScore(source, b).score - relationScore(source, a).score; }).slice(0, 10);
    if (!target) return frame(source, 'poner dos ideas lado a lado', 'Elige un espejo desde cualquier resultado. La comparación mantiene la ficha actual y muestra qué coincide y qué cambia.', group('elige una ficha para comparar', choices.map(function (record) { return recordCard(record, reason(source, record), { noActions: true }).replace('data-explorer-open', 'data-explorer-compare'); }).join(''), choices.length));
    var onlySource = competencies(source).filter(function (value) { return competencies(target).indexOf(value) === -1; });
    var onlyTarget = competencies(target).filter(function (value) { return competencies(source).indexOf(value) === -1; });
    return frame(source, 'comparar para entender', 'La comparación no resume en una gráfica: deja visibles las decisiones que cambian entre dos ejercicios.', '<section class="lab-compare-head"><div><span>actual</span><strong>' + esc(recordNumber(source) + ' · ' + title(source)) + '</strong></div><div><span>espejo</span><strong>' + esc(recordNumber(target) + ' · ' + title(target)) + '</strong></div><button class="lab-button" type="button" data-explorer-action="clear-compare">elegir otro</button></section>' + compareTable(source, target) + '<div class="lab-compare-columns"><section><h3>solo en la actual</h3><p>' + esc(onlySource.map(label).join(' · ') || 'nada') + '</p></section><section><h3>solo en el espejo</h3><p>' + esc(onlyTarget.map(label).join(' · ') || 'nada') + '</p></section></div>');
  }
  function renderContrast(source) {
    var groups = {};
    records().forEach(function (record) { var key = exactKey(record); groups[key] = groups[key] || []; groups[key].push(record); });
    var pairs = Object.keys(groups).reduce(function (all, key) { var list = groups[key]; if (list.length > 1) all.push({ key: key, left: list[0], right: list.slice().sort(function (a, b) { return conceptual(b) + technical(b) - conceptual(a) - technical(a); })[0], count: list.length }); return all; }, []).filter(function (pair) { return pair.left.id !== pair.right.id; }).slice(0, 10);
    var cards = pairs.map(function (pair) { return '<article class="lab-contrast"><header><span>' + esc(pair.count + ' variantes') + '</span><strong>' + esc(pair.key.split('|').map(label).join(' + ')) + '</strong></header><div><button type="button" data-explorer-open="' + esc(pair.left.id) + '"><b>' + esc(recordNumber(pair.left)) + '</b><small>' + esc(difficulty(pair.left) + ' · ' + title(pair.left)) + '</small></button><i>vs</i><button type="button" data-explorer-open="' + esc(pair.right.id) + '"><b>' + esc(recordNumber(pair.right)) + '</b><small>' + esc(difficulty(pair.right) + ' · ' + title(pair.right)) + '</small></button></div></article>'; }).join('');
    return frame(source, 'aprender por contraste', 'Busca familias donde la estructura se conserva pero cambian dificultad, contexto o posición. Abre ambos ejercicios para leer la diferencia.', cards ? '<div class="lab-contrast-list">' + cards + '</div>' : '<p class="lab-empty">Todavía no hay familias con variantes suficientes.</p>');
  }
  function rawReferences(record) { return arrayField(record, 'references'); }
  function renderContent(source) {
    var filters = ['all', 'verified', 'draft', 'open', 'blocked', 'references'];
    var list = viewRecords(records()).filter(function (record) { if (state.contentFilter === 'all') return true; if (state.contentFilter === 'blocked') return Boolean(record.blocked); if (state.contentFilter === 'references') return rawReferences(record).length > 0; return status(record) === state.contentFilter; });
    var buttons = '<div class="lab-segmented">' + filters.map(function (value) { return '<button class="lab-segment' + (state.contentFilter === value ? ' is-selected' : '') + '" type="button" data-explorer-action="content-filter" data-explorer-value="' + value + '">' + ({ all: 'todo', verified: 'verificado', draft: 'borrador', open: 'abierto', blocked: 'bloqueado', references: 'con referencias' }[value]) + '</button>'; }).join('') + '</div>';
    var statusEntries = filters.slice(1, 5).map(function (value) { return { key: value, label: value, value: list.filter(function (record) { return status(record) === value; }).length }; }).filter(function (entry) { return entry.value; });
    return frame(source, 'explorar el material disponible', 'No todas las fichas tienen el mismo grado de desarrollo. Esta vista permite entrar por estado editorial, contenido, referencias o bloqueo.', '<section class="lab-controls-card">' + buttons + '</section>' + donutChart(statusEntries, 'distribución visible', 'status-filter') + group('fichas en este estado', list.slice(0, 20).map(function (record) { return recordCard(record, (record.blocked ? 'bloqueado · ' : '') + (rawReferences(record).length ? 'con referencias · ' : '') + status(record)); }).join(''), list.length));
  }
  function renderReferences(source) {
    var map = {};
    viewRecords(records()).forEach(function (record) { rawReferences(record).forEach(function (reference) { map[reference] = map[reference] || []; map[reference].push(record); }); });
    var keys = Object.keys(map);
    var visibleKeys = state.referenceKey ? keys.filter(function (key) { return key === state.referenceKey; }) : keys;
    var content = visibleKeys.length ? visibleKeys.map(function (key) { var list = map[key]; return '<article class="lab-reference-card"><header><strong>' + esc(key) + '</strong><span>' + list.length + ' usos</span></header><p>Esta referencia conecta ejercicios de la biblioteca.</p><div>' + list.slice(0, 8).map(function (record) { return '<button type="button" data-explorer-open="' + esc(record.id) + '">' + esc(recordNumber(record) + ' · ' + title(record)) + '</button>'; }).join('') + '</div></article>'; }).join('') : '<p class="lab-empty">No hay referencias en el alcance cargado.</p>';
    var entries = keys.map(function (key) { return { key: key, label: key.length > 13 ? key.slice(0, 13) + '…' : key, value: map[key].length }; }).sort(function (a, b) { return b.value - a.value; }).slice(0, 8);
    return frame(source, 'seguir una ecuación por la biblioteca', 'Desde una referencia puedes descubrir qué otros ejercicios la utilizan y volver al texto original sin perder contexto.', barChart(entries, 'referencias más reutilizadas', 'reference-filter') + '<div class="lab-reference-list">' + content + '</div>');
  }
  function renderPersonal(source) {
    var data = personalData(), all = viewRecords(records()), capturedList = all.filter(captured), starredList = all.filter(starred), tagged = all.filter(function (record) { return (personalRecord(record.id).tags || []).length; }), events = Array.isArray(data.events) ? data.events : [];
    var chapters = allChapters().map(function (value) { var list = all.filter(function (record) { return chapter(record) === Number(value); }); var count = capturedList.filter(function (record) { return chapter(record) === Number(value); }).length; return '<div class="lab-personal-bar"><span>c' + value + '</span><i><b style="width:' + (list.length ? Math.round(count / list.length * 100) : 0) + '%"></b></i><strong>' + count + '/' + list.length + '</strong></div>'; }).join('');
    var personalEntries = [{ key: 'captured', label: 'capturadas', value: capturedList.length }, { key: 'starred', label: 'favoritas', value: starredList.length }, { key: 'tagged', label: 'etiquetadas', value: tagged.length }];
    return frame(source, 'hacer tuya la biblioteca', 'Una vista personal y local: qué has guardado, qué has marcado, qué has visitado y qué queda pendiente. No confunde práctica con dominio.', '<div class="lab-personal-stats"><strong>' + capturedList.length + '</strong><span>capturadas</span><strong>' + starredList.length + '</strong><span>favoritas</span><strong>' + tagged.length + '</strong><span>etiquetadas</span><strong>' + events.length + '</strong><span>eventos</span></div>' + '<div class="lab-chart-grid">' + barChart(personalEntries, 'resumen personal', 'focus-filter') + activityGrid() + '</div>' + group('cobertura personal', chapters) + group('favoritos', starredList.slice(0, 8).map(function (record) { return recordCard(record, 'favorito'); }).join('') || '<p class="lab-empty">Aún no hay favoritos.</p>', starredList.length) + group('capturas recientes', capturedList.slice(-8).reverse().map(function (record) { return recordCard(record, 'capturada'); }).join('') || '<p class="lab-empty">Aún no hay capturas.</p>', capturedList.length));
  }
  function renderSession(source) {
    var intentButtons = ['aprender', 'practicar', 'repasar', 'explorar', 'reto'].map(function (value) { return '<button class="lab-segment' + (state.sessionIntent === value ? ' is-selected' : '') + '" type="button" data-explorer-action="intent" data-explorer-value="' + value + '">' + value + '</button>'; }).join('');
    var queue = state.route.map(function (id) { return records().find(function (record) { return record.id === id; }); }).filter(Boolean);
    var generated = candidates(source).slice().sort(function (a, b) { var sa = relationScore(source, a).score + (state.sessionIntent === 'reto' ? conceptual(a) + technical(a) : -(conceptual(a) + technical(a))); var sb = relationScore(source, b).score + (state.sessionIntent === 'reto' ? conceptual(b) + technical(b) : -(conceptual(b) + technical(b))); return sb - sa; }).slice(0, 5);
    return frame(source, 'construir una sesión', 'Elige una intención, genera una cola y modifícala. La sesión es una herramienta de navegación personal, no una lista fija.', '<section class="lab-controls-card"><span class="lab-toolbar-label">qué quieres hacer</span><div class="lab-segmented">' + intentButtons + '</div><div class="lab-adjustments"><span>acciones</span>' + actionButton('session-generate', '', 'generar 5 sugerencias') + actionButton('route-clear', '', 'vaciar sesión') + '</div></section>' + group('tu sesión', queue.length ? queue.map(function (record) { return recordCard(record, 'en cola'); }).join('') : '<p class="lab-empty">La sesión está vacía. Genera sugerencias o añade ejercicios desde cualquier vista.</p>', queue.length) + group('sugerencias para añadir', generated.map(function (record) { return recordCard(record, reason(source, record)); }).join(''), generated.length));
  }
  function renderDiscover(source) {
    var pool = candidates(source).filter(function (record) { return !captured(record); });
    if (!pool.length) pool = candidates(source);
    var index = pool.length ? Math.abs(Number(state.discoverSeed || 0)) % pool.length : 0, chosen = pool[index], alternatives = pool.filter(function (record) { return !chosen || record.id !== chosen.id; }).slice(0, 6);
    return frame(source, 'dejar espacio al azar', 'Descubrimiento controlado: conserva el punto de partida, excluye lo ya capturado y cambia el criterio de sorpresa sin perder navegación.', '<section class="lab-discover-card">' + (chosen ? '<p>te propone</p><h3>' + esc(recordNumber(chosen) + ' · ' + title(chosen)) + '</h3><span>' + esc(reason(source, chosen)) + '</span><div class="lab-card-actions"><button class="lab-button" type="button" data-explorer-open="' + esc(chosen.id) + '">abrir ejercicio</button><button class="lab-button" type="button" data-explorer-action="discover-next">otra sorpresa</button></div>' : '<p class="lab-empty">No hay ejercicios disponibles para descubrir.</p>') + '</section>' + group('otras puertas cercanas', alternatives.map(function (record) { return recordCard(record, reason(source, record)); }).join(''), alternatives.length));
  }
  function renderGaps(source) {
    var comp = selectedCompetency(source), list = recordsForCompetency(comp);
    var cells = [1, 2, 3, 4].map(function (c) { return [1, 2, 3, 4].map(function (t) { var count = list.filter(function (record) { return conceptual(record) === c && technical(record) === t; }).length; return '<button class="lab-gap-cell' + (count ? ' has-data' : '') + '" type="button" data-explorer-action="gap-cell" data-explorer-value="' + c + '|' + t + '" title="C' + c + ' / T' + t + '">' + (count || '·') + '</button>'; }).join(''); }).join('');
    return frame(source, 'encontrar lo que falta', 'Los huecos son combinaciones ausentes dentro de una competencia, no afirmaciones de que el libro deba contenerlas. Pulsa una celda para buscar una alternativa cercana.', '<section class="lab-controls-card"><span class="lab-toolbar-label">competencia</span><div class="lab-chip-row">' + chips(allCompetencies(), 'competency', comp) + '</div><div class="lab-gap-labels"><span></span><span>C1</span><span>C2</span><span>C3</span><span>C4</span></div><div class="lab-gap-grid">' + cells + '</div><p class="lab-note">Filas: dificultad técnica T1–T4. Columnas: dificultad conceptual C1–C4.</p></section>');
  }
  function renderHistory(source) {
    var events = personalData().events || [];
    var historyCards = state.history.map(function (id) { var record = records().find(function (item) { return item.id === id; }); return record ? recordCard(record, 'visitado en esta exploración', { noActions: true }) : ''; }).filter(Boolean).join('');
    var eventCards = events.slice(0, 12).map(function (event) { var record = records().find(function (item) { return item.id === event.id; }); return record ? '<button class="lab-history-row" type="button" data-explorer-open="' + esc(record.id) + '"><span>' + esc(event.type || 'evento') + '</span><strong>' + esc(recordNumber(record) + ' · ' + title(record)) + '</strong><small>' + esc(event.at || '') + '</small></button>' : ''; }).join('');
    return frame(source, 'volver sobre tus pasos', 'El historial convierte los saltos de exploración en una ruta recuperable. Los eventos personales se mantienen locales al navegador.', group('saltos recientes', historyCards || '<p class="lab-empty">Todavía no hay saltos en esta sesión.</p>', state.history.length) + group('actividad guardada', eventCards || '<p class="lab-empty">Todavía no hay eventos personales.</p>', events.length));
  }
  function renderReferencePanel(reference) {
    return '<div class="reference-view explorer-reference-view"><p class="reference-view-kicker">referencia citada</p><h3 class="reference-view-title">' + esc(reference.locator || reference.id) + '</h3><p class="reference-view-meta">' + esc(reference.type || 'referencia') + '</p><div class="reference-view-body"><div class="reference-transcription"><p>' + esc(reference.transcription || reference.caption || 'Referencia disponible en el material editorial.') + '</p><p class="reference-view-meta">Fuente: ' + esc(reference.sourceKey || 'sin especificar') + '</p></div><div class="reader-actions"><button class="reader-action primary" type="button" data-explorer-reference-back>volver al ejercicio</button></div></div></div>';
  }
  function render() {
    if (!dom.body || !dom.panel) return;
    var source = current();
    document.querySelectorAll('[data-explorer-mode]').forEach(function (button) { var selected = !state.reference && button.dataset.explorerMode === state.mode; button.classList.toggle('is-active', selected); button.setAttribute('aria-selected', String(selected)); });
    dom.title.textContent = state.reference ? 'Referencia' : MODE_LABELS[state.mode];
    dom.scope.textContent = 'laboratorio · ' + records().length + ' fichas · selección editable';
    if (state.reference) { dom.body.innerHTML = renderReferencePanel(state.reference); return; }
    var renderers = { similarity: renderSimilarity, difficulty: renderDifficulty, competencies: renderCompetencies, coverage: renderCoverage, dependencies: renderDependencies, chapters: renderChapters, families: renderFamilies, path: renderPath, ladder: renderLadder, compare: renderCompare, contrast: renderContrast, content: renderContent, references: renderReferences, personal: renderPersonal, session: renderSession, discover: renderDiscover, gaps: renderGaps, history: renderHistory, panorama: renderPanorama, constellation: renderConstellation, timeline: renderTimeline, activity: renderActivity };
    dom.body.innerHTML = (renderers[state.mode] || renderSimilarity)(source);
  }
  function handleAction(action, value) {
    var source = current();
    if (action === 'reset') { state.competency = ''; state.topic = ''; state.chapter = ''; state.section = ''; state.signature = ''; state.targetId = ''; state.compareId = ''; state.referenceKey = ''; state.deltaC = 0; state.deltaT = 1; state.scope = 'all'; }
    if (action === 'relation') state.relation = value;
    if (action === 'competency') { state.competency = value; state.selectedFamily = familyKey(value); }
    if (action === 'topic') state.topic = state.topic === value ? '' : value;
    if (action === 'family') state.selectedFamily = value;
    if (action === 'chapter') { state.chapter = value; state.section = ''; state.scope = 'chapter'; setMode('similarity'); return; }
    if (action === 'chapter-filter') { state.chapter = value; state.section = ''; state.scope = 'chapter'; setMode('similarity'); return; }
    if (action === 'chapter-section') { state.chapter = value.split('|')[0]; state.section = value.split('|')[1]; state.scope = 'section'; }
    if (action === 'coverage-cell') { var parts = value.split('|'); state.competency = parts[0]; state.chapter = parts[1]; state.scope = 'chapter'; setMode('similarity'); return; }
    if (action === 'adjust-c') state.deltaC = Number(value);
    if (action === 'adjust-t') state.deltaT = Number(value);
    if (action === 'signature') state.signature = value;
    if (action === 'target') state.targetId = value;
    if (action === 'clear-target') state.targetId = '';
    if (action === 'compare') { state.compareId = value; state.mode = 'compare'; }
    if (action === 'clear-compare') state.compareId = '';
    if (action === 'ladder-axis') state.ladderAxis = value;
    if (action === 'content-filter') state.contentFilter = value;
    if (action === 'status-filter') { state.contentFilter = value; setMode('content'); return; }
    if (action === 'reference-filter') state.referenceKey = state.referenceKey === value ? '' : value;
    if (action === 'competency-filter') { state.competency = value; state.selectedFamily = familyKey(value); setMode('difficulty'); return; }
    if (action === 'focus-filter') { state.focus = value; setMode('activity'); return; }
    if (action === 'density') state.density = value === 'compact' ? 'compact' : 'comfortable';
    if (action === 'labels') state.showLabels = !state.showLabels;
    if (action === 'intent') state.sessionIntent = value;
    if (action === 'route-add' && state.route.indexOf(value) === -1) state.route.push(value);
    if (action === 'route-remove') state.route = state.route.filter(function (id) { return id !== value; });
    if (action === 'route-clear') state.route = [];
    if (action === 'session-generate') { candidates(source).slice().sort(function (a, b) { return relationScore(source, b).score - relationScore(source, a).score; }).slice(0, 5).forEach(function (record) { if (state.route.indexOf(record.id) === -1) state.route.push(record.id); }); }
    if (action === 'discover-next') state.discoverSeed = Number(state.discoverSeed || 0) + 1;
    if (action === 'gap-cell') { var gap = value.split('|'); state.deltaC = Number(gap[0]) - conceptual(source); state.deltaT = Number(gap[1]) - technical(source); state.relation = 'shared'; setMode('similarity'); return; }
    persistState(); render();
  }
  function bind() {
    savedState();
    var savedMode = localStorage.getItem(MODE_KEY);
    if (MODE_LABELS[savedMode]) state.mode = savedMode;
    dom.modes.addEventListener('click', function (event) { var mode = event.target.closest('[data-explorer-mode]'); if (mode) setMode(mode.dataset.explorerMode); });
    dom.body.addEventListener('click', function (event) {
      var back = event.target.closest('[data-explorer-reference-back]');
      if (back) { state.reference = null; render(); window.dispatchEvent(new CustomEvent('odedex:reference-close')); return; }
      var target = event.target.closest('[data-explorer-target]');
      if (target) { state.targetId = target.dataset.explorerTarget; persistState(); render(); return; }
      var compare = event.target.closest('[data-explorer-compare]');
      if (compare) { state.compareId = compare.dataset.explorerCompare; persistState(); render(); return; }
      var open = event.target.closest('[data-explorer-open]');
      if (open) { openRecord(open.dataset.explorerOpen); return; }
      var action = event.target.closest('[data-explorer-action]');
      if (action) handleAction(action.dataset.explorerAction, action.dataset.explorerValue || '');
    });
    dom.body.addEventListener('keydown', function (event) { var open = event.target.closest('[data-explorer-open]'); if (open && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); openRecord(open.dataset.explorerOpen); return; } var action = event.target.closest('[data-explorer-action]'); if (action && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); handleAction(action.dataset.explorerAction, action.dataset.explorerValue || ''); } });
    dom.body.addEventListener('change', function (event) { var select = event.target.closest('[data-explorer-select]'); if (select) { state[select.dataset.explorerSelect] = select.value; persistState(); render(); } });
    dom.close.addEventListener('click', function () { var close = document.querySelector('[data-reader-action="close"]'); if (close) close.click(); });
    window.addEventListener('odedex:context', render);
    window.addEventListener('odedex:progress', render);
    window.addEventListener('odedex:reference-open', function (event) { if (event.detail && event.detail.reference) { state.reference = event.detail.reference; render(); } });
    window.addEventListener('odedex:reference-close', function () { state.reference = null; render(); });
    window.addEventListener('storage', render);
    new MutationObserver(render).observe(dom.app, { attributes: true, attributeFilter: ['class'] });
    new MutationObserver(render).observe(dom.reader, { attributes: true, attributeFilter: ['data-reader-id'] });
    render();
  }
  if (dom.app && dom.panel && dom.body && dom.modes && dom.reader) bind();
}());