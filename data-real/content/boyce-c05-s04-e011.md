
## Enunciado

En cada uno de los problemas 1 a 18, halle todos los puntos singulares de la ecuación dada y determine si cada uno de ellos es singular o irregular.

11. $(x^2 + x - 2)y'' + (x + 1)y' + 2y = 0$

## Solución

La ecuación tiene dos puntos singulares, $x=-2$ y $x=1$. Ambos son **puntos singulares regulares**.

## Resolución

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. El coeficiente de $y''$ es $P(x)=x^2+x-2$, que factoriza como

$$
P(x)=(x-1)(x+2).
$$

Para $x\ne 1$ y $x\ne -2$,

$$
y''+\frac{x+1}{(x-1)(x+2)}\,y'+\frac{2}{(x-1)(x+2)}\,y=0,
$$

de modo que

$$
p(x)=\frac{x+1}{(x-1)(x+2)},\qquad q(x)=\frac{2}{(x-1)(x+2)}.
$$

Los puntos singulares son aquellos en los que $p$ o $q$ no son analíticos. Ambas son cocientes de polinomios, analíticos salvo donde se anula su denominador. El denominador común se anula en $x=1$ y en $x=-2$, que son las raíces de $P(x)$. Por tanto, los puntos singulares son $x=1$ y $x=-2$.

Para clasificarlos se examinan los productos $(x-x_0)\,p(x)$ y $(x-x_0)^2\,q(x)$ en cada punto.

En $x_0=1$:

$$
(x-1)\,p(x)=\frac{x+1}{x+2},\qquad (x-1)^2\,q(x)=\frac{2(x-1)}{x+2}.
$$

Ambas expresiones son analíticas en $x=1$, pues en ese punto sus denominadores no se anulan. En consecuencia, $x=1$ es un **punto singular regular**.

En $x_0=-2$:

$$
(x+2)\,p(x)=\frac{x+1}{x-1},\qquad (x+2)^2\,q(x)=\frac{2(x+2)}{x-1}.
$$

Ambas expresiones son analíticas en $x=-2$, pues en ese punto sus denominadores no se anulan. En consecuencia, $x=-2$ es un **punto singular regular**.

## Observaciones

Criterio general para la clasificación: escrito como $P(x)y''+Q(x)y'+R(x)y=0$, un punto singular $x_0$ es **regular** si $(x-x_0)\frac{Q}{P}$ y $(x-x_0)^2\frac{R}{P}$ son analíticas en $x_0$; en caso contrario es **irregular**.

Todos los puntos distintos de $x=-2$ y $x=1$ son puntos ordinarios; alrededor de cualquiera de ellos la ecuación admite dos soluciones en serie de potencias.
