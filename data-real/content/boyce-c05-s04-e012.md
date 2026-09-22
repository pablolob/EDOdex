
## Enunciado

En cada uno de los problemas 1 a 18, halle todos los puntos singulares de la ecuación dada y determine si cada uno de ellos es singular o irregular.

12. $xy'' + e^xy' + (3 \cos x)y = 0$

## Solución

La ecuación tiene un único punto singular, $x=0$, y es un **punto singular regular**.

## Resolución

La ecuación es lineal de segundo orden y homogénea. Se escribe en la forma estándar $y''+p(x)y'+q(x)y=0$ dividiendo por el coeficiente de $y''$, que es $x$ y se anula en $x=0$:

$$
y''+\frac{e^x}{x}\,y'+\frac{3\cos x}{x}\,y=0,\qquad
p(x)=\frac{e^x}{x},\qquad q(x)=\frac{3\cos x}{x}.
$$

Las funciones $p$ y $q$ son analíticas salvo donde se anula su denominador, es decir, en $x=0$. Ese mismo punto anula el coeficiente de $y''$. Por tanto, el único punto singular es $x=0$.

Un punto singular $x_0$ es regular si $(x-x_0)p(x)$ y $(x-x_0)^2q(x)$ son analíticas en $x_0$; si alguna de las dos no lo es, el punto es irregular.

En $x_0=0$,

$$
x\,p(x)=e^x,\qquad x^2\,q(x)=3x\cos x.
$$

Ambas son funciones enteras: $e^x$ y $3x\cos x$ admiten desarrollo en serie de Taylor convergente en todo punto, en particular en $x=0$. Se cumplen las dos condiciones de regularidad y, en consecuencia, $x=0$ es un **punto singular regular**.

## Observaciones

En un punto singular regular las singularidades de $p$ y $q$ son a lo sumo polos de orden $1$ y $2$, respectivamente. Aquí $p$ y $q$ presentan un polo simple en $x=0$, que desaparece al multiplicar por $x$ y por $x^2$. De forma equivalente, el criterio se formula con la existencia finita de los límites $\lim_{x\to 0} x\,p(x)$ y $\lim_{x\to 0} x^2 q(x)$.

Todos los puntos $x\ne 0$ son puntos ordinarios; alrededor de cualquiera de ellos la ecuación admite dos soluciones en serie de potencias.
