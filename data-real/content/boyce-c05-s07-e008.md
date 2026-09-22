
## Enunciado

En cada uno de los problemas 1 a 12, halle todos los puntos singulares regulares de la ecuación diferencial dada. Determine la ecuación indicial y los exponentes de la singularidad en cada punto singular regular.

8. $(x + 1)^2 y'' + 3(x^2 - 1)y' + 3y = 0$

## Solución

La ecuación tiene un único punto singular regular, $x=-1$. La **ecuación indicial** es

$$
r(r-1)-6r+3=0,
$$

equivalente a $r^2-7r+3=0$, y los exponentes de la singularidad son

$$
r_1=\frac{7+\sqrt{37}}{2},\qquad r_2=\frac{7-\sqrt{37}}{2}.
$$

## Resolución

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. Para $x\ne -1$, tras dividir por $(x+1)^2$,

$$
y''+\frac{3(x^2-1)}{(x+1)^2}\,y'+\frac{3}{(x+1)^2}\,y=0,
\qquad
p(x)=\frac{3(x-1)}{x+1},\quad q(x)=\frac{3}{(x+1)^2}.
$$

La simplificación $\dfrac{3(x^2-1)}{(x+1)^2}=\dfrac{3(x-1)}{x+1}$ es válida porque $x^2-1=(x-1)(x+1)$ y $x\ne -1$.

El coeficiente de $y''$ en la forma original es $P(x)=(x+1)^2$, que se anula solo en $x=-1$. Ese punto anula el denominador de $p$ y de $q$; en cualquier otro punto $p$ y $q$ son cocientes de polinomios con denominador no nulo y, por tanto, analíticas. En particular, $x=1$ anula el factor $x^2-1$ del numerador de $p$, pero no $P(1)=4$; el factor común se cancela y $x=1$ es un punto ordinario. Así, el único punto singular es $x=-1$.

Para clasificarlo se examinan los productos

$$
(x+1)\,p(x)=3(x-1),\qquad (x+1)^2q(x)=3.
$$

Ambos son polinomios, luego analíticos en $x=-1$. Se cumple la condición de punto singular regular; en consecuencia, $x=-1$ es un **punto singular regular**.

Con $p_0=\lim_{x\to -1}(x+1)p(x)=-6$ y $q_0=\lim_{x\to -1}(x+1)^2q(x)=3$, la ecuación indicial es

$$
r(r-1)+p_0 r+q_0=0
\quad\Longrightarrow\quad
r(r-1)-6r+3=0,
$$

es decir,

$$
r^2-7r+3=0.
$$

El discriminante es $49-12=37>0$ y no es un cuadrado perfecto, de modo que el polinomio no factoriza sobre los enteros. Sus raíces, ordenadas de mayor a menor, son los exponentes de la singularidad:

$$
r_1=\frac{7+\sqrt{37}}{2},\qquad r_2=\frac{7-\sqrt{37}}{2}.
$$

## Observaciones

Los exponentes difieren en $\sqrt{37}$, que no es un entero. Por ello la segunda solución de **Frobenius** no requiere término logarítmico; el enunciado solo pide la ecuación indicial y los exponentes, no las series.

El criterio de regularidad exige que $(x-x_0)p(x)$ y $(x-x_0)^2q(x)$ admitan desarrollo de Taylor en $x_0$. En esta ecuación los productos deben formarse con $(x+1)$, no con $x$, porque el punto singular está desplazado a $x=-1$.
