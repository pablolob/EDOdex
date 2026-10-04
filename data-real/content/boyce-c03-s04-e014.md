
## Enunciado

En cada uno de los problemas 7 a 16, halle la solución general de la ecuación diferencial dada.

14. $9y'' + 9y' - 4y = 0$

## Solución

$$
y(x) = C_1 e^{x/3} + C_2 e^{-4x/3},
$$

donde $C_1$ y $C_2$ son constantes arbitrarias.

## Resolución

La ecuación es **lineal**, **homogénea**, de **segundo orden** y con **coeficientes constantes**. Se resuelve mediante el método de la **ecuación característica**. Se ensaya la solución $y = e^{rx}$; al sustituir, el factor $e^{rx}$ no se anula y la ecuación se reduce a

$$
9r^2 + 9r - 4 = 0.
$$

El polinomio se factoriza como

$$
9r^2 + 9r - 4 = (3r - 1)(3r + 4),
$$

de modo que las raíces son

$$
r_1 = \frac{1}{3}, \qquad r_2 = -\frac{4}{3}.
$$

Las raíces son reales y distintas. Por tanto, las funciones $e^{x/3}$ y $e^{-4x/3}$ forman un conjunto fundamental de soluciones y la solución general es

$$
y(x) = C_1 e^{x/3} + C_2 e^{-4x/3}.
$$

## Observaciones

Las dos soluciones $y_1 = e^{x/3}$ y $y_2 = e^{-4x/3}$ son linealmente independientes, como confirma su wronskiano

$$
W(y_1, y_2) = e^{x/3}\left(-\frac{4}{3}e^{-4x/3}\right) - \left(\frac{1}{3}e^{x/3}\right)e^{-4x/3} = -\frac{5}{3}e^{-x} \ne 0.
$$

La solución general está definida para todo $x \in \mathbb{R}$, porque los coeficientes son constantes y las exponenciales son analíticas en toda la recta. Como $x/3 > -4x/3$ para $x > 0$, el término $C_1 e^{x/3}$ domina al crecer $x$; al decrecer $x$, domina el término $C_2 e^{-4x/3}$.
