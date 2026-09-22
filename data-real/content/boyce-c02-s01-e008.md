
## Enunciado

En cada uno de los problemas 1 a 8, encuentre la solución general de la ecuación diferencial dada. $$(1 + x^2)y' + 4xy = (1 + x^2)^{-2}$$

## Solución

La ecuación es **lineal de primer orden**. Su solución general es

$$
y(x) = \frac{\arctan x + C}{(1+x^2)^2},
$$

definida para todo $x \in \mathbb{R}$.

## Resolución

Se divide la ecuación entre $1+x^2$, que no se anula, para escribirla en la forma estándar $y' + P(x)y = f(x)$:

$$
y' + \frac{4x}{1+x^2}\,y = \frac{1}{(1+x^2)^3}.
$$

El **factor integrante** es

$$
\mu(x) = \exp\!\left(\int \frac{4x}{1+x^2}\,dx\right) = \exp\!\left(2\ln(1+x^2)\right) = (1+x^2)^2,
$$

donde la integral se calcula con la sustitución $u = 1+x^2$, $du = 4x\,dx$.

Al multiplicar la ecuación por $\mu(x)$,

$$
\frac{d}{dx}\!\left[(1+x^2)^2 y\right] = (1+x^2)^2 \cdot \frac{1}{(1+x^2)^3} = \frac{1}{1+x^2}.
$$

Integrando ambos miembros respecto de $x$,

$$
(1+x^2)^2 y = \int \frac{dx}{1+x^2} = \arctan x + C.
$$

Despejando $y$,

$$
y(x) = \frac{\arctan x + C}{(1+x^2)^2}.
$$

Como $1+x^2 > 0$ para todo $x$ y $\arctan x$ está definida en $\mathbb{R}$, la solución general está definida en $(-\infty, \infty)$.

## Observaciones

La ecuación es lineal y **no homogénea**, pues el miembro derecho $(1+x^2)^{-2}$ no es idénticamente nulo. Por ser lineal de primer orden, la solución general contiene una sola constante arbitraria y no presenta soluciones singulares.
