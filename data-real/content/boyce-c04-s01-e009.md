
## Enunciado

En cada uno de los problemas 7 a 12 elimine las constantes $c_1, c_2, \ldots, c_n$ entre las expresiones para $y$ y sus derivadas $y', \ldots, y^{(n-1)}$. Con ello, determine la ecuación diferencial que satisface la función dada.

9. $y = c_1 e^x + c_2 e^{-x} + c_3 e^{2x}$

## Solución

La función dada satisface la ecuación diferencial de **tercer orden**, **lineal** y **homogénea**

$$
y''' - 2y'' - y' + 2y = 0.
$$

## Resolución

La expresión contiene tres constantes arbitrarias $c_1$, $c_2$ y $c_3$, por lo que la ecuación diferencial que la admite como solución general es de tercer orden. Se obtiene eliminando las constantes entre $y$ y sus derivadas $y'$, $y''$ y $y'''$.

Se derivan la expresión y sus derivadas sucesivas:

$$
\begin{aligned}
y &= c_1 e^{x} + c_2 e^{-x} + c_3 e^{2x}, \\
y' &= c_1 e^{x} - c_2 e^{-x} + 2c_3 e^{2x}, \\
y'' &= c_1 e^{x} + c_2 e^{-x} + 4c_3 e^{2x}, \\
y''' &= c_1 e^{x} - c_2 e^{-x} + 8c_3 e^{2x}.
\end{aligned}
$$

La eliminación se realiza en tres pasos, cancelando una constante en cada uno.

**Primera constante.** La combinación $y' - y$ elimina $c_1$, porque $c_1 e^{x}$ se reproduce al derivar:

$$
z_1 = y' - y = -2c_2 e^{-x} + c_3 e^{2x}.
$$

**Segunda constante.** Al derivar $z_1$ resulta $z_1' = 2c_2 e^{-x} + 2c_3 e^{2x}$. La combinación $z_1' + z_1$ elimina $c_2$:

$$
z_2 = z_1' + z_1 = 3c_3 e^{2x}.
$$

**Tercera constante.** La función $z_2 = 3c_3 e^{2x}$ cumple $z_2' = 6c_3 e^{2x} = 2z_2$, de modo que

$$
z_2' - 2z_2 = 0.
$$

Se expresa ahora $z_2$ en términos de $y$. Como $z_1 = y' - y$, se tiene

$$
z_2 = z_1' + z_1 = (y'' - y') + (y' - y) = y'' - y,
$$

y por tanto $z_2' = y''' - y'$. Al sustituir en $z_2' - 2z_2 = 0$ se obtiene

$$
(y''' - y') - 2(y'' - y) = 0,
$$

es decir,

$$
y''' - 2y'' - y' + 2y = 0.
$$

La ecuación es de **tercer orden**, **lineal** y **homogénea**, coherente con las tres constantes arbitrarias de la familia dada.

## Observaciones

Cada una de las funciones $e^{x}$, $e^{-x}$ y $e^{2x}$ es solución de la ecuación obtenida. Su wronskiano es $W(x) = -6e^{2x} \ne 0$ en todo $\mathbb{R}$, luego forman un conjunto fundamental y la familia de tres parámetros es la solución general.

### Método alternativo: eliminación mediante un sistema lineal

Se tratan $u = c_1 e^{x}$, $v = c_2 e^{-x}$ y $w = c_3 e^{2x}$ como incógnitas. Las expresiones de $y$, $y'$ y $y''$ forman el sistema

$$
u + v + w = y, \qquad u - v + 2w = y', \qquad u + v + 4w = y''.
$$

Su determinante es el wronskiano $W = -6e^{2x} \ne 0$, de modo que la solución es única:

$$
w = \frac{y'' - y}{3}, \qquad v = \frac{y'' - 3y' + 2y}{6}, \qquad u = \frac{2y + y' - y''}{2}.
$$

Al sustituir estas expresiones en $y''' = u - v + 8w$ resulta $y''' = 2y'' + y' - 2y$, que es la misma ecuación diferencial.
