
## Enunciado

En cada uno de los problemas 13 a 18, compruebe que las funciones dadas son soluciones de la ecuación diferencial y determine su wronskiano.

13. $y''' + y' = 0; \quad 1, \cos x, \sin x$

## Solución

Las funciones $1$, $\cos x$ y $\sin x$ son soluciones de la ecuación en todo $\mathbb{R}$. Su wronskiano es

$$
W(1,\cos x,\sin x) = 1 \ne 0.
$$

## Resolución

Se comprueba primero que cada función satisface la ecuación $y''' + y' = 0$.

Para $y = 1$ las derivadas son $y' = 0$, $y'' = 0$ y $y''' = 0$. Al sustituir,

$$
y''' + y' = 0 + 0 = 0.
$$

Para $y = \cos x$ las derivadas son

$$
y' = -\sin x, \qquad y'' = -\cos x, \qquad y''' = \sin x.
$$

Al sustituir,

$$
y''' + y' = \sin x - \sin x = 0.
$$

Para $y = \sin x$ las derivadas son

$$
y' = \cos x, \qquad y'' = -\sin x, \qquad y''' = -\cos x.
$$

Al sustituir,

$$
y''' + y' = -\cos x + \cos x = 0.
$$

Las tres funciones son suaves en $\mathbb{R}$ y anulan el miembro izquierdo para todo $x$. Por tanto, son soluciones de la ecuación en todo $\mathbb{R}$.

El wronskiano del conjunto es el determinante formado por las funciones y sus dos primeras derivadas:

$$
W(1,\cos x,\sin x) =
\begin{vmatrix}
1 & \cos x & \sin x \\
0 & -\sin x & \cos x \\
0 & -\cos x & -\sin x
\end{vmatrix}.
$$

Se desarrolla por la primera columna, en la que el único elemento no nulo es el primero:

$$
W = 1 \cdot
\begin{vmatrix}
-\sin x & \cos x \\
-\cos x & -\sin x
\end{vmatrix}
= (-\sin x)(-\sin x) - (\cos x)(-\cos x)
= \sin^2 x + \cos^2 x = 1.
$$

El wronskiano vale $1$ para todo $x \in \mathbb{R}$, en particular no se anula. Por el criterio del wronskiano, las tres funciones son linealmente independientes y forman un conjunto fundamental de soluciones de la ecuación.

## Observaciones

El conjunto $\{1, \cos x, \sin x\}$ es un conjunto fundamental de soluciones de la ecuación de tercer orden $y''' + y' = 0$. Por ello la combinación $y = c_1 + c_2 \cos x + c_3 \sin x$ es la solución general de esa ecuación.

### Método alternativo: fórmula de Abel

Escrita la ecuación como $y''' + 0\cdot y'' + y' + 0\cdot y = 0$, el coeficiente de $y''$ es $p_1(x) = 0$. La fórmula de Abel para el wronskiano de tres soluciones da

$$
W(x) = C\exp\!\left(-\int p_1(x)\,dx\right) = C.
$$

La constante se fija evaluando el wronskiano en $x = 0$:

$$
W(0) =
\begin{vmatrix}
1 & 1 & 0 \\
0 & 0 & 1 \\
0 & -1 & 0
\end{vmatrix}
= 1,
$$

de donde $C = 1$ y $W(x) = 1$, en coincidencia con el cálculo directo.
