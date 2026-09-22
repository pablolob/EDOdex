
## Enunciado

Dado que $y = \sum_{n=0}^{\infty} n x^n$, calcule $y'$ y $y''$ y escriba los cuatro primeros términos de cada serie, así como el coeficiente de $x^n$ del término general.

## Solución

Las derivadas, escritas como potencias de $x^n$, son

$$
y' = \sum_{n=0}^{\infty} (n+1)^2 x^n, \qquad y'' = \sum_{n=0}^{\infty} (n+1)(n+2)^2 x^n.
$$

Los cuatro primeros términos de cada serie son

$$
\begin{aligned}
y &= x + 2x^2 + 3x^3 + 4x^4 + \cdots, \\
y' &= 1 + 4x + 9x^2 + 16x^3 + \cdots, \\
y'' &= 4 + 18x + 48x^2 + 100x^3 + \cdots.
\end{aligned}
$$

El coeficiente de $x^n$ es $n$ en $y$, $(n+1)^2$ en $y'$ y $(n+1)(n+2)^2$ en $y''$.

## Resolución

El término de índice $n=0$ de $y$ es nulo, de modo que la serie puede escribirse desde $n=1$:

$$
y = \sum_{n=1}^{\infty} n x^n.
$$

La **derivación término a término**, válida dentro del intervalo de convergencia, da

$$
y' = \sum_{n=1}^{\infty} n \cdot n\, x^{n-1} = \sum_{n=1}^{\infty} n^2 x^{n-1}.
$$

Para expresar la serie como potencias de $x^n$ se reindexa con $m=n-1$, es decir, $n=m+1$:

$$
y' = \sum_{m=0}^{\infty} (m+1)^2 x^{m} = \sum_{n=0}^{\infty} (n+1)^2 x^{n}.
$$

Los cuatro primeros términos se obtienen para $n=0,1,2,3$, que son $1, 4x, 9x^2, 16x^3$. Por tanto, $y' = 1 + 4x + 9x^2 + 16x^3 + \cdots$, y el coeficiente de $x^n$ en $y'$ es $(n+1)^2$.

Al derivar de nuevo,

$$
y'' = \sum_{n=1}^{\infty} n^2 (n-1)\, x^{n-2}.
$$

La reindexación $m=n-2$, es decir, $n=m+2$, conduce a

$$
y'' = \sum_{m=0}^{\infty} (m+2)^2 (m+1)\, x^{m} = \sum_{n=0}^{\infty} (n+1)(n+2)^2 x^{n}.
$$

Los cuatro primeros términos son $4, 18x, 48x^2, 100x^3$, y el coeficiente de $x^n$ en $y''$ es $(n+1)(n+2)^2$.

La serie $y$ converge para $|x|<1$ por el criterio del cociente. La derivación término a término es válida en ese intervalo y conserva el radio de convergencia.

## Observaciones

En $|x|<1$ la serie es la derivada de la serie geométrica multiplicada por $x$, de donde $y = \dfrac{x}{(1-x)^2}$. Derivar esta forma cerrada reproduce $y' = \dfrac{1+x}{(1-x)^3}$ y $y'' = \dfrac{4+2x}{(1-x)^4}$, cuyos desarrollos coinciden con los coeficientes calculados.
