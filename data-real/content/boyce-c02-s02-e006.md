
## Enunciado

En cada uno de los problemas del 5 al 12, determine la solución del problema con valor inicial dado. Escriba el intervalo en que la solución es válida.

$$xy' + y = e^x, \quad y(1) = 1$$

## Solución

La solución del problema con valor inicial es

$$
y(x) = \frac{e^x + 1 - e}{x},
$$

válida en el intervalo $(0, \infty)$.

## Resolución

La ecuación es **lineal de primer orden**. Como el punto inicial es $x = 1$, se trabaja en $x > 0$, donde es lícito dividir entre $x$. La forma estándar $y' + P(x)y = f(x)$ es

$$
y' + \frac{1}{x}y = \frac{e^x}{x},
$$

con $P(x) = \dfrac{1}{x}$ y $f(x) = \dfrac{e^x}{x}$. El **factor integrante** es

$$
\mu(x) = \exp\!\left(\int \frac{1}{x}\,dx\right) = \exp(\ln x) = x,
$$

pues $x > 0$. Al multiplicar la ecuación por $\mu(x) = x$, el miembro izquierdo es la derivada del producto $xy$:

$$
\frac{d}{dx}(xy) = e^x.
$$

Integrando ambos miembros respecto de $x$,

$$
xy = e^x + C.
$$

Al despejar $y$ resulta la solución general

$$
y(x) = \frac{e^x + C}{x}.
$$

La condición inicial $y(1) = 1$ determina la constante:

$$
y(1) = \frac{e + C}{1} = 1 \implies C = 1 - e.
$$

Por tanto,

$$
y(x) = \frac{e^x + 1 - e}{x}.
$$

Comprobación: al derivar, $y'(x) = \dfrac{x e^x - \left(e^x + 1 - e\right)}{x^2}$; entonces

$$
xy' + y = \frac{x e^x - \left(e^x + 1 - e\right)}{x} + \frac{e^x + 1 - e}{x} = e^x,
$$

y $y(1) = 1$, como se pide.

La solución general es válida en $(0, \infty)$ y en $(-\infty, 0)$, porque $P(x)$ y $f(x)$ son continuas en cada uno de esos intervalos y el factor integrante no se anula en ellos. El intervalo que contiene al punto inicial $x = 1$ es $(0, \infty)$; ese es el intervalo de validez.

## Observaciones

La ecuación puede escribirse directamente como $(xy)' = e^x$; el factor integrante $\mu(x) = x$ revela esa estructura. El intervalo de validez no lo limita la forma de la solución, sino el punto singular $x = 0$ de los coeficientes. La solución no se extiende a través de $x = 0$.
