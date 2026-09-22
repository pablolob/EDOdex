
## Enunciado

En cada uno de los problemas 5 a 8, determinen una cota inferior para el radio de convergencia de las soluciones serie alrededor de cada punto que se da, $x_0$ para la ecuación diferencial dada.

5. $y'' + 4y' + 6xy = 0; \quad x_0 = 0, \quad x_0 = 4$

## Solución

Las soluciones en serie alrededor de $x_0=0$ y de $x_0=4$ tienen radio de convergencia infinito. La cota inferior que proporciona el teorema es

$$
\rho=\infty
$$

en ambos casos: las series convergen para todo $x$.

## Resolución

La ecuación se escribe en la forma estándar $y''+p(x)y'+q(x)y=0$. El coeficiente de $y''$ es $1$, de modo que la división es directa y

$$
y''+4y'+6xy=0,\qquad p(x)=4,\qquad q(x)=6x.
$$

Los puntos singulares son los ceros del coeficiente de $y''$ y las singularidades de $p$ y $q$. Aquí el coeficiente de $y''$ es $P(x)=1$, que no tiene ceros, y $p$ y $q$ son polinomios, analíticos en todo el plano complejo. Por tanto, la ecuación no tiene puntos singulares: todo punto, en particular $x_0=0$ y $x_0=4$, es un **punto ordinario**.

El teorema de soluciones en serie alrededor de un punto ordinario asegura que la serie converge al menos para $|x-x_0|<\rho$, donde $\rho$ es la distancia de $x_0$ al punto singular más próximo en el plano complejo. Al no existir puntos singulares, esa distancia es infinita.

En consecuencia, la cota inferior del radio de convergencia es $\rho=\infty$ para $x_0=0$ y para $x_0=4$. Las soluciones en serie convergen para todo $x$ real.

## Observaciones

La cota es una garantía del teorema y no necesariamente el radio exacto. En este caso coinciden, porque los coeficientes son polinomios y ninguna singularidad limita la convergencia: las soluciones son funciones enteras.

El resultado no depende del centro elegido. Al no haber puntos singulares, cualquier $x_0$ da lugar a series con radio de convergencia infinito.
