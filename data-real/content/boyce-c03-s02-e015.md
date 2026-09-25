
## Enunciado

Demuestre que si $y = \phi(x)$ es una solución de la ecuación diferencial $y'' + p(x)y' + q(x)y = g(x)$, en donde $g(x)$ no siempre es cero, entonces $y = c\phi(x)$, en donde $c$ es cualquier constante diferente de uno, no es una solución. ¿Por qué?

## Solución

La función $y = c\phi(x)$ no es solución porque la ecuación es **lineal no homogénea**. Al multiplicar una solución por $c$ se multiplica también el término independiente:

$$
L[c\phi] = c\,L[\phi] = c\,g(x),
$$

de modo que la diferencia con el miembro derecho es $(c-1)g(x)$, que no es idénticamente nula porque $g$ no lo es y $c \neq 1$. La propiedad de escalado solo es válida para la ecuación homogénea asociada.

## Resolución

Se define el operador diferencial

$$
L[y] = y'' + p(x)y' + q(x)y.
$$

Para toda constante $c$ y toda función dos veces diferenciable $y$, la derivación es lineal y cada término se multiplica por $c$:

$$
\begin{aligned}
L[cy] &= (cy)'' + p(x)(cy)' + q(x)(cy) \\
&= c\left(y'' + p(x)y' + q(x)y\right) \\
&= c\,L[y].
\end{aligned}
$$

Por tanto, $L$ es **lineal**: conmuta con el producto por constantes.

La hipótesis del enunciado es que $\phi$ satisface

$$
L[\phi] = g(x),
$$

donde $g$ no es idénticamente nula en el intervalo. Para $y = c\phi$, la linealidad de $L$ da

$$
L[c\phi] = c\,L[\phi] = c\,g(x).
$$

Si $c\phi$ fuese solución, debería cumplirse $L[c\phi] = g(x)$, es decir,

$$
c\,g(x) = g(x) \quad\Longleftrightarrow\quad (c-1)\,g(x) = 0
$$

para todo $x$ del intervalo. Como $g$ no es idénticamente nula, existe un punto $x_0$ con $g(x_0) \neq 0$. Al evaluar la igualdad en $x_0$ se obtiene $(c-1)g(x_0) = 0$, de donde $c = 1$. Esto contradice la hipótesis $c \neq 1$. En consecuencia, $c\phi$ no es solución.

La razón es que la ecuación es lineal pero no homogénea. El conjunto de soluciones de una ecuación lineal homogénea es un espacio vectorial y es cerrado bajo la multiplicación por constantes. Cuando $g$ no es idénticamente nula, ese conjunto deja de ser un subespacio y la propiedad de homogeneidad se pierde. Solo el valor $c = 1$ deja la función $\phi$ sin cambios y conserva la solución.

## Observaciones

Si $g \equiv 0$, la ecuación es homogénea y $L[c\phi] = c \cdot 0 = 0$ para todo $c$; entonces $c\phi$ sí es solución. La falla de la propiedad de escalado es propia del caso no homogéneo.

De forma más general, si $\phi_p$ es una solución particular y $\{\phi_1, \phi_2\}$ un conjunto fundamental de la ecuación homogénea, toda solución se escribe $\phi_p + c_1\phi_1 + c_2\phi_2$. Multiplicar por $c$ altera la solución particular y por eso deja de satisfacer la ecuación salvo que $c = 1$.
