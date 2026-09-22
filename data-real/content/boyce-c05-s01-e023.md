
## Enunciado

En cada uno de los problemas 19 a 23, compruebe la ecuación dada.

23. $x^2 \sum_{n=0}^{\infty} (n+r)(n+r-1)a_n x^{n+r-2} + \alpha x \sum_{n=0}^{\infty} (n+r)a_n x^{n+r-1} + \beta x^2 \sum_{n=0}^{\infty} a_n x^{n+r} = [r(r-1) + \alpha r] a_0 x^r + [(r+1)r + \alpha(r+1)] a_1 x^{r+1} + \sum_{n=2}^{\infty} [(n+r)(n+r-1)a_n + \alpha(n+r)a_n + \beta a_{n-2}] x^{n+r}, \quad x > 0,$

en donde $r$ es una constante.

## Solución

La igualdad es una identidad válida para todo $x>0$: al combinar las potencias de $x$ en cada sumando y reindexar la tercera serie, el miembro izquierdo coincide término a término con el miembro derecho,

$$
\begin{aligned}
&x^2 \sum_{n=0}^{\infty} (n+r)(n+r-1)a_n x^{n+r-2}
+ \alpha x \sum_{n=0}^{\infty} (n+r)a_n x^{n+r-1}
+ \beta x^2 \sum_{n=0}^{\infty} a_n x^{n+r} \\
&\quad = [r(r-1)+\alpha r]a_0 x^r
+ [(r+1)r+\alpha(r+1)]a_1 x^{r+1}
+ \sum_{n=2}^{\infty}\big[(n+r)(n+r-1)a_n + \alpha(n+r)a_n + \beta a_{n-2}\big]x^{n+r}.
\end{aligned}
$$

## Resolución

Cada sumando del miembro izquierdo se simplifica combinando las potencias de $x$. En el primer sumando, $x^2\,x^{n+r-2}=x^{n+r}$, de modo que

$$
x^2\sum_{n=0}^{\infty}(n+r)(n+r-1)a_n x^{n+r-2}
=\sum_{n=0}^{\infty}(n+r)(n+r-1)a_n x^{n+r}.
$$

De forma análoga, $x\,x^{n+r-1}=x^{n+r}$ y $x^2\,x^{n+r}=x^{n+r+2}$. Por tanto,

$$
\alpha x\sum_{n=0}^{\infty}(n+r)a_n x^{n+r-1}
=\alpha\sum_{n=0}^{\infty}(n+r)a_n x^{n+r},
$$

$$
\beta x^2\sum_{n=0}^{\infty}a_n x^{n+r}
=\beta\sum_{n=0}^{\infty}a_n x^{n+r+2}.
$$

En la última serie se cambia el índice $m=n+2$, equivalente a $n=m-2$. El límite inferior $n=0$ corresponde a $m=2$, y $n\to\infty$ corresponde a $m\to\infty$, por lo que

$$
\beta\sum_{n=0}^{\infty}a_n x^{n+r+2}
=\beta\sum_{m=2}^{\infty}a_{m-2}x^{m+r}.
$$

El índice de una serie es mudo; renombrarlo $n$ no altera la suma:

$$
\beta x^2\sum_{n=0}^{\infty}a_n x^{n+r}
=\beta\sum_{n=2}^{\infty}a_{n-2}x^{n+r}.
$$

Al reunir los tres sumandos, el miembro izquierdo resulta

$$
\sum_{n=0}^{\infty}\big[(n+r)(n+r-1)+\alpha(n+r)\big]a_n x^{n+r}
+\beta\sum_{n=2}^{\infty}a_{n-2}x^{n+r}.
$$

Los términos $n=0$ y $n=1$ de la primera serie no tienen contraparte en la segunda. Se extraen por separado y el resto se agrupa bajo un mismo sumatorio desde $n=2$:

$$
\begin{aligned}
&[r(r-1)+\alpha r]a_0 x^r + [(1+r)r+\alpha(1+r)]a_1 x^{r+1} \\
&\quad + \sum_{n=2}^{\infty}\big[(n+r)(n+r-1)a_n + \alpha(n+r)a_n + \beta a_{n-2}\big]x^{n+r}.
\end{aligned}
$$

Esta expresión coincide término a término con el miembro derecho. La igualdad es, por tanto, una identidad válida para todo $x>0$ y toda constante $r$.

## Observaciones

La identidad recoge el resultado de sustituir $y=\sum_{n=0}^{\infty}a_n x^{n+r}$ en $x^2 y''+\alpha x y'+\beta x^2 y$. Los coeficientes de $x^r$ y $x^{r+1}$ determinan la ecuación indicial, y la suma desde $n=2$ proporciona la relación de recurrencia.

El cambio de índice que empareja potencias iguales de $x$ es la herramienta básica del método de Frobenius. La condición $x>0$ garantiza que $x^r$ esté definida cuando $r$ no es entero.
