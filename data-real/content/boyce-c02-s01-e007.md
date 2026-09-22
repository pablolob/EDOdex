
## Enunciado

En cada uno de los problemas 1 a 8, encuentre la solución general de la ecuación diferencial dada. $$y' + 2xy = 2xe^{-x^2}$$

## Solución

La ecuación es **lineal de primer orden**. Su solución general es

$$
y(x) = \left(x^2 + C\right)e^{-x^2}, \qquad C \in \mathbb{R},
$$

definida para todo $x \in \mathbb{R}$.

## Resolución

La ecuación ya está escrita en la forma estándar $y' + P(x)y = f(x)$, con

$$
P(x) = 2x, \qquad f(x) = 2xe^{-x^2}.
$$

El **factor integrante** es

$$
\mu(x) = \exp\!\left(\int 2x\,dx\right) = e^{x^2}.
$$

Al multiplicar ambos miembros por $\mu(x)$, el miembro izquierdo es la derivada del producto $e^{x^2}y$:

$$
\frac{d}{dx}\!\left(e^{x^2}y\right) = e^{x^2}\left(2xe^{-x^2}\right) = 2x.
$$

Integrando ambos miembros respecto de $x$,

$$
e^{x^2}y = x^2 + C.
$$

Al despejar $y$ resulta la solución general

$$
y(x) = \left(x^2 + C\right)e^{-x^2}.
$$

Comprobación: al derivar, $y' = 2xe^{-x^2} - 2x\left(x^2 + C\right)e^{-x^2}$. Entonces

$$
y' + 2xy = 2xe^{-x^2} - 2x\left(x^2 + C\right)e^{-x^2} + 2x\left(x^2 + C\right)e^{-x^2} = 2xe^{-x^2},
$$

como se pide.

## Observaciones

La ecuación es lineal y **no homogénea**. El término $Ce^{-x^2}$ es la solución general de la ecuación homogénea asociada $y' + 2xy = 0$, y $x^2e^{-x^2}$ es una solución particular de la ecuación completa.

Como $P(x) = 2x$ y $f(x) = 2xe^{-x^2}$ son continuas en todo $\mathbb{R}$, la solución está definida y es válida para todo $x \in \mathbb{R}$. Además, todos los términos tienden a cero cuando $x \to \infty$, de modo que toda solución se aproxima a $y = 0$.
