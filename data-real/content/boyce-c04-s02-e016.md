
## Enunciado

En cada uno de los problemas 11 a 22, determine la solución de la ecuación diferencial dada.

16. $y^{\mathrm{iv}} - 5y'' + 4y = 0$

## Solución

$$
y(x) = C_1 e^{x} + C_2 e^{-x} + C_3 e^{2x} + C_4 e^{-2x}.
$$

## Resolución

La ecuación es **lineal**, **homogénea**, de **cuarto orden** y con **coeficientes constantes**. Al proponer $y = e^{rx}$ se obtiene la ecuación característica

$$
r^4 - 5r^2 + 4 = 0.
$$

El polinomio solo contiene potencias pares de $r$, por lo que es una ecuación bicuadrática. Se factoriza directamente:

$$
r^4 - 5r^2 + 4 = (r^2 - 1)(r^2 - 4) = (r - 1)(r + 1)(r - 2)(r + 2).
$$

Las raíces son cuatro números reales distintos: $r = 1$, $r = -1$, $r = 2$ y $r = -2$, todas simples.

Cada raíz real simple aporta la solución $e^{rx}$, de modo que un conjunto fundamental de soluciones es $\{e^{x}, e^{-x}, e^{2x}, e^{-2x}\}$. La solución general es la combinación lineal

$$
y(x) = C_1 e^{x} + C_2 e^{-x} + C_3 e^{2x} + C_4 e^{-2x}.
$$

Comprobación: al sustituir $y = e^{rx}$ en la ecuación resulta $r^4 - 5r^2 + 4 = 0$ para cada una de las cuatro raíces; en particular, para $r = 2$ se tiene $16 - 20 + 4 = 0$, y para $r = 1$ se tiene $1 - 5 + 4 = 0$. Las cuatro funciones satisfacen la ecuación.

## Observaciones

La ecuación tiene coeficientes constantes y carece de puntos singulares, así que la solución general está definida para todo $x\in\mathbb{R}$.

El número de constantes arbitrarias coincide con el orden de la ecuación. Como las cuatro raíces son reales y distintas, no aparecen factores $x$ ni términos oscilatorios.
