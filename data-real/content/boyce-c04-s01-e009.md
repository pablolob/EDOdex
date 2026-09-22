
## Enunciado

En cada uno de los problemas 7 a 12, determine si las funciones dadas son linealmente dependientes o independientes. Si son linealmente dependientes, halle una relación lineal entre ellas.

9. $y = c_1 e^x + c_2 e^{-x} + c_3 e^{2x}$

## Solución

Las funciones $e^x$, $e^{-x}$ y $e^{2x}$ son **linealmente independientes**. Como no son linealmente dependientes, no existe relación lineal entre ellas. Su wronskiano es

$$
W(x) = -6e^{2x},
$$

que no se anula en ningún punto.

## Resolución

Las funciones que se comparan son los factores que multiplican a las constantes arbitrarias en la expresión dada:

$$
f_1(x) = e^x, \qquad f_2(x) = e^{-x}, \qquad f_3(x) = e^{2x}.
$$

Tres funciones son linealmente dependientes en un intervalo si existen constantes $c_1, c_2, c_3$, no todas nulas, tales que $c_1 f_1 + c_2 f_2 + c_3 f_3 = 0$ en todo el intervalo. El **wronskiano** decide el caso: si $W(f_1, f_2, f_3)(x) \ne 0$ en algún punto del intervalo, las funciones son linealmente independientes.

Se calculan las dos primeras derivadas de cada función:

$$
\begin{aligned}
f_1 = e^{x}, \quad & f_1' = e^{x}, \quad & f_1'' = e^{x}, \\
f_2 = e^{-x}, \quad & f_2' = -e^{-x}, \quad & f_2'' = e^{-x}, \\
f_3 = e^{2x}, \quad & f_3' = 2e^{2x}, \quad & f_3'' = 4e^{2x}.
\end{aligned}
$$

Con ellas se forma el wronskiano

$$
W(x) = \begin{vmatrix}
e^{x} & e^{-x} & e^{2x} \\
e^{x} & -e^{-x} & 2e^{2x} \\
e^{x} & e^{-x} & 4e^{2x}
\end{vmatrix}.
$$

Se extrae de cada columna el factor exponencial correspondiente:

$$
W(x) = e^{x} e^{-x} e^{2x} \begin{vmatrix}
1 & 1 & 1 \\
1 & -1 & 2 \\
1 & 1 & 4
\end{vmatrix}
= e^{2x} \begin{vmatrix}
1 & 1 & 1 \\
1 & -1 & 2 \\
1 & 1 & 4
\end{vmatrix}.
$$

El determinante restante es

$$
\begin{vmatrix}
1 & 1 & 1 \\
1 & -1 & 2 \\
1 & 1 & 4
\end{vmatrix}
= 1\,(-4 - 2) - 1\,(4 - 2) + 1\,(1 + 1) = -6 - 2 + 2 = -6.
$$

Por tanto,

$$
W(x) = -6e^{2x},
$$

que es distinto de cero para todo $x \in \mathbb{R}$. Al existir puntos donde el wronskiano no se anula, las tres funciones son linealmente independientes y no hay ninguna relación lineal que las ligue.

## Observaciones

Las tres funciones son soluciones de la ecuación lineal homogénea $y''' - 2y'' - y' + 2y = 0$, cuya ecuación característica tiene raíces $1$, $-1$ y $2$. El wronskiano distinto de cero confirma que forman un conjunto fundamental de soluciones.

### Método alternativo: evaluación directa de la combinación lineal

También puede razonarse sin el wronskiano. Si $c_1 e^x + c_2 e^{-x} + c_3 e^{2x} = 0$ para todo $x$, al dividir entre $e^{2x}$ resulta $c_1 e^{-x} + c_2 e^{-3x} + c_3 = 0$. Al tomar el límite $x \to \infty$ se obtiene $c_3 = 0$; multiplicando entonces por $e^{x}$ queda $c_1 e^{2x} + c_2 = 0$, y al hacer $x \to -\infty$ se concluye $c_2 = 0$ y luego $c_1 = 0$. La única combinación lineal nula es la trivial.
