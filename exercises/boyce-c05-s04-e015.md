---
title: "Boyce 5.4 Ejercicio 15"
exercise-id: boyce-c05-s04-e015
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.4, ejercicio 15"
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

15. $x^2y'' - 3(\sin x)y' + (1 + x^2)y = 0$

## Solución

La ecuación tiene un único punto singular, $x=0$, y es un **punto singular regular**.

## Resolución

La ecuación es lineal de segundo orden y homogénea. Se escribe en la forma estándar $y''+p(x)y'+q(x)y=0$. Para $x\ne 0$, al dividir entre el coeficiente de $y''$, $P(x)=x^2$,

$$
y''-\frac{3\sin x}{x^2}\,y'+\frac{1+x^2}{x^2}\,y=0,
\qquad
p(x)=-\frac{3\sin x}{x^2},
\qquad
q(x)=\frac{1+x^2}{x^2}.
$$

Los puntos singulares son los ceros del coeficiente de $y''$: $P(x)=x^2$ se anula solo en $x=0$. Fuera de ese punto, $p$ y $q$ son cocientes de funciones analíticas con denominador no nulo, luego son analíticas. Por tanto, el único punto singular es $x=0$.

Para clasificarlo se examinan los productos

$$
(x-0)\,p(x)=-\frac{3\sin x}{x},
\qquad
(x-0)^2\,q(x)=1+x^2.
$$

La función $1+x^2$ es un polinomio, luego es analítica en $x=0$. La función $\sin x/x$ presenta en $x=0$ una singularidad evitable: su desarrollo

$$
\frac{\sin x}{x}=1-\frac{x^2}{3!}+\frac{x^4}{5!}-\cdots
$$

es una serie de potencias convergente en torno a $x=0$, de modo que también es analítica allí. En consecuencia, ambos productos son analíticos en $x=0$ y se satisface la condición de punto singular regular. El punto $x=0$ es un **punto singular regular**.

## Observaciones

Criterio general para la clasificación: escrito como $P(x)y''+Q(x)y'+R(x)y=0$, un punto singular $x_0$ es **regular** si $(x-x_0)\frac{Q}{P}$ y $(x-x_0)^2\frac{R}{P}$ son analíticas en $x_0$; en caso contrario es **irregular**. De forma equivalente, cuando $P$, $Q$ y $R$ son analíticas, basta comprobar que los límites $\lim_{x\to x_0}(x-x_0)\frac{Q}{P}$ y $\lim_{x\to x_0}(x-x_0)^2\frac{R}{P}$ son finitos.

El factor $\sin x$ no introduce puntos singulares adicionales: es analítico en todo $\mathbb{R}$. La singularidad proviene únicamente del coeficiente $x^2$ que multiplica a $y''$. Todos los puntos $x\ne 0$ son puntos ordinarios.
