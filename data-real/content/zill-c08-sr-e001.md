
## Enunciado

El vector $\mathbf{X} = k \begin{pmatrix} 4 \\ 5 \end{pmatrix}$ es una solución de $$\mathbf{X}' = \begin{pmatrix} 1 & 4 \\ 2 & -1 \end{pmatrix} \mathbf{X} - \begin{pmatrix} 8 \\ 1 \end{pmatrix}$$ para $k = \underline{\hspace{2cm}}$.

## Solución

$$
k = \boxed{\frac{1}{3}}.
$$

## Resolución

Con $\mathbf{X} = k\begin{pmatrix} 4 \\ 5 \end{pmatrix}$ las componentes del vector son constantes, de modo que $\mathbf{X}' = \mathbf{0}$.

La ecuación se escribe como $\mathbf{X}' = A\mathbf{X} - \mathbf{b}$, con

$$
A = \begin{pmatrix} 1 & 4 \\ 2 & -1 \end{pmatrix}, \qquad
\mathbf{b} = \begin{pmatrix} 8 \\ 1 \end{pmatrix}.
$$

Al sustituir $\mathbf{X}' = \mathbf{0}$ se obtiene la condición algebraica $A\mathbf{X} = \mathbf{b}$. El producto matricial es

$$
A\mathbf{X}
= \begin{pmatrix} 1 & 4 \\ 2 & -1 \end{pmatrix}
  \begin{pmatrix} 4k \\ 5k \end{pmatrix}
= \begin{pmatrix} 4k + 20k \\ 8k - 5k \end{pmatrix}
= \begin{pmatrix} 24k \\ 3k \end{pmatrix}.
$$

La igualdad con $\mathbf{b}$ da dos ecuaciones escalares:

$$
\begin{aligned}
24k &= 8, \\
3k &= 1.
\end{aligned}
$$

Ambas se satisfacen con $k = \frac{1}{3}$.

La comprobación es directa: con $k = \frac{1}{3}$ resulta $A\mathbf{X} = \begin{pmatrix} 8 \\ 1 \end{pmatrix} = \mathbf{b}$. Por tanto $A\mathbf{X} - \mathbf{b} = \mathbf{0} = \mathbf{X}'$ y el vector propuesto es solución.

## Observaciones

La solución constante $\mathbf{X} = \frac{1}{3}\begin{pmatrix} 4 \\ 5 \end{pmatrix}$ es un **punto de equilibrio** del sistema no homogéneo: es el único vector que anula $A\mathbf{X} - \mathbf{b}$. La unicidad se debe a que $\det A = -9 \ne 0$, condición que garantiza que $A\mathbf{X} = \mathbf{b}$ tenga solución única. Al no haber integración ni condiciones iniciales, no aparecen dominio, intervalo de validez ni soluciones singulares.
