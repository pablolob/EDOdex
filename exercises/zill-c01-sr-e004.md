---
title: "Zill Repaso C1 Ejercicio 4"
exercise-id: zill-c01-sr-e004
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 1, ejercicio 4"
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

4. $\dfrac{d^2}{dx^2}\!\left(c_1 \cosh kx + c_2 \operatorname{senh} kx\right) = $

## Solución

El espacio se llena con $k^2(c_1 \cosh kx + c_2 \operatorname{senh} kx)$. La ecuación diferencial es

$$
y'' - k^2 y = 0.
$$

## Resolución

Se define $y = c_1 \cosh kx + c_2 \operatorname{senh} kx$. Se deriva dos veces:

$$
\begin{aligned}
y' &= k c_1 \operatorname{senh} kx + k c_2 \cosh kx, \\[4pt]
y'' &= k^2 c_1 \cosh kx + k^2 c_2 \operatorname{senh} kx = k^2\bigl(c_1 \cosh kx + c_2 \operatorname{senh} kx\bigr) = k^2 y.
\end{aligned}
$$

Por tanto, $y'' = k^2 y$, lo que equivale a

$$
y'' - k^2 y = 0.
$$

La ecuación tiene la forma $F(y, y'') = 0$ y no contiene a $c_1$ ni a $c_2$.

## Observaciones

Las funciones hiperbólicas $\cosh kx$ y $\operatorname{senh} kx$ forman un conjunto fundamental de soluciones de $y'' - k^2 y = 0$, de forma análoga a como $\cos kx$ y $\sin kx$ lo hacen para $y'' + k^2 y = 0$.
