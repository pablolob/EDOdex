
## Enunciado

En cada uno de los problemas 1 a 10, demuestre que la ecuación diferencial dada tiene un punto singular regular en $x = 0$. Determine la ecuación indicial, la relación de recurrencia y las raíces de la ecuación indicial. Halle la solución en serie ($x > 0$) correspondiente a la raíz más grande. Si las raíces son desiguales y no difieren en un entero, encuentre también la solución en serie correspondiente a la raíz más pequeña.

8. $2x^2y'' + 3xy' + (2x^2 - 1)y = 0$

## Solución

La ecuación tiene un **punto singular regular** en $x=0$. La **ecuación indicial** es

$$
2r^2+r-1=0,
$$

con raíces $r_1=\dfrac{1}{2}$ y $r_2=-1$. La **relación de recurrencia**, con $a_1=0$, es

$$
a_n=-\frac{2a_{n-2}}{2(n+r)^2+(n+r)-1},\qquad n\ge2 .
$$

Solución correspondiente a la raíz mayor $r_1=\dfrac{1}{2}$:

$$
y_1(x)=x^{1/2}\left[1+\sum_{m=1}^{\infty}\frac{(-1)^m\,x^{2m}}{m!\prod_{j=1}^{m}(4j+3)}\right].
$$

Como las raíces difieren en $\dfrac{3}{2}$, que no es un entero, la solución correspondiente a la raíz menor $r_2=-1$ es

$$
y_2(x)=x^{-1}\left[1+\sum_{m=1}^{\infty}\frac{(-1)^m\,x^{2m}}{m!\prod_{j=1}^{m}(4j-3)}\right].
$$

La solución general en $x>0$ es $y(x)=C_1y_1(x)+C_2y_2(x)$.

## Resolución

Se escribe la ecuación en forma estándar. Para $x\ne0$,

$$
y''+\frac{3}{2x}\,y'+\frac{2x^2-1}{2x^2}\,y=0,
$$

con $p(x)=\dfrac{3}{2x}$ y $q(x)=\dfrac{2x^2-1}{2x^2}$. En $x=0$ los productos $xp(x)=\dfrac{3}{2}$ y $x^2q(x)=\dfrac{2x^2-1}{2}$ son analíticos. Por tanto, $x=0$ es un **punto singular regular**.

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
2x^2y''+3xy'+(2x^2-1)y=\sum_{n=0}^{\infty}\bigl[2(n+r)(n+r-1)+3(n+r)-1\bigr]a_nx^{n+r}+\sum_{n=0}^{\infty}2a_nx^{n+r+2}.
$$

El segundo sumando se reindexa con $n\to n-2$:

$$
2x^2y''+3xy'+(2x^2-1)y=\sum_{n=0}^{\infty}\bigl[2(n+r)^2+(n+r)-1\bigr]a_nx^{n+r}+\sum_{n=2}^{\infty}2a_{n-2}x^{n+r}.
$$

La potencia más baja es $x^{r}$ y proviene solo del primer sumando. Su coeficiente es

$$
\bigl[2r(r-1)+3r-1\bigr]a_0=(2r^2+r-1)a_0 .
$$

Como $a_0\ne0$, la **ecuación indicial** es

$$
2r^2+r-1=0,\qquad \text{esto es,}\quad (2r-1)(r+1)=0,
$$

cuyas raíces son

$$
r_1=\frac{1}{2},\qquad r_2=-1 .
$$

Para $n=1$ no existe el término con $a_{-1}$; queda el coeficiente $\bigl[2(1+r)^2+(1+r)-1\bigr]a_1=(2r^2+5r+2)a_1=0$. Como $2r^2+5r+2$ no se anula en $r=\dfrac{1}{2}$ ni en $r=-1$, se obtiene $a_1=0$.

Para $n\ge2$ se iguala a cero el coeficiente de $x^{n+r}$ y resulta la **relación de recurrencia**

$$
a_n=-\frac{2a_{n-2}}{2(n+r)^2+(n+r)-1}.
$$

Como $a_1=0$, todos los coeficientes de índice impar se anulan: $a_{2m+1}=0$. Los coeficientes pares se obtienen con $n=2m$:

$$
a_{2m}=-\frac{2a_{2m-2}}{2(2m+r)^2+(2m+r)-1},\qquad m\ge1 .
$$

**Raíz mayor $r_1=\dfrac{1}{2}$.** El denominador es

$$
2\left(2m+\tfrac12\right)^2+\left(2m+\tfrac12\right)-1=8m^2+6m=2m(4m+3),
$$

de modo que

$$
a_{2m}=-\frac{a_{2m-2}}{m(4m+3)},\qquad m\ge1 .
$$

Iterando desde $a_0$,

$$
a_{2m}=\frac{(-1)^m\,a_0}{m!\prod_{j=1}^{m}(4j+3)} .
$$

Tomando $a_0=1$,

$$
y_1(x)=x^{1/2}\left[1+\sum_{m=1}^{\infty}\frac{(-1)^m\,x^{2m}}{m!\prod_{j=1}^{m}(4j+3)}\right]
=x^{1/2}\left(1-\frac{x^2}{7}+\frac{x^4}{154}-\frac{x^6}{6930}+\cdots\right).
$$

**Raíz menor $r_2=-1$.** Ahora

$$
2(2m-1)^2+(2m-1)-1=8m^2-6m=2m(4m-3),
$$

luego

$$
a_{2m}=-\frac{a_{2m-2}}{m(4m-3)},\qquad m\ge1,
$$

e iterando,

$$
a_{2m}=\frac{(-1)^m\,a_0}{m!\prod_{j=1}^{m}(4j-3)} .
$$

Tomando $a_0=1$,

$$
y_2(x)=x^{-1}\left[1+\sum_{m=1}^{\infty}\frac{(-1)^m\,x^{2m}}{m!\prod_{j=1}^{m}(4j-3)}\right]
=x^{-1}\left(1-x^2+\frac{x^4}{10}-\frac{x^6}{270}+\cdots\right).
$$

La diferencia $r_1-r_2=\dfrac{3}{2}$ no es un entero, por lo que las dos series son linealmente independientes. La solución general para $x>0$ es

$$
y(x)=C_1y_1(x)+C_2y_2(x).
$$

## Observaciones

Las dos series convergen para todo $x>0$, pues $x=0$ es el único punto singular de la ecuación.

Como $r_1-r_2=\dfrac{3}{2}\notin\mathbb{Z}$, ninguna de las dos soluciones contiene términos logarítmicos; la segunda serie corresponde a la raíz menor sin necesidad de reducir el orden.
