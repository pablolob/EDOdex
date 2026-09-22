
## Enunciado

En cada uno de los problemas 1 a 12, encuentre la solución del problema con valor inicial dado por medio de la transformada de Laplace.

4. $y'' - y = 2\delta(t - 1); \quad y(0) = 1, \ y'(0) = 0$

## Solución

$$
y(t) = \cosh t + 2\,u_1(t)\sinh(t-1),
$$

o, por tramos,

$$
y(t) = \begin{cases}
\cosh t, & 0 \le t < 1, \\[6pt]
\cosh t + 2\sinh(t-1), & t \ge 1.
\end{cases}
$$

## Resolución

Se aplica la **transformada de Laplace**, indicada porque el término forzante es un **impulso de Dirac**. Sea $Y(s) = \mathscr{L}\{y(t)\}$. Con $y(0) = 1$ y $y'(0) = 0$,

$$
\mathscr{L}\{y''\} = s^2 Y(s) - s\,y(0) - y'(0) = s^2 Y(s) - s.
$$

La transformada del impulso es $\mathscr{L}\{\delta(t-a)\} = e^{-as}$, de modo que $\mathscr{L}\{2\delta(t-1)\} = 2e^{-s}$. Al transformar la ecuación resulta

$$
s^2 Y(s) - s - Y(s) = 2e^{-s},
$$

es decir,

$$
(s^2-1)Y(s) = s + 2e^{-s},
$$

de donde

$$
Y(s) = \frac{s}{s^2-1} + \frac{2e^{-s}}{s^2-1}.
$$

Los pares básicos de la tabla dan

$$
\mathscr{L}^{-1}\!\left\{\frac{s}{s^2-1}\right\} = \cosh t,
\qquad
\mathscr{L}^{-1}\!\left\{\frac{1}{s^2-1}\right\} = \sinh t.
$$

El segundo sumando tiene la forma $e^{-as}F(s)$ con $a = 1$ y $F(s) = 1/(s^2-1)$. Por el **segundo teorema de traslación**, $\mathscr{L}^{-1}\{e^{-as}F(s)\} = u_a(t)f(t-a)$, con $f(t) = \sinh t$. Por tanto,

$$
y(t) = \cosh t + 2\,u_1(t)\sinh(t-1).
$$

La solución satisface las condiciones iniciales: para $0 \le t < 1$ es $y(t) = \cosh t$, de modo que $y(0) = 1$ y $y'(0) = \sinh 0 = 0$. El impulso introduce en $t = 1$ un salto de magnitud $2$ en $y'$, mientras que $y$ permanece continua. La solución es válida para todo $t \ge 0$.

## Observaciones

El término $2\delta(t-1)$ no modifica la posición en $t = 1$, pero sí la velocidad: al integrar $y'' - y = 2\delta(t-1)$ en un entorno de $t = 1$ se obtiene $y'(1^+) - y'(1^-) = 2$. La respuesta para $t \ge 1$ es la continuación libre $\cosh t + 2\sinh(t-1)$; como $\sinh(t-1)$ también crece exponencialmente, el impulso amplifica de forma permanente la solución en lugar de extinguirse.
