
## Enunciado

En cada uno de los problemas 1 a 12, encuentre la solución del problema con valor inicial dado por medio de la transformada de Laplace.

3. $y'' + 2y' + y = \delta(t) + u_{2\pi}(t); \quad y(0) = 0, \ y'(0) = 1$

## Solución

La solución del problema con valor inicial es

$$
y(t) = 2te^{-t} + u_{2\pi}(t)\left[1 - \left(1 + t - 2\pi\right)e^{-(t-2\pi)}\right].
$$

Equivalentemente, por tramos,

$$
y(t) =
\begin{cases}
2te^{-t}, & 0 \le t < 2\pi, \\[8pt]
1 + 2te^{-t} - \left(1 + t - 2\pi\right)e^{-(t-2\pi)}, & t \ge 2\pi.
\end{cases}
$$

## Resolución

Se aplica la **transformada de Laplace**. Sea $Y(s) = \mathcal{L}\{y(t)\}$. Con $y(0) = 0$ y $y'(0) = 1$,

$$
\mathcal{L}\{y'\} = sY(s), \qquad
\mathcal{L}\{y''\} = s^2Y(s) - 1.
$$

Las transformadas de las forzantes son

$$
\mathcal{L}\{\delta(t)\} = 1, \qquad
\mathcal{L}\{u_{2\pi}(t)\} = \frac{e^{-2\pi s}}{s}.
$$

Al transformar la ecuación,

$$
s^2Y - 1 + 2sY + Y = 1 + \frac{e^{-2\pi s}}{s}.
$$

Al agrupar los términos en $Y$ resulta

$$
(s+1)^2\,Y(s) = 2 + \frac{e^{-2\pi s}}{s},
\qquad\text{de donde}\qquad
Y(s) = \frac{2}{(s+1)^2} + \frac{e^{-2\pi s}}{s(s+1)^2}.
$$

El primer término se invierte con el par $\mathcal{L}^{-1}\{1/(s+1)^2\} = te^{-t}$:

$$
\mathcal{L}^{-1}\!\left\{\frac{2}{(s+1)^2}\right\} = 2te^{-t}.
$$

Para el segundo se descompone el factor racional mediante **fracciones parciales**:

$$
\frac{1}{s(s+1)^2} = \frac{1}{s} - \frac{1}{s+1} - \frac{1}{(s+1)^2}.
$$

Su transformada inversa es

$$
f(t) = \mathcal{L}^{-1}\!\left\{\frac{1}{s(s+1)^2}\right\} = 1 - e^{-t} - te^{-t}.
$$

El factor $e^{-2\pi s}$ se trata con el **segundo teorema de traslación**:

$$
\mathcal{L}^{-1}\!\left\{e^{-2\pi s}\frac{1}{s(s+1)^2}\right\}
= u_{2\pi}(t)\,f(t-2\pi)
= u_{2\pi}(t)\left[1 - e^{-(t-2\pi)} - (t-2\pi)e^{-(t-2\pi)}\right].
$$

Al reunir ambos términos se obtiene la forma compacta de `Solución`. Al separar por intervalos, en $0 \le t < 2\pi$ la función escalón es nula y queda $y = 2te^{-t}$; en $t \ge 2\pi$ se añade la contribución trasladada.

## Observaciones

El impulso $\delta(t)$ actúa en el instante inicial. Las condiciones del enunciado se interpretan como los valores inmediatamente anteriores al impulso: el impulso incrementa $y'$ en una unidad, de modo que $y'(0^-) = 1$ y $y'(0^+) = 2$. En $0 < t < 2\pi$ la solución $2te^{-t}$ satisface la ecuación homogénea.

En $t = 2\pi$ la función escalón conecta la forzante y la solución es continua junto con su primera derivada. El salto de la forzante se refleja a partir de la segunda derivada, que pasa de $2e^{-2\pi}(2\pi-2)$ a esa misma cantidad más una unidad.
