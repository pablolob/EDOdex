---
title: "Boyce 5.7 Ejercicio 10"
exercise-id: boyce-c05-s07-e010
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.7, ejercicio 10"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - clasificar.punto-singular-regular
  - clasificar.punto-singular-irregular
  - resolver-series.ecuacion-indicial
prerequisitos:
  - calculo-avanzado.series-potencias
  - polinomios.resolver
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c05s07i01-p290.png
---

## Enunciado

En cada uno de los problemas 1 a 12, halle todos los puntos singulares regulares de la ecuación diferencial dada. Determine la ecuación indicial y los exponentes de la singularidad en cada punto singular regular.

10. $(x - 2)^2(x + 2)y'' + 2xy' + 3(x - 2)y = 0$

## Solución

La ecuación tiene dos puntos singulares, $x=2$ y $x=-2$. El único **punto singular regular** es $x=-2$; el punto $x=2$ es **irregular**. En $x=-2$ la ecuación indicial y sus exponentes son

$$
r(r-1)-\frac{1}{4}r=0,\qquad r_1=\frac{5}{4},\quad r_2=0.
$$

## Resolución

Se escribe la ecuación como $P(x)y''+Q(x)y'+R(x)y=0$ con

$$
P(x)=(x-2)^2(x+2),\qquad Q(x)=2x,\qquad R(x)=3(x-2).
$$

Los puntos singulares son los ceros del coeficiente de $y''$: $x=2$ (cero doble) y $x=-2$ (cero simple). En todo $x\ne 2,-2$ los coeficientes son analíticos, de modo que no hay otros puntos singulares finitos.

Para clasificarlos se divide por $P$. Con $x\ne 2,-2$,

$$
y''+p(x)y'+q(x)y=0,\qquad
p(x)=\frac{2x}{(x-2)^2(x+2)},\qquad
q(x)=\frac{3(x-2)}{(x-2)^2(x+2)}=\frac{3}{(x-2)(x+2)}.
$$

Un punto singular $x_0$ es regular si $(x-x_0)p(x)$ y $(x-x_0)^2q(x)$ son analíticas en $x_0$.

**Punto $x_0=-2$.** Se forman los productos

$$
(x+2)p(x)=\frac{2x}{(x-2)^2},\qquad
(x+2)^2q(x)=\frac{3(x+2)}{x-2}.
$$

Ambos son cocientes de polinomios con denominador no nulo en $x=-2$, luego son analíticos allí. El punto $x=-2$ es **regular**, con

$$
p_0=\lim_{x\to-2}(x+2)p(x)=\frac{2(-2)}{(-4)^2}=-\frac{1}{4},\qquad
q_0=\lim_{x\to-2}(x+2)^2q(x)=0.
$$

La ecuación indicial es

$$
r(r-1)+p_0r+q_0=r(r-1)-\frac{1}{4}r=r\left(r-\frac{5}{4}\right)=0.
$$

Sus raíces son los exponentes de la singularidad: $r_1=\dfrac{5}{4}$ y $r_2=0$.

**Punto $x_0=2$.** En este caso

$$
(x-2)p(x)=\frac{2x}{(x-2)(x+2)},
$$

que tiene un polo simple en $x=2$ y por tanto no es analítica allí. Falla la primera condición de regularidad, así que $x=2$ es un **punto singular irregular** y no se le asocia ecuación indicial.

## Observaciones

Criterio de clasificación: un punto singular $x_0$ es **regular** si $(x-x_0)\frac{Q}{P}$ y $(x-x_0)^2\frac{R}{P}$ son analíticas en $x_0$; si alguna deja de serlo, el punto es **irregular**. Un cero doble o de orden superior del coeficiente de $y''$ suele producir una singularidad irregular, como ocurre en $x=2$.

El método de Frobenius solo se aplica en puntos singulares regulares. En $x=-2$ los exponentes $r_1=\frac{5}{4}$ y $r_2=0$ no difieren en un entero, de modo que las dos soluciones en serie de Frobenius son linealmente independientes y no requieren término logarítmico.
