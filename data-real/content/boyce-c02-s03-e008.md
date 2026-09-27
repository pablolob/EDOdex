
## Enunciado

En cada uno de los problemas 1 a 8, resuelva la ecuación diferencial dada.

8. $\frac{dy}{dx} = \frac{x^2}{1 + y^2}$

## Solución

La ecuación es **de primer orden** y **separable**. Su solución general, en forma implícita, es

$$
3y + y^3 - x^3 = C.
$$

Está definida para todo $x \in \mathbb{R}$.

## Resolución

La ecuación $\dfrac{dy}{dx} = \dfrac{x^2}{1 + y^2}$ admite **separación de variables**. Multiplicando ambos miembros por $1 + y^2$ y escribiendo la derivada como cociente de diferenciales,

$$
(1 + y^2)\,dy = x^2\,dx.
$$

El factor $1 + y^2$ no se anula para ningún valor real de $y$, de modo que la división no descarta ninguna solución constante.

Integrando ambos miembros,

$$
y + \frac{y^3}{3} = \frac{x^3}{3} + C.
$$

Multiplicando por $3$ y renombrando la constante arbitraria, la solución general queda en forma implícita:

$$
3y + y^3 - x^3 = C.
$$

La solución se comprueba por derivación implícita. Derivando $3y + y^3 - x^3 = C$ respecto de $x$,

$$
\left(3 + 3y^2\right)y' - 3x^2 = 0 \quad\Longrightarrow\quad y' = \frac{x^2}{1 + y^2},
$$

que es la ecuación dada.

La función $f(y) = y + \dfrac{y^3}{3}$ es estrictamente creciente, pues $f'(y) = 1 + y^2 > 0$, y su imagen es todo $\mathbb{R}$. Por tanto, para cada valor de $C$ y cada $x$ existe un único $y$ que satisface la relación implícita, y la solución está definida para todo $x \in \mathbb{R}$.

## Observaciones

La solución queda en forma implícita. Despejar $y$ exige resolver una ecuación cúbica, por lo que la forma implícita es la representación habitual en este caso. No hay soluciones singulares ni perdidas: el único factor que podría anularse, $1 + y^2$, no tiene raíces reales.
