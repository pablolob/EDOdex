
## Enunciado

Determine si cada una de las ecuaciones de los problemas 1 a 12 es exacta. En caso de serlo, halle la solución.

3. $(3x^2 - 2xy + 2) \,dx + (6y^2 - x^2 + 3) \,dy = 0$

## Solución

La ecuación es **exacta** y su solución general implícita es

$$
x^3 - x^2 y + 2x + 2y^3 + 3y = C.
$$

## Resolución

Se identifican los coeficientes de la forma $M(x,y)\,dx + N(x,y)\,dy = 0$:

$$
M(x,y) = 3x^2 - 2xy + 2, \qquad N(x,y) = 6y^2 - x^2 + 3.
$$

Se aplica el **test de exactitud**, que compara las derivadas parciales cruzadas:

$$
\frac{\partial M}{\partial y} = -2x, \qquad \frac{\partial N}{\partial x} = -2x.
$$

Ambas derivadas coinciden. Por tanto, la ecuación es **exacta** y existe una función $F(x,y)$ tal que

$$
\frac{\partial F}{\partial x} = M(x,y) = 3x^2 - 2xy + 2, \qquad \frac{\partial F}{\partial y} = N(x,y) = 6y^2 - x^2 + 3.
$$

Se integra la primera igualdad respecto de $x$, manteniendo $y$ constante:

$$
F(x,y) = \int (3x^2 - 2xy + 2)\,dx = x^3 - x^2 y + 2x + g(y),
$$

donde $g(y)$ es la función arbitraria de integración.

Se deriva este resultado respecto de $y$ y se iguala a $N(x,y)$:

$$
\frac{\partial F}{\partial y} = -x^2 + g'(y) = 6y^2 - x^2 + 3.
$$

Los términos $-x^2$ se cancelan, de modo que $g'(y) = 6y^2 + 3$. Al integrar,

$$
g(y) = 2y^3 + 3y.
$$

La función potencial es

$$
F(x,y) = x^3 - x^2 y + 2x + 2y^3 + 3y,
$$

y la solución general de la ecuación exacta se escribe de forma implícita como $F(x,y) = C$.

## Observaciones

La función potencial es un polinomio, definida para todo $(x,y) \in \mathbb{R}^2$. El procedimiento no descarta ninguna solución, porque el test de exactitud es una equivalencia y la familia implícita contiene todas las curvas solución. La ecuación no es separable, ya que $M$ depende de $x$ y de $y$ a la vez.
