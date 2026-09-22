---
title: "Boyce 5.4 Ejercicio 17"
exercise-id: boyce-c05-s04-e017
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.4, ejercicio 17"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - clasificar.punto-singular-regular
  - clasificar.punto-singular-irregular
prerequisitos:
  - calculo-avanzado.series-potencias
  - calculo-avanzado.series-taylor
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c05s04i01-p270.png
---

## Enunciado

En cada uno de los problemas 1 a 18, halle todos los puntos singulares de la ecuación dada y determine si cada uno de ellos es singular o irregular.

17. $(\sin x)y'' + xy' + 4y = 0$

## Solución

Los puntos singulares son $x=n\pi$ para todo $n\in\mathbb{Z}$, y cada uno de ellos es un **punto singular regular**.

$$
x=n\pi,\quad n\in\mathbb{Z},\qquad \text{todos regulares.}
$$

## Resolución

La ecuación es lineal de segundo orden y homogénea. Se escribe en la forma estándar $y''+p(x)y'+q(x)y=0$ dividiendo por el coeficiente de $y''$, que se anula donde $\sin x=0$:

$$
y''+\frac{x}{\sin x}\,y'+\frac{4}{\sin x}\,y=0,\qquad
p(x)=\frac{x}{\sin x},\qquad q(x)=\frac{4}{\sin x}.
$$

Los coeficientes $p$ y $q$ son analíticos salvo donde se anula el denominador, es decir, en los ceros de $\sin x$. Por tanto, los puntos singulares son

$$
x=n\pi,\qquad n\in\mathbb{Z}.
$$

Un punto singular $x_0$ es regular si $(x-x_0)p(x)$ y $(x-x_0)^2q(x)$ son analíticas en $x_0$; en caso contrario es irregular. De forma equivalente, basta comprobar que los límites $\lim_{x\to x_0}(x-x_0)p(x)$ y $\lim_{x\to x_0}(x-x_0)^2q(x)$ son finitos.

Sea $x_0=n\pi$ y $h=x-x_0$. Con la fórmula de adición del seno,

$$
\sin(x_0+h)=\sin x_0\cos h+\cos x_0\sin h=(-1)^n\sin h.
$$

Entonces

$$
(x-x_0)\,p(x)=\frac{h\,(x_0+h)}{\sin(x_0+h)}
=\frac{h\,(x_0+h)}{(-1)^n\sin h}
=(-1)^n\,\frac{x_0+h}{\dfrac{\sin h}{h}}.
$$

Como $\dfrac{\sin h}{h}\to 1$ cuando $h\to 0$, el límite existe y vale $(-1)^n x_0=(-1)^n n\pi$. La función $(x-x_0)p(x)$ es analítica en $x_0$.

De manera análoga,

$$
(x-x_0)^2\,q(x)=\frac{4h^2}{\sin(x_0+h)}
=\frac{4h^2}{(-1)^n\sin h}
=4(-1)^n\,\frac{h}{\dfrac{\sin h}{h}},
$$

cuyo límite cuando $h\to 0$ es $0$. La función $(x-x_0)^2q(x)$ también es analítica en $x_0$.

Ambas condiciones se satisfacen en cada $x_0=n\pi$. En consecuencia, todos los puntos singulares $x=n\pi$ son regulares y no hay puntos singulares irregulares.

## Observaciones

Los ceros de $\sin x$ son simples y están igualmente espaciados cada $\pi$; esa es la razón de que los productos $(x-n\pi)p(x)$ y $(x-n\pi)^2q(x)$ se mantengan analíticos en cada cero. Si algún factor del coeficiente de $y''$ tuviera un cero de orden mayor que el admisible, el punto resultante sería irregular.

Criterio general de clasificación: escrito como $P(x)y''+Q(x)y'+R(x)y=0$, un punto singular $x_0$ es **regular** si $(x-x_0)\frac{Q}{P}$ y $(x-x_0)^2\frac{R}{P}$ son analíticas en $x_0$, y **irregular** en caso contrario.

Todos los puntos $x\ne n\pi$ son puntos ordinarios; alrededor de cualquiera de ellos la ecuación admite dos soluciones en serie de potencias.
