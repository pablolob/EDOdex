---
title: "Boyce 5.7 Ejercicio 3"
exercise-id: boyce-c05-s07-e003
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.7, ejercicio 3"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - clasificar.punto-singular-regular
  - resolver-series.ecuacion-indicial
prerequisitos:
  - calculo-avanzado.series-potencias
  - polinomios.resolver
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c05s07i01-p290.png
---

## Enunciado

En cada uno de los problemas 1 a 12, halle todos los puntos singulares regulares de la ecuación diferencial dada. Determine la ecuación indicial y los exponentes de la singularidad en cada punto singular regular.

3. $x(x - 1)y'' + 6x^2 y' + 3y = 0$

## Solución

La ecuación tiene dos puntos singulares regulares, $x=0$ y $x=1$.

En $x=0$ la **ecuación indicial** es

$$
r(r-1)=0,
$$

con exponentes de la singularidad $r_1=1$ y $r_2=0$.

En $x=1$ la ecuación indicial es

$$
r(r+5)=0,
$$

con exponentes de la singularidad $r_1=0$ y $r_2=-5$.

## Resolución

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. Para $x\ne 0,1$,

$$
y''+\frac{6x^2}{x(x-1)}\,y'+\frac{3}{x(x-1)}\,y=0,
\qquad
p(x)=\frac{6x}{x-1},
\qquad
q(x)=\frac{3}{x(x-1)}.
$$

El coeficiente de $y''$ en la forma original es $x(x-1)$, que se anula en $x=0$ y en $x=1$. Estos son los únicos puntos donde $p$ y $q$ pueden dejar de ser analíticas, pues en cualquier otro punto son cocientes de polinomios con denominador no nulo. Por tanto, los únicos puntos singulares son $x=0$ y $x=1$.

Un punto singular $x_0$ es regular si los productos $(x-x_0)p(x)$ y $(x-x_0)^2q(x)$ son analíticos en $x_0$. Cuando esto ocurre, con

$$
p_0=\lim_{x\to x_0}(x-x_0)p(x),
\qquad
q_0=\lim_{x\to x_0}(x-x_0)^2q(x),
$$

la **ecuación indicial** es $r(r-1)+p_0r+q_0=0$, y sus raíces son los exponentes de la singularidad.

**Punto $x_0=0$.** Los productos

$$
x\,p(x)=\frac{6x^2}{x-1},
\qquad
x^2q(x)=\frac{3x}{x-1}
$$

son cocientes de polinomios cuyo denominador no se anula en $x=0$; admiten desarrollo de Taylor en torno a $0$ y son analíticos allí. Por tanto, $x=0$ es un punto singular regular. Sus valores límite son $p_0=0$ y $q_0=0$, de modo que la ecuación indicial queda

$$
r(r-1)+0\cdot r+0=0,
\qquad\text{esto es,}\qquad
r(r-1)=0.
$$

Sus raíces son $r_1=1$ y $r_2=0$.

**Punto $x_0=1$.** Se introduce la variable local $t=x-1$, que se anula en $x=1$. Entonces

$$
(x-1)\,p(x)=6x=6(t+1),
\qquad
(x-1)^2q(x)=\frac{3(x-1)}{x}=\frac{3t}{t+1}.
$$

Ambas funciones son analíticas en $t=0$, es decir, en $x=1$; por tanto, $x=1$ es también un punto singular regular. Los valores límite son $p_0=6$ y $q_0=0$. La ecuación indicial resulta

$$
r(r-1)+6r+0=0,
\qquad\text{esto es,}\qquad
r^2+5r=r(r+5)=0,
$$

cuyas raíces son $r_1=0$ y $r_2=-5$.

## Observaciones

El criterio de regularidad exige que $(x-x_0)p(x)$ y $(x-x_0)^2q(x)$ admitan desarrollo de Taylor en $x_0$. En esta ecuación ambos puntos singulares lo cumplen, de modo que no hay puntos singulares irregulares.

La ecuación indicial de un punto singular regular $x_0$ se construye con los límites $p_0$ y $q_0$ definidos arriba; en particular, cuando $x_0\ne 0$ los productos deben formarse con $(x-x_0)$ y no con $x$. Los exponentes de la singularidad son las raíces de esa ecuación cuadrática.
