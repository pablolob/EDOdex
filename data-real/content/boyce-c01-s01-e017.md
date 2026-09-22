
## Enunciado

En cada uno de los problemas 15 a 18, determine los valores de $r$ para los que la ecuación diferencial dada tiene soluciones de la forma $y = e^{rx}$.

17. $y'' + y' - 6y = 0$

## Solución

La ecuación $y'' + y' - 6y = 0$ admite soluciones de la forma $y = e^{rx}$ para

$$
r = -3 \quad \text{y} \quad r = 2.
$$

## Resolución

Se sustituye $y = e^{rx}$ en la ecuación. Sus dos primeras derivadas son

$$
y' = r\,e^{rx}, \qquad y'' = r^{2}\,e^{rx}.
$$

Al sustituir en el miembro izquierdo se obtiene

$$
\begin{aligned}
y'' + y' - 6y &= r^{2} e^{rx} + r e^{rx} - 6 e^{rx} \\
&= (r^{2} + r - 6)\,e^{rx}.
\end{aligned}
$$

La exponencial $e^{rx}$ no se anula para ningún valor real de $x$. Por tanto, la igualdad $y'' + y' - 6y = 0$ se cumple para todo $x$ exactamente cuando se anula el factor restante:

$$
r^{2} + r - 6 = 0.
$$

El polinomio se factoriza como

$$
r^{2} + r - 6 = (r + 3)(r - 2),
$$

de donde

$$
r = -3 \quad \text{o} \quad r = 2.
$$

Ambos valores son admisibles: para $r = -3$ resulta $y = e^{-3x}$, y para $r = 2$ resulta $y = e^{2x}$. Las dos funciones satisfacen la ecuación.

## Observaciones

La elección de la forma $y = e^{rx}$ convierte la operación de derivar en una multiplicación por $r$. Por eso el problema diferencial se transforma en el problema algebraico $r^{2} + r - 6 = 0$, cuyas raíces son los valores de $r$ buscados.
