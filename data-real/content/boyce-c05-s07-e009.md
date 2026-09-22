
## Enunciado

En cada uno de los problemas 1 a 12, halle todos los puntos singulares regulares de la ecuación diferencial dada. Determine la ecuación indicial y los exponentes de la singularidad en cada punto singular regular.

9. $x^2(1 - x)y'' - (1 + x)y' + 2xy = 0$

## Solución

La ecuación tiene dos puntos singulares finitos, $x=0$ y $x=1$. El punto $x=0$ es **singular irregular**; el único **punto singular regular** es $x=1$. En $x=1$ la ecuación indicial es

$$
r(r+1)=0,
$$

y los exponentes de la singularidad son

$$
r_1=0,\qquad r_2=-1.
$$

## Resolución

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. Para $x\ne 0,1$, tras dividir por $x^2(1-x)$,

$$
y''-\frac{1+x}{x^2(1-x)}\,y'+\frac{2x}{x^2(1-x)}\,y=0,
\qquad
p(x)=-\frac{1+x}{x^2(1-x)},\quad q(x)=\frac{2}{x(1-x)}.
$$

En la forma original los coeficientes son $P(x)=x^2(1-x)$, $Q(x)=-(1+x)$ y $R(x)=2x$. El coeficiente de $y''$ se anula solo en $x=0$ y $x=1$; en cualquier otro punto $p$ y $q$ son cocientes de polinomios con denominador no nulo y, por tanto, analíticas. Así, los únicos puntos singulares son $x=0$ y $x=1$.

Un punto singular $x_0$ es **regular** si los productos $(x-x_0)p(x)$ y $(x-x_0)^2q(x)$ son analíticos en $x_0$. En caso contrario es **irregular**.

**Punto $x_0=0$.** Los productos son

$$
x\,p(x)=-\frac{1+x}{x(1-x)},\qquad x^2q(x)=\frac{2x}{1-x}.
$$

El segundo es analítico en $x=0$, pero el primero presenta un polo simple en $x=0$, de modo que no admite desarrollo de Taylor allí. La condición de regularidad falla y $x=0$ es un **punto singular irregular**. La ecuación indicial solo se define en los puntos singulares regulares; en consecuencia, no se plantea en $x=0$.

**Punto $x_0=1$.** Conviene usar la variable local $t=x-1$, que se anula en $x=1$. Con $x=1+t$,

$$
(x-1)\,p(x)=\frac{1+x}{x^2}=\frac{2+t}{(1+t)^2},
\qquad
(x-1)^2q(x)=-\frac{2(x-1)}{x}=-\frac{2t}{1+t}.
$$

Ambas funciones son analíticas en $t=0$, es decir, en $x=1$. Por tanto, $x=1$ es un **punto singular regular**. Sus valores límite son

$$
p_0=\lim_{x\to 1}(x-1)p(x)=2,
\qquad
q_0=\lim_{x\to 1}(x-1)^2q(x)=0.
$$

La **ecuación indicial** es $r(r-1)+p_0r+q_0=0$, esto es,

$$
r(r-1)+2r+0=0
\quad\Longrightarrow\quad
r^2+r=r(r+1)=0.
$$

Sus raíces son los exponentes de la singularidad en $x=1$:

$$
r_1=0,\qquad r_2=-1.
$$

## Observaciones

El criterio de regularidad exige que $(x-x_0)p(x)$ y $(x-x_0)^2q(x)$ admitan desarrollo de Taylor en $x_0$. En $x=0$ el coeficiente de $y''$ se anula con orden dos, pero eso no basta para la regularidad: el coeficiente de $y'$ no se anula allí y hace que $x\,p(x)$ tenga un polo. Por eso $x=0$ es irregular y el **método de Frobenius** no es aplicable en ese punto.

Los exponentes en $x=1$ difieren en un entero, $r_1-r_2=1$. Esto no altera la ecuación indicial, pero condiciona la forma de la segunda solución de Frobenius, que puede incluir un término con $\ln(x-1)$.
