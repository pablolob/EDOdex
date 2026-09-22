---
title: "Boyce 5.7 Ejercicio 5"
exercise-id: boyce-c05-s07-e005
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.7, ejercicio 5"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - clasificar.punto-singular-regular
  - resolver-series.ecuacion-indicial
prerequisitos:
  - calculo-avanzado.series-potencias
  - calculo-avanzado.series-taylor
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c05s07i01-p290.png
---

## Enunciado

En cada uno de los problemas 1 a 12, halle todos los puntos singulares regulares de la ecuación diferencial dada. Determine la ecuación indicial y los exponentes de la singularidad en cada punto singular regular.

5. $x^2 y'' + 3(\sin x)y' - 2y = 0$

## Solución

La ecuación tiene un único punto singular regular, $x=0$. Su **ecuación indicial** es

$$
r^2+2r-2=0,
$$

con exponentes de la singularidad

$$
r_1=-1+\sqrt{3},\qquad r_2=-1-\sqrt{3}.
$$

## Resolución

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. Para $x\ne 0$,

$$
y''+\frac{3\sin x}{x^2}\,y'-\frac{2}{x^2}\,y=0,
\qquad
p(x)=\frac{3\sin x}{x^2},
\qquad
q(x)=-\frac{2}{x^2}.
$$

El coeficiente de $y''$ es $x^2$, que se anula solo en $x=0$. En cualquier otro punto $p$ y $q$ son cocientes con denominador no nulo y numerador entero, luego son analíticas allí. Por tanto, el único punto singular es $x=0$.

Un punto singular $x_0$ es regular si los productos $(x-x_0)p(x)$ y $(x-x_0)^2q(x)$ son analíticos en $x_0$. En $x=0$,

$$
x\,p(x)=\frac{3\sin x}{x},
\qquad
x^2q(x)=-2.
$$

El producto $x^2q(x)=-2$ es constante, luego analítico en $0$. Para $x\,p(x)$ se usa el desarrollo de Taylor del seno,

$$
\frac{\sin x}{x}=\sum_{n\ge 0}\frac{(-1)^n x^{2n}}{(2n+1)!},
$$

válido en todo $\mathbb{R}$. La singularidad de $\sin x/x$ en $x=0$ es evitable, de modo que $x\,p(x)$ admite desarrollo de Taylor en $0$ y es analítica allí. Se cumplen las dos condiciones, luego $x=0$ es un **punto singular regular**.

Los valores límite son

$$
p_0=\lim_{x\to 0}x\,p(x)=\lim_{x\to 0}\frac{3\sin x}{x}=3,
\qquad
q_0=\lim_{x\to 0}x^2q(x)=-2.
$$

La **ecuación indicial** es $r(r-1)+p_0r+q_0=0$, esto es,

$$
r(r-1)+3r-2=r^2+2r-2=0.
$$

Sus raíces son los exponentes de la singularidad:

$$
r=\frac{-2\pm\sqrt{4+8}}{2}=-1\pm\sqrt{3}.
$$

Así, $r_1=-1+\sqrt{3}$ y $r_2=-1-\sqrt{3}$.

## Observaciones

Criterio general de clasificación: escrito como $P(x)y''+Q(x)y'+R(x)y=0$, un punto singular $x_0$ es **regular** si $(x-x_0)\frac{Q}{P}$ y $(x-x_0)^2\frac{R}{P}$ son analíticas en $x_0$; en caso contrario es **irregular**.

Los exponentes difieren en $r_1-r_2=2\sqrt{3}$, que no es un entero. La segunda solución de Frobenius tiene entonces la misma forma en serie que la primera, sin término con $\ln x$.
