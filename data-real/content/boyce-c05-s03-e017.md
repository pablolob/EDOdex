
## Enunciado

Resuelva la ecuación diferencial dada mediante una serie de potencias de $x$ y compruebe que $a_0$ es arbitraria en cada caso:

17. $(1 - x)y' = y$

## Solución

La solución es la serie geométrica

$$
y=a_0\sum_{n=0}^{\infty}x^n=\frac{a_0}{1-x},\qquad |x|<1,
$$

con $a_0$ arbitraria.

## Resolución

Se busca una solución en serie de potencias de $x$ alrededor de $x_0=0$:

$$
y=\sum_{n=0}^{\infty}a_n x^n.
$$

El punto $x_0=0$ es un **punto ordinario**, pues el coeficiente $1-x$ no se anula en él. La derivada de la serie es

$$
y'=\sum_{n=1}^{\infty}n\,a_n x^{n-1}=\sum_{n=0}^{\infty}(n+1)a_{n+1}x^n,
$$

donde el último paso desplaza el índice. Al sustituir en $(1-x)y'=y$ y distribuir,

$$
\sum_{n=0}^{\infty}(n+1)a_{n+1}x^n-\sum_{n=1}^{\infty}n\,a_n x^n=\sum_{n=0}^{\infty}a_n x^n.
$$

La segunda suma empieza en $n=1$; se separa su primer término para igualar coeficientes con las otras dos sumas:

$$
a_1+\sum_{n=1}^{\infty}(n+1)a_{n+1}x^n-\sum_{n=1}^{\infty}n\,a_n x^n=a_0+\sum_{n=1}^{\infty}a_n x^n.
$$

El término constante da

$$
a_1=a_0.
$$

Para $n\ge 1$, la igualdad de los coeficientes de $x^n$ conduce a

$$
(n+1)a_{n+1}-n\,a_n=a_n
\quad\Longrightarrow\quad
(n+1)a_{n+1}=(n+1)a_n
\quad\Longrightarrow\quad
a_{n+1}=a_n.
$$

La recurrencia $a_{n+1}=a_n$ junto con $a_1=a_0$ implica $a_n=a_0$ para todo $n\ge 0$. Ninguna condición obliga a $a_0=0$: la ecuación es homogénea y $a_0=y(0)$ puede tomar cualquier valor real, de modo que $a_0$ es arbitraria. La serie resulta

$$
y=a_0\sum_{n=0}^{\infty}x^n=\frac{a_0}{1-x}.
$$

La serie geométrica converge para $|x|<1$. La ecuación es de **primer orden** y **lineal**, de modo que su solución general contiene una única constante arbitraria, en concordancia con $a_0$.

Sustitución de comprobación: con $y=a_0/(1-x)$ se tiene $y'=a_0/(1-x)^2$, luego

$$
(1-x)y'=(1-x)\frac{a_0}{(1-x)^2}=\frac{a_0}{1-x}=y.
$$

## Observaciones

La ecuación también es **separable**: separando variables se obtiene $y=C/(1-x)$, la misma familia que la serie. El radio de convergencia $R=1$ es la distancia de $x_0=0$ al punto singular $x=1$, donde se anula el coeficiente de $y'$; la serie no representa la solución más allá de $|x|<1$.
