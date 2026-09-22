
## Enunciado

En cada uno de los problemas 1 a 12, halle todos los puntos singulares regulares de la ecuación diferencial dada. Determine la ecuación indicial y los exponentes de la singularidad en cada punto singular regular.

12. $x(x + 3)^2 y'' - 2(x + 3)y' - xy = 0$

## Solución

La ecuación tiene dos **puntos singulares regulares**, $x=0$ y $x=-3$.

En $x=0$, la **ecuación indicial** es

$$
r^2-\frac{5}{3}r=0,
$$

con exponentes de la singularidad $r_1=\frac{5}{3}$ y $r_2=0$.

En $x=-3$, la ecuación indicial es

$$
3r^2-r-3=0,
$$

con exponentes de la singularidad

$$
r_1=\frac{1+\sqrt{37}}{6},\qquad r_2=\frac{1-\sqrt{37}}{6}.
$$

## Resolución

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. Para $x\ne 0,-3$, tras dividir por el coeficiente de $y''$,

$$
y''-\frac{2}{x(x+3)}\,y'-\frac{1}{(x+3)^2}\,y=0,
\qquad
p(x)=-\frac{2}{x(x+3)},\quad q(x)=-\frac{1}{(x+3)^2}.
$$

El coeficiente de $y''$ en la forma original, $x(x+3)^2$, se anula en $x=0$ y en $x=-3$. Estos son los únicos puntos donde $p$ o $q$ pueden dejar de ser analíticas, pues en cualquier otro punto son cocientes de polinomios con denominador no nulo. Por tanto, los únicos puntos singulares son $x=0$ y $x=-3$.

Un punto singular $x_0$ es regular si los productos $(x-x_0)p(x)$ y $(x-x_0)^2q(x)$ son analíticos en $x_0$. Cuando esto ocurre, con

$$
p_0=\lim_{x\to x_0}(x-x_0)p(x),
\qquad
q_0=\lim_{x\to x_0}(x-x_0)^2q(x),
$$

la **ecuación indicial** es $r(r-1)+p_0r+q_0=0$, y sus raíces son los exponentes de la singularidad.

**Punto $x_0=0$.** Los productos

$$
x\,p(x)=-\frac{2}{x+3},
\qquad
x^2q(x)=-\frac{x^2}{(x+3)^2}
$$

son cocientes de polinomios cuyo denominador no se anula en $x=0$; admiten desarrollo de Taylor en torno a $0$ y son analíticos allí. Por tanto, $x=0$ es un **punto singular regular**. Sus valores límite son $p_0=-\frac{2}{3}$ y $q_0=0$, de modo que la ecuación indicial queda

$$
r(r-1)-\frac{2}{3}r+0=0,
\qquad\text{esto es,}\qquad
r^2-\frac{5}{3}r=r\left(r-\frac{5}{3}\right)=0.
$$

Sus raíces, ordenadas de mayor a menor, son $r_1=\frac{5}{3}$ y $r_2=0$.

**Punto $x_0=-3$.** Se forma la variable local $t=x+3$, que se anula en $x=-3$. Entonces

$$
(x+3)p(x)=-\frac{2}{x}=-\frac{2}{t-3},
\qquad
(x+3)^2q(x)=-1.
$$

Ambas funciones son analíticas en $t=0$, es decir, en $x=-3$; por tanto, $x=-3$ es también un **punto singular regular**. Los valores límite son $p_0=\frac{2}{3}$ y $q_0=-1$. La ecuación indicial resulta

$$
r(r-1)+\frac{2}{3}r-1=0,
\qquad\text{esto es,}\qquad
r^2-\frac{1}{3}r-1=0.
$$

Multiplicando por $3$ se obtiene $3r^2-r-3=0$, cuyas raíces son

$$
r=\frac{1\pm\sqrt{1+36}}{6}=\frac{1\pm\sqrt{37}}{6}.
$$

Los exponentes de la singularidad son $r_1=\frac{1+\sqrt{37}}{6}$ y $r_2=\frac{1-\sqrt{37}}{6}$.

## Observaciones

El criterio de regularidad exige que $(x-x_0)p(x)$ y $(x-x_0)^2q(x)$ admitan desarrollo de Taylor en $x_0$. En $x=-3$ los productos deben formarse con $(x+3)$ y no con $x$. Que $x=-3$ sea un cero doble del coeficiente de $y''$ no impide la regularidad: los dos productos siguen siendo analíticos allí.

Los exponentes no difieren en un entero en ninguno de los dos puntos, pues $r_1-r_2=\frac{5}{3}$ en $x=0$ y $r_1-r_2=\frac{\sqrt{37}}{3}$ en $x=-3$. En consecuencia, las dos soluciones de **Frobenius** asociadas a cada punto singular regular no requieren término logarítmico; el enunciado solo pide la ecuación indicial y los exponentes, no las series.
