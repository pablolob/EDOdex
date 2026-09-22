
## Enunciado

En cada uno de los problemas del 5 al 12, determine la solución del problema con valor inicial dado. Escriba el intervalo en que la solución es válida.

$$x(2 + x)y' + 2(1 + x)y = 1 + 3x^2, \quad y(-1) = 1$$

## Solución

La ecuación es **lineal de primer orden**. La solución del problema con valor inicial es

$$
y(x) = \frac{x^3 + x + 1}{x(x+2)}, \qquad -2 < x < 0.
$$

## Resolución

La ecuación es **lineal de primer orden**. El miembro izquierdo es la derivada del producto $x(2+x)y$. Por la **regla del producto**,

$$
\frac{d}{dx}\!\left[x(2+x)y\right] = (2+2x)y + x(2+x)y' = 2(1+x)y + x(2+x)y'.
$$

La ecuación se reescribe entonces como

$$
\frac{d}{dx}\!\left[x(2+x)y\right] = 1 + 3x^2.
$$

Se integran ambos miembros respecto de $x$:

$$
x(2+x)y = x^3 + x + C.
$$

Se impone la condición inicial $y(-1) = 1$. En $x = -1$ se tiene $x(2+x) = (-1)(1) = -1$, así que

$$
-1 = (-1)^3 + (-1) + C = -2 + C,
$$

de donde $C = 1$. Al despejar $y$, la solución del problema con valor inicial es

$$
y(x) = \frac{x^3 + x + 1}{x(x+2)}.
$$

La forma estándar de la ecuación es

$$
y' + \frac{2(1+x)}{x(2+x)}\,y = \frac{1+3x^2}{x(2+x)}.
$$

Sus coeficientes solo son discontinuos en $x = 0$ y en $x = -2$. Como la condición inicial se da en $x = -1$, el intervalo de validez es el mayor intervalo abierto que contiene a $-1$ sin cruzar esos puntos:

$$
-2 < x < 0.
$$

## Observaciones

El intervalo de validez no es todo $\mathbb{R}\setminus\{-2,0\}$. La solución no se extiende a través de las singularidades $x = -2$ y $x = 0$, donde los coeficientes de la forma estándar dejan de ser continuos.

### Método alternativo: factor integrante

La misma solución se obtiene por el **método del factor integrante**. Con $P(x) = \dfrac{2(1+x)}{x(2+x)}$, las **fracciones parciales**

$$
P(x) = \frac{1}{x} + \frac{1}{x+2}
$$

dan el factor integrante

$$
\mu(x) = \exp\!\left(\int P(x)\,dx\right) = x(x+2).
$$

Al multiplicar la forma estándar por $\mu(x)$, el miembro izquierdo vuelve a ser $\dfrac{d}{dx}\!\left[x(x+2)y\right]$ y se recupera la ecuación integrada anterior.
