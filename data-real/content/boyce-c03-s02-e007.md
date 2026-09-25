
## Enunciado

En cada uno de los problemas 7 a 12, determine el intervalo más largo en el que el problema con valor inicial dado tiene con seguridad una solución dos veces diferenciable.

7. $xy'' + 3y = x, \quad y(1) = 1, \quad y'(1) = 2$

## Solución

En forma estándar la ecuación es $y'' + \dfrac{3}{x}y = 1$, cuyos coeficientes son continuos en $(-\infty,0)$ y en $(0,\infty)$. Como la condición inicial se da en $x_0 = 1$, el intervalo más largo es

$$
0 < x < \infty.
$$

## Resolución

El teorema de existencia y unicidad para ecuaciones lineales de segundo orden se aplica a la forma estándar

$$
y'' + p(x)y' + q(x)y = g(x).
$$

Para $x \ne 0$ se divide la ecuación por $x$ y se obtiene

$$
y'' + \frac{3}{x}y = 1.
$$

Así, $p(x) = 0$, $q(x) = \dfrac{3}{x}$ y $g(x) = 1$. Las funciones $p$ y $g$ son continuas en todo $\mathbb{R}$. La función $q$ es continua en $(-\infty,0)$ y en $(0,\infty)$, y no está definida en $x = 0$.

El teorema garantiza una única solución dos veces diferenciable en todo intervalo abierto que contenga a $x_0 = 1$ y en el que $p$, $q$ y $g$ sean continuas. El intervalo de continuidad que contiene a $1$ es $(0,\infty)$, porque $x = 0$ separa las dos regiones donde $q$ es continua. Por tanto, el intervalo más largo es $0 < x < \infty$.

## Observaciones

La ecuación es **lineal** de segundo orden y no homogénea; el punto $x = 0$ es un punto singular. El teorema solo asegura la solución en $(0,\infty)$; no descarta que pueda extenderse más allá de $x = 0$, pero tampoco lo garantiza. La pregunta se responde sin resolver la ecuación.
