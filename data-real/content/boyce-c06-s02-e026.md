
## Enunciado

En cada uno de los problemas 24 a 27, encuentre la transformada de Laplace de la función dada. En el problema 27, suponga que es permisible la integración término a término de la serie infinita.

26. $f(t) = 1 - u_1(t) + \cdots + u_{2n}(t) - u_{2n+1}(t) = 1 + \sum_{k=1}^{2n+1} (-1)^k u_k(t)$

## Solución

$$
\mathscr{L}\{f(t)\} = \frac{1 - e^{-(2n+2)s}}{s\left(1 + e^{-s}\right)}, \qquad s > 0.
$$

## Resolución

La función $f$ es constante a tramos: vale $1$ en los intervalos $[2j, 2j+1)$ para $j = 0, 1, \dots, n$ y vale $0$ en el resto. La función escalón unitario se define por

$$
u_k(t) =
\begin{cases}
0, & t < k, \\
1, & t \ge k.
\end{cases}
$$

Por **linealidad** de la transformada de Laplace,

$$
\mathscr{L}\{f(t)\} = \mathscr{L}\{1\} + \sum_{k=1}^{2n+1} (-1)^k \mathscr{L}\{u_k(t)\}.
$$

El par básico $\mathscr{L}\{1\} = 1/s$ se toma de la tabla. La transformada del escalón se obtiene de la definición integral, pues $u_k$ se anula antes de $t = k$:

$$
\mathscr{L}\{u_k(t)\}
= \int_0^\infty e^{-st} u_k(t)\,dt
= \int_k^\infty e^{-st}\,dt
= \left[-\frac{e^{-st}}{s}\right]_k^\infty
= \frac{e^{-ks}}{s}, \qquad s > 0.
$$

Al sustituir ambos pares,

$$
\mathscr{L}\{f(t)\}
= \frac{1}{s} + \sum_{k=1}^{2n+1} (-1)^k \frac{e^{-ks}}{s}
= \frac{1}{s}\sum_{k=0}^{2n+1} \left(-e^{-s}\right)^k.
$$

La suma es una **serie geométrica** finita de razón $r = -e^{-s}$ con $2n+2$ términos. Con la fórmula $\sum_{k=0}^{m} r^k = \dfrac{1 - r^{m+1}}{1 - r}$ y $m = 2n+1$,

$$
\sum_{k=0}^{2n+1} \left(-e^{-s}\right)^k
= \frac{1 - \left(-e^{-s}\right)^{2n+2}}{1 + e^{-s}}
= \frac{1 - e^{-(2n+2)s}}{1 + e^{-s}},
$$

ya que $2n+2$ es par. Por tanto,

$$
\mathscr{L}\{f(t)\} = \frac{1 - e^{-(2n+2)s}}{s\left(1 + e^{-s}\right)}.
$$

## Observaciones

La función $f$ es la versión finita de la onda cuadrada que aparece en el problema 27: vale $1$ en $[2j, 2j+1)$ y $0$ en $[2j+1, 2j+2)$ para $j = 0, 1, \dots, n$, y se anula para $t \ge 2n+1$. La transformada converge para $s > 0$, la misma región que el par $\mathscr{L}\{1\} = 1/s$; los factores exponenciales no introducen singularidades nuevas.

El resultado admite también la forma de suma finita

$$
\mathscr{L}\{f(t)\} = \frac{1 - e^{-s} + e^{-2s} - \cdots - e^{-(2n+1)s}}{s},
$$

equivalente a la forma cerrada anterior.

### Método alternativo: integración directa por tramos

Como $f$ solo es no nula en los $n+1$ intervalos $[2j, 2j+1)$, la definición de la transformada da

$$
\mathscr{L}\{f(t)\}
= \sum_{j=0}^{n} \int_{2j}^{2j+1} e^{-st}\,dt
= \frac{1 - e^{-s}}{s}\sum_{j=0}^{n} e^{-2js}
= \frac{1 - e^{-s}}{s}\cdot\frac{1 - e^{-2(n+1)s}}{1 - e^{-2s}}.
$$

Al factorizar $1 - e^{-2s} = (1 - e^{-s})(1 + e^{-s})$ se recupera la forma cerrada $\dfrac{1 - e^{-(2n+2)s}}{s\left(1 + e^{-s}\right)}$.
