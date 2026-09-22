---
title: "Boyce 5.6 Ejercicio 10"
exercise-id: boyce-c05-s06-e010
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.6, ejercicio 10"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
  - orden-superior
competencies:
  - clasificar.punto-singular-regular
  - resolver-series.ecuacion-indicial
  - resolver-analiticamente.series-frobenius
prerequisitos:
  - calculo-avanzado.series-potencias
  - polinomios.resolver
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c05s06i01-p284.png
---

## Enunciado

En cada uno de los problemas 1 a 10, demuestre que la ecuación diferencial dada tiene un punto singular regular en $x = 0$. Determine la ecuación indicial, la relación de recurrencia y las raíces de la ecuación indicial. Halle la solución en serie ($x > 0$) correspondiente a la raíz más grande. Si las raíces son desiguales y no difieren en un entero, encuentre también la solución en serie correspondiente a la raíz más pequeña.

10. $x^2y'' + \left(x^2 + \frac{1}{4}\right)y = 0$

## Solución

La ecuación tiene un **punto singular regular** en $x=0$. La **ecuación indicial** es

$$
r^2-r+\frac14=0,
$$

es decir, $\left(r-\dfrac12\right)^2=0$, con la raíz doble $r_1=r_2=\dfrac12$. La **relación de recurrencia** es

$$
a_n=-\frac{a_{n-2}}{(n+r)(n+r-1)+\frac14},\qquad n\ge2,
$$

con $a_1=0$. Para $r=\dfrac12$ se reduce a

$$
a_n=-\frac{a_{n-2}}{n^2},\qquad n\ge2 .
$$

Como las raíces son iguales, el enunciado solo pide la solución correspondiente a la raíz mayor, que es la única. Tomando $a_0=1$,

$$
y_1(x)=x^{1/2}\sum_{m=0}^{\infty}\frac{(-1)^m}{4^m (m!)^2}\,x^{2m}
=x^{1/2}\left(1-\frac{x^2}{4}+\frac{x^4}{64}-\frac{x^6}{2304}+\cdots\right),\qquad x>0.
$$

## Resolución

Se escribe la ecuación en forma estándar. Para $x\ne0$,

$$
y''+\frac{x^2+\frac14}{x^2}\,y=0 .
$$

Aquí $p(x)=0$ y $q(x)=1+\dfrac{1}{4x^2}$. Los productos $xp(x)=0$ y $x^2q(x)=x^2+\dfrac14$ son analíticos en $x=0$ y tienen límite finito; por tanto $x=0$ es un **punto singular regular**, y es el único punto singular de la ecuación.

Por el **método de Frobenius** se propone

$$
y=\sum_{n=0}^{\infty}a_nx^{n+r},\qquad a_0\ne0,
$$

con

$$
y'=\sum_{n=0}^{\infty}(n+r)a_nx^{n+r-1},\qquad
y''=\sum_{n=0}^{\infty}(n+r)(n+r-1)a_nx^{n+r-2}.
$$

Al sustituir resulta

$$
\begin{aligned}
x^2y''+\left(x^2+\tfrac14\right)y
&=\sum_{n=0}^{\infty}\left[(n+r)(n+r-1)+\tfrac14\right]a_nx^{n+r}
+\sum_{n=0}^{\infty}a_nx^{n+r+2}\\
&=\sum_{n=0}^{\infty}\left[(n+r)(n+r-1)+\tfrac14\right]a_nx^{n+r}
+\sum_{n=2}^{\infty}a_{n-2}x^{n+r}.
\end{aligned}
$$

La potencia más baja es $x^{r}$ y su coeficiente es $\left[r(r-1)+\frac14\right]a_0$. Como $a_0\ne0$, la **ecuación indicial** es

$$
r^2-r+\frac14=0,\qquad \text{esto es,}\quad \left(r-\frac12\right)^2=0,
$$

cuya raíz es doble: $r_1=r_2=\dfrac12$.

El coeficiente de $x^{r+1}$ es $\left[(r+1)r+\frac14\right]a_1$. Para $r=\dfrac12$, $(r+1)r+\frac14=\dfrac34+\dfrac14=1\ne0$, luego $a_1=0$.

Para $n\ge2$ se anula el coeficiente de $x^{n+r}$:

$$
\left[(n+r)(n+r-1)+\tfrac14\right]a_n+a_{n-2}=0,
$$

de donde la **relación de recurrencia**

$$
a_n=-\frac{a_{n-2}}{(n+r)(n+r-1)+\frac14},\qquad n\ge2 .
$$

Para $r=\dfrac12$ el denominador es

$$
\left(n+\tfrac12\right)\left(n-\tfrac12\right)+\tfrac14=n^2-\tfrac14+\tfrac14=n^2,
$$

de modo que

$$
a_n=-\frac{a_{n-2}}{n^2},\qquad n\ge2 .
$$

Como $a_1=0$, todos los coeficientes de índice impar se anulan. Los pares se obtienen con $n=2m$:

$$
a_{2m}=-\frac{a_{2m-2}}{4m^2},\qquad m\ge1,
$$

e iterando desde $a_0$,

$$
a_{2m}=\frac{(-1)^m a_0}{4^m (m!)^2}.
$$

En efecto, $a_2=-\dfrac{a_0}{4}$ y $a_4=-\dfrac{a_2}{16}=\dfrac{a_0}{64}$, en acuerdo con la fórmula.

Tomando $a_0=1$, la solución correspondiente a la raíz $r=\dfrac12$ es

$$
y_1(x)=x^{1/2}\sum_{m=0}^{\infty}\frac{(-1)^m}{4^m(m!)^2}\,x^{2m}
=x^{1/2}\left(1-\frac{x^2}{4}+\frac{x^4}{64}-\frac{x^6}{2304}+\cdots\right).
$$

Como las raíces son iguales, no se presenta el caso de raíces desiguales que difieren en un entero, y $y_1$ es la única solución que pide el enunciado.

## Observaciones

La ecuación indicial tiene una raíz doble. En este caso una segunda solución linealmente independiente contendría un término $\ln x$; el enunciado no la solicita, pues solo la pide cuando las raíces son desiguales y no difieren en un entero.

La serie converge para todo $x$: el cociente de coeficientes consecutivos es $a_{2m}/a_{2m-2}=-1/(4m^2)\to0$. Como $x=0$ es el único punto singular, $y_1$ está definida para todo $x>0$, y de hecho para todo $x$ real.

La condición $a_1=0$ anula todos los coeficientes impares. Por eso la serie contiene solo potencias pares de $x$ además del factor $x^{1/2}$.
