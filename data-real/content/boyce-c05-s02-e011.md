
## Enunciado

En cada uno de los problemas 1 a 14, resuelva la ecuación diferencial dada por medio de una serie de potencias alrededor de un punto dado $x_0$. Halle la relación de recurrencia; encuentre también los cuatro primeros términos de cada una de dos soluciones linealmente independientes (a menos que la serie termine antes). Si es posible, encuentre el término general de cada solución.

11. $(3 - x^2)y'' - 3xy' - y = 0, \quad x_0 = 0$

## Solución

La relación de recurrencia es

$$
a_{n+2}=\frac{n+1}{3(n+2)}\,a_n,\qquad n=0,1,2,\dots
$$

Dos soluciones linealmente independientes son

$$
y_1(x)=1+\frac{x^2}{6}+\frac{x^4}{24}+\frac{5x^6}{432}+\cdots,\qquad
y_2(x)=x+\frac{2x^3}{9}+\frac{8x^5}{135}+\frac{16x^7}{945}+\cdots
$$

y sus términos generales son

$$
y_1(x)=\sum_{k=0}^{\infty}\frac{(2k)!}{12^k(k!)^2}\,x^{2k},\qquad
y_2(x)=\sum_{k=0}^{\infty}\frac{4^k(k!)^2}{3^k(2k+1)!}\,x^{2k+1}.
$$

La solución general es $y=a_0y_1+a_1y_2$, con $a_0$ y $a_1$ constantes arbitrarias, y ambas series convergen para $|x|<\sqrt{3}$.

## Resolución

Se busca una solución en **serie de potencias** alrededor de $x_0=0$:

$$
y=\sum_{n=0}^{\infty}a_nx^n.
$$

El punto $x_0=0$ es ordinario: el coeficiente $3-x^2$ de $y''$ no se anula en el origen y los demás coeficientes son polinomios. La derivación término a término es válida dentro del intervalo de convergencia. Derivando y reindexando para escribir todo en potencias $x^n$,

$$
y'=\sum_{n=1}^{\infty}na_nx^{n-1},\qquad
y''=\sum_{n=2}^{\infty}n(n-1)a_nx^{n-2}.
$$

Al multiplicar por los coeficientes y reindexar cada serie,

$$
\begin{aligned}
3y''&=\sum_{n=0}^{\infty}3(n+2)(n+1)a_{n+2}x^n, \\
x^2y''&=\sum_{n=2}^{\infty}n(n-1)a_nx^n, \\
3xy'&=\sum_{n=1}^{\infty}3na_nx^n.
\end{aligned}
$$

Sustituyendo en $(3-x^2)y''-3xy'-y=0$ y agrupando el coeficiente de $x^n$, se obtiene

$$
\sum_{n=0}^{\infty}\Big[3(n+2)(n+1)a_{n+2}-n(n-1)a_n-3na_n-a_n\Big]x^n=0.
$$

Los factores $n(n-1)$ y $3n$ se anulan para $n=0$ y $n=1$, de modo que la suma extendida reproduce exactamente las series originales. Como la serie es idénticamente nula, cada coeficiente se anula:

$$
3(n+2)(n+1)a_{n+2}-\big(n(n-1)+3n+1\big)a_n=0,\qquad n\ge 0.
$$

Como $n(n-1)+3n+1=(n+1)^2$ y $n+1\ne 0$, la relación de recurrencia es

$$
a_{n+2}=\frac{n+1}{3(n+2)}\,a_n,\qquad n=0,1,2,\dots
$$

La recurrencia es de dos pasos: $a_0$ genera los coeficientes pares y $a_1$ los impares, las dos constantes arbitrarias de la ecuación de segundo orden.

Para la cadena par,

$$
a_2=\frac{a_0}{6},\qquad
a_4=\frac{3}{12}a_2=\frac{a_0}{24},\qquad
a_6=\frac{5}{18}a_4=\frac{5a_0}{432}.
$$

Para la cadena impar,

$$
a_3=\frac{2a_1}{9},\qquad
a_5=\frac{4}{15}a_3=\frac{8a_1}{135},\qquad
a_7=\frac{6}{21}a_5=\frac{16a_1}{945}.
$$

Los términos generales se obtienen por inducción. Con $n=2k$ en la recurrencia, $a_{2k+2}=\dfrac{2k+1}{6(k+1)}a_{2k}$, de donde

$$
a_{2k}=a_0\prod_{j=0}^{k-1}\frac{2j+1}{6(j+1)}
=a_0\frac{1\cdot 3\cdots(2k-1)}{6^kk!}
=a_0\frac{(2k)!}{12^k(k!)^2}.
$$

Con $n=2k+1$, $a_{2k+3}=\dfrac{2(k+1)}{3(2k+3)}a_{2k+1}$, de donde

$$
a_{2k+1}=a_1\prod_{j=0}^{k-1}\frac{2(j+1)}{3(2j+3)}
=a_1\frac{2^kk!}{3^k\cdot 3\cdot 5\cdots(2k+1)}
=a_1\frac{4^k(k!)^2}{3^k(2k+1)!}.
$$

Reuniendo ambas familias,

$$
y=a_0\sum_{k=0}^{\infty}\frac{(2k)!}{12^k(k!)^2}\,x^{2k}
+a_1\sum_{k=0}^{\infty}\frac{4^k(k!)^2}{3^k(2k+1)!}\,x^{2k+1}.
$$

Las dos series son linealmente independientes, pues sus primeros términos son $1$ y $x$, respectivamente.

## Observaciones

El coeficiente de $y''$ se anula en $x=\pm\sqrt{3}$, los puntos singulares más próximos al origen. Por el teorema de series en torno a un punto ordinario, cada solución converge al menos para $|x|<\sqrt{3}$, que es el radio que separa $x_0=0$ de esas singularidades.

La primera solución incluye solo potencias pares y la segunda solo impares; esa separación es consecuencia de que la recurrencia relaciona $a_n$ con $a_{n+2}$.
