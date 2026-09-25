---
title: "Boyce 3.2 Ejercicio 19"
exercise-id: boyce-c03-s02-e019
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.2, ejercicio 19"
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

Si $W(f, g)$ es el wronskiano de $f$ y $g$ y si $u = 2f - g$, $v = f + 2g$, halle el wronskiano $W(u, v)$ de $u$ y $v$ términos de $W(f, g)$.

## Solución

$$
W(u, v) = 5\,W(f, g).
$$

## Resolución

El **wronskiano** de dos funciones diferenciables $f$ y $g$ es

$$
W(f, g) = f g' - f' g.
$$

Las funciones $u = 2f - g$ y $v = f + 2g$ son diferenciables siempre que $f$ y $g$ lo sean, y sus derivadas son

$$
u' = 2f' - g', \qquad v' = f' + 2g'.
$$

Se sustituye en la definición del wronskiano,

$$
\begin{aligned}
W(u, v) &= u v' - u' v \\
&= (2f - g)(f' + 2g') - (2f' - g')(f + 2g).
\end{aligned}
$$

Al desarrollar cada producto,

$$
\begin{aligned}
(2f - g)(f' + 2g') &= 2f f' + 4f g' - g f' - 2g g', \\
(2f' - g')(f + 2g) &= 2f f' + 4f' g - g' f - 2g' g.
\end{aligned}
$$

Se restan ambos desarrollos y se agrupan los términos que contienen $f g'$ y $f' g$,

$$
\begin{aligned}
W(u, v) &= 2f f' + 4f g' - g f' - 2g g' - 2f f' - 4f' g + g' f + 2g g' \\
&= 4f g' + f g' - g f' - 4f' g \\
&= 5f g' - 5f' g \\
&= 5\left(f g' - f' g\right) \\
&= 5\,W(f, g).
\end{aligned}
$$

## Observaciones

La sustitución lineal $u = 2f - g$, $v = f + 2g$ se puede escribir con la matriz $\begin{pmatrix} 2 & -1 \\ 1 & 2 \end{pmatrix}$. El wronskiano de la nueva pareja es el de la original multiplicado por el determinante de esa matriz, $2\cdot 2 - (-1)\cdot 1 = 5$. La regla general es $W(af + bg,\, cf + dg) = (ad - bc)\,W(f, g)$.

Como el factor $5$ no es nulo, $W(u, v)$ se anula exactamente en los mismos puntos que $W(f, g)$. Por tanto, $\{u, v\}$ es un conjunto fundamental de soluciones en un intervalo si y solo si $\{f, g\}$ lo es.
