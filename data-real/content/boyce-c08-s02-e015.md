
## Enunciado

En este problema se establece que el error local por truncamiento para la fórmula mejorada de Euler es proporcional a $h^3$. Si se supone que la solución $\phi$ del problema con valor inicial $y' = f(t, y)$, $y(t_0) = y_0$ tiene derivadas continuas hasta el tercer orden ($f$ tiene segundas derivadas parciales continuas), se concluye que
$$\phi(t_n + h) = \phi(t_n) + \phi'(t_n)h + \frac{\phi''(t_n)}{2!} h^2 + \frac{\phi'''(\bar{t}_n)}{3!} h^3,$$
en donde $t_n < \bar{t}_n < t_n + h$. Suponga que $y_n = \phi(t_n)$.
a) Demuestre que para $y_{n + 1}$, según se expresa en la ecuación (5),
$$e_{n + 1} = \phi(t_{n + 1}) - y_{n + 1} = \frac{\phi''(\bar{t}_n)h - \{f[t_n + h, y_n + hf(t_n, y_n)] - f(t_n, y_n)\}}{2!} h + \frac{\phi'''(\bar{t}_n)h^3}{3!} \quad \text{(i)}$$
b) Aplique el hecho de que $\phi''(t) = f_t[t, \phi(t)] + f_y[t, \phi(t)]\phi'(t)$ y que la aproximación de Taylor con un resto para una función $F(t, y)$ de dos variables es
$$F(a + h, b + k) = F(a, b) + F_t(a, b)h + F_y(a, b)k + \frac{1}{2!} (h^2 F_{tt} + 2hk F_{ty} + k^2 F_{yy})_{x = \xi, y = \eta}$$
en donde $\xi$ está entre $a$ y $a + h$ y $\eta$ está entre $b$ y $b + k$, para demostrar que el término segundo del miembro de la ecuación (i) es proporcional a $h^3$ más términos de orden superior. Este es el resultado que se desea.
c) Demuestre que si $f(t, y)$ es lineal en $t$ y en $y$, entonces $e_{n + 1} = \phi'''(\bar{t}_n)h^3 / 6$, en donde $t_n < \bar{t}_n < t_{n + 1}$.
Sugerencia: ¿Cuáles son $f_{tt}$, $f_{ty}$ y $f_{yy}$?
