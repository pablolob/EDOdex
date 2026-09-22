
## Enunciado

En cada uno de los problemas 13 a 18, compruebe que las funciones dadas son soluciones de la ecuación diferencial y determine su wronskiano.

16. $y^{iv} + 2y''' + y'' = 0; \quad 1, x, e^{-x}, x e^{-x}$

## Solución

Las cuatro funciones $1$, $x$, $e^{-x}$ y $xe^{-x}$ son soluciones de la ecuación diferencial, y su wronskiano es

$$
W(1, x, e^{-x}, x e^{-x}) = e^{-2x},
$$

que no se anula en ningún punto. Por tanto, las funciones son linealmente independientes sobre $\mathbb{R}$ y forman un conjunto fundamental de soluciones.

## Resolución

La ecuación es lineal, homogénea, de cuarto orden y con coeficientes constantes:

$$
y^{iv} + 2y''' + y'' = 0.
$$

Se comprueba la sustitución de cada función por separado.

Para $y_1 = 1$, todas las derivadas son nulas, de modo que $y_1^{iv} + 2y_1''' + y_1'' = 0 + 0 + 0 = 0$.

Para $y_2 = x$, se tiene $y_2' = 1$ y $y_2'' = y_2''' = y_2^{iv} = 0$. La sustitución da $0 + 0 + 0 = 0$.

Para $y_3 = e^{-x}$, las derivadas son

$$
y_3' = -e^{-x}, \qquad y_3'' = e^{-x}, \qquad y_3''' = -e^{-x}, \qquad y_3^{iv} = e^{-x}.
$$

Al sustituir,

$$
y_3^{iv} + 2y_3''' + y_3'' = e^{-x} - 2e^{-x} + e^{-x} = 0.
$$

Para $y_4 = x e^{-x}$, se aplica la **regla del producto** en cada derivación:

$$
\begin{aligned}
y_4' &= e^{-x} - x e^{-x} = (1 - x)e^{-x}, \\
y_4'' &= -e^{-x}(1 - x) - e^{-x} = (x - 2)e^{-x}, \\
y_4''' &= -e^{-x}(x - 2) + e^{-x} = (3 - x)e^{-x}, \\
y_4^{iv} &= -e^{-x}(3 - x) - e^{-x} = (x - 4)e^{-x}.
\end{aligned}
$$

Al sustituir,

$$
\begin{aligned}
y_4^{iv} + 2y_4''' + y_4''
&= (x - 4)e^{-x} + 2(3 - x)e^{-x} + (x - 2)e^{-x} \\
&= e^{-x}\bigl[(x - 4) + (6 - 2x) + (x - 2)\bigr] = 0.
\end{aligned}
$$

Las cuatro funciones satisfacen la ecuación.

El **wronskiano** se forma con las funciones y sus derivadas sucesivas:

$$
W(1, x, e^{-x}, x e^{-x}) =
\begin{vmatrix}
1 & x & e^{-x} & x e^{-x}\\
0 & 1 & -e^{-x} & (1 - x)e^{-x}\\
0 & 0 & e^{-x} & (x - 2)e^{-x}\\
0 & 0 & -e^{-x} & (3 - x)e^{-x}
\end{vmatrix}.
$$

Se desarrolla por la primera columna, donde solo el primer elemento es no nulo, y después por la primera columna del determinante $3\times 3$ resultante:

$$
\begin{aligned}
W &= \begin{vmatrix}
1 & -e^{-x} & (1 - x)e^{-x}\\
0 & e^{-x} & (x - 2)e^{-x}\\
0 & -e^{-x} & (3 - x)e^{-x}
\end{vmatrix}
= \begin{vmatrix}
e^{-x} & (x - 2)e^{-x}\\
-e^{-x} & (3 - x)e^{-x}
\end{vmatrix} \\
&= e^{-2x}\bigl[(3 - x) + (x - 2)\bigr] = e^{-2x}.
\end{aligned}
$$

Como $e^{-2x} > 0$ para todo $x$ real, el wronskiano no se anula en ningún punto de $\mathbb{R}$. En consecuencia, las cuatro soluciones son linealmente independientes sobre $\mathbb{R}$ y constituyen un conjunto fundamental de soluciones de la ecuación.

## Observaciones

Puesto que las cuatro funciones son soluciones linealmente independientes de una ecuación lineal homogénea de cuarto orden, la solución general es

$$
y = c_1 + c_2 x + c_3 e^{-x} + c_4 x e^{-x}.
$$

### Método alternativo: fórmula de Abel

La **fórmula de Abel** evita calcular el determinante de orden $4$. Para la ecuación $y^{iv} + p_1(x)y''' + \cdots = 0$, el wronskiano satisface $W' = -p_1(x)W$. Aquí $p_1(x) = 2$, de modo que

$$
W = C\exp\!\left(-\int 2\,dx\right) = Ce^{-2x}.
$$

Al evaluar en $x = 0$, donde los valores de las funciones y sus derivadas son $1, 0, 0, 0$; $0, 1, 0, 0$; $1, -1, 1, -1$; $0, 1, -2, 3$, el determinante resulta $C = 1$. Se recupera $W = e^{-2x}$.
