
## Enunciado

En cada uno de los problemas 13 a 18, compruebe que las funciones dadas son soluciones de la ecuación diferencial y determine su wronskiano.

17. $xy''' - y'' = 0; \quad 1, x, x^3$

## Solución

Las funciones $y_1 = 1$, $y_2 = x$ y $y_3 = x^3$ son soluciones de la ecuación $xy'''-y''=0$. Su wronskiano es

$$
W(1,x,x^3) = 6x.
$$

Como $W \neq 0$ para $x \neq 0$, las tres funciones son linealmente independientes en cualquier intervalo que no contenga al origen.

## Resolución

La ecuación

$$
xy''' - y'' = 0
$$

es **lineal homogénea de tercer orden**. Se comprueba, una por una, que las funciones propuestas la satisfacen.

Para $y_1 = 1$ todas sus derivadas son nulas:

$$
y_1' = y_1'' = y_1''' = 0 \implies xy_1''' - y_1'' = 0.
$$

Para $y_2 = x$ la primera derivada es $1$ y las siguientes son nulas:

$$
y_2' = 1, \qquad y_2'' = y_2''' = 0 \implies xy_2''' - y_2'' = 0.
$$

Para $y_3 = x^3$ las derivadas son

$$
y_3' = 3x^2, \qquad y_3'' = 6x, \qquad y_3''' = 6,
$$

de modo que

$$
xy_3''' - y_3'' = x(6) - 6x = 6x - 6x = 0.
$$

Las tres funciones satisfacen la ecuación. Se forma ahora el **wronskiano** del conjunto:

$$
W(1,x,x^3) =
\begin{vmatrix}
1 & x & x^3\\
0 & 1 & 3x^2\\
0 & 0 & 6x
\end{vmatrix}.
$$

La matriz es triangular superior, así que su determinante es el producto de los elementos de la diagonal:

$$
W(1,x,x^3) = 1 \cdot 1 \cdot 6x = 6x.
$$

El wronskiano se anula únicamente en $x = 0$. Por tanto, en cualquier intervalo que no contenga al origen las funciones son linealmente independientes.

## Observaciones

La ecuación es lineal y homogénea, de modo que, por el principio de superposición, toda combinación $y = c_1 + c_2 x + c_3 x^3$ es también solución. Como $W = 6x \ne 0$ en los intervalos que evitan el origen, $\{1, x, x^3\}$ es un conjunto fundamental de soluciones y esa combinación es la solución general en $(0,\infty)$ o en $(-\infty,0)$.

El punto $x = 0$ es singular: la forma estándar $y''' - \dfrac{1}{x}y'' = 0$ no está definida allí. Por eso el intervalo de validez es cualquiera de los dos que separa el origen, nunca un intervalo que lo contenga.

### Método alternativo: fórmula de Abel

El wronskiano puede obtenerse sin desarrollar el determinante. En la forma estándar $y''' + p_1(x)y'' + p_2(x)y' + p_3(x)y = 0$ se tiene $p_1(x) = -\dfrac{1}{x}$, y la fórmula de Abel da

$$
W = C\exp\!\left(-\int p_1(x)\,dx\right) = C\exp\!\left(\int \frac{dx}{x}\right) = C|x|.
$$

Sobre $x > 0$ esto es $Cx$, en concordancia con $W = 6x$ y $C = 6$.
