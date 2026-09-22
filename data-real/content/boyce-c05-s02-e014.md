
## Enunciado

En cada uno de los problemas 1 a 14, resuelva la ecuación diferencial dada por medio de una serie de potencias alrededor de un punto dado $x_0$. Halle la relación de recurrencia; encuentre también los cuatro primeros términos de cada una de dos soluciones linealmente independientes (a menos que la serie termine antes). Si es posible, encuentre el término general de cada solución.

14. $2y'' + (x + 1)y' + 3y = 0, \quad x_0 = 2$

## Solución

La ecuación es de **segundo orden** y **lineal**. El punto $x_0=2$ es **ordinario**, porque el coeficiente de $y''$ es la constante $2$, que no se anula. La relación de recurrencia es

$$
a_{n+2}=-\frac{3(n+1)\,a_{n+1}+(n+3)\,a_n}{2(n+1)(n+2)},\qquad n=0,1,2,\dots
$$

Dos soluciones linealmente independientes, cada una con sus cuatro primeros términos, son

$$
y_1(x)=1-\frac{3}{4}(x-2)^2+\frac{3}{8}(x-2)^3+\frac{1}{64}(x-2)^4+\cdots,
$$

$$
y_2(x)=(x-2)-\frac{3}{4}(x-2)^2+\frac{1}{24}(x-2)^3+\frac{9}{64}(x-2)^4+\cdots.
$$

La solución general es

$$
y=C_1y_1+C_2y_2,
$$

con $C_1$ y $C_2$ constantes arbitrarias. La recurrencia acopla cada coeficiente con los dos anteriores y no conduce a una expresión elemental para el término general.

## Resolución

La ecuación es de **segundo orden** y **lineal**. El coeficiente de $y''$ es la constante $2$, que no se anula en $x_0=2$. Por tanto $x_0=2$ es un **punto ordinario** y la solución admite un desarrollo en **serie de potencias** de $x-2$.

Se introduce el cambio de variable

$$
t=x-2,\qquad x=t+2,
$$

con el que $y'=\dfrac{dy}{dt}$ y $y''=\dfrac{d^2y}{dt^2}$. Como $x+1=t+3$, la ecuación se reescribe como

$$
2y''+(t+3)y'+3y=0.
$$

Se propone la solución en serie

$$
y=\sum_{n=0}^{\infty}a_n t^n,
$$

cuyas derivadas son

$$
y'=\sum_{n=1}^{\infty}n\,a_n t^{n-1},\qquad y''=\sum_{n=2}^{\infty}n(n-1)a_n t^{n-2}.
$$

Al sustituir y reescribir cada suma en potencias $t^n$,

$$
\begin{aligned}
2y'' &= \sum_{n=0}^{\infty}2(n+2)(n+1)a_{n+2}t^n, \\
t\,y' &= \sum_{n=1}^{\infty}n\,a_n t^n, \\
3y' &= \sum_{n=0}^{\infty}3(n+1)a_{n+1}t^n, \\
3y &= \sum_{n=0}^{\infty}3a_n t^n.
\end{aligned}
$$

Por unicidad del desarrollo en serie de potencias, el coeficiente de cada $t^n$ se anula. Para $n=0$ el término $t\,y'$ no contribuye:

$$
4a_2+3a_1+3a_0=0.
$$

Para $n\ge 1$ contribuyen las cuatro sumas:

$$
2(n+2)(n+1)a_{n+2}+3(n+1)a_{n+1}+(n+3)a_n=0.
$$

La misma expresión reproduce el caso $n=0$, de modo que la relación de recurrencia es

$$
a_{n+2}=-\frac{3(n+1)a_{n+1}+(n+3)a_n}{2(n+1)(n+2)},\qquad n=0,1,2,\dots
$$

Los coeficientes $a_0$ y $a_1$ quedan libres. En función de ellos,

$$
\begin{aligned}
a_2 &= -\frac{3(a_0+a_1)}{4}, \\
a_3 &= -\frac{3a_2+2a_1}{6}, \\
a_4 &= -\frac{9a_3+5a_2}{24}.
\end{aligned}
$$

La elección $a_0=1$, $a_1=0$ define $y_1$:

$$
a_2=-\frac{3}{4},\qquad a_3=-\frac{3a_2}{6}=\frac{3}{8},\qquad a_4=-\frac{9a_3+5a_2}{24}=\frac{1}{64}.
$$

La elección $a_0=0$, $a_1=1$ define $y_2$:

$$
a_2=-\frac{3}{4},\qquad a_3=-\frac{3a_2+2}{6}=\frac{1}{24},\qquad a_4=-\frac{9a_3+5a_2}{24}=\frac{9}{64}.
$$

Al volver a la variable $x$,

$$
\begin{aligned}
y_1(x) &= 1-\frac{3}{4}(x-2)^2+\frac{3}{8}(x-2)^3+\frac{1}{64}(x-2)^4+\cdots, \\
y_2(x) &= (x-2)-\frac{3}{4}(x-2)^2+\frac{1}{24}(x-2)^3+\frac{9}{64}(x-2)^4+\cdots.
\end{aligned}
$$

Las dos soluciones son linealmente independientes: el wronskiano en $x_0=2$ vale

$$
W(y_1,y_2)(2)=y_1(2)\,y_2'(2)-y_1'(2)\,y_2(2)=1\cdot 1-0\cdot 0=1\ne 0.
$$

La recurrencia acopla cada coeficiente con los dos anteriores y tiene coeficientes variables; no se reduce a una fórmula cerrada para $a_n$, por lo que el término general no se expresa de forma elemental.

## Observaciones

Al ser $x_0=2$ un punto ordinario y no existir puntos singulares finitos, ambas series convergen para todo $x \in \mathbb{R}$.

El único cambio estructural respecto de un desarrollo centrado en el origen es la reescritura $x+1=(x-2)+3$, que permite expresar todos los términos en potencias de $x-2$.
