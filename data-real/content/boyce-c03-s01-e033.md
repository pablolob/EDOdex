
## Enunciado

En cada uno de los problemas 33 a 38 elimine las constantes $c_1$ y $c_2$ entre $y$, $y'$ y $y''$, para encontrar la ecuación diferencial que satisface la familia dada de funciones.

33. $y = c_1 e^x + c_2 e^{-x}$

## Solución

La familia satisface la ecuación diferencial **lineal, homogénea y de segundo orden**

$$
y'' - y = 0,
$$

definida para todo $x \in \mathbb{R}$.

## Resolución

Se derivan dos veces las funciones de la familia:

$$
\begin{aligned}
y   &= c_1 e^{x} + c_2 e^{-x}, \\[2pt]
y'  &= c_1 e^{x} - c_2 e^{-x}, \\[2pt]
y'' &= c_1 e^{x} + c_2 e^{-x}.
\end{aligned}
$$

La primera y la tercera expresión son idénticas, de modo que $y'' = y$. Las dos constantes quedan así eliminadas y la ecuación diferencial pedida es

$$
y'' - y = 0.
$$

**Verificación.** Al sustituir $y''$ y $y$ en el miembro izquierdo,

$$
y'' - y = \left(c_1 e^{x} + c_2 e^{-x}\right) - \left(c_1 e^{x} + c_2 e^{-x}\right) = 0,
$$

para todo $x \in \mathbb{R}$ y cualesquiera valores de $c_1$ y $c_2$.

## Observaciones

La ecuación obtenida es de segundo orden, lineal, homogénea y con coeficientes constantes. Su ecuación característica es $r^2 - 1 = 0$, con raíces $r = \pm 1$; por ello la familia dada es precisamente su solución general, como se estudia en esta sección. La misma familia admite la forma hiperbólica $y = A\cosh x + B\sinh x$, con $A = c_1 + c_2$ y $B = c_1 - c_2$.

El procedimiento es general: una familia con $n$ constantes arbitrarias origina una ecuación diferencial de orden $n$.

### Método alternativo: eliminación por sistema

También puede despejarse $c_1$ y $c_2$ de las dos primeras ecuaciones y sustituir en la tercera. Sumando y restando $y$ y $y'$ se obtiene $c_1 e^{x} = \dfrac{y + y'}{2}$ y $c_2 e^{-x} = \dfrac{y - y'}{2}$; al sustituir en $y'' = c_1 e^{x} + c_2 e^{-x}$ resulta $y'' = \dfrac{y + y'}{2} + \dfrac{y - y'}{2} = y$, es decir, la misma ecuación $y'' - y = 0$.
