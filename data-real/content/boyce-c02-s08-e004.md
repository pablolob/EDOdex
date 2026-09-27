
## Enunciado

Determine si cada una de las ecuaciones de los problemas 1 a 12 es exacta. En caso de serlo, halle la solución.

4. $(2xy^2 + 2y) + (2x^2y + 2x)y' = 0$

## Solución

La ecuación es **exacta** y su solución general implícita es

$$
x^2y^2 + 2xy = C.
$$

## Resolución

Se escribe la ecuación en la forma $M(x,y) + N(x,y)y' = 0$ y se identifican los coeficientes:

$$
M(x,y) = 2xy^2 + 2y, \qquad N(x,y) = 2x^2y + 2x.
$$

Se aplica el **test de exactitud**, que compara las derivadas parciales cruzadas:

$$
\frac{\partial M}{\partial y} = 4xy + 2, \qquad \frac{\partial N}{\partial x} = 4xy + 2.
$$

Ambas derivadas coinciden. Como $M$ y $N$ son polinomios, son continuos con derivadas parciales continuas en todo $\mathbb{R}^2$. Por tanto, la ecuación es **exacta** y existe una función $F(x,y)$ tal que

$$
\frac{\partial F}{\partial x} = M(x,y), \qquad \frac{\partial F}{\partial y} = N(x,y).
$$

Se integra la primera igualdad respecto de $x$, manteniendo $y$ constante:

$$
F(x,y) = \int (2xy^2 + 2y)\,dx = x^2y^2 + 2xy + g(y),
$$

donde $g(y)$ es la función arbitraria de integración.

Se deriva este resultado respecto de $y$ y se iguala a $N(x,y)$:

$$
\frac{\partial F}{\partial y} = 2x^2y + 2x + g'(y) = 2x^2y + 2x.
$$

La cancelación de los términos en $x$ deja $g'(y) = 0$, de modo que $g(y)$ es una constante. La función potencial es

$$
F(x,y) = x^2y^2 + 2xy,
$$

y la solución general de la ecuación exacta se escribe de forma implícita como $F(x,y) = C$.

Se comprueba el resultado por derivación implícita. Al diferenciar $x^2y^2 + 2xy = C$ se obtiene

$$
(2xy^2 + 2y)\,dx + (2x^2y + 2x)\,dy = 0,
$$

que reproduce la ecuación original.

## Observaciones

La familia implícita puede reescribirse como $(xy + 1)^2 = C_1$, con $C_1 \ge 0$. Esta forma muestra que $C \ge -1$ y que el caso $C = -1$ corresponde a $xy = -1$.

Al ser $F$ un polinomio, la solución no pierde ni añade casos: no hay soluciones singulares ni espurias, y la familia está definida para todo $(x,y) \in \mathbb{R}^2$.
