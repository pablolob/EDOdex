
## Enunciado

En cada uno de los problemas 9 a 12, resuelva el problema con valor inicial dado. Determine cómo se comporta la solución cuando $t \to \infty$.

9. $y''' + 4y' = x, \quad y(0) = y'(0) = 0, \quad y''(0) = 1$

## Solución

$$
y = \frac{3}{16}\left(1 - \cos 2x\right) + \frac{x^2}{8}.
$$

Cuando $x \to \infty$ la solución crece sin cota, pues $y \sim \dfrac{x^2}{8}$.

## Resolución

La ecuación es **lineal**, de **tercer orden**, **no homogénea** y con coeficientes constantes. Su solución general tiene la estructura $y = y_c + y_p$.

**Solución complementaria.** La ecuación homogénea asociada es $y''' + 4y' = 0$. Su ecuación característica es

$$
r^3 + 4r = r(r^2 + 4) = 0,
$$

cuyas raíces son $r = 0$ y $r = \pm 2i$. Las raíces complejas aportan el par $\cos 2x$ y $\sin 2x$, y la raíz real nula aporta la constante. Por tanto,

$$
y_c = c_1 + c_2 \cos 2x + c_3 \sin 2x.
$$

**Solución particular.** El término no homogéneo es $g(x) = x$, un polinomio de grado uno. La forma de prueba natural $Ax + B$ contiene el término constante $B$, que ya figura en $y_c$ porque $r = 0$ es raíz. La **regla de modificación** obliga a multiplicar por $x$:

$$
Y = x(Ax + B) = Ax^2 + Bx.
$$

Sus derivadas son $Y' = 2Ax + B$, $Y'' = 2A$ y $Y''' = 0$. Al sustituir en el miembro izquierdo,

$$
Y''' + 4Y' = 0 + 4(2Ax + B) = 8Ax + 4B.
$$

La igualdad $8Ax + 4B = x$ exige $8A = 1$ y $4B = 0$, de modo que $A = \tfrac{1}{8}$ y $B = 0$. Así,

$$
y_p = \frac{x^2}{8}.
$$

**Solución general.** Al reunir ambas partes,

$$
y = c_1 + c_2 \cos 2x + c_3 \sin 2x + \frac{x^2}{8}.
$$

**Condiciones iniciales.** Se calculan las dos primeras derivadas de la solución general:

$$
\begin{aligned}
y' &= -2c_2 \sin 2x + 2c_3 \cos 2x + \frac{x}{4}, \\
y'' &= -4c_2 \cos 2x - 4c_3 \sin 2x + \frac{1}{4}.
\end{aligned}
$$

La condición $y(0) = 0$ da $c_1 + c_2 = 0$. La condición $y'(0) = 0$ da $2c_3 = 0$, luego $c_3 = 0$. La condición $y''(0) = 1$ da $-4c_2 + \tfrac{1}{4} = 1$, de donde $c_2 = -\tfrac{3}{16}$ y, por la primera relación, $c_1 = \tfrac{3}{16}$.

**Solución del problema con valor inicial.** Al sustituir las constantes,

$$
y = \frac{3}{16} - \frac{3}{16}\cos 2x + \frac{x^2}{8}.
$$

**Comportamiento cuando $x \to \infty$.** Los términos $\tfrac{3}{16}$ y $-\tfrac{3}{16}\cos 2x$ están acotados. El término $\tfrac{x^2}{8}$ crece sin cota, de modo que $y \to \infty$.

Los coeficientes son constantes y $g(x) = x$ es continua en todo $\mathbb{R}$; la solución es válida en $(-\infty, \infty)$.

## Observaciones

El enunciado nombra $t$ como variable independiente en la pregunta sobre el comportamiento asintótico, mientras que la ecuación usa $x$. Ambas designan la misma variable; la respuesta se expresa en $x$.

La regla de modificación se debe aquí a la raíz $r = 0$: como la constante ya es solución de la ecuación homogénea, la parte polinómica de prueba debe multiplicarse por $x$. Sin ese factor, la sustitución de $Ax + B$ daría $4A = x$, imposible.

La solución admite la forma equivalente $y = \dfrac{3}{8}\sin^2 x + \dfrac{x^2}{8}$, obtenida con la identidad $1 - \cos 2x = 2\sin^2 x$. El término oscilatorio está acotado y solo el crecimiento cuadrático domina el comportamiento asintótico.
