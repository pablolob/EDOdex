
## Enunciado

En cada uno de los problemas 1 a 12, halle todos los puntos singulares regulares de la ecuación diferencial dada. Determine la ecuación indicial y los exponentes de la singularidad en cada punto singular regular.

7. $x^2 y'' + \frac{1}{2}(x + \sin x)y' + y = 0$

## Solución

La ecuación tiene un único punto singular, $x=0$, y es un **punto singular regular**. La ecuación indicial es

$$
r^2+1=0,
$$

y los exponentes de la singularidad son $r_1=i$ y $r_2=-i$.

## Resolución

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. Para $x\ne 0$,

$$
y''+\frac{x+\sin x}{2x^2}\,y'+\frac{1}{x^2}\,y=0,\qquad p(x)=\frac{x+\sin x}{2x^2},\qquad q(x)=\frac{1}{x^2}.
$$

Los puntos singulares son los ceros del coeficiente de $y''$, $P(x)=x^2$, es decir, $x=0$. La función $\sin x$ es entera y el denominador $x^2$ no se anula fuera de $x=0$, de modo que $p$ y $q$ son analíticas en todo $x\ne 0$. Por tanto, el único punto singular es $x=0$.

Para clasificarlo se examinan los productos

$$
x\,p(x)=\frac{x+\sin x}{2x}=\frac{1}{2}\left(1+\frac{\sin x}{x}\right),\qquad x^2\,q(x)=1.
$$

El cociente admite el desarrollo en serie

$$
\frac{\sin x}{x}=\sum_{n\ge 0}\frac{(-1)^n x^{2n}}{(2n+1)!},
$$

convergente en torno a $x=0$; en consecuencia, $x\,p(x)$ es analítica en $x=0$. La función $x^2q(x)=1$ también lo es. Se cumple la condición de punto singular regular y, por tanto, $x=0$ es un **punto singular regular**.

En un punto singular regular $x_0$ la ecuación indicial es

$$
r(r-1)+p_0 r+q_0=0,\qquad p_0=\lim_{x\to x_0}(x-x_0)p(x),\qquad q_0=\lim_{x\to x_0}(x-x_0)^2q(x).
$$

Con $x_0=0$ los coeficientes resultan

$$
p_0=\lim_{x\to 0}\frac{1}{2}\left(1+\frac{\sin x}{x}\right)=1,\qquad q_0=\lim_{x\to 0}1=1.
$$

Sustituyendo en la ecuación indicial,

$$
r(r-1)+r+1=r^2+1=0,
$$

de donde los exponentes de la singularidad son $r_1=i$ y $r_2=-i$.

## Observaciones

Criterio general para la clasificación: escrito como $P(x)y''+Q(x)y'+R(x)y=0$, un punto singular $x_0$ es **regular** si $(x-x_0)\frac{Q}{P}$ y $(x-x_0)^2\frac{R}{P}$ son analíticas en $x_0$; en caso contrario es **irregular**.

Los exponentes de la singularidad pueden ser complejos; la ecuación indicial no exige que sus raíces sean reales. Aquí $r_1-r_2=2i$ no es un entero, de modo que la segunda solución de Frobenius no requiere término logarítmico.

Todos los puntos $x\ne 0$ son puntos ordinarios; alrededor de cualquiera de ellos la ecuación admite dos soluciones en serie de potencias.
