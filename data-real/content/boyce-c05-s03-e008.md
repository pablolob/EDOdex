
## Enunciado

En cada uno de los problemas 5 a 8, determinen una cota inferior para el radio de convergencia de las soluciones serie alrededor de cada punto que se da, $x_0$ para la ecuación diferencial dada.

8. $xy'' + y = 0; \quad x_0 = 1$

## Solución

En la forma estándar, el único **punto singular** es $x=0$. La cota inferior del radio de convergencia es la distancia de $x_0=1$ a ese punto:

$$
R\ge 1.
$$

## Resolución

La ecuación es de **segundo orden** y **lineal**. Al escribirla en forma estándar,

$$
y''+\frac{1}{x}\,y=0,
$$

los coeficientes son analíticos salvo donde se anula $x$. Por tanto, el único **punto singular** es $x=0$. Como $x=0$ no coincide con $x_0=1$, el punto $x_0=1$ es un **punto ordinario** y admite soluciones en serie de potencias.

El teorema de la sección garantiza que el radio de convergencia de cada solución en serie alrededor de $x_0$ es al menos la distancia de $x_0$ al punto singular más próximo en el plano complejo. Aquí hay una sola singularidad, $x=0$, y su distancia a $x_0=1$ es

$$
|1-0|=1.
$$

En consecuencia,

$$
R\ge 1.
$$

## Observaciones

La cota es inferior y no necesariamente se alcanza: el radio de convergencia de una solución particular puede ser mayor que $1$.

La distancia se mide en el plano complejo. En esta ecuación el único punto singular es real, de modo que la distancia coincide con la distancia sobre la recta real.
