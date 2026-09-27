
## Enunciado

El vector $\mathbf{X} = c_1 \begin{pmatrix} -1 \\ 1 \end{pmatrix} e^{-9t} + c_2 \begin{pmatrix} 5 \\ 3 \end{pmatrix} e^{7t}$ es solución del problema con valores iniciales $$\mathbf{X}' = \begin{pmatrix} 1 & 10 \\ 6 & -3 \end{pmatrix} \mathbf{X}, \quad \mathbf{X}(0) = \begin{pmatrix} 2 \\ 0 \end{pmatrix}$$ para $c_1 = \underline{\hspace{2cm}}$ y $c_2 = \underline{\hspace{2cm}}$.

## Solución

La condición inicial se satisface con

$$
c_1 = -\frac{3}{4}, \qquad c_2 = \frac{1}{4}.
$$

## Resolución

Se evalúa la solución general en $t = 0$. Como $e^{-9\cdot 0} = e^{7\cdot 0} = 1$,

$$
\mathbf{X}(0)
= c_1 \begin{pmatrix} -1 \\ 1 \end{pmatrix} + c_2 \begin{pmatrix} 5 \\ 3 \end{pmatrix}
= \begin{pmatrix} -c_1 + 5c_2 \\ c_1 + 3c_2 \end{pmatrix}.
$$

Al imponer $\mathbf{X}(0) = \begin{pmatrix} 2 \\ 0 \end{pmatrix}$ se obtiene el sistema

$$
\begin{aligned}
-c_1 + 5c_2 &= 2, \\
c_1 + 3c_2 &= 0.
\end{aligned}
$$

De la segunda ecuación, $c_1 = -3c_2$. La sustitución en la primera da

$$
3c_2 + 5c_2 = 8c_2 = 2,
$$

de donde $c_2 = \dfrac{1}{4}$ y $c_1 = -\dfrac{3}{4}$.

La comprobación directa es

$$
-\frac{3}{4} \begin{pmatrix} -1 \\ 1 \end{pmatrix}
+ \frac{1}{4} \begin{pmatrix} 5 \\ 3 \end{pmatrix}
= \begin{pmatrix} 3/4 \\ -3/4 \end{pmatrix} + \begin{pmatrix} 5/4 \\ 3/4 \end{pmatrix}
= \begin{pmatrix} 2 \\ 0 \end{pmatrix}.
$$

Por tanto, los valores $c_1 = -3/4$ y $c_2 = 1/4$ satisfacen la condición inicial.

## Observaciones

El enunciado proporciona la solución general, de modo que el cálculo de valores propios es innecesario. Los vectores dados son vectores propios de la matriz: $\begin{pmatrix} -1 \\ 1 \end{pmatrix}$ corresponde a $\lambda = -9$ y $\begin{pmatrix} 5 \\ 3 \end{pmatrix}$ a $\lambda = 7$. Como los valores propios son reales y distintos, esas dos soluciones forman un conjunto fundamental y la combinación es, en efecto, la solución general del sistema.
