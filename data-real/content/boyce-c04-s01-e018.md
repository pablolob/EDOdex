
## Enunciado

En cada uno de los problemas 13 a 18, compruebe que las funciones dadas son soluciones de la ecuación diferencial y determine su wronskiano.

18. $x^3 y''' + x^2 y'' - 2xy' + 2y = 0; \quad x, x^2, \frac{1}{x}$

## Solución

Las funciones $y_1 = x$, $y_2 = x^2$ y $y_3 = \dfrac{1}{x}$ son soluciones de la ecuación $x^3 y''' + x^2 y'' - 2xy' + 2y = 0$. Su wronskiano es

$$
W\!\left(x, x^2, \frac{1}{x}\right) = \frac{6}{x}.
$$

Como $W \neq 0$ para $x \neq 0$, las tres funciones son linealmente independientes en cualquier intervalo que no contenga al origen.

## Resolución

La ecuación

$$
x^3 y''' + x^2 y'' - 2xy' + 2y = 0
$$

es **lineal homogénea de tercer orden**. Se comprueba, una por una, que las funciones propuestas la satisfacen.

Para $y_1 = x$ la primera derivada es $1$ y las siguientes son nulas:

$$
y_1' = 1, \qquad y_1'' = y_1''' = 0 \implies x^3(0) + x^2(0) - 2x(1) + 2x = 0.
$$

Para $y_2 = x^2$ las derivadas son

$$
y_2' = 2x, \qquad y_2'' = 2, \qquad y_2''' = 0,
$$

de modo que

$$
x^3(0) + x^2(2) - 2x(2x) + 2x^2 = 2x^2 - 4x^2 + 2x^2 = 0.
$$

Para $y_3 = x^{-1}$ las derivadas son

$$
y_3' = -x^{-2}, \qquad y_3'' = 2x^{-3}, \qquad y_3''' = -6x^{-4},
$$

y al sustituir resulta

$$
x^3(-6x^{-4}) + x^2(2x^{-3}) - 2x(-x^{-2}) + 2x^{-1} = -6x^{-1} + 2x^{-1} + 2x^{-1} + 2x^{-1} = 0.
$$

Las tres funciones satisfacen la ecuación. Se forma ahora el **wronskiano** del conjunto:

$$
W\!\left(x, x^2, x^{-1}\right) =
\begin{vmatrix}
x & x^{2} & x^{-1}\\
1 & 2x & -x^{-2}\\
0 & 2 & 2x^{-3}
\end{vmatrix}.
$$

Se desarrolla por la primera fila:

$$
W = x
\begin{vmatrix}
2x & -x^{-2}\\
2 & 2x^{-3}
\end{vmatrix}
- x^{2}
\begin{vmatrix}
1 & -x^{-2}\\
0 & 2x^{-3}
\end{vmatrix}
+ x^{-1}
\begin{vmatrix}
1 & 2x\\
0 & 2
\end{vmatrix}.
$$

Cada menor de orden dos vale

$$
\begin{aligned}
\begin{vmatrix} 2x & -x^{-2}\\ 2 & 2x^{-3}\end{vmatrix}
&= (2x)(2x^{-3}) - (-x^{-2})(2) = 4x^{-2} + 2x^{-2} = 6x^{-2}, \\
\begin{vmatrix} 1 & -x^{-2}\\ 0 & 2x^{-3}\end{vmatrix}
&= (1)(2x^{-3}) - (-x^{-2})(0) = 2x^{-3}, \\
\begin{vmatrix} 1 & 2x\\ 0 & 2\end{vmatrix}
&= (1)(2) - (2x)(0) = 2.
\end{aligned}
$$

Al sustituir y simplificar queda

$$
W = x\left(6x^{-2}\right) - x^{2}\left(2x^{-3}\right) + x^{-1}(2) = 6x^{-1} - 2x^{-1} + 2x^{-1} = 6x^{-1}.
$$

El wronskiano se anula únicamente en el origen. Por tanto, en cualquier intervalo que no contenga a $x = 0$ las tres funciones son linealmente independientes.

## Observaciones

La ecuación es lineal y homogénea, de modo que, por el **principio de superposición**, toda combinación $y = c_1 x + c_2 x^2 + c_3 x^{-1}$ es también solución. Como $W = \dfrac{6}{x} \ne 0$ en los intervalos que evitan el origen, $\left\{x, x^2, \dfrac{1}{x}\right\}$ es un conjunto fundamental de soluciones y esa combinación es la solución general en $(0,\infty)$ o en $(-\infty,0)$.

El punto $x = 0$ es singular: la forma estándar

$$
y''' + \frac{1}{x}y'' - \frac{2}{x^2}y' + \frac{2}{x^3}y = 0
$$

no está definida allí. Por eso el intervalo de validez es cualquiera de los dos que separa el origen, nunca un intervalo que lo contenga.

### Método alternativo: fórmula de Abel

El wronskiano puede obtenerse sin desarrollar el determinante. En la forma estándar $y''' + p_1(x)y'' + p_2(x)y' + p_3(x)y = 0$ se tiene $p_1(x) = \dfrac{1}{x}$, y la fórmula de Abel da

$$
W = C\exp\!\left(-\int p_1(x)\,dx\right) = C\exp\!\left(-\int \frac{dx}{x}\right) = \frac{C}{x}.
$$

Sobre $x > 0$ esto es $\dfrac{C}{x}$, en concordancia con $W = \dfrac{6}{x}$ y $C = 6$.
