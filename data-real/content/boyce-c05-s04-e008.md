
## Enunciado

En cada uno de los problemas 1 a 18, halle todos los puntos singulares de la ecuación dada y determine si cada uno de ellos es singular o irregular.

8. $x(1 - x^2)^3y'' + (1 - x^2)^2y' + 2(1 + x)y = 0$

## Solución

La ecuación tiene tres puntos singulares: $x=0$ y $x=-1$ son **puntos singulares regulares**, mientras que $x=1$ es un **punto singular irregular**:

$$
x=0 \ \text{regular}, \qquad x=-1 \ \text{regular}, \qquad x=1 \ \text{irregular}.
$$

## Resolución

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. Al dividir entre el coeficiente de $y''$, $P(x)=x(1-x^2)^3$, resulta, para $x\ne 0,\pm1$,

$$
p(x)=\frac{(1-x^2)^2}{x(1-x^2)^3}=\frac{1}{x(1-x^2)},
\qquad
q(x)=\frac{2(1+x)}{x(1-x^2)^3}.
$$

Como $1-x^2=(1-x)(1+x)$, la función $q$ se simplifica a

$$
q(x)=\frac{2}{x(1-x)^3(1+x)^2}.
$$

Los puntos singulares son los ceros del coeficiente de $y''$: $x=0$, $x=1$ y $x=-1$.

Un punto singular $x_0$ es **regular** si $(x-x_0)p(x)$ y $(x-x_0)^2q(x)$ son analíticas en $x_0$; si alguna de las dos no lo es, el punto es **irregular**. Se examinan los tres puntos.

En $x_0=0$,

$$
x\,p(x)=\frac{1}{1-x^2},
\qquad
x^2q(x)=\frac{2x}{(1-x)^3(1+x)^2}.
$$

Ambas son analíticas en $x=0$ (son cocientes de polinomios con denominador no nulo). Por tanto, $x=0$ es un **punto singular regular**.

En $x_0=-1$,

$$
(x+1)p(x)=\frac{1}{x(1-x)},
\qquad
(x+1)^2q(x)=\frac{2}{x(1-x)^3}.
$$

Ambas son analíticas en $x=-1$. Por tanto, $x=-1$ es un **punto singular regular**.

En $x_0=1$,

$$
(x-1)p(x)=\frac{x-1}{x(1-x)(1+x)}=-\frac{1}{x(1+x)},
\qquad
(x-1)^2q(x)=\frac{2(x-1)^2}{x(1-x)^3(1+x)^2}=\frac{2}{x(1-x)(1+x)^2}.
$$

La primera expresión es analítica en $x=1$. La segunda tiene un polo en $x=1$: su numerador vale $2$ y su denominador se anula allí. Basta que una de las dos expresiones deje de ser analítica para que el punto sea **singular irregular**. Por tanto, $x=1$ es un **punto singular irregular**.

## Observaciones

El criterio de regularidad se aplica sobre la forma estándar: $x_0$ es regular si $(x-x_0)p(x)$ y $(x-x_0)^2q(x)$ son analíticas en $x_0$, e irregular en caso contrario.

La asimetría entre $x=1$ y $x=-1$ proviene del factor $2(1+x)$ que multiplica a $y$: aporta una raíz que compensa la singularidad en $x=-1$, pero no en $x=1$.

Todos los puntos distintos de $0$, $1$ y $-1$ son puntos ordinarios. Solo se consideran puntos singulares finitos; el comportamiento en $x=\infty$ no forma parte de la pregunta.
