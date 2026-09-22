
## Enunciado

En cada uno de los problemas 4 a 7 encuentre la transformada de Laplace de la función dada.

6. $f(t) = \int_0^t (t - \tau)e^\tau \,d\tau$

## Solución

Se evalúa primero la integral que define $f(t)$ y después se aplica la **linealidad** de la transformada de Laplace con los pares básicos de la tabla. El resultado es

$$
\mathcal{L}\{f(t)\} = \frac{1}{s^2(s-1)}, \qquad s > 1.
$$

## Resolución

Se desarrolla la integral que define la función. Por **linealidad de la integral**,

$$
f(t)=\int_0^t (t-\tau)e^\tau\,d\tau
= t\int_0^t e^\tau\,d\tau-\int_0^t \tau e^\tau\,d\tau .
$$

La primera integral es directa: $t\int_0^t e^\tau\,d\tau=t(e^t-1)$. La segunda se calcula por **integración por partes**, con $u=\tau$ y $dv=e^\tau\,d\tau$:

$$
\int_0^t \tau e^\tau\,d\tau
=\bigl[\tau e^\tau-e^\tau\bigr]_0^t
=t e^t-e^t+1 .
$$

Al sustituir ambas expresiones,

$$
f(t)=t(e^t-1)-(t e^t-e^t+1)=e^t-t-1 .
$$

Ahora se aplica la **transformada de Laplace** término a término. Con los pares $\mathcal{L}\{e^t\}=\dfrac{1}{s-1}$ para $s>1$, $\mathcal{L}\{1\}=\dfrac{1}{s}$ y $\mathcal{L}\{t\}=\dfrac{1}{s^2}$ para $s>0$,

$$
\mathcal{L}\{f(t)\}=\frac{1}{s-1}-\frac{1}{s}-\frac{1}{s^2}.
$$

Se combinan las fracciones con denominador común $s^2(s-1)$:

$$
\frac{1}{s-1}-\frac{1}{s}-\frac{1}{s^2}
=\frac{s^2-s(s-1)-(s-1)}{s^2(s-1)}
=\frac{1}{s^2(s-1)} .
$$

La región de convergencia es la intersección de las regiones de cada término, es decir, $s>1$.

## Observaciones

La función admite la forma explícita $f(t)=e^t-t-1$. En consecuencia, la transformada tiene un polo simple en $s=1$ y un polo doble en $s=0$.

### Método alternativo: teorema de convolución

La integral que define $f$ es la convolución de $g(t)=t$ con $h(t)=e^t$, es decir, $f=g*h$. Por el teorema de convolución, $\mathcal{L}\{g*h\}=\mathcal{L}\{g\}\mathcal{L}\{h\}$, de modo que

$$
\mathcal{L}\{f(t)\}=\mathcal{L}\{t\}\,\mathcal{L}\{e^t\}
=\frac{1}{s^2}\cdot\frac{1}{s-1}=\frac{1}{s^2(s-1)} .
$$

Este camino evita evaluar la integral, pero requiere disponer del teorema de convolución; la resolución anterior es autocontenida.
