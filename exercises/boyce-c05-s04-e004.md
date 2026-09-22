---
title: "Boyce 5.4 Ejercicio 4"
exercise-id: boyce-c05-s04-e004
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.4, ejercicio 4"
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

4. $x^2(1 - x^2)y'' + \frac{2}{x}y' + 4y = 0$

## Solución

Los puntos singulares son $x=0$, $x=1$ y $x=-1$. El punto $x=0$ es un **punto singular irregular**; los puntos $x=1$ y $x=-1$ son **puntos singulares regulares**.

## Resolución

La ecuación es lineal de segundo orden y homogénea. Se escribe en la forma estándar $y''+P(x)y'+Q(x)y=0$ dividiendo por el coeficiente de $y''$, que es $x^2(1-x^2)$:

$$
P(x)=\frac{2/x}{x^2(1-x^2)}=\frac{2}{x^3(1-x^2)},\qquad
Q(x)=\frac{4}{x^2(1-x^2)}.
$$

Los coeficientes $P$ y $Q$ son cocientes de polinomios, analíticos salvo donde se anula su denominador común $x^3(1-x^2)$. Con la factorización $1-x^2=(1-x)(1+x)$, los ceros son $x=0$, $x=1$ y $x=-1$. El coeficiente de $y''$ se anula en esos mismos puntos. Por tanto, los únicos puntos singulares son $x=0$, $x=1$ y $x=-1$.

Un punto singular $x_0$ es regular si $(x-x_0)P(x)$ y $(x-x_0)^2Q(x)$ son analíticas en $x_0$; si alguna de las dos no lo es, el punto es irregular.

En $x_0=0$,

$$
xP(x)=\frac{2}{x^2(1-x^2)},
$$

que no es analítica en $x=0$, pues $\frac{2}{x^2(1-x^2)}\to\infty$ cuando $x\to 0$. La condición de regularidad falla; por tanto, $x=0$ es un **punto singular irregular**.

En $x_0=1$, usando $1-x^2=(1-x)(1+x)$,

$$
(x-1)P(x)=\frac{2(x-1)}{x^3(1-x)(1+x)}=-\frac{2}{x^3(1+x)},\qquad
(x-1)^2Q(x)=\frac{4(x-1)^2}{x^2(1-x)(1+x)}=-\frac{4(x-1)}{x^2(1+x)}.
$$

Ambas expresiones son cocientes cuyo denominador no se anula en $x=1$; son analíticas allí. Por tanto, $x=1$ es un **punto singular regular**.

En $x_0=-1$,

$$
(x+1)P(x)=\frac{2(x+1)}{x^3(1-x)(1+x)}=\frac{2}{x^3(1-x)},\qquad
(x+1)^2Q(x)=\frac{4(x+1)^2}{x^2(1-x)(1+x)}=\frac{4(x+1)}{x^2(1-x)}.
$$

Estas expresiones también son analíticas en $x=-1$. Por tanto, $x=-1$ es un **punto singular regular**.

## Observaciones

El criterio de regularidad equivale a que existan y sean finitos los límites $\lim_{x\to x_0}(x-x_0)P(x)$ y $\lim_{x\to x_0}(x-x_0)^2Q(x)$. En $x=0$ el coeficiente $P$ presenta un polo de orden $3$, superior al orden $1$ admisible, lo que origina la irregularidad; el coeficiente $Q$ solo tiene un polo de orden $2$. En $x=\pm 1$ los polos de $P$ y $Q$ son de orden $1$ y $2$, de modo que desaparecen al multiplicar por $(x-x_0)$ y $(x-x_0)^2$.

Todo punto distinto de $0$, $1$ y $-1$ es un punto ordinario, alrededor del cual la ecuación admite dos soluciones en serie de potencias.
