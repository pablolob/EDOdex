
## Enunciado

En cada uno de los problemas 24 a 26, aplique la transformada de Laplace para resolver el problema con valor inicial dado.

24. $y'' + 4y = \begin{cases} 1, & 0 \le t < \pi, \\ 0, & \pi \le t < \infty; \end{cases} \quad y(0) = 1, \; y'(0) = 0$

## Solución

$$
y(t) = \begin{cases} \dfrac{1}{4} + \dfrac{3}{4}\cos 2t, & 0 \le t < \pi, \\[6pt] \cos 2t, & t \ge \pi. \end{cases}
$$

## Resolución

Se aplica la **transformada de Laplace** a ambos miembros. El miembro forzante es discontinuo y su transformada se obtiene directamente de la definición:

$$
F(s) = \mathcal{L}\{f(t)\} = \int_0^{\pi} e^{-st}\,dt = \left[-\frac{e^{-st}}{s}\right]_0^{\pi} = \frac{1 - e^{-\pi s}}{s}.
$$

Sea $Y(s) = \mathcal{L}\{y(t)\}$. Con $y(0) = 1$ y $y'(0) = 0$,

$$
\mathcal{L}\{y''\} = s^2Y(s) - s\,y(0) - y'(0) = s^2Y(s) - s.
$$

Al transformar la ecuación y sustituir $F(s)$ resulta

$$
s^2Y(s) - s + 4Y(s) = \frac{1 - e^{-\pi s}}{s},
$$

de donde

$$
\left(s^2 + 4\right)Y(s) = s + \frac{1 - e^{-\pi s}}{s},
\qquad
Y(s) = \frac{s}{s^2 + 4} + \frac{1 - e^{-\pi s}}{s\left(s^2 + 4\right)}.
$$

La fracción $\dfrac{1}{s(s^2+4)}$ se separa en fracciones simples:

$$
\frac{1}{s\left(s^2 + 4\right)} = \frac{1}{4}\left(\frac{1}{s} - \frac{s}{s^2 + 4}\right).
$$

Entonces

$$
Y(s) = \frac{s}{s^2 + 4} + \frac{1}{4}\left(\frac{1}{s} - \frac{s}{s^2 + 4}\right)
- \frac{e^{-\pi s}}{4}\left(\frac{1}{s} - \frac{s}{s^2 + 4}\right).
$$

Con los pares $\mathcal{L}^{-1}\{1/s\} = 1$ y $\mathcal{L}^{-1}\{s/(s^2+4)\} = \cos 2t$, los dos primeros grupos se invierten:

$$
\mathcal{L}^{-1}\!\left\{\frac{s}{s^2 + 4} + \frac{1}{4}\left(\frac{1}{s} - \frac{s}{s^2 + 4}\right)\right\}
= \cos 2t + \frac{1}{4}\left(1 - \cos 2t\right)
= \frac{1}{4} + \frac{3}{4}\cos 2t.
$$

El término con el factor $e^{-\pi s}$ se invierte con el **segundo teorema de traslación**. Si $g(t) = \frac{1}{4}\left(1 - \cos 2t\right)$, entonces

$$
\mathcal{L}^{-1}\!\left\{e^{-\pi s}\,\frac{1}{s\left(s^2 + 4\right)}\right\}
= g(t - \pi)\,u(t - \pi)
= \frac{1}{4}\left(1 - \cos 2(t - \pi)\right)u(t - \pi),
$$

y como $\cos 2(t - \pi) = \cos 2t$, esta contribución es $-\frac{1}{4}\left(1 - \cos 2t\right)u(t - \pi)$. Al reunir los términos,

$$
y(t) = \frac{1}{4} + \frac{3}{4}\cos 2t - \frac{1}{4}\left(1 - \cos 2t\right)u(t - \pi),
$$

que escrita por tramos es la solución anunciada. La solución satisface las condiciones iniciales, pues para $0 \le t < \pi$ se tiene $y(0) = \frac{1}{4} + \frac{3}{4} = 1$ e $y'(t) = -\frac{3}{2}\sin 2t$, de modo que $y'(0) = 0$.

## Observaciones

La solución es continua en $t = \pi$ junto con su primera derivada; la discontinuidad de la fuerza solo se refleja en un salto de $y''$, que pasa de $-3$ a $-4$ en ese punto.

Para $t \ge \pi$ la fuerza se anula y la solución queda como la oscilación libre $y = \cos 2t$, que continúa el movimiento con $y(\pi) = 1$ e $y'(\pi) = 0$.
