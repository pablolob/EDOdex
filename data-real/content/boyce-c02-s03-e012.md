
## Enunciado

Para cada uno de los problemas 9 a 16, encuentre la solución del problema con valor inicial dado en forma explícita y determine (por lo menos aproximadamente) el intervalo en que está definida.

12. $y' = xy^3(1 + x^2)^{-1/2}, \quad y(0) = 1$

## Solución

La solución del problema con valor inicial es

$$
y(x) = \frac{1}{\sqrt{3 - 2\sqrt{1+x^2}}},
$$

definida en el intervalo

$$
\left(-\frac{\sqrt5}{2},\; \frac{\sqrt5}{2}\right).
$$

## Resolución

La ecuación es de **primer orden** y **separable**, porque el miembro derecho factoriza como $\dfrac{x}{\sqrt{1+x^2}}\cdot y^3$. Se separan las variables:

$$
\frac{dy}{y^3} = \frac{x}{\sqrt{1+x^2}}\,dx.
$$

Esta reescritura supone $y \neq 0$. La función constante $y = 0$ satisface la ecuación diferencial, pero no la condición inicial, de modo que la solución buscada no se pierde.

Se integran ambos miembros. La integral de la izquierda es directa y la de la derecha se resuelve con la sustitución $u = 1+x^2$, $du = 2x\,dx$:

$$
\int y^{-3}\,dy = -\frac{1}{2y^2}, \qquad
\int \frac{x}{\sqrt{1+x^2}}\,dx = \frac{1}{2}\int u^{-1/2}\,du = \sqrt{1+x^2}.
$$

Por tanto,

$$
-\frac{1}{2y^2} = \sqrt{1+x^2} + C.
$$

La condición inicial $y(0) = 1$ fija la constante:

$$
-\frac{1}{2} = \sqrt{1} + C = 1 + C \quad\Longrightarrow\quad C = -\frac{3}{2}.
$$

Sustituyendo este valor y despejando $y$,

$$
-\frac{1}{2y^2} = \sqrt{1+x^2} - \frac{3}{2}
\quad\Longrightarrow\quad
y^2 = \frac{1}{3 - 2\sqrt{1+x^2}}.
$$

Como $y(0) = 1 > 0$, se elige la rama positiva:

$$
y(x) = \frac{1}{\sqrt{3 - 2\sqrt{1+x^2}}}.
$$

Para determinar el intervalo donde esta expresión está definida se impone que el radicando sea positivo:

$$
3 - 2\sqrt{1+x^2} > 0
\quad\Longrightarrow\quad
\sqrt{1+x^2} < \frac{3}{2}
\quad\Longrightarrow\quad
1+x^2 < \frac{9}{4}
\quad\Longrightarrow\quad
x^2 < \frac{5}{4}.
$$

Así, $|x| < \dfrac{\sqrt5}{2}$. El intervalo que contiene a $x = 0$ es $\left(-\dfrac{\sqrt5}{2}, \dfrac{\sqrt5}{2}\right)$; en sus extremos el radicando se anula y $y \to +\infty$, por lo que ese intervalo abierto es el más largo en el que la solución está definida.

La solución se comprueba por sustitución. Con $u = 3 - 2\sqrt{1+x^2}$ se tiene $y = u^{-1/2}$ y $u' = -\dfrac{2x}{\sqrt{1+x^2}}$. Entonces

$$
y' = -\frac{1}{2}u^{-3/2}u' = \frac{x}{\sqrt{1+x^2}}\,u^{-3/2} = \frac{x}{\sqrt{1+x^2}}\,y^3 = xy^3(1+x^2)^{-1/2},
$$

que es la ecuación dada; además $y(0) = 1$.

## Observaciones

El intervalo de validez no lo impone la ecuación diferencial, sino el despeje: la solución deja de existir donde $3 - 2\sqrt{1+x^2} = 0$. La curva completa $y^2 = \frac{1}{3 - 2\sqrt{1+x^2}}$ tiene dos ramas simétricas; la condición inicial $y(0) = 1$ selecciona la superior.

La función constante $y = 0$ es una solución de equilibrio de la ecuación, pero no cumple $y(0) = 1$; la separación de variables dividió entre $y^3$ sin descartar ninguna solución del problema con valor inicial.
