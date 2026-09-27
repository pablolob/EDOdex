
## Enunciado

En cada uno de los problemas 9 a 12, resuelva el problema con valor inicial dado y determine de qué manera el intervalo en el que la solución existe depende del valor inicial $y_0$.
$$y' = 2xy^2, \quad y(0) = y_0$$

## Solución

La ecuación es **de primer orden** y **no lineal**. Para $y_0 \neq 0$ la solución del problema con valor inicial es

$$
y(x) = \frac{y_0}{1 - y_0 x^2}.
$$

El intervalo máximo de existencia depende del signo de $y_0$:

$$
\begin{cases}
\left(-\dfrac{1}{\sqrt{y_0}},\ \dfrac{1}{\sqrt{y_0}}\right), & y_0 > 0, \\[8pt]
(-\infty,\ \infty), & y_0 \le 0.
\end{cases}
$$

## Resolución

La ecuación $y' = 2xy^2$ es de **primer orden** y **no lineal**, por el factor $y^2$. Para $y \neq 0$ admite **separación de variables**:

$$
\frac{dy}{y^2} = 2x\,dx.
$$

Integrando ambos miembros con la regla de la potencia,

$$
-\frac{1}{y} = x^2 + C.
$$

Al despejar $y$,

$$
y = -\frac{1}{x^2 + C}.
$$

La función constante $y \equiv 0$ también satisface la ecuación; se pierde al dividir entre $y^2$ y corresponde a la condición inicial $y_0 = 0$, que se trata aparte.

Para $y_0 \neq 0$ la condición inicial $y(0) = y_0$ fija la constante:

$$
y_0 = -\frac{1}{C} \quad\Longrightarrow\quad C = -\frac{1}{y_0}.
$$

Sustituyendo y simplificando,

$$
y(x) = -\frac{1}{x^2 - \frac{1}{y_0}} = \frac{y_0}{1 - y_0 x^2}.
$$

Comprobación: derivando con la regla del cociente,

$$
y'(x) = \frac{2y_0^2 x}{\left(1 - y_0 x^2\right)^2} = 2x\left(\frac{y_0}{1 - y_0 x^2}\right)^2 = 2xy^2,
$$

y $y(0) = y_0$, de modo que la solución satisface la ecuación y la condición inicial.

El intervalo de validez lo fija el dominio de la expresión: el denominador se anula cuando

$$
1 - y_0 x^2 = 0 \quad\Longleftrightarrow\quad x^2 = \frac{1}{y_0}.
$$

Si $y_0 > 0$, hay dos ceros reales $x = \pm\dfrac{1}{\sqrt{y_0}}$; en ambos $|y| \to \infty$. El intervalo maximal, que debe contener el punto inicial $x = 0$, es

$$
\left(-\frac{1}{\sqrt{y_0}},\ \frac{1}{\sqrt{y_0}}\right).
$$

Si $y_0 < 0$, entonces $\dfrac{1}{y_0} < 0$ y la ecuación $x^2 = \dfrac{1}{y_0}$ no tiene solución real. El denominador $1 - y_0 x^2 = 1 + |y_0|x^2$ es positivo para todo $x$, así que la solución existe en $(-\infty, \infty)$.

Si $y_0 = 0$, la solución es la constante $y \equiv 0$, definida en $(-\infty, \infty)$.

En conclusión, el intervalo es acotado exactamente cuando $y_0 > 0$, y se contrae al crecer $y_0$: sus extremos $\pm 1/\sqrt{y_0}$ se acercan a $0$. Si $y_0 \le 0$, la solución existe en todo $\mathbb{R}$.

## Observaciones

El miembro derecho $f(x,y) = 2xy^2$ es continuo, e incluso diferenciable, en todo el plano. Aun así, para $y_0 > 0$ la solución escapa a infinito en un intervalo finito. Esto contrasta con las ecuaciones lineales de primer orden, cuyas soluciones existen en todo intervalo donde los coeficientes son continuos. El comportamiento es propio de la no linealidad.

La recta $y = 0$ es solución de equilibrio. Para $y_0 < 0$ las soluciones permanecen acotadas y tienden a $0$ cuando $|x| \to \infty$; para $y_0 > 0$ crecen sin cota y dejan de existir en $x = \pm 1/\sqrt{y_0}$.
