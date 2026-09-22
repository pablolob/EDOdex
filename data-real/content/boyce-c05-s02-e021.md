
## Enunciado

La ecuación

$$y'' - 2xy' + \lambda y = 0, \quad -\infty < x < \infty,$$

en donde $\lambda$ es una constante, se conoce como ecuación de Hermite. Es una ecuación importante de la física matemática.

a) Encuentre los cuatro primeros términos de cada una de dos soluciones linealmente independientes alrededor de $x = 0$.

b) Observe que si $\lambda$ es un entero par no negativo, entonces una o la otra de las soluciones en serie termina y se convierte en un polinomio. Encuentre las soluciones polinomiales para $\lambda = 0, 2, 4, 6, 8 \text{ y } 10$. Observe que cada polinomio queda determinado sólo hasta una constante multiplicativa.

c) El polinomio de Hermite $H_n(x)$ se define como la solución polinomial de la ecuación de Hermite con $\lambda = 2n$, para la que el coeficiente de $x^n$ es $2^n$. Encuentre $H_0(x), \dots, H_5(x)$.

## Solución

La ecuación es de **segundo orden** y **lineal**. El punto $x=0$ es **ordinario**, porque los coeficientes son polinomios y el de $y''$ es la constante $1$. Sustituyendo $y=\sum_{n\ge 0}a_nx^n$ se obtiene la relación de recurrencia

$$
a_{n+2}=\frac{2n-\lambda}{(n+1)(n+2)}\,a_n,\qquad n=0,1,2,\dots
$$

que acopla coeficientes separados por dos índices.

**a)** Dos soluciones linealmente independientes, cada una con sus cuatro primeros términos, son

$$
y_1(x)=1-\frac{\lambda}{2}x^2+\frac{\lambda(\lambda-4)}{24}x^4-\frac{\lambda(\lambda-4)(\lambda-8)}{720}x^6+\cdots,
$$

$$
y_2(x)=x+\frac{2-\lambda}{6}x^3+\frac{(2-\lambda)(6-\lambda)}{120}x^5+\frac{(2-\lambda)(6-\lambda)(10-\lambda)}{5040}x^7+\cdots,
$$

y la solución general es $y=C_1y_1+C_2y_2$.

**b)** Las soluciones polinomiales son

$$
\begin{aligned}
\lambda=0 &: 1, & \lambda=2 &: x, \\
\lambda=4 &: 1-2x^2, & \lambda=6 &: x-\frac{2}{3}x^3, \\
\lambda=8 &: 1-4x^2+\frac{4}{3}x^4, & \lambda=10 &: x-\frac{4}{3}x^3+\frac{4}{15}x^5.
\end{aligned}
$$

Cada polinomio queda determinado salvo una constante multiplicativa.

**c)** Normalizando para que el coeficiente de $x^n$ sea $2^n$,

$$
\begin{aligned}
H_0(x) &= 1, \\
H_1(x) &= 2x, \\
H_2(x) &= 4x^2-2, \\
H_3(x) &= 8x^3-12x, \\
H_4(x) &= 16x^4-48x^2+12, \\
H_5(x) &= 32x^5-160x^3+120x.
\end{aligned}
$$

## Resolución

La ecuación es de **segundo orden** y **lineal**. El coeficiente de $y''$ es la constante $1$, que no se anula; los demás coeficientes son polinomios. Por tanto $x=0$ es un **punto ordinario** y la solución admite un desarrollo en **serie de potencias** de $x$.

Se propone

$$
y=\sum_{n=0}^{\infty}a_nx^n,
$$

con derivadas

$$
y'=\sum_{n=1}^{\infty}n\,a_nx^{n-1},\qquad y''=\sum_{n=2}^{\infty}n(n-1)a_nx^{n-2}.
$$

Al reescribir cada término en potencias $x^n$,

$$
\begin{aligned}
y'' &= \sum_{n=0}^{\infty}(n+2)(n+1)a_{n+2}x^n, \\
-2xy' &= \sum_{n=0}^{\infty}(-2n)\,a_nx^n, \\
\lambda y &= \sum_{n=0}^{\infty}\lambda\,a_nx^n.
\end{aligned}
$$

Por unicidad del desarrollo en serie de potencias, el coeficiente de cada $x^n$ se anula:

$$
(n+2)(n+1)a_{n+2}+(\lambda-2n)a_n=0.
$$

Despejando $a_{n+2}$ resulta la relación de recurrencia

$$
a_{n+2}=\frac{2n-\lambda}{(n+1)(n+2)}\,a_n,\qquad n=0,1,2,\dots
$$

La recurrencia solo relaciona $a_n$ con $a_{n+2}$, de modo que los coeficientes pares y los impares se determinan por separado. Los valores $a_0$ y $a_1$ quedan libres y constituyen las dos constantes de una ecuación lineal de segundo orden.

La elección $a_0=1$, $a_1=0$ genera la solución par. Con $\lambda$ general,

$$
\begin{aligned}
a_2 &= \frac{-\lambda}{1\cdot 2}=-\frac{\lambda}{2}, \\
a_4 &= \frac{4-\lambda}{3\cdot 4}\,a_2=\frac{\lambda(\lambda-4)}{24}, \\
a_6 &= \frac{8-\lambda}{5\cdot 6}\,a_4=-\frac{\lambda(\lambda-4)(\lambda-8)}{720}.
\end{aligned}
$$

La elección $a_0=0$, $a_1=1$ genera la solución impar:

$$
\begin{aligned}
a_3 &= \frac{2-\lambda}{2\cdot 3}=\frac{2-\lambda}{6}, \\
a_5 &= \frac{6-\lambda}{4\cdot 5}\,a_3=\frac{(2-\lambda)(6-\lambda)}{120}, \\
a_7 &= \frac{10-\lambda}{7\cdot 6}\,a_5=\frac{(2-\lambda)(6-\lambda)(10-\lambda)}{5040}.
\end{aligned}
$$

Con ello,

$$
\begin{aligned}
y_1(x) &= 1-\frac{\lambda}{2}x^2+\frac{\lambda(\lambda-4)}{24}x^4-\frac{\lambda(\lambda-4)(\lambda-8)}{720}x^6+\cdots, \\
y_2(x) &= x+\frac{2-\lambda}{6}x^3+\frac{(2-\lambda)(6-\lambda)}{120}x^5+\frac{(2-\lambda)(6-\lambda)(10-\lambda)}{5040}x^7+\cdots.
\end{aligned}
$$

Las dos series son linealmente independientes, porque en $x=0$ se tiene $y_1(0)=1$, $y_1'(0)=0$ y $y_2(0)=0$, $y_2'(0)=1$, de modo que el wronskiano vale $W(y_1,y_2)(0)=1\ne 0$.

**b)** En la recurrencia, un coeficiente se anula y corta la cadena cuando el factor $2n-\lambda$ se anula para algún $n$ de la paridad correspondiente. La solución par termina si $\lambda=4m$ para algún entero $m\ge 0$; la solución impar termina si $\lambda=4m+2$. En ambos casos el resultado es un polinomio de grado $n=\lambda/2$.

Para $\lambda=0$: $a_2=0$, de modo que la solución par se reduce a $1$.

Para $\lambda=2$: $a_3=0$, y la solución impar se reduce a $x$.

Para $\lambda=4$: $a_2=-\tfrac{4}{2}=-2$ y $a_4=\tfrac{4-4}{12}a_2=0$, luego la solución par es $1-2x^2$.

Para $\lambda=6$: $a_3=\tfrac{2-6}{6}=-\tfrac{2}{3}$ y $a_5=\tfrac{6-6}{20}a_3=0$, luego la solución impar es $x-\tfrac{2}{3}x^3$.

Para $\lambda=8$: $a_2=-4$, $a_4=\tfrac{4-8}{12}(-4)=\tfrac{4}{3}$ y $a_6=0$, luego la solución par es $1-4x^2+\tfrac{4}{3}x^4$.

Para $\lambda=10$: $a_3=\tfrac{2-10}{6}=-\tfrac{4}{3}$, $a_5=\tfrac{6-10}{20}\left(-\tfrac{4}{3}\right)=\tfrac{4}{15}$ y $a_7=0$, luego la solución impar es $x-\tfrac{4}{3}x^3+\tfrac{4}{15}x^5$.

**c)** Para $\lambda=2n$, la solución que termina es par si $n$ es par e impar si $n$ es impar; su grado es $n$. El coeficiente de $x^n$ en la solución sin normalizar es $a_n$. Se multiplica por el factor que lleva ese coeficiente a $2^n$.

Para $n=0$, la solución es $1$ y su coeficiente de $x^0$ ya es $1$, luego $H_0(x)=1$.

Para $n=1$, la solución es $x$ y el coeficiente de $x^1$ es $1$; el factor es $2$, luego $H_1(x)=2x$.

Para $n=2$, la solución es $1-2x^2$ y el coeficiente de $x^2$ es $-2$; el factor es $4/(-2)=-2$, luego $H_2(x)=-2(1-2x^2)=4x^2-2$.

Para $n=3$, la solución es $x-\tfrac{2}{3}x^3$ y el coeficiente de $x^3$ es $-\tfrac{2}{3}$; el factor es $8/(-\tfrac{2}{3})=-12$, luego $H_3(x)=-12\left(x-\tfrac{2}{3}x^3\right)=8x^3-12x$.

Para $n=4$, la solución es $1-4x^2+\tfrac{4}{3}x^4$ y el coeficiente de $x^4$ es $\tfrac{4}{3}$; el factor es $16/(\tfrac{4}{3})=12$, luego $H_4(x)=12\left(1-4x^2+\tfrac{4}{3}x^4\right)=16x^4-48x^2+12$.

Para $n=5$, la solución es $x-\tfrac{4}{3}x^3+\tfrac{4}{15}x^5$ y el coeficiente de $x^5$ es $\tfrac{4}{15}$; el factor es $32/(\tfrac{4}{15})=120$, luego $H_5(x)=120\left(x-\tfrac{4}{3}x^3+\tfrac{4}{15}x^5\right)=32x^5-160x^3+120x$.

## Observaciones

La recurrencia es de dos términos y separa las paridades. Por ello, fijados $a_0$ y $a_1$, cada solución queda determinada de forma única.

Los coeficientes de la ecuación son polinomios, de modo que no existen puntos singulares finitos. Las dos series convergen para todo $x\in\mathbb{R}$ y los polinomios de Hermite son válidos en toda la recta.

Cada $H_n$ tiene la paridad de $n$: $H_n(-x)=(-1)^nH_n(x)$. La definición fija la constante multiplicativa mediante el coeficiente principal $2^n$; sin esa normalización, cualquier múltiplo no nulo de $H_n$ también resuelve la ecuación.
