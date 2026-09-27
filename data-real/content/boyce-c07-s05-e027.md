
## Enunciado

**Reducción de orden.** Este es un método para tratar los sistemas que no tienen un conjunto completo de soluciones de la forma $\xi e^{rt}$. Considere el sistema
$$\mathbf{x}' = \begin{pmatrix} 3 & -2 \\ 2 & -2 \end{pmatrix} \mathbf{x}. \tag{i}$$
a) Compruebe que $\mathbf{x} = \begin{pmatrix} 2 \\ 1 \end{pmatrix} e^{2t}$ satisface la ecuación diferencial dada.
b) Introduzca una nueva variable dependiente por medio de la transformación
$$\mathbf{x} = \begin{pmatrix} 1 & 2e^{2t} \\ 0 & e^{2t} \end{pmatrix} \mathbf{y}. \tag{ii}$$
Observe que se obtiene esta transformación al sustituir la segunda columna de la matriz identidad por la solución conocida. Al sustituir $\mathbf{x}$ en (i), demuestre que $\mathbf{y}$ satisface el sistema de ecuaciones
$$\begin{pmatrix} 1 & 2e^{2t} \\ 0 & e^{2t} \end{pmatrix} \mathbf{y}' = \begin{pmatrix} 3 & 0 \\ 2 & 0 \end{pmatrix} \mathbf{y}. \tag{iii}$$
c) Resuelva la ecuación (iii) y demuestre que
$$\mathbf{y} = c_1 \begin{pmatrix} \frac{1}{2} e^{-t} \\ -\frac{1}{2} e^{-3t} \end{pmatrix} + c_2 \begin{pmatrix} 0 \\ 1 \end{pmatrix} \tag{iv}$$
en donde $c_1$ y $c_2$ son constantes arbitrarias.
d) Use la ecuación (ii), demuestre que
$$\mathbf{x} = -\frac{c_1}{6} \begin{pmatrix} 1 \\ 2 \end{pmatrix} e^{-t} + c_2 \begin{pmatrix} 2 \\ 1 \end{pmatrix} e^{2t}; \tag{v}$$
el primer término es una segunda solución independiente de la ecuación (i). Éste es el método de reducción de orden según se aplica a un sistema de ecuaciones de segundo orden.
