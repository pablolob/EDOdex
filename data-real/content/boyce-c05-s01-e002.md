
## Enunciado

En cada uno de los problemas 1 a 8, determine el radio de convergencia de la serie de potencias dada.

2. $\sum_{n=0}^{\infty} \frac{n}{2^n} x^n$

## Solución

El radio de convergencia de la serie es

$$
R = 2.
$$

La serie converge para $|x| < 2$ y diverge para $|x| > 2$.

## Resolución

La serie es $\sum_{n=0}^{\infty} \frac{n}{2^n} x^n$. El término correspondiente a $n = 0$ es nulo, de modo que la serie es equivalente a $\sum_{n=1}^{\infty} \frac{n}{2^n} x^n$.

Se aplica el **criterio de la razón** a los coeficientes $a_n = \dfrac{n}{2^n}$ para $n \ge 1$:

$$
L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right|
= \lim_{n \to \infty} \frac{(n+1)/2^{n+1}}{n/2^n}
= \lim_{n \to \infty} \frac{n+1}{2n}
= \frac{1}{2}.
$$

El criterio de la razón asegura convergencia cuando

$$
|x| \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = \frac{|x|}{2} < 1,
$$

es decir, cuando $|x| < 2$, y divergencia cuando $\dfrac{|x|}{2} > 1$, es decir, cuando $|x| > 2$. Por tanto, el radio de convergencia es

$$
R = \frac{1}{L} = 2.
$$

## Observaciones

El mismo resultado se obtiene con el **criterio de la raíz** de Cauchy-Hadamard: $R = \lim_{n \to \infty} |a_n|^{-1/n} = \lim_{n \to \infty} \dfrac{2}{n^{1/n}} = 2$.

El criterio de la razón no decide el comportamiento en la frontera $|x| = 2$. Allí la serie diverge en ambos extremos: en $x = 2$ los términos son $n$ y en $x = -2$ son $(-1)^n n$.
