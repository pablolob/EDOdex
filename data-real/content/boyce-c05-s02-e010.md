
## Enunciado

En cada uno de los problemas 1 a 14, resuelva la ecuación diferencial dada por medio de una serie de potencias alrededor de un punto dado $x_0$. Halle la relación de recurrencia; encuentre también los cuatro primeros términos de cada una de dos soluciones linealmente independientes (a menos que la serie termine antes). Si es posible, encuentre el término general de cada solución.

10. $(4 - x^2)y'' + 2y = 0, \quad x_0 = 0$

## Solución

La relación de recurrencia es

$$
a_{n+2}=\frac{n-2}{4(n+2)}\,a_n,\qquad n=0,1,2,\dots
$$

Dos soluciones linealmente independientes son

$$
y_1(x)=a_0\left(1-\frac{x^2}{4}\right),
$$

$$
y_2(x)=a_1\left(x-\frac{x^3}{12}-\frac{x^5}{240}-\frac{x^7}{2240}-\cdots\right).
$$

La primera serie termina; el término general de la segunda es

$$
y_2(x)=a_1\left(x-\sum_{j=1}^{\infty}\frac{x^{2j+1}}{4^j(4j^2-1)}\right).
$$

La solución general es $y=a_0y_1+a_1y_2$, con $a_0$ y $a_1$ constantes arbitrarias, y es válida al menos en $|x|<2$.

## Resolución

Se busca una solución en **serie de potencias** centrada en $x_0=0$,

$$
y=\sum_{n=0}^{\infty}a_nx^n.
$$

El punto $x_0=0$ es un punto ordinario: el coeficiente $4-x^2$ no se anula en él. Los puntos singulares son $x=\pm2$, de modo que la búsqueda en serie es legítima en un entorno del origen. La derivación término a término es válida dentro del intervalo de convergencia. Reindexando para escribir todo con potencias $x^n$,

$$
y''=\sum_{n=2}^{\infty}n(n-1)a_nx^{n-2}=\sum_{n=0}^{\infty}(n+2)(n+1)a_{n+2}x^n.
$$

Por otra parte,

$$
x^2y''=\sum_{n=2}^{\infty}n(n-1)a_nx^n,
$$

suma que comienza en $n=2$ porque el factor $x^2$ acompaña a $y''$.

Al sustituir $y$, $y''$ y $x^2y''$ en $(4-x^2)y''+2y=0$ resulta

$$
4\sum_{n=0}^{\infty}(n+2)(n+1)a_{n+2}x^n
-\sum_{n=2}^{\infty}n(n-1)a_nx^n
+2\sum_{n=0}^{\infty}a_nx^n=0.
$$

Por unicidad de la representación en serie de potencias, cada coeficiente se anula. Los dos primeros fijan

$$
8a_2+2a_0=0\;\Rightarrow\;a_2=-\frac{a_0}{4},
\qquad
24a_3+2a_1=0\;\Rightarrow\;a_3=-\frac{a_1}{12}.
$$

Para $n\ge2$ el coeficiente de $x^n$ da

$$
4(n+2)(n+1)a_{n+2}-n(n-1)a_n+2a_n=0,
$$

y como $n(n-1)-2=(n-2)(n+1)$,

$$
a_{n+2}=\frac{(n-2)(n+1)}{4(n+2)(n+1)}\,a_n=\frac{n-2}{4(n+2)}\,a_n.
$$

La misma expresión evaluada en $n=0$ y $n=1$ reproduce $a_2$ y $a_3$, así que la recurrencia vale para todo $n\ge0$.

Los coeficientes de índice par parten de $a_0$. Se tiene

$$
a_2=-\frac{a_0}{4},
\qquad
a_4=\frac{0}{4\cdot4}\,a_2=0,
$$

y como el factor $n-2$ se anula en $n=2$, todos los coeficientes pares posteriores son múltiplos de $a_4$ y por tanto nulos. La serie par termina:

$$
y_1=a_0\left(1-\frac{x^2}{4}\right).
$$

Los coeficientes de índice impar parten de $a_1$:

$$
a_3=-\frac{a_1}{12},
\qquad
a_5=\frac{1}{20}a_3=-\frac{a_1}{240},
\qquad
a_7=\frac{3}{28}a_5=-\frac{a_1}{2240}.
$$

Así, los cuatro primeros términos de la segunda solución son

$$
y_2=a_1\left(x-\frac{x^3}{12}-\frac{x^5}{240}-\frac{x^7}{2240}-\cdots\right).
$$

Para el término general se itera $a_{2j+1}=\dfrac{2j-3}{4(2j+1)}\,a_{2j-1}$ con $j\ge2$ y $a_3=-\dfrac{a_1}{12}$. Por inducción,

$$
a_{2j+1}=-\frac{a_1}{4^j(4j^2-1)},\qquad j\ge1.
$$

En efecto, $4(j-1)^2-1=(2j-1)(2j-3)$, de modo que el factor $(2j-3)$ cancela al avanzar de $j-1$ a $j$. Por tanto,

$$
y_2=a_1\left(x-\sum_{j=1}^{\infty}\frac{x^{2j+1}}{4^j(4j^2-1)}\right).
$$

Las dos series son linealmente independientes porque sus primeros términos son $1$ y $x$, respectivamente. Ambas satisfacen la ecuación y la solución general es $y=a_0y_1+a_1y_2$.

## Observaciones

La solución par es un polinomio: el factor $n-2$ de la recurrencia anula $a_4$ y con él toda la cola par. Es el caso en que la serie termina antes de reunir cuatro términos.

La serie impar no termina. Su radio de convergencia es $2$, la distancia de $x_0=0$ al punto singular más próximo, $x=\pm2$; la solución polinómica $y_1$ converge en toda la recta.

La solución impar admite una forma cerrada. Por reducción de orden, a partir de $y_1=1-\dfrac{x^2}{4}$ se obtiene

$$
y_2=\frac{x}{2}+\frac{4-x^2}{8}\ln\!\left(\frac{2+x}{2-x}\right),
$$

cuyo desarrollo en serie reproduce los coeficientes calculados.
