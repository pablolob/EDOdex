
## Enunciado

En los problemas 15 y 16, encuentre el valor de $b$ para el que la ecuación dada es exacta y, después, resuelva esa ecuación al utilizar ese valor de $b$.

15. $(xy^2 + bx^2y) \,dx + (x + y)x^2 \,dy = 0$

## Solución

El valor que hace **exacta** la ecuación es $b = 3$. La solución general implícita es

$$
x^2 y^2 + 2x^3 y = C.
$$

## Resolución

Se escribe la ecuación en la forma $M(x,y)\,dx + N(x,y)\,dy = 0$ con

$$
M(x,y) = xy^2 + bx^2y, \qquad N(x,y) = (x + y)x^2 = x^3 + x^2y.
$$

Para que la ecuación sea **exacta**, las derivadas parciales cruzadas deben coincidir. Se calculan:

$$
\frac{\partial M}{\partial y} = 2xy + bx^2, \qquad
\frac{\partial N}{\partial x} = 3x^2 + 2xy.
$$

La igualdad $\dfrac{\partial M}{\partial y} = \dfrac{\partial N}{\partial x}$ exige

$$
2xy + bx^2 = 3x^2 + 2xy
\quad\Longrightarrow\quad
bx^2 = 3x^2.
$$

Para $x \ne 0$ se obtiene $b = 3$. Este es el único valor que hace exacta la ecuación.

Con $b = 3$ el miembro izquierdo es $M(x,y) = xy^2 + 3x^2y$ y existe una función $F(x,y)$ tal que

$$
\frac{\partial F}{\partial x} = xy^2 + 3x^2y, \qquad
\frac{\partial F}{\partial y} = x^3 + x^2y.
$$

Se integra la primera igualdad respecto de $x$, manteniendo $y$ constante:

$$
F(x,y) = \int \left(xy^2 + 3x^2y\right)\,dx = \frac{1}{2}x^2y^2 + x^3y + g(y),
$$

donde $g(y)$ es la función arbitraria de integración. Se deriva respecto de $y$ y se iguala a $N(x,y)$:

$$
\frac{\partial F}{\partial y} = x^2y + x^3 + g'(y) = x^3 + x^2y.
$$

Por tanto, $g'(y) = 0$ y $g(y)$ es constante; se toma $g(y) = 0$. La función potencial es

$$
F(x,y) = \frac{1}{2}x^2y^2 + x^3y.
$$

La solución general de la ecuación exacta se escribe de forma implícita como $F(x,y) = C$. Multiplicando por $2$ y renombrando la constante arbitraria,

$$
x^2 y^2 + 2x^3 y = C.
$$

## Observaciones

La determinación de $b$ es condicional: la igualdad de las derivadas cruzadas se plantea para $x \ne 0$, que es el dominio donde la ecuación está definida de manera no degenerada. En $x = 0$ ambos coeficientes se anulan y la expresión no representa una curva solución.

La función potencial es un polinomio definido en todo $\mathbb{R}^2$. Al no haber condición inicial, la familia implícita no lleva asociado un intervalo de validez. La comprobación por derivación implícita confirma la solución: de $x^2y^2 + 2x^3y = C$ se obtiene $\left(2xy^2 + 6x^2y\right)dx + \left(2x^2y + 2x^3\right)dy = 0$, que dividida entre $2$ es la ecuación original con $b = 3$.

El enunciado no pide resolver la ecuación para $b \ne 3$; en esos casos la ecuación no es exacta y requeriría un factor integrante, que aquí no se busca.
