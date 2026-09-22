
## Enunciado

En cada uno de los problemas 1 a 18, halle todos los puntos singulares de la ecuación dada y determine si cada uno de ellos es singular o irregular.

14. $x^2y'' + 2(e^x - 1)y' + (e^{-x} \cos x)y = 0$

## Solución

La ecuación tiene un único punto singular, $x=0$, y es un **punto singular regular**.

## Resolución

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. Para $x\ne 0$,

$$
y''+\frac{2(e^x-1)}{x^2}\,y'+\frac{e^{-x}\cos x}{x^2}\,y=0,\qquad p(x)=\frac{2(e^x-1)}{x^2},\qquad q(x)=\frac{e^{-x}\cos x}{x^2}.
$$

Los puntos singulares son aquellos en los que $p$ o $q$ no son analíticos. El numerador $2(e^x-1)$ es analítico en todo punto; el numerador $e^{-x}\cos x$ también lo es y no se anula en $x=0$, pues vale $1$. Las únicas singularidades de $p$ y $q$ proceden del denominador $x^2$, que se anula solo en $x=0$, el mismo punto que anula el coeficiente de $y''$, $P(x)=x^2$. Por tanto, el único punto singular es $x=0$.

Para clasificarlo se examinan los productos

$$
(x-0)\,p(x)=\frac{2(e^x-1)}{x},\qquad (x-0)^2\,q(x)=e^{-x}\cos x.
$$

El segundo es analítico en todo punto. Para el primero se emplea el desarrollo $e^x-1=\sum_{n\ge 1}\frac{x^n}{n!}$, de donde

$$
\frac{2(e^x-1)}{x}=2\sum_{n\ge 1}\frac{x^{n-1}}{n!}=2+x+\frac{x^2}{3}+\cdots,
$$

que es una serie de potencias convergente en torno a $x=0$; por tanto, es analítico allí. Se cumple la condición de punto singular regular y, en consecuencia, $x=0$ es un **punto singular regular**.

## Observaciones

Criterio general para la clasificación: escrito como $P(x)y''+Q(x)y'+R(x)y=0$, un punto singular $x_0$ es **regular** si $(x-x_0)\frac{Q}{P}$ y $(x-x_0)^2\frac{R}{P}$ son analíticas en $x_0$; en caso contrario es **irregular**.

Todos los puntos $x\ne 0$ son puntos ordinarios; alrededor de cualquiera de ellos la ecuación admite dos soluciones en serie de potencias.
