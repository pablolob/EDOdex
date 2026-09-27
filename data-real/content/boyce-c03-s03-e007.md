
## Enunciado

El wronskiano de dos funciones es $W(x) = x \sin^2 x$. ¿Las funciones son linealmente independientes o linealmente dependientes? ¿Por qué?

## Solución

Las funciones son **linealmente independientes**, porque su wronskiano no es idénticamente nulo:

$$
W(x) = x\sin^2 x \not\equiv 0.
$$

En particular, $W(\pi/2) = \pi/2 \neq 0$.

## Resolución

Dos funciones $f$ y $g$ son linealmente dependientes en un intervalo si existen constantes $c_1$ y $c_2$, no ambas nulas, tales que

$$
c_1 f(x) + c_2 g(x) = 0
$$

para todo $x$ del intervalo. Al derivar esta igualdad se obtiene

$$
c_1 f'(x) + c_2 g'(x) = 0.
$$

Ambas igualdades forman el sistema

$$
\begin{pmatrix} f(x) & g(x) \\ f'(x) & g'(x) \end{pmatrix}
\begin{pmatrix} c_1 \\ c_2 \end{pmatrix}
= \begin{pmatrix} 0 \\ 0 \end{pmatrix}.
$$

Para que admita una solución $(c_1,c_2)$ no trivial, el determinante de la matriz debe anularse en cada $x$ del intervalo. Ese determinante es el **wronskiano**:

$$
W(f,g)(x) = f(x)g'(x) - f'(x)g(x) = 0 \quad \text{para todo } x.
$$

Por tanto, la dependencia lineal obliga a que el wronskiano sea idénticamente nulo. Por contraposición, un wronskiano que no es idénticamente nulo descarta la dependencia lineal y asegura la **independencia lineal**.

En este ejercicio, $W(x) = x\sin^2 x$ se anula en $x = 0$ y en $x = n\pi$ para todo entero $n$, pero no es idénticamente nulo. Basta evaluarlo en $x = \pi/2$:

$$
W\!\left(\frac{\pi}{2}\right)
= \frac{\pi}{2}\sin^2\!\left(\frac{\pi}{2}\right)
= \frac{\pi}{2}
\neq 0.
$$

Como el wronskiano toma un valor distinto de cero, las dos funciones son **linealmente independientes** en $\mathbb{R}$.

## Observaciones

Que el wronskiano se anule en puntos aislados no implica dependencia lineal; lo decisivo es que no sea idénticamente nulo en el intervalo.

El recíproco «$W \equiv 0$ implica dependencia lineal» no es válido para un par de funciones arbitrarias. Se cumple cuando ambas son soluciones de la misma ecuación lineal homogénea de segundo orden. Aquí solo se emplea la implicación directa (dependencia lineal $\Rightarrow$ $W \equiv 0$), que no requiere esa hipótesis.
