
## Enunciado

En cada uno de los problemas 9 a 16, encuentre la solución del problema con valor inicial dado. $$xy' + 2y = x^2 - x + 1, \quad y(1) = \frac{1}{2}, \quad x > 0$$

## Solución

La solución del problema con valor inicial es

$$
y(x) = \frac{x^2}{4} - \frac{x}{3} + \frac{1}{2} + \frac{1}{12x^2},
$$

definida en $x > 0$.

## Resolución

La ecuación es **lineal de primer orden**. Se divide entre $x$, que no se anula porque $x > 0$, para escribirla en la forma estándar $y' + P(x)y = f(x)$:

$$
y' + \frac{2}{x}\,y = x - 1 + \frac{1}{x}, \qquad P(x) = \frac{2}{x}, \qquad f(x) = x - 1 + \frac{1}{x}.
$$

El **factor integrante** es

$$
\mu(x) = \exp\!\left(\int P(x)\,dx\right) = \exp\!\left(\int \frac{2}{x}\,dx\right) = \exp(2\ln x) = x^2,
$$

donde la constante de integración se elige nula y $\ln x$ es real porque $x > 0$.

Al multiplicar ambos miembros por $\mu(x)$ se obtiene

$$
x^2 y' + 2x y = x^3 - x^2 + x,
$$

y el miembro izquierdo es la derivada del producto $x^2 y$:

$$
\frac{d}{dx}\!\left(x^2 y\right) = x^3 - x^2 + x.
$$

Integrando ambos miembros respecto de $x$,

$$
x^2 y = \frac{x^4}{4} - \frac{x^3}{3} + \frac{x^2}{2} + C.
$$

Al despejar $y$,

$$
y(x) = \frac{x^2}{4} - \frac{x}{3} + \frac{1}{2} + \frac{C}{x^2}.
$$

La condición inicial $y(1) = \dfrac{1}{2}$ determina la constante:

$$
y(1) = \frac{1}{4} - \frac{1}{3} + \frac{1}{2} + C = \frac{5}{12} + C = \frac{1}{2} \implies C = \frac{1}{12}.
$$

Así, la solución particular es

$$
y(x) = \frac{x^2}{4} - \frac{x}{3} + \frac{1}{2} + \frac{1}{12x^2}.
$$

Comprobación: al derivar, $y'(x) = \dfrac{x}{2} - \dfrac{1}{3} - \dfrac{1}{6x^3}$; entonces

$$
xy' + 2y = \left(\frac{x^2}{2} - \frac{x}{3} - \frac{1}{6x^2}\right) + \left(\frac{x^2}{2} - \frac{2x}{3} + 1 + \frac{1}{6x^2}\right) = x^2 - x + 1,
$$

y además $y(1) = \dfrac{1}{4} - \dfrac{1}{3} + \dfrac{1}{2} + \dfrac{1}{12} = \dfrac{1}{2}$, como se pide.

## Observaciones

La ecuación es lineal de primer orden y **no homogénea**. Los coeficientes $P(x) = 2/x$ y $f(x) = x - 1 + 1/x$ son continuos en $(0, \infty)$, y la condición inicial se impone en $x = 1$; por tanto, el intervalo máximo de validez es $(0, \infty)$.

El factor integrante $x^2$ no se anula en $(0, \infty)$ y reduce el miembro izquierdo a una derivada exacta. Por ser lineal, la solución general contiene una sola constante arbitraria y no presenta soluciones singulares.
