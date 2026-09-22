---
title: "Zill Repaso C1 Ejercicio 12"
exercise-id: zill-c01-sr-e012
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 1, ejercicio 12"
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

12. $xy'' - y' = 0$

## Solución

Las soluciones son **a)** $y = 0$, **b)** $y = 2$ y **d)** $y = 2x^2$.

## Resolución

Se sustituye cada candidato en $xy'' - y' = 0$:

- **a)** $y = 0$, $y' = 0$, $y'' = 0$: $x \cdot 0 - 0 = 0$. Se satisface.
- **b)** $y = 2$, $y' = 0$, $y'' = 0$: $x \cdot 0 - 0 = 0$. Se satisface.
- **c)** $y = 2x$, $y' = 2$, $y'' = 0$: $x \cdot 0 - 2 = -2 \neq 0$.
- **d)** $y = 2x^2$, $y' = 4x$, $y'' = 4$: $x \cdot 4 - 4x = 0$. Se satisface.

Por tanto, las soluciones son **a**, **b** y **d**.

## Observaciones

La ecuación $xy'' - y' = 0$ es de segundo orden y admite como soluciones todas las funciones de la forma $y = C_1 + C_2 x^2$. Las tres soluciones encontradas corresponden a elecciones particulares de $C_1$ y $C_2$.
