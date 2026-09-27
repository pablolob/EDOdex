
## Enunciado

¿Cuál es la eigenfunción correspondiente para el problema con valores en la frontera $y'' + \lambda y = 0$, $y'(0) = 0$, $y(\pi/2) = 0$ para $\lambda = 25$?

## Solución

Para $\lambda = 25$ la eigenfunción es

$$
y_3(x) = \cos(5x),
$$

determinada salvo un factor constante.

## Resolución

Con $\lambda = 25$ la ecuación diferencial es

$$
y'' + 25y = 0.
$$

La ecuación característica es $r^2 + 25 = 0$, cuyas raíces son $r = \pm 5i$. La solución general es

$$
y(x) = C_1 \cos(5x) + C_2 \sin(5x).
$$

Su derivada es

$$
y'(x) = -5C_1 \sin(5x) + 5C_2 \cos(5x).
$$

La condición $y'(0) = 0$ exige $5C_2 = 0$, de donde $C_2 = 0$ y la solución se reduce a

$$
y(x) = C_1 \cos(5x).
$$

La condición $y(\pi/2) = 0$ se evalúa como

$$
y\!\left(\frac{\pi}{2}\right) = C_1 \cos\!\left(\frac{5\pi}{2}\right) = C_1 \cdot 0 = 0.
$$

Esta condición se satisface para cualquier $C_1$, ya que $\frac{5\pi}{2}$ es un múltiplo impar de $\frac{\pi}{2}$. La solución no trivial es entonces $y(x) = C_1 \cos(5x)$, es decir, la eigenfunción $\cos(5x)$.

## Observaciones

La eigenfunción de un problema de valores en la frontera homogéneo queda determinada salvo una constante multiplicativa; suele tomarse el coeficiente igual a $1$.

Los eigenvalores de este problema son $\lambda_n = (2n-1)^2$ para $n = 1, 2, 3, \dots$ El valor $\lambda = 25$ corresponde a $n = 3$.
