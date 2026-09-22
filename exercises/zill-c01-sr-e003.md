---
title: "Zill Repaso C1 Ejercicio 3"
exercise-id: zill-c01-sr-e003
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 1, ejercicio 3"
topics:
  - fundamentos
competencies:
  - modelizar.formular-edo
difficulty:
  conceptual: 1
  technical: 1
solution-status: draft
---

## Enunciado

**Problemas 3 y 4.**

Llene el espacio en blanco y después escriba este resultado como una ecuación diferencial lineal de segundo orden que no contenga a las constantes $c_1$ y $c_2$ y que tenga la forma $F(y, y'') = 0$. Los símbolos $c_1$, $c_2$ y $k$ representan constantes.

3. $\dfrac{d^2}{dx^2}\!\left(c_1 \cos kx + c_2 \sin kx\right) = $

## Solución

El espacio se llena con $-k^2(c_1 \cos kx + c_2 \sin kx)$. La ecuación diferencial es

$$
y'' + k^2 y = 0.
$$

## Resolución

Se define $y = c_1 \cos kx + c_2 \sin kx$. Se deriva dos veces:

$$
\begin{aligned}
y' &= -k c_1 \sin kx + k c_2 \cos kx, \\[4pt]
y'' &= -k^2 c_1 \cos kx - k^2 c_2 \sin kx = -k^2\bigl(c_1 \cos kx + c_2 \sin kx\bigr) = -k^2 y.
\end{aligned}
$$

Por tanto, $y'' = -k^2 y$, lo que equivale a

$$
y'' + k^2 y = 0.
$$

La ecuación tiene la forma $F(y, y'') = 0$ y no contiene a $c_1$ ni a $c_2$.

## Observaciones

Esta es la ecuación del oscilador armónico simple. La solución general $y = c_1 \cos kx + c_2 \sin kx$ describe un movimiento periódico de frecuencia angular $k$.
