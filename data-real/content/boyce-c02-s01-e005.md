
## Enunciado

En cada uno de los problemas 1 a 8, encuentre la solución general de la ecuación diferencial dada. $$y' - y = 2e^x$$

## Solución

$$
y = (2x + C)e^x, \qquad C \in \mathbb{R}.
$$

## Resolución

La ecuación es **lineal de primer orden** y está escrita en la forma estándar $y' + P(x)y = f(x)$, con $P(x) = -1$ y $f(x) = 2e^x$.

Se calcula el factor integrante

$$
\mu(x) = \exp\!\left(\int P(x)\,dx\right) = \exp\!\left(\int -1\,dx\right) = e^{-x}.
$$

Al multiplicar ambos miembros por $\mu(x)$ se obtiene

$$
e^{-x}y' - e^{-x}y = 2,
$$

cuyo miembro izquierdo es la derivada del producto $e^{-x}y$. Por tanto,

$$
\frac{d}{dx}\!\left(e^{-x}y\right) = 2.
$$

La integración respecto a $x$ da

$$
e^{-x}y = 2x + C.
$$

Al despejar $y$ resulta la solución general

$$
y = (2x + C)e^x.
$$

## Observaciones

La ecuación es lineal y no homogénea. El término $Ce^x$ es la solución general de la ecuación homogénea asociada $y' - y = 0$, y $2xe^x$ es una solución particular de la ecuación completa.

Como los coeficientes son constantes y continuos en todo $\mathbb{R}$, la solución está definida y es válida para todo $x \in \mathbb{R}$.
