
## Enunciado

En cada uno de los problemas 9 a 16, encuentre la solución del problema con valor inicial dado. $$y' - y = 2xe^{2x}, \quad y(0) = 1$$

## Solución

La solución del problema con valor inicial es

$$
y(x) = 2e^{2x}(x-1) + 3e^x.
$$

## Resolución

La ecuación es lineal de primer orden. Se escribe en la forma estándar $y' + P(x)y = f(x)$:

$$
y' - y = 2xe^{2x}, \qquad P(x) = -1, \qquad f(x) = 2xe^{2x}.
$$

El factor integrante es

$$
\mu(x) = \exp\!\left(\int P(x)\,dx\right) = \exp\!\left(\int -1\,dx\right) = e^{-x}.
$$

Al multiplicar ambos miembros por $\mu(x)$ se obtiene

$$
e^{-x}y' - e^{-x}y = 2xe^{x},
$$

y el miembro izquierdo es la derivada del producto $e^{-x}y$:

$$
\frac{d}{dx}\!\left(e^{-x}y\right) = 2xe^{x}.
$$

Se integra respecto de $x$. La integral $\int 2xe^{x}\,dx$ se calcula por partes, con $u = 2x$ y $dv = e^x\,dx$:

$$
\int 2xe^{x}\,dx = 2xe^{x} - 2\int e^{x}\,dx = 2xe^{x} - 2e^{x} + C = 2e^{x}(x-1) + C.
$$

Por tanto,

$$
e^{-x}y = 2e^{x}(x-1) + C,
$$

y al despejar $y$,

$$
y(x) = 2e^{2x}(x-1) + Ce^{x}.
$$

La condición inicial $y(0) = 1$ determina la constante:

$$
y(0) = 2e^{0}(0-1) + Ce^{0} = -2 + C = 1 \implies C = 3.
$$

Así, la solución particular es

$$
y(x) = 2e^{2x}(x-1) + 3e^x.
$$

Comprobación: al derivar, $y'(x) = 4xe^{2x} - 2e^{2x} + 3e^x$; entonces $y' - y = 2xe^{2x}$ y $y(0) = 1$, como se pide.

## Observaciones

La ecuación es lineal de primer orden y **no homogénea**. La solución está definida para todo $x \in \mathbb{R}$, porque los coeficientes y el término no homogéneo son continuos en toda la recta.

El término $3e^x$ resuelve la ecuación homogénea asociada $y' - y = 0$; el término $2e^{2x}(x-1)$ es una solución particular. La suma reproduce la estructura $y = y_c + y_p$ propia de las ecuaciones lineales.
