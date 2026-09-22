---
title: "Boyce 5.4 Ejercicio 2"
exercise-id: boyce-c05-s04-e002
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.4, ejercicio 2"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - clasificar.punto-singular-regular
  - clasificar.punto-singular-irregular
prerequisitos:
  - algebra.factorizacion-polinomios
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c05s04i01-p270.png
---

## Enunciado

En cada uno de los problemas 1 a 18, halle todos los puntos singulares de la ecuación dada y determine si cada uno de ellos es singular o irregular.

2. $x^2(1 - x)^2y'' + 2xy' + 4y = 0$

## Solución

Los puntos singulares son $x=0$ y $x=1$. El punto $x=0$ es **regular** y el punto $x=1$ es **irregular**.

## Resolución

La ecuación es lineal de segundo orden y homogénea. Se escribe en forma estándar dividiendo por el coeficiente de $y''$, que se anula en $x=0$ y en $x=1$:

$$
y'' + P(x)y' + Q(x)y = 0, \qquad
P(x) = \frac{2}{x(1-x)^2}, \qquad
Q(x) = \frac{4}{x^2(1-x)^2}.
$$

Los coeficientes $P$ y $Q$ son analíticos salvo en $x=0$ y $x=1$, donde el denominador se anula. Por tanto, los únicos puntos singulares son $x=0$ y $x=1$.

Un punto singular $x_0$ es regular si $(x-x_0)P(x)$ y $(x-x_0)^2Q(x)$ son analíticas en $x_0$; si alguna de las dos no lo es, el punto es irregular.

En $x_0=0$,

$$
xP(x) = \frac{2}{(1-x)^2}, \qquad x^2Q(x) = \frac{4}{(1-x)^2},
$$

y ambas funciones son analíticas en $x=0$. Por tanto, $x=0$ es un punto singular regular.

En $x_0=1$,

$$
(x-1)P(x) = \frac{2(x-1)}{x(1-x)^2} = -\frac{2}{x(1-x)},
$$

que no es analítica en $x=1$, pues tiende a infinito cuando $x\to 1$. Por tanto, $x=1$ es un punto singular irregular.

## Observaciones

En un punto singular regular, las singularidades de $P$ y $Q$ son a lo sumo polos de orden $1$ y $2$, respectivamente. En $x=1$ el coeficiente $P$ presenta un polo de orden $2$, superior al orden $1$ admisible, lo que origina la irregularidad. De forma equivalente, el criterio se formula con la existencia finita de los límites $\lim_{x\to x_0}(x-x_0)P(x)$ y $\lim_{x\to x_0}(x-x_0)^2Q(x)$.
