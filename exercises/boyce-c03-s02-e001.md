---
title: "Boyce 3.2 Ejercicio 1"
exercise-id: boyce-c03-s02-e001
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.2, ejercicio 1"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies: []
prerequisitos:
  - ecuaciones-diferenciales.wronskiano
  - matrices.determinantes
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s02i01-p152.png
---

## Enunciado

En cada uno de los problemas 1 a 6, determine el wronskiano de las funciones dadas.

1. $e^{2x}, e^{-3x/2}$

## Solución

El wronskiano de las funciones $e^{2x}$ y $e^{-3x/2}$ es

$$
W\!\left(e^{2x}, e^{-3x/2}\right)(x) = -\frac{7}{2}\,e^{x/2}.
$$

## Resolución

Para dos funciones diferenciables $f$ y $g$, el **wronskiano** es el determinante

$$
W(f,g)(x) =
\begin{vmatrix}
f(x) & g(x) \\
f'(x) & g'(x)
\end{vmatrix}
= f(x)g'(x) - f'(x)g(x).
$$

Se toman $f(x) = e^{2x}$ y $g(x) = e^{-3x/2}$. Sus derivadas son

$$
f'(x) = 2e^{2x}, \qquad g'(x) = -\frac{3}{2}e^{-3x/2}.
$$

Al sustituir en el determinante,

$$
\begin{aligned}
W(f,g)(x) &= e^{2x}\left(-\frac{3}{2}e^{-3x/2}\right) - \left(2e^{2x}\right)e^{-3x/2} \\
&= -\frac{3}{2}e^{2x-3x/2} - 2e^{2x-3x/2} \\
&= \left(-\frac{3}{2}-2\right)e^{x/2} \\
&= -\frac{7}{2}e^{x/2}.
\end{aligned}
$$

Las dos exponenciales están definidas y son derivables en todo $\mathbb{R}$; por tanto, el wronskiano está definido en todo $\mathbb{R}$.

## Observaciones

El wronskiano no se anula en ningún punto, porque $e^{x/2} > 0$ para todo $x$. Por el criterio del wronskiano, $e^{2x}$ y $e^{-3x/2}$ son **linealmente independientes** en $\mathbb{R}$.

Para exponenciales con exponentes distintos rige la fórmula $W(e^{ax}, e^{bx}) = (b-a)e^{(a+b)x}$. Con $a = 2$ y $b = -\dfrac{3}{2}$ se recupera el mismo resultado.
