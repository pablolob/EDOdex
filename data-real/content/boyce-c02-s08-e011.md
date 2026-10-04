
## Enunciado

Determine si cada una de las ecuaciones de los problemas 1 a 12 es exacta. En caso de serlo, halle la solución.

11. $(x \ln y + xy) \,dx + (y \ln x + xy) \,dy = 0; \quad x > 0, \ y > 0$

## Solución

La ecuación **no es exacta**. El test de exactitud falla porque

$$
\frac{\partial M}{\partial y} = \frac{x}{y} + x, \qquad \frac{\partial N}{\partial x} = \frac{y}{x} + y,
$$

y estas expresiones no coinciden. Al no ser exacta, no se solicita su solución.

## Resolución

Se identifica la ecuación con la forma $M(x,y)\,dx + N(x,y)\,dy = 0$, de modo que

$$
M(x,y) = x \ln y + xy, \qquad N(x,y) = y \ln x + xy.
$$

Se aplica el **test de exactitud**, que compara las derivadas parciales cruzadas. En la región $x > 0$, $y > 0$,

$$
\begin{aligned}
\frac{\partial M}{\partial y} &= x \cdot \frac{1}{y} + x = \frac{x}{y} + x, \\
\frac{\partial N}{\partial x} &= y \cdot \frac{1}{x} + y = \frac{y}{x} + y.
\end{aligned}
$$

Las dos derivadas no son iguales: por ejemplo, en $(x, y) = (1, 2)$ resultan $\partial M/\partial y = 3/2$ y $\partial N/\partial x = 4$. Como la igualdad debe cumplirse en toda la región para que la ecuación sea exacta, el test no se satisface. Por tanto, la ecuación **no es exacta** y no procede hallar una función potencial.

## Observaciones

La no exactitud no es un caso marginal: $\partial M/\partial y$ y $\partial N/\partial x$ son funciones distintas de $x$ e $y$ en todo el cuadrante $x > 0$, $y > 0$. Los logaritmos exigen las restricciones $x > 0$ e $y > 0$ que fija el enunciado.

El método del **factor integrante** permitiría transformar la ecuación en exacta, pero el enunciado solo pide decidir la exactitud y resolver en caso afirmativo; por ello no se aplica aquí.
