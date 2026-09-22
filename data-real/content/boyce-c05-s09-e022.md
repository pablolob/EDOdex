
## Enunciado

En cada uno de los problemas 21 a 24, determine si la integral dada converge o diverge.

22. $\int_{0}^{\infty} te^{-t} \,dt$

## Solución

La integral **converge** y su valor es

$$
\int_{0}^{\infty} t e^{-t}\,dt = 1.
$$

## Resolución

La integral es impropia porque el intervalo de integración no está acotado. Se define mediante el límite

$$
\int_{0}^{\infty} t e^{-t}\,dt = \lim_{R\to\infty}\int_{0}^{R} t e^{-t}\,dt.
$$

Para la integral definida se aplica **integración por partes** con $u=t$ y $dv=e^{-t}\,dt$, de modo que $du=dt$ y $v=-e^{-t}$:

$$
\begin{aligned}
\int_{0}^{R} t e^{-t}\,dt
&= \left[-t e^{-t}\right]_{0}^{R} + \int_{0}^{R} e^{-t}\,dt \\
&= -R e^{-R} + \left[-e^{-t}\right]_{0}^{R} \\
&= 1 - (R+1)e^{-R}.
\end{aligned}
$$

El término de frontera en $t=0$ se anula porque $t e^{-t}=0$ allí. Se toma ahora el límite cuando $R\to\infty$. La exponencial decrece más rápido que cualquier polinomio, así que $R e^{-R}\to 0$ y $e^{-R}\to 0$. Por tanto,

$$
\int_{0}^{\infty} t e^{-t}\,dt = \lim_{R\to\infty}\left[1-(R+1)e^{-R}\right] = 1.
$$

Como el límite existe y es finito, la integral converge.

## Observaciones

En el contexto de la sección, esta integral es la que define la **transformada de Laplace** de $f(t)=t$ evaluada en $s=1$, es decir, $\mathcal{L}\{t\}\big|_{s=1}=1$. La convergencia está garantizada porque el factor $e^{-t}$ decae más rápido de lo que crece $t$; para $s>0$ el mismo argumento muestra la convergencia de $\mathcal{L}\{t\}(s)$.
