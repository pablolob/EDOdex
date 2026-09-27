
## Enunciado

Si las funciones $y_1$ y $y_2$ son soluciones linealmente independientes de $y'' + p(x)y' + q(x)y = 0$, demuestre que $c_1 y_1$ y $c_2 y_2$ también son soluciones linealmente independientes, siempre que ninguna de $c_1$ o $c_2$ sea cero.

## Solución

Sean $c_1, c_2$ distintas de cero. Por el **principio de superposición**, $c_1 y_1$ y $c_2 y_2$ son soluciones de la ecuación. Además, el **wronskiano** del nuevo par es

$$
W(c_1 y_1, c_2 y_2)(x) = c_1 c_2\, W(y_1, y_2)(x) \ne 0,
$$

por lo que $c_1 y_1$ y $c_2 y_2$ son **linealmente independientes**.

## Resolución

Se escribe $L[y] = y'' + p(x)y' + q(x)y$; la ecuación es $L[y] = 0$. Se supone que $p$ y $q$ son continuas en un intervalo $I$ donde están definidas las soluciones.

**1. Cada función es una solución.** Por la linealidad del operador $L$,

$$
L[c_1 y_1] = c_1 L[y_1] = c_1 \cdot 0 = 0,
\qquad
L[c_2 y_2] = c_2 L[y_2] = c_2 \cdot 0 = 0.
$$

Así, $c_1 y_1$ y $c_2 y_2$ son soluciones de la ecuación diferencial.

**2. El wronskiano del nuevo par.** Por la definición y la regla del producto,

$$
\begin{aligned}
W(c_1 y_1, c_2 y_2)(x)
&= (c_1 y_1)(c_2 y_2)' - (c_1 y_1)'(c_2 y_2) \\
&= c_1 c_2 \left( y_1 y_2' - y_1' y_2 \right) \\
&= c_1 c_2\, W(y_1, y_2)(x).
\end{aligned}
$$

**3. Independencia lineal.** Las funciones $y_1$ y $y_2$ son linealmente independientes y son soluciones de una ecuación lineal homogénea de segundo orden. Por el criterio del wronskiano para soluciones de este tipo, $W(y_1, y_2)(x) \ne 0$ en todo $I$. Como $c_1 \ne 0$ y $c_2 \ne 0$, el producto $c_1 c_2\, W(y_1, y_2)$ tampoco se anula. En consecuencia,

$$
W(c_1 y_1, c_2 y_2)(x) \ne 0 \quad \text{para todo } x \in I,
$$

y el par $c_1 y_1$, $c_2 y_2$ es **linealmente independiente** en $I$.

## Observaciones

La hipótesis $c_1 c_2 \ne 0$ es esencial: si algún factor se anula, una de las dos funciones es la función nula y el par deja de ser linealmente independiente. El resultado muestra que cualquier múltiplo escalar no nulo de una solución fundamental vuelve a dar una solución fundamental.

### Método alternativo: definición de independencia lineal

Puede prescindirse del wronskiano. Si $a(c_1 y_1) + b(c_2 y_2) = 0$ para todo $x \in I$, entonces $(a c_1) y_1 + (b c_2) y_2 = 0$. Como $y_1$ y $y_2$ son linealmente independientes, $a c_1 = 0$ y $b c_2 = 0$. Al ser $c_1, c_2 \ne 0$, se concluye $a = b = 0$, de modo que $c_1 y_1$ y $c_2 y_2$ son linealmente independientes.
