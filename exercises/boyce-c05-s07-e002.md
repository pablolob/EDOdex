---
title: "Boyce 5.7 Ejercicio 2"
exercise-id: boyce-c05-s07-e002
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.7, ejercicio 2"
topics:
  - frobenius
competencies:
  - clasificar.punto-singular-regular
  - resolver-series.ecuacion-indicial
prerequisitos:
  - calculo-avanzado.series-potencias
  - algebra.factorizacion-polinomios
difficulty:
  conceptual: 1
  technical: 1
solution-status: draft
statement-status: accepted
source-images:
  - c05s07i01-p290.png
---

## Enunciado

En cada uno de los problemas 1 a 12, halle todos los puntos singulares regulares de la ecuación diferencial dada. Determine la ecuación indicial y los exponentes de la singularidad en cada punto singular regular.

2. $x^2 y'' - x(2 + x)y' + (2 + x^2)y = 0$

## Solución

La ecuación tiene un único punto singular regular, $x=0$. La ecuación indicial es

$$
r(r-1)-2r+2=0,
$$

equivalente a $r^2-3r+2=0$, y los exponentes de la singularidad son

$$
r_1=2,\qquad r_2=1.
$$

## Resolución

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. Para $x\ne 0$, tras dividir por $x^2$,

$$
y''-\frac{2+x}{x}\,y'+\frac{2+x^2}{x^2}\,y=0,
\qquad
p(x)=-\frac{2+x}{x},\quad q(x)=\frac{2+x^2}{x^2}.
$$

Los puntos singulares son aquellos en los que $p$ o $q$ dejan de ser analíticas. La función $q$ es un cociente de polinomios, analítico salvo donde se anula su denominador, es decir, en $x=0$. Ese mismo punto anula el coeficiente de $y''$, $P(x)=x^2$. Por tanto, $x=0$ es el único punto singular.

Para clasificarlo se examinan los productos

$$
x\,p(x)=-(2+x),\qquad x^2\,q(x)=2+x^2.
$$

Ambos son polinomios, luego analíticos en $x=0$. Se cumple la condición de punto singular regular; en consecuencia, $x=0$ es un **punto singular regular**.

Con $p_0=\lim_{x\to 0}x\,p(x)=-2$ y $q_0=\lim_{x\to 0}x^2\,q(x)=2$, la ecuación indicial es

$$
r(r-1)+p_0 r+q_0=0
\quad\Longrightarrow\quad
r(r-1)-2r+2=0,
$$

es decir,

$$
r^2-3r+2=(r-1)(r-2)=0.
$$

Las raíces, ordenadas de mayor a menor, son los exponentes de la singularidad:

$$
r_1=2,\qquad r_2=1.
$$

## Observaciones

Los exponentes difieren en un entero, $r_1-r_2=1$. Por ello, la solución de **Frobenius** asociada al exponente menor puede incluir un término logarítmico; el enunciado solo pide la ecuación indicial y los exponentes, no las series.

El punto $x=0$ es el único punto singular finito. Todo $x\ne 0$ es un punto ordinario, de modo que las soluciones en serie alrededor de $x=0$ convergen en $0<|x|<\infty$.
