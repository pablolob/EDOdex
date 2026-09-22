
## Enunciado

En cada uno de los problemas 9 a 16, encuentre la solución del problema con valor inicial dado. $$y' + 2y = xe^{-2x}, \quad y(1) = 0$$

## Solución

La solución del problema con valor inicial es

$$
y(x) = \frac{x^2 - 1}{2}\,e^{-2x},
$$

definida para todo $x \in \mathbb{R}$.

## Resolución

La ecuación es **lineal de primer orden** y ya está en la forma estándar $y' + P(x)y = f(x)$:

$$
y' + 2y = xe^{-2x}, \qquad P(x) = 2, \qquad f(x) = xe^{-2x}.
$$

El **factor integrante** es

$$
\mu(x) = \exp\!\left(\int P(x)\,dx\right) = \exp\!\left(\int 2\,dx\right) = e^{2x}.
$$

Al multiplicar ambos miembros por $\mu(x)$ se obtiene

$$
e^{2x}y' + 2e^{2x}y = x,
$$

y el miembro izquierdo es la derivada del producto $e^{2x}y$:

$$
\frac{d}{dx}\!\left(e^{2x}y\right) = e^{2x}\cdot x e^{-2x} = x.
$$

Integrando ambos miembros respecto de $x$,

$$
e^{2x}y = \int x\,dx = \frac{x^2}{2} + C.
$$

Al despejar $y$,

$$
y(x) = e^{-2x}\!\left(\frac{x^2}{2} + C\right).
$$

La condición inicial $y(1) = 0$ determina la constante:

$$
y(1) = e^{-2}\!\left(\frac{1}{2} + C\right) = 0 \implies \frac{1}{2} + C = 0 \implies C = -\frac{1}{2}.
$$

Así, la solución particular es

$$
y(x) = e^{-2x}\!\left(\frac{x^2}{2} - \frac{1}{2}\right) = \frac{x^2 - 1}{2}\,e^{-2x}.
$$

Comprobación: al derivar, $y'(x) = e^{-2x}\!\left(-x^2 + x + 1\right)$; entonces $y' + 2y = xe^{-2x}$ y $y(1) = 0$, como se pide.

## Observaciones

La ecuación es lineal de primer orden y **no homogénea**. La solución está definida para todo $x \in \mathbb{R}$, porque $P(x) = 2$ y $f(x) = xe^{-2x}$ son continuas en toda la recta.

El producto $\mu(x)f(x) = e^{2x}\cdot x e^{-2x} = x$ no requiere **integración por partes**: la exponencial del término no homogéneo cancela exactamente el factor integrante. La solución se anula en $x = 1$ y en $x = -1$.
