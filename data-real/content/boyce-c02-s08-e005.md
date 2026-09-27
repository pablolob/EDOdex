
## Enunciado

Determine si cada una de las ecuaciones de los problemas 1 a 12 es exacta. En caso de serlo, halle la solución.

5. $\frac{dy}{dx} = \frac{ax + by}{bx + cy}$

## Solución

La ecuación **no es exacta** para $b \ne 0$. Es exacta únicamente cuando $b = 0$ y, en ese caso, su solución general implícita es

$$
ax^2 - cy^2 = C.
$$

## Resolución

Se escribe la ecuación en la forma $M(x,y)\,dx + N(x,y)\,dy = 0$. Con $y' = dy/dx$,

$$
\frac{dy}{dx} = \frac{ax + by}{bx + cy}
\quad\Longrightarrow\quad
(ax + by)\,dx - (bx + cy)\,dy = 0,
$$

de modo que

$$
M(x,y) = ax + by, \qquad N(x,y) = -(bx + cy).
$$

Se aplica el **test de exactitud**, que compara las derivadas parciales cruzadas:

$$
\frac{\partial M}{\partial y} = b, \qquad \frac{\partial N}{\partial x} = -b.
$$

Las dos derivadas coinciden solo cuando $b = -b$, es decir, $b = 0$. Por tanto, para $b \ne 0$ la ecuación no es exacta.

Caso $b = 0$. La ecuación se reduce a

$$
(ax)\,dx - (cy)\,dy = 0,
\qquad\text{con}\qquad
M = ax, \quad N = -cy.
$$

Ahora $\dfrac{\partial M}{\partial y} = 0 = \dfrac{\partial N}{\partial x}$, así que la ecuación es **exacta**. Existe entonces una función $F(x,y)$ tal que

$$
\frac{\partial F}{\partial x} = ax, \qquad \frac{\partial F}{\partial y} = -cy.
$$

Se integra la primera igualdad respecto de $x$, manteniendo $y$ constante:

$$
F(x,y) = \int ax\,dx = \frac{a}{2}x^2 + g(y).
$$

Se deriva respecto de $y$ y se iguala a $N$:

$$
\frac{\partial F}{\partial y} = g'(y) = -cy
\quad\Longrightarrow\quad
g(y) = -\frac{c}{2}y^2.
$$

La función potencial es

$$
F(x,y) = \frac{a}{2}x^2 - \frac{c}{2}y^2,
$$

y la solución general de la ecuación exacta se escribe de forma implícita como $F(x,y) = C$. Multiplicando por $2$ y renombrando la constante arbitraria,

$$
ax^2 - cy^2 = C.
$$

## Observaciones

La determinación de exactitud es condicional: los parámetros $a$, $b$ y $c$ son constantes arbitrarias y el signo relativo de las derivadas cruzadas depende de $b$. El valor $b = 0$ es el único que hace coincidir $\partial M/\partial y$ con $\partial N/\partial x$.

En el caso exacto se supone $c \ne 0$; si además $c = 0$, la ecuación original deja de estar definida. La comprobación por derivación implícita confirma la solución: de $ax^2 - cy^2 = C$ se obtiene $2ax - 2cy\,y' = 0$, es decir, $y' = \dfrac{ax}{cy}$, que es la ecuación para $b = 0$.

Cuando $b \ne 0$ el enunciado no pide un factor integrante, de modo que la respuesta se limita a la clasificación. La función potencial es un polinomio definido en todo $\mathbb{R}^2$; al no haber condición inicial, la familia implícita no lleva asociado un intervalo de validez.
