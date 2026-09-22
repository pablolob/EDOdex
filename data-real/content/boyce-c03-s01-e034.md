
## Enunciado

En cada uno de los problemas 33 a 38 elimine las constantes $c_1$ y $c_2$ entre $y$, $y'$ y $y''$, para encontrar la ecuación diferencial que satisface la familia dada de funciones.

34. $y = c_1 \cos x + c_2 \sin x$

## Solución

La familia satisface la ecuación diferencial **lineal, homogénea y de segundo orden**

$$
y'' + y = 0,
$$

definida para todo $x \in \mathbb{R}$.

## Resolución

Se derivan dos veces las funciones de la familia:

$$
\begin{aligned}
y   &= c_1 \cos x + c_2 \sin x, \\[2pt]
y'  &= -c_1 \sin x + c_2 \cos x, \\[2pt]
y'' &= -c_1 \cos x - c_2 \sin x.
\end{aligned}
$$

El miembro derecho de $y''$ es el opuesto del de $y$, de modo que $y'' = -y$. Las dos constantes quedan así eliminadas y la ecuación diferencial pedida es

$$
y'' + y = 0.
$$

**Verificación.** Al sustituir $y''$ y $y$ en el miembro izquierdo,

$$
y'' + y = \left(-c_1 \cos x - c_2 \sin x\right) + \left(c_1 \cos x + c_2 \sin x\right) = 0,
$$

para todo $x \in \mathbb{R}$ y cualesquiera valores de $c_1$ y $c_2$.

## Observaciones

La ecuación obtenida es de segundo orden, lineal, homogénea y con coeficientes constantes. Su ecuación característica es $r^2 + 1 = 0$, con raíces $r = \pm i$; por ello la familia dada es precisamente su solución general, como se estudia en esta sección. El procedimiento es general: una familia con $n$ constantes arbitrarias origina una ecuación diferencial de orden $n$.

### Método alternativo: eliminación por sistema

También puede despejarse $c_1$ y $c_2$ de las dos primeras ecuaciones y sustituir en la tercera. Multiplicando $y$ por $\cos x$ y $y'$ por $\sin x$, y restando, resulta $c_1 = y \cos x - y' \sin x$; de forma análoga, $c_2 = y \sin x + y' \cos x$. Al sustituir en $y'' = -c_1 \cos x - c_2 \sin x$ se obtiene $y'' = -y$, es decir, la misma ecuación $y'' + y = 0$.
