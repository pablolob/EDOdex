
## Enunciado

En cada uno de los problemas 15 a 18, determine los valores de $r$ para los que la ecuación diferencial dada tiene soluciones de la forma $y = e^{rx}$.

18. $y''' - 3y'' + 2y' = 0$

## Solución

La ecuación $y''' - 3y'' + 2y' = 0$ admite soluciones de la forma $y = e^{rx}$ para

$$
r = 0,\qquad r = 1,\qquad r = 2.
$$

Las soluciones correspondientes son $y = 1$, $y = e^{x}$ y $y = e^{2x}$.

## Resolución

Se sustituye $y = e^{rx}$ en la ecuación. Sus tres primeras derivadas son

$$
y' = r\,e^{rx}, \qquad y'' = r^{2}\,e^{rx}, \qquad y''' = r^{3}\,e^{rx}.
$$

Al sustituir en el miembro izquierdo se obtiene

$$
\begin{aligned}
y''' - 3y'' + 2y' &= r^{3} e^{rx} - 3r^{2} e^{rx} + 2r\,e^{rx} \\
&= \bigl(r^{3} - 3r^{2} + 2r\bigr)\,e^{rx}.
\end{aligned}
$$

La exponencial $e^{rx}$ no se anula para ningún valor real de $x$. Por tanto, la ecuación se satisface para todo $x$ exactamente cuando se anula el factor polinómico:

$$
r^{3} - 3r^{2} + 2r = 0.
$$

Se factoriza:

$$
r^{3} - 3r^{2} + 2r = r\,\bigl(r^{2} - 3r + 2\bigr) = r\,(r - 1)(r - 2).
$$

Los tres valores buscados son

$$
r = 0, \qquad r = 1, \qquad r = 2.
$$

Las soluciones correspondientes son $y = e^{0} = 1$, $y = e^{x}$ y $y = e^{2x}$; las tres satisfacen la ecuación.

## Observaciones

La elección de la forma $y = e^{rx}$ convierte la derivación en una multiplicación por $r$. Por eso el problema diferencial se reduce al problema algebraico $r^{3} - 3r^{2} + 2r = 0$, cuyas raíces son los valores de $r$ buscados. La raíz $r = 0$ produce la solución constante $y = 1$.
