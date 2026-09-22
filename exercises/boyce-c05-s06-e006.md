---
title: "Boyce 5.6 Ejercicio 6"
exercise-id: boyce-c05-s06-e006
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.6, ejercicio 6"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - clasificar.punto-singular-regular
  - resolver-series.ecuacion-indicial
  - resolver-analiticamente.series-frobenius
prerequisitos:
  - calculo-avanzado.series-potencias
  - algebra.ecuaciones-caracteristicas
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c05s06i01-p284.png
---

## Enunciado

En cada uno de los problemas 1 a 10, demuestre que la ecuación diferencial dada tiene un punto singular regular en $x = 0$. Determine la ecuación indicial, la relación de recurrencia y las raíces de la ecuación indicial. Halle la solución en serie ($x > 0$) correspondiente a la raíz más grande. Si las raíces son desiguales y no difieren en un entero, encuentre también la solución en serie correspondiente a la raíz más pequeña.

6. $x^2y'' + xy' + (x - 2)y = 0$

## Solución

El punto $x=0$ es un punto singular regular. La ecuación indicial es

$$
r^2-2=0,
$$

con raíces $r_1=\sqrt2$ y $r_2=-\sqrt2$. La relación de recurrencia es

$$
a_n=-\frac{a_{n-1}}{(n+r)^2-2},\qquad n=1,2,\dots
$$

Las raíces son desiguales y su diferencia $r_1-r_2=2\sqrt2$ no es un entero, de modo que existen dos soluciones en serie independientes. La solución correspondiente a la raíz mayor $r_1=\sqrt2$ es

$$
y_1(x)=x^{\sqrt2}\sum_{n=0}^{\infty}a_n x^n,\qquad
a_0=1,\quad
a_n=\frac{(-1)^n}{n!\prod_{k=1}^{n}(k+2\sqrt2)},
$$

y la correspondiente a la raíz menor $r_2=-\sqrt2$ es

$$
y_2(x)=x^{-\sqrt2}\sum_{n=0}^{\infty}b_n x^n,\qquad
b_0=1,\quad
b_n=\frac{(-1)^n}{n!\prod_{k=1}^{n}(k-2\sqrt2)}.
$$

La solución general en $x>0$ es $y=C_1y_1(x)+C_2y_2(x)$.

## Resolución

En forma estándar la ecuación es

$$
y''+\frac{1}{x}y'+\frac{x-2}{x^2}y=0.
$$

Los coeficientes $P(x)=\dfrac{1}{x}$ y $Q(x)=\dfrac{x-2}{x^2}$ no son analíticos en $x=0$, de modo que $x=0$ es un punto singular. Además,

$$
xP(x)=1,\qquad x^2Q(x)=x-2
$$

son analíticos en $x=0$, por lo que el punto singular es **regular**. Se aplica el **método de Frobenius** con

$$
y=\sum_{n=0}^{\infty}a_n x^{n+r},\qquad a_0\ne0.
$$

Derivando término a término,

$$
y'=\sum_{n=0}^{\infty}(n+r)a_n x^{n+r-1},\qquad
y''=\sum_{n=0}^{\infty}(n+r)(n+r-1)a_n x^{n+r-2}.
$$

Al sustituir en la ecuación y agrupar potencias de $x$,

$$
\begin{aligned}
x^2y''+xy'+(x-2)y
&=\sum_{n=0}^{\infty}\bigl[(n+r)(n+r-1)+(n+r)-2\bigr]a_n x^{n+r}
+\sum_{n=0}^{\infty}a_n x^{n+r+1}\\
&=\sum_{n=0}^{\infty}\bigl[(n+r)^2-2\bigr]a_n x^{n+r}
+\sum_{n=1}^{\infty}a_{n-1}x^{n+r}=0.
\end{aligned}
$$

El coeficiente de $x^r$ proporciona la **ecuación indicial**,

$$
r^2-2=0,
$$

cuyas raíces son $r_1=\sqrt2$ y $r_2=-\sqrt2$. Para $n\ge1$, igualar a cero el coeficiente de $x^{n+r}$ conduce a la **relación de recurrencia**

$$
a_n=-\frac{a_{n-1}}{(n+r)^2-2},\qquad n=1,2,\dots
$$

Las raíces difieren en $r_1-r_2=2\sqrt2$, que no es un entero. Por tanto cada raíz genera una solución de Frobenius sin término logarítmico y las dos series son linealmente independientes.

Para la raíz mayor $r_1=\sqrt2$ la recurrencia se reduce a

$$
a_n=-\frac{a_{n-1}}{n(n+2\sqrt2)}.
$$

Tomando $a_0=1$, los primeros coeficientes son

$$
a_1=-\frac{1}{1+2\sqrt2},\qquad
a_2=\frac{1}{2(1+2\sqrt2)(2+2\sqrt2)},\qquad\dots
$$

y el término general resulta

$$
a_n=\frac{(-1)^n}{n!\prod_{k=1}^{n}(k+2\sqrt2)}.
$$

Así,

$$
y_1(x)=x^{\sqrt2}\left(1-\frac{x}{1+2\sqrt2}
+\frac{x^2}{2(1+2\sqrt2)(2+2\sqrt2)}-\cdots\right).
$$

Para la raíz menor $r_2=-\sqrt2$ la recurrencia es

$$
b_n=-\frac{b_{n-1}}{n(n-2\sqrt2)}.
$$

Con $b_0=1$,

$$
b_1=-\frac{1}{1-2\sqrt2},\qquad
b_2=\frac{1}{2(1-2\sqrt2)(2-2\sqrt2)},\qquad\dots
$$

y

$$
b_n=\frac{(-1)^n}{n!\prod_{k=1}^{n}(k-2\sqrt2)},
$$

de donde

$$
y_2(x)=x^{-\sqrt2}\left(1-\frac{x}{1-2\sqrt2}
+\frac{x^2}{2(1-2\sqrt2)(2-2\sqrt2)}-\cdots\right).
$$

El único punto singular es $x=0$, por lo que ambas series convergen para todo $x>0$.

## Observaciones

La diferencia entre las raíces, $2\sqrt2$, es irracional y por tanto no entera; esta es la razón de que la segunda solución sea otra serie de Frobenius y no aparezca ningún término logarítmico.

La ecuación no es de Cauchy-Euler: el término $(x-2)y$ introduce la potencia $x$ que rompe la estructura equidimensional. Los exponentes $\sqrt2$ y $-\sqrt2$ tampoco son enteros, lo que obliga a trabajar con potencias fraccionarias de $x$ en $x>0$.
