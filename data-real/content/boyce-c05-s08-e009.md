
## Enunciado

Considere la ecuación de Bessel de orden $\nu$,

$$x^2y'' + xy' + (x^2 - \nu^2)y = 0, \quad x > 0.$$

Tome $\nu$ real y mayor que cero.

a) Demuestre que $x = 0$ es un punto singular regular y que las raíces de la ecuación indicicial son $\nu$ y $-\nu$.

b) Correspondiendo a la mayor raíz $\nu$, demuestre que una solución es

$$y_1(x) = x^\nu \left[ 1 + \sum_{m=1}^\infty \frac{(-1)^m}{m!(m + \nu)(m + \nu - 1)\cdots(2 + \nu)(1 + \nu)} \left(\frac{x}{2}\right)^{2m} \right].$$

c) Si $2\nu$ no es un entero, demuestre que una segunda solución es

$$y_2(x) = x^{-\nu} \left[ 1 + \sum_{m=1}^\infty \frac{(-1)^m}{m!(m - \nu)(m - \nu - 1)\cdots(2 - \nu)(1 - \nu)} \left(\frac{x}{2}\right)^{2m} \right].$$

Observe que $y_1(x) \to 0$ cuando $x \to 0$ y que $y_2(x)$ es no acotada cuando $x \to 0$.

d) Compruebe por métodos directos que las series de potencias de las expresiones para $y_1(x)$ y $y_2(x)$ convergen absolutamente para toda $x$. Verifique también que $y_2$ es una solución con el único supuesto de que $\nu$ no sea un entero.

## Solución

a) El punto $x=0$ es un **punto singular regular**. La **ecuación indicial** es

$$
r^2-\nu^2=0,
$$

cuyas raíces son $r_1=\nu$ y $r_2=-\nu$.

b) Para la raíz mayor $r_1=\nu$, una solución es

$$
y_1(x)=x^{\nu}\left[1+\sum_{m=1}^{\infty}
\frac{(-1)^m}{m!\,(m+\nu)(m+\nu-1)\cdots(1+\nu)}
\left(\frac{x}{2}\right)^{2m}\right].
$$

c) Si $2\nu$ no es un entero, la raíz $r_2=-\nu$ produce la segunda solución

$$
y_2(x)=x^{-\nu}\left[1+\sum_{m=1}^{\infty}
\frac{(-1)^m}{m!\,(m-\nu)(m-\nu-1)\cdots(1-\nu)}
\left(\frac{x}{2}\right)^{2m}\right].
$$

d) Las dos series convergen absolutamente para todo $x$, pues su radio de convergencia es infinito. La función $y_2$ es solución con la sola condición de que $\nu$ no sea un entero. Además, $y_1(x)\to0$ y $y_2(x)$ es no acotada cuando $x\to0^{+}$.

## Resolución

**a) Clasificación del punto singular y ecuación indicial.**

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. Para $x>0$,

$$
y''+\frac{1}{x}\,y'+\left(1-\frac{\nu^2}{x^2}\right)y=0,
\qquad
p(x)=\frac{1}{x},\quad q(x)=1-\frac{\nu^2}{x^2}.
$$

El coeficiente de $y''$ es $1$ y no se anula, de modo que el único punto singular es $x=0$. Los productos

$$
x\,p(x)=1,\qquad x^2q(x)=x^2-\nu^2
$$

son analíticos en $x=0$ (una constante y un polinomio). Se cumplen las dos condiciones de punto singular regular, luego $x=0$ es un **punto singular regular**.

Con $p_0=\lim_{x\to0}x\,p(x)=1$ y $q_0=\lim_{x\to0}x^2q(x)=-\nu^2$, la ecuación indicial es

$$
r(r-1)+p_0r+q_0=r(r-1)+r-\nu^2=r^2-\nu^2=0,
$$

cuyas raíces son $r_1=\nu$ y $r_2=-\nu$.

**b) Solución asociada a la raíz $r=\nu$.**

Por el **método de Frobenius** se propone

$$
y=x^r\sum_{n=0}^{\infty}a_nx^n=\sum_{n=0}^{\infty}a_nx^{n+r},\qquad a_0\ne0 .
$$

Las derivadas son $y'=\sum_{n\ge0}(n+r)a_nx^{n+r-1}$ y $y''=\sum_{n\ge0}(n+r)(n+r-1)a_nx^{n+r-2}$. Al sustituir en la ecuación de Bessel,

$$
x^2y''+xy'+(x^2-\nu^2)y
=\sum_{n=0}^{\infty}\bigl[(n+r)^2-\nu^2\bigr]a_nx^{n+r}
+\sum_{n=0}^{\infty}a_nx^{n+r+2}=0 .
$$

Reindexando la última suma con $n\to n-2$,

$$
\sum_{n=0}^{\infty}\bigl[(n+r)^2-\nu^2\bigr]a_nx^{n+r}
+\sum_{n=2}^{\infty}a_{n-2}x^{n+r}=0 .
$$

La unicidad del desarrollo en serie de potencias iguala a cero cada coeficiente:

$$
\begin{aligned}
n=0:&\quad (r^2-\nu^2)a_0=0, \\
n=1:&\quad \bigl[(1+r)^2-\nu^2\bigr]a_1=0, \\
n\ge2:&\quad \bigl[(n+r)^2-\nu^2\bigr]a_n+a_{n-2}=0 .
\end{aligned}
$$

La primera ecuación reproduce la ecuación indicial. Para $r=\nu$ el coeficiente de $a_1$ vale $(1+\nu)^2-\nu^2=1+2\nu\ne0$, de modo que $a_1=0$. La recurrencia para $n\ge2$,

$$
a_n=-\frac{a_{n-2}}{(n+\nu)^2-\nu^2}=-\frac{a_{n-2}}{n(n+2\nu)},
$$

anula entonces todos los coeficientes impares. Para $n=2m$,

$$
a_{2m}=-\frac{a_{2m-2}}{4m(m+\nu)},
$$

y la iteración desde $a_0$ da

$$
a_{2m}=\frac{(-1)^m a_0}{4^m\,m!\,(m+\nu)(m-1+\nu)\cdots(1+\nu)} .
$$

Eligiendo $a_0=1$ y usando $4^m=2^{2m}$,

$$
y_1(x)=x^{\nu}\left[1+\sum_{m=1}^{\infty}
\frac{(-1)^m}{m!\,(m+\nu)(m+\nu-1)\cdots(1+\nu)}
\left(\frac{x}{2}\right)^{2m}\right].
$$

**c) Solución asociada a la raíz $r=-\nu$.**

Con $r=-\nu$ la recurrencia es $n(n-2\nu)a_n=-a_{n-2}$. Si $2\nu$ no es un entero, entonces $n(n-2\nu)\ne0$ para todo $n\ge1$. La ecuación para $n=1$ es $(1-2\nu)a_1=0$, así que $a_1=0$ y todos los coeficientes impares se anulan. Para $n=2m$,

$$
a_{2m}=-\frac{a_{2m-2}}{4m(m-\nu)},
$$

de donde

$$
a_{2m}=\frac{(-1)^m a_0}{4^m\,m!\,(m-\nu)(m-1-\nu)\cdots(1-\nu)} .
$$

Con $a_0=1$,

$$
y_2(x)=x^{-\nu}\left[1+\sum_{m=1}^{\infty}
\frac{(-1)^m}{m!\,(m-\nu)(m-\nu-1)\cdots(1-\nu)}
\left(\frac{x}{2}\right)^{2m}\right].
$$

**d) Convergencia y verificación.**

Los coeficientes de $y_1$ se escriben $c_m=\dfrac{(-1)^m}{4^m\,m!\prod_{k=1}^{m}(k+\nu)}$ para $m\ge0$, con $c_0=1$. El cociente de términos consecutivos de la serie $\sum c_mx^{2m}$ es

$$
\left|\frac{c_{m+1}x^{2m+2}}{c_mx^{2m}}\right|
=\frac{|x|^2}{4(m+1)(m+1+\nu)}\to0\qquad(m\to\infty)
$$

para cada $x$ fijo. Por el **criterio del cociente**, la serie converge absolutamente para todo $x\in\mathbb{R}$ y su radio de convergencia es infinito. El mismo cálculo con $m+1-\nu$ en lugar de $m+1+\nu$ prueba la convergencia absoluta de la serie de $y_2$ para todo $x$, siempre que $m-\nu\ne0$ para $m\ge1$.

Como ambas series convergen en todo $\mathbb{R}$, la derivación término a término es válida. Los coeficientes se han construido para que se anule el coeficiente de cada potencia de $x$, así que $y_1$ y $y_2$ son soluciones de la ecuación de Bessel para $x>0$.

Resta precisar el supuesto sobre $\nu$ para $y_2$. La recurrencia asociada a $r=-\nu$ solo exige que no se anule $m-\nu$ para $m=1,2,\dots$, esto es, que $\nu$ no sea un entero. Si $2\nu$ es un entero impar, el único denominador $n(n-2\nu)$ que se anula corresponde a un índice $n$ impar; como $a_1=0$ anula toda la cadena impar, la ecuación se satisface de forma automática y la serie par sigue siendo solución. Por tanto, $y_2$ es solución con el único supuesto de que $\nu$ no sea un entero.

Finalmente, como $\nu>0$, los factores $x^{\nu}$ y $x^{-\nu}$ dan

$$
\lim_{x\to0^{+}}y_1(x)=0,\qquad \lim_{x\to0^{+}}y_2(x)=\infty,
$$

de acuerdo con el comportamiento señalado en el enunciado.

## Observaciones

Las dos soluciones son, salvo constantes, las funciones de Bessel de primera clase:

$$
y_1(x)=2^{\nu}\Gamma(1+\nu)\,J_{\nu}(x),\qquad
y_2(x)=2^{-\nu}\Gamma(1-\nu)\,J_{-\nu}(x).
$$

Las raíces indiciales difieren en $2\nu$. Cuando $\nu$ no es un entero, $y_1$ y $y_2$ tienen potencias iniciales distintas, $x^{\nu}$ y $x^{-\nu}$, de modo que son linealmente independientes y la solución general en $x>0$ es $y=C_1y_1+C_2y_2$. Cuando $\nu$ es un entero la recurrencia de $r=-\nu$ se rompe en $m=\nu$ y la segunda solución requiere un término con $\ln x$, como ocurre en el caso de orden cero. Si $2\nu$ es un entero impar, el supuesto puede rebajarse a $\nu\notin\mathbb{Z}$, tal como se argumenta en el apartado d).
