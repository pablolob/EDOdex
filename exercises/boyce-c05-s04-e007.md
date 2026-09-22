---
title: "Boyce 5.4 Ejercicio 7"
exercise-id: boyce-c05-s04-e007
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.4, ejercicio 7"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - clasificar.punto-singular-regular
prerequisitos:
  - calculo-avanzado.series-potencias
  - ecuaciones-diferenciales.linealidad
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c05s04i01-p270.png
---

## Enunciado

En cada uno de los problemas 1 a 18, halle todos los puntos singulares de la ecuación dada y determine si cada uno de ellos es singular o irregular.

7. $(x + 3)y'' - 2xy' + (1 - x^2)y = 0$

## Solución

La ecuación tiene un único punto singular, $x=-3$, y es un **punto singular regular**:

$$
x=-3 \ \text{es regular}.
$$

## Resolución

La ecuación es lineal de segundo orden y homogénea. Se escribe en forma estándar dividiendo por el coeficiente de $y''$, que se anula solo en $x=-3$:

$$
y'' + P(x)\,y' + Q(x)\,y = 0, \qquad
P(x) = \frac{-2x}{x+3}, \qquad
Q(x) = \frac{1-x^2}{x+3}.
$$

Los coeficientes $P$ y $Q$ son cocientes de polinomios, analíticos salvo en $x=-3$, donde se anula el denominador. Por tanto, el único punto singular es $x=-3$.

Un punto singular $x_0$ es regular si $(x-x_0)P(x)$ y $(x-x_0)^2Q(x)$ son analíticas en $x_0$; si alguna de las dos no lo es, el punto es irregular. En $x_0=-3$,

$$
(x+3)P(x) = -2x, \qquad (x+3)^2Q(x) = (x+3)(1-x^2).
$$

Ambas expresiones son polinomios, luego son analíticas en $x=-3$. Por tanto, $x=-3$ es un **punto singular regular**.

## Observaciones

El criterio de regularidad se aplica sobre la forma estándar: $x_0$ es regular si $(x-x_0)P(x)$ y $(x-x_0)^2Q(x)$ son analíticas en $x_0$, e irregular en caso contrario.

Todos los puntos $x\ne -3$ son puntos ordinarios. Solo se consideran puntos singulares finitos; el comportamiento en $x=\infty$ no forma parte de la pregunta.
