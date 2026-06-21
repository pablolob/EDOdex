# Cómo contribuir a EDOdex

## Añadir un ejercicio nuevo

> **Evita duplicados:** antes de empezar, abre o asígnate un *issue* para anunciar
> en qué ejercicio vas a trabajar. Si ya existe un issue abierto para ese problema,
> coméntalo pidiéndolo. Así dos personas no resuelven lo mismo a la vez.

1. **Abre o asígnate un issue** con el título `[Zill 9] Cap. X.Y — Problema N`  
   (usa la plantilla *new_exercise* cuando esté disponible).  
   Queda asignado a ti mientras trabajas en él.

2. **Copia la plantilla** en la carpeta `exercises/` del capítulo correspondiente:

   ```
   cp templates/exercise.md books/Zill/<NN_capitulo>/exercises/ex_NNN.md
   ```

3. **Rellena el frontmatter** — los campos marcados con `~` son obligatorios.  
   Comprueba que el YAML es válido antes de hacer commit (puedes usar [yamllint.com](https://www.yamllint.com/)).

4. **Escribe la resolución** usando LaTeX para las matemáticas:
   - Expresiones en línea: `$...$`
   - Ecuaciones en bloque: `$$...$$`
   - Cada paso numerado y justificado bajo `## Resolución`.

5. **Nombra el archivo** con el siguiente número disponible en `exercises/`  
   (sin huecos, tres dígitos: `ex_001.md`, `ex_002.md`, …).

6. **Abre una Pull Request** con el título `[Zill 9] Cap. X.Y — Problema N`  
   y referencia el issue con `Closes #<número>`.

---

## Convención del campo `id`

```
<libro>-<edicion>-<cap>.<sec>-<nnn>
```

| Parte     | Ejemplo | Descripción                           |
| --------- | ------- | ------------------------------------- |
| `libro`   | `zill`  | Identificador del libro en minúsculas |
| `edicion` | `9`     | Edición del libro                     |
| `cap`     | `01`    | Número de capítulo con cero inicial   |
| `sec`     | `1`     | Número de subsección                  |
| `nnn`     | `001`   | Número de problema con tres dígitos   |

Ejemplo: `zill-9-01.1-001` → Zill 9.ª ed., capítulo 1, sección 1.1, problema 001.

---

## Campos obligatorios del frontmatter

| Campo                    | Tipo   | Ejemplo                                |
| ------------------------ | ------ | -------------------------------------- |
| `id`                     | string | `zill-9-01.1-001`                      |
| `capitulo.numero`        | entero | `1`                                    |
| `subseccion.id`          | string | `"1.1"`                                |
| `numero_problema`        | entero | `1`                                    |
| `estado`                 | enum   | `borrador` \| `revision` \| `aprobado` |

---

## Reportar un error

Abre un *issue* en GitHub describiendo:
- El archivo afectado (`books/Zill/.../ex_NNN.md`).
- El error encontrado (paso incorrecto, LaTeX mal formado, metadato faltante…).
- La corrección propuesta si la conoces.

Las plantillas de *issue* están planificadas en `.github/ISSUE_TEMPLATE/` (Fase 2 del roadmap).
