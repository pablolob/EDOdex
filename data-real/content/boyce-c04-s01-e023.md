
## Enunciado

La finalidad de este problema es demostrar que si $W(y_1, \dots, y_n)(x_0) \neq 0$ para alguna $x_0$ en un intervalo $I$, entonces $y_1, \dots, y_n$ son linealmente independientes sobre $I$ y que si son linealmente independientes y soluciones de

$$L[y] = y^{(n)} + p_1(x)y^{(n-1)} + \dots + p_n(x)y = 0 \quad \text{(i)}$$

sobre $I$, entonces $W(y_1, \dots, y_n)$ es diferente de cero en todo punto de $I$.

a) Suponga que $W(y_1, \dots, y_n)(x_0) \neq 0$ y que

$$c_1 y_1(x) + \dots + c_n y_n(x) = 0 \quad \text{(ii)}$$

para toda $x$ en $I$. Al escribir las ecuaciones correspondientes a las $n - 1$ primeras derivadas de (ii) en $x_0$, demuestre que $c_1 = \dots = c_n = 0$. Por lo tanto, $y_1, \dots, y_n$ son linealmente independientes.

b) Suponga que $y_1, \dots, y_n$ son soluciones linealmente independientes de la ecuación (i). Si $W(y_1, \dots, y_n)(x_0) = 0$ para alguna $x_0$, demuestre que existe una solución diferente de cero de (i) que satisface las condiciones iniciales

$$y(x_0) = y'(x_0) = \dots = y^{(n-1)}(x_0) = 0.$$

Dado que $y = 0$ es una solución de este problema con valor inicial, la parte de unicidad del teorema 4.1.1 da lugar a una contradicción. Por tanto, $W$ nunca es cero.
