
## Enunciado

En cada uno de los problemas 5 a 8, determinen una cota inferior para el radio de convergencia de las soluciones serie alrededor de cada punto que se da, $x_0$ para la ecuación diferencial dada.

7. $(1 + x^3)y'' + 4xy' + y = 0; \quad x_0 = 0, \quad x_0 = 2$

## Solución

En la forma estándar, los **puntos singulares** son las raíces de $1+x^3=0$. La cota inferior del radio de convergencia es la distancia de $x_0$ al punto singular más próximo:

$$
R\ge 1 \quad (x_0=0), \qquad R\ge\sqrt3 \quad (x_0=2).
$$

## Resolución

La ecuación es de **segundo orden** y **lineal**. Al escribirla en forma estándar,

$$
y''+\frac{4x}{1+x^3}\,y'+\frac{1}{1+x^3}\,y=0,
$$

los coeficientes son analíticos salvo donde se anula $1+x^3$. Por tanto, los **puntos singulares** son las raíces de $x^3=-1$. Como $1+x^3$ no se anula ni en $x_0=0$ ni en $x_0=2$, ambos son **puntos ordinarios** y admiten soluciones en serie de potencias. El teorema de la sección garantiza que el radio de convergencia de cada solución en serie es al menos la distancia de $x_0$ al punto singular más cercano en el plano complejo.

La factorización

$$
1+x^3=(x+1)(x^2-x+1)
$$

da las tres raíces

$$
x=-1,\qquad x=\frac{1}{2}+\frac{\sqrt3}{2}i,\qquad x=\frac{1}{2}-\frac{\sqrt3}{2}i.
$$

Para $x_0=0$ las tres distancias valen

$$
|0-(-1)|=1,\qquad \left|0-\left(\frac{1}{2}\pm\frac{\sqrt3}{2}i\right)\right|=\sqrt{\frac14+\frac34}=1.
$$

La menor es $1$, de modo que $R\ge 1$.

Para $x_0=2$,

$$
|2-(-1)|=3,\qquad \left|2-\left(\frac{1}{2}\pm\frac{\sqrt3}{2}i\right)\right|
=\sqrt{\left(\frac32\right)^2+\left(\frac{\sqrt3}{2}\right)^2}
=\sqrt{\frac94+\frac34}=\sqrt3.
$$

La menor es $\sqrt3$, de modo que $R\ge\sqrt3$.

## Observaciones

La cota es la distancia al punto singular más próximo, que puede ser complejo. En $x_0=2$ los puntos singulares más cercanos son los complejos $\frac12\pm\frac{\sqrt3}{2}i$, no el real $x=-1$. Considerar solo las singularidades reales daría la cota más débil $R\ge 3$.

La cota es inferior y no necesariamente se alcanza: el radio de convergencia de una solución particular puede ser mayor.
