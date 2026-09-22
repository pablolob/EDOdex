
## Enunciado

En cada uno de los problemas 1 a 14, resuelva la ecuación diferencial dada por medio de una serie de potencias alrededor de un punto dado $x_0$. Halle la relación de recurrencia; encuentre también los cuatro primeros términos de cada una de dos soluciones linealmente independientes (a menos que la serie termine antes). Si es posible, encuentre el término general de cada solución.

6. $(2 + x^2)y'' - xy' + 4y = 0, \quad x_0 = 0$

## Solución

Se busca una solución de la forma $y=\sum_{n=0}^{\infty}a_n x^n$. La sustitución en la ecuación conduce a la **relación de recurrencia**

$$
a_{n+2}=-\frac{n^2-2n+4}{2(n+2)(n+1)}\,a_n,\qquad n\ge 0.
$$

Dos soluciones linealmente independientes, cada una con sus cuatro primeros términos, son

$$
y_1(x)=1-x^2+\frac{1}{6}x^4-\frac{1}{30}x^6+\cdots,
$$

$$
y_2(x)=x-\frac{1}{4}x^3+\frac{7}{160}x^5-\frac{19}{1920}x^7+\cdots.
$$

La solución general es $y=C_1y_1+C_2y_2$. Tomando $a_0=1$ en $y_1$ y $a_1=1$ en $y_2$, el término general de cada solución, escrito por paridades, es

$$
a_{2k}=(-1)^k\prod_{j=0}^{k-1}\frac{j^2-j+1}{(j+1)(2j+1)},
\qquad
a_{2k+1}=(-1)^k\prod_{j=0}^{k-1}\frac{4j^2+3}{4(j+1)(2j+3)},
\qquad k\ge 1.
$$

## Resolución

El punto $x_0=0$ es un **punto ordinario**: el coeficiente de $y''$, $2+x^2$, no se anula en $x=0$ y es analítico en todo $\mathbb{R}$. Se propone entonces

$$
y=\sum_{n=0}^{\infty}a_n x^n,\qquad
y'=\sum_{n=1}^{\infty}n\,a_n x^{n-1},\qquad
y''=\sum_{n=2}^{\infty}n(n-1)a_n x^{n-2}.
$$

Al sustituir en la ecuación resulta

$$
(2+x^2)\sum_{n=2}^{\infty}n(n-1)a_n x^{n-2}
-x\sum_{n=1}^{\infty}n\,a_n x^{n-1}
+4\sum_{n=0}^{\infty}a_n x^n=0.
$$

Se reescribe cada término como una sola serie en potencias de $x$. El primer sumando se separa y se reindexa con $n\mapsto n+2$; en los demás, los términos con coeficiente nulo permiten comenzar en $n=0$:

$$
\begin{aligned}
2y'' &= \sum_{n=0}^{\infty}2(n+2)(n+1)a_{n+2}x^n, \\
x^2y'' &= \sum_{n=0}^{\infty}n(n-1)a_n x^n, \\
-xy' &= \sum_{n=0}^{\infty}(-n)a_n x^n, \\
4y &= \sum_{n=0}^{\infty}4a_n x^n.
\end{aligned}
$$

Agrupando el coeficiente de $x^n$ se obtiene

$$
2(n+2)(n+1)a_{n+2}+\bigl[n(n-1)-n+4\bigr]a_n=0.
$$

Como $n(n-1)-n+4=n^2-2n+4$, la relación de recurrencia es

$$
a_{n+2}=-\frac{n^2-2n+4}{2(n+2)(n+1)}\,a_n,\qquad n\ge 0.
$$

La recurrencia liga $a_n$ con $a_{n+2}$, de modo que las subsucesiones de índice par e impar quedan desacopladas. Los valores $a_0$ y $a_1$ son arbitrarios y generan dos soluciones linealmente independientes.

Para la solución par se toma $a_0=1$ y $a_1=0$:

$$
a_2=-a_0=-1,\qquad
a_4=-\frac{4}{24}\,a_2=\frac{1}{6},\qquad
a_6=-\frac{12}{60}\,a_4=-\frac{1}{30}.
$$

Para la solución impar se toma $a_0=0$ y $a_1=1$:

$$
a_3=-\frac{3}{12}\,a_1=-\frac{1}{4},\qquad
a_5=-\frac{7}{40}\,a_3=\frac{7}{160},\qquad
a_7=-\frac{19}{84}\,a_5=-\frac{19}{1920}.
$$

De ahí

$$
y_1(x)=1-x^2+\frac{1}{6}x^4-\frac{1}{30}x^6+\cdots,
\qquad
y_2(x)=x-\frac{1}{4}x^3+\frac{7}{160}x^5-\frac{19}{1920}x^7+\cdots.
$$

El término general se obtiene iterando la recurrencia por separado en cada paridad. Con $n=2k$ y con $n=2k+1$ la recurrencia toma la forma

$$
a_{2k+2}=-\frac{k^2-k+1}{(k+1)(2k+1)}\,a_{2k},
\qquad
a_{2k+3}=-\frac{4k^2+3}{4(k+1)(2k+3)}\,a_{2k+1}.
$$

Al iterar desde $a_0$ y desde $a_1$ resultan los productos de la sección anterior.

Respecto al dominio, los puntos singulares de la ecuación son las raíces de $2+x^2=0$, es decir $x=\pm i\sqrt{2}$. La distancia de $x_0=0$ a estos puntos es $\sqrt{2}$, de modo que ambas series convergen al menos para $|x|<\sqrt{2}$; el radio de convergencia es $\sqrt{2}$.

## Observaciones

La ecuación solo contiene potencias pares de $x$, por lo que es invariante frente al cambio $x\mapsto -x$. Esa simetría explica que admita una solución par $y_1$ y una solución impar $y_2$.

El término general se expresa como producto porque el factor $j^2-j+1$ no tiene raíces reales y no admite una factorización más simple. Para los coeficientes pares e impares no existe una fórmula cerrada elemental más compacta que la dada.
