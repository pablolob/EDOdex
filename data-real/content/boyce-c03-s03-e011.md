
## Enunciado

Si las funciones $y_1$ y $y_2$ son soluciones linealmente independientes de $y'' + p(x)y' + q(x)y = 0$, determine en qué condiciones las funciones $y_3 = a_1 y_1 + a_2 y_2$ y $y_4 = b_1 y_1 + b_2 y_2$ también forman un conjunto linealmente independiente de soluciones.

## Solución

Las funciones $y_3$ y $y_4$ forman un conjunto linealmente independiente de soluciones si y solo si

$$
a_1 b_2 - a_2 b_1 \neq 0.
$$

## Resolución

La ecuación $y'' + p(x)y' + q(x)y = 0$ es lineal y homogénea. Por el **principio de superposición**, toda combinación lineal de soluciones es solución; por tanto, $y_3$ y $y_4$ son soluciones de la ecuación.

Para decidir si son linealmente independientes se calcula su wronskiano. Con

$$
y_3 = a_1 y_1 + a_2 y_2, \qquad y_4 = b_1 y_1 + b_2 y_2,
$$

las derivadas son

$$
y_3' = a_1 y_1' + a_2 y_2', \qquad y_4' = b_1 y_1' + b_2 y_2'.
$$

Por la definición del **wronskiano**,

$$
\begin{aligned}
W(y_3,y_4)
&= y_3 y_4' - y_3' y_4 \\
&= (a_1 y_1 + a_2 y_2)(b_1 y_1' + b_2 y_2')
 - (a_1 y_1' + a_2 y_2')(b_1 y_1 + b_2 y_2).
\end{aligned}
$$

Al desarrollar el producto, los términos $a_1 b_1\, y_1 y_1'$ y $a_2 b_2\, y_2 y_2'$ aparecen con signos opuestos y se cancelan. Solo sobreviven los términos cruzados:

$$
\begin{aligned}
W(y_3,y_4)
&= a_1 b_2\left(y_1 y_2' - y_1' y_2\right) + a_2 b_1\left(y_2 y_1' - y_2' y_1\right) \\
&= a_1 b_2\, W(y_1,y_2) - a_2 b_1\, W(y_1,y_2) \\
&= \left(a_1 b_2 - a_2 b_1\right) W(y_1,y_2).
\end{aligned}
$$

Como $y_1$ y $y_2$ son soluciones linealmente independientes de una ecuación lineal homogénea, el **criterio del wronskiano** garantiza que $W(y_1,y_2) \neq 0$ en todo el intervalo donde $p$ y $q$ son continuas. Por tanto, $W(y_3,y_4) \neq 0$ si y solo si

$$
a_1 b_2 - a_2 b_1 \neq 0.
$$

Bajo esa condición, $y_3$ y $y_4$ son linealmente independientes y, al ser dos soluciones independientes de una ecuación de segundo orden, forman un conjunto fundamental de soluciones. Si $a_1 b_2 - a_2 b_1 = 0$, las filas de la matriz de coeficientes son proporcionales y $y_3$ y $y_4$ son linealmente dependientes.

## Observaciones

El factor $W(y_1,y_2)$ es común a todos los cálculos y nunca se anula: la decisión depende solo del determinante de la matriz de coeficientes

$$
\begin{vmatrix} a_1 & a_2 \\ b_1 & b_2 \end{vmatrix} = a_1 b_2 - a_2 b_1.
$$

La condición equivale a que esa matriz sea invertible. Cuando lo es, el paso de $\{y_1,y_2\}$ a $\{y_3,y_4\}$ es un cambio de base en el espacio de soluciones: cualquier solución del conjunto fundamental original admite una combinación lineal de $y_3$ y $y_4$, y recíprocamente. Si el determinante se anula, una de las nuevas funciones es un múltiplo constante de la otra.
