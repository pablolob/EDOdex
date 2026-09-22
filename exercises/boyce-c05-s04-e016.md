---
title: "Boyce 5.4 Ejercicio 16"
exercise-id: boyce-c05-s04-e016
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.4, ejercicio 16"
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

16. $xy'' + y' + (\cot x)y = 0$

## Solución

Los puntos singulares son $x=n\pi$ para todo entero $n\in\mathbb{Z}$, y cada uno de ellos es un **punto singular regular**.

$$
x=n\pi,\quad n\in\mathbb{Z}
\qquad\text{(todos regulares).}
$$

## Resolución

La ecuación es lineal de segundo orden y homogénea. Se escribe en la forma estándar $y''+p(x)y'+q(x)y=0$ con $P(x)=x$, $Q(x)=1$ y $R(x)=\cot x$. Para $x$ tal que $x\ne 0$ y $\sin x\ne 0$,

$$
y''+\frac{1}{x}\,y'+\frac{\cot x}{x}\,y=0,
\qquad
p(x)=\frac{1}{x},
\qquad
q(x)=\frac{\cot x}{x}=\frac{\cos x}{x\sin x}.
$$

Los puntos singulares son aquellos en los que $P$ se anula o en los que $p$ o $q$ dejan de ser analíticas:

- $P(x)=x$ se anula en $x=0$.
- $q$ tiene denominador $x\sin x$; además del origen, $\sin x$ se anula en $x=n\pi$ con $n\in\mathbb{Z}$, $n\ne 0$, donde $\cot x$ tiene un polo simple.

Por tanto, los puntos singulares son $x=n\pi$ con $n\in\mathbb{Z}$ (el caso $n=0$ reúne ambas causas).

Para clasificarlos se examinan los productos $(x-x_0)p(x)$ y $(x-x_0)^2q(x)$ en cada $x_0=n\pi$.

**En $x_0=0$:**

$$
(x-0)\,p(x)=1,
\qquad
(x-0)^2\,q(x)=\frac{x^2\cos x}{x\sin x}=\frac{x\cos x}{\sin x}=x\cot x.
$$

El primero es constante y el segundo tiene en $x=0$ una singularidad evitable, pues el desarrollo

$$
x\cot x=\frac{x\cos x}{\sin x}=1-\frac{x^2}{3}-\frac{x^4}{45}-\cdots
$$

es una serie de potencias convergente en torno a $x=0$. Ambos productos son analíticos allí, luego $x=0$ es un **punto singular regular**.

**En $x_0=n\pi$ con $n\ne 0$:**

$$
(x-n\pi)\,p(x)=\frac{x-n\pi}{x},
\qquad
(x-n\pi)^2\,q(x)=\frac{(x-n\pi)^2\cos x}{x\sin x}.
$$

El primer producto es un cociente de funciones analíticas con denominador no nulo en $n\pi$, luego es analítico. Para el segundo se reescribe como

$$
\frac{(x-n\pi)^2\cos x}{x\sin x}=(x-n\pi)\cdot\frac{x-n\pi}{\sin x}\cdot\frac{\cos x}{x}.
$$

Como $\sin x$ tiene un cero simple en $x=n\pi$, el cociente $\dfrac{x-n\pi}{\sin x}$ se extiende analíticamente a ese punto (su límite es $1/\cos(n\pi)=(-1)^n$); los otros dos factores son analíticos y el denominador $x$ no se anula para $n\ne 0$. Por tanto, $(x-n\pi)^2q(x)$ también es analítico en $x=n\pi$. En consecuencia, cada $x=n\pi$ con $n\ne 0$ es un **punto singular regular**.

No hay otros puntos singulares, y todos los hallados son regulares.

## Observaciones

Criterio general para la clasificación: escrito como $P(x)y''+Q(x)y'+R(x)y=0$, un punto singular $x_0$ es **regular** si $(x-x_0)\frac{Q}{P}$ y $(x-x_0)^2\frac{R}{P}$ son analíticas en $x_0$; en caso contrario es **irregular**.

El factor $\cot x$ introduce un polo simple en cada múltiplo entero de $\pi$; sin embargo, los productos anteriores tienen singularidades evitables, de modo que ninguno de esos puntos resulta irregular. La singularidad adicional en $x=0$, proveniente del coeficiente $x$ de $y''$, se combina con la de $\cot x$ y también resulta regular.

Todos los puntos distintos de $x=n\pi$ son puntos ordinarios; alrededor de ellos la ecuación admite dos soluciones en serie de potencias.
