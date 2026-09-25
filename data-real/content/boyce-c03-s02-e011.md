
## Enunciado

En cada uno de los problemas 7 a 12, determine el intervalo más largo en el que el problema con valor inicial dado tiene con seguridad una solución dos veces diferenciable.

11. $(x - 3)y'' + xy' + (\ln |x|)y = 0, \quad y(1) = 0, \quad y'(1) = 1$

## Solución

El intervalo más largo es

$$
0 < x < 3.
$$

En los extremos $x = 0$ y $x = 3$ los coeficientes de la forma estándar dejan de ser continuos.

## Resolución

La ecuación se escribe en la forma estándar

$$
y'' + P(x)y' + Q(x)y = 0.
$$

Para $x \ne 3$ se divide la ecuación entre $x-3$:

$$
y'' + \frac{x}{x-3}y' + \frac{\ln|x|}{x-3}y = 0.
$$

Así, $P(x) = \dfrac{x}{x-3}$ y $Q(x) = \dfrac{\ln|x|}{x-3}$. La ecuación es **lineal** de **segundo orden** y **homogénea**.

El **teorema de existencia y unicidad** para ecuaciones lineales de segundo orden asegura que, si $P$ y $Q$ son continuas en un intervalo abierto $I$ que contiene al punto inicial $x_0$, entonces el problema con valor inicial tiene una única solución dos veces diferenciable en todo $I$. Por tanto, el intervalo más largo con seguridad es el mayor intervalo abierto que contiene a $x_0$ y en el que $P$ y $Q$ son continuas.

Se determinan los puntos de discontinuidad de cada coeficiente.

- $P(x) = \dfrac{x}{x-3}$ es continua salvo donde se anula el denominador, es decir, en $x = 3$.
- $Q(x) = \dfrac{\ln|x|}{x-3}$ es continua donde $\ln|x|$ está definida y el denominador no se anula, es decir, salvo en $x = 0$ y en $x = 3$.

Los puntos $x = 0$ y $x = 3$ dividen la recta real en los intervalos $(-\infty,0)$, $(0,3)$ y $(3,\infty)$. El punto inicial $x_0 = 1$ pertenece a $(0,3)$. El mayor intervalo abierto que contiene a $1$ y en el que $P$ y $Q$ son continuas es

$$
(0,3).
$$

Por tanto, el problema con valor inicial tiene con seguridad una solución dos veces diferenciable en $0 < x < 3$.

## Observaciones

La restricción del intervalo proviene de los dos puntos singulares: $x = 0$, donde $\ln|x|$ no está definida, y $x = 3$, donde el coeficiente de $y''$ se anula. La pregunta se responde sin resolver la ecuación. El teorema solo garantiza la solución en $(0,3)$; no descarta que pueda extenderse más allá de esos puntos, pero tampoco lo asegura.
