
## Enunciado

En cada uno de los problemas 1 a 6, determine el wronskiano de las funciones dadas.

5. $e^x \sin x, e^x \cos x$

## Solución

$$
W(e^x \sin x,\; e^x \cos x) = -e^{2x}.
$$

## Resolución

Sean $y_1 = e^x \sin x$ y $y_2 = e^x \cos x$. El **wronskiano** de dos funciones diferenciables se define como el determinante

$$
W(y_1, y_2) = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} = y_1 y_2' - y_1' y_2.
$$

Las derivadas se obtienen con la regla del producto:

$$
\begin{aligned}
y_1' &= e^x \sin x + e^x \cos x = e^x(\sin x + \cos x), \\
y_2' &= e^x \cos x - e^x \sin x = e^x(\cos x - \sin x).
\end{aligned}
$$

Al sustituir en el determinante,

$$
\begin{aligned}
W &= e^x \sin x \cdot e^x(\cos x - \sin x) - e^x(\sin x + \cos x) \cdot e^x \cos x \\
&= e^{2x}\bigl[\sin x \cos x - \sin^2 x - \sin x \cos x - \cos^2 x\bigr] \\
&= -e^{2x}\bigl(\sin^2 x + \cos^2 x\bigr) \\
&= -e^{2x}.
\end{aligned}
$$

El resultado es válido para todo $x \in \mathbb{R}$, pues los factores exponenciales y trigonométricos están definidos en todo el eje real.

## Observaciones

Como $W = -e^{2x}$ nunca se anula, las funciones $e^x \sin x$ y $e^x \cos x$ son linealmente independientes en $\mathbb{R}$. En particular, ambas resuelven $y'' - 2y' + 2y = 0$ y forman un conjunto fundamental de soluciones de esa ecuación.

### Método alternativo: fórmula de Abel

Si $y_1$ y $y_2$ resuelven $y'' + p(x)y' + q(x)y = 0$, la fórmula de Abel da $W = C\exp\!\left(-\int p(x)\,dx\right)$. Con $p(x) = -2$ resulta $W = Ce^{2x}$. Evaluando en $x = 0$,

$$
W(0) = y_1(0)y_2'(0) - y_1'(0)y_2(0) = 0 \cdot 1 - 1 \cdot 1 = -1,
$$

de donde $C = -1$ y $W = -e^{2x}$, en concordancia con el cálculo directo.
