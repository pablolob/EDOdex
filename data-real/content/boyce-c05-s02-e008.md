
## Enunciado

En cada uno de los problemas 1 a 14, resuelva la ecuación diferencial dada por medio de una serie de potencias alrededor de un punto dado $x_0$. Halle la relación de recurrencia; encuentre también los cuatro primeros términos de cada una de dos soluciones linealmente independientes (a menos que la serie termine antes). Si es posible, encuentre el término general de cada solución.

8. $xy'' + y' + xy = 0, \quad x_0 = 1$

## Solución

Con el cambio $t=x-1$ y $y=\sum_{n=0}^{\infty}a_n t^n$, la sustitución en la ecuación conduce a la **relación de recurrencia**

$$
(n+2)(n+1)a_{n+2}+(n+1)^2a_{n+1}+a_n+a_{n-1}=0,\qquad n\ge 0,\quad a_{-1}=0,
$$

o, despejando $a_{n+2}$,

$$
a_{n+2}=-\frac{(n+1)^2a_{n+1}+a_n+a_{n-1}}{(n+2)(n+1)},\qquad n\ge 0,\quad a_{-1}=0.
$$

Dos soluciones linealmente independientes, cada una con sus cuatro primeros términos, son

$$
y_1(x)=1-\frac{1}{2}(x-1)^2+\frac{1}{6}(x-1)^3-\frac{1}{12}(x-1)^4+\cdots,
$$

$$
y_2(x)=(x-1)-\frac{1}{2}(x-1)^2+\frac{1}{6}(x-1)^3-\frac{1}{6}(x-1)^4+\cdots.
$$

La solución general es $y=C_1y_1+C_2y_2$. La recurrencia liga tres coeficientes consecutivos, de modo que no se obtiene un término general elemental para cada solución.

## Resolución

El punto $x_0=1$ es un **punto ordinario**: escrito en forma estándar, $y''+\frac{1}{x}y'+y=0$, el único punto singular es $x=0$, que no coincide con $x_0=1$. Se busca entonces

$$
y=\sum_{n=0}^{\infty}a_n(x-1)^n.
$$

Conviene trasladar el centro con $t=x-1$, de modo que $x=1+t$ y las derivadas respecto de $x$ coinciden con las derivadas respecto de $t$. La ecuación se convierte en

$$
(1+t)y''+y'+(1+t)y=0,\qquad y=\sum_{n=0}^{\infty}a_n t^n.
$$

Las series de las derivadas son

$$
y'=\sum_{n=1}^{\infty}n\,a_n t^{n-1},\qquad
y''=\sum_{n=2}^{\infty}n(n-1)a_n t^{n-2}.
$$

Al sustituir y reindexar cada sumando como una serie en $t^n$ resulta

$$
\begin{aligned}
y'' &= \sum_{n=0}^{\infty}(n+2)(n+1)a_{n+2}t^n, \\
t\,y'' &= \sum_{n=0}^{\infty}(n+1)n\,a_{n+1}t^n, \\
y' &= \sum_{n=0}^{\infty}(n+1)a_{n+1}t^n, \\
(1+t)y &= \sum_{n=0}^{\infty}(a_n+a_{n-1})t^n,
\end{aligned}
$$

donde en la última serie se toma $a_{-1}=0$. Agrupando el coeficiente de $t^n$ se obtiene

$$
(n+2)(n+1)a_{n+2}+(n+1)^2a_{n+1}+a_n+a_{n-1}=0,\qquad n\ge 0,
$$

es decir,

$$
a_{n+2}=-\frac{(n+1)^2a_{n+1}+a_n+a_{n-1}}{(n+2)(n+1)},\qquad n\ge 0,\quad a_{-1}=0.
$$

Los coeficientes $a_0$ y $a_1$ son arbitrarios y generan dos soluciones linealmente independientes.

Para $y_1$ se toma $a_0=1$, $a_1=0$:

$$
a_2=-\frac{a_0+a_1}{2}=-\frac{1}{2},\qquad
a_3=-\frac{4a_2+a_1+a_0}{6}=\frac{1}{6},\qquad
a_4=-\frac{9a_3+a_2+a_1}{12}=-\frac{1}{12}.
$$

Para $y_2$ se toma $a_0=0$, $a_1=1$:

$$
a_2=-\frac{a_0+a_1}{2}=-\frac{1}{2},\qquad
a_3=-\frac{4a_2+a_1+a_0}{6}=\frac{1}{6},\qquad
a_4=-\frac{9a_3+a_2+a_1}{12}=-\frac{1}{6}.
$$

De ahí

$$
y_1(t)=1-\frac{1}{2}t^2+\frac{1}{6}t^3-\frac{1}{12}t^4+\cdots,
\qquad
y_2(t)=t-\frac{1}{2}t^2+\frac{1}{6}t^3-\frac{1}{6}t^4+\cdots.
$$

El wronskiano en $t=0$ vale $W=y_1(0)y_2'(0)-y_1'(0)y_2(0)=1\cdot 1-0\cdot 0=1$, de modo que las dos soluciones son linealmente independientes.

La recurrencia relaciona tres coeficientes consecutivos. No se reduce a productos sobre las subsucesiones par e impar, como ocurre con una recurrencia de dos términos, y por ello no existe un término general elemental; la solución queda descrita por la propia recurrencia.

Respecto al dominio, el único punto singular de la ecuación es $x=0$. La distancia de $x_0=1$ a ese punto es $1$, de modo que ambas series convergen al menos para $|x-1|<1$, es decir, en el intervalo $(0,2)$.

## Observaciones

La ecuación es la de Bessel de orden cero, $x^2y''+xy'+x^2y=0$. Sus soluciones canónicas $J_0(x)$ y $Y_0(x)$ no son funciones elementales, lo que concuerda con que la recurrencia de tres términos no admita un término general elemental.

El radio de convergencia garantizado lo fija el punto singular $x=0$ a través de su distancia a $x_0=1$. Soluciones particulares como $J_0(x)$, que es entera, pueden tener un radio mayor.
