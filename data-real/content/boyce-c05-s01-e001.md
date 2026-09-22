
## Enunciado

En cada uno de los problemas 1 a 8, determine el radio de convergencia de la serie de potencias dada.

1. $\sum_{n=0}^{\infty} (x-3)^n$

## Solución

La serie converge para $|x-3|<1$, por lo que su radio de convergencia es

$$
R = 1.
$$

## Resolución

El término general de la serie es $u_n=(x-3)^n$. El **criterio del cociente** aplicado a los términos da

$$
\lim_{n\to\infty}\left|\frac{u_{n+1}}{u_n}\right|
= \lim_{n\to\infty}\left|\frac{(x-3)^{n+1}}{(x-3)^n}\right|
= |x-3|.
$$

La serie converge cuando $|x-3|<1$ y diverge cuando $|x-3|>1$. Por tanto, el radio de convergencia es $R=1$, con centro en $x_0=3$.

## Observaciones

### Método alternativo: serie geométrica

La serie es geométrica de razón $x-3$. Esto permite reconocer directamente que converge exactamente cuando $|x-3|<1$, de donde $R=1$.

El intervalo abierto de convergencia es $(2,4)$. En los extremos $x=2$ y $x=4$ el término general no tiende a cero, de modo que la serie diverge allí.
