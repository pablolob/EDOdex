
## Enunciado

Recuerde que $\cosh bt = (e^{bt} + e^{-bt})/2$ y $\operatorname{senh} bt = (e^{bt} - e^{-bt})/2$. En cada uno de los problemas 7 a 10, halle la transformada de Laplace de la función dada; $a$ y $b$ son constantes reales.

9. $e^{at} \cosh bt$

## Solución

La transformada de Laplace es

$$
\mathcal{L}\{e^{at}\cosh bt\} = \frac{s-a}{(s-a)^2-b^2}, \qquad s > a + |b|.
$$

## Resolución

Se sustituye la definición del coseno hiperbólico:

$$
e^{at}\cosh bt = \frac{e^{at}}{2}\left(e^{bt}+e^{-bt}\right) = \frac{1}{2}\left(e^{(a+b)t}+e^{(a-b)t}\right).
$$

La **transformada de Laplace** es lineal, porque la integral impropia que la define lo es. En consecuencia,

$$
\mathcal{L}\{e^{at}\cosh bt\} = \frac{1}{2}\left(\mathcal{L}\{e^{(a+b)t}\}+\mathcal{L}\{e^{(a-b)t}\}\right).
$$

Para una constante real $c$, la definición integral da

$$
\mathcal{L}\{e^{ct}\} = \int_0^\infty e^{-st}e^{ct}\,dt = \int_0^\infty e^{-(s-c)t}\,dt = \frac{1}{s-c}, \qquad s>c.
$$

Con $c=a+b$ y $c=a-b$,

$$
\mathcal{L}\{e^{at}\cosh bt\} = \frac{1}{2}\left(\frac{1}{s-a-b}+\frac{1}{s-a+b}\right).
$$

Se combinan las fracciones con denominador común $(s-a-b)(s-a+b)=(s-a)^2-b^2$:

$$
\begin{aligned}
\frac{1}{s-a-b}+\frac{1}{s-a+b}
&= \frac{(s-a+b)+(s-a-b)}{(s-a)^2-b^2} \\
&= \frac{2(s-a)}{(s-a)^2-b^2}.
\end{aligned}
$$

Al sustituir en la expresión anterior,

$$
\mathcal{L}\{e^{at}\cosh bt\} = \frac{s-a}{(s-a)^2-b^2}.
$$

La integral converge cuando $s>a+b$ y $s>a-b$ simultáneamente, es decir, para $s>a+|b|$.

## Observaciones

La fórmula se reduce al par de la exponencial cuando $b=0$: entonces $\cosh bt=1$ y el resultado es $1/(s-a)=\mathcal{L}\{e^{at}\}$. Con $a=0$ se recupera $\mathcal{L}\{\cosh bt\}=s/(s^2-b^2)$.
