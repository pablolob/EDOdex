
## Enunciado

En cada uno de los problemas 1 a 10, demuestre que la ecuación diferencial dada tiene un punto singular regular en $x = 0$. Determine la ecuación indicial, la relación de recurrencia y las raíces de la ecuación indicial. Halle la solución en serie ($x > 0$) correspondiente a la raíz más grande. Si las raíces son desiguales y no difieren en un entero, encuentre también la solución en serie correspondiente a la raíz más pequeña.

1. $2xy'' + y' + xy = 0$

## Solución

La ecuación tiene un **punto singular regular** en $x=0$. La **ecuación indicial** es

$$
2r^2-r=0,
$$

con raíces $r_1=\dfrac{1}{2}$ y $r_2=0$. La **relación de recurrencia**, con $a_1=0$, es

$$
a_{n+1}=-\frac{a_{n-1}}{(n+1+r)(2n+2r+1)},\qquad n\ge1 .
$$

Solución correspondiente a la raíz mayor $r_1=\dfrac{1}{2}$:

$$
y_1(x)=x^{1/2}\left[1+\sum_{k=1}^{\infty}\frac{(-1)^k\,x^{2k}}{\prod_{j=1}^{k}2j(4j+1)}\right].
$$

Como las raíces difieren en $\dfrac{1}{2}$, que no es un entero, la solución correspondiente a la raíz menor $r_2=0$ es

$$
y_2(x)=1+\sum_{k=1}^{\infty}\frac{(-1)^k\,x^{2k}}{\prod_{j=1}^{k}2j(4j-1)} .
$$

La solución general en $x>0$ es $y(x)=C_1y_1(x)+C_2y_2(x)$.

## Resolución

Se escribe la ecuación en forma estándar,

$$
y''+\frac{1}{2x}\,y'+\frac{1}{2}\,y=0,
$$

con $p(x)=\dfrac{1}{2x}$ y $q(x)=\dfrac{1}{2}$. En $x=0$ los productos $xp(x)=\dfrac{1}{2}$ y $x^2q(x)=\dfrac{x^2}{2}$ son analíticos y tienen límite finito. Por tanto, $x=0$ es un **punto singular regular**.

Se aplica el **método de Frobenius** con

$$
y=\sum_{n=0}^{\infty}a_nx^{n+r},\qquad a_0\ne0 .
$$

Las derivadas son

$$
y'=\sum_{n=0}^{\infty}(n+r)a_nx^{n+r-1},\qquad y''=\sum_{n=0}^{\infty}(n+r)(n+r-1)a_nx^{n+r-2}.
$$

Al sustituir en la ecuación resulta

$$
2xy''+y'+xy=\sum_{n=0}^{\infty}\bigl[2(n+r)(n+r-1)+(n+r)\bigr]a_nx^{n+r-1}+\sum_{n=0}^{\infty}a_nx^{n+r+1}.
$$

La potencia más baja es $x^{r-1}$ y proviene solo del primer sumando. Su coeficiente es

$$
\bigl[2r(r-1)+r\bigr]a_0=(2r^2-r)a_0 .
$$

Como $a_0\ne0$, la **ecuación indicial** es

$$
2r^2-r=0,\qquad \text{esto es,}\quad r(2r-1)=0,
$$

cuyas raíces son

$$
r_1=\frac{1}{2},\qquad r_2=0 .
$$

Para obtener la recurrencia se iguala a cero el coeficiente de $x^{n+r}$. El primer sumando aporta el término con $a_{n+1}$ y el segundo el término con $a_{n-1}$, este último solo para $n\ge1$:

$$
(n+1+r)\bigl[2(n+r)+1\bigr]a_{n+1}+a_{n-1}=0 .
$$

Para $n=0$ no existe el término con $a_{-1}$; queda $(1+r)(2r+1)a_1=0$, de donde $a_1=0$. Para $n\ge1$,

$$
a_{n+1}=-\frac{a_{n-1}}{(n+1+r)(2n+2r+1)} .
$$

Como $a_1=0$, todos los coeficientes de índice impar se anulan. Los coeficientes pares se obtienen con $n=2k-1$:

$$
a_{2k}=-\frac{a_{2k-2}}{(2k+r)(4k+2r-1)},\qquad k\ge1 .
$$

**Raíz mayor $r_1=\dfrac{1}{2}$.** La recurrencia se reduce a

$$
a_{2k}=-\frac{a_{2k-2}}{2k(4k+1)},\qquad k\ge1,
$$

y por iteración

$$
a_{2k}=\frac{(-1)^k\,a_0}{\prod_{j=1}^{k}2j(4j+1)} .
$$

Tomando $a_0=1$,

$$
y_1(x)=x^{1/2}\left[1+\sum_{k=1}^{\infty}\frac{(-1)^k\,x^{2k}}{\prod_{j=1}^{k}2j(4j+1)}\right]
=x^{1/2}\left(1-\frac{x^2}{10}+\frac{x^4}{360}-\cdots\right).
$$

**Raíz menor $r_2=0$.** La recurrencia queda

$$
a_{2k}=-\frac{a_{2k-2}}{2k(4k-1)},\qquad k\ge1,
$$

de modo que

$$
a_{2k}=\frac{(-1)^k\,a_0}{\prod_{j=1}^{k}2j(4j-1)} .
$$

Tomando $a_0=1$,

$$
y_2(x)=1+\sum_{k=1}^{\infty}\frac{(-1)^k\,x^{2k}}{\prod_{j=1}^{k}2j(4j-1)}
=1-\frac{x^2}{6}+\frac{x^4}{168}-\cdots .
$$

La diferencia $r_1-r_2=\dfrac{1}{2}$ no es un entero, por lo que las dos series son linealmente independientes. La solución general para $x>0$ es

$$
y(x)=C_1y_1(x)+C_2y_2(x).
$$

## Observaciones

Las dos series convergen para todo $x>0$, pues $x=0$ es el único punto singular de la ecuación.

Como $r_1-r_2=\dfrac{1}{2}\notin\mathbb{Z}$, ninguna de las dos soluciones contiene términos logarítmicos; la segunda serie corresponde a la raíz menor sin necesidad de reducir el orden.
