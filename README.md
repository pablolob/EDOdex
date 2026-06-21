# EDOdex — Banco de ejercicios resueltos de EDO

[![Licencia: CC BY-NC-SA 4.0](https://img.shields.io/badge/Licencia-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Estado: alpha](https://img.shields.io/badge/Estado-alpha-orange.svg)]()

> Repositorio de ejercicios resueltos de **Ecuaciones Diferenciales Ordinarias (EDO)** para el curso de la **Universidad Nebrija**, basado en Dennis G. Zill, *Ecuaciones Diferenciales con problemas de valores en la frontera*, 9.ª edición.

---

## Para quién es esto

| Perfil | Uso |
|---|---|
| **Estudiante** | Soluciones detalladas paso a paso para cada ejercicio del libro. |
| **LLM / RAG** | Corpus estructurado para alimentar un asistente de estudio con IA. |
| **Libro Quarto** | Fuente de la sección "Ejercicios resueltos" de [*Ecuaciones Diferenciales Ordinarias*](https://pablobato.quarto.pub/ecuaciones-diferenciales-ordinarias/). |

---

## Libros base

**Dennis G. Zill** — *Ecuaciones Diferenciales con problemas de valores en la frontera*, 9.ª edición.  
Versión métrica preparada por **Aly El-Iraki** (Profesor Emérito, Alexandria University).

---

## Estructura del repositorio

```text
EDOdex/
├── README.md                          ✅ este archivo
├── CONTRIBUTING.md                    ✅ cómo añadir ejercicios
├── LICENSE                            ✅ CC BY-NC-SA 4.0
├── CITATION.cff                       ✅ cómo citar este repositorio
│
├── books/                             ── ejercicios organizados por libro
│   └── Zill/
│       ├── book.yaml                  ✅ metadatos del libro
│       └── 01_introduccion/
│           ├── topic.yaml             ✅ metadatos del capítulo + subsecciones
│           └── exercises/
│               └── ex_001.md          ✅ primer ejercicio resuelto (ejemplo)
│
├── templates/
│   └── exercise.md                    ✅ plantilla para nuevos ejercicios
│
├── schemas/                           🔜 esquemas de validación YAML/JSON
│   ├── book.schema.json
│   ├── topic.schema.json
│   └── exercise.schema.json
│
├── scripts/                           🔜 automatización
│   ├── validate_bank.py               ←  valida frontmatter contra esquemas
│   ├── build_quarto.py                ←  genera .qmd para el libro Quarto
│   └── build_rag.py                   ←  exporta corpus para pipeline RAG
│
├── rag/                               🔜 documentación del pipeline RAG
│
├── quarto/                            🔜 integración con libro Quarto
│
├── domjudge/                          🔜 problemas para plataforma de juez
│   └── problems/
│
└── .github/                           🔜 automatización CI/CD
    ├── workflows/
    │   └── validate.yml               ←  validación automática en PR
    ├── ISSUE_TEMPLATE/
    │   ├── new_exercise.yml           ←  proponer ejercicio nuevo
    │   └── bug_report.yml
    └── pull_request_template.md
```

---

## Convención de nombrado

```
books/<Libro>/<NN_capitulo>/exercises/ex_NNN.md
```

- `<Libro>` — identificador del libro (ej. `Zill`).
- `<NN_capitulo>` — número de capítulo con prefijo cero + nombre corto (ej. `01_introduccion`).
- `ex_NNN.md` — número secuencial con tres dígitos, **único dentro del capítulo** (ej. `ex_001.md`).

La **subsección** (1.1, 1.2, 1.3…) no forma una carpeta propia; se almacena en el frontmatter YAML del ejercicio bajo la clave `subseccion`. Esto permite acomodar distintas estructuras de libro sin modificar la jerarquía de carpetas.

---

## Formato de un ejercicio

Cada ejercicio es un archivo Markdown con frontmatter YAML compatible con Quarto y con el pipeline RAG. La plantilla canónica está en [`templates/exercise.md`](templates/exercise.md).

**Campos obligatorios del frontmatter:** `id`, `capitulo`, `subseccion`, `numero_problema`, `estado`.

Ejemplo mínimo de frontmatter:

```yaml
---
title: "Ejercicio 1.1.1 — Determinar orden y linealidad"
id: zill-9-01.1-001
subseccion:
  id: "1.1"
  titulo: "Definiciones y terminología"
numero_problema: 1
estado: aprobado
---
```

El cuerpo sigue secciones fijas para facilitar el procesado automático:

```
## Enunciado  →  ## Resolución  →  ## Resultado  [ →  ## Comprobación  →  ## Notas ]
```

Las expresiones matemáticas se escriben en LaTeX (`$...$` en línea, `$$...$$` en bloque).

**Ciclo de vida de un ejercicio (`estado`):**

| Valor | Significado |
|---|---|
| `borrador` | Resolución incompleta o sin revisar. No se incluye en el libro ni en el corpus RAG. |
| `revision` | Resolución completa, pendiente de revisión por el autor o un colaborador. |
| `aprobado` | Revisado y correcto. Se incluye en builds de Quarto y exportaciones RAG. |

---

## Piezas del ecosistema (roadmap)

### `schemas/`

Esquemas JSON Schema para validar el frontmatter de `book.yaml`, `topic.yaml` y los ejercicios. Permiten detectar automáticamente campos faltantes o mal tipados antes de hacer un merge.

### `scripts/`

| Script | Función |
|---|---|
| `validate_bank.py` | Valida todos los archivos del banco contra sus esquemas JSON Schema. |
| `build_quarto.py` | Agrega los ejercicios por capítulo/subsección y genera los `.qmd` para el libro. |
| `build_rag.py` | Exporta el corpus en JSONL (metadatos + texto) para pipelines de embeddings/RAG. |

### `rag/`

Documentación del pipeline RAG: chunking, embeddings, sistema de recuperación y prompt engineering para el asistente de estudio con LLM.

### `quarto/`

Configuración de la integración con el libro Quarto publicado en [pablobato.quarto.pub](https://pablobato.quarto.pub/ecuaciones-diferenciales-ordinarias/). Incluirá los archivos de configuración y el flujo de build.

### `domjudge/`

Adaptación de problemas a formato DOMjudge para evaluación automática en plataforma de juez en línea.

### `.github/`

- Validación automática del frontmatter en cada Pull Request (`validate.yml`).
- Plantillas de *issue* para proponer ejercicios nuevos o reportar errores.
- Plantilla de Pull Request para contribuciones estandarizadas.

---

## Roadmap

| Fase | Contenido |
|---|---|
| **0 — Semilla** *(actual)* | README, plantilla, book.yaml, topic.yaml, 1 ejercicio de ejemplo. |
| **1 — Capítulo 1** | Todos los ejercicios de las secciones 1.1, 1.2 y 1.3. |
| **2 — Infraestructura** | Schemas JSON, `validate_bank.py`, GitHub Actions. |
| **3 — Quarto** | `build_quarto.py`, integración con libro publicado. |
| **4 — RAG** | `build_rag.py`, documentación del pipeline, demo del asistente. |
| **5 — Capítulos 2–N** | Ampliar el banco con el resto del libro de Zill. |

---

## Estado actual

- [x] Plantilla de ejercicio (`templates/exercise.md`)
- [x] Metadatos del libro (`books/Zill/book.yaml`)
- [x] Capítulo 1 — metadatos y subsecciones (`books/Zill/01_introduccion/topic.yaml`)
- [x] Capítulo 1, sección 1.1 — 1 ejercicio resuelto de ejemplo (`ex_001.md`)
- [ ] Schemas de validación
- [ ] Validación automática en CI
- [ ] Script `build_quarto.py`
- [ ] Script `build_rag.py`

---

## Citar este repositorio

Ver [`CITATION.cff`](CITATION.cff). Cita rápida APA:

> Lobato de la Cruz, P. (2026). *EDOdex: Banco de ejercicios resueltos de Ecuaciones Diferenciales Ordinarias*. Universidad Nebrija.

---

## Contribuir

Lee [`CONTRIBUTING.md`](CONTRIBUTING.md) para saber cómo añadir o corregir ejercicios.

---

## Licencia

Contenido bajo licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).  
Libre para usar y adaptar con **atribución**, **sin fines comerciales** y **compartiendo igual**.
