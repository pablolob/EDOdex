
## Enunciado

En cada uno de los problemas 7 a 12, determine si las funciones dadas son linealmente dependientes o independientes. Si son linealmente dependientes, halle una relación lineal entre ellas.

7. $y = c_1 + c_2 x + c_3 x^2 + \sin x$

## Solución

Las funciones que intervienen en la expresión son $1$, $x$, $x^2$ y $\sin x$. Estas funciones son **linealmente independientes**; no existe una relación lineal no trivial entre ellas.

Su wronskiano es

$$
W(1,x,x^2,\sin x)(x) = -2\cos x,
$$

que no es idénticamente nulo. Como $W(0) = -2 \ne 0$, el conjunto es linealmente independiente.

## Resolución

La expresión

$$
y = c_1 + c_2 x + c_3 x^2 + \sin x
$$

es una combinación lineal de las funciones

$$
f_1(x) = 1, \qquad f_2(x) = x, \qquad f_3(x) = x^2, \qquad f_4(x) = \sin x.
$$

Se pide decidir si este conjunto es linealmente dependiente o independiente.

Un conjunto de funciones $f_1, \dots, f_n$ con $n-1$ derivadas continuas en un intervalo $I$ es linealmente independiente cuando la única combinación lineal que se anula idénticamente en $I$ es la trivial. El **wronskiano**

$$
W(f_1,\dots,f_n)(x) =
\begin{vmatrix}
f_1 & f_2 & \cdots & f_n \\
f_1' & f_2' & \cdots & f_n' \\
\vdots & \vdots & & \vdots \\
f_1^{(n-1)} & f_2^{(n-1)} & \cdots & f_n^{(n-1)}
\end{vmatrix}
$$

decide la independencia: si $W(x_0) \ne 0$ para algún $x_0 \in I$, entonces las funciones son linealmente independientes.

Las cuatro funciones son suaves en $\mathbb{R}$. Sus derivadas hasta el orden tres son

$$
\begin{aligned}
f_1 &= 1, & f_1' &= 0, & f_1'' &= 0, & f_1''' &= 0, \\
f_2 &= x, & f_2' &= 1, & f_2'' &= 0, & f_2''' &= 0, \\
f_3 &= x^2, & f_3' &= 2x, & f_3'' &= 2, & f_3''' &= 0, \\
f_4 &= \sin x, & f_4' &= \cos x, & f_4'' &= -\sin x, & f_4''' &= -\cos x.
\end{aligned}
$$

El wronskiano es el determinante de la matriz formada por estas derivadas:

$$
W(x) =
\begin{vmatrix}
1 & x & x^2 & \sin x \\
0 & 1 & 2x & \cos x \\
0 & 0 & 2 & -\sin x \\
0 & 0 & 0 & -\cos x
\end{vmatrix}.
$$

La matriz es triangular superior, de modo que su determinante es el producto de los elementos de la diagonal:

$$
W(x) = 1 \cdot 1 \cdot 2 \cdot (-\cos x) = -2\cos x.
$$

En $x = 0$ se obtiene $W(0) = -2 \ne 0$. El wronskiano no es idénticamente nulo, así que las funciones son **linealmente independientes**. Al ser independientes, no existe ninguna relación lineal no trivial entre ellas.

## Observaciones

El criterio del wronskiano es suficiente pero no necesario. Que $W(x_0) \ne 0$ en un punto garantiza la independencia lineal; en cambio, que $W$ se anule en algunos puntos, o incluso en todos, no prueba la dependencia. Aquí $W(x) = -2\cos x$ se anula en $x = \dfrac{\pi}{2} + k\pi$, pero no es idénticamente nulo, por lo que basta evaluarlo en $x = 0$ para concluir.

La independencia lineal de $1$, $x$, $x^2$ y $\sin x$ expresa que el polinomio $c_1 + c_2 x + c_3 x^2$ y el término $\sin x$ no pueden cancelarse entre sí salvo con todos los coeficientes nulos.
