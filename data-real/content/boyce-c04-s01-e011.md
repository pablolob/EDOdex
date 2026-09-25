
## Enunciado

En cada uno de los problemas 7 a 12 elimine las constantes $c_1, c_2, \ldots, c_n$ entre las expresiones para $y$ y sus derivadas $y', \ldots, y^{(n-1)}$. Con ello, determine la ecuación diferencial que satisface la función dada.

11. $y = x + c_1 + c_2 \cos x + c_3 \sin x$

## Solución

La ecuación diferencial pedida es la EDO **lineal** de **tercer orden** con coeficientes constantes

$$
y''' + y' = 1.
$$

## Resolución

La expresión contiene tres constantes arbitrarias $c_1$, $c_2$ y $c_3$, de modo que la ecuación diferencial que las elimina es de tercer orden. Se deriva sucesivamente:

$$
\begin{aligned}
y &= x + c_1 + c_2 \cos x + c_3 \sin x, \\
y' &= 1 - c_2 \sin x + c_3 \cos x, \\
y'' &= -c_2 \cos x - c_3 \sin x, \\
y''' &= c_2 \sin x - c_3 \cos x.
\end{aligned}
$$

El término $x$ no está multiplicado por ninguna constante, así que no se elimina; su derivada aporta el sumando constante $1$ que aparece en $y'$.

Los miembros derechos de $y'$ y de $y'''$ contienen el mismo bloque trigonométrico $c_2 \sin x - c_3 \cos x$ con signos opuestos. Por tanto,

$$
y''' = 1 - y',
$$

es decir,

$$
y''' + y' = 1.
$$

Esta combinación ya no contiene ninguna de las constantes $c_1$, $c_2$, $c_3$. Al sustituir la expresión dada se confirma:

$$
y''' + y' = (c_2 \sin x - c_3 \cos x) + (1 - c_2 \sin x + c_3 \cos x) = 1.
$$

## Observaciones

La ecuación obtenida es lineal, de tercer orden, con coeficientes constantes y no homogénea. El número de constantes arbitrarias de la expresión coincide con el orden de la ecuación: tres constantes, tercera derivada.

Las constantes $c_1$, $c_2$ y $c_3$ generan la parte que satisface la ecuación homogénea $y''' + y' = 0$, mientras que el término $x$ produce el miembro derecho constante $1$. Por ello, la expresión dada es la solución general de $y''' + y' = 1$.
