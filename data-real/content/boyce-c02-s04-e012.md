
## Enunciado

En cada uno de los problemas 9 a 12, resuelva el problema con valor inicial dado y determine de qué manera el intervalo en el que la solución existe depende del valor inicial $y_0$.
$$y' = \frac{x^2}{y(1 + x^3)}, \quad y(0) = y_0$$

## Solución

Para $y_0 \neq 0$ la solución es

$$
y(x) = \operatorname{sgn}(y_0)\sqrt{\,y_0^2 + \frac{2}{3}\ln(1+x^3)\,},
$$

definida en el intervalo

$$
\left(\sqrt[3]{e^{-3y_0^2/2}-1},\; \infty\right).
$$

Para $y_0 = 0$ no existe solución. El extremo izquierdo del intervalo se aproxima a $-1$ cuando $|y_0|$ aumenta, y a $0$ cuando $|y_0|$ tiende a cero.

## Resolución

La ecuación es de **primer orden** y **no lineal**. El miembro derecho factoriza como el producto de una función de $x$ por una función de $y$:

$$
y' = \frac{x^2}{1+x^3}\cdot\frac{1}{y},
$$

de modo que la ecuación es **separable**. Se separan las variables y se integran ambos miembros:

$$
\int y\,dy = \int \frac{x^2}{1+x^3}\,dx.
$$

La integral de la izquierda es directa. La de la derecha se resuelve con la sustitución $u = 1+x^3$, $du = 3x^2\,dx$:

$$
\frac{y^2}{2} = \frac{1}{3}\ln|1+x^3| + C.
$$

La condición inicial $y(0) = y_0$ fija la constante:

$$
\frac{y_0^2}{2} = \frac{1}{3}\ln 1 + C = C,
$$

por lo que la solución implícita es

$$
y^2 = y_0^2 + \frac{2}{3}\ln|1+x^3|.
$$

La separación supuso $y \neq 0$. Como el miembro derecho contiene el factor $1/y$, la solución solo puede existir donde $y \neq 0$ y donde $1+x^3 \neq 0$.

Para $y_0 \neq 0$ se analiza el intervalo que contiene a $x = 0$. En $(-1,\infty)$ se tiene $|1+x^3| = 1+x^3$, y la función

$$
\varphi(x) = y_0^2 + \frac{2}{3}\ln(1+x^3)
$$

es estrictamente creciente, con $\varphi(0) = y_0^2 > 0$ y $\varphi(x) \to -\infty$ cuando $x \to -1^+$. Por tanto existe un único $x_* \in (-1,0)$ con $\varphi(x_*) = 0$, que se obtiene despejando:

$$
y_0^2 + \frac{2}{3}\ln(1+x_*^3) = 0
\quad\Longrightarrow\quad
1+x_*^3 = e^{-3y_0^2/2}
\quad\Longrightarrow\quad
x_* = \sqrt[3]{e^{-3y_0^2/2}-1}.
$$

Para $x > x_*$ se cumple $\varphi(x) > 0$ y la solución está definida; para $-1 < x < x_*$ se tiene $\varphi(x) < 0$ y no hay solución real. En $x = x_*$ se anula el radicando, $y = 0$, y el miembro derecho de la ecuación pierde sentido, de modo que la solución no puede prolongarse más allá. Como $x_* > -1$, el extremo izquierdo del intervalo es $x_*$ y no el punto singular $x = -1$. El intervalo maximal que contiene a $x = 0$ es entonces $(x_*, \infty)$.

El signo de la raíz lo fija la condición inicial: como $y(0) = y_0$, se toma la rama con el signo de $y_0$,

$$
y(x) = \operatorname{sgn}(y_0)\sqrt{\,y_0^2 + \frac{2}{3}\ln(1+x^3)\,}, \qquad x \in (x_*, \infty).
$$

Para $y_0 = 0$ la condición inicial sitúa la solución en $(x,y) = (0,0)$, donde el miembro derecho $x^2/(y(1+x^3))$ no está definido. El problema con valor inicial no tiene solución en ese caso.

La solución se comprueba por derivación implícita de $y^2 = y_0^2 + \frac{2}{3}\ln(1+x^3)$:

$$
2yy' = \frac{2}{3}\cdot\frac{3x^2}{1+x^3} = \frac{2x^2}{1+x^3}
\quad\Longrightarrow\quad
y' = \frac{x^2}{y(1+x^3)},
$$

que es la ecuación dada. Además, al evaluar en $x = 0$ resulta $y(0) = \operatorname{sgn}(y_0)\,|y_0| = y_0$. Cerca del extremo $x_*$ se tiene $y \to 0$ y $|y'| \to \infty$, lo que confirma que la solución no admite prolongación.

## Observaciones

La dependencia del intervalo en el valor inicial es la diferencia esencial respecto de una ecuación lineal: en un problema lineal el intervalo de validez queda determinado por los coeficientes y no cambia con $y_0$. Aquí el extremo $x_*$ es el punto donde la solución alcanza $y = 0$; en él la ecuación pierde sentido y la solución deja de existir.

La solución implícita admite otra rama para $x < -1$, con $\ln|1+x^3| = \ln\!\bigl(-(1+x^3)\bigr)$, definida en $x < \sqrt[3]{-1-e^{-3y_0^2/2}}$. Esa rama no contiene a $x = 0$ y queda separada de la anterior por la singularidad $x = -1$, por lo que no interviene en el intervalo maximal del problema con valor inicial.
