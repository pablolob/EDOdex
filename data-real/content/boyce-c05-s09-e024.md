
## Enunciado

En cada uno de los problemas 21 a 24, determine si la integral dada converge o diverge.

24. $\int_{0}^{\infty} e^{-t} \cos t \,dt$

## Solución

La integral **converge** y su valor es

$$
\int_{0}^{\infty} e^{-t}\cos t\,dt = \frac{1}{2}.
$$

## Resolución

La integral es impropia porque el intervalo de integración no está acotado. Se define mediante el límite

$$
\int_{0}^{\infty} e^{-t}\cos t\,dt = \lim_{R\to\infty}\int_{0}^{R} e^{-t}\cos t\,dt.
$$

Para la integral definida se aplica **integración por partes** dos veces. En la primera se toma $u=e^{-t}$ y $dv=\cos t\,dt$, de modo que $du=-e^{-t}\,dt$ y $v=\sin t$:

$$
\begin{aligned}
\int_{0}^{R} e^{-t}\cos t\,dt
&= \left[e^{-t}\sin t\right]_{0}^{R} + \int_{0}^{R} e^{-t}\sin t\,dt \\
&= e^{-R}\sin R + \int_{0}^{R} e^{-t}\sin t\,dt.
\end{aligned}
$$

En la segunda se toma $u=e^{-t}$ y $dv=\sin t\,dt$, de modo que $v=-\cos t$:

$$
\begin{aligned}
\int_{0}^{R} e^{-t}\sin t\,dt
&= \left[-e^{-t}\cos t\right]_{0}^{R} - \int_{0}^{R} e^{-t}\cos t\,dt \\
&= 1 - e^{-R}\cos R - \int_{0}^{R} e^{-t}\cos t\,dt.
\end{aligned}
$$

Al sustituir esta expresión en la primera igualdad,

$$
\int_{0}^{R} e^{-t}\cos t\,dt
= e^{-R}\sin R + 1 - e^{-R}\cos R - \int_{0}^{R} e^{-t}\cos t\,dt,
$$

y al despejar la integral buscada,

$$
2\int_{0}^{R} e^{-t}\cos t\,dt = 1 + e^{-R}(\sin R - \cos R).
$$

Por tanto,

$$
\int_{0}^{R} e^{-t}\cos t\,dt = \frac{1}{2} + \frac{1}{2}e^{-R}(\sin R - \cos R).
$$

Se toma ahora el límite cuando $R\to\infty$. La exponencial $e^{-R}$ tiende a cero, mientras que $\sin R - \cos R$ permanece acotado; en consecuencia $e^{-R}(\sin R - \cos R)\to 0$. Así,

$$
\int_{0}^{\infty} e^{-t}\cos t\,dt
= \lim_{R\to\infty}\left[\frac{1}{2} + \frac{1}{2}e^{-R}(\sin R - \cos R)\right]
= \frac{1}{2}.
$$

Como el límite existe y es finito, la integral **converge**.

## Observaciones

### Método alternativo: criterio de comparación

Como $|\cos t|\le 1$ para todo $t$, se cumple $0\le |e^{-t}\cos t|\le e^{-t}$ en $[0,\infty)$. La integral $\displaystyle\int_{0}^{\infty} e^{-t}\,dt = 1$ converge, de modo que el **criterio de comparación** concluye que $\displaystyle\int_{0}^{\infty} e^{-t}\cos t\,dt$ converge absolutamente. Este camino decide la convergencia con menos pasos, pero no proporciona el valor $1/2$.

En el contexto de la sección, esta integral es la que define la **transformada de Laplace** de $f(t)=\cos t$ evaluada en $s=1$, es decir, $\mathcal{L}\{\cos t\}\big|_{s=1}=1/2$.
