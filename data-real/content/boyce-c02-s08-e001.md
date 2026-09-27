
## Enunciado

Determine si cada una de las ecuaciones de los problemas 1 a 12 es exacta. En caso de serlo, halle la solución.

1. $(2x + 3) + (2y - 2)y' = 0$

## Solución

La ecuación es **exacta** y su solución general implícita es

$$
x^2 + 3x + y^2 - 2y = C.
$$

## Resolución

Se escribe la ecuación en la forma $M(x,y)\,dx + N(x,y)\,dy = 0$. Con $y' = dy/dx$,

$$
(2x + 3)\,dx + (2y - 2)\,dy = 0,
$$

de modo que

$$
M(x,y) = 2x + 3, \qquad N(x,y) = 2y - 2.
$$

Se aplica el **test de exactitud**, que compara las derivadas parciales cruzadas:

$$
\frac{\partial M}{\partial y} = 0, \qquad \frac{\partial N}{\partial x} = 0.
$$

Ambas derivadas coinciden. Por tanto, la ecuación es **exacta** y existe una función $F(x,y)$ tal que

$$
\frac{\partial F}{\partial x} = M(x,y) = 2x + 3, \qquad \frac{\partial F}{\partial y} = N(x,y) = 2y - 2.
$$

Se integra la primera igualdad respecto de $x$, manteniendo $y$ constante:

$$
F(x,y) = \int (2x + 3)\,dx = x^2 + 3x + g(y),
$$

donde $g(y)$ es la función arbitraria de integración.

Se deriva este resultado respecto de $y$ y se iguala a $N(x,y)$:

$$
\frac{\partial F}{\partial y} = g'(y) = 2y - 2.
$$

Al integrar,

$$
g(y) = y^2 - 2y.
$$

La función potencial es

$$
F(x,y) = x^2 + 3x + y^2 - 2y,
$$

y la solución general de la ecuación exacta se escribe de forma implícita como $F(x,y) = C$.

## Observaciones

La función $F$ es un polinomio definido para todo $(x,y) \in \mathbb{R}^2$. Al completar cuadrados, la familia implícita se expresa como

$$
\left(x + \frac{3}{2}\right)^2 + (y - 1)^2 = C + \frac{13}{4},
$$

que representa circunferencias de centro $\left(-\tfrac{3}{2}, 1\right)$ para $C > -\tfrac{13}{4}$. No se pierde ningún caso singular: la integración conserva la función arbitraria $g(y)$ completa.

### Método alternativo: separación de variables

Cada término depende de una sola variable, de modo que la ecuación también es separable:

$$
(2x + 3)\,dx = -(2y - 2)\,dy.
$$

La integración directa de ambos miembros conduce a la misma familia implícita.
