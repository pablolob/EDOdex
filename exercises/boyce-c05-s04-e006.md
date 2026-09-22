---
title: "Boyce 5.4 Ejercicio 6"
exercise-id: boyce-c05-s04-e006
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.4, ejercicio 6"
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

6. $x^2y'' + xy' + (x^2 - v^2)y = 0$ (Ecuación de Bessel)

## Solución

La ecuación tiene un único punto singular, $x=0$, y es un **punto singular regular**:

$$
x=0 \ \text{es regular}.
$$

## Resolución

La ecuación es lineal de segundo orden y homogénea. Se escribe en forma estándar dividiendo por el coeficiente de $y''$, que se anula solo en $x=0$:

$$
y'' + P(x)\,y' + Q(x)\,y = 0, \qquad
P(x) = \frac{1}{x}, \qquad
Q(x) = \frac{x^2-\nu^2}{x^2}.
$$

Los coeficientes $P$ y $Q$ son analíticos salvo en $x=0$, donde se anula el denominador. Por tanto, el único punto singular es $x=0$.

Un punto singular $x_0$ es regular si $(x-x_0)P(x)$ y $(x-x_0)^2Q(x)$ son analíticas en $x_0$; si alguna de las dos no lo es, el punto es irregular. En $x_0=0$,

$$
xP(x) = 1, \qquad x^2Q(x) = x^2-\nu^2.
$$

Ambas expresiones son polinomios, luego son analíticas en $x=0$. Por tanto, $x=0$ es un **punto singular regular**.

## Observaciones

El criterio de regularidad se aplica sobre la forma estándar: $x_0$ es regular si $(x-x_0)P(x)$ y $(x-x_0)^2Q(x)$ son analíticas en $x_0$, e irregular en caso contrario.

El resultado no depende de $\nu$: el término $\nu^2$ no altera la analiticidad de $x^2Q(x)$ en el origen. En particular, la clasificación también vale para $\nu=0$. El enunciado transcribe el parámetro de la ecuación de Bessel como $v$; aquí se usa la notación estándar $\nu$.

Todos los puntos $x\ne 0$ son puntos ordinarios. Solo se consideran puntos singulares finitos; el comportamiento en $x=\infty$ no forma parte de la pregunta.
