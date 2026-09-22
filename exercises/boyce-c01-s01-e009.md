---
title: "Boyce 1.1 Ejercicio 9"
exercise-id: boyce-c01-s01-e009
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 1.1, ejercicio 9"
statement-status: accepted
solution-status: draft
topics:
  - fundamentos
competencies:
  - verificar.solucion
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c01s01i01-p025.png
---

## Enunciado

Verifique que la función o funciones que se dan son una solución de la ecuación diferencial: $$xy' - y = x^2, \quad y = 3x + x^2$$

## Solución

La función dada satisface la ecuación diferencial. Al sustituir se obtiene la identidad

$$
xy' - y = x^2.
$$

## Resolución

Se deriva $y = 3x + x^2$:

$$
y' = 3 + 2x.
$$

Se sustituyen $y$ e $y'$ en el miembro izquierdo de la ecuación:

$$
\begin{aligned}
xy' - y &= x(3 + 2x) - (3x + x^2) \\
&= 3x + 2x^2 - 3x - x^2 \\
&= x^2.
\end{aligned}
$$

El resultado coincide con el miembro derecho $x^2$. Se concluye que $y = 3x + x^2$ es una solución de $xy' - y = x^2$.

## Observaciones

La verificación emplea únicamente derivación y sustitución directa, sin ningún método de resolución. La función es un polinomio, por lo que está definida y es derivable para todo $x\in\mathbb{R}$; no hay restricción de dominio.
