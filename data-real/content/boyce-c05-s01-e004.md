
## Enunciado

En cada uno de los problemas 1 a 8, determine el radio de convergencia de la serie de potencias dada.

4. $\sum_{n=0}^{\infty} 2^n x^n$

## Solución

El radio de convergencia de la serie es

$$
R = \frac{1}{2}.
$$

La serie converge para $|x| < \dfrac{1}{2}$ y diverge para $|x| \ge \dfrac{1}{2}$.

## Resolución

La serie se reescribe agrupando la potencia en el factor común:

$$
\sum_{n=0}^{\infty} 2^n x^n = \sum_{n=0}^{\infty} (2x)^n.
$$

Se trata de una **serie geométrica** de razón $r = 2x$. La serie geométrica $\sum_{n=0}^{\infty} r^n$ converge si y solo si $|r| < 1$ y diverge si $|r| \ge 1$. En consecuencia, la serie converge exactamente cuando

$$
|2x| < 1,
$$

esto es, cuando $|x| < \dfrac{1}{2}$, y diverge cuando $|x| \ge \dfrac{1}{2}$. El radio de convergencia es la distancia del centro $x_0 = 0$ al extremo del intervalo de convergencia:

$$
R = \frac{1}{2}.
$$

## Observaciones

### Método alternativo: criterio de la razón

Aplicado a los coeficientes $a_n = 2^n$, el criterio de la razón da

$$
L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = \lim_{n \to \infty} \frac{2^{n+1}}{2^n} = 2,
\qquad
R = \frac{1}{L} = \frac{1}{2}.
$$

Como la serie es geométrica, también diverge en la frontera $|x| = \dfrac{1}{2}$: en $x = \dfrac{1}{2}$ los términos son $1$ y en $x = -\dfrac{1}{2}$ son $(-1)^n$, y en ninguno de los dos casos tienden a cero. El enunciado solo pide el radio, no el intervalo de convergencia.
