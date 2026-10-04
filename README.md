# ODEDEX para alumnos

Archivo y herramientas para explorar ejercicios de ecuaciones diferenciales.

Incluye 4375 ejercicios en Markdown, con o sin solución.

## Contenido y visualizaciones

El archivo reúne ejercicios de ecuaciones diferenciales organizados por fuente, capítulo, sección, tema, competencias y dificultad. Permite buscar, filtrar, agrupar, marcar favoritos, capturar ejercicios y añadir notas personales.

Las vistas Atlas, Dificultad, Capítulos, Órbita, Red y Asignatura muestran distintas relaciones del material: distribución temática, niveles de dificultad, estructura de los capítulos, conexiones entre conceptos y recorrido de aprendizaje. El lector ampliado incorpora además un visualizador interactivo de EDOs.

La interfaz minimal se mantiene en docs/frontend/drafts/odedex-ui-minimal/.

## Abrir la interfaz

Desde esta carpeta, inicia un servidor HTTP:

```powershell
python -m http.server 8000
```

Después abre <http://localhost:8000>.

Incluye Atlas, Dificultad, Capítulos, Órbita, Red y Asignatura, y un visualizador de EDOs en el lector ampliado.

La interfaz usa Cobalt oscuro y guarda capturas, notas, selecciones y estados personales en el navegador de cada alumno.
