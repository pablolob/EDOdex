
## Enunciado

En cada uno de los problemas 1 a 8, encuentre la solución general de la ecuación diferencial dada. $$y' + y = xe^{-x} + 1$$

## Solución

$$
y = 1 + \left(\frac{x^2}{2} + C\right)e^{-x}, \qquad C \in \mathbb{R}.
$$

## Resolución

La ecuación es **lineal de primer orden** y está escrita en la forma estándar $y' + P(x)y = f(x)$, con $P(x) = 1$ y $f(x) = xe^{-x} + 1$.

Se calcula el factor integrante

$$
\mu(x) = \exp\!\left(\int P(x)\,dx\right) = \exp\!\left(\int 1\,dx\right) = e^{x}.
$$

Al multiplicar ambos miembros por $\mu(x)$ se obtiene

$$
e^{x}y' + e^{x}y = x + e^{x},
$$

cuyo miembro izquierdo es la derivada del producto $e^{x}y$. Por tanto,

$$
\frac{d}{dx}\!\left(e^{x}y\right) = x + e^{x}.
$$

La integración respecto a $x$ da

$$
e^{x}y = \frac{x^2}{2} + e^{x} + C.
$$

Al despejar $y$ resulta la solución general

$$
y = 1 + \left(\frac{x^2}{2} + C\right)e^{-x}.
$$

## Observaciones

La ecuación es lineal y no homogénea. El término $Ce^{-x}$ es la solución general de la ecuación homogénea asociada $y' + y = 0$, y $1 + \dfrac{x^2}{2}e^{-x}$ es una solución particular de la ecuación completa.

Como los coeficientes son constantes y continuos en todo $\mathbb{R}$, la solución está definida y es válida para todo $x \in \mathbb{R}$. El término exponencial tiende a cero cuando $x \to \infty$, de modo que $y \to 1$.
