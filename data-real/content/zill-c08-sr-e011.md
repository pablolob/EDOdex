
## Enunciado

Resuelva el sistema lineal dado. $$\mathbf{X}' = \begin{pmatrix} 2 & 8 \\ 0 & 4 \end{pmatrix} \mathbf{X} + \begin{pmatrix} 2 \\ 16t \end{pmatrix}$$

## Solución

$$
\mathbf{X}(t)=C_1 e^{2t}\begin{pmatrix} 1 \\ 0 \end{pmatrix}
+C_2 e^{4t}\begin{pmatrix} 4 \\ 1 \end{pmatrix}
+\begin{pmatrix} 16t+11 \\ -4t-1 \end{pmatrix}.
$$

## Resolución

El sistema se escribe en forma matricial como $\mathbf{X}'=A\mathbf{X}+\mathbf{F}(t)$ con

$$
A=\begin{pmatrix} 2 & 8 \\ 0 & 4 \end{pmatrix},
\qquad
\mathbf{F}(t)=\begin{pmatrix} 2 \\ 16t \end{pmatrix}.
$$

La solución general tiene la estructura $\mathbf{X}=\mathbf{X}_c+\mathbf{X}_p$, donde $\mathbf{X}_c$ resuelve el sistema homogéneo y $\mathbf{X}_p$ es una solución particular del no homogéneo.

Para el sistema homogéneo $\mathbf{X}'=A\mathbf{X}$ se aplica el **método de valores propios** y se buscan soluciones de la forma $\mathbf{X}=\boldsymbol{\xi}e^{\lambda t}$. Como $A$ es triangular, sus valores propios son los elementos de la diagonal: $\lambda_1=2$ y $\lambda_2=4$.

Para $\lambda_1=2$, la ecuación $(A-2I)\boldsymbol{\xi}=\mathbf{0}$ es

$$
\begin{pmatrix} 0 & 8 \\ 0 & 2 \end{pmatrix}
\begin{pmatrix} \xi_1 \\ \xi_2 \end{pmatrix}
=\begin{pmatrix} 0 \\ 0 \end{pmatrix},
$$

que exige $\xi_2=0$ con $\xi_1$ libre; se elige $\boldsymbol{\xi}^{(1)}=(1,0)^{T}$.

Para $\lambda_2=4$, la ecuación $(A-4I)\boldsymbol{\xi}=\mathbf{0}$ es

$$
\begin{pmatrix} -2 & 8 \\ 0 & 0 \end{pmatrix}
\begin{pmatrix} \xi_1 \\ \xi_2 \end{pmatrix}
=\begin{pmatrix} 0 \\ 0 \end{pmatrix},
$$

cuya solución es $\xi_1=4\xi_2$; se elige $\boldsymbol{\xi}^{(2)}=(4,1)^{T}$. Por tanto,

$$
\mathbf{X}_c=C_1 e^{2t}\begin{pmatrix} 1 \\ 0 \end{pmatrix}
+C_2 e^{4t}\begin{pmatrix} 4 \\ 1 \end{pmatrix}.
$$

El término no homogéneo es un polinomio de grado uno en $t$, así que se aplica **coeficientes indeterminados** con la propuesta $\mathbf{X}_p=\mathbf{a}t+\mathbf{b}$, donde $\mathbf{a}$ y $\mathbf{b}$ son vectores constantes. Como $\mathbf{X}_p'=\mathbf{a}$, la sustitución en la ecuación da

$$
\mathbf{a}=A\mathbf{a}\,t+A\mathbf{b}+\begin{pmatrix} 2 \\ 16t \end{pmatrix}.
$$

Al igualar los coeficientes de $t$ se obtiene $A\mathbf{a}+(0,16)^{T}=\mathbf{0}$, es decir,

$$
\begin{pmatrix} 2 & 8 \\ 0 & 4 \end{pmatrix}
\begin{pmatrix} a_1 \\ a_2 \end{pmatrix}
=\begin{pmatrix} 0 \\ -16 \end{pmatrix},
$$

de donde $4a_2=-16$ y $2a_1+8a_2=0$, luego $a_2=-4$ y $a_1=16$. Al igualar los términos constantes resulta $\mathbf{a}=A\mathbf{b}+(2,0)^{T}$, es decir,

$$
\begin{pmatrix} 2 & 8 \\ 0 & 4 \end{pmatrix}
\begin{pmatrix} b_1 \\ b_2 \end{pmatrix}
=\begin{pmatrix} 14 \\ -4 \end{pmatrix},
$$

de donde $4b_2=-4$ y $2b_1+8b_2=14$, luego $b_2=-1$ y $b_1=11$. Así,

$$
\mathbf{X}_p=\begin{pmatrix} 16t+11 \\ -4t-1 \end{pmatrix}.
$$

La solución general del sistema no homogéneo es $\mathbf{X}=\mathbf{X}_c+\mathbf{X}_p$:

$$
\mathbf{X}(t)=C_1 e^{2t}\begin{pmatrix} 1 \\ 0 \end{pmatrix}
+C_2 e^{4t}\begin{pmatrix} 4 \\ 1 \end{pmatrix}
+\begin{pmatrix} 16t+11 \\ -4t-1 \end{pmatrix}.
$$

La comprobación de $\mathbf{X}_p$ es directa. Con $\mathbf{X}_p'=(16,-4)^{T}$,

$$
A\mathbf{X}_p+\mathbf{F}
=\begin{pmatrix} 2(16t+11)+8(-4t-1)+2 \\ 4(-4t-1)+16t \end{pmatrix}
=\begin{pmatrix} 16 \\ -4 \end{pmatrix}
=\mathbf{X}_p'.
$$

Los valores propios de $A$ son reales y distintos, por lo que las dos soluciones homogéneas son linealmente independientes y no hay soluciones perdidas. La solución está definida para todo $t\in\mathbb{R}$.

## Observaciones

La matriz $A$ es triangular, de modo que sus valores propios se leen directamente en la diagonal. Esta misma estructura permite resolver el sistema de forma secuencial: la segunda ecuación es $x_2'=4x_2+16t$, una ecuación lineal de primer orden que se integra con factor integrante y alimenta después la primera.

El término no homogéneo es polinómico y ninguno de sus grados coincide con la exponencial de un valor propio, por lo que la propuesta $\mathbf{a}t+\mathbf{b}$ no requiere el factor $t$ de la regla de modificación.

### Método alternativo: variación de parámetros

Construida la matriz fundamental

$$
\Phi(t)=\begin{pmatrix} e^{2t} & 4e^{4t} \\ 0 & e^{4t} \end{pmatrix},
$$

la solución particular se obtiene como $\mathbf{X}_p=\Phi(t)\int\Phi^{-1}(t)\mathbf{F}(t)\,dt$. El cálculo conduce al mismo vector $\mathbf{X}_p=(16t+11,\,-4t-1)^{T}$.
