
## Enunciado

En cada uno de los problemas 1 a 12, halle todos los puntos singulares regulares de la ecuación diferencial dada. Determine la ecuación indicial y los exponentes de la singularidad en cada punto singular regular.

11. $(4 - x^2)y'' + 2xy' + 3y = 0$

## Solución

La ecuación tiene dos puntos singulares, $x=2$ y $x=-2$, y ambos son **puntos singulares regulares**. En los dos la ecuación indicial y sus exponentes son los mismos:

$$
r(r-1)-r=0,\qquad r_1=2,\quad r_2=0.
$$

## Resolución

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. Para $x\ne\pm 2$,

$$
y''+\frac{2x}{4-x^2}\,y'+\frac{3}{4-x^2}\,y=0,\qquad p(x)=\frac{2x}{4-x^2},\qquad q(x)=\frac{3}{4-x^2}.
$$

Los puntos singulares son los ceros del coeficiente de $y''$ en la forma $P(x)y''+Q(x)y'+R(x)y=0$, con $P(x)=4-x^2$. Como $4-x^2=(2-x)(2+x)$, los únicos puntos singulares son $x=2$ y $x=-2$.

Para clasificar $x=2$ se examinan los productos

$$
(x-2)\,p(x)=\frac{(x-2)\,2x}{(2-x)(2+x)}=-\frac{2x}{x+2},\qquad
(x-2)^2\,q(x)=\frac{(x-2)^2\,3}{(2-x)(2+x)}=-\frac{3(x-2)}{x+2}.
$$

Ambas expresiones son analíticas en $x=2$: la primera es una función racional con denominador que no se anula allí, y la segunda es un polinomio dividido por $x+2\ne 0$. Se cumplen las dos condiciones de punto singular regular, luego $x=2$ es un **punto singular regular**.

Para clasificar $x=-2$ se calculan de forma análoga

$$
(x+2)\,p(x)=\frac{(x+2)\,2x}{(2-x)(2+x)}=\frac{2x}{2-x},\qquad
(x+2)^2\,q(x)=\frac{(x+2)^2\,3}{(2-x)(2+x)}=\frac{3(x+2)}{2-x}.
$$

Ambas son analíticas en $x=-2$, de modo que $x=-2$ también es un **punto singular regular**.

En $x=2$ los coeficientes de la ecuación indicial son $p_0=\lim_{x\to 2}(x-2)p(x)=-1$ y $q_0=\lim_{x\to 2}(x-2)^2q(x)=0$, luego

$$
r(r-1)+p_0r+q_0=r(r-1)-r=r^2-2r=0.
$$

En $x=-2$ se obtiene $p_0=\lim_{x\to -2}(x+2)p(x)=-1$ y $q_0=\lim_{x\to -2}(x+2)^2q(x)=0$, con lo que la ecuación indicial es la misma:

$$
r(r-1)-r=r^2-2r=0.
$$

Sus raíces son los exponentes de la singularidad: $r_1=2$ y $r_2=0$.

## Observaciones

Criterio general de clasificación: escrito como $P(x)y''+Q(x)y'+R(x)y=0$, un punto singular $x_0$ es **regular** si $(x-x_0)\frac{Q}{P}$ y $(x-x_0)^2\frac{R}{P}$ son analíticas en $x_0$; en caso contrario es **irregular**.

Los coeficientes de la ecuación son funciones pares, por lo que la ecuación indicial resulta idéntica en $x=2$ y en $x=-2$. Los exponentes difieren en un entero positivo, $r_1-r_2=2$. Esto no modifica la ecuación indicial, pero condiciona la forma de la segunda solución de Frobenius, que puede incluir un término con $\ln(x-x_0)$.
