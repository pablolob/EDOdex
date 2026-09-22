---
title: "Boyce 5.6 Ejercicio 2"
exercise-id: boyce-c05-s06-e002
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.6, ejercicio 2"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - clasificar.punto-singular-regular
  - resolver-series.ecuacion-indicial
  - resolver-series.recurrencia
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

2. $x^2y'' + xy' + \left(x^2 - \frac{1}{9}\right)y = 0$

## Solución

La ecuación tiene un **punto singular regular** en $x=0$. La ecuación indicial es

$$
r^2-\frac19=0,
$$

con raíces $r_1=\frac13$ y $r_2=-\frac13$. La relación de recurrencia es

$$
a_n=-\frac{a_{n-2}}{(n+r)^2-\frac19},\qquad n\ge 2,
$$

con $a_1=0$. Como $r_1-r_2=\frac23$ no es un entero, existen dos soluciones en serie linealmente independientes. La correspondiente a la raíz mayor es

$$
y_1(x)=a_0x^{1/3}\left[1+\sum_{m=1}^{\infty}\frac{(-1)^m}{2^{2m}m!\prod_{k=1}^{m}\left(k+\frac13\right)}\,x^{2m}\right],
$$

y la correspondiente a la raíz menor es

$$
y_2(x)=b_0x^{-1/3}\left[1+\sum_{m=1}^{\infty}\frac{(-1)^m}{2^{2m}m!\prod_{k=1}^{m}\left(k-\frac13\right)}\,x^{2m}\right],
$$

ambas válidas para $x>0$.

## Resolución

Se escribe la ecuación en forma estándar. Para $x\ne0$,

$$
y''+\frac{1}{x}y'+\frac{x^2-\frac19}{x^2}y=0.
$$

Aquí $xp(x)=1$ y $x^2q(x)=x^2-\frac19$ son analíticas en $x=0$, de modo que $x=0$ es un **punto singular regular**; además es el único punto singular.

Por el **método de Frobenius** se propone

$$
y=\sum_{n=0}^{\infty}a_nx^{n+r},\qquad a_0\ne0.
$$

Al sustituir, con $y'=\sum_{n\ge0}a_n(n+r)x^{n+r-1}$ y $y''=\sum_{n\ge0}a_n(n+r)(n+r-1)x^{n+r-2}$,

$$
\begin{aligned}
x^2y''+xy'+\left(x^2-\tfrac19\right)y
&=\sum_{n=0}^{\infty}a_n\left[(n+r)(n+r-1)+(n+r)-\tfrac19\right]x^{n+r}
+\sum_{n=0}^{\infty}a_nx^{n+r+2}\\
&=\sum_{n=0}^{\infty}a_n\left[(n+r)^2-\tfrac19\right]x^{n+r}
+\sum_{n=2}^{\infty}a_{n-2}x^{n+r}.
\end{aligned}
$$

El coeficiente de $x^{r}$ conduce a la **ecuación indicial**

$$
r^2-\frac19=0,
$$

con raíces $r_1=\frac13$ y $r_2=-\frac13$. El coeficiente de $x^{r+1}$ es $\left[(r+1)^2-\frac19\right]a_1$, y $(r+1)^2-\frac19\ne0$ para ambas raíces, por lo que $a_1=0$.

Para $n\ge2$ se anula el coeficiente de $x^{n+r}$ y resulta la **relación de recurrencia**

$$
a_n=-\frac{a_{n-2}}{(n+r)^2-\frac19}.
$$

Como $a_1=0$, todos los coeficientes de índice impar se anulan: $a_{2m+1}=0$.

**Raíz mayor $r_1=\frac13$.** El denominador es

$$
\left(n+\tfrac13\right)^2-\tfrac19=n\left(n+\tfrac23\right)=\frac{n(3n+2)}{3},
$$

de modo que $a_n=-\dfrac{3a_{n-2}}{n(3n+2)}$. Con $n=2m$,

$$
a_{2m}=-\frac{3a_{2m-2}}{4m(3m+1)},
$$

e iterando desde $a_0$,

$$
a_{2m}=\frac{(-1)^m3^ma_0}{4^mm!\prod_{k=1}^{m}(3k+1)}
=\frac{(-1)^ma_0}{2^{2m}m!\prod_{k=1}^{m}\left(k+\frac13\right)}.
$$

Por lo tanto,

$$
y_1(x)=a_0x^{1/3}\left[1+\sum_{m=1}^{\infty}\frac{(-1)^m}{2^{2m}m!\prod_{k=1}^{m}\left(k+\frac13\right)}\,x^{2m}\right].
$$

**Raíz menor $r_2=-\frac13$.** Ahora

$$
\left(n-\tfrac13\right)^2-\tfrac19=n\left(n-\tfrac23\right)=\frac{n(3n-2)}{3},
$$

luego $a_n=-\dfrac{3a_{n-2}}{n(3n-2)}$ y, con $n=2m$,

$$
a_{2m}=-\frac{3a_{2m-2}}{4m(3m-1)}
\quad\Longrightarrow\quad
a_{2m}=\frac{(-1)^mb_0}{2^{2m}m!\prod_{k=1}^{m}\left(k-\frac13\right)}.
$$

Así,

$$
y_2(x)=b_0x^{-1/3}\left[1+\sum_{m=1}^{\infty}\frac{(-1)^m}{2^{2m}m!\prod_{k=1}^{m}\left(k-\frac13\right)}\,x^{2m}\right].
$$

Como $r_1-r_2=\frac23$ no es entero, $y_1$ y $y_2$ son linealmente independientes. La solución general en $x>0$ es

$$
y(x)=C_1y_1(x)+C_2y_2(x),
$$

con $C_1=a_0$ y $C_2=b_0$ constantes arbitrarias.

## Observaciones

La recurrencia solo relaciona coeficientes separados por dos índices y $a_1=0$; por eso ambas soluciones contienen únicamente potencias pares de $x$ además del factor $x^{r}$.

Las raíces difieren en $\frac23$, que no es un entero. Este es el caso en que la segunda solución no requiere término logarítmico y se obtiene con la misma recurrencia a partir de $r_2$.

La serie converge para todo $x>0$. El único punto singular es $x=0$; al no haber otro, no existe una cota superior para el radio de convergencia.
