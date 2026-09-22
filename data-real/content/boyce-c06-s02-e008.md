
## Enunciado

Encuentre la transformada de Laplace de la función dada:

8. $f(t) = \begin{cases} 0, & t < 1 \\ t^2 - 2t + 2, & t \ge 1 \end{cases}$

## Solución

La transformada de Laplace de la función es

$$
F(s)=\mathcal{L}\{f(t)\}=e^{-s}\left(\frac{1}{s}+\frac{2}{s^{3}}\right)
=\frac{e^{-s}\left(s^{2}+2\right)}{s^{3}}, \qquad s>0.
$$

## Resolución

La función es nula para $t<1$. Por tanto, la integral que define la **transformada de Laplace** se reduce al tramo $t\ge 1$:

$$
F(s)=\int_0^\infty e^{-st}f(t)\,dt=\int_1^\infty e^{-st}\left(t^2-2t+2\right)dt.
$$

El cambio de variable $u=t-1$, con $t=u+1$ y $dt=du$, traslada el inicio del intervalo a $u=0$ y simplifica el polinomio:

$$
t^2-2t+2=(u+1)^2-2(u+1)+2=u^2+1.
$$

Con este cambio,

$$
F(s)=\int_0^\infty e^{-s(u+1)}\left(u^2+1\right)du
=e^{-s}\int_0^\infty e^{-su}\left(u^2+1\right)du.
$$

Por linealidad y los pares básicos $\mathcal{L}\{1\}=\dfrac{1}{s}$ y $\mathcal{L}\{t^2\}=\dfrac{2}{s^3}$,

$$
\int_0^\infty e^{-su}\left(u^2+1\right)du=\frac{1}{s}+\frac{2}{s^3}.
$$

Sustituyendo este valor,

$$
F(s)=e^{-s}\left(\frac{1}{s}+\frac{2}{s^3}\right)=\frac{e^{-s}\left(s^{2}+2\right)}{s^{3}}, \qquad s>0.
$$

## Observaciones

El polinomio $t^2-2t+2$ es una traslación, $t^2-2t+2=(t-1)^2+1$, lo que explica el cambio de variable $u=t-1$ y el factor $e^{-s}$ del resultado. La discontinuidad de $f$ en $t=1$ no modifica la integral, pues un punto aislado no altera el valor de una integral definida. La transformada converge para $s>0$, región en la que $e^{-st}f(t)$ decae exponencialmente.
