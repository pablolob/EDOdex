
## Enunciado

En cada uno de los problemas 1 a 14, resuelva la ecuación diferencial dada por medio de una serie de potencias alrededor de un punto dado $x_0$. Halle la relación de recurrencia; encuentre también los cuatro primeros términos de cada una de dos soluciones linealmente independientes (a menos que la serie termine antes). Si es posible, encuentre el término general de cada solución.

5. $(1 - x)y'' + y = 0, \quad x_0 = 0$

## Solución

La relación de recurrencia es

$$
(n+1)(n+2)\,a_{n+2} = n(n+1)\,a_{n+1} - a_n,\qquad n=0,1,2,\dots
$$

Dos soluciones linealmente independientes son

$$
y_1(x)=1-\frac{1}{2}x^2-\frac{1}{6}x^3-\frac{1}{24}x^4-\cdots,\qquad
y_2(x)=x-\frac{1}{6}x^3-\frac{1}{12}x^4-\frac{1}{24}x^5-\cdots
$$

La solución general es $y=a_0y_1+a_1y_2$, con $a_0$ y $a_1$ constantes arbitrarias. La recurrencia acopla cada coeficiente con los dos anteriores y no conduce a una expresión elemental para el término general.

## Resolución

Se busca una solución en **serie de potencias** centrada en $x_0=0$,

$$
y=\sum_{n=0}^{\infty}a_nx^n.
$$

El punto $x_0=0$ es un **punto ordinario**: el coeficiente de $y''$, $1-x$, no se anula en el origen. Por tanto la solución admite un desarrollo en serie de potencias de $x$.

Derivando término a término y reindexando para que todas las sumas queden en potencias $x^n$,

$$
\begin{aligned}
y''&=\sum_{n=2}^{\infty}n(n-1)a_nx^{n-2}=\sum_{n=0}^{\infty}(n+2)(n+1)a_{n+2}x^n, \\
xy''&=\sum_{n=2}^{\infty}n(n-1)a_nx^{n-1}=\sum_{n=1}^{\infty}(n+1)n\,a_{n+1}x^n.
\end{aligned}
$$

La ecuación se escribe $(1-x)y''+y=0$, es decir $y''-xy''+y=0$. Al sustituir las series,

$$
\sum_{n=0}^{\infty}(n+2)(n+1)a_{n+2}x^n
-\sum_{n=1}^{\infty}(n+1)n\,a_{n+1}x^n
+\sum_{n=0}^{\infty}a_nx^n=0.
$$

El término $n=0$ de la segunda suma es nulo, de modo que las tres sumas pueden agruparse desde $n=0$:

$$
\sum_{n=0}^{\infty}\big[(n+2)(n+1)a_{n+2}-n(n+1)a_{n+1}+a_n\big]x^n=0.
$$

Por unicidad del desarrollo en serie de potencias, cada coeficiente se anula:

$$
(n+2)(n+1)a_{n+2}-n(n+1)a_{n+1}+a_n=0.
$$

Al despejar $a_{n+2}$ se obtiene la relación de recurrencia

$$
a_{n+2}=\frac{n(n+1)a_{n+1}-a_n}{(n+1)(n+2)},\qquad n=0,1,2,\dots
$$

Los coeficientes $a_0$ y $a_1$ quedan libres y generan dos soluciones independientes. La elección $a_0=1$, $a_1=0$ define $y_1$:

$$
a_2=-\frac{a_0}{2}=-\frac{1}{2},\quad
a_3=\frac{2a_2-a_1}{6}=-\frac{1}{6},\quad
a_4=\frac{6a_3-a_2}{12}=-\frac{1}{24},\quad
a_5=\frac{12a_4-a_3}{20}=-\frac{1}{60}.
$$

La elección $a_0=0$, $a_1=1$ define $y_2$:

$$
a_2=0,\quad
a_3=\frac{2a_2-a_1}{6}=-\frac{1}{6},\quad
a_4=\frac{6a_3-a_2}{12}=-\frac{1}{12},\quad
a_5=\frac{12a_4-a_3}{20}=-\frac{1}{24}.
$$

Por tanto,

$$
y_1(x)=1-\frac{1}{2}x^2-\frac{1}{6}x^3-\frac{1}{24}x^4-\cdots,\qquad
y_2(x)=x-\frac{1}{6}x^3-\frac{1}{12}x^4-\frac{1}{24}x^5-\cdots
$$

Las dos series comienzan en $1$ y en $x$, respectivamente, así que su wronskiano en $x=0$ es $W(y_1,y_2)(0)=1\ne 0$ y son linealmente independientes. La recurrencia tiene coeficientes variables y acopla cada término con los dos anteriores; no se reduce a una fórmula cerrada para $a_n$, por lo que el término general no se expresa de forma elemental.

## Observaciones

El punto $x_0=0$ es ordinario y el punto singular más próximo es $x=1$, donde se anula el coeficiente de $y''$. En consecuencia, ambas series convergen al menos para $|x|<1$, que es la distancia de $x_0$ a la singularidad.

La ecuación no tiene coeficientes constantes ni admite soluciones elementales conocidas; la recurrencia acoplada describe por completo los coeficientes de las dos soluciones.
