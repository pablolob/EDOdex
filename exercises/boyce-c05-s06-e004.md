---
title: "Boyce 5.6 Ejercicio 4"
exercise-id: boyce-c05-s06-e004
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.6, ejercicio 4"
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
  - polinomios.resolver
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c05s06i01-p284.png
---

## Enunciado

En cada uno de los problemas 1 a 10, demuestre que la ecuación diferencial dada tiene un punto singular regular en $x = 0$. Determine la ecuación indicial, la relación de recurrencia y las raíces de la ecuación indicial. Halle la solución en serie ($x > 0$) correspondiente a la raíz más grande. Si las raíces son desiguales y no difieren en un entero, encuentre también la solución en serie correspondiente a la raíz más pequeña.

4. $xy'' + y' - y = 0$

## Solución

El punto $x=0$ es un **punto singular regular** de la ecuación. La **ecuación indicial** es

$$
r^2=0,
$$

con raíz doble $r_1=r_2=0$. La **relación de recurrencia** es

$$
a_n=\frac{a_{n-1}}{n^2},\qquad n\ge1 .
$$

La solución correspondiente a la raíz mayor $r=0$ es

$$
y_1(x)=a_0\sum_{n=0}^{\infty}\frac{x^n}{(n!)^2}
=a_0\left(1+x+\frac{x^2}{4}+\frac{x^3}{36}+\cdots\right),\qquad x>0 .
$$

Como las raíces son iguales, el enunciado no pide una segunda solución en serie.

## Resolución

Se escribe la ecuación en forma estándar. Para $x\ne0$,

$$
y''+\frac1x\,y'-\frac1x\,y=0,
$$

con $P(x)=\dfrac1x$ y $Q(x)=-\dfrac1x$. En $x=0$ estos coeficientes no son analíticos, de modo que $x=0$ es un punto singular. Además,

$$
xP(x)=1,\qquad x^2Q(x)=-x
$$

son analíticos en $x=0$; de hecho son polinomios. Por tanto, $x=0$ es un **punto singular regular**.

Se aplica el **método de Frobenius** con

$$
y=\sum_{n=0}^{\infty}a_nx^{n+r},\qquad a_0\ne0 .
$$

Las derivadas son

$$
y'=\sum_{n=0}^{\infty}(n+r)a_nx^{n+r-1},\qquad
y''=\sum_{n=0}^{\infty}(n+r)(n+r-1)a_nx^{n+r-2}.
$$

Al sustituir en $xy''+y'-y=0$ y agrupar potencias de $x$,

$$
\begin{aligned}
xy''+y'-y
&=\sum_{n=0}^{\infty}\bigl[(n+r)(n+r-1)+(n+r)\bigr]a_nx^{n+r-1}
-\sum_{n=0}^{\infty}a_nx^{n+r}\\
&=\sum_{n=0}^{\infty}(n+r)^2a_nx^{n+r-1}
-\sum_{n=0}^{\infty}a_nx^{n+r}.
\end{aligned}
$$

La potencia más baja es $x^{r-1}$ y proviene solo del primer sumando. Su coeficiente es $a_0r^2$. Como $a_0\ne0$, la **ecuación indicial** es

$$
r^2=0,
$$

cuya única raíz, doble, es

$$
r_1=r_2=0 .
$$

Para obtener la recurrencia se escribe el segundo sumando con la potencia $x^{n+r-1}$. Reindexando con $m=n+1$ resulta $-\sum_{n=1}^{\infty}a_{n-1}x^{n+r-1}$. Igualando a cero el coeficiente de $x^{n+r-1}$ para $n\ge1$,

$$
(n+r)^2a_n-a_{n-1}=0 .
$$

Con $r=0$ se obtiene la **relación de recurrencia**

$$
a_n=\frac{a_{n-1}}{n^2},\qquad n\ge1 .
$$

Los primeros coeficientes son $a_1=a_0$, $a_2=\dfrac{a_0}{4}$ y $a_3=\dfrac{a_0}{36}$. Por inducción,

$$
a_n=\frac{a_0}{(n!)^2},\qquad n\ge0,
$$

pues $\dfrac{a_{n-1}}{n^2}=\dfrac{a_0}{(n-1)!^2\,n^2}=\dfrac{a_0}{(n!)^2}$. La solución correspondiente a la raíz $r=0$ es

$$
y_1(x)=a_0\sum_{n=0}^{\infty}\frac{x^n}{(n!)^2}
=a_0\left(1+x+\frac{x^2}{4}+\frac{x^3}{36}+\cdots\right).
$$

Las raíces son iguales, de modo que el enunciado no requiere la solución de la raíz menor. La segunda solución linealmente independiente no tiene la forma de Frobenius con un exponente distinto y comprende, en general, un término logarítmico.

El único punto singular es $x=0$. El cociente de coeficientes consecutivos es $\dfrac{a_{n+1}}{a_n}=\dfrac{1}{(n+1)^2}\to0$, así que el radio de convergencia es infinito y la serie es válida para todo $x>0$.

## Observaciones

La serie obtenida es la función de Bessel modificada de orden cero evaluada en $2\sqrt x$:

$$
y_1(x)=a_0\,I_0(2\sqrt x),\qquad
I_0(z)=\sum_{n=0}^{\infty}\frac{(z/2)^{2n}}{(n!)^2}.
$$

La ecuación $x^2y''+xy'-xy=0$ es una forma de la ecuación de Bessel modificada.

Por ser $r=0$ una raíz doble, la segunda solución linealmente independiente contiene un término $\ln x$. Su determinación no forma parte del enunciado, que solo solicita la solución de la raíz mayor.
