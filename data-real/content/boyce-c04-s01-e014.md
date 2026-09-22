
## Enunciado

En cada uno de los problemas 13 a 18, compruebe que las funciones dadas son soluciones de la ecuación diferencial y determine su wronskiano.

14. $y^{iv} + y'' = 0; \quad 1, x, \cos x, \sin x$

## Solución

Las funciones $y_1 = 1$, $y_2 = x$, $y_3 = \cos x$ y $y_4 = \sin x$ son soluciones de la ecuación $y^{iv} + y'' = 0$. Su wronskiano es

$$
W(1,x,\cos x,\sin x) = 1.
$$

Como $W \neq 0$ para todo $x$, las cuatro funciones son linealmente independientes en $\mathbb{R}$.

## Resolución

La ecuación

$$
y^{iv} + y'' = 0
$$

es **lineal homogénea de cuarto orden** con coeficientes constantes. Se comprueba, una por una, que las funciones propuestas la satisfacen.

Para $y_1 = 1$ todas sus derivadas son nulas:

$$
y_1' = y_1'' = y_1''' = y_1^{iv} = 0 \implies y_1^{iv} + y_1'' = 0.
$$

Para $y_2 = x$ la primera derivada es $1$ y las siguientes son nulas:

$$
y_2' = 1, \qquad y_2'' = y_2''' = y_2^{iv} = 0 \implies y_2^{iv} + y_2'' = 0.
$$

Para $y_3 = \cos x$ las derivadas pares cambian de signo:

$$
y_3'' = -\cos x, \qquad y_3^{iv} = \cos x \implies y_3^{iv} + y_3'' = \cos x - \cos x = 0.
$$

Para $y_4 = \sin x$ ocurre lo mismo:

$$
y_4'' = -\sin x, \qquad y_4^{iv} = \sin x \implies y_4^{iv} + y_4'' = \sin x - \sin x = 0.
$$

Las cuatro funciones satisfacen la ecuación. Se forma ahora el **wronskiano** del conjunto:

$$
W(1,x,\cos x,\sin x) =
\begin{vmatrix}
1 & x & \cos x & \sin x\\
0 & 1 & -\sin x & \cos x\\
0 & 0 & -\cos x & -\sin x\\
0 & 0 & \sin x & -\cos x
\end{vmatrix}.
$$

La primera columna solo tiene un elemento no nulo, el $1$ de la primera fila. Al desarrollar por esa columna queda un determinante de orden tres:

$$
W =
\begin{vmatrix}
1 & -\sin x & \cos x\\
0 & -\cos x & -\sin x\\
0 & \sin x & -\cos x
\end{vmatrix}
= 1 \cdot
\begin{vmatrix}
-\cos x & -\sin x\\
\sin x & -\cos x
\end{vmatrix}.
$$

El determinante restante es

$$
\begin{vmatrix}
-\cos x & -\sin x\\
\sin x & -\cos x
\end{vmatrix}
= (-\cos x)(-\cos x) - (-\sin x)(\sin x) = \cos^2 x + \sin^2 x = 1.
$$

Por tanto,

$$
W(1,x,\cos x,\sin x) = 1.
$$

El wronskiano no se anula en ningún punto. En consecuencia, las cuatro funciones son linealmente independientes en $\mathbb{R}$.

## Observaciones

La ecuación tiene coeficientes constantes y es lineal y homogénea. Por el principio de superposición, toda combinación

$$
y = c_1 + c_2 x + c_3 \cos x + c_4 \sin x
$$

es también solución. Como $W \neq 0$ en todo $\mathbb{R}$, el conjunto $\{1, x, \cos x, \sin x\}$ es un conjunto fundamental de soluciones y esa combinación es la solución general en $\mathbb{R}$.

### Método alternativo: fórmula de Abel

El wronskiano puede obtenerse sin desarrollar el determinante. En la forma estándar $y^{iv} + p_1(x)y''' + p_2(x)y'' + p_3(x)y' + p_4(x)y = 0$ el coeficiente de $y'''$ es $p_1(x) = 0$. La fórmula de Abel da

$$
W = C\exp\!\left(-\int p_1(x)\,dx\right) = C,
$$

de modo que el wronskiano es constante. Su valor se obtiene evaluando en $x = 0$, donde la matriz es dispersa y resulta $W(0) = 1$.
