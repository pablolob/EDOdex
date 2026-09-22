
## Enunciado

Es posible demostrar que con condiciones adecuadas para $f$ la solución numérica generada por el método de Euler para el problema con valor inicial $y' = f(t, y), \, y(t_0) = y_0$ convergen a la solución exacta a medida que decrece el tamaño $h$ del paso. Esto se ilustra mediante el siguiente ejemplo. Considere el problema con valor inicial
$$y' = 1 - t + y, \quad y(t_0) = y_0$$
a) Demuestre que la solución exacta es $y = \phi(t) = (y_0 - t_0)e^{t - t_0} + t$.
b) Demuestre al aplicar la fórmula de Euler, que
$$y_k = (1 + h)y_{k - 1} + h - ht_{k - 1}, \quad k = 1, 2, \dots$$
c) Observe que $y_1 = (1 + h)(y_0 - t_0) + t_1$ demuestre que
$$y_n = (1 + h)^n(y_0 - t_0) + t_n.$$
d) Considere un punto fijo $t > t_0$, y para una $n$ dada elija $h = (t - t_0)/n$. Entonces, para cualquier $n$, $t_n = t$. También observe que $h \to 0$ cuando $n \to \infty$. Se sustiyuye $h$ en la fórmula precedente y se hace que $n \to \infty$ da el resultado deseado.
Sugerencia: $\lim_{n \to \infty} \left(1 + \frac{a}{n}\right)^n = e^a$.
