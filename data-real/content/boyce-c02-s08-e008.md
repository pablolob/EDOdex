
## Enunciado

Determine si cada una de las ecuaciones de los problemas 1 a 12 es exacta. En caso de serlo, halle la solución.

8. $(e^x \sin y + 3y) \,dx - (3x - e^x \sin y) \,dy = 0$

## Solución

La ecuación **no es exacta**; por tanto, no se pide hallar su solución.

## Resolución

Una ecuación escrita en la forma $M(x,y)\,dx + N(x,y)\,dy = 0$ es exacta si sus derivadas parciales cruzadas coinciden:

$$
\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}.
$$

La ecuación dada se identifica con $M(x,y) = e^x \sin y + 3y$ y $N(x,y) = -(3x - e^x \sin y) = e^x \sin y - 3x$. Sus derivadas parciales son

$$
\begin{aligned}
\frac{\partial M}{\partial y} &= e^x \cos y + 3, \\
\frac{\partial N}{\partial x} &= e^x \sin y - 3.
\end{aligned}
$$

Ambas expresiones no son iguales para todo $(x,y)$. Por ejemplo, en $(x,y)=(0,0)$ se obtiene $\partial M/\partial y = 4$ y $\partial N/\partial x = -3$. La condición de exactitud no se cumple, de modo que la ecuación **no es exacta** y no existe una función potencial $F(x,y)$ con $dF = M\,dx + N\,dy$. En consecuencia, la instrucción de hallar la solución cuando la ecuación lo sea no se aplica.

## Observaciones

El criterio de exactitud solo compara las derivadas parciales cruzadas de los coeficientes de $dx$ y $dy$. Que una ecuación no sea exacta no significa que carezca de solución; significa que el método de las ecuaciones exactas no se aplica de forma directa.
