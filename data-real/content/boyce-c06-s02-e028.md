
## Enunciado

Suponga que $f(t + T) = f(t)$ para toda $t \ge 0$ y para algún número positivo fijo $T$; se dice que $f$ es periódica con periodo $T$ sobre $0 \le t < \infty$. demuestre que

$$\mathcal{L}\{f(t)\} = \frac{\int_0^T e^{-st} f(t)\,dt}{1 - e^{-sT}}$$

## Solución

La transformada de Laplace de una función periódica de periodo $T$ es

$$
\mathcal{L}\{f(t)\} = \frac{\displaystyle\int_0^T e^{-st} f(t)\,dt}{1 - e^{-sT}}, \qquad s > 0.
$$

## Resolución

Por definición de la transformada de Laplace,

$$
\mathcal{L}\{f(t)\} = \int_0^{\infty} e^{-st} f(t)\,dt.
$$

El intervalo de integración se divide en los subintervalos de longitud $T$ determinados por el periodo:

$$
\int_0^{\infty} e^{-st} f(t)\,dt = \sum_{n=0}^{\infty} \int_{nT}^{(n+1)T} e^{-st} f(t)\,dt.
$$

En la integral $n$-ésima se aplica el cambio de variable $t = u + nT$, con $dt = du$; los límites $t = nT$ y $t = (n+1)T$ se transforman en $u = 0$ y $u = T$. Además, la periodicidad da $f(u + nT) = f(u)$. Entonces

$$
\int_{nT}^{(n+1)T} e^{-st} f(t)\,dt
= \int_0^T e^{-s(u+nT)} f(u)\,du
= e^{-snT} \int_0^T e^{-su} f(u)\,du.
$$

El factor $e^{-snT}$ no depende de $u$ y se extrae de la integral. Al sustituir en la serie,

$$
\mathcal{L}\{f(t)\}
= \sum_{n=0}^{\infty} e^{-snT} \int_0^T e^{-su} f(u)\,du
= \left( \int_0^T e^{-su} f(u)\,du \right) \sum_{n=0}^{\infty} \left( e^{-sT} \right)^n.
$$

La suma es una **serie geométrica** de razón $r = e^{-sT}$. Converge cuando $|r| < 1$, es decir, cuando $s > 0$, y su valor es

$$
\sum_{n=0}^{\infty} \left( e^{-sT} \right)^n = \frac{1}{1 - e^{-sT}}.
$$

Al reemplazar la suma y renombrar la variable muda $u$ como $t$ resulta

$$
\mathcal{L}\{f(t)\} = \frac{\displaystyle\int_0^T e^{-st} f(t)\,dt}{1 - e^{-sT}}.
$$

## Observaciones

La convergencia de la serie geométrica exige $s > 0$; para $s \le 0$ el factor $e^{-sT}$ no decrece y la integral de la transformada puede no converger.

La fórmula reduce el cálculo de la transformada de una función periódica a una integral sobre un solo periodo. Los valores de $f$ fuera de $[0, T)$ no intervienen por separado, solo a través de la repetición del periodo.
