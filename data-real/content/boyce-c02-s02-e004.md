
## Enunciado

En cada uno de los problemas 1 a 4, halle la solución general de la ecuación diferencial dada.

$$xy' + 2y = e^x, \quad x > 0$$

## Solución

La ecuación es **lineal de primer orden**. Su solución general, para $x > 0$, es

$$
y = \frac{(x-1)e^x + C}{x^2}.
$$

## Resolución

La ecuación dada,

$$
xy' + 2y = e^x,
$$

es lineal de primer orden. Se escribe en la forma estándar $y' + P(x)y = f(x)$. Como $x > 0$, se divide entre $x$:

$$
y' + \frac{2}{x}y = \frac{e^x}{x}.
$$

Aquí $P(x) = \dfrac{2}{x}$ y $f(x) = \dfrac{e^x}{x}$. El **factor integrante** es

$$
\mu(x) = \exp\!\left(\int \frac{2}{x}\,dx\right) = \exp(2\ln x) = x^2.
$$

Se multiplica la ecuación por $\mu(x) = x^2$:

$$
x^2 y' + 2x y = x e^x.
$$

El miembro izquierdo es la derivada del producto $x^2 y$, de modo que

$$
\frac{d}{dx}\!\left(x^2 y\right) = x e^x.
$$

Se aplica **integración por partes**, con $u = x$ y $dv = e^x\,dx$:

$$
\int x e^x\,dx = x e^x - \int e^x\,dx = (x-1)e^x + C.
$$

Por tanto,

$$
x^2 y = (x-1)e^x + C,
$$

y la solución general es

$$
y = \frac{(x-1)e^x + C}{x^2}.
$$

La ecuación es lineal y su coeficiente $P(x) = \frac{2}{x}$ es continuo en $x > 0$; el intervalo de validez de la solución general es $(0, \infty)$.

## Observaciones

El término $\dfrac{C}{x^2}$ es la solución de la ecuación homogénea asociada $xy' + 2y = 0$, mientras que $\dfrac{(x-1)e^x}{x^2}$ es una solución particular de la ecuación no homogénea.

La condición $x > 0$ es necesaria: en $x = 0$ el coeficiente $\frac{2}{x}$ no está definido y la solución general presenta una singularidad. La constante $C$ es arbitraria y se determina con una condición inicial.
