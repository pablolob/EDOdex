
## Enunciado

En cada uno de los problemas 1 a 18, halle todos los puntos singulares de la ecuación dada y determine si cada uno de ellos es singular o irregular.

10. $x(3 - x)y'' + (x + 1)y' - 2y = 0$

## Solución

La ecuación tiene dos puntos singulares, $x=0$ y $x=3$. Ambos son **puntos singulares regulares**.

## Resolución

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. El coeficiente de $y''$ es $P(x)=x(3-x)$, cuyas raíces son $x=0$ y $x=3$. Para $x\ne 0$ y $x\ne 3$,

$$
y''+\frac{x+1}{x(3-x)}\,y'-\frac{2}{x(3-x)}\,y=0,
$$

de modo que

$$
p(x)=\frac{x+1}{x(3-x)},\qquad q(x)=-\frac{2}{x(3-x)}.
$$

Los puntos singulares son aquellos en los que $p$ o $q$ no son analíticos. Ambas son cocientes de polinomios, analíticos salvo donde se anula su denominador. El denominador común se anula en $x=0$ y en $x=3$, que son las raíces de $P(x)$. Por tanto, los puntos singulares son $x=0$ y $x=3$.

Para clasificarlos se examinan los productos $(x-x_0)\,p(x)$ y $(x-x_0)^2\,q(x)$ en cada punto.

En $x_0=0$:

$$
(x-0)\,p(x)=\frac{x+1}{3-x},\qquad (x-0)^2\,q(x)=-\frac{2x}{3-x}.
$$

Ambas expresiones son analíticas en $x=0$, pues en ese punto sus denominadores no se anulan. En consecuencia, $x=0$ es un **punto singular regular**.

En $x_0=3$:

$$
(x-3)\,p(x)=-\frac{x+1}{x},\qquad (x-3)^2\,q(x)=\frac{2(x-3)}{x}.
$$

Ambas expresiones son analíticas en $x=3$, pues en ese punto sus denominadores no se anulan. En consecuencia, $x=3$ es un **punto singular regular**.

## Observaciones

Criterio general para la clasificación: escrito como $P(x)y''+Q(x)y'+R(x)y=0$, un punto singular $x_0$ es **regular** si $(x-x_0)\frac{Q}{P}$ y $(x-x_0)^2\frac{R}{P}$ son analíticas en $x_0$; en caso contrario es **irregular**.

Todos los puntos distintos de $x=0$ y $x=3$ son puntos ordinarios; alrededor de cualquiera de ellos la ecuación admite dos soluciones en serie de potencias.
