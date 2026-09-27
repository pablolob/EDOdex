
## Enunciado

En cada uno de los problemas 1 a 6, determine si el par de funciones dado es linealmente independiente o linealmente dependiente.

6. $f(x) = x, \quad g(x) = x^{-1}$

## Solución

El par de funciones es **linealmente independiente** en cada intervalo que no contiene a $x = 0$. Su wronskiano es

$$
W(f,g)(x) = -\frac{2}{x},
$$

que no es idénticamente nulo.

## Resolución

Las funciones y sus derivadas están definidas para $x \ne 0$:

$$
f(x) = x, \quad f'(x) = 1; \qquad g(x) = x^{-1}, \quad g'(x) = -x^{-2}.
$$

El **wronskiano** del par se calcula como el determinante

$$
\begin{aligned}
W(f,g)(x) &= \begin{vmatrix} f(x) & g(x) \\ f'(x) & g'(x) \end{vmatrix}
= f(x)g'(x) - f'(x)g(x) \\
&= x\left(-x^{-2}\right) - 1 \cdot x^{-1} \\
&= -x^{-1} - x^{-1} \\
&= -\frac{2}{x}.
\end{aligned}
$$

El wronskiano no es idénticamente nulo: por ejemplo, $W(f,g)(1) = -2 \ne 0$. Por el criterio del wronskiano, el par es **linealmente independiente** en $(0, \infty)$ y en $(-\infty, 0)$, los dos intervalos donde ambas funciones y sus derivadas son continuas.

## Observaciones

El wronskiano no está definido en $x = 0$, que queda excluido del dominio de $g$. Por eso la independencia se declara por separado en cada intervalo de definición, $(0, \infty)$ y $(-\infty, 0)$, y no en un intervalo que contenga el origen.

### Método alternativo: definición directa

También puede aplicarse la definición. Si $c_1 f(x) + c_2 g(x) = 0$ para todo $x \ne 0$, la multiplicación por $x$ da

$$
c_1 x^2 + c_2 = 0
$$

para todo $x \ne 0$. Los coeficientes del polinomio se anulan, $c_1 = 0$ y $c_2 = 0$, de modo que no existe una combinación lineal no trivial idénticamente nula. El par es linealmente independiente.
