---
title: "Boyce 5.4 Ejercicio 5"
exercise-id: boyce-c05-s04-e005
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.4, ejercicio 5"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - clasificar.punto-singular-regular
  - clasificar.punto-singular-irregular
prerequisitos:
  - algebra.factorizacion-polinomios
  - ecuaciones-diferenciales.linealidad
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c05s04i01-p270.png
---

## Enunciado

En cada uno de los problemas 1 a 18, halle todos los puntos singulares de la ecuación dada y determine si cada uno de ellos es singular o irregular.

5. $(1 - x^2)^2y'' + x(1 - x)y' + (1 + x)y = 0$

## Solución

La ecuación tiene dos puntos singulares:

$$
x = 1 \ \text{es regular}, \qquad x = -1 \ \text{es irregular}.
$$

## Resolución

Se escribe la ecuación en forma estándar. Al dividir entre el coeficiente de $y''$, $(1-x^2)^2$, resulta

$$
y'' + P(x)\,y' + Q(x)\,y = 0,
$$

con

$$
P(x) = \frac{x(1-x)}{(1-x^2)^2}, \qquad Q(x) = \frac{1+x}{(1-x^2)^2}.
$$

Como $1-x^2=(1-x)(1+x)$, el denominador común es $(1-x^2)^2=(1-x)^2(1+x)^2$. Las expresiones se simplifican a

$$
P(x) = \frac{x}{(1-x)(1+x)^2}, \qquad Q(x) = \frac{1}{(1-x)^2(1+x)}.
$$

Los puntos singulares son los ceros del coeficiente de $y''$: $x=1$ y $x=-1$.

En $x=1$ se calcula

$$
(x-1)P(x) = \frac{(x-1)x}{(1-x)(1+x)^2} = \frac{-x}{(1+x)^2},
\qquad
(x-1)^2Q(x) = \frac{(x-1)^2}{(1-x)^2(1+x)} = \frac{1}{1+x}.
$$

Ambas funciones son analíticas en $x=1$ (son cocientes de polinomios con denominador no nulo). Por tanto, $x=1$ es un **punto singular regular**.

En $x=-1$ se calcula

$$
(x+1)P(x) = \frac{(x+1)x}{(1-x)(1+x)^2} = \frac{x}{(1-x)(1+x)},
\qquad
(x+1)^2Q(x) = \frac{(x+1)^2}{(1-x)^2(1+x)} = \frac{x+1}{(1-x)^2}.
$$

La función $(x+1)^2Q(x)$ es analítica en $x=-1$, pero $(x+1)P(x)$ tiene un polo allí: al evaluarla el numerador vale $-1$ y el denominador se anula. Basta que una de las dos expresiones deje de ser analítica para que el punto sea **singular irregular**. Por tanto, $x=-1$ es un **punto singular irregular**.

## Observaciones

El criterio de regularidad se aplica sobre la forma estándar: el punto $x_0$ es regular si $(x-x_0)P(x)$ y $(x-x_0)^2Q(x)$ son analíticas en $x_0$, e irregular en caso contrario.

La asimetría entre $x=1$ y $x=-1$ proviene del factor $x(1-x)$ que multiplica a $y'$: introduce una raíz que compensa la singularidad en $x=1$, pero no en $x=-1$.

Solo se consideran puntos singulares finitos. El comportamiento en $x=\infty$ no forma parte de la pregunta.
