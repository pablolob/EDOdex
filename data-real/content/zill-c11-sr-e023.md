
## Enunciado

Suponga que la función $y = f(x)$ está definida sobre el intervalo $(-\infty, \infty)$.
**a)** Compruebe la identidad $f(x) = f_e(x) + f_o(x)$, donde
$$f_e(x) = \frac{f(x) + f(-x)}{2} \quad \text{y} \quad f_o(x) = \frac{f(x) - f(-x)}{2}$$
**b)** Demuestre que $f_e$ es una función par y $f_o$ es una función impar.

## Solución

La suma de las dos componentes reconstruye $f$:

$$
f_e(x) + f_o(x) = \frac{f(x) + f(-x)}{2} + \frac{f(x) - f(-x)}{2} = f(x).
$$

Además, $f_e$ es **par** y $f_o$ es **impar**.

## Resolución

**a)** La función $f$ está definida en todo $\mathbb{R}$, de modo que $f(x)$ y $f(-x)$ existen para cualquier $x$. Se suman las dos expresiones dadas:

$$
\begin{aligned}
f_e(x) + f_o(x)
&= \frac{f(x) + f(-x)}{2} + \frac{f(x) - f(-x)}{2} \\
&= \frac{\bigl(f(x) + f(-x)\bigr) + \bigl(f(x) - f(-x)\bigr)}{2} \\
&= \frac{2f(x)}{2} \\
&= f(x).
\end{aligned}
$$

Queda así comprobada la identidad para todo $x$.

**b)** Se evalúa $f_e$ en $-x$. Como la variable recorre todo $\mathbb{R}$, la expresión es válida en todo punto:

$$
f_e(-x) = \frac{f(-x) + f\bigl(-(-x)\bigr)}{2} = \frac{f(-x) + f(x)}{2} = \frac{f(x) + f(-x)}{2} = f_e(x).
$$

La igualdad $f_e(-x) = f_e(x)$ es la definición de función **par**, luego $f_e$ es par.

De forma análoga, se evalúa $f_o$ en $-x$:

$$
\begin{aligned}
f_o(-x)
&= \frac{f(-x) - f\bigl(-(-x)\bigr)}{2} \\
&= \frac{f(-x) - f(x)}{2} \\
&= -\frac{f(x) - f(-x)}{2} \\
&= -f_o(x).
\end{aligned}
$$

La igualdad $f_o(-x) = -f_o(x)$ es la definición de función **impar**, luego $f_o$ es impar.

## Observaciones

La descomposición es única: si $f = g + h$ con $g$ par y $h$ impar, entonces $g = f_e$ y $h = f_o$. Esta separación es la base de las extensiones par e impar que dan lugar a las series de Fourier en cosenos y en senos.
