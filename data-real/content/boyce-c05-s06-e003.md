
## Enunciado

En cada uno de los problemas 1 a 10, demuestre que la ecuación diferencial dada tiene un punto singular regular en $x = 0$. Determine la ecuación indicial, la relación de recurrencia y las raíces de la ecuación indicial. Halle la solución en serie ($x > 0$) correspondiente a la raíz más grande. Si las raíces son desiguales y no difieren en un entero, encuentre también la solución en serie correspondiente a la raíz más pequeña.

3. $xy'' + y = 0$

## Solución

La ecuación tiene un **punto singular regular** en $x=0$. La **ecuación indicial** es

$$
r(r-1)=0,
$$

con raíces $r_1=1$ y $r_2=0$. La **relación de recurrencia** es

$$
a_n=-\frac{a_{n-1}}{(n+r)(n+r-1)},\qquad n\ge 1 .
$$

La solución en serie para $x>0$ correspondiente a la raíz mayor $r_1=1$ es

$$
y_1(x)=a_0\,x\sum_{n=0}^{\infty}\frac{(-1)^n}{n!\,(n+1)!}\,x^{n}
=a_0\left(x-\frac{x^2}{2}+\frac{x^3}{12}-\frac{x^4}{144}+\cdots\right).
$$

Como las raíces difieren en un entero, $r_1-r_2=1$, no se solicita la solución correspondiente a la raíz menor.

## Resolución

Se escribe la ecuación en forma estándar. Para $x\ne0$,

$$
y''+\frac{1}{x}\,y=0,
$$

con $p(x)=0$ y $q(x)=\dfrac{1}{x}$. En $x=0$ los productos $xp(x)=0$ y $x^2q(x)=x$ son analíticos, de modo que $x=0$ es un **punto singular regular**; además es el único punto singular.

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
xy''+y=\sum_{n=0}^{\infty}(n+r)(n+r-1)a_nx^{n+r-1}+\sum_{n=0}^{\infty}a_nx^{n+r}.
$$

En el segundo sumando se desplaza el índice con $m=n+1$:

$$
\sum_{n=0}^{\infty}a_nx^{n+r}=\sum_{n=1}^{\infty}a_{n-1}x^{n+r-1}.
$$

La potencia más baja es $x^{r-1}$ y proviene solo del primer sumando. Su coeficiente es

$$
r(r-1)a_0 .
$$

Como $a_0\ne0$, la **ecuación indicial** es

$$
r(r-1)=0,
$$

cuyas raíces son

$$
r_1=1,\qquad r_2=0 .
$$

Para $n\ge1$ se iguala a cero el coeficiente de $x^{n+r-1}$ y se obtiene la **relación de recurrencia**

$$
(n+r)(n+r-1)a_n+a_{n-1}=0,
\qquad\text{esto es,}\qquad
a_n=-\frac{a_{n-1}}{(n+r)(n+r-1)} .
$$

**Raíz mayor $r_1=1$.** La recurrencia se reduce a

$$
a_n=-\frac{a_{n-1}}{n(n+1)},\qquad n\ge1 .
$$

Iterando desde $a_0$,

$$
a_1=-\frac{a_0}{2},\qquad
a_2=\frac{a_0}{12},\qquad
a_3=-\frac{a_0}{144},
$$

y en general

$$
a_n=\frac{(-1)^n\,a_0}{n!\,(n+1)!},
$$

pues $\prod_{k=1}^{n}k(k+1)=n!\,(n+1)!$. Tomando $a_0$ como constante arbitraria,

$$
y_1(x)=a_0\,x\sum_{n=0}^{\infty}\frac{(-1)^n}{n!\,(n+1)!}\,x^{n}
=a_0\left(x-\frac{x^2}{2}+\frac{x^3}{12}-\frac{x^4}{144}+\cdots\right).
$$

**Raíz menor $r_2=0$.** Las raíces difieren en $r_1-r_2=1$, que es un entero. El enunciado solo pide la segunda solución en serie cuando las raíces no difieren en un entero, por lo que este caso no se desarrolla.

## Observaciones

La recurrencia relaciona cada coeficiente con el anterior y no anula ningún índice; por eso la serie contiene todas las potencias de $x$ a partir de $x^{1}$, sin separación entre términos pares e impares.

Cuando las raíces difieren en un entero, la solución asociada a la raíz menor puede contener un término logarítmico y no se obtiene con la misma recurrencia. El enunciado excluye ese caso.

La serie converge para todo $x$, pues el criterio del cociente da $\left|\dfrac{a_{n+1}x^{n+1}}{a_nx^{n}}\right|=\dfrac{|x|}{(n+1)(n+2)}\to0$. El único punto singular de la ecuación es $x=0$, de modo que la solución es válida en todo el intervalo $x>0$.
