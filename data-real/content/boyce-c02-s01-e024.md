
## Enunciado

Sea $y = y_1(x)$ una solución de

$$y' + p(x)y = 0, \tag{i}$$

y sea $y = y_2(x)$ una solución de

$$y' + p(x)y = g(x). \tag{ii}$$

Demuestre que $y = y_1(x) + y_2(x)$ también es una solución de la ecuación (ii).

## Solución

La suma $y = y_1(x) + y_2(x)$ satisface la ecuación (ii), pues

$$
(y_1 + y_2)' + p(x)(y_1 + y_2)
= \bigl(y_1' + p(x)y_1\bigr) + \bigl(y_2' + p(x)y_2\bigr)
= 0 + g(x)
= g(x).
$$

## Resolución

Por hipótesis, $y_1$ resuelve la ecuación homogénea (i) y $y_2$ resuelve la ecuación completa (ii):

$$
y_1' + p(x)y_1 = 0, \qquad y_2' + p(x)y_2 = g(x).
$$

Se considera la suma $y = y_1(x) + y_2(x)$. Su derivada es la suma de las derivadas, $y' = y_1' + y_2'$. Al sustituir $y$ y $y'$ en el miembro izquierdo de la ecuación (ii) y agrupar términos,

$$
\begin{aligned}
y' + p(x)y
&= \bigl(y_1' + y_2'\bigr) + p(x)\bigl(y_1 + y_2\bigr) \\
&= \bigl(y_1' + p(x)y_1\bigr) + \bigl(y_2' + p(x)y_2\bigr) \\
&= 0 + g(x) \\
&= g(x).
\end{aligned}
$$

El miembro izquierdo de (ii) evaluado en $y = y_1 + y_2$ coincide con $g(x)$. Por tanto, $y = y_1(x) + y_2(x)$ es una solución de la ecuación (ii).

## Observaciones

El resultado es el **principio de superposición** para ecuaciones lineales de primer orden: la solución de la ecuación completa es la suma de una solución de la ecuación homogénea y una solución particular de la completa. La propiedad se debe a que el operador $L[y] = y' + p(x)y$ es lineal, de modo que $L[y_1 + y_2] = L[y_1] + L[y_2]$.

Si $p$ y $g$ son continuas en un intervalo $I$ donde están definidas $y_1$ y $y_2$, la suma también está definida en $I$ y la identidad se cumple para todo $x \in I$.
