
## Enunciado

En cada uno de los problemas 1 a 13, encuentre la solución del problema con valor inicial dado.

13. $y^{iv} + 5y'' + 4y = 1 - u_\pi(t); \quad y(0) = 0, \ y'(0) = 0, \ y''(0) = 0, \ y'''(0) = 0$

## Solución

$$
y(t) =
\begin{cases}
\dfrac{1}{4} - \dfrac{1}{3}\cos t + \dfrac{1}{12}\cos 2t, & 0 \le t < \pi, \\[10pt]
-\dfrac{2}{3}\cos t, & t \ge \pi.
\end{cases}
$$

## Resolución

La forzante vale $1$ en $0 \le t < \pi$ y $0$ en $t \ge \pi$. Se escribe con la **función escalón unitario** $u_\pi(t)$, definida por $u_\pi(t) = 0$ para $t < \pi$ y $u_\pi(t) = 1$ para $t \ge \pi$:

$$
f(t) = 1 - u_\pi(t).
$$

Sea $Y(s) = \mathcal{L}\{y(t)\}$. Con las cuatro condiciones iniciales nulas, la **transformada de Laplace** de la derivada cuarta es

$$
\mathcal{L}\{y^{(4)}\} = s^4 Y(s) - s^3 y(0) - s^2 y'(0) - s\,y''(0) - y'''(0) = s^4 Y(s),
$$

y la de $y''$ es $\mathcal{L}\{y''\} = s^2 Y(s)$. Las transformadas de la forzante son $\mathcal{L}\{1\} = \dfrac{1}{s}$ y, por el **segundo teorema de traslación**,

$$
\mathcal{L}\{u_\pi(t)\} = \frac{e^{-\pi s}}{s}.
$$

Al transformar la ecuación resulta

$$
\left(s^4 + 5s^2 + 4\right)Y(s) = \frac{1 - e^{-\pi s}}{s},
\qquad\text{de donde}\qquad
Y(s) = \left(1 - e^{-\pi s}\right)\frac{1}{s\left(s^4 + 5s^2 + 4\right)}.
$$

El polinomio se factoriza como $s^4 + 5s^2 + 4 = (s^2+1)(s^2+4)$. El factor racional se descompone mediante **fracciones parciales**:

$$
\frac{1}{s(s^2+1)(s^2+4)}
= \frac{1}{4s} - \frac{s}{3(s^2+1)} + \frac{s}{12(s^2+4)}.
$$

Con los pares básicos $\mathcal{L}^{-1}\{1/s\} = 1$, $\mathcal{L}^{-1}\{s/(s^2+1)\} = \cos t$ y $\mathcal{L}^{-1}\{s/(s^2+4)\} = \cos 2t$, la transformada inversa del factor es

$$
g(t) = \mathcal{L}^{-1}\!\left\{\frac{1}{s(s^2+1)(s^2+4)}\right\}
= \frac{1}{4} - \frac{1}{3}\cos t + \frac{1}{12}\cos 2t.
$$

El **segundo teorema de traslación** establece que $\mathcal{L}^{-1}\{e^{-\pi s}G(s)\} = g(t-\pi)\,u_\pi(t)$. Por tanto,

$$
y(t) = g(t) - g(t-\pi)\,u_\pi(t).
$$

Como $\cos(t-\pi) = -\cos t$ y $\cos(2t - 2\pi) = \cos 2t$,

$$
g(t-\pi) = \frac{1}{4} + \frac{1}{3}\cos t + \frac{1}{12}\cos 2t.
$$

Al separar por intervalos se obtiene el resultado de `Solución`: para $0 \le t < \pi$ solo actúa $g(t)$; para $t \ge \pi$ la diferencia $g(t) - g(t-\pi)$ cancela los términos constantes y duplica el coseno, dejando $-\dfrac{2}{3}\cos t$.

## Observaciones

La forzante es discontinua en $t = \pi$ (salta de $1$ a $0$), pero la solución y sus tres primeras derivadas son continuas allí. En efecto, en $t = \pi$ ambas ramas valen $\dfrac{2}{3}$; $y'$ vale $0$; $y''$ vale $-\dfrac{2}{3}$; y $y'''$ vale $0$. El salto se refleja en $y^{(4)}$, cuya diferencia entre ramas en $t = \pi$ es $1$, igual al salto de $f$. La solución es de clase $C^3$.

La solución está definida para todo $t \ge 0$: la forzante es continua a tramos y de orden exponencial, y el coeficiente de $y^{(4)}$ es constante no nulo. Para $t \ge \pi$ la forzante se anula, pero la respuesta no decae: las raíces del polinomio característico son $\pm i$ y $\pm 2i$, de modo que la oscilación $-\dfrac{2}{3}\cos t$ se mantiene indefinidamente.

### Método alternativo: resolución por tramos

En $0 \le t < \pi$ la ecuación es $y^{(4)} + 5y'' + 4y = 1$. La solución general es $y = C_1\cos t + C_2\sin t + C_3\cos 2t + C_4\sin 2t + \dfrac{1}{4}$, con la solución particular constante $\dfrac{1}{4}$. Las condiciones iniciales dan $C_1 = -\dfrac{1}{3}$, $C_2 = 0$, $C_3 = \dfrac{1}{12}$ y $C_4 = 0$, es decir, $y = \dfrac{1}{4} - \dfrac{1}{3}\cos t + \dfrac{1}{12}\cos 2t$. En $t = \pi$ esta rama y sus tres primeras derivadas valen $\dfrac{2}{3}$, $0$, $-\dfrac{2}{3}$ y $0$. En $t \ge \pi$ la ecuación es homogénea, $y^{(4)} + 5y'' + 4y = 0$, con solución general $y = D_1\cos t + D_2\sin t + D_3\cos 2t + D_4\sin 2t$; imponer los valores heredados conduce a $D_1 = -\dfrac{2}{3}$ y $D_2 = D_3 = D_4 = 0$, esto es, $y = -\dfrac{2}{3}\cos t$. Coincide con el resultado obtenido por transformada de Laplace.
