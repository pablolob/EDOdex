
## Enunciado

En cada uno de los problemas 1 a 14, resuelva la ecuación diferencial dada por medio de una serie de potencias alrededor de un punto dado $x_0$. Halle la relación de recurrencia; encuentre también los cuatro primeros términos de cada una de dos soluciones linealmente independientes (a menos que la serie termine antes). Si es posible, encuentre el término general de cada solución.

9. $(1 + x^2)y'' - 4xy' + 6y = 0, \quad x_0 = 0$

## Solución

El punto $x_0=0$ es **ordinario** y la ecuación admite soluciones en **serie de potencias**. La relación de recurrencia es

$$
a_{n+2}=-\frac{(n-2)(n-3)}{(n+1)(n+2)}\,a_n,\qquad n=0,1,2,\dots
$$

Como los factores $n-2$ y $n-3$ anulan el numerador para $n=2$ y $n=3$, las dos series terminan. Tomando $a_0=1$, $a_1=0$ y luego $a_0=0$, $a_1=1$ resultan dos soluciones linealmente independientes:

$$
y_1(x)=1-3x^2,\qquad y_2(x)=x-\frac{x^3}{3}.
$$

La solución general es

$$
y=C_1(1-3x^2)+C_2\left(x-\frac{x^3}{3}\right).
$$

## Resolución

El coeficiente de $y''$ es $1+x^2$, que no se anula en $x_0=0$. Por tanto $x_0=0$ es un punto ordinario y se busca una solución de la forma

$$
y=\sum_{n=0}^{\infty}a_nx^n.
$$

La derivación término a término, válida dentro del intervalo de convergencia, da

$$
y'=\sum_{n=1}^{\infty}na_nx^{n-1},\qquad y''=\sum_{n=2}^{\infty}n(n-1)a_nx^{n-2}.
$$

Al sustituir en la ecuación resulta

$$
(1+x^2)\sum_{n=2}^{\infty}n(n-1)a_nx^{n-2}-4x\sum_{n=1}^{\infty}na_nx^{n-1}+6\sum_{n=0}^{\infty}a_nx^n=0.
$$

Se multiplica y se reescribe cada término con potencias $x^n$. El primer término requiere el cambio de índice $n\to n+2$:

$$
\sum_{n=0}^{\infty}(n+2)(n+1)a_{n+2}x^n+\sum_{n=2}^{\infty}n(n-1)a_nx^n-4\sum_{n=1}^{\infty}na_nx^n+6\sum_{n=0}^{\infty}a_nx^n=0.
$$

Por la unicidad de los coeficientes de una serie de potencias, el coeficiente de cada $x^n$ se anula.

Para $n=0$, solo contribuyen el primer y el último término:

$$
2a_2+6a_0=0\ \Longrightarrow\ a_2=-3a_0.
$$

Para $n=1$,

$$
6a_3-4a_1+6a_1=0\ \Longrightarrow\ a_3=-\frac{a_1}{3}.
$$

Para $n\ge 2$ contribuyen los cuatro términos:

$$
(n+2)(n+1)a_{n+2}+n(n-1)a_n-4na_n+6a_n=0.
$$

El corchete se factoriza:

$$
n(n-1)-4n+6=n^2-5n+6=(n-2)(n-3),
$$

de modo que

$$
(n+2)(n+1)a_{n+2}+(n-2)(n-3)a_n=0.
$$

Al despejar $a_{n+2}$, la misma fórmula reproduce los casos $n=0$ y $n=1$:

$$
a_{n+2}=-\frac{(n-2)(n-3)}{(n+1)(n+2)}\,a_n,\qquad n=0,1,2,\dots
$$

Los coeficientes $a_0$ y $a_1$ quedan arbitrarios. Para $n=2$ y $n=3$ el numerador se anula, así que $a_4=0$ y $a_5=0$. Para $n\ge 4$ el numerador no se anula, pero la recurrencia relaciona cada coeficiente con uno anterior ya nulo; por inducción, $a_n=0$ para todo $n\ge 4$. Ambas series terminan.

La cadena par genera la solución

$$
y_1=1-3x^2,
$$

y la cadena impar,

$$
y_2=x-\frac{x^3}{3}.
$$

Escritas hasta el cuarto término, $y_1=1+0x-3x^2+0x^3$ y $y_2=0+x+0x^2-\frac{x^3}{3}$. Ambas series terminan y su término general es el propio polinomio. Las funciones son linealmente independientes porque una es par y la otra impar, y su wronskiano en $x=0$ vale

$$
W(0)=y_1(0)y_2'(0)-y_1'(0)y_2(0)=1\cdot 1-0\cdot 0=1.
$$

Por tanto, la solución general es

$$
y=C_1(1-3x^2)+C_2\left(x-\frac{x^3}{3}\right).
$$

La sustitución directa confirma que cada solución satisface la ecuación:

$$
(1+x^2)(-6)-4x(-6x)+6(1-3x^2)=0,
$$

$$
(1+x^2)(-2x)-4x(1-x^2)+6\left(x-\frac{x^3}{3}\right)=0.
$$

## Observaciones

Los únicos puntos singulares de la ecuación son las raíces de $1+x^2=0$, es decir $x=\pm i$. El teorema de existencia para puntos ordinarios garantiza entonces un radio de convergencia de al menos $1$ alrededor de $x_0=0$. Aquí las soluciones son polinomios, de modo que convergen para todo $x$ real.

La anulación del factor $(n-2)(n-3)$ en la recurrencia es la causa de que ambas series terminen; por eso el enunciado contempla el caso en que la serie termina antes de completar cuatro términos. Cada solución conserva solo dos términos no nulos.
