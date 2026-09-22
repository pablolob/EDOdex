
## Enunciado

En cada uno de los problemas 1 a 14, resuelva la ecuación diferencial dada por medio de una serie de potencias alrededor de un punto dado $x_0$. Halle la relación de recurrencia; encuentre también los cuatro primeros términos de cada una de dos soluciones linealmente independientes (a menos que la serie termine antes). Si es posible, encuentre el término general de cada solución.

13. $2y'' + xy' + 3y = 0, \quad x_0 = 0$

## Solución

La relación de recurrencia es

$$
a_{n+2}=-\frac{n+3}{2(n+2)(n+1)}\,a_n,\qquad n=0,1,2,\dots
$$

Dos soluciones linealmente independientes son

$$
y_1(x)=1-\frac{3}{4}x^2+\frac{5}{32}x^4-\frac{7}{384}x^6+\cdots,\qquad
y_2(x)=x-\frac{1}{3}x^3+\frac{1}{20}x^5-\frac{1}{210}x^7+\cdots
$$

y sus términos generales son

$$
y_1(x)=\sum_{n=0}^{\infty}(-1)^n\frac{2n+1}{4^n n!}\,x^{2n},\qquad
y_2(x)=\sum_{n=0}^{\infty}(-1)^n\frac{(n+1)!}{(2n+1)!}\,x^{2n+1}.
$$

La solución general es $y=a_0y_1+a_1y_2$, con $a_0$ y $a_1$ constantes arbitrarias.

## Resolución

Se busca una solución en **serie de potencias** alrededor de $x_0=0$:

$$
y=\sum_{n=0}^{\infty}a_nx^n.
$$

El punto $x_0=0$ es ordinario: el coeficiente de $y''$ es $2$ y los demás coeficientes son polinomios, de modo que no aparece ninguna singularidad en el origen.

Derivando término a término y reindexando para que todas las sumas queden en potencias $x^n$,

$$
\begin{aligned}
y'&=\sum_{n=1}^{\infty}na_nx^{n-1}=\sum_{n=0}^{\infty}(n+1)a_{n+1}x^n, \\
y''&=\sum_{n=2}^{\infty}n(n-1)a_nx^{n-2}=\sum_{n=0}^{\infty}(n+2)(n+1)a_{n+2}x^n, \\
xy'&=\sum_{n=1}^{\infty}na_nx^n=\sum_{n=0}^{\infty}na_nx^n.
\end{aligned}
$$

Sustituyendo en $2y''+xy'+3y=0$ y agrupando,

$$
\sum_{n=0}^{\infty}\big[2(n+2)(n+1)a_{n+2}+na_n+3a_n\big]x^n=0.
$$

Cada coeficiente debe anularse. Por tanto,

$$
2(n+2)(n+1)a_{n+2}+(n+3)a_n=0,
$$

y al despejar $a_{n+2}$ se obtiene la relación de recurrencia

$$
a_{n+2}=-\frac{n+3}{2(n+2)(n+1)}\,a_n,\qquad n=0,1,2,\dots
$$

La relación no impone condición sobre $a_0$ ni sobre $a_1$: ambos son arbitrarios y generan dos cadenas de coeficientes independientes.

Para la cadena de índice par, que parte de $a_0$,

$$
a_2=-\frac{3}{4}a_0,\qquad
a_4=-\frac{5}{24}a_2=\frac{5}{32}a_0,\qquad
a_6=-\frac{7}{60}a_4=-\frac{7}{384}a_0.
$$

Para la cadena de índice impar, que parte de $a_1$,

$$
a_3=-\frac{4}{12}a_1=-\frac{1}{3}a_1,\qquad
a_5=-\frac{6}{40}a_3=\frac{1}{20}a_1,\qquad
a_7=-\frac{8}{84}a_5=-\frac{1}{210}a_1.
$$

El término general se obtiene por inducción. Para los índices pares se propone

$$
a_{2k}=(-1)^k\frac{2k+1}{4^k k!}\,a_0.
$$

Al sustituir $n=2k$ en la recurrencia,

$$
a_{2k+2}=-\frac{2k+3}{2(2k+2)(2k+1)}\,a_{2k}
=(-1)^{k+1}\frac{2k+3}{4^{k+1}(k+1)!}\,a_0,
$$

que es la misma fórmula con $k$ reemplazada por $k+1$. Para los índices impares se propone

$$
a_{2k+1}=(-1)^k\frac{(k+1)!}{(2k+1)!}\,a_1.
$$

Al sustituir $n=2k+1$ en la recurrencia,

$$
a_{2k+3}=-\frac{2k+4}{2(2k+3)(2k+2)}\,a_{2k+1}
=(-1)^{k+1}\frac{(k+2)!}{(2k+3)!}\,a_1,
$$

que también reproduce la fórmula con $k$ reemplazada por $k+1$. Ambas cadenas quedan así resueltas.

Reuniendo las dos familias,

$$
y=a_0\sum_{n=0}^{\infty}(-1)^n\frac{2n+1}{4^n n!}\,x^{2n}
+a_1\sum_{n=0}^{\infty}(-1)^n\frac{(n+1)!}{(2n+1)!}\,x^{2n+1}.
$$

Las dos series que multiplican a $a_0$ y $a_1$ son linealmente independientes, pues sus primeros términos son $1$ y $x$, respectivamente.

## Observaciones

La ecuación no tiene puntos singulares: sus coeficientes son polinomios y el coeficiente de $y''$ es la constante $2\neq 0$. Por el teorema de existencia de soluciones en serie alrededor de un punto ordinario, ambas series convergen para todo $x\in\mathbb{R}$ y la solución es válida en toda la recta. El criterio del cociente confirma el radio infinito.

La serie de $y_1$ corresponde a una función elemental:

$$
y_1(x)=e^{-x^2/4}\left(1-\frac{x^2}{2}\right).
$$

Esta forma cerrada permite comprobar el resultado y reconocer que la solución general también se escribe como $y=C_1e^{-x^2/4}(2-x^2)+C_2y_2(x)$. La serie de $y_2$ no se reconoce como una función elemental.
