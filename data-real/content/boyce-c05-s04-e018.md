
## Enunciado

En cada uno de los problemas 1 a 18, halle todos los puntos singulares de la ecuación dada y determine si cada uno de ellos es singular o irregular.

18. $(x \sin x)y'' + 3y' + xy = 0$

## Solución

Los puntos singulares son $x=0$ y $x=n\pi$ para $n=\pm1,\pm2,\dots$. El punto $x=0$ es un **punto singular irregular**; cada punto $x=n\pi$ con $n\ne0$ es un **punto singular regular**.

## Resolución

Se escriben los coeficientes $P(x)=x\sin x$, $Q(x)=3$ y $R(x)=x$. Los puntos singulares son los ceros del coeficiente de $y''$:

$$
P(x)=x\sin x=0 \quad\Longrightarrow\quad x=0 \quad\text{o}\quad x=n\pi,\ n=\pm1,\pm2,\dots
$$

Para $P(x)\ne0$ la forma estándar $y''+p(x)y'+q(x)y=0$ tiene

$$
p(x)=\frac{Q(x)}{P(x)}=\frac{3}{x\sin x},\qquad q(x)=\frac{R(x)}{P(x)}=\frac{x}{x\sin x}.
$$

En un punto singular $x_0$ la clasificación depende de que $(x-x_0)p(x)$ y $(x-x_0)^2q(x)$ sean analíticas en $x_0$.

**Puntos $x_0=n\pi$ con $n\ne0$.** Se calculan los productos

$$
(x-n\pi)\,p(x)=\frac{3(x-n\pi)}{x\sin x},\qquad (x-n\pi)^2\,q(x)=\frac{(x-n\pi)^2}{\sin x}.
$$

La función $\sin x$ tiene un cero simple en $x=n\pi$, pues $\sin(n\pi)=0$ y $\cos(n\pi)=(-1)^n\ne0$. Además $x\ne0$ en estos puntos. Por tanto $x\sin x$ tiene un cero simple y el primer producto es analítico y no nulo en $x=n\pi$; el segundo es analítico porque su numerador tiene un cero doble allí. Se cumplen las dos condiciones y cada $x=n\pi$ con $n\ne0$ es un **punto singular regular**.

**Punto $x_0=0$.** En este caso

$$
x\,p(x)=\frac{3}{\sin x},\qquad x^2\,q(x)=\frac{x^2}{\sin x}.
$$

El producto $x^2q(x)$ es analítico en $x=0$. En cambio $xp(x)=3/\sin x$ no lo es: como $\sin x$ tiene un cero simple en $x=0$, la función presenta allí un polo simple y carece de desarrollo de Taylor. Falla una de las dos condiciones y $x=0$ es un **punto singular irregular**.

Todos los puntos distintos de $x=n\pi$ son puntos ordinarios.

## Observaciones

Criterio general de clasificación: escrito como $P(x)y''+Q(x)y'+R(x)y=0$, un punto singular $x_0$ es **regular** si $(x-x_0)\frac{Q}{P}$ y $(x-x_0)^2\frac{R}{P}$ son analíticas en $x_0$; si alguna deja de serlo, es **irregular**.

La diferencia entre $x=0$ y los demás puntos singulares proviene del orden del cero de $P(x)=x\sin x$. En $x=n\pi$ con $n\ne0$ el cero es simple y la singularidad resulta regular; en $x=0$ el factor $x$ añade un segundo cero y la singularidad se vuelve irregular.

En cada punto singular regular la ecuación admite solución en serie de Frobenius; en $x=0$, al ser irregular, ese método no es aplicable directamente.
