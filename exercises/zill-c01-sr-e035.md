---
title: "Zill Repaso C1 Ejercicio 35"
exercise-id: zill-c01-sr-e035
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 1, ejercicio 35"
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

35. $y(0) = 0,\quad y'(0) = 0$

## Solución

La solución del PVI es

$$
y = \frac{1}{2}e^{3x} - \frac{1}{2}e^{-x} - 2x.
$$

## Resolución

Se parte de la familia de soluciones y su derivada:

$$
\begin{aligned}
y   &= c_1 e^{3x} + c_2 e^{-x} - 2x, \\
y'  &= 3c_1 e^{3x} - c_2 e^{-x} - 2.
\end{aligned}
$$

Se evalúan las condiciones iniciales $y(0) = 0$ e $y'(0) = 0$:

$$
\begin{aligned}
y(0)   &= c_1 + c_2 = 0, \\
y'(0)  &= 3c_1 - c_2 - 2 = 0.
\end{aligned}
$$

De la primera ecuación se obtiene $c_2 = -c_1$. Sustituyendo en la segunda:

$$
3c_1 - (-c_1) - 2 = 0 \;\Longrightarrow\; 4c_1 = 2 \;\Longrightarrow\; c_1 = \frac{1}{2}.
$$

Entonces $c_2 = -\dfrac{1}{2}$. La solución particular del PVI es

$$
y = \frac{1}{2}e^{3x} - \frac{1}{2}e^{-x} - 2x.
$$

## Observaciones

La familia dada contiene dos parámetros libres, lo que es apropiado para una ecuación diferencial de segundo orden. Las dos condiciones iniciales determinan de manera única los valores de $c_1$ y $c_2$.

