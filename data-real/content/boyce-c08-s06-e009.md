
## Enunciado

Considere el problema con valor inicial $x' = f(t, x, y)$ y $y' = g(t, x, y)$ con $x(t_0) = x_0$ y $y(t_0) = y_0$. La generalización del método predictor-corrector de Adams-Moulton de la sección 8.6 es

$$
\begin{aligned}
x_{n+1} &= x_n + \tfrac{1}{24} h (55 x'_n - 59 x'_{n-1} + 37 x'_{n-2} - 9 x'_{n-3}), \\
y_{n+1} &= y_n + \tfrac{1}{24} h (55 y'_n - 59 y'_{n-1} + 37 y'_{n-2} - 9 y'_{n-3}),
\end{aligned}
$$
y
$$
\begin{aligned}
x_{n+1} &= x_n + \tfrac{1}{24} h (9 x'_{n+1} + 19 x'_n - 5 x'_{n-1} + x'_{n-2}), \\
y_{n+1} &= y_n + \tfrac{1}{24} h (9 y'_{n+1} + 19 y'_n - 5 y'_{n-1} + y'_{n-2}).
\end{aligned}
$$
Determine un valor aproximado de la solución en $t = 0.4$ para el problema ilustrativo con valor inicial $x' = x - 4y$, $y' = -x + y$, con $x(0) = 1, y(0) = 0$. Considere $h = 0.1$. Corrija una vez el valor predicho. Para los valores de $x_1, \dots, y_3$ use los valores de la solución exacta redondeados hasta seis dígitos: $x_1 = 1.12883$, $x_2 = 1.32042$, $x_3 = 1.60021$, $y_1 = -0.110527$, $y_2 = -0.250847$ y $y_3 = -0.429696$.
