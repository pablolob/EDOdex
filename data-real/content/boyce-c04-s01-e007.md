
## Enunciado

En cada uno de los problemas 7 a 12 elimine las constantes $c_1, c_2, \ldots, c_n$ entre las expresiones para $y$ y sus derivadas $y', \ldots, y^{(n-1)}$. Con ello, determine la ecuación diferencial que satisface la función dada.

7. $y = c_1 + c_2 x + c_3 x^2 + \sin x$

## Solución

La función satisface la ecuación diferencial **lineal**, **no homogénea** y de **tercer orden**

$$
y''' + \cos x = 0,
$$

válida para todo $x \in \mathbb{R}$.

## Resolución

La expresión contiene tres constantes arbitrarias, $c_1$, $c_2$ y $c_3$. Se aplica la **eliminación de constantes** por derivación sucesiva, hasta que ninguna aparezca. Con las derivadas elementales del polinomio y del seno,

$$
\begin{aligned}
y &= c_1 + c_2 x + c_3 x^2 + \sin x, \\
y' &= c_2 + 2 c_3 x + \cos x, \\
y'' &= 2 c_3 - \sin x, \\
y''' &= -\cos x.
\end{aligned}
$$

La tercera derivada ya no contiene constantes. Al reunir los términos se obtiene la ecuación diferencial

$$
y''' + \cos x = 0.
$$

La ecuación se satisface para cualesquiera valores de $c_1$, $c_2$ y $c_3$. En efecto, al sustituir $y''' = -\cos x$ en el miembro izquierdo resulta

$$
y''' + \cos x = -\cos x + \cos x = 0,
$$

idénticamente en $\mathbb{R}$. Como se eliminaron tres constantes, el orden de la ecuación es tres.

## Observaciones

El procedimiento es general: una familia con $n$ constantes arbitrarias origina una ecuación diferencial de orden $n$. Aquí se deriva tres veces porque hay tres constantes.

La ecuación no es homogénea por el término $\cos x$. Su ecuación homogénea asociada, $y''' = 0$, tiene por solución general $c_1 + c_2 x + c_3 x^2$, y $\sin x$ es una solución particular, pues $(\sin x)''' = -\cos x$. Así, la familia dada es la solución general de $y''' + \cos x = 0$.

### Método alternativo: derivar la diferencia

Como $y - \sin x = c_1 + c_2 x + c_3 x^2$ es un polinomio de grado a lo más dos, su tercera derivada es nula. Entonces

$$
(y - \sin x)''' = 0 \quad\Longrightarrow\quad y''' + \cos x = 0,
$$

que es la misma ecuación.
