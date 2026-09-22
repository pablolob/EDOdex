---
title: "Boyce 5.6 Ejercicio 5"
exercise-id: boyce-c05-s06-e005
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.6, ejercicio 5"
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

5. $3x^2y'' + 2xy' + x^2y = 0$

## Solución

El punto $x=0$ es un punto singular regular. La ecuación indicial es

$$
r(3r-1)=0,
$$

con raíces $r_1=\frac{1}{3}$ y $r_2=0$. La relación de recurrencia es

$$
a_n=-\frac{a_{n-2}}{(n+r)\bigl(3(n+r)-1\bigr)},\qquad n\ge 2,
$$

con $a_1=0$. Las raíces son desiguales y su diferencia $r_1-r_2=\frac{1}{3}$ no es un entero, de modo que existen dos soluciones en serie independientes. La solución correspondiente a la raíz mayor $r_1=\frac{1}{3}$ es

$$
y_1(x)=x^{1/3}\sum_{m=0}^{\infty}a_{2m}x^{2m},\qquad
a_0=1,\quad
a_{2m}=\frac{(-1)^m}{\prod_{k=1}^{m}(2k)(6k+1)},
$$

y la correspondiente a la raíz menor $r_2=0$ es

$$
y_2(x)=\sum_{m=0}^{\infty}b_{2m}x^{2m},\qquad
b_0=1,\quad
b_{2m}=\frac{(-1)^m}{\prod_{k=1}^{m}(2k)(6k-1)}.
$$

La solución general en $x>0$ es $y=C_1y_1(x)+C_2y_2(x)$.

## Resolución

En forma estándar la ecuación es

$$
y''+\frac{2}{3x}y'+\frac{1}{3}y=0.
$$

Los coeficientes $P(x)=\frac{2}{3x}$ y $Q(x)=\frac{1}{3}$ provienen de la forma estándar; $P(x)$ no es analítico en $x=0$, de modo que $x=0$ es un punto singular. Además,

$$
xP(x)=\frac{2}{3},\qquad x^2Q(x)=\frac{x^2}{3}
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
3x^2y''+2xy'+x^2y
&=\sum_{n=0}^{\infty}\bigl[3(n+r)(n+r-1)+2(n+r)\bigr]a_n x^{n+r}
+\sum_{n=0}^{\infty}a_n x^{n+r+2}\\
&=\sum_{n=0}^{\infty}(n+r)\bigl(3(n+r)-1\bigr)a_n x^{n+r}
+\sum_{n=2}^{\infty}a_{n-2}x^{n+r}=0.
\end{aligned}
$$

El coeficiente de $x^r$ proporciona la **ecuación indicial**,

$$
r(3r-1)=0,
$$

cuyas raíces son $r_1=\frac{1}{3}$ y $r_2=0$. El coeficiente de $x^{1+r}$ exige $(1+r)(3r+2)a_1=0$; como $1+r\ne0$ y $3r+2\ne0$ en ambas raíces, resulta $a_1=0$. Para $n\ge2$, igualar a cero el coeficiente de $x^{n+r}$ conduce a la **relación de recurrencia**

$$
a_n=-\frac{a_{n-2}}{(n+r)\bigl(3(n+r)-1\bigr)},\qquad n\ge2.
$$

Las raíces difieren en $r_1-r_2=\frac{1}{3}$, que no es un entero. Por tanto cada raíz genera una solución de Frobenius sin término logarítmico y las dos series son linealmente independientes.

Para la raíz mayor $r_1=\frac{1}{3}$ la recurrencia se reduce a

$$
a_n=-\frac{a_{n-2}}{n(3n+1)}.
$$

Como $a_1=0$, todos los coeficientes de índice impar se anulan. Para $n=2m$,

$$
a_{2m}=-\frac{a_{2m-2}}{2m(6m+1)}.
$$

Tomando $a_0=1$, los primeros coeficientes son

$$
a_2=-\frac{1}{2\cdot7}=-\frac{1}{14},\qquad
a_4=-\frac{a_2}{4\cdot13}=\frac{1}{728},\qquad\dots
$$

y el término general resulta

$$
a_{2m}=\frac{(-1)^m}{\prod_{k=1}^{m}(2k)(6k+1)}.
$$

Así,

$$
y_1(x)=x^{1/3}\left(1-\frac{x^2}{14}+\frac{x^4}{728}-\cdots\right).
$$

Para la raíz menor $r_2=0$ se denotan $b_{2m}$ los coeficientes de la segunda solución. La recurrencia es

$$
b_n=-\frac{b_{n-2}}{n(3n-1)},
$$

que para $n=2m$ da

$$
b_{2m}=-\frac{b_{2m-2}}{2m(6m-1)}.
$$

Con $b_0=1$,

$$
b_2=-\frac{1}{2\cdot5}=-\frac{1}{10},\qquad
b_4=-\frac{b_2}{4\cdot11}=\frac{1}{440},\qquad\dots
$$

y

$$
b_{2m}=\frac{(-1)^m}{\prod_{k=1}^{m}(2k)(6k-1)},
$$

de donde

$$
y_2(x)=1-\frac{x^2}{10}+\frac{x^4}{440}-\cdots.
$$

El único punto singular es $x=0$, por lo que ambas series convergen para todo $x>0$.

## Observaciones

La diferencia entre las raíces, $\frac{1}{3}$, no es un entero; esta es la razón de que la segunda solución sea otra serie de Frobenius y no aparezca ningún término logarítmico.

La ecuación no es de Cauchy-Euler: el término $x^2y$ introduce una potencia que rompe la estructura equidimensional. Sin él, la ecuación sería equidimensional y la recurrencia se detendría en $a_0$; es ese término el que genera la recurrencia de dos pasos.
