
## Enunciado

Si el wronskiano $W$ de $f$ y $g$ es $3e^{4x}$ y si $f(x) = e^{2x}$, halle $g(x)$.

## Solución

$$
g(x) = (3x + C)e^{2x}.
$$

## Resolución

El **wronskiano** de dos funciones diferenciables $f$ y $g$ es

$$
W(f,g) = f g' - f' g.
$$

Como $f(x) = e^{2x}$, su derivada es $f'(x) = 2e^{2x}$. Al imponer $W(f,g) = 3e^{4x}$,

$$
e^{2x} g' - 2e^{2x} g = 3e^{4x}.
$$

Al dividir entre $e^{2x} > 0$ se obtiene la ecuación **lineal de primer orden**

$$
g' - 2g = 3e^{2x}.
$$

Su factor integrante es

$$
\mu(x) = \exp\!\left(\int (-2)\,dx\right) = e^{-2x}.
$$

Al multiplicar la ecuación por $\mu(x)$, el miembro izquierdo es la derivada de un producto:

$$
\frac{d}{dx}\!\left(e^{-2x} g\right) = 3 e^{-2x} e^{2x} = 3.
$$

Integrando respecto de $x$,

$$
e^{-2x} g = 3x + C,
$$

de donde

$$
g(x) = (3x + C)e^{2x}.
$$

Las funciones $f$ y $g$ están definidas y son derivables en todo $\mathbb{R}$, de modo que la solución es válida para todo $x \in \mathbb{R}$.

## Observaciones

La constante $C$ es arbitraria. La condición sobre el wronskiano determina $g$ salvo un múltiplo de $f$: en efecto, $W(f, g + Cf) = W(f,g)$, porque al añadir a la segunda columna del determinante un múltiplo de la primera este no cambia. Así, todas las funciones $(3x + C)e^{2x}$ comparten el wronskiano $3e^{4x}$ con $f(x) = e^{2x}$.
