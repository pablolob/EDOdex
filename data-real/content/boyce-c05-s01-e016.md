
## Enunciado

En cada uno de los problemas 9 a 16, determine la serie de Taylor en torno al punto $x_0$ para la función dada. Determine también el radio de convergencia de la serie.

16. $\frac{1}{1 - x}, \quad x_0 = 2$

## Solución

La serie de Taylor de $\dfrac{1}{1-x}$ en torno a $x_0=2$ es

$$
\frac{1}{1-x} = \sum_{n=0}^{\infty} (-1)^{n+1}(x-2)^n,
$$

válida para $|x-2|<1$, y su radio de convergencia es

$$
R = 1.
$$

## Resolución

La función se reescribe en potencias de $x-2$. Con $u=x-2$, se tiene $x=u+2$ y

$$
1-x = 1-(u+2) = -(1+u).
$$

Por tanto,

$$
\frac{1}{1-x} = -\frac{1}{1+u} = -\frac{1}{1-(-u)}.
$$

La serie geométrica $\dfrac{1}{1-z}=\displaystyle\sum_{n=0}^{\infty} z^n$ converge para $|z|<1$. Con $z=-u$,

$$
\frac{1}{1-x} = -\sum_{n=0}^{\infty} (-u)^n = -\sum_{n=0}^{\infty} (-1)^n u^n = \sum_{n=0}^{\infty} (-1)^{n+1} u^n.
$$

Al sustituir $u=x-2$ resulta la serie pedida,

$$
\frac{1}{1-x} = \sum_{n=0}^{\infty} (-1)^{n+1}(x-2)^n.
$$

La condición de convergencia es $|z|=|u|=|x-2|<1$. El intervalo de convergencia es $(1,3)$ y el radio es $R=1$.

## Observaciones

El intervalo abierto de convergencia es $(1,3)$; en los extremos la serie geométrica diverge. El radio finito $R=1$ coincide con la distancia de $x_0=2$ a la singularidad de $\frac{1}{1-x}$ en $x=1$.

### Método alternativo: definición de Taylor

Los coeficientes también se obtienen de la fórmula general. Las derivadas sucesivas son

$$
f^{(n)}(x)=\frac{n!}{(1-x)^{n+1}},
$$

de modo que $f^{(n)}(2)=n!\,(-1)^{n+1}$ y $a_n=\dfrac{f^{(n)}(2)}{n!}=(-1)^{n+1}$, en acuerdo con la serie geométrica.
