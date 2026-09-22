
## Enunciado

Demuestre que si $y_1$ es una solución de

$$y''' + p_1(x)y'' + p_2(x)y' + p_3(x)y = 0,$$

entonces la sustitución de $y = y_1(x)v(x)$ produce la siguiente ecuación de segundo orden para $v'$:

$$y_1 v''' + (3y_1' + p_1 y_1)v'' + (3y_1'' + 2p_1 y_1' + p_2 y_1)v' = 0.$$

## Solución

La sustitución $y = y_1(x)v(x)$ y el agrupamiento de los términos por derivadas de $v$ dan

$$
y_1 v''' + (3y_1' + p_1 y_1)v'' + (3y_1'' + 2p_1 y_1' + p_2 y_1)v' + \bigl(y_1''' + p_1 y_1'' + p_2 y_1' + p_3 y_1\bigr)v = 0.
$$

El coeficiente de $v$ es nulo porque $y_1$ es solución de la ecuación. Queda así la **ecuación de segundo orden** pedida para $v'$:

$$
y_1 v''' + (3y_1' + p_1 y_1)v'' + (3y_1'' + 2p_1 y_1' + p_2 y_1)v' = 0.
$$

## Resolución

Se aplica la regla del producto para obtener las derivadas de $y = y_1 v$:

$$
\begin{aligned}
y' &= y_1' v + y_1 v', \\
y'' &= y_1'' v + 2y_1' v' + y_1 v'', \\
y''' &= y_1''' v + 3y_1'' v' + 3y_1' v'' + y_1 v'''.
\end{aligned}
$$

Al sustituir estas expresiones en la ecuación diferencial resulta

$$
\begin{aligned}
0 ={}& y_1''' v + 3y_1'' v' + 3y_1' v'' + y_1 v''' \\
&+ p_1\bigl(y_1'' v + 2y_1' v' + y_1 v''\bigr) \\
&+ p_2\bigl(y_1' v + y_1 v'\bigr) + p_3 y_1 v.
\end{aligned}
$$

Se agrupan los términos según las derivadas de $v$:

$$
\begin{aligned}
0 ={}& y_1 v''' + \bigl(3y_1' + p_1 y_1\bigr)v'' + \bigl(3y_1'' + 2p_1 y_1' + p_2 y_1\bigr)v' \\
&+ \bigl(y_1''' + p_1 y_1'' + p_2 y_1' + p_3 y_1\bigr)v.
\end{aligned}
$$

La hipótesis de que $y_1$ es solución significa exactamente

$$
y_1''' + p_1 y_1'' + p_2 y_1' + p_3 y_1 = 0,
$$

de modo que el término en $v$ desaparece. La ecuación se reduce a

$$
y_1 v''' + (3y_1' + p_1 y_1)v'' + (3y_1'' + 2p_1 y_1' + p_2 y_1)v' = 0,
$$

que es la expresión del enunciado.

## Observaciones

La ecuación obtenida contiene a lo sumo la tercera derivada de $v$ y ninguna potencia de $v$ distinta de sus derivadas. Con $w = v'$ se convierte en la **ecuación lineal homogénea de segundo orden**

$$
y_1 w'' + (3y_1' + p_1 y_1)w' + (3y_1'' + 2p_1 y_1' + p_2 y_1)w = 0.
$$

Este es el fundamento de la **reducción de orden**: la sustitución $y = y_1 v$ descarta la solución conocida $y_1$ y rebaja en uno el orden de la ecuación restante.

Si $y_1$ no se anula en el intervalo considerado, la división por $y_1$ permite escribir la ecuación de $w$ en forma estándar y aplicar la teoría de las ecuaciones lineales de segundo orden.

El procedimiento se generaliza a una ecuación de orden $n$ con una solución conocida $y_1$: la sustitución produce una ecuación de orden $n-1$ para $v'$.
