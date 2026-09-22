
## Enunciado

Encuentre los tres primeros términos de cada una de dos soluciones linealmente independientes en serie de potencias de $x$ de

$$y'' + (\sin x)y = 0.$$

Sugerencia: desarrolle $\sin x$ en una serie de Taylor alrededor de $x = 0$ y retenga un número suficiente de términos para calcular los coeficientes necesarios de $y = \sum_{n=0}^{\infty} a_n x^n$.

## Solución

Los tres primeros términos de dos soluciones linealmente independientes son

$$
y_1(x)=1-\frac{x^3}{6}+\frac{x^5}{120}+\cdots,\qquad
y_2(x)=x-\frac{x^4}{12}+\frac{x^6}{180}+\cdots.
$$

## Resolución

La ecuación es de **segundo orden** y **lineal**, con coeficientes analíticos. El punto $x=0$ es un **punto ordinario**, pues $\sin x$ es analítica en todo $\mathbb{R}$. Por el teorema de soluciones en serie alrededor de un punto ordinario, la ecuación admite dos soluciones en **serie de potencias** de $x$ linealmente independientes.

Se buscan en la forma

$$
y=\sum_{n=0}^{\infty}a_n x^n.
$$

La serie de Taylor de $\sin x$ alrededor de $x=0$,

$$
\sin x=x-\frac{x^3}{6}+\frac{x^5}{120}-\cdots,
$$

se sustituye en la ecuación. Con el índice desplazado en la segunda derivada,

$$
y''=\sum_{n=0}^{\infty}(n+2)(n+1)a_{n+2}x^n,
$$

el coeficiente de $x^n$ en $(\sin x)y$ es $a_{n-1}-\frac{1}{6}a_{n-3}+\frac{1}{120}a_{n-5}-\cdots$, donde $a_j=0$ para $j<0$. La anulación del coeficiente de $x^n$ en $y''+(\sin x)y$ da la recurrencia

$$
(n+2)(n+1)a_{n+2}+a_{n-1}-\frac{1}{6}a_{n-3}+\frac{1}{120}a_{n-5}-\cdots=0.
$$

Para $n=0,\dots,5$ resultan

$$
\begin{aligned}
2a_2&=0, & 6a_3+a_0&=0, & 12a_4+a_1&=0,\\
20a_5+a_2-\frac{a_0}{6}&=0, & 30a_6+a_3-\frac{a_1}{6}&=0, & 42a_7+a_4-\frac{a_2}{6}+\frac{a_0}{120}&=0.
\end{aligned}
$$

De aquí,

$$
a_2=0,\quad a_3=-\frac{a_0}{6},\quad a_4=-\frac{a_1}{12},\quad a_5=\frac{a_0}{120},\quad a_6=\frac{a_0+a_1}{180},\quad a_7=\frac{a_1}{504}-\frac{a_0}{5040}.
$$

Los coeficientes $a_0$ y $a_1$ son arbitrarios. La elección $(a_0,a_1)=(1,0)$ produce

$$
y_1(x)=1-\frac{x^3}{6}+\frac{x^5}{120}+\frac{x^6}{180}+\cdots,
$$

y la elección $(a_0,a_1)=(0,1)$ produce

$$
y_2(x)=x-\frac{x^4}{12}+\frac{x^6}{180}+\frac{x^7}{504}+\cdots.
$$

Las dos soluciones son linealmente independientes porque $y_1(0)=1$, $y_1'(0)=0$ y $y_2(0)=0$, $y_2'(0)=1$; el Wronskiano en $x=0$ vale $1$. Los tres primeros términos de cada una son

$$
y_1(x)=1-\frac{x^3}{6}+\frac{x^5}{120}+\cdots,\qquad
y_2(x)=x-\frac{x^4}{12}+\frac{x^6}{180}+\cdots.
$$

## Observaciones

Las soluciones no se separan en una par y una impar. Como $\sin x$ es impar, la recurrencia acopla ambas paridades y cada solución contiene potencias de los dos tipos.

Como $x=0$ es un punto ordinario y $\sin x$ es entera, las series convergen para todo $x$ real.
