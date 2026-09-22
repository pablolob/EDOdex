
## Enunciado

En cada uno de los problemas 1 a 18, halle todos los puntos singulares de la ecuación dada y determine si cada uno de ellos es singular o irregular.

1. $xy'' + (1 - x)y' + xy = 0$

## Solución

La ecuación tiene un único punto singular, $x=0$, y es un **punto singular regular**.

## Resolución

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. Para $x\ne 0$,

$$
y''+\frac{1-x}{x}\,y'+y=0,\qquad p(x)=\frac{1-x}{x},\qquad q(x)=1.
$$

Los puntos singulares son aquellos en los que $p$ o $q$ no son analíticos. La función $q(x)=1$ es analítica en todo punto. La función $p(x)=(1-x)/x$ es un cociente de polinomios, analítico salvo donde se anula su denominador, es decir, en $x=0$. Ese mismo punto anula el coeficiente de $y''$, $P(x)=x$. Por tanto, el único punto singular es $x=0$.

Para clasificarlo se examinan los productos

$$
(x-0)\,p(x)=1-x,\qquad (x-0)^2\,q(x)=x^2.
$$

Ambos son polinomios, luego admiten desarrollo en serie de Taylor convergente en torno a $x=0$; en particular, son analíticos allí. Se cumple la condición de punto singular regular y, en consecuencia, $x=0$ es un **punto singular regular**.

## Observaciones

Criterio general para la clasificación: escrito como $P(x)y''+Q(x)y'+R(x)y=0$, un punto singular $x_0$ es **regular** si $(x-x_0)\frac{Q}{P}$ y $(x-x_0)^2\frac{R}{P}$ son analíticas en $x_0$; en caso contrario es **irregular**.

Todos los puntos $x\ne 0$ son puntos ordinarios; alrededor de cualquiera de ellos la ecuación admite dos soluciones en serie de potencias.
