
## Enunciado

En cada uno de los problemas 1 a 13, encuentre la solución del problema con valor inicial dado.

4. $y'' + 4y = \operatorname{sen} t + u_\pi(t)\operatorname{sen}(t - \pi); \quad y(0) = 0, \ y'(0) = 0$

## Solución

$$
y(t) = \begin{cases}
\dfrac{1}{3}\sin t - \dfrac{1}{6}\sin 2t, & 0 \le t < \pi, \\[6pt]
-\dfrac{1}{3}\sin 2t, & t \ge \pi.
\end{cases}
$$

De forma equivalente, $y(t) = \dfrac{1}{3}\sin t - \dfrac{1}{6}\sin 2t - u_\pi(t)\left(\dfrac{1}{3}\sin t + \dfrac{1}{6}\sin 2t\right)$.

## Resolución

Se aplica la **transformada de Laplace**, indicada porque el término forzante contiene una **función escalón unitario**. Sea $Y(s) = \mathscr{L}\{y(t)\}$. Con $y(0) = y'(0) = 0$,

$$
\mathscr{L}\{y''\} = s^2 Y(s), \qquad \mathscr{L}\{\sin t\} = \frac{1}{s^2+1}.
$$

El término $u_\pi(t)\sin(t-\pi)$ tiene la forma $u_a(t)\,g(t-a)$ con $a = \pi$ y $g(t) = \sin t$. El **segundo teorema de traslación**,

$$
\mathscr{L}\{u_a(t)\,g(t-a)\} = e^{-as}G(s), \qquad G(s) = \mathscr{L}\{g(t)\},
$$

proporciona

$$
\mathscr{L}\{u_\pi(t)\sin(t-\pi)\} = e^{-\pi s}\frac{1}{s^2+1}.
$$

Al transformar la ecuación resulta

$$
(s^2+4)Y(s) = \frac{1+e^{-\pi s}}{s^2+1},
$$

de donde

$$
Y(s) = \frac{1+e^{-\pi s}}{(s^2+1)(s^2+4)}.
$$

La fracción racional se descompone en **fracciones parciales**:

$$
\frac{1}{(s^2+1)(s^2+4)} = \frac{1}{3}\left(\frac{1}{s^2+1} - \frac{1}{s^2+4}\right).
$$

Si $H(s)$ denota el miembro izquierdo, su transformada inversa es

$$
h(t) = \mathscr{L}^{-1}\{H(s)\} = \frac{1}{3}\sin t - \frac{1}{6}\sin 2t,
$$

pues $\mathscr{L}^{-1}\{1/(s^2+4)\} = \frac{1}{2}\sin 2t$. Como $Y(s) = H(s) + e^{-\pi s}H(s)$, la linealidad de la transformada inversa y el segundo teorema de traslación dan

$$
y(t) = h(t) + u_\pi(t)\,h(t-\pi).
$$

El término trasladado se calcula con $\sin(t-\pi) = -\sin t$ y $\sin 2(t-\pi) = \sin 2t$:

$$
h(t-\pi) = \frac{1}{3}\sin(t-\pi) - \frac{1}{6}\sin 2(t-\pi) = -\frac{1}{3}\sin t - \frac{1}{6}\sin 2t.
$$

Al sustituir,

$$
y(t) = \frac{1}{3}\sin t - \frac{1}{6}\sin 2t + u_\pi(t)\left(-\frac{1}{3}\sin t - \frac{1}{6}\sin 2t\right).
$$

Para $t \ge \pi$ el escalón vale $1$ y los términos en $\sin t$ se cancelan:

$$
y(t) = \frac{1}{3}\sin t - \frac{1}{6}\sin 2t - \frac{1}{3}\sin t - \frac{1}{6}\sin 2t = -\frac{1}{3}\sin 2t.
$$

Se obtiene así la solución por tramos. Las condiciones iniciales se satisfacen, ya que $y(0) = 0$ y $y'(0) = \frac{1}{3}\cos 0 - \frac{1}{3}\cos 0 = 0$. La solución es válida para todo $t \ge 0$, pues los coeficientes son constantes y el forzante es continuo por tramos.

## Observaciones

Para $t \ge \pi$ la fuerza externa total se anula, ya que $u_\pi(t)\sin(t-\pi) = -\sin t$. La ecuación pasa a ser homogénea, $y'' + 4y = 0$, y el movimiento continúa como oscilación libre $-\frac{1}{3}\sin 2t$. El cambio de forzante en $t = \pi$ no rompe la continuidad de $y$ ni de $y'$: en ese punto $y(\pi) = 0$ y $y'(\pi) = -\frac{2}{3}$, de modo que la solución empalma suavemente con velocidad no nula.
