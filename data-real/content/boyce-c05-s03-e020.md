
## Enunciado

Demuestre que dos soluciones linealmente independientes de la ecuación de Legendre para $|x| < 1$ son

$$y_1(x) = 1 + \sum_{m=1}^{\infty} (-1)^m \frac{\alpha(\alpha - 2)(\alpha - 4) \cdots (\alpha - 2m + 2)(\alpha + 1)(\alpha + 3) \cdots (\alpha + 2m - 1)}{(2m)!} x^{2m},$$

$$y_2(x) = x + \sum_{m=1}^{\infty} (-1)^m \frac{(\alpha - 1)(\alpha - 3) \cdots (\alpha - 2m + 1)(\alpha + 2)(\alpha + 4) \cdots (\alpha + 2m)}{(2m + 1)!} x^{2m + 1}.$$

## Solución

La ecuación de Legendre es

$$(1-x^2)y'' - 2xy' + \alpha(\alpha+1)y = 0,$$

y su solución en **serie de potencias** en torno al punto ordinario $x=0$, $y=\sum_{n=0}^{\infty}a_nx^n$, tiene coeficientes regidos por la **relación de recurrencia**

$$a_{n+2} = -\frac{(\alpha-n)(\alpha+n+1)}{(n+1)(n+2)}\,a_n, \qquad n\ge 0.$$

La elección $a_0=1$, $a_1=0$ produce la serie par $y_1$; la elección $a_0=0$, $a_1=1$ produce la serie impar $y_2$. Ambas convergen al menos para $|x|<1$ y son linealmente independientes, porque $W(y_1,y_2)(0)=1$.

## Resolución

La ecuación de Legendre es

$$(1-x^2)y''-2xy'+\alpha(\alpha+1)y=0.$$

El punto $x=0$ es un **punto ordinario**: los coeficientes son polinomios y $1-x^2\ne 0$ en $x=0$. Los puntos singulares son $x=\pm 1$, los más próximos al origen. Por tanto, las soluciones admiten un desarrollo en **serie de potencias** de $x$ que converge al menos para $|x|<1$.

Se busca entonces

$$
y=\sum_{n=0}^{\infty}a_nx^n,\qquad
y'=\sum_{n=1}^{\infty}n\,a_nx^{n-1},\qquad
y''=\sum_{n=2}^{\infty}n(n-1)a_nx^{n-2}.
$$

Al sustituir en la ecuación,

$$
\begin{aligned}
(1-x^2)y''-2xy'+\alpha(\alpha+1)y
={}& \sum_{n=2}^{\infty} n(n-1)a_n x^{n-2}
-\sum_{n=2}^{\infty} n(n-1)a_n x^{n} \\
&-2\sum_{n=1}^{\infty} n a_n x^{n}
+\alpha(\alpha+1)\sum_{n=0}^{\infty} a_n x^{n}.
\end{aligned}
$$

La primera suma se reindexa con $k=n-2$. En las restantes, los términos con $n=0$ y $n=1$ se anulan, de modo que también pueden escribirse desde $k=0$. Al agrupar el coeficiente de $x^k$ e igualarlo a cero,

$$
(k+2)(k+1)a_{k+2} - k(k-1)a_k - 2k\,a_k + \alpha(\alpha+1)a_k = 0.
$$

Por tanto,

$$
(k+2)(k+1)a_{k+2} = \left[k^2+k-\alpha(\alpha+1)\right]a_k.
$$

El polinomio se factoriza como $k^2+k-\alpha(\alpha+1)=(k-\alpha)(k+\alpha+1)$, y la **relación de recurrencia** resulta

$$
a_{k+2} = -\frac{(\alpha-k)(\alpha+k+1)}{(k+1)(k+2)}\,a_k, \qquad k\ge 0.
$$

Esta recurrencia liga cada coeficiente con el situado dos posiciones antes. Los coeficientes de índice par se determinan por $a_0$ y los de índice impar por $a_1$, sin mezclarse. Se obtienen así dos familias de soluciones.

**Solución par.** Con $a_0=1$ y $a_1=0$ los coeficientes impares se anulan. La recurrencia da

$$
a_2 = -\frac{\alpha(\alpha+1)}{2!},\qquad
a_4 = \frac{\alpha(\alpha-2)(\alpha+1)(\alpha+3)}{4!},\qquad\ldots
$$

Por inducción, para $m\ge 1$,

$$
a_{2m} = (-1)^m\,
\frac{\alpha(\alpha-2)\cdots(\alpha-2m+2)\,(\alpha+1)(\alpha+3)\cdots(\alpha+2m-1)}{(2m)!}.
$$

Sustituyendo estos coeficientes se obtiene la serie par

$$
y_1(x) = 1 + \sum_{m=1}^{\infty} (-1)^m \frac{\alpha(\alpha - 2)(\alpha - 4) \cdots (\alpha - 2m + 2)(\alpha + 1)(\alpha + 3) \cdots (\alpha + 2m - 1)}{(2m)!} x^{2m}.
$$

**Solución impar.** Con $a_0=0$ y $a_1=1$ los coeficientes pares se anulan. La recurrencia da

$$
a_3 = -\frac{(\alpha-1)(\alpha+2)}{3!},\qquad
a_5 = \frac{(\alpha-1)(\alpha-3)(\alpha+2)(\alpha+4)}{5!},\qquad\ldots
$$

y, por inducción, para $m\ge 1$,

$$
a_{2m+1} = (-1)^m\,
\frac{(\alpha-1)(\alpha-3)\cdots(\alpha-2m+1)\,(\alpha+2)(\alpha+4)\cdots(\alpha+2m)}{(2m+1)!}.
$$

De aquí resulta la serie impar

$$
y_2(x) = x + \sum_{m=1}^{\infty} (-1)^m \frac{(\alpha - 1)(\alpha - 3) \cdots (\alpha - 2m + 1)(\alpha + 2)(\alpha + 4) \cdots (\alpha + 2m)}{(2m + 1)!} x^{2m + 1}.
$$

**Independencia lineal.** En $x=0$ las series valen $y_1(0)=1$, $y_1'(0)=0$ y $y_2(0)=0$, $y_2'(0)=1$. Su wronskiano en el origen es

$$
W(y_1,y_2)(0) = y_1(0)y_2'(0)-y_1'(0)y_2(0) = 1 \ne 0.
$$

Por tanto, $y_1$ y $y_2$ son linealmente independientes. Como la ecuación es lineal de segundo orden y $x=0$ es un punto ordinario, toda solución para $|x|<1$ es una combinación lineal $y=c_1y_1+c_2y_2$.

## Observaciones

La recurrencia es de dos pasos: cada coeficiente depende del de dos posiciones antes. Por eso la paridad separa las soluciones y basta conocer $a_0$ y $a_1$ para determinar toda la serie.

El radio de convergencia de ambas series es al menos $1$, determinado por los puntos singulares de la ecuación en $x=\pm 1$. Si $\alpha$ es un entero no negativo, uno de los factores $(\alpha-k)$ de la recurrencia se anula y la serie de la misma paridad termina, lo que da lugar a los polinomios de Legendre.
