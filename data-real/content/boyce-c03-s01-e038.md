
## Enunciado

En cada uno de los problemas 33 a 38 elimine las constantes $c_1$ y $c_2$ entre $y$, $y'$ y $y''$, para encontrar la ecuación diferencial que satisface la familia dada de funciones.

38. $y = c_1 \cosh x + c_2 \operatorname{senh} x$

## Solución

La familia de funciones satisface la ecuación diferencial

$$
y'' - y = 0.
$$

## Resolución

La familia contiene dos constantes arbitrarias, $c_1$ y $c_2$, de modo que la ecuación diferencial que la satisface es de **segundo orden**. Se deriva la expresión de $y$ dos veces:

$$
\begin{aligned}
y &= c_1\cosh x + c_2\sinh x, \\
y' &= c_1\sinh x + c_2\cosh x, \\
y'' &= c_1\cosh x + c_2\sinh x.
\end{aligned}
$$

Las derivadas de las funciones hiperbólicas son $\dfrac{d}{dx}\cosh x = \sinh x$ y $\dfrac{d}{dx}\sinh x = \cosh x$. Por eso $y''$ reproduce la expresión de $y$:

$$
y'' = c_1\cosh x + c_2\sinh x = y.
$$

Al pasar $y$ al miembro izquierdo se obtiene una relación sin las constantes $c_1$ y $c_2$:

$$
y'' - y = 0.
$$

Tanto $\cosh x$ como $\sinh x$ están definidas para todo $x\in\mathbb{R}$; la ecuación resultante no tiene puntos singulares.

## Observaciones

La ecuación $y''-y=0$ es **lineal, homogénea y de coeficientes constantes**. Su ecuación característica es $r^2-1=0$, con raíces $r=\pm 1$. La familia dada es su solución general escrita en la base hiperbólica $\{\cosh x,\,\sinh x\}$, equivalente a la base $\{e^{x},\,e^{-x}\}$. Por ser una ecuación lineal, no posee soluciones singulares.
