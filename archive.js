(function () {
  'use strict';

  var DATA_ROOT = 'data-real/';
  var DATA_URL = DATA_ROOT + 'library.json';
  var REFERENCES_URL = DATA_ROOT + 'references.json';
  var PROGRESS_KEY = 'odedex:v2:progress';
  var STARRED_KEY = 'odedex:v2:starred';
  var USER_DATA_KEY = 'odedex:v3:user-data';
  var USER_DATA_FORMAT = 'odedex-user-data';
  var USER_DATA_VERSION = 1;
  var UI_KEY = 'odedex:terminal-index:ui';
  var STATUS_LABELS = { verified: 'verificado', draft: 'borrador', open: 'abierto' };
  var STUDY_STATES = { new: 'Sin empezar', active: 'En curso', review: 'Por repasar', done: 'Resuelto por mí' };
  var STATUS_ORDER = { verified: 0, draft: 1, open: 2 };
  var COMPETENCY_LABELS = {
    'clasificar.orden': 'clasificar · orden',
    'clasificar.linealidad': 'clasificar · linealidad',
    'verificar.sustitucion-directa': 'verificar · sustitución',
    'verificar.dominio-intervalo': 'verificar · dominio',
    'analizar-cualitativamente.puntos-equilibrio': 'analizar · equilibrios',
    'analizar-cualitativamente.estabilidad': 'analizar · estabilidad',
    'seleccionar-metodo.justificar-eleccion': 'seleccionar · método'
  };

  var FIELD_DEFS = [
    { key: 'id', label: 'id', aliases: ['id', 'ficha'], description: 'identificador del ejercicio' },
    { key: 'title', label: 'title', aliases: ['title', 'titulo', 'título'], description: 'título de la ficha' },
    { key: 'author', label: 'author', aliases: ['author', 'autor'], description: 'autor de la fuente' },
    { key: 'source', label: 'source', aliases: ['source', 'fuente', 'source-key'], description: 'clave de la fuente' },
    { key: 'chapter', label: 'chapter', aliases: ['chapter', 'capitulo', 'capítulo'], description: 'capítulo editorial' },
    { key: 'section', label: 'section', aliases: ['section', 'seccion', 'sección'], description: 'sección editorial' },
    { key: 'exercise', label: 'exercise', aliases: ['exercise', 'ejercicio', 'e'], description: 'número de ejercicio' },
    { key: 'locator', label: 'locator', aliases: ['locator', 'localizador'], description: 'localizador editorial' },
    { key: 'topic', label: 'topic', aliases: ['topic', 'tema'], description: 'tema' },
    { key: 'competency', label: 'competency', aliases: ['competency', 'competencia'], description: 'competencia' },
    { key: 'notes', label: 'notes', aliases: ['notes', 'note', 'nota', 'notas'], description: 'notas personales' },
    { key: 'tag', label: 'tag', aliases: ['tag', 'tags', 'etiqueta', 'etiquetas'], description: 'etiquetas personales' },
    { key: 'status', label: 'status', aliases: ['status', 'estado', 'solution-status'], description: 'estado editorial' },
    { key: 'conceptual', label: 'c', aliases: ['c', 'conceptual'], description: 'dificultad conceptual' },
    { key: 'technical', label: 't', aliases: ['t', 'technical', 'tecnica', 'técnica'], description: 'dificultad técnica' },
    { key: 'blocked', label: 'blocked', aliases: ['blocked', 'bloqueado'], description: 'bloqueo editorial' },
    { key: 'captured', label: 'captured', aliases: ['captured', 'capturada', 'capturado', 'mia', 'mía'], description: 'captura personal' },
    { key: 'starred', label: 'starred', aliases: ['starred', 'favorito', 'favoritos', 'estrella'], description: 'ejercicio favorito' }
  ];

  var GROUPS = [
    { key: 'none', label: 'sin agrupar' },
    { key: 'status', label: 'estado' },
    { key: 'source', label: 'fuente' },
    { key: 'author', label: 'autor' },
    { key: 'chapter', label: 'capítulo' },
    { key: 'section', label: 'sección' },
    { key: 'topic', label: 'tema' },
    { key: 'competency', label: 'competencia' },
    { key: 'tag', label: 'etiqueta personal' },
    { key: 'conceptual', label: 'dificultad conceptual' },
    { key: 'technical', label: 'dificultad técnica' },
    { key: 'blocked', label: 'bloqueo' },
    { key: 'captured', label: 'captura' },
    { key: 'starred', label: 'favoritos' }
  ];

  var SORTS = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'título' },
    { key: 'author', label: 'autor' },
    { key: 'source', label: 'fuente' },
    { key: 'status', label: 'estado' },
    { key: 'conceptual', label: 'conceptual' },
    { key: 'technical', label: 'técnica' },
    { key: 'load', label: 'carga total' },
    { key: 'captured', label: 'captura' }
  ];

  var dom = {
    app: document.getElementById('app'),
    collectionState: document.getElementById('collectionState'),
    queryForm: document.getElementById('searchForm'),
    queryInput: document.getElementById('queryInput'),
    clearSearch: document.getElementById('clearSearch'),
    suggestionStrip: document.getElementById('suggestionStrip'),
    activeTokens: document.getElementById('activeTokens'),
    openStarred: document.getElementById('openStarred'),
    starredLabel: document.getElementById('starredLabel'),
    openFilter: document.getElementById('openFilter'),
    openGroup: document.getElementById('openGroup'),
    openSort: document.getElementById('openSort'),
    reverseSort: document.getElementById('reverseSort'),
    collapseAll: document.getElementById('collapseAll'),
    resetView: document.getElementById('resetView'),
    openData: document.getElementById('openData'),
    openHelp: document.getElementById('openHelp'),
    groupLabel: document.getElementById('groupLabel'),
    sortLabel: document.getElementById('sortLabel'),
    collapseAllLabel: document.getElementById('collapseAllLabel'),
    recordList: document.getElementById('recordList'),
    readerPane: document.getElementById('readerPane'),
    readerContent: document.getElementById('readerContent'),
    resultState: document.getElementById('resultState'),
    paletteBackdrop: document.getElementById('paletteBackdrop'),
    palette: document.getElementById('palette'),
    paletteTitle: document.getElementById('paletteTitle'),
    palettePath: document.getElementById('palettePath'),
    paletteInput: document.getElementById('paletteInput'),
    paletteOptions: document.getElementById('paletteOptions'),
    paletteFooter: document.getElementById('paletteFooter'),
    closePalette: document.getElementById('closePalette'),
    helpBackdrop: document.getElementById('helpBackdrop'),
    helpPanel: document.getElementById('helpPanel'),
    closeHelp: document.getElementById('closeHelp'),
    dataFileInput: document.getElementById('dataFileInput'),
    dataBackdrop: document.getElementById('dataBackdrop'),
    dataPanel: document.getElementById('dataPanel'),
    closeData: document.getElementById('closeData'),
    exportData: document.getElementById('exportData'),
    importData: document.getElementById('importData'),
    dataStatus: document.getElementById('dataStatus'),
    toast: document.getElementById('toast')
  };

  var state = {
    library: [],
    references: {},
    contentIndex: {},
    dataState: 'loading',
    userData: loadUserData(),
    showStarred: false,
    query: '',
    filters: [],
    groupings: [],
    sorts: [],
    collapsed: {},
    selectedKey: '',
    readerId: '',
    referenceId: '',
    referenceReturn: null,
    readerFocus: false,
    content: {},
    querySuggestionIndex: 0,
    palette: null,
    draggedConfig: null,
    toastTimer: null,
    noteTimer: null
  };

  function safeJson(value, fallback) {
    try { return JSON.parse(value); } catch (error) { return fallback; }
  }

  function emptyUserData() {
    return { format: USER_DATA_FORMAT, schemaVersion: USER_DATA_VERSION, updatedAt: '', records: {}, events: [] };
  }

  function normalizeTags(value) {
    var values = Array.isArray(value) ? value : String(value || '').split(',');
    return values.map(function (item) { return String(item).trim(); }).filter(Boolean).filter(function (item, index, items) { return items.indexOf(item) === index; }).slice(0, 40);
  }

  function normalizeUserData(value) {
    var data = emptyUserData();
    if (!value || typeof value !== 'object') return data;
    data.updatedAt = typeof value.updatedAt === 'string' ? value.updatedAt : '';
    data.events = Array.isArray(value.events) ? value.events.filter(function (event) { return event && event.id && event.type && event.at; }).slice(0, 100) : [];
    var records = value.records && typeof value.records === 'object' ? value.records : {};
    Object.keys(records).forEach(function (id) {
      var item = records[id];
      if (!item || typeof item !== 'object') return;
      data.records[String(id)] = {
        starred: Boolean(item.starred),
        capturedAt: typeof item.capturedAt === 'string' ? item.capturedAt : '',
        studyState: Object.prototype.hasOwnProperty.call(STUDY_STATES, item.studyState) ? item.studyState : '',
        notes: typeof item.notes === 'string' ? item.notes : '',
        tags: normalizeTags(item.tags),
        updatedAt: typeof item.updatedAt === 'string' ? item.updatedAt : ''
      };
    });
    return data;
  }

  function loadLegacyProgress() {
    var saved = safeJson(localStorage.getItem(PROGRESS_KEY), null);
    if (saved && typeof saved === 'object') {
      return { captures: saved.captures || {}, events: Array.isArray(saved.events) ? saved.events : [] };
    }
    return { captures: {}, events: [] };
  }

  function loadLegacyStarred() {
    var saved = safeJson(localStorage.getItem(STARRED_KEY), null);
    return saved && typeof saved === 'object' ? saved : {};
  }

  function loadUserData() {
    var data = normalizeUserData(safeJson(localStorage.getItem(USER_DATA_KEY), null));
    var workspace = safeJson(localStorage.getItem('odedex:terminal:workspace:v1'), null);
    var study = workspace && workspace.study && typeof workspace.study === 'object' ? workspace.study : {};
    Object.keys(study).forEach(function (id) {
      if (!study[id] || !Object.prototype.hasOwnProperty.call(STUDY_STATES, study[id].state)) return;
      if (!data.records[id]) data.records[id] = { starred: Boolean(study[id].saved), capturedAt: study[id].state === 'done' ? study[id].updated || new Date().toISOString() : '', notes: typeof study[id].note === 'string' ? study[id].note : '', tags: [], updatedAt: typeof study[id].updated === 'string' ? study[id].updated : '' };
      if (!data.records[id].studyState) data.records[id].studyState = study[id].state;
    });
    var legacyProgress = loadLegacyProgress();
    var legacyStarred = loadLegacyStarred();
    Object.keys(legacyProgress.captures).forEach(function (id) {
      if (!data.records[id]) data.records[id] = { starred: false, capturedAt: String(legacyProgress.captures[id] || ''), notes: '', tags: [], updatedAt: '' };
      if (!data.records[id].capturedAt) data.records[id].capturedAt = String(legacyProgress.captures[id] || '');
    });
    Object.keys(legacyStarred).forEach(function (id) {
      if (!data.records[id]) data.records[id] = { starred: false, capturedAt: '', notes: '', tags: [], updatedAt: '' };
      data.records[id].starred = true;
    });
    data.events = data.events.concat(legacyProgress.events).filter(function (event, index, events) {
      return event && event.id && event.type && event.at && events.findIndex(function (other) { return other.id === event.id && other.type === event.type && other.at === event.at; }) === index;
    }).slice(0, 100);
    return data;
  }

  function loadUi() {
    var saved = safeJson(localStorage.getItem(UI_KEY), null);
    if (!saved || typeof saved !== 'object') return;
    state.query = typeof saved.query === 'string' ? saved.query : '';
    state.filters = Array.isArray(saved.filters) ? saved.filters.filter(isKnownFilter) : [];
    state.groupings = Array.isArray(saved.groupings) ? saved.groupings.filter(function (key, index, items) {
      return key !== 'none' && GROUPS.some(function (item) { return item.key === key; }) && items.indexOf(key) === index;
    }) : [saved.group, saved.subgroup].filter(function (key, index, items) {
      return key && key !== 'none' && GROUPS.some(function (item) { return item.key === key; }) && items.indexOf(key) === index;
    });
    state.sorts = Array.isArray(saved.sorts) ? saved.sorts.filter(function (criterion, index, items) {
      return criterion && SORTS.some(function (item) { return item.key === criterion.key; }) && (criterion.direction === 'asc' || criterion.direction === 'desc') && items.findIndex(function (item) { return item.key === criterion.key; }) === index;
    }) : (saved.sort && saved.sort !== 'id' && SORTS.some(function (item) { return item.key === saved.sort; }) ? [{ key: saved.sort, direction: saved.descending ? 'desc' : 'asc' }] : []);
    state.collapsed = saved.collapsed && typeof saved.collapsed === 'object' ? saved.collapsed : {};
  }

  function saveUi() {
    try {
      localStorage.setItem(UI_KEY, JSON.stringify({
        query: state.query,
        filters: state.filters,
        groupings: state.groupings,
        sorts: state.sorts,
        collapsed: state.collapsed
      }));
    } catch (error) {
      console.warn('No se pudo guardar la preferencia de índice.', error);
    }
  }

  function personalDataFor(id) {
    return state.userData.records[id] || { starred: false, capturedAt: '', notes: '', tags: [], updatedAt: '' };
  }

  function studyStateFor(id) {
    var personal = personalDataFor(id);
    return personal.studyState || (personal.capturedAt ? 'done' : 'new');
  }

  function ensureUserRecord(id) {
    if (!state.userData.records[id]) state.userData.records[id] = { starred: false, capturedAt: '', notes: '', tags: [], updatedAt: '' };
    return state.userData.records[id];
  }

  function persistUserData() {
    state.userData.updatedAt = new Date().toISOString();
    try {
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(state.userData));
      var progress = { captures: {}, events: state.userData.events.slice(0, 100) };
      var starred = {};
      Object.keys(state.userData.records).forEach(function (id) {
        var item = state.userData.records[id];
        if (item.capturedAt) progress.captures[id] = item.capturedAt;
        if (item.starred) starred[id] = item.updatedAt || state.userData.updatedAt;
      });
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
      localStorage.setItem(STARRED_KEY, JSON.stringify(starred));
    } catch (error) { console.warn('No se pudieron guardar los datos personales.', error); }
    window.dispatchEvent(new CustomEvent('odedex:personal-data'));
  }

  function pad(number) { return String(number).padStart(3, '0'); }

  function asArray(value) {
    if (Array.isArray(value)) return value.map(String);
    if (value === null || typeof value === 'undefined') return [];
    return [String(value)];
  }

  function normalizeAuthors(value) {
    if (Array.isArray(value)) return value.map(function (item) { return typeof item === 'string' ? item : (item && item.name ? String(item.name) : ''); }).filter(Boolean);
    if (typeof value === 'string') return [value];
    return [];
  }

  function normalizeRecord(record, index) {
    var id = record.id || record['exercise-id'] || ('ficha-' + pad(index + 1));
    var match = /-c(\d+)-s(\d+)-e(\d+)$/.exec(id);
    var difficulty = record.difficulty || {};
    return {
      id: String(id),
      title: String(record.title || id),
      authors: normalizeAuthors(record.authors || record.author),
      sourceKey: String(record.sourceKey || record.source || record['source-key'] || 'fuente'),
      sourceLocator: String(record.sourceLocator || record.locator || record['source-locator'] || ''),
      references: asArray(record.references),
      chapter: Number(record.chapter || (match && match[1]) || 0),
      chapterTitle: String(record.chapterTitle || ''),
      section: Number(record.section || (match && match[2]) || 0),
      exerciseNumber: Number(record.exerciseNumber || (match && match[3]) || index + 1),
      topics: asArray(record.topics),
      competencies: asArray(record.competencies),
      difficulty: { conceptual: Number(difficulty.conceptual || 1), technical: Number(difficulty.technical || 1) },
      status: String(record.solutionStatus || record.status || record['solution-status'] || 'open'),
      blocked: String(record.blocked || ''),
      blockedDetail: String(record.blockedDetail || record['blocked-detail'] || ''),
      requiresTooling: asArray(record.requiresTooling || record['requires-tooling']),
      content: String(record.content || record.markdownPath || ('content/' + id + '.md'))
    };
  }

  function normalizeText(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es');
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, function (character) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character];
    });
  }

  function labelForCompetency(value) { return COMPETENCY_LABELS[value] || value.replace(/\./g, ' · '); }
  function labelForStatus(value) { return STATUS_LABELS[value] || value; }
  function labelForGroupCriterion(key) {
    var group = GROUPS.find(function (item) { return item.key === key; });
    return group ? group.label : key;
  }
  function labelForSortCriterion(key) {
    var sort = SORTS.find(function (item) { return item.key === key; });
    return sort ? sort.label : key;
  }
  function groupingPath() { return state.groupings.length ? state.groupings.map(labelForGroupCriterion).join(' › ') : 'ninguno'; }
  function sortPath() {
    return state.sorts.length ? state.sorts.map(function (criterion) {
      return labelForSortCriterion(criterion.key) + (criterion.direction === 'desc' ? ' ↓' : ' ↑');
    }).join(' › ') : 'ID ↑';
  }
  function isCaptured(id) { return Boolean(personalDataFor(id).capturedAt); }
  function isStarred(id) { return Boolean(personalDataFor(id).starred); }
  function loadOf(record) { return record.difficulty.conceptual + record.difficulty.technical; }
  function knownField(key) { return FIELD_DEFS.find(function (field) { return field.key === key; }); }
  function isKnownFilter(filter) { return filter && knownField(filter.field) && typeof filter.value === 'string'; }

  function tokenizeQuery(query) {
    var tokens = [];
    var current = '';
    var quote = '';
    for (var index = 0; index < query.length; index += 1) {
      var character = query[index];
      if (quote) {
        current += character;
        if (character === quote) quote = '';
      } else if (character === '"' || character === "'") {
        quote = character;
        current += character;
      } else if (/\s/.test(character)) {
        if (current) { tokens.push(current); current = ''; }
      } else {
        current += character;
      }
    }
    if (current) tokens.push(current);
    return tokens;
  }

  function fieldFromAlias(alias) {
    var normal = normalizeText(alias);
    return FIELD_DEFS.find(function (field) { return field.aliases.some(function (item) { return normalizeText(item) === normal; }); });
  }

  function parsedQuery() {
    var parsed = { terms: [], filters: [] };
    tokenizeQuery(state.query).forEach(function (token) {
      var match = /^(-?)([^:]+):(.*)$/.exec(token);
      if (!match) { parsed.terms.push(token.replace(/^['"]|['"]$/g, '')); return; }
      var field = fieldFromAlias(match[2]);
      var value = match[3].replace(/^['"]|['"]$/g, '');
      if (!field || !value) { parsed.terms.push(token.replace(/^['"]|['"]$/g, '')); return; }
      parsed.filters.push({ field: field.key, value: value, negated: match[1] === '-' });
    });
    return parsed;
  }

  function valuesForField(record, field) {
    switch (field) {
      case 'id': return [record.id];
      case 'title': return [record.title];
      case 'author': return record.authors;
      case 'source': return [record.sourceKey];
      case 'chapter': return [String(record.chapter), record.chapterTitle];
      case 'section': return [String(record.section)];
      case 'exercise': return [String(record.exerciseNumber), 'e' + pad(record.exerciseNumber)];
      case 'locator': return [record.sourceLocator];
      case 'topic': return record.topics;
      case 'competency': return record.competencies.concat(record.competencies.map(labelForCompetency));
      case 'notes': return [personalDataFor(record.id).notes];
      case 'tag': return personalDataFor(record.id).tags;
      case 'status': return [record.status];
      case 'conceptual': return [String(record.difficulty.conceptual)];
      case 'technical': return [String(record.difficulty.technical)];
      case 'blocked': return [record.blocked || 'no', record.blocked ? 'yes' : 'no'];
      case 'captured': return [isCaptured(record.id) ? 'yes' : 'no'];
      case 'starred': return [isStarred(record.id) ? 'yes' : 'no'];
      default: return [];
    }
  }

  function valueMatches(actual, expected, field) {
    var query = normalizeText(expected);
    if (!query) return true;
    if (['chapter', 'section', 'exercise', 'conceptual', 'technical'].indexOf(field) !== -1 && /^\d+$/.test(query)) return Number(actual) === Number(query);
    if ((field === 'chapter' || field === 'section' || field === 'exercise' || field === 'conceptual' || field === 'technical') && /^\d+\.\.\d+$/.test(query)) {
      var range = query.split('..').map(Number);
      return Number(actual) >= range[0] && Number(actual) <= range[1];
    }
    return normalizeText(actual).indexOf(query) !== -1;
  }

  function recordMatchesFilter(record, filter) {
    var alternatives = filter.value.split(',').map(function (value) { return value.trim(); }).filter(Boolean);
    var matched = alternatives.some(function (alternative) {
      return valuesForField(record, filter.field).some(function (value) { return valueMatches(value, alternative, filter.field); });
    });
    return filter.negated ? !matched : matched;
  }

  function searchText(record) {
    var personal = personalDataFor(record.id);
    return [record.id, record.title, record.authors.join(' '), record.sourceKey, record.sourceLocator, record.chapterTitle, record.topics.join(' '), record.competencies.join(' '), personal.notes, personal.tags.join(' '), state.contentIndex[record.id] || ''].join(' ');
  }

  function filteredRecords() {
    var parsed = parsedQuery();
    var filters = state.filters.concat(parsed.filters);
    var result = state.library.filter(function (record) {
      var text = normalizeText(searchText(record));
      var termsPass = parsed.terms.every(function (term) { return text.indexOf(normalizeText(term)) !== -1; });
      return termsPass && filters.every(function (filter) { return recordMatchesFilter(record, filter); });
    });
    if (state.showStarred) result = result.filter(function (record) { return isStarred(record.id); });
    if (window.ODEDEX_TERMINAL && window.ODEDEX_TERMINAL.explorationIds) result = result.filter(function (record) { return window.ODEDEX_TERMINAL.explorationIds.has(record.id); });
    if (window.ODEDEX_TERMINAL && window.ODEDEX_TERMINAL.isolated) result = result.filter(function (record) { return window.ODEDEX_TERMINAL.selected.has(record.id); });
    result.sort(function (left, right) { return compareRecords(left, right); });
    return result;
  }

  function compareRecords(left, right) {
    for (var index = 0; index < state.sorts.length; index += 1) {
      var criterion = state.sorts[index];
      var comparison = compareByCriterion(left, right, criterion.key);
      if (comparison !== 0) return criterion.direction === 'desc' ? -comparison : comparison;
    }
    return left.id.localeCompare(right.id, 'es', { numeric: true });
  }

  function compareByCriterion(left, right, key) {
    switch (key) {
      case 'title': return left.title.localeCompare(right.title, 'es');
      case 'author': return (left.authors[0] || '').localeCompare(right.authors[0] || '', 'es');
      case 'source': return left.sourceKey.localeCompare(right.sourceKey, 'es');
      case 'status':
        return (Object.prototype.hasOwnProperty.call(STATUS_ORDER, left.status) ? STATUS_ORDER[left.status] : 9) -
          (Object.prototype.hasOwnProperty.call(STATUS_ORDER, right.status) ? STATUS_ORDER[right.status] : 9);
      case 'conceptual': return left.difficulty.conceptual - right.difficulty.conceptual;
      case 'technical': return left.difficulty.technical - right.difficulty.technical;
      case 'load': return loadOf(left) - loadOf(right);
      case 'captured': return Number(isCaptured(left.id)) - Number(isCaptured(right.id));
      default: return left.id.localeCompare(right.id, 'es', { numeric: true });
    }
  }

  function groupingValues(record, grouping) {
    switch (grouping) {
      case 'status': return [labelForStatus(record.status)];
      case 'source': return [record.sourceKey];
      case 'author': return record.authors.length ? record.authors : ['sin autor'];
      case 'chapter': return ['capítulo ' + record.chapter];
      case 'section': return ['sección ' + record.section];
      case 'topic': return record.topics.length ? record.topics : ['sin tema'];
      case 'competency': return record.competencies.length ? record.competencies.map(labelForCompetency) : ['sin competencia'];
      case 'tag': return personalDataFor(record.id).tags.length ? personalDataFor(record.id).tags : ['sin etiqueta personal'];
      case 'conceptual': return ['conceptual ' + record.difficulty.conceptual];
      case 'technical': return ['técnica ' + record.difficulty.technical];
      case 'blocked': return [record.blocked ? 'bloqueada: ' + record.blocked : 'sin bloqueo'];
      case 'captured': return [isCaptured(record.id) ? 'capturadas' : 'pendientes'];
      case 'starred': return [isStarred(record.id) ? 'favoritos' : 'sin marcar'];
      default: return [''];
    }
  }

  function createGroupNode(key, label, criterion, depth) {
    return { key: key, label: label, criterion: criterion, depth: depth, records: [], recordIds: {}, children: {}, childList: [] };
  }

  function addRecordToNode(node, record) {
    if (!node.recordIds[record.id]) {
      node.recordIds[record.id] = true;
      node.records.push(record);
    }
  }

  function groupTree(records) {
    var root = createGroupNode('root', '', '', -1);
    function place(node, record, depth) {
      addRecordToNode(node, record);
      if (depth >= state.groupings.length) return;
      var criterion = state.groupings[depth];
      var labels = groupingValues(record, criterion).filter(function (label, index, items) { return items.indexOf(label) === index; });
      labels.forEach(function (label) {
        var key = node.key + '/' + criterion + ':' + encodeURIComponent(label);
        if (!node.children[key]) {
          node.children[key] = createGroupNode(key, label, criterion, depth);
          node.childList.push(node.children[key]);
        }
        place(node.children[key], record, depth + 1);
      });
    }
    records.forEach(function (record) { place(root, record, 0); });
    function sortNode(node) {
      node.records.sort(compareRecords);
      node.childList.sort(function (left, right) { return left.label.localeCompare(right.label, 'es', { numeric: true }); });
      node.childList.forEach(sortNode);
    }
    sortNode(root);
    return root;
  }

  function rowKey(node, record, occurrence) { return node.key + '::' + record.id + '::' + occurrence; }

  function visibleRows(tree) {
    var rows = [];
    function walk(node, ancestors) {
      if (node.depth >= 0 && state.collapsed[node.key]) return;
      if (node.childList.length) {
        node.childList.forEach(function (child) { walk(child, ancestors.concat(node.depth >= 0 ? [node] : [])); });
        return;
      }
      node.records.forEach(function (record, index) {
        rows.push({ key: rowKey(node, record, index), group: node, ancestors: ancestors, record: record });
      });
    }
    walk(tree, []);
    return rows;
  }

  function leafGroups(tree) {
    var groups = [];
    function walk(node) {
      if (node.depth >= 0 && state.collapsed[node.key]) return;
      if (!node.childList.length) {
        if (node.depth >= 0 && node.records.length) groups.push(node);
        return;
      }
      node.childList.forEach(walk);
    }
    walk(tree);
    return groups;
  }

  function collapsibleKeys(tree) {
    var keys = [];
    function walk(node) {
      if (node.depth >= 0) keys.push(node.key);
      node.childList.forEach(walk);
    }
    walk(tree);
    return keys;
  }

  function ensureSelection(rows) {
    if (!rows.length) { state.selectedKey = ''; return; }
    if (!rows.some(function (row) { return row.key === state.selectedKey; })) state.selectedKey = rows[0].key;
  }

  function selectedRow() {
    var tree = groupTree(filteredRecords());
    var rows = visibleRows(tree);
    ensureSelection(rows);
    return rows.find(function (row) { return row.key === state.selectedKey; }) || null;
  }

  function selectedRecord() {
    var row = selectedRow();
    return row ? row.record : null;
  }

  function facetValues(field) {
    if (field === 'notes') return [];
    var counts = {};
    state.library.forEach(function (record) {
      var distinct = {};
      valuesForField(record, field).forEach(function (value) {
        var key = String(value);
        if (!key || distinct[key]) return;
        distinct[key] = true;
        counts[key] = (counts[key] || 0) + 1;
      });
    });
    return Object.keys(counts).sort(function (left, right) { return left.localeCompare(right, 'es', { numeric: true }); }).map(function (value) {
      return { value: value, label: field === 'competency' && value.indexOf('.') !== -1 ? labelForCompetency(value) : value, count: counts[value] };
    });
  }

  function currentQueryFragment(query) {
    var quote = '';
    var start = query.length;
    for (var index = query.length - 1; index >= 0; index -= 1) {
      var character = query[index];
      if (quote) {
        if (character === quote) quote = '';
        continue;
      }
      if (character === '"' || character === "'") {
        quote = character;
        continue;
      }
      if (/\s/.test(character)) { start = index + 1; break; }
      start = index;
    }
    return { prefix: query.slice(0, start), fragment: query.slice(start) };
  }

  function directQuerySuggestions() {
    var query = state.query;
    var cursor = currentQueryFragment(query);
    var fragment = cursor.fragment;
    var prefix = cursor.prefix;
    var negative = fragment.charAt(0) === '-' ? '-' : '';
    var subject = negative ? fragment.slice(1) : fragment;
    var colon = subject.indexOf(':');
    var suggestions;
    if (colon === -1) {
      var fieldNeedle = normalizeText(subject);
      suggestions = FIELD_DEFS.filter(function (field) { return !fieldNeedle || normalizeText(field.label + ' ' + field.aliases.join(' ') + ' ' + field.description).indexOf(fieldNeedle) !== -1; }).map(function (field) {
        return { label: field.label + ':', meta: field.description, completion: negative + field.label + ':' };
      });
    } else {
      var field = fieldFromAlias(subject.slice(0, colon));
      var valueNeedle = subject.slice(colon + 1).replace(/^['"]|['"]$/g, '');
      if (!field) return [];
      suggestions = facetValues(field.key).filter(function (item) { return normalizeText(item.value + ' ' + item.label).indexOf(normalizeText(valueNeedle)) !== -1; }).map(function (item) {
        var escapedValue = /\s/.test(item.value) ? '"' + item.value + '"' : item.value;
        return { label: field.label + ':' + escapedValue, meta: item.count + ' fichas', completion: negative + field.label + ':' + escapedValue };
      });
    }
    return suggestions.slice(0, 8).map(function (suggestion) {
      suggestion.prefix = prefix;
      return suggestion;
    });
  }

  function filterLabel(filter) {
    var field = knownField(filter.field);
    var value = filter.value;
    if (filter.field === 'competency') value = value.split(',').map(labelForCompetency).join(', ');
    return (filter.negated ? '−' : '') + (field ? field.label : filter.field) + ':' + value;
  }

  function renderSuggestions() {
    var suggestions = directQuerySuggestions();
    if (state.querySuggestionIndex >= suggestions.length) state.querySuggestionIndex = 0;
    var lead = suggestions.length ? (state.query ? 'sugerencias' : 'campos') : 'sin sugerencias';
    dom.suggestionStrip.innerHTML = '<span class="suggestion-lead">' + escapeHtml(lead) + '</span>' + suggestions.map(function (item, index) {
      return '<button type="button" class="suggestion ' + (index === state.querySuggestionIndex ? 'is-active' : '') + '" data-suggestion="' + index + '" title="Tab completa esta sugerencia">' + escapeHtml(item.label) + (item.meta ? ' <span class="visually-hidden">' + escapeHtml(item.meta) + '</span>' : '') + '</button>';
    }).join('');
  }

  function renderTokens() {
    var parsed = parsedQuery();
    var filterHtml = [];
    state.filters.forEach(function (filter, index) {
      filterHtml.push('<span class="token">' + escapeHtml(filterLabel(filter)) + '<button type="button" class="token-remove" data-remove-filter="' + index + '" aria-label="Eliminar filtro ' + escapeHtml(filterLabel(filter)) + '">×</button></span>');
    });
    parsed.filters.forEach(function (filter) { filterHtml.push('<span class="token query-token">' + escapeHtml(filterLabel(filter)) + '</span>'); });
    if (!filterHtml.length) filterHtml.push('<span class="token-empty">ninguno</span>');

    var html = ['<span class="token-cluster"><span class="token-label">filtros</span>' + filterHtml.join('') + '</span>'];
    html.push('<span class="token-cluster" data-config-zone="group"><span class="token-label">grupos</span>' + (state.groupings.length ? state.groupings.map(function (grouping, index) {
        var label = labelForGroupCriterion(grouping);
        return '<span class="token config-token" draggable="true" data-config-kind="group" data-config-index="' + index + '" title="Arrastrar para reordenar grupo"><span class="token-grip" aria-hidden="true">::</span><span>' + escapeHtml(label) + '</span><button type="button" class="token-remove" data-remove-config="group:' + index + '" aria-label="Eliminar grupo ' + escapeHtml(label) + '">×</button></span>';
      }).join('') : '<span class="token-empty">ninguno</span>') + '</span>');
    html.push('<span class="token-cluster" data-config-zone="sort"><span class="token-label">orden</span>' + (state.sorts.length ? state.sorts.map(function (criterion, index) {
        var label = labelForSortCriterion(criterion.key);
        var direction = criterion.direction === 'desc' ? '↓' : '↑';
        var nextDirection = criterion.direction === 'desc' ? 'ascendente' : 'descendente';
        return '<span class="token config-token" draggable="true" data-config-kind="sort" data-config-index="' + index + '" title="Arrastrar para reordenar criterio"><span class="token-grip" aria-hidden="true">::</span><span>' + escapeHtml(label) + '</span><button type="button" class="token-direction" data-invert-sort="' + index + '" aria-label="Invertir ' + escapeHtml(label) + ' a orden ' + nextDirection + '" title="Invertir orden">' + direction + '</button><button type="button" class="token-remove" data-remove-config="sort:' + index + '" aria-label="Eliminar criterio ' + escapeHtml(label) + '">×</button></span>';
      }).join('') : '<span class="token-empty">ninguno</span>') + '</span>');
    dom.activeTokens.innerHTML = html.join('');
  }

  function configList(kind) { return kind === 'group' ? state.groupings : state.sorts; }

  function configCanAccept(kind, key) {
    var options = kind === 'group' ? GROUPS : SORTS;
    return options.some(function (item) { return item.key === key && item.key !== 'none'; });
  }

  function moveConfig(sourceKind, sourceIndex, targetKind, targetIndex) {
    var sourceList = configList(sourceKind);
    var targetList = configList(targetKind);
    if (!sourceList || !targetList || sourceIndex < 0 || sourceIndex >= sourceList.length) return;
    var sourceValue = sourceList[sourceIndex];
    var key = sourceKind === 'group' ? sourceValue : sourceValue.key;
    if (!configCanAccept(targetKind, key)) return;
    if (sourceKind === targetKind) {
      if (sourceIndex === targetIndex || targetIndex < 0 || targetIndex > sourceList.length) return;
      var moved = sourceList.splice(sourceIndex, 1)[0];
      if (sourceIndex < targetIndex) targetIndex -= 1;
      sourceList.splice(targetIndex, 0, moved);
    } else {
      if (targetList.some(function (item) { return (targetKind === 'group' ? item : item.key) === key; })) return;
      sourceList.splice(sourceIndex, 1);
      targetList.splice(Math.min(targetIndex, targetList.length), 0, targetKind === 'group' ? key : { key: key, direction: 'asc' });
    }
    if (sourceKind === 'group' || targetKind === 'group') state.collapsed = {};
    saveUi();
    renderAll();
  }

  function renderCollectionState(records) {
    var captures = state.library.filter(function (record) { return isCaptured(record.id); }).length;
    var prefix = state.dataState === 'ready' ? '' : (state.dataState === 'fallback' ? 'índice local · ' : '');
    dom.collectionState.textContent = prefix + state.library.length + ' registros · ' + captures + ' capturas';
    dom.resultState.textContent = records.length + ' resultado' + (records.length === 1 ? '' : 's') + ' · ' + captures + '/' + state.library.length + ' capturadas';
  }

  function recordRowHtml(row) {
    var record = row.record;
    var captured = isCaptured(record.id);
    var depth = Math.max(0, row.group.depth + 1);
    var picked = window.ODEDEX_TERMINAL && window.ODEDEX_TERMINAL.selected.has(record.id);
    return '<div class="record-row ' + (row.key === state.selectedKey ? 'is-selected ' : '') + (picked ? 'is-picked' : '') + '" style="--row-depth:' + depth + '" id="option-' + escapeHtml(row.key.replace(/[^a-zA-Z0-9_-]/g, '-')) + '" role="option" tabindex="-1" aria-selected="' + Boolean(picked) + '" data-row-key="' + escapeHtml(row.key) + '" data-id="' + escapeHtml(record.id) + '">' +
      '<input class="record-pick" type="checkbox" data-terminal-pick="' + escapeHtml(record.id) + '" aria-label="Seleccionar ' + escapeHtml(record.id) + '" tabindex="-1"' + (picked ? ' checked' : '') + '>' +
      '<span class="record-id">' + escapeHtml('e' + pad(record.exerciseNumber)) + '</span>' +
      '<span class="record-title">' + escapeHtml(record.title) + '</span>' +
      '<span class="record-meta">C' + record.difficulty.conceptual + ' / T' + record.difficulty.technical + '</span>' +
      '<span class="record-state status-' + escapeHtml(record.status) + '">' + escapeHtml(labelForStatus(record.status)) + '</span>' +
      '<span class="record-capture ' + (captured ? 'is-captured' : '') + '" aria-label="' + (captured ? 'capturada' : 'pendiente') + '">' + (captured ? '●' : '○') + '</span><span class="record-star ' + (isStarred(record.id) ? 'is-starred' : '') + '" aria-label="' + (isStarred(record.id) ? 'favorito' : 'no favorito') + '">' + (isStarred(record.id) ? '★' : '☆') + '</span>' +
    '</div>';
  }

  function renderList() {
    var records = filteredRecords();
    var tree = groupTree(records);
    var rows = visibleRows(tree);
    ensureSelection(rows);
    if (!records.length) {
      dom.recordList.removeAttribute('aria-activedescendant');
      dom.recordList.innerHTML = '<div class="empty-list">No hay fichas que cumplan esta consulta.</div>';
      dom.collapseAll.disabled = true;
      dom.collapseAllLabel.textContent = 'plegar todo';
      renderCollectionState(records);
      return;
    }
    function renderNode(node) {
      if (node.depth < 0) {
        return node.childList.length ? node.childList.map(renderNode).join('') : node.records.map(function (record, index) {
          return recordRowHtml({ key: rowKey(node, record, index), group: node, record: record });
        }).join('');
      }
      var collapsed = Boolean(state.collapsed[node.key]);
        var heading = '<div class="group-heading" style="--depth:' + node.depth + '"><button type="button" class="group-toggle" data-toggle-group="' + escapeHtml(node.key) + '" data-group-depth="' + node.depth + '" aria-expanded="' + (!collapsed) + '">' + escapeHtml(node.label) + '<span class="group-count">' + node.records.length + '</span></button></div>';
      var children = collapsed ? '' : (node.childList.length ? node.childList.map(renderNode).join('') : node.records.map(function (record, index) {
        return recordRowHtml({ key: rowKey(node, record, index), group: node, record: record });
      }).join(''));
      return '<section class="group-block">' + heading + children + '</section>';
    }
    var html = renderNode(tree);
    dom.recordList.innerHTML = html;
    var selectedElement = dom.recordList.querySelector('.record-row.is-selected');
    if (selectedElement) {
      dom.recordList.setAttribute('aria-activedescendant', selectedElement.id);
      if (document.activeElement === dom.recordList) scrollListItemIntoView(selectedElement);
    } else dom.recordList.removeAttribute('aria-activedescendant');
    var keys = collapsibleKeys(tree);
    var allCollapsed = keys.length > 0 && keys.every(function (key) { return state.collapsed[key]; });
    dom.collapseAll.disabled = !keys.length;
    dom.collapseAllLabel.textContent = allCollapsed ? 'desplegar todo' : 'plegar todo';
    renderCollectionState(records);
  }

  function contentStatus(record) {
    return state.content[record.id] || { status: 'idle', sections: {} };
  }

  function markdownSectionHtml(content, key) {
    if (content.status === 'loading' || content.status === 'idle') return '<p class="missing-section">Cargando contenido Markdown…</p>';
    if (content.status === 'error') return '<p class="content-error">' + escapeHtml(content.message || 'No se pudo leer el archivo Markdown.') + '</p>';
    if (!content.sections[key]) return '<p class="missing-section">No hay contenido público para esta sección.</p>';
    var record = state.library.find(function (item) { return item.id === state.readerId; });
    return renderMarkdown(content.sections[key], key === 'Enunciado' && record ? record.references : []);
  }

  function readerSection(label, key, content, open) {
    return '<details class="reader-section" data-reader-section="' + escapeHtml(key) + '"' + (open ? ' open' : '') + '><summary>' + escapeHtml(label) + '</summary><div class="markdown">' + markdownSectionHtml(content, key) + '</div></details>';
  }

  function renderPersonalNotes(record) {
    var personal = personalDataFor(record.id);
    var tags = personal.tags.length ? personal.tags.map(function (tag) {
      return '<span class="tag-chip">' + escapeHtml(tag) + '<button type="button" data-remove-tag="' + escapeHtml(tag) + '" aria-label="Eliminar etiqueta ' + escapeHtml(tag) + '">×</button></span>';
    }).join('') : '<span class="tag-empty">sin etiquetas personales</span>';
    return '<section class="personal-notes" aria-labelledby="personalNotesTitle">' +
      '<div class="personal-notes-head"><h3 class="personal-notes-title" id="personalNotesTitle">Notas personales</h3><span class="personal-notes-scope">solo tú</span></div>' +
      '<label class="visually-hidden" for="personalNoteInput">Nota personal</label>' +
      '<textarea class="personal-note" id="personalNoteInput" data-personal-note placeholder="Escribe una observación, una duda o el siguiente paso…">' + escapeHtml(personal.notes) + '</textarea>' +
      '<div class="tag-editor"><div class="tag-editor-head"><span class="tag-editor-label">Etiquetas personales</span><span class="personal-notes-scope">separadas por coma</span></div>' +
      '<div class="tag-list">' + tags + '</div>' +
      '<div class="tag-entry"><label class="visually-hidden" for="personalTagInput">Nueva etiqueta</label><input class="tag-input" id="personalTagInput" data-personal-tag type="text" autocomplete="off" placeholder="añadir etiqueta"><button class="tag-add" type="button" data-reader-action="add-tag">añadir</button></div></div>' +
      '<div class="personal-notes-actions"><button class="personal-save" type="button" data-reader-action="save-notes">guardar cambios</button><span class="notes-save-state" data-notes-status>guardado</span></div>' +
    '</section>';
  }

  function referenceForId(referenceId) { return state.references[referenceId] || null; }

  function referenceLabel(reference) {
    var label = String(reference.locator || reference.id).split(',').pop().trim();
    return label.replace(/^ecuacion/i, 'ecuación').replace(/^figura/i, 'Figura');
  }

  function referenceMatchLabels(reference) {
    var label = referenceLabel(reference);
    var labels = [label];
    var number = /\((\d+)\)/.exec(label);
    if (number) labels.push('(' + number[1] + ')');
    return labels;
  }

  function referenceEntries(reference) {
    var transcription = reference.transcription;
    if (transcription && typeof transcription === 'object') {
      return Object.keys(transcription).map(function (key) { return { label: key, value: String(transcription[key]) }; });
    }
    return transcription ? [{ label: '', value: String(transcription) }] : [];
  }

  function referenceFormulaHtml(reference, className) {
    var entries = referenceEntries(reference);
    if (!entries.length) return '<p class="reference-preview-body">' + escapeHtml(reference.caption || 'Referencia visual disponible en el contexto editorial.') + '</p>';
    var tag = className === 'reference-preview-formula' ? 'span' : 'div';
    return entries.map(function (entry) {
      return '<' + tag + ' class="' + className + '">' + (entry.label ? '<span class="reference-variant-label">' + escapeHtml(entry.label) + '</span>' : '') + '<span class="reference-math">\\(' + escapeHtml(entry.value) + '\\)</span></' + tag + '>';
    }).join('');
  }

  function referencePreviewHtml(reference) {
    var image = reference.type === 'figure' && reference.file && reference.publicDisplay ? '<img class="reference-image" src="' + escapeHtml('data-real/assets/' + reference.file) + '" alt="' + escapeHtml(reference.alt || '') + '">' : '';
    var unavailable = reference.file && !reference.publicDisplay ? '<p class="reference-preview-meta">Imagen no publicada; se muestra solo la cita.</p>' : '';
    return '<span class="reference-preview" role="tooltip"><span class="reference-preview-title">' + escapeHtml(reference.type === 'figure' ? 'figura' : 'referencia matemática') + '</span>' + (reference.type === 'figure' ? (image || '<span class="reference-preview-body">' + escapeHtml(reference.caption || 'Figura citada en la fuente.') + '</span>') : referenceFormulaHtml(reference, 'reference-preview-formula')) + '<span class="reference-preview-meta">' + escapeHtml(reference.locator || '') + '</span>' + unavailable + '</span>';
  }

  function decorateReferences(html, referenceIds) {
    var references = referenceIds.map(referenceForId).filter(Boolean).filter(function (reference) { return reference.status === 'verified'; });
    references.sort(function (left, right) { return referenceLabel(right).length - referenceLabel(left).length; });
    references.forEach(function (reference) {
      var matched = false;
      referenceMatchLabels(reference).forEach(function (label) {
        if (matched) return;
        var pattern = new RegExp(escapeRegExp(label).replace('ecuación', 'ecuaci[oó]n'), 'gi');
        var nextHtml = html.replace(pattern, function (match) {
          matched = true;
          return '<span class="reference-anchor"><button class="reference-link" type="button" data-reference-id="' + escapeHtml(reference.id) + '" aria-describedby="reference-preview-' + escapeHtml(reference.id) + '">' + escapeHtml(match) + '</button>' + referencePreviewHtml(reference).replace('role="tooltip"', 'id="reference-preview-' + escapeHtml(reference.id) + '" role="tooltip"') + '</span>';
        });
        html = nextHtml;
      });
    });
    return html;
  }

  function escapeRegExp(value) { return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function renderReader() {
    var record = state.library.find(function (item) { return item.id === state.readerId; });
    dom.readerContent.dataset.readerId = record ? record.id : '';
    dom.app.classList.toggle('reader-open', Boolean(record));
    dom.app.classList.toggle('reader-focus', Boolean(record && state.readerFocus));
    window.dispatchEvent(new CustomEvent('odedex:reader-render', { detail: { reference: referenceForId(state.referenceId) } }));
    if (!record) {
      dom.readerContent.className = 'reader-empty';
      dom.readerContent.innerHTML = 'Selecciona una ficha y pulsa <strong>Enter</strong> para leerla.';
      return;
    }
    var content = contentStatus(record);
    var alert = record.blocked ? '<p class="reader-alert">Ficha bloqueada' + (record.blockedDetail ? ': ' + escapeHtml(record.blockedDetail) : '. El enunciado requiere material adicional.') + '</p>' : '';
    dom.readerContent.className = 'reader-entry';
    dom.readerContent.innerHTML =
      '<p class="reader-kicker">' + escapeHtml(record.sourceKey + ' · c' + record.chapter + ' · s' + record.section + ' · e' + pad(record.exerciseNumber)) + '</p>' +
      '<h2 class="reader-title">' + escapeHtml(record.title) + '</h2>' +
      '<dl class="reader-meta">' +
        '<dt>Autor</dt><dd>' + escapeHtml(record.authors.join(', ') || 'sin especificar') + '</dd>' +
        '<dt>Capítulo</dt><dd>' + escapeHtml(record.chapter + (record.chapterTitle ? ' · ' + record.chapterTitle : '')) + '</dd>' +
        '<dt>Localizador</dt><dd>' + escapeHtml(record.sourceLocator || 'sin localizador') + '</dd>' +
        '<dt>Etiquetas</dt><dd>' + escapeHtml(record.topics.concat(record.competencies.map(labelForCompetency)).join(' · ') || 'sin etiquetas') + '</dd>' +
        '<dt>Estado</dt><dd>' + escapeHtml(labelForStatus(record.status)) + ' · C' + record.difficulty.conceptual + ' / T' + record.difficulty.technical + '</dd>' +
      '</dl>' + alert +
      '<div class="personal-study"><label for="personalStudyState">Mi estudio</label><select id="personalStudyState" data-personal-study="' + escapeHtml(record.id) + '">' + Object.keys(STUDY_STATES).map(function (key) { return '<option value="' + key + '"' + (studyStateFor(record.id) === key ? ' selected' : '') + '>' + STUDY_STATES[key] + '</option>'; }).join('') + '</select><small>Estado personal · guardado en este navegador</small></div>' +
      '<div class="reader-actions"><button class="reader-action" type="button" data-reader-action="close">cerrar lector · Esc</button></div>' +
      readerSection('Enunciado', 'Enunciado', content, true) +
      readerSection('Solución', 'Solución', content) +
      readerSection('Resolución', 'Resolución', content) +
      readerSection('Observaciones', 'Observaciones', content) +
      renderPersonalNotes(record) +
      '<div class="reader-actions"><button class="reader-action primary" type="button" data-reader-action="star">' + (isStarred(record.id) ? 'retirar de favoritos' : 'añadir a favoritos') + '</button><button class="reader-action" type="button" data-reader-action="capture">' + (isCaptured(record.id) ? 'retirar captura' : 'capturar ficha') + '</button><button class="reader-action" type="button" data-reader-action="close">cerrar lector</button></div>';
    if (content.status === 'ready' && window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
      window.MathJax.typesetPromise([dom.readerContent]).catch(function () { /* La lectura Markdown sigue disponible sin tipografía matemática. */ });
    }
  }

  function renderReference(reference) {
    var visual = reference.type === 'figure' && reference.file && reference.publicDisplay
      ? '<img class="reference-image" src="' + escapeHtml('data-real/assets/' + reference.file) + '" alt="' + escapeHtml(reference.alt || '') + '"><p class="reference-image-caption">' + escapeHtml(reference.caption || '') + '</p>'
      : (reference.file ? '<p class="reference-unavailable">La imagen original pertenece al material de la fuente y no está publicada en ODEDex. Se conserva el localizador para consulta.</p>' : '');
    var body = reference.type === 'figure' ? '' : referenceFormulaHtml(reference, 'reference-formula');
    return '<p class="reference-view-kicker">referencia citada · ' + escapeHtml(reference.type === 'figure' ? 'figura' : 'fórmula') + '</p>' +
      '<h2 class="reference-view-title">' + escapeHtml(referenceLabel(reference)) + '</h2>' +
      '<p class="reference-view-meta">' + escapeHtml(reference.locator || 'sin localizador') + '</p>' +
      '<div class="reference-view-body"><div class="reference-transcription">' + body + visual +
      '<p class="reference-view-meta">Fuente: ' + escapeHtml(reference.sourceKey || 'sin especificar') + '</p></div>' +
      '<div class="reader-actions"><button class="reader-action primary" type="button" data-reader-action="reference-back">← volver al ejercicio</button><button class="reader-action" type="button" data-reader-action="reference-focus">ampliar referencia</button></div></div>';
  }

  function renderAll() {
    dom.queryInput.value = state.query;
    var starredCount = state.library.filter(function (record) { return isStarred(record.id); }).length;
    dom.starredLabel.textContent = state.showStarred ? 'todos' : 'favoritos (' + starredCount + ')';
    dom.groupLabel.textContent = 'grupos: ' + groupingPath();
    dom.sortLabel.textContent = 'orden: ' + sortPath();
    renderSuggestions();
    renderTokens();
    renderList();
    renderReader();
    window.dispatchEvent(new CustomEvent('odedex:archive-render'));
  }

  function parseMarkdownSections(markdown) {
    var sections = { Enunciado: '', Solución: '', Resolución: '', Observaciones: '' };
    var expression = /^##\s+(Enunciado|Solución|Resolución|Observaciones)\s*$/gmi;
    var matches = [];
    var match;
    while ((match = expression.exec(markdown))) matches.push({ label: match[1], start: match.index, contentStart: expression.lastIndex });
    matches.forEach(function (item, index) {
      var end = index + 1 < matches.length ? matches[index + 1].start : markdown.length;
      sections[item.label] = markdown.slice(item.contentStart, end).trim();
    });
    return sections;
  }

  function renderInline(markdown, referenceIds) {
    var html = escapeHtml(markdown);
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');
    html = html.replace(/\$([^$\n]+)\$/g, '<span class="math-inline">\\($1\\)</span>');
    return decorateReferences(html, referenceIds || []);
  }

  function renderMarkdown(markdown, referenceIds) {
    var lines = String(markdown || '').replace(/\r\n/g, '\n').split('\n');
    var html = [];
    var paragraph = [];
    var list = null;
    var math = [];
    var inMath = false;
    function flushParagraph() {
      if (paragraph.length) { html.push('<p>' + renderInline(paragraph.join(' '), referenceIds) + '</p>'); paragraph = []; }
    }
    function closeList() {
      if (list) { html.push('</' + list + '>'); list = null; }
    }
    lines.forEach(function (line) {
      var embeddedMath = /^(.*?)\$\$([\s\S]+)\$\$(.*?)$/.exec(line);
      if (embeddedMath) {
        closeList();
        if (embeddedMath[1].trim()) paragraph.push(embeddedMath[1].trim());
        flushParagraph();
        html.push('<div class="math-display">\\[' + escapeHtml(embeddedMath[2].trim()) + '\\]</div>');
        if (embeddedMath[3].trim()) paragraph.push(embeddedMath[3].trim());
        return;
      }
      if (line.trim() === '$$') {
        flushParagraph(); closeList();
        if (inMath) { html.push('<div class="math-display">\\[' + escapeHtml(math.join('\n')) + '\\]</div>'); math = []; }
        inMath = !inMath;
        return;
      }
      if (inMath) { math.push(line); return; }
      var heading = /^(#{3,4})\s+(.+)$/.exec(line);
      var unordered = /^\s*[-*+]\s+(.+)$/.exec(line);
      var ordered = /^\s*\d+\.\s+(.+)$/.exec(line);
      if (heading) { flushParagraph(); closeList(); html.push('<h' + heading[1].length + '>' + renderInline(heading[2], referenceIds) + '</h' + heading[1].length + '>'); }
      else if (unordered || ordered) {
        flushParagraph();
        var nextList = unordered ? 'ul' : 'ol';
        if (list !== nextList) { closeList(); list = nextList; html.push('<' + list + '>'); }
        html.push('<li>' + renderInline((unordered || ordered)[1], referenceIds) + '</li>');
      } else if (!line.trim()) { flushParagraph(); closeList(); }
      else { closeList(); paragraph.push(line.trim()); }
    });
    if (inMath) html.push('<div class="math-display">\\[' + escapeHtml(math.join('\n')) + '\\]</div>');
    flushParagraph(); closeList();
    return html.join('');
  }

  function loadContent(record) {
    var current = contentStatus(record);
    if (current.status === 'loading' || current.status === 'ready') return;
    state.content[record.id] = { status: 'loading', sections: {} };
    renderReader();
    fetch(DATA_ROOT + record.content, { cache: 'force-cache' }).then(function (response) {
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return response.text();
    }).then(function (markdown) {
      state.content[record.id] = { status: 'ready', sections: parseMarkdownSections(markdown) };
      if (state.readerId === record.id) renderReader();
    }).catch(function () {
      state.content[record.id] = {
        status: 'error',
        sections: {},
        message: 'No se pudo cargar el Markdown. Sirve esta carpeta mediante HTTP o publica odedex-terminal-data junto a la vista.'
      };
      if (state.readerId === record.id) renderReader();
    });
  }

  function openReader(record, focusSection) {
    if (!record) return;
    state.readerId = record.id;
    state.referenceId = '';
    renderReader();
    loadContent(record);
    if (focusSection) {
      window.requestAnimationFrame(function () {
        var summary = dom.readerContent.querySelector('summary');
        if (summary) summary.focus(); else dom.readerPane.focus();
      });
    }
  }

  function captureReaderState() {
    return {
      scrollTop: window.scrollY,
      readerFocus: state.readerFocus,
      sections: Array.prototype.slice.call(dom.readerContent.querySelectorAll('[data-reader-section]')).reduce(function (result, section) {
        result[section.dataset.readerSection] = section.open;
        return result;
      }, {})
    };
  }

  function restoreReaderState(saved) {
    if (!saved) return;
    Object.keys(saved.sections || {}).forEach(function (key) {
      var section = dom.readerContent.querySelector('[data-reader-section="' + CSS.escape(key) + '"]');
      if (section) section.open = saved.sections[key];
    });
    window.requestAnimationFrame(function () { window.scrollTo(0, saved.scrollTop || 0); });
  }

  function openReference(referenceId) {
    var reference = referenceForId(referenceId);
    if (!reference) return;
    state.referenceReturn = captureReaderState();
    state.referenceId = referenceId;
    state.readerFocus = true;
    renderReader();
    window.dispatchEvent(new CustomEvent('odedex:reference-open', { detail: { id: reference.id, reference: reference, readerId: state.readerId } }));
    window.requestAnimationFrame(function () {
      var back = document.querySelector('[data-explorer-reference-back]');
      if (back) back.focus();
    });
  }

  function closeReference() {
    var saved = state.referenceReturn;
    var referenceId = state.referenceId;
    state.referenceId = '';
    state.referenceReturn = null;
    renderReader();
    restoreReaderState(saved);
    window.requestAnimationFrame(function () {
      var link = dom.readerContent.querySelector('[data-reference-id="' + CSS.escape(referenceId) + '"]') || dom.readerContent.querySelector('summary');
      if (link) link.focus({ preventScroll: true });
    });
  }

  function closeReader() {
    state.readerId = '';
    state.readerFocus = false;
    renderReader();
    dom.recordList.focus();
  }

  function openExplorerRecord(recordId) {
    var record = state.library.find(function (item) { return item.id === recordId; });
    if (!record) return;
    var row = dom.recordList.querySelector('[data-id="' + CSS.escape(record.id) + '"]');
    if (row) state.selectedKey = row.dataset.rowKey;
    state.readerFocus = true;
    openReader(record, true);
    renderList();
  }

  function toggleReaderFocus() {
    if (!state.readerId) {
      state.readerFocus = true;
      openReader(selectedRecord() || state.library[0], true);
    } else {
      state.readerFocus = !state.readerFocus;
      renderReader();
      window.requestAnimationFrame(function () {
        var summary = dom.readerContent.querySelector('summary');
        if (summary) summary.focus(); else dom.readerPane.focus();
      });
    }
  }

  function toggleCapture(record) {
    if (!record) return;
    var captured = isCaptured(record.id);
    var personal = ensureUserRecord(record.id);
    var now = new Date().toISOString();
    personal.capturedAt = captured ? '' : now;
    personal.studyState = captured ? 'new' : 'done';
    personal.updatedAt = now;
    state.userData.events = [{ id: record.id, type: captured ? 'uncapture' : 'capture', at: now }].concat(state.userData.events || []).slice(0, 100);
    persistUserData();
    renderAll();
    showToast(captured ? 'Captura retirada: ' + record.id : 'Capturada: ' + record.id);
  }

  function toggleStarred(record) {
    if (!record) return;
    var starred = isStarred(record.id);
    var personal = ensureUserRecord(record.id);
    personal.starred = !starred;
    personal.updatedAt = new Date().toISOString();
    persistUserData();
    renderAll();
    showToast(starred ? 'Favorito retirado: ' + record.id : 'Favorito añadido: ' + record.id);
  }

  function savePersonalNotes(record, silent) {
    if (!record) return;
    var input = dom.readerContent.querySelector('[data-personal-note]');
    if (!input) return;
    var personal = ensureUserRecord(record.id);
    personal.notes = input.value;
    personal.updatedAt = new Date().toISOString();
    persistUserData();
    var status = dom.readerContent.querySelector('[data-notes-status]');
    if (status) status.textContent = 'guardado';
    if (!silent) showToast('Notas guardadas: ' + record.id);
  }

  function addPersonalTags(record) {
    if (!record) return;
    savePersonalNotes(record, true);
    var input = dom.readerContent.querySelector('[data-personal-tag]');
    if (!input) return;
    var personal = ensureUserRecord(record.id);
    var additions = normalizeTags(input.value);
    personal.tags = normalizeTags(personal.tags.concat(additions));
    personal.updatedAt = new Date().toISOString();
    persistUserData();
    renderReader();
    var nextInput = dom.readerContent.querySelector('[data-personal-tag]');
    if (nextInput) nextInput.focus();
  }

  function removePersonalTag(record, tag) {
    if (!record) return;
    savePersonalNotes(record, true);
    var personal = ensureUserRecord(record.id);
    personal.tags = personal.tags.filter(function (item) { return item !== tag; });
    personal.updatedAt = new Date().toISOString();
    persistUserData();
    renderReader();
  }

  function showToast(message) {
    dom.toast.textContent = message;
    dom.toast.classList.add('is-visible');
    window.clearTimeout(state.toastTimer);
    state.toastTimer = window.setTimeout(function () { dom.toast.classList.remove('is-visible'); }, 2200);
  }

  function scrollListItemIntoView(element) {
    if (!element) return;
    element.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' });
  }

  function focusList() {
    var selected = dom.recordList.querySelector('.record-row.is-selected');
    if (selected) {
      selected.focus({ preventScroll: true });
      scrollListItemIntoView(selected);
      return;
    }
    dom.recordList.focus({ preventScroll: true });
  }

  function groupButtons() {
    return Array.prototype.slice.call(dom.recordList.querySelectorAll('.group-toggle'));
  }

  function focusGroupButton(button) {
    if (!button) return;
    button.focus({ preventScroll: true });
    scrollListItemIntoView(button);
  }

  function focusGroupByKey(key) {
    focusGroupButton(dom.recordList.querySelector('.group-toggle[data-toggle-group="' + CSS.escape(key) + '"]'));
  }

  function firstRowUnderGroup(key) {
    var tree = groupTree(filteredRecords());
    var target = null;
    function findNode(node) {
      if (node.key === key) { target = node; return; }
      for (var index = 0; index < node.childList.length && !target; index += 1) findNode(node.childList[index]);
    }
    findNode(tree);
    if (!target) return null;
    function openFirstPath(node) {
      if (node.depth >= 0) state.collapsed[node.key] = false;
      if (node.childList.length) openFirstPath(node.childList[0]);
    }
    openFirstPath(target);
    var rows = visibleRows(tree);
    return rows.find(function (row) {
      return row.group.key === key || row.ancestors.some(function (ancestor) { return ancestor.key === key; });
    }) || null;
  }

  function toggleIndexGroupFocus() {
    var currentGroup = document.activeElement.closest && document.activeElement.closest('.group-toggle');
    if (currentGroup) {
      var firstRow = firstRowUnderGroup(currentGroup.dataset.toggleGroup);
      if (firstRow) {
        state.selectedKey = firstRow.key;
        saveUi();
        renderList();
      }
      focusList();
      return;
    }
    var selected = selectedRow();
    if (selected && selected.group.depth >= 0) {
      var selectedGroup = dom.recordList.querySelector('.group-toggle[data-toggle-group="' + CSS.escape(selected.group.key) + '"]');
      if (selectedGroup) {
        focusGroupButton(selectedGroup);
        return;
      }
    }
    focusList();
  }

  function moveGroupFocus(delta) {
    var buttons = groupButtons();
    if (!buttons.length) return;
    var current = document.activeElement.closest && document.activeElement.closest('.group-toggle');
    var index = current ? buttons.indexOf(current) : (delta < 0 ? buttons.length : -1);
    var next = Math.max(0, Math.min(buttons.length - 1, index + delta));
    focusGroupButton(buttons[next]);
  }

  function moveGroupToEdge(last) {
    var buttons = groupButtons();
    focusGroupButton(buttons[last ? buttons.length - 1 : 0]);
  }

  function toggleGroupByKey(key) {
    if (!key) return;
    state.collapsed[key] = !state.collapsed[key];
    saveUi();
    renderList();
    focusGroupByKey(key);
  }

  function moveWithinGroupTree(direction) {
    var current = document.activeElement.closest && document.activeElement.closest('.group-toggle');
    if (!current) return;
    var key = current.dataset.toggleGroup;
    var buttons = groupButtons();
    var index = buttons.indexOf(current);
    var depth = Number(current.dataset.groupDepth);
    if (direction === 'left') {
      if (!state.collapsed[key]) {
        toggleGroupByKey(key);
        return;
      }
      for (var parentIndex = index - 1; parentIndex >= 0; parentIndex -= 1) {
        if (Number(buttons[parentIndex].dataset.groupDepth) < depth) {
          focusGroupButton(buttons[parentIndex]);
          return;
        }
      }
      return;
    }
    if (state.collapsed[key]) {
      toggleGroupByKey(key);
      return;
    }
    for (var childIndex = index + 1; childIndex < buttons.length; childIndex += 1) {
      if (Number(buttons[childIndex].dataset.groupDepth) <= depth) break;
      if (Number(buttons[childIndex].dataset.groupDepth) === depth + 1) {
        focusGroupButton(buttons[childIndex]);
        return;
      }
    }
  }

  function moveSelection(delta) {
    var rows = Array.prototype.slice.call(dom.recordList.querySelectorAll('.record-row'));
    if (!rows.length) return;
    var index = rows.findIndex(function (row) { return row.dataset.rowKey === state.selectedKey; });
    if (index < 0) index = 0;
    var next = Math.max(0, Math.min(rows.length - 1, index + delta));
    if (rows[next].dataset.rowKey === state.selectedKey) return;
    var previous = rows[index], selected = rows[next];
    state.selectedKey = selected.dataset.rowKey;
    previous.classList.remove('is-selected');
    previous.setAttribute('aria-selected', 'false');
    selected.classList.add('is-selected');
    selected.setAttribute('aria-selected', 'true');
    dom.recordList.setAttribute('aria-activedescendant', selected.id);
    selected.focus({ preventScroll: true });
    scrollListItemIntoView(selected);
  }

  function moveToEdge(last) {
    moveSelection(last ? Infinity : -Infinity);
  }

  function jumpGroup(delta) {
    var targets = leafGroups(groupTree(filteredRecords()));
    if (targets.length < 2) return;
    var current = selectedRow();
    var index = targets.findIndex(function (target) { return current && target.key === current.group.key; });
    if (index < 0) index = 0;
    var next = (index + delta + targets.length) % targets.length;
    var recordIndex = delta < 0 ? targets[next].records.length - 1 : 0;
    state.selectedKey = rowKey(targets[next], targets[next].records[recordIndex], recordIndex);
    renderList();
    focusList();
    var selected = dom.recordList.querySelector('.record-row.is-selected');
    if (selected) scrollListItemIntoView(selected);
  }

  function toggleSelectedGroup() {
    if (!state.groupings.length) return;
    var row = selectedRow();
    if (!row) return;
    state.collapsed[row.group.key] = !state.collapsed[row.group.key];
    var rows = visibleRows(groupTree(filteredRecords()));
    ensureSelection(rows);
    saveUi();
    renderList();
  }

  function toggleCollapseAll(focusFirstGroup) {
    var tree = groupTree(filteredRecords());
    var keys = collapsibleKeys(tree);
    if (!keys.length) return;
    var shouldCollapse = keys.some(function (key) { return !state.collapsed[key]; });
    keys.forEach(function (key) { state.collapsed[key] = shouldCollapse; });
    ensureSelection(visibleRows(tree));
    saveUi();
    renderList();
    if (shouldCollapse && focusFirstGroup) {
      var firstGroup = dom.recordList.querySelector('.group-toggle');
      if (firstGroup) firstGroup.focus();
    }
    showToast(shouldCollapse ? 'Todos los grupos visibles están plegados.' : 'Todos los grupos visibles están desplegados.');
  }

  function toggleLastSortDirection() {
    if (!state.sorts.length) {
      showToast('No hay criterios explícitos. Pulsa O para añadir uno.');
      return;
    }
    var last = state.sorts[state.sorts.length - 1];
    last.direction = last.direction === 'desc' ? 'asc' : 'desc';
    saveUi();
    renderAll();
    showToast('Último criterio: ' + labelForSortCriterion(last.key) + ' ' + (last.direction === 'desc' ? '↓' : '↑') + '.');
  }

  function applySuggestion(index) {
    var suggestions = directQuerySuggestions();
    var suggestion = suggestions[index];
    if (!suggestion) return;
    state.query = suggestion.prefix + suggestion.completion + ' ';
    state.querySuggestionIndex = 0;
    saveUi();
    renderAll();
    dom.queryInput.focus();
    dom.queryInput.setSelectionRange(state.query.length, state.query.length);
  }

  function openPalette(kind) {
    state.palette = { kind: kind, step: 'field', field: '', query: '', index: 0 };
    dom.paletteBackdrop.hidden = false;
    dom.palette.hidden = false;
    renderPalette();
    window.requestAnimationFrame(function () { dom.paletteInput.focus(); });
  }

  function closePalette(focusTarget) {
    state.palette = null;
    dom.paletteBackdrop.hidden = true;
    dom.palette.hidden = true;
    if (focusTarget !== false) (focusTarget || dom.recordList).focus();
  }

  function paletteItems() {
    if (!state.palette) return [];
    var palette = state.palette;
    if (palette.kind === 'filter' && palette.step === 'field') {
      return FIELD_DEFS.map(function (field) { return { value: field.key, label: field.label + ':', meta: field.description }; });
    }
    if (palette.kind === 'filter' && palette.step === 'value') {
      return facetValues(palette.field).map(function (item) { return { value: item.value, label: item.label, meta: item.count + ' fichas' }; });
    }
    if (palette.kind === 'group') {
      var groupItems = GROUPS.filter(function (item) { return item.key !== 'none' && state.groupings.indexOf(item.key) === -1; }).map(function (item) {
        return { value: item.key, label: item.label, meta: 'añadir nivel' };
      });
      if (state.groupings.length) groupItems.push({ value: '__clear', label: 'limpiar ruta', meta: groupingPath() });
      return groupItems;
    }
    if (palette.kind === 'sort' && palette.step === 'direction') {
      return [
        { value: 'asc', label: 'ascendente ↑', meta: labelForSortCriterion(palette.field) },
        { value: 'desc', label: 'descendente ↓', meta: labelForSortCriterion(palette.field) }
      ];
    }
    if (palette.kind === 'sort') {
      var sortItems = SORTS.filter(function (item) { return !state.sorts.some(function (criterion) { return criterion.key === item.key; }); }).map(function (item) {
        return { value: item.key, label: item.label, meta: 'añadir criterio' };
      });
      if (state.sorts.length) sortItems.push({ value: '__clear', label: 'limpiar orden', meta: sortPath() });
      return sortItems;
    }
    return [];
  }

  function filteredPaletteItems() {
    var needle = normalizeText(state.palette ? state.palette.query : '');
    return paletteItems().filter(function (item) { return !needle || normalizeText(item.label + ' ' + item.meta).indexOf(needle) !== -1; });
  }

  function renderPalette() {
    if (!state.palette) return;
    var palette = state.palette;
    var title = 'Filtros';
    var path = palette.step === 'value' ? 'filtro / ' + (knownField(palette.field) || {}).label + ' / valor' : 'filtro / campo';
    var placeholder = palette.step === 'value' ? 'filtrar valores…' : 'escribe para acotar…';
    var footer = palette.step === 'value' ? '↑↓ seleccionar · Enter añadir filtro · Retroceso volver a campos · Esc cerrar' : '↑↓ seleccionar · Enter confirmar · Esc cerrar';
    if (palette.kind === 'group') {
      title = 'Ruta de agrupación';
      path = 'niveles: ' + groupingPath();
      placeholder = 'añadir nivel de agrupación…';
      footer = '↑↓ seleccionar · Enter añadir nivel · Retroceso quitar último · Esc terminar';
    }
    if (palette.kind === 'sort') {
      title = 'Orden lexicográfico';
      path = palette.step === 'direction' ? 'criterio: ' + labelForSortCriterion(palette.field) + ' / dirección' : 'criterios: ' + sortPath();
      placeholder = palette.step === 'direction' ? 'elige dirección…' : 'añadir criterio de orden…';
      footer = palette.step === 'direction' ? '↑↓ seleccionar · Enter añadir criterio · Retroceso volver · Esc terminar' : '↑↓ seleccionar · Enter elegir criterio · Retroceso quitar último · Esc terminar';
    }
    var items = filteredPaletteItems();
    if (palette.index >= items.length) palette.index = Math.max(0, items.length - 1);
    dom.paletteTitle.textContent = title;
    dom.palettePath.textContent = path;
    dom.paletteInput.placeholder = placeholder;
    dom.paletteInput.value = palette.query;
    dom.paletteOptions.innerHTML = items.length ? items.map(function (item, index) {
      return '<button type="button" class="palette-option ' + (index === palette.index ? 'is-selected' : '') + '" role="option" aria-selected="' + (index === palette.index) + '" data-palette-index="' + index + '"><span class="option-name">' + escapeHtml(item.label) + '</span><span class="option-meta">' + escapeHtml(item.meta || '') + '</span></button>';
    }).join('') : '<div class="palette-empty">Sin coincidencias.</div>';
    dom.paletteFooter.textContent = footer;
  }

  function choosePaletteItem(index) {
    var items = filteredPaletteItems();
    var item = items[index];
    if (!item || !state.palette) return;
    var palette = state.palette;
    if (palette.kind === 'filter' && palette.step === 'field') {
      palette.field = item.value;
      palette.step = 'value';
      palette.query = '';
      palette.index = 0;
      renderPalette();
      dom.paletteInput.focus();
      return;
    }
    if (palette.kind === 'filter' && palette.step === 'value') {
      state.filters = state.filters.filter(function (filter) { return filter.field !== palette.field; });
      state.filters.push({ field: palette.field, value: item.value, negated: false });
      saveUi();
      closePalette(dom.recordList);
      renderAll();
      return;
    }
    if (palette.kind === 'group') {
      if (item.value === '__clear') state.groupings = [];
      else state.groupings.push(item.value);
      state.collapsed = {};
      palette.query = '';
      palette.index = 0;
      saveUi();
      renderAll();
      renderPalette();
      dom.paletteInput.focus();
      return;
    }
    if (palette.kind === 'sort' && palette.step === 'field') {
      if (item.value === '__clear') {
        state.sorts = [];
        palette.query = '';
        palette.index = 0;
        saveUi();
        renderAll();
        renderPalette();
        dom.paletteInput.focus();
        return;
      }
      palette.field = item.value;
      palette.step = 'direction';
      palette.query = '';
      palette.index = 0;
      renderPalette();
      dom.paletteInput.focus();
      return;
    }
    if (palette.kind === 'sort' && palette.step === 'direction') {
      state.sorts.push({ key: palette.field, direction: item.value });
      palette.field = '';
      palette.step = 'field';
      palette.query = '';
      palette.index = 0;
      saveUi();
      renderAll();
      renderPalette();
      dom.paletteInput.focus();
      return;
    }
  }

  function openHelp() {
    dom.helpBackdrop.hidden = false;
    dom.helpPanel.hidden = false;
    window.requestAnimationFrame(function () { dom.closeHelp.focus(); });
  }

  function closeHelp(focusTarget) {
    dom.helpBackdrop.hidden = true;
    dom.helpPanel.hidden = true;
    (focusTarget || dom.recordList).focus();
  }

  function openDataPanel() {
    dom.dataBackdrop.hidden = false;
    dom.dataPanel.hidden = false;
    dom.dataStatus.textContent = state.userData.updatedAt ? 'Última actualización: ' + state.userData.updatedAt : 'Sin cambios personales todavía.';
    window.requestAnimationFrame(function () { dom.exportData.focus(); });
  }

  function closeDataPanel(focusTarget) {
    dom.dataBackdrop.hidden = true;
    dom.dataPanel.hidden = true;
    (focusTarget || dom.recordList).focus();
  }

  function exportUserData() {
    var payload = {
      format: USER_DATA_FORMAT,
      schemaVersion: USER_DATA_VERSION,
      exportedAt: new Date().toISOString(),
      updatedAt: state.userData.updatedAt,
      records: state.userData.records,
      events: state.userData.events
    };
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = 'odedex-user-data-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(function () { URL.revokeObjectURL(url); }, 0);
    dom.dataStatus.textContent = 'Archivo exportado.';
  }

  function validUserDataImport(value) {
    return value && typeof value === 'object' && value.format === USER_DATA_FORMAT && Number(value.schemaVersion) <= USER_DATA_VERSION && value.records && typeof value.records === 'object';
  }

  function mergeUserData(incoming) {
    var imported = normalizeUserData(incoming);
    Object.keys(imported.records).forEach(function (id) {
      var local = state.userData.records[id];
      var remote = imported.records[id];
      if (!local) {
        state.userData.records[id] = remote;
        return;
      }
      local.starred = local.starred || remote.starred;
      local.capturedAt = local.capturedAt || remote.capturedAt;
      local.notes = local.notes || remote.notes;
      local.tags = normalizeTags(local.tags.concat(remote.tags));
      local.updatedAt = local.updatedAt || remote.updatedAt;
    });
    state.userData.events = state.userData.events.concat(imported.events).filter(function (event, index, events) {
      return events.findIndex(function (other) { return other.id === event.id && other.type === event.type && other.at === event.at; }) === index;
    }).slice(0, 100);
    persistUserData();
    renderAll();
    if (state.readerId) renderReader();
    dom.dataStatus.textContent = 'Datos importados y combinados.';
    showToast('Datos personales actualizados.');
  }

  function importUserData(file) {
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      var parsed = safeJson(String(reader.result || ''), null);
      if (!validUserDataImport(parsed)) {
        dom.dataStatus.textContent = 'El archivo no es un export válido de ODEDEX.';
        return;
      }
      mergeUserData(parsed);
    };
    reader.onerror = function () { dom.dataStatus.textContent = 'No se pudo leer el archivo.'; };
    reader.readAsText(file);
    dom.dataFileInput.value = '';
  }

  function updateQuery(value) {
    state.query = value;
    state.querySuggestionIndex = 0;
    saveUi();
    renderAll();
  }

  function resetView(focusListAfter) {
    state.query = '';
    state.filters = [];
    state.groupings = [];
    state.sorts = [];
    state.collapsed = {};
    state.showStarred = false;
    state.selectedKey = '';
    state.readerId = '';
    state.querySuggestionIndex = 0;
    saveUi();
    renderAll();
    if (focusListAfter) focusList();
    showToast('Vista reiniciada. Tus capturas se conservan.');
  }

  function bindEvents() {
    dom.queryForm.addEventListener('submit', function (event) { event.preventDefault(); focusList(); });
    dom.queryInput.addEventListener('input', function () { updateQuery(dom.queryInput.value); });
    dom.queryInput.addEventListener('keydown', function (event) {
      var suggestions = directQuerySuggestions();
      if (event.key === 'ArrowDown' && suggestions.length) {
        event.preventDefault(); state.querySuggestionIndex = (state.querySuggestionIndex + 1) % suggestions.length; renderSuggestions();
      } else if (event.key === 'ArrowUp' && suggestions.length) {
        event.preventDefault(); state.querySuggestionIndex = (state.querySuggestionIndex - 1 + suggestions.length) % suggestions.length; renderSuggestions();
      } else if (event.key === 'Tab' && suggestions.length) {
        event.preventDefault(); applySuggestion(state.querySuggestionIndex);
      } else if (event.key === 'Escape') {
        event.preventDefault(); dom.queryInput.blur(); focusList();
      }
    });
    dom.clearSearch.addEventListener('click', function () { updateQuery(''); dom.queryInput.focus(); });
    dom.suggestionStrip.addEventListener('click', function (event) {
      var button = event.target.closest('[data-suggestion]');
      if (button) applySuggestion(Number(button.dataset.suggestion));
    });
    dom.activeTokens.addEventListener('click', function (event) {
      var filterButton = event.target.closest('[data-remove-filter]');
      if (filterButton) {
        state.filters.splice(Number(filterButton.dataset.removeFilter), 1);
        saveUi(); renderAll(); focusList();
        return;
      }
      var removeButton = event.target.closest('[data-remove-config]');
      if (removeButton) {
        var removeParts = removeButton.dataset.removeConfig.split(':');
        var removeList = removeParts[0] === 'group' ? state.groupings : state.sorts;
        removeList.splice(Number(removeParts[1]), 1);
        if (removeParts[0] === 'group') state.collapsed = {};
        saveUi(); renderAll(); focusList();
        return;
      }
      var invertButton = event.target.closest('[data-invert-sort]');
      if (invertButton) {
        var sort = state.sorts[Number(invertButton.dataset.invertSort)];
        if (sort) sort.direction = sort.direction === 'desc' ? 'asc' : 'desc';
        saveUi(); renderAll(); focusList();
        return;
      }
      var sortToken = event.target.closest('[data-config-kind="sort"]');
      if (sortToken && !event.target.closest('button, .token-grip')) {
        var clickedSort = state.sorts[Number(sortToken.dataset.configIndex)];
        if (clickedSort) clickedSort.direction = clickedSort.direction === 'desc' ? 'asc' : 'desc';
        saveUi(); renderAll(); focusList();
      }
    });
    dom.activeTokens.addEventListener('dragstart', function (event) {
      var token = event.target.closest('[data-config-kind]');
      if (!token) return;
      state.draggedConfig = { kind: token.dataset.configKind, index: Number(token.dataset.configIndex) };
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', token.dataset.configKind + ':' + token.dataset.configIndex);
      token.classList.add('is-dragging');
    });
    dom.activeTokens.addEventListener('dragover', function (event) {
      if (!state.draggedConfig) return;
      var token = event.target.closest('[data-config-kind]');
      var zone = event.target.closest('[data-config-zone]');
      var sourceValue = configList(state.draggedConfig.kind)[state.draggedConfig.index];
      var sourceKey = state.draggedConfig.kind === 'group' ? sourceValue : sourceValue && sourceValue.key;
      var targetKind = token ? token.dataset.configKind : (zone && zone.dataset.configZone);
      if (!targetKind || !configCanAccept(targetKind, sourceKey)) return;
      event.preventDefault();
      dom.activeTokens.querySelectorAll('.is-drop-target').forEach(function (item) { item.classList.remove('is-drop-target'); });
      (token || zone).classList.add('is-drop-target');
    });
    dom.activeTokens.addEventListener('drop', function (event) {
      if (!state.draggedConfig) return;
      var token = event.target.closest('[data-config-kind]');
      var zone = event.target.closest('[data-config-zone]');
      var target = token || zone;
      if (!target) return;
      event.preventDefault();
      var targetKind = token ? token.dataset.configKind : zone.dataset.configZone;
      var targetIndex = token ? Number(token.dataset.configIndex) : configList(targetKind).length;
      if (token) {
        var tokenRect = token.getBoundingClientRect();
        if (event.clientX > tokenRect.left + tokenRect.width / 2) targetIndex += 1;
      }
      var draggedConfig = state.draggedConfig;
      state.draggedConfig = null;
      moveConfig(draggedConfig.kind, draggedConfig.index, targetKind, targetIndex);
    });
    dom.activeTokens.addEventListener('dragend', function () {
      state.draggedConfig = null;
      dom.activeTokens.querySelectorAll('.is-dragging').forEach(function (item) { item.classList.remove('is-dragging'); });
      dom.activeTokens.querySelectorAll('.is-drop-target').forEach(function (item) { item.classList.remove('is-drop-target'); });
    });
    dom.openStarred.addEventListener('click', function () {
      state.showStarred = !state.showStarred;
      renderAll();
      focusList();
    });
    dom.openFilter.addEventListener('click', function () { openPalette('filter'); });
    dom.openGroup.addEventListener('click', function () { openPalette('group'); });
    dom.openSort.addEventListener('click', function () { openPalette('sort'); });
    dom.reverseSort.addEventListener('click', function () { toggleLastSortDirection(); focusList(); });
    dom.collapseAll.addEventListener('click', function () { toggleCollapseAll(true); });
    dom.resetView.addEventListener('click', function () { resetView(true); });
    dom.openData.addEventListener('click', function () { openDataPanel(); });
    dom.openHelp.addEventListener('click', function () { openHelp(); });
    dom.recordList.addEventListener('click', function (event) {
      var group = event.target.closest('[data-toggle-group]');
      if (group) {
        state.collapsed[group.dataset.toggleGroup] = !state.collapsed[group.dataset.toggleGroup];
        saveUi(); renderList();
        var restoredGroup = dom.recordList.querySelector('[data-toggle-group="' + CSS.escape(group.dataset.toggleGroup) + '"]');
        if (restoredGroup) restoredGroup.focus();
        return;
      }
      var row = event.target.closest('[data-row-key]');
      if (!row) return;
      state.selectedKey = row.dataset.rowKey;
      renderList();
      focusList();
    });
    dom.recordList.addEventListener('dblclick', function (event) {
      var row = event.target.closest('[data-row-key]');
      if (!row) return;
      state.selectedKey = row.dataset.rowKey;
      openReader(selectedRecord(), true);
    });
    dom.readerContent.addEventListener('click', function (event) {
      var referenceLink = event.target.closest('[data-reference-id]');
      if (referenceLink) { openReference(referenceLink.dataset.referenceId); return; }
      var removeTag = event.target.closest('[data-remove-tag]');
      if (removeTag) {
        removePersonalTag(state.library.find(function (item) { return item.id === state.readerId; }), removeTag.dataset.removeTag);
        return;
      }
      var action = event.target.closest('[data-reader-action]');
      if (!action) return;
      if (action.dataset.readerAction === 'star') toggleStarred(state.library.find(function (item) { return item.id === state.readerId; }));
      if (action.dataset.readerAction === 'capture') toggleCapture(state.library.find(function (item) { return item.id === state.readerId; }));
      if (action.dataset.readerAction === 'save-notes') savePersonalNotes(state.library.find(function (item) { return item.id === state.readerId; }), false);
      if (action.dataset.readerAction === 'add-tag') addPersonalTags(state.library.find(function (item) { return item.id === state.readerId; }));
      if (action.dataset.readerAction === 'close') closeReader();
      if (action.dataset.readerAction === 'reference-back') closeReference();
      if (action.dataset.readerAction === 'reference-focus') toggleReaderFocus();
    });
    dom.readerContent.addEventListener('change', function (event) {
      if (!event.target.matches('[data-personal-study]') || !Object.prototype.hasOwnProperty.call(STUDY_STATES, event.target.value)) return;
      var personal = ensureUserRecord(event.target.dataset.personalStudy);
      personal.studyState = event.target.value;
      personal.capturedAt = personal.studyState === 'done' ? personal.capturedAt || new Date().toISOString() : '';
      personal.updatedAt = new Date().toISOString();
      persistUserData(); renderAll();
      var control = dom.readerContent.querySelector('#personalStudyState');
      if (control) control.focus({ preventScroll: true });
    });
    dom.readerContent.addEventListener('input', function (event) {
      if (!event.target.matches('[data-personal-note]')) return;
      var noteId = state.readerId;
      var personal = ensureUserRecord(noteId);
      personal.notes = event.target.value;
      personal.updatedAt = new Date().toISOString();
      var status = dom.readerContent.querySelector('[data-notes-status]');
      if (status) status.textContent = 'cambios pendientes';
      window.clearTimeout(state.noteTimer);
      state.noteTimer = window.setTimeout(function () {
        state.noteTimer = null;
        persistUserData();
        var feedback = dom.readerContent.querySelector('[data-notes-status]');
        if (feedback && state.readerId === noteId) feedback.textContent = 'guardado';
      }, 650);
    });
    dom.readerContent.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' && event.target.matches('[data-personal-tag]')) {
        event.preventDefault();
        addPersonalTags(state.library.find(function (item) { return item.id === state.readerId; }));
      }
    });
    window.addEventListener('odedex:explorer-open', function (event) {
      if (event.detail && event.detail.id) openExplorerRecord(event.detail.id);
    });
    window.addEventListener('odedex:reference-close', closeReference);
    dom.paletteInput.addEventListener('input', function () { if (state.palette) { state.palette.query = dom.paletteInput.value; state.palette.index = 0; renderPalette(); } });
    dom.paletteInput.addEventListener('keydown', function (event) {
      if (!state.palette) return;
      var items = filteredPaletteItems();
      if (event.key === 'ArrowDown') { event.preventDefault(); state.palette.index = Math.min(items.length - 1, state.palette.index + 1); renderPalette(); }
      else if (event.key === 'ArrowUp') { event.preventDefault(); state.palette.index = Math.max(0, state.palette.index - 1); renderPalette(); }
      else if (event.key === 'Enter') { event.preventDefault(); choosePaletteItem(state.palette.index); }
      else if (event.key === 'Escape') { event.preventDefault(); closePalette(dom.recordList); }
      else if (event.key === 'Backspace' && !state.palette.query && state.palette.kind === 'filter' && state.palette.step === 'value') { event.preventDefault(); state.palette.step = 'field'; state.palette.field = ''; state.palette.index = 0; renderPalette(); }
      else if (event.key === 'Backspace' && !state.palette.query && state.palette.kind === 'group' && state.groupings.length) {
        event.preventDefault(); state.groupings.pop(); state.collapsed = {}; state.palette.index = 0; saveUi(); renderAll(); renderPalette();
      } else if (event.key === 'Backspace' && !state.palette.query && state.palette.kind === 'sort' && state.palette.step === 'direction') {
        event.preventDefault(); state.palette.step = 'field'; state.palette.field = ''; state.palette.index = 0; renderPalette();
      } else if (event.key === 'Backspace' && !state.palette.query && state.palette.kind === 'sort' && state.sorts.length) {
        event.preventDefault(); state.sorts.pop(); state.palette.index = 0; saveUi(); renderAll(); renderPalette();
      }
    });
    dom.paletteOptions.addEventListener('click', function (event) { var item = event.target.closest('[data-palette-index]'); if (item) choosePaletteItem(Number(item.dataset.paletteIndex)); });
    dom.closePalette.addEventListener('click', function () { closePalette(dom.recordList); });
    dom.paletteBackdrop.addEventListener('click', function () { closePalette(dom.recordList); });
    dom.closeHelp.addEventListener('click', function () { closeHelp(dom.recordList); });
    dom.helpBackdrop.addEventListener('click', function () { closeHelp(dom.recordList); });
    dom.exportData.addEventListener('click', exportUserData);
    dom.importData.addEventListener('click', function () { dom.dataFileInput.click(); });
    dom.dataFileInput.addEventListener('change', function () { importUserData(dom.dataFileInput.files[0]); });
    dom.closeData.addEventListener('click', function () { closeDataPanel(dom.recordList); });
    dom.dataBackdrop.addEventListener('click', function () { closeDataPanel(dom.recordList); });
    window.addEventListener('storage', function (event) {
      if (event.key === USER_DATA_KEY || event.key === PROGRESS_KEY || event.key === STARRED_KEY) { state.userData = loadUserData(); renderAll(); }
    });
    document.addEventListener('keydown', function (event) {
      if (document.getElementById('app').hidden) return;
      if (document.getElementById('archivePopup').open) return;
      if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) return;
      if (!dom.palette.hidden) {
        if (event.key === 'Escape') { event.preventDefault(); closePalette(dom.recordList); }
        return;
      }
      if (!dom.helpPanel.hidden) {
        if (event.key === 'Escape' || event.key === '?') { event.preventDefault(); closeHelp(dom.recordList); }
        return;
      }
      if (!dom.dataPanel.hidden) {
        if (event.key === 'Escape') { event.preventDefault(); closeDataPanel(dom.recordList); }
        return;
      }
      var target = event.target;
      if (target.closest('#archiveVisualizer') && event.key !== 'Escape') return;
      var isEditing = target.matches && target.matches('input, textarea, select, [contenteditable="true"]');
      if (isEditing) return;
      if ((event.key === 'Enter' || event.key === ' ') && target.closest('button, a, summary, [role="button"]')) return;
      if (event.key === '?') { event.preventDefault(); openHelp(); return; }
      var isGroupControl = target.closest && target.closest('.group-toggle');
      if (isGroupControl && (event.key === ' ' || event.key === 'Enter')) return;
      if (event.key === 'a' || event.key === 'A') { event.preventDefault(); toggleIndexGroupFocus(); return; }
      if (isGroupControl) {
        if (event.key === 'ArrowDown' || event.key === 'j') { event.preventDefault(); moveGroupFocus(1); return; }
        if (event.key === 'ArrowUp' || event.key === 'k') { event.preventDefault(); moveGroupFocus(-1); return; }
        if (event.key === 'ArrowLeft') { event.preventDefault(); moveWithinGroupTree('left'); return; }
        if (event.key === 'ArrowRight') { event.preventDefault(); moveWithinGroupTree('right'); return; }
        if (event.key === 'Home') { event.preventDefault(); moveGroupToEdge(false); return; }
        if (event.key === 'End') { event.preventDefault(); moveGroupToEdge(true); return; }
      }
      var isReaderControl = target.closest && target.closest('.reader-section, .reader-actions');
      if (isReaderControl && (event.key === ',' || event.key === '.')) {
        var summaries = Array.prototype.slice.call(dom.readerContent.querySelectorAll('.reader-section summary'));
        var currentIndex = summaries.indexOf(target.closest('summary'));
        if (currentIndex !== -1) {
          event.preventDefault();
          var nextIndex = Math.max(0, Math.min(summaries.length - 1, currentIndex + (event.key === '.' ? 1 : -1)));
          summaries[nextIndex].focus();
        }
        return;
      }
      if (event.key === 'e' || event.key === 'E') { event.preventDefault(); toggleReaderFocus(); return; }
      if (event.key === '/') { event.preventDefault(); dom.queryInput.focus(); dom.queryInput.select(); return; }
      if (event.key === 'f' || event.key === 'F') { event.preventDefault(); openPalette('filter'); return; }
      if (event.key === 's' || event.key === 'S') { event.preventDefault(); toggleStarred(selectedRecord()); return; }
      if (event.key === 'g' || event.key === 'G') { event.preventDefault(); openPalette('group'); return; }
      if (event.key === 'o' || event.key === 'O') { event.preventDefault(); openPalette('sort'); return; }
      if (event.key === 'r' || event.key === 'R') { event.preventDefault(); toggleLastSortDirection(); return; }
      if (event.key === 'p' || event.key === 'P') { event.preventDefault(); toggleCollapseAll(true); return; }
      if (event.key === 'x' || event.key === 'X') { event.preventDefault(); resetView(true); return; }
      if (event.key === 'd' || event.key === 'D') { event.preventDefault(); openDataPanel(); return; }
      var isPreviousGroup = event.key === ',' || event.code === 'Comma';
      var isNextGroup = event.key === '.' || event.code === 'Period';
      if (isPreviousGroup) { event.preventDefault(); jumpGroup(-1); return; }
      if (isNextGroup) { event.preventDefault(); jumpGroup(1); return; }
      if (event.key === ' ') { event.preventDefault(); toggleSelectedGroup(); return; }
      if (event.key === 'c' || event.key === 'C') { event.preventDefault(); toggleCapture(selectedRecord()); return; }
      if (event.key === 'Enter') {
        if (isReaderControl) return;
        event.preventDefault();
        openReader(selectedRecord(), Boolean(state.readerId));
        return;
      }
      if (event.key === 'Escape') {
        event.preventDefault();
        if (state.readerId) closeReader();
        else if (state.query || state.filters.length) { state.query = ''; state.filters = []; saveUi(); renderAll(); focusList(); }
        return;
      }
      if (event.key === 'ArrowDown' || event.key === 'j') { event.preventDefault(); moveSelection(1); return; }
      if (event.key === 'ArrowUp' || event.key === 'k') { event.preventDefault(); moveSelection(-1); return; }
      if (event.key === 'Home') { event.preventDefault(); moveToEdge(false); return; }
      if (event.key === 'End') { event.preventDefault(); moveToEdge(true); return; }
      if (event.key === 'PageDown') { event.preventDefault(); moveSelection(10); return; }
      if (event.key === 'PageUp') { event.preventDefault(); moveSelection(-10); return; }
    });
  }

  function loadLibrary() {
    function finishLibrary(records) {
      state.library = records.map(normalizeRecord);
      state.dataState = 'ready';
      renderAll();
      return Promise.all([
        fetch(REFERENCES_URL, { cache: 'no-cache' }).then(function (response) {
          if (!response.ok) throw new Error('HTTP ' + response.status);
          return response.json();
        }).catch(function () { return {}; }),
        fetch(DATA_ROOT + 'search-index.json', { cache: 'no-cache' }).then(function (response) {
          if (!response.ok) throw new Error('HTTP ' + response.status);
          return response.json();
        }).catch(function () { return {}; })
      ]).then(function (assets) {
        state.references = assets[0] && typeof assets[0] === 'object' ? assets[0] : {};
        state.contentIndex = assets[1] && typeof assets[1] === 'object' ? assets[1] : {};
        renderAll();
      });
    }
    if (Array.isArray(window.ODEDEX_LIBRARY) && window.ODEDEX_LIBRARY.length) {
      return finishLibrary(window.ODEDEX_LIBRARY);
    }
    return fetch(DATA_URL, { cache: 'no-cache' }).then(function (response) {
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return response.json();
    }).then(function (manifest) {
      if (!manifest || !Array.isArray(manifest.records)) throw new Error('Manifiesto no válido');
      return finishLibrary(manifest.records);
    }).catch(function () {
      state.dataState = 'fallback';
      renderAll();
    });
  }

  window.ODEDEX_ARCHIVE = {
    records: function () { return state.library; },
    read: function (id) { openReader(state.library.find(function (record) { return record.id === id; }), true); },
    visibleIds: function () { return filteredRecords().map(function (record) { return record.id; }); },
    activeId: function () { var record = selectedRecord(); return record && record.id; },
    refresh: renderAll,
    refreshSelection: function () { renderList(); window.dispatchEvent(new CustomEvent('odedex:archive-render')); },
    readStudy: function (study) {
      var result = Object.assign({}, study);
      Object.keys(state.userData.records).forEach(function (id) {
        var personal = state.userData.records[id], previous = study[id] || {};
        result[id] = Object.assign({}, previous, { state: studyStateFor(id), saved: personal.starred, note: personal.notes, updated: personal.updatedAt });
      });
      return result;
    },
    saveStudy: function (study) {
      var changed = false;
      Object.keys(study).forEach(function (id) {
        var entry = study[id], personal = personalDataFor(id);
        if (personal.starred === entry.saved && personal.notes === entry.note && studyStateFor(id) === entry.state && Boolean(personal.capturedAt) === (entry.state === 'done')) return;
        personal = ensureUserRecord(id);
        personal.starred = Boolean(entry.saved); personal.notes = entry.note || '';
        personal.studyState = Object.prototype.hasOwnProperty.call(STUDY_STATES, entry.state) ? entry.state : 'new';
        personal.capturedAt = entry.state === 'done' ? personal.capturedAt || new Date().toISOString() : '';
        personal.updatedAt = entry.updated || new Date().toISOString(); changed = true;
      });
      if (changed) { persistUserData(); renderAll(); }
    }
  };
  loadUi();
  state.library = [];
  bindEvents();
  renderAll();
  loadLibrary();
}());
