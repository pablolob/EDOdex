
## Enunciado

En cada uno de los problemas 24 a 27, encuentre la transformada de Laplace de la función dada. En el problema 27, suponga que es permisible la integración término a término de la serie infinita.

24. $f(t) = \begin{cases} 1, & 0 \le t < 1 \\ 0, & t \ge 1 \end{cases}$

## Solución

$$
F(s) = \mathcal{L}\{f(t)\} = \frac{1 - e^{-s}}{s}, \qquad s > 0.
$$

## Resolución

La función $f$ se anula para $t \ge 1$, de modo que el integrando solo es no nulo en el intervalo $[0,1]$. La definición de la transformada se reduce a una integral sobre un intervalo finito,

$$
\mathcal{L}\{f(t)\} = \int_0^\infty e^{-st} f(t)\,dt = \int_0^1 e^{-st}\,dt.
$$

Para $s \neq 0$, una primitiva de $e^{-st}$ es $-e^{-st}/s$. El **teorema fundamental del cálculo** da

$$
\int_0^1 e^{-st}\,dt = \left[-\frac{e^{-st}}{s}\right]_0^1 = \frac{1 - e^{-s}}{s}.
$$

La integral converge para todo $s$ real, porque el intervalo de integración es finito. En particular, la expresión anterior es la transformada en el semiplano $s > 0$.

## Observaciones

### Método alternativo: función escalón unitario

La misma transformada se obtiene escribiendo $f(t) = 1 - u_1(t)$ y usando los pares $\mathcal{L}\{1\} = 1/s$ y $\mathcal{L}\{u_1(t)\} = e^{-s}/s$:

$$
\mathcal{L}\{f(t)\} = \frac{1}{s} - \frac{e^{-s}}{s} = \frac{1 - e^{-s}}{s}.
$$

Como $f$ tiene soporte compacto, el cociente presenta en $s = 0$ una singularidad evitable, pues $(1 - e^{-s})/s \to 1$ cuando $s \to 0$. La transformada se extiende así a una función entera con $F(0) = 1$.
