
## Enunciado

20. Suponga que $y(x)$ denota una solución del PVI de primer orden $y' = x^2 + y^2$, $y(1) = -1$ y que $y(x)$ tiene al menos una segunda derivada en $x = 1$. En alguna vecindad de $x = 1$ utilice la ED para determinar si $y(x)$ está creciendo o decreciendo y si la gráfica $y(x)$ es cóncava hacia arriba o hacia abajo.

## Solución

En $x = 1$, $y(x)$ es **creciente** ($y'(1) = 2 > 0$) y su gráfica es **cóncava hacia abajo** ($y''(1) = -2 < 0$).

## Resolución

Se evalúa la EDO en $x = 1$ con $y(1) = -1$:

$$
y'(1) = 1^2 + (-1)^2 = 1 + 1 = 2.
$$

Como $y'(1) = 2 > 0$, la solución $y(x)$ es **creciente** en $x = 1$. Por continuidad de $y'$, lo es también en una vecindad de $x = 1$.

Para determinar la concavidad se calcula la segunda derivada. Derivando la EDO respecto de $x$:

$$
y'' = \frac{d}{dx}\bigl(x^2 + y^2\bigr) = 2x + 2y\,y'.
$$

Se evalúa en $x = 1$, con $y(1) = -1$ y $y'(1) = 2$:

$$
y''(1) = 2(1) + 2(-1)(2) = 2 - 4 = -2.
$$

Como $y''(1) = -2 < 0$, la gráfica de $y(x)$ es **cóncava hacia abajo** en $x = 1$. Por continuidad de $y''$, esta concavidad se mantiene en una vecindad de $x = 1$.

## Observaciones

Este análisis es puramente local: se determina el comportamiento de la solución en un entorno de $x = 1$ sin necesidad de resolver la EDO. La ecuación $y' = x^2 + y^2$ es de tipo Riccati; su lado derecho es siempre no negativo, por lo que $y' \ge 0$ en todo punto, lo que implica que toda solución es no decreciente.
