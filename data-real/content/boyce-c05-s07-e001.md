
## Enunciado

En cada uno de los problemas 1 a 12, halle todos los puntos singulares regulares de la ecuación diferencial dada. Determine la ecuación indicial y los exponentes de la singularidad en cada punto singular regular.

1. $xy'' + 2xy' + 6e^x y = 0$

## Solución

La ecuación tiene un único punto singular, $x=0$, y es un **punto singular regular**. La ecuación indicial y sus raíces son

$$
r(r-1)=0,\qquad r_1=1,\quad r_2=0.
$$

## Resolución

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. Para $x\ne 0$,

$$
y''+2y'+\frac{6e^x}{x}\,y=0,\qquad p(x)=2,\qquad q(x)=\frac{6e^x}{x}.
$$

En la notación $P(x)y''+Q(x)y'+R(x)y=0$ se tiene $P(x)=x$, $Q(x)=2x$ y $R(x)=6e^x$. El único cero del coeficiente de $y''$ es $x=0$. Allí $Q(0)=0$ pero $R(0)=6\ne 0$, de modo que la singularidad no se cancela y $x=0$ es el único punto singular.

Para clasificarlo se examinan los productos

$$
x\,p(x)=2x,\qquad x^2 q(x)=6x e^x.
$$

Ambos son analíticos en $x=0$: $2x$ es un polinomio y $6xe^x$ admite el desarrollo $6x\sum_{n\ge 0}x^n/n!$, convergente en todo $\mathbb{R}$. Se cumplen las dos condiciones de punto singular regular, luego $x=0$ es un **punto singular regular**.

Con los valores $p_0=\lim_{x\to 0}x\,p(x)=0$ y $q_0=\lim_{x\to 0}x^2q(x)=0$, la ecuación indicial es

$$
r(r-1)+p_0r+q_0=r(r-1)=0.
$$

Sus raíces son los exponentes de la singularidad: $r_1=1$ y $r_2=0$.

## Observaciones

Criterio general de clasificación: escrito como $P(x)y''+Q(x)y'+R(x)y=0$, un punto singular $x_0$ es **regular** si $(x-x_0)\frac{Q}{P}$ y $(x-x_0)^2\frac{R}{P}$ son analíticas en $x_0$; en caso contrario es **irregular**.

Los exponentes difieren en un entero positivo, $r_1-r_2=1$. Esto no modifica la ecuación indicial, pero condiciona la forma de la segunda solución de Frobenius, que puede incluir un término con $\ln x$.
