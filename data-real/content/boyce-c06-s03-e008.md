
## Enunciado

En cada uno de los problemas 1 a 13, encuentre la solución del problema con valor inicial dado.

8. $y'' + y' + \frac{5}{4}y = t - u_{\pi/2}(t)(t - \pi/2); \quad y(0) = 0, \ y'(0) = 0$

## Solución

$$
y(t) = g(t) - u_{\pi/2}(t)\,g(t-\pi/2), \qquad
g(t) = \frac{4}{5}t - \frac{16}{25} + e^{-t/2}\left(\frac{16}{25}\cos t - \frac{12}{25}\sin t\right).
$$

## Resolución

La forzante vale $t$ para $0 \le t < \pi/2$ y $\pi/2$ para $t \ge \pi/2$, pues $t - (t-\pi/2) = \pi/2$. Se aplica la **transformada de Laplace** a ambos miembros. Sea $Y(s) = \mathcal{L}\{y(t)\}$. Con $y(0) = 0$ y $y'(0) = 0$,

$$
\mathcal{L}\{y''\} = s^2Y(s) - s\,y(0) - y'(0) = s^2Y(s), \qquad
\mathcal{L}\{y'\} = sY(s).
$$

La transformada del miembro derecho emplea $\mathcal{L}\{t\} = \dfrac{1}{s^2}$ y, por el **segundo teorema de traslación** aplicado a $f(t) = t$ con $c = \pi/2$,

$$
\mathcal{L}\{u_{\pi/2}(t)(t-\pi/2)\} = \frac{e^{-\pi s/2}}{s^2}.
$$

La ecuación transformada es

$$
\left(s^2+s+\frac54\right)Y(s) = \frac{1-e^{-\pi s/2}}{s^2}.
$$

Como $s^2+s+\dfrac54 = \left(s+\dfrac12\right)^2+1$, resulta

$$
Y(s) = \left(1-e^{-\pi s/2}\right)G(s), \qquad
G(s) = \frac{1}{s^2\left[\left(s+\frac12\right)^2+1\right]}.
$$

Se descompone $G(s)$ en **fracciones parciales**:

$$
\frac{1}{s^2\left[\left(s+\frac12\right)^2+1\right]}
= \frac{A}{s} + \frac{B}{s^2} + \frac{Cs+D}{\left(s+\frac12\right)^2+1}.
$$

Al multiplicar por el denominador común y comparar coeficientes se obtiene el sistema

$$
A + C = 0, \qquad A + B + D = 0, \qquad \frac54 A + B = 0, \qquad \frac54 B = 1,
$$

cuya solución es $B = \dfrac45$, $A = -\dfrac{16}{25}$, $C = \dfrac{16}{25}$ y $D = -\dfrac{4}{25}$. Al reescribir el último término para completar el numerador con $s+\dfrac12$,

$$
G(s) = -\frac{16}{25}\frac{1}{s} + \frac{4}{5}\frac{1}{s^2}
+ \frac{16}{25}\frac{s+\frac12}{\left(s+\frac12\right)^2+1}
- \frac{12}{25}\frac{1}{\left(s+\frac12\right)^2+1}.
$$

Se invierte término a término. De la tabla, $\mathcal{L}^{-1}\{1/s\} = 1$ y $\mathcal{L}^{-1}\{1/s^2\} = t$. El **primer teorema de traslación** da

$$
\mathcal{L}^{-1}\!\left\{\frac{s+\frac12}{\left(s+\frac12\right)^2+1}\right\} = e^{-t/2}\cos t,
\qquad
\mathcal{L}^{-1}\!\left\{\frac{1}{\left(s+\frac12\right)^2+1}\right\} = e^{-t/2}\sin t.
$$

Por tanto,

$$
g(t) = \mathcal{L}^{-1}\{G(s)\}
= \frac{4}{5}t - \frac{16}{25} + e^{-t/2}\left(\frac{16}{25}\cos t - \frac{12}{25}\sin t\right).
$$

El factor $e^{-\pi s/2}$ se trata de nuevo con el **segundo teorema de traslación**: de $Y(s) = \left(1-e^{-\pi s/2}\right)G(s)$ se sigue

$$
y(t) = g(t) - u_{\pi/2}(t)\,g(t-\pi/2).
$$

Al sustituir $t \mapsto t-\pi/2$ en $g$ y usar $\cos(t-\pi/2) = \sin t$ y $\sin(t-\pi/2) = -\cos t$, la expresión por intervalos es

$$
y(t) =
\begin{cases}
\dfrac{4}{5}t-\dfrac{16}{25}+e^{-t/2}\left(\dfrac{16}{25}\cos t-\dfrac{12}{25}\sin t\right), & 0\le t<\dfrac{\pi}{2},\\[10pt]
\dfrac{2\pi}{5}+e^{-t/2}\left[\left(\dfrac{16}{25}-\dfrac{12}{25}e^{\pi/4}\right)\cos t-\left(\dfrac{12}{25}+\dfrac{16}{25}e^{\pi/4}\right)\sin t\right], & t\ge\dfrac{\pi}{2}.
\end{cases}
$$

## Observaciones

La forzante es continua en $t = \pi/2$, pues vale $\pi/2$ por ambos lados; en consecuencia $y'' = f - y' - \frac54 y$ también lo es. Solo la derivada tercera salta, con magnitud $1$, que es el salto de $f'$. La función está definida y es única para todo $t \ge 0$.

Para $t \ge \pi/2$ la forzante es la constante $\pi/2$, de modo que la solución oscila amortiguada alrededor del equilibrio $y = \dfrac{2\pi}{5}$.

### Método alternativo: resolución por tramos

Sin transformada de Laplace, en $0 \le t < \pi/2$ la ecuación es $y'' + y' + \frac54 y = t$. La solución general es

$$
y = \frac{4}{5}t - \frac{16}{25} + e^{-t/2}(C_1\cos t + C_2\sin t),
$$

y las condiciones iniciales dan $C_1 = \dfrac{16}{25}$ y $C_2 = -\dfrac{12}{25}$. En $t = \pi/2$ esta rama y su derivada valen

$$
y\!\left(\frac{\pi}{2}\right) = \frac{2\pi}{5} - \frac{16}{25} - \frac{12}{25}e^{-\pi/4},
\qquad
y'\!\left(\frac{\pi}{2}\right) = \frac{4}{5} - \frac{2}{5}e^{-\pi/4}.
$$

En $t \ge \pi/2$ la ecuación es $y'' + y' + \frac54 y = \dfrac{\pi}{2}$, con solución general $y = \dfrac{2\pi}{5} + e^{-t/2}(D_1\cos t + D_2\sin t)$. Imponer los valores heredados conduce a $D_1 = \dfrac{16}{25} - \dfrac{12}{25}e^{\pi/4}$ y $D_2 = -\dfrac{12}{25} - \dfrac{16}{25}e^{\pi/4}$, que reproduce el resultado anterior.
