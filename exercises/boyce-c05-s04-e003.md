---
title: "Boyce 5.4 Ejercicio 3"
exercise-id: boyce-c05-s04-e003
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.4, ejercicio 3"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - clasificar.punto-singular-regular
  - clasificar.punto-singular-irregular
prerequisitos:
  - algebra.factorizacion-polinomios
  - calculo-avanzado.series-potencias
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c05s04i01-p270.png
---

## Enunciado

En cada uno de los problemas 1 a 18, halle todos los puntos singulares de la ecuación dada y determine si cada uno de ellos es singular o irregular.

3. $x^2(1 - x)y'' + (x - 2)y' - 3xy = 0$

## Solución

La ecuación tiene dos puntos singulares: $x=0$, que es **irregular**, y $x=1$, que es **regular**.

## Resolución

La ecuación es lineal de segundo orden y homogénea. Se escribe en forma estándar dividiendo por el coeficiente de $y''$, que se anula en $x=0$ y en $x=1$:

$$
y'' + P(x)y' + Q(x)y = 0, \qquad
P(x) = \frac{x-2}{x^2(1-x)}, \qquad
Q(x) = \frac{-3x}{x^2(1-x)} = \frac{-3}{x(1-x)}.
$$

Los coeficientes $P$ y $Q$ son analíticos salvo en $x=0$ y $x=1$, donde el denominador se anula. Por tanto, los únicos puntos singulares son $x=0$ y $x=1$.

Un punto singular $x_0$ es regular si $(x-x_0)P(x)$ y $(x-x_0)^2Q(x)$ son analíticas en $x_0$; si alguna de las dos no lo es, el punto es irregular.

En $x_0=0$,

$$
xP(x) = \frac{x-2}{x(1-x)}, \qquad x^2Q(x) = \frac{-3x}{1-x}.
$$

La segunda función es analítica en $x=0$. La primera no lo es: tiene un polo en $x=0$, pues $xP(x)\to\infty$ cuando $x\to 0$. Al fallar una de las dos condiciones, $x=0$ es un punto singular irregular.

En $x_0=1$,

$$
(x-1)P(x) = \frac{(x-1)(x-2)}{x^2(1-x)} = -\frac{x-2}{x^2}, \qquad
(x-1)^2Q(x) = \frac{-3(x-1)^2}{x(1-x)} = \frac{3(x-1)}{x}.
$$

Ambas son funciones racionales sin singularidad en $x=1$, luego son analíticas allí. Por tanto, $x=1$ es un punto singular regular.

## Observaciones

En un punto singular regular, las singularidades de $P$ y $Q$ son a lo sumo polos de orden $1$ y $2$, respectivamente. En $x=0$ el coeficiente $P$ presenta un polo de orden $2$, superior al orden $1$ admisible, lo que origina la irregularidad. En $x=1$, $P$ y $Q$ presentan a lo sumo polos de orden $1$, admisibles para un punto singular regular.

De forma equivalente, el criterio se formula con la existencia finita de los límites $\lim_{x\to x_0}(x-x_0)P(x)$ y $\lim_{x\to x_0}(x-x_0)^2Q(x)$.

Todos los puntos $x\ne 0,1$ son puntos ordinarios; alrededor de cualquiera de ellos la ecuación admite dos soluciones en serie de potencias.
