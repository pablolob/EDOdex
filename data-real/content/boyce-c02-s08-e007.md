
## Enunciado

Determine si cada una de las ecuaciones de los problemas 1 a 12 es exacta. En caso de serlo, halle la solución.

7. $(e^x \sin y - 2y \sin x) \,dx + (e^x \cos y + 2 \cos x) \,dy = 0$

## Solución

La ecuación es **exacta** y su solución general implícita es

$$
e^x \sin y + 2y \cos x = C.
$$

## Resolución

Se identifican los coeficientes de la forma $M(x,y)\,dx + N(x,y)\,dy = 0$:

$$
M(x,y) = e^x \sin y - 2y \sin x, \qquad N(x,y) = e^x \cos y + 2 \cos x.
$$

Se aplica el **test de exactitud**, que compara las derivadas parciales cruzadas:

$$
\frac{\partial M}{\partial y} = e^x \cos y - 2 \sin x, \qquad
\frac{\partial N}{\partial x} = e^x \cos y - 2 \sin x.
$$

Ambas derivadas coinciden. Como $M$ y $N$ contienen productos de funciones elementales, son continuas con derivadas parciales continuas en todo $\mathbb{R}^2$. Por tanto, la ecuación es **exacta** y existe una función $F(x,y)$ tal que

$$
\frac{\partial F}{\partial x} = M(x,y), \qquad \frac{\partial F}{\partial y} = N(x,y).
$$

Se integra la primera igualdad respecto de $x$, manteniendo $y$ constante:

$$
F(x,y) = \int \left(e^x \sin y - 2y \sin x\right) dx = e^x \sin y + 2y \cos x + g(y),
$$

donde $g(y)$ es la función arbitraria de integración.

Se deriva este resultado respecto de $y$ y se iguala a $N(x,y)$:

$$
\frac{\partial F}{\partial y} = e^x \cos y + 2 \cos x + g'(y) = e^x \cos y + 2 \cos x.
$$

La cancelación de los términos en $x$ deja $g'(y) = 0$, de modo que $g(y)$ es una constante. La función potencial es

$$
F(x,y) = e^x \sin y + 2y \cos x,
$$

y la solución general de la ecuación exacta se escribe de forma implícita como $F(x,y) = C$.

Se comprueba el resultado por diferenciación. Al diferenciar $e^x \sin y + 2y \cos x = C$ se obtiene

$$
\left(e^x \sin y - 2y \sin x\right)dx + \left(e^x \cos y + 2 \cos x\right)dy = 0,
$$

que reproduce la ecuación original.

## Observaciones

Al ser $F$ una combinación de productos de funciones elementales, es de clase $C^2$ en todo $\mathbb{R}^2$. No hay soluciones singulares ni pérdidas: la familia implícita recoge todas las curvas solución. Sin condición inicial no se determina un intervalo de validez.
