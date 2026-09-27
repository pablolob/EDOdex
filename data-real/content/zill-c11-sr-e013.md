
## Enunciado

Desarrolle $f(x) = |x| - x$, $-1 < x < 1$ en una serie de Fourier.

## Solución

En $(-1,1)$ la serie de Fourier de $f$ es

$$
f(x)=\frac{1}{2}-\frac{4}{\pi^{2}}\sum_{k=1}^{\infty}\frac{\cos\big((2k-1)\pi x\big)}{(2k-1)^{2}}+\frac{2}{\pi}\sum_{n=1}^{\infty}\frac{(-1)^{n}}{n}\sin(n\pi x).
$$

## Resolución

En el intervalo $(-1,1)$ se tiene $p=1$, de modo que la serie de Fourier se escribe como

$$
f(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty}\Big(a_n\cos(n\pi x)+b_n\sin(n\pi x)\Big),
$$

con los coeficientes

$$
a_0=\int_{-1}^{1} f(x)\,dx, \qquad
a_n=\int_{-1}^{1} f(x)\cos(n\pi x)\,dx, \qquad
b_n=\int_{-1}^{1} f(x)\sin(n\pi x)\,dx.
$$

En el intervalo la función vale

$$
f(x)=|x|-x=
\begin{cases}
-2x, & -1<x<0,\\[4pt]
0, & 0\le x<1.
\end{cases}
$$

El término constante resulta

$$
a_0=\int_{-1}^{0}(-2x)\,dx+\int_{0}^{1}0\,dx
=\Big[-x^{2}\Big]_{-1}^{0}=1.
$$

Para los coeficientes de coseno se integra por partes, con $a=n\pi$:

$$
\int x\cos(ax)\,dx=\frac{x\sin(ax)}{a}+\frac{\cos(ax)}{a^{2}}.
$$

Evaluando entre $-1$ y $0$, y usando $\sin(n\pi)=0$ y $\cos(n\pi)=(-1)^{n}$,

$$
\int_{-1}^{0} x\cos(n\pi x)\,dx
=\left[\frac{x\sin(n\pi x)}{n\pi}+\frac{\cos(n\pi x)}{n^{2}\pi^{2}}\right]_{-1}^{0}
=\frac{1-(-1)^{n}}{n^{2}\pi^{2}},
$$

por lo que

$$
a_n=-2\int_{-1}^{0} x\cos(n\pi x)\,dx
=\frac{2\big((-1)^{n}-1\big)}{n^{2}\pi^{2}}.
$$

Este coeficiente se anula para $n$ par y vale $-4/(n^{2}\pi^{2})$ para $n$ impar.

Para los coeficientes de seno, igualmente por partes con

$$
\int x\sin(ax)\,dx=-\frac{x\cos(ax)}{a}+\frac{\sin(ax)}{a^{2}},
$$

se obtiene

$$
\int_{-1}^{0} x\sin(n\pi x)\,dx
=\left[-\frac{x\cos(n\pi x)}{n\pi}+\frac{\sin(n\pi x)}{n^{2}\pi^{2}}\right]_{-1}^{0}
=-\frac{(-1)^{n}}{n\pi},
$$

de donde

$$
b_n=-2\int_{-1}^{0} x\sin(n\pi x)\,dx=\frac{2(-1)^{n}}{n\pi}.
$$

Solo contribuyen al término en coseno los índices impares. Al escribir $n=2k-1$ con $k\ge 1$ y reunir los resultados,

$$
f(x)=\frac{1}{2}-\frac{4}{\pi^{2}}\sum_{k=1}^{\infty}\frac{\cos\big((2k-1)\pi x\big)}{(2k-1)^{2}}+\frac{2}{\pi}\sum_{n=1}^{\infty}\frac{(-1)^{n}}{n}\sin(n\pi x).
$$

La función es continua por tramos y suave por tramos en $(-1,1)$; por el **teorema de Dirichlet** la serie converge a $f(x)$ en cada punto de continuidad y al promedio de los límites laterales en las discontinuidades.

## Observaciones

La función $f$ no es par ni impar, pero admite la descomposición $f(x)=|x|+(-x)$ en su parte par $|x|$ y su parte impar $-x$. La serie en cosenos es la de $|x|$ y la serie en senos es la de $-x$.

En $x=\pm 1$ la extensión periódica de $f$ presenta un salto: $f$ tiende a $2$ por la izquierda de $-1$ y a $0$ por la derecha de $1$. La serie converge allí a

$$
\frac{f(1^{+})+f(1^{-})}{2}=\frac{0+2}{2}=1.
$$

En $x=0$ la función es continua, con $f(0)=0$; la serie también converge a $0$.
