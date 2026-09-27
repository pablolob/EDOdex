# ODEDEx

ODEDEx es un repositorio de apoyo para estudiar ecuaciones diferenciales. Reúne ejercicios en Markdown, con soluciones cuando están disponibles, y una interfaz web para buscarlos, filtrarlos y organizar el progreso personal.

## Contenido

- `index.html`: interfaz de ODEDEx.
- `data-real/`: catálogo y contenido que carga la interfaz.
- `exercises/`: colección de ejercicios en Markdown.
- `shared/`: estilos y módulos JavaScript compartidos.

Las fichas identifican la fuente y el localizador de cada ejercicio. Los libros y otros materiales de terceros conservan sus derechos; este repositorio no los relicencia.

## Instalación y uso

No hace falta instalar dependencias. Descarga el repositorio desde GitHub con **Code → Download ZIP** y descomprime el archivo, o clónalo con Git:

```bash
git clone <URL-del-repositorio>
cd <carpeta-del-repositorio>
```

Para abrir la interfaz, inicia un servidor local desde la carpeta del proyecto:

```bash
python -m http.server 8000
```

Abre <http://localhost:8000> en el navegador. Puedes buscar y filtrar ejercicios y guardar capturas, notas y progreso en el almacenamiento local de ese navegador.

### Instalar GitHub Desktop (opcional)

GitHub es el servicio donde se alojan repositorios; Git es el programa que registra sus cambios. Para una opción visual, instala [GitHub Desktop](https://desktop.github.com/), inicia sesión y selecciona **File → Clone repository**. Elige este repositorio y una carpeta local. Después puedes abrir esa carpeta y ejecutar el servidor de Python indicado arriba.

## Contribuir

Puedes contribuir con correcciones de enunciados o soluciones, mejoras de la interfaz y documentación:

1. En GitHub, crea un *fork* del repositorio.
2. Clona tu fork con GitHub Desktop o `git clone`.
3. Crea una rama para el cambio, por ejemplo `corrige-solucion`.
4. Edita los archivos y guarda los cambios con un *commit* descriptivo.
5. Sube la rama (*push*) a tu fork y abre un *pull request* hacia este repositorio explicando el cambio.

Al contribuir, conserva las atribuciones y los localizadores de las fuentes. No añadas páginas escaneadas, imágenes ni otros materiales de terceros sin permiso para redistribuirlos.

## Licencia

El código y los materiales originales de este proyecto se ofrecen bajo la licencia [Creative Commons Atribución 4.0 Internacional (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). Al reutilizarlos, acredita a ODEDEx y enlaza esta licencia. Consulta [LICENSE](LICENSE) para conocer el alcance.

Los ejercicios y otros materiales de terceros —incluido el contenido identificado como procedente de Boyce o Zill— quedan excluidos de esta licencia y conservan los derechos de sus titulares.
