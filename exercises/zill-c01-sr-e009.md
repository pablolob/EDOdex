---
title: "Zill Repaso C1 Ejercicio 9"
exercise-id: zill-c01-sr-e009
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 1, ejercicio 9"
topics:
  - fundamentos
competencies:
  - verificar.sustitucion-directa
  - clasificar.identificar-familia
difficulty:
  conceptual: 1
  technical: 1
solution-status: draft
---

## Enunciado

**Problemas 7 a 12.**

En los problemas 7 a 12 relacione cada una de las siguientes ecuaciones diferenciales con una o más de estas soluciones.

**a)** $y = 0$, $\quad$ **b)** $y = 2$, $\quad$ **c)** $y = 2x$, $\quad$ **d)** $y = 2x^2$.

9. $y' = 2y - 4$

## Solución

La solución es **b)** $y = 2$.

## Resolución

Se sustituye cada candidato en $y' = 2y - 4$:

- **a)** $y = 0$, $y' = 0$: $0 = 2 \cdot 0 - 4 = -4$. No se satisface.
- **b)** $y = 2$, $y' = 0$: $0 = 2 \cdot 2 - 4 = 0$. Se satisface.
- **c)** $y = 2x$, $y' = 2$: $2 = 2 \cdot 2x - 4 = 4x - 4$, es decir $4x = 6$, $x = 3/2$. No es identidad.
- **d)** $y = 2x^2$, $y' = 4x$: $4x = 2 \cdot 2x^2 - 4 = 4x^2 - 4$. No es identidad.

Solo **b** es solución.

## Observaciones

El valor $y = 2$ anula el miembro derecho de la ecuación ($2 \cdot 2 - 4 = 0$) y su derivada también es $0$. Es una **solución de equilibrio** de la EDO autónoma $y' = 2y - 4$.
