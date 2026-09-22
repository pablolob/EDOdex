
## Enunciado

12. En este problema se indica la manera de proceder cuando hay un eigenvalor triple y sólo dos eigenvectores asociados. Considere el sistema

$$\mathbf{x}' = \mathbf{A}\mathbf{x} = \begin{pmatrix} 5 & -3 & -2 \\ 8 & -5 & -4 \\ -4 & 3 & 3 \end{pmatrix}\mathbf{x} \tag{i}$$

a) Demuestre que $r = 1$ es un eigenvalor triple de la matriz de coeficientes $\mathbf{A}$ y que solamente existen dos eigenvectores linealmente independientes

$$\boldsymbol{\xi}^{(1)} = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix}, \quad \boldsymbol{\xi}^{(2)} = \begin{pmatrix} 0 \\ 2 \\ -3 \end{pmatrix} \tag{ii}$$

Halle dos soluciones linealmente independientes $\mathbf{x}^{(1)}(t)$ y $\mathbf{x}^{(2)}(t)$ de la ecuación (i).
b) Para encontrar una tercera solución, suponga que

$$\mathbf{x}^{(3)}(t) = \boldsymbol{\xi}te^t + \boldsymbol{\eta}e^t \tag{iii}$$

y luego demuestre que $\boldsymbol{\xi}$ y $\boldsymbol{\eta}$ deben satisfacer

$$\begin{aligned}
(\mathbf{A} - \mathbf{I})\boldsymbol{\xi} &= \mathbf{0}, \tag{iv} \\
(\mathbf{A} - \mathbf{I})\boldsymbol{\eta} &= \boldsymbol{\xi}. \tag{v}
\end{aligned}$$

c) Demuestre que $\boldsymbol{\xi} = c_1\boldsymbol{\xi}^{(1)} + c_2\boldsymbol{\xi}^{(2)}$ en donde $c_1$ y $c_2$ son constantes arbitrarias, es la solución más general de la ecuación (iv). Demuestre que para resolver la ecuación (iv) es necesario que $c_1 = c_2$.
d) Es conveniente elegir $c_1 = c_2 = 2$. Para esta elección, demuestre que

$$\boldsymbol{\xi} = \begin{pmatrix} 2 \\ 4 \\ -2 \end{pmatrix}, \quad \boldsymbol{\eta} = \begin{pmatrix} 0 \\ 0 \\ -1 \end{pmatrix} + k_1 \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix} + k_2 \begin{pmatrix} 0 \\ 2 \\ -3 \end{pmatrix} \tag{vi}$$

en donde $k_1$ y $k_2$ son constantes arbitrarias. Aplique los resultados dados en las ecuaciones (iv) para encontrar una tercera solución linealmente independiente $\mathbf{x}^{(3)}(t)$ de la ecuación (i).
