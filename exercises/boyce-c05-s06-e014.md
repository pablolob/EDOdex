---
title: "Boyce 5.6 Ejercicio 14"
exercise-id: boyce-c05-s06-e014
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.6, ejercicio 14"
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
  - calculo-avanzado.convergencia
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c05s06i02-p285.png
---

## Enunciado

La ecuación de Bessel de orden cero es

$$x^2 y'' + xy' + x^2 y = 0.$$

Demuestre que $x = 0$ es un punto singular regular; que las raíces de la ecuación indicicial son $r_1 = r_2 = 0$, y que una solución para $x > 0$ es

$$J_0(x) = 1 + \sum_{n=1}^\infty \frac{(-1)^n x^{2n}}{2^{2n}(n!)^2}.$$

Observe que la serie converge para toda $x$, no sólo para $x > 0$. En particular, $J_0(x)$ es acotada cuando $x \to 0$. La función $J_0$ se conoce como función de Bessel de primera clase de orden cero.

## Solución

El punto $x=0$ es un **punto singular regular** de la ecuación. La **ecuación indicial** es

$$
r^2=0,
$$

de raíz doble $r_1=r_2=0$. La **relación de recurrencia** es

$$
a_n=-\frac{a_{n-2}}{n^2},\qquad n\ge 2,\qquad a_1=0 .
$$

Con la normalización $a_0=1$, una solución para $x>0$ es

$$
J_0(x)=1+\sum_{n=1}^{\infty}\frac{(-1)^n x^{2n}}{2^{2n}(n!)^2}.
$$

La serie converge para todo $x\in\mathbb{R}$.

## Resolución

Para $x\ne0$ la ecuación se escribe en forma estándar como

$$
y''+\frac{1}{x}\,y'+y=0,
$$

con $P(x)=\dfrac{1}{x}$ y $Q(x)=1$. En $x=0$ los coeficientes no son analíticos, de modo que $x=0$ es un punto singular. Además,

$$
xP(x)=1,\qquad x^2Q(x)=x^2
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

Al sustituir en $x^2y''+xy'+x^2y=0$ y agrupar potencias de $x$,

$$
\begin{aligned}
x^2y''+xy'+x^2y
&=\sum_{n=0}^{\infty}\bigl[(n+r)(n+r-1)+(n+r)\bigr]a_nx^{n+r}
+\sum_{n=0}^{\infty}a_nx^{n+r+2}\\
&=\sum_{n=0}^{\infty}(n+r)^2a_nx^{n+r}
+\sum_{n=0}^{\infty}a_nx^{n+r+2}.
\end{aligned}
$$

La potencia más baja es $x^r$ y proviene solo del primer sumando. Su coeficiente es $a_0r^2$. Como $a_0\ne0$, la **ecuación indicial** es

$$
r^2=0,
$$

cuya única raíz, doble, es $r_1=r_2=0$.

Se fija $r=0$. La ecuación se reduce a

$$
\sum_{n=0}^{\infty}n^2a_nx^{n}+\sum_{n=0}^{\infty}a_nx^{n+2}=0 .
$$

El coeficiente de $x^1$ proporciona $a_1=0$. El segundo sumando se reescribe como $\sum_{n=2}^{\infty}a_{n-2}x^{n}$. Igualando a cero el coeficiente de $x^n$,

$$
n^2a_n+a_{n-2}=0,\qquad n\ge2,
$$

es decir,

$$
a_n=-\frac{a_{n-2}}{n^2},\qquad n\ge2 .
$$

Como $a_1=0$, todos los coeficientes impares se anulan. Para los pares la recurrencia es $a_{2n}=-\dfrac{a_{2n-2}}{(2n)^2}$. Por inducción,

$$
a_{2n}=\frac{(-1)^n a_0}{2^{2n}(n!)^2},\qquad n\ge0,
$$

pues $\dfrac{a_{2n-2}}{(2n)^2}
=\dfrac{(-1)^{n-1}a_0}{2^{2n-2}((n-1)!)^2\,(2n)^2}
=\dfrac{(-1)^n a_0}{2^{2n}(n!)^2}$.

Con la normalización $a_0=1$ resulta la solución

$$
J_0(x)=\sum_{n=0}^{\infty}\frac{(-1)^n x^{2n}}{2^{2n}(n!)^2}
=1+\sum_{n=1}^{\infty}\frac{(-1)^n x^{2n}}{2^{2n}(n!)^2}.
$$

Para $x$ fijo, el **criterio del cociente** sobre los términos no nulos da

$$
\lim_{n\to\infty}\left|\frac{a_{2n+2}x^{2n+2}}{a_{2n}x^{2n}}\right|
=\lim_{n\to\infty}\frac{x^2}{4(n+1)^2}=0 .
$$

La serie converge entonces para todo $x\in\mathbb{R}$. En particular, $J_0(0)=1$ y $J_0$ es continua en $x=0$, de modo que $J_0$ es acotada cuando $x\to0$.

## Observaciones

La serie define $J_0$ en todo $\mathbb{R}$; la restricción $x>0$ del enunciado procede del planteamiento de Frobenius, no de la convergencia.

La normalización $a_0=1$ es la que fija $J_0(0)=1$, valor que identifica a la función de Bessel de primera clase de orden cero.

Al ser $r_1=r_2=0$ una raíz doble, la segunda solución linealmente independiente, la función de Bessel de segunda clase $Y_0$, contiene un término $\ln x$.
