
## Enunciado

En cada uno de los problemas 9 a 16, encuentre la solución del problema con valor inicial dado. $$x^3 y' + 4x^2 y = e^{-x}, \quad y(-1) = 0$$

## Solución

$$
y(x) = -\frac{(x+1)e^{-x}}{x^4}, \qquad x < 0.
$$

## Resolución

La ecuación es **lineal de primer orden**. Se escribe en forma estándar dividiendo entre $x^3$ (para $x \ne 0$):

$$
y' + \frac{4}{x}\,y = \frac{e^{-x}}{x^3}.
$$

Se aplica el **método del factor integrante**. Con $P(x) = \dfrac{4}{x}$,

$$
\mu(x) = \exp\!\left(\int \frac{4}{x}\,dx\right) = \exp(4\ln|x|) = x^4.
$$

Al multiplicar la forma estándar por $\mu(x) = x^4$, el miembro izquierdo es la derivada de un producto:

$$
x^4 y' + 4x^3 y = x e^{-x},
\qquad \text{es decir,} \qquad
\frac{d}{dx}\!\left(x^4 y\right) = x e^{-x}.
$$

Se integra el miembro derecho por partes, con $u = x$ y $dv = e^{-x}\,dx$:

$$
\int x e^{-x}\,dx = -x e^{-x} + \int e^{-x}\,dx = -x e^{-x} - e^{-x} + C = -e^{-x}(x+1) + C.
$$

Por tanto,

$$
x^4 y = -e^{-x}(x+1) + C,
\qquad\text{de donde}\qquad
y(x) = \frac{-e^{-x}(x+1) + C}{x^4}.
$$

Se impone la condición inicial $y(-1) = 0$. En $x = -1$ se tiene $x^4 = 1$ y $e^{-x} = e$, así que

$$
0 = \frac{-e(0) + C}{1} = C.
$$

La constante es $C = 0$ y la solución del problema con valor inicial es

$$
y(x) = -\frac{(x+1)e^{-x}}{x^4}.
$$

## Observaciones

La solución solo está definida donde los coeficientes de la forma estándar son continuos. El único punto de discontinuidad es $x = 0$; como la condición inicial se da en $x = -1$, el intervalo de validez es $(-\infty, 0)$.

La forma $x^4 y = -e^{-x}(x+1)$ es una manera compacta de escribir la solución sin dividir entre $x^4$.
