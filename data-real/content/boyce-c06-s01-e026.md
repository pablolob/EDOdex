
## Enunciado

En cada uno de los problemas 24 a 26, aplique la transformada de Laplace para resolver el problema con valor inicial dado.

26. $y'' + 4y = \begin{cases} t, & 0 \le t < 1, \\ 1, & 1 \le t < \infty; \end{cases} \quad y(0) = 0, \; y'(0) = 0$

## Solución

La solución del problema con valor inicial es

$$
y(t) = \begin{cases}
\dfrac{t}{4} - \dfrac{1}{8}\sin(2t), & 0 \le t < 1, \\[6pt]
\dfrac{1}{4} - \dfrac{1}{8}\sin(2t) + \dfrac{1}{8}\sin(2t-2), & t \ge 1.
\end{cases}
$$

## Resolución

Se aplica la **transformada de Laplace** a ambos miembros de la ecuación. Sea $Y(s) = \mathcal{L}\{y(t)\}$. Con $y(0) = 0$ y $y'(0) = 0$,

$$
\mathcal{L}\{y''\} = s^2Y(s) - s\,y(0) - y'(0) = s^2Y(s).
$$

La transformada de la función forzante $f$ se calcula desde la definición, dividiendo la integral en los dos tramos:

$$
\begin{aligned}
F(s) &= \int_0^1 t\,e^{-st}\,dt + \int_1^\infty e^{-st}\,dt \\
&= \left[-\left(\frac{t}{s}+\frac{1}{s^2}\right)e^{-st}\right]_0^1 + \left[-\frac{e^{-st}}{s}\right]_1^\infty \\
&= \frac{1}{s^2} - \frac{e^{-s}}{s} - \frac{e^{-s}}{s^2} + \frac{e^{-s}}{s}
= \frac{1-e^{-s}}{s^2}, \qquad s>0.
\end{aligned}
$$

Al transformar la ecuación resulta

$$
(s^2+4)Y(s) = \frac{1-e^{-s}}{s^2},
\qquad
Y(s) = \frac{1-e^{-s}}{s^2(s^2+4)}.
$$

El factor racional se separa en **fracciones parciales**:

$$
\frac{1}{s^2(s^2+4)} = \frac{1}{4}\left(\frac{1}{s^2} - \frac{1}{s^2+4}\right).
$$

Con ello $Y(s) = G(s) - e^{-s}G(s)$, donde

$$
G(s) = \frac{1}{4}\left(\frac{1}{s^2} - \frac{1}{s^2+4}\right),
\qquad
g(t) = \mathcal{L}^{-1}\{G(s)\} = \frac{t}{4} - \frac{1}{8}\sin(2t),
$$

pues $\mathcal{L}^{-1}\{1/s^2\} = t$ y $\mathcal{L}^{-1}\{2/(s^2+4)\} = \sin(2t)$.

El factor $e^{-s}$ desplaza la función. Esta propiedad se sigue de la definición con el cambio de variable $u = t-1$:

$$
\mathcal{L}\{g(t-1)\mathcal{U}(t-1)\}
= \int_1^\infty e^{-st}g(t-1)\,dt
= e^{-s}\int_0^\infty e^{-su}g(u)\,du
= e^{-s}G(s).
$$

Por lo tanto,

$$
y(t) = g(t) - g(t-1)\mathcal{U}(t-1),
$$

que escrita por tramos es la solución final.

La solución satisface las condiciones iniciales: $y(0) = 0$ y $y'(0) = \frac{1}{4} - \frac{1}{4} = 0$. Al derivar dos veces cada tramo y sustituir se recupera la ecuación:

$$
\begin{aligned}
0 \le t < 1: &\quad y'' + 4y = \frac{1}{2}\sin(2t) + \left(t - \frac{1}{2}\sin(2t)\right) = t, \\
t \ge 1: &\quad y'' + 4y = 1.
\end{aligned}
$$

## Observaciones

La función forzante es continua en $t = 1$ (ambas ramas valen $1$), aunque su derivada $f'$ salta allí: $f'(1^-) = 1$ y $f'(1^+) = 0$. Como la forzante es continua, la solución resulta de clase $C^2$ en todo $[0,\infty)$. La transformada de Laplace resuelve los dos tramos a la vez e impone el empalme de forma automática.

El factor $e^{-s}$ que aparece en $Y(s)$ codifica un retardo de una unidad: el segundo tramo de la solución es el primero evaluado en $t-1$ y restado a partir de $t = 1$.

La solución está definida para todo $t \ge 0$; no aparecen soluciones singulares, ramas perdidas ni constantes libres.
