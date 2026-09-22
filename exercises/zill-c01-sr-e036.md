---
title: "Zill Repaso C1 Ejercicio 36"
exercise-id: zill-c01-sr-e036
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 1, ejercicio 36"
topics:
  - fundamentos
competencies:
  - aplicar-condiciones.problema-valor-inicial
  - verificar.condiciones-iniciales
difficulty:
  conceptual: 1
  technical: 1
solution-status: draft
---

## Enunciado

**Problemas 35 a 38.**

En los problemas 35 a 38, $y = c_1 e^{3x} + c_2 e^{-x} - 2x$ es una familia de soluciones de dos parámetros de la ED de segundo orden $y'' - 2y' - 3y = 6x + 4$. Determine una solución del PVI de segundo orden que consiste en esta ecuación diferencial y en las condiciones iniciales dadas.

36. $y(0) = 1,\quad y'(0) = -3$

## Solución

La solución del PVI es

$$
y = e^{-x} - 2x.
$$

## Resolución

Se parte de la familia de soluciones y su derivada:

$$
\begin{aligned}
y   &= c_1 e^{3x} + c_2 e^{-x} - 2x, \\
y'  &= 3c_1 e^{3x} - c_2 e^{-x} - 2.
\end{aligned}
$$

Se evalúan las condiciones iniciales $y(0) = 1$ e $y'(0) = -3$:

$$
\begin{aligned}
y(0)   &= c_1 + c_2 = 1, \\
y'(0)  &= 3c_1 - c_2 - 2 = -3.
\end{aligned}
$$

De la segunda ecuación se despeja: $3c_1 - c_2 = -1$. De la primera: $c_2 = 1 - c_1$. Sustituyendo:

$$
3c_1 - (1 - c_1) = -1 \;\Longrightarrow\; 4c_1 - 1 = -1 \;\Longrightarrow\; 4c_1 = 0 \;\Longrightarrow\; c_1 = 0.
$$

Entonces $c_2 = 1$. La solución particular del PVI es

$$
y = e^{-x} - 2x.
$$

## Observaciones

En este caso, el término $e^{3x}$ desaparece de la solución porque $c_1 = 0$. La solución resultante es una combinación de una exponencial decreciente y un término lineal.

