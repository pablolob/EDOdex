---
title: "Boyce 5.7 Ejercicio 6"
exercise-id: boyce-c05-s07-e006
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.7, ejercicio 6"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - clasificar.punto-singular-regular
  - resolver-series.ecuacion-indicial
prerequisitos:
  - calculo-avanzado.series-potencias
  - algebra.factorizacion-polinomios
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c05s07i01-p290.png
---

## Enunciado

En cada uno de los problemas 1 a 12, halle todos los puntos singulares regulares de la ecuación diferencial dada. Determine la ecuación indicial y los exponentes de la singularidad en cada punto singular regular.

6. $2x(x + 2)y'' + y' - xy = 0$

## Solución

La ecuación tiene dos puntos singulares regulares, $x=0$ y $x=-2$.

En $x=0$ la **ecuación indicial** es

$$
r(r-1)+\frac{1}{4}r=0,
\qquad\text{esto es,}\qquad
r\left(r-\frac{3}{4}\right)=0,
$$

con exponentes de la singularidad $r_1=\frac{3}{4}$ y $r_2=0$.

En $x=-2$ la ecuación indicial es

$$
r(r-1)-\frac{1}{4}r=0,
\qquad\text{esto es,}\qquad
r\left(r-\frac{5}{4}\right)=0,
$$

con exponentes de la singularidad $r_1=\frac{5}{4}$ y $r_2=0$.

## Resolución

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. Para $x\ne 0,-2$, tras dividir por $2x(x+2)$,

$$
y''+\frac{1}{2x(x+2)}\,y'-\frac{x}{2x(x+2)}\,y=0,
\qquad
p(x)=\frac{1}{2x(x+2)},\quad q(x)=-\frac{x}{2x(x+2)}.
$$

El coeficiente de $y''$ en la forma original es $P(x)=2x(x+2)$, que se anula en $x=0$ y en $x=-2$. Estos son los únicos puntos donde $p$ y $q$ pueden dejar de ser analíticas, pues en cualquier otro punto son cocientes de polinomios con denominador no nulo. Por tanto, los únicos puntos singulares son $x=0$ y $x=-2$.

Un punto singular $x_0$ es regular si los productos $(x-x_0)p(x)$ y $(x-x_0)^2q(x)$ son analíticos en $x_0$. Cuando esto ocurre, con

$$
p_0=\lim_{x\to x_0}(x-x_0)p(x),
\qquad
q_0=\lim_{x\to x_0}(x-x_0)^2q(x),
$$

la **ecuación indicial** es $r(r-1)+p_0r+q_0=0$, y sus raíces son los exponentes de la singularidad.

**Punto $x_0=0$.** Los productos

$$
x\,p(x)=\frac{1}{2(x+2)},
\qquad
x^2q(x)=-\frac{x}{2(x+2)}
$$

son cocientes de polinomios cuyo denominador no se anula en $x=0$; admiten desarrollo de Taylor en torno a $0$ y son analíticos allí. Por tanto, $x=0$ es un punto singular regular. Sus valores límite son $p_0=\frac{1}{4}$ y $q_0=0$, de modo que la ecuación indicial queda

$$
r(r-1)+\frac{1}{4}r+0=0,
\qquad\text{esto es,}\qquad
r^2-\frac{3}{4}r=r\left(r-\frac{3}{4}\right)=0.
$$

Sus raíces son $r_1=\frac{3}{4}$ y $r_2=0$.

**Punto $x_0=-2$.** Se introduce la variable local $t=x+2$, que se anula en $x=-2$. Entonces

$$
(x+2)\,p(x)=\frac{1}{2x}=\frac{1}{2(t-2)},
\qquad
(x+2)^2q(x)=-\frac{x+2}{2}=-\frac{t}{2}.
$$

Ambas funciones son analíticas en $t=0$, es decir, en $x=-2$; por tanto, $x=-2$ es también un punto singular regular. Los valores límite son $p_0=-\frac{1}{4}$ y $q_0=0$. La ecuación indicial resulta

$$
r(r-1)-\frac{1}{4}r+0=0,
\qquad\text{esto es,}\qquad
r^2-\frac{5}{4}r=r\left(r-\frac{5}{4}\right)=0,
$$

cuyas raíces son $r_1=\frac{5}{4}$ y $r_2=0$.

## Observaciones

El criterio de regularidad exige que $(x-x_0)p(x)$ y $(x-x_0)^2q(x)$ admitan desarrollo de Taylor en $x_0$. En esta ecuación ambos puntos singulares lo cumplen, de modo que no hay puntos singulares irregulares.

En $x=0$ la función $q$ presenta una singularidad evitable: al cancelar el factor común $x$ resulta $q(x)=-\frac{1}{2(x+2)}$, analítica en $x=0$. Esto no altera la clasificación, porque $x=0$ es punto singular por ser cero del coeficiente de $y''$, no por el comportamiento de $q$.

En cada punto los exponentes difieren en un valor no entero ($\frac{3}{4}$ en $x=0$ y $\frac{5}{4}$ en $x=-2$). El enunciado solo pide la ecuación indicial y los exponentes; no se construyen las series de Frobenius.
