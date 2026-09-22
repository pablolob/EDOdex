
## Enunciado

En cada uno de los problemas 1 a 13, encuentre la solución del problema con valor inicial dado.

1. $y'' + y = f(t); \quad y(0) = 0, \ y'(0) = 1 \quad f(t) = \begin{cases} 1, & 0 \le t < \pi/2 \\ 0, & \pi/2 \le t < \infty \end{cases}$

## Solución

$$
y(t) =
\begin{cases}
1 - \cos t + \sin t, & 0 \le t < \pi/2, \\
2\sin t - \cos t, & t \ge \pi/2.
\end{cases}
$$

## Resolución

La función forzante es constante a tramos. Se escribe con la **función escalón unitario** $u_{\pi/2}(t)$, definida por $u_{\pi/2}(t) = 0$ para $t < \pi/2$ y $u_{\pi/2}(t) = 1$ para $t \ge \pi/2$:

$$
f(t) = 1 - u_{\pi/2}(t).
$$

Sea $Y(s) = \mathcal{L}\{y(t)\}$. La **transformada de Laplace** de la ecuación emplea $\mathcal{L}\{y''\} = s^2Y(s) - s\,y(0) - y'(0)$. Con las condiciones iniciales $y(0) = 0$ y $y'(0) = 1$,

$$
s^2Y(s) - 1 + Y(s) = \frac{1}{s} - \frac{e^{-\pi s/2}}{s}.
$$

Al agrupar y despejar $Y(s)$,

$$
Y(s) = \frac{1}{s^2+1} + \frac{1-e^{-\pi s/2}}{s(s^2+1)}.
$$

La fracción racional se descompone mediante **fracciones parciales**:

$$
\frac{1}{s(s^2+1)} = \frac{1}{s} - \frac{s}{s^2+1}.
$$

De la tabla básica, $\mathcal{L}^{-1}\{1/(s^2+1)\} = \sin t$ y

$$
\mathcal{L}^{-1}\!\left\{\frac{1}{s} - \frac{s}{s^2+1}\right\} = 1 - \cos t.
$$

El factor $e^{-\pi s/2}$ se trata con el **segundo teorema de traslación**. Con $g(t) = 1 - \cos t$,

$$
\mathcal{L}^{-1}\!\left\{e^{-\pi s/2}\,\frac{1}{s(s^2+1)}\right\}
= g(t-\pi/2)\,u_{\pi/2}(t)
= \left[1-\cos(t-\pi/2)\right]u_{\pi/2}(t).
$$

Como $\cos(t-\pi/2) = \sin t$, la solución queda

$$
y(t) = \sin t + 1 - \cos t - (1-\sin t)\,u_{\pi/2}(t).
$$

Al sustituir los dos valores del escalón se obtiene la expresión por intervalos.

## Observaciones

La solución es continua en $t = \pi/2$, pues ambos tramos valen $2$. Su derivada también lo es: $\sin t + \cos t$ y $2\cos t + \sin t$ valen $1$ en ese punto. La discontinuidad de $f$ se manifiesta solo en la segunda derivada.

La solución está definida para todo $t \ge 0$: la forzante es continua a tramos y el coeficiente de $y''$ no se anula.

### Método alternativo: resolución por tramos

El problema puede resolverse intervalo a intervalo y empalmar en $t = \pi/2$. En $[0, \pi/2)$ la ecuación es $y'' + y = 1$, cuya solución general es $y = C_1\cos t + C_2\sin t + 1$. Las condiciones iniciales dan $C_1 = -1$ y $C_2 = 1$, es decir, $y = 1 - \cos t + \sin t$. En $t = \pi/2$ esta expresión y su derivada valen $2$ y $1$. En $[\pi/2, \infty)$ la ecuación es $y'' + y = 0$, con solución general $y = A\cos t + B\sin t$; imponer $y(\pi/2) = 2$ y $y'(\pi/2) = 1$ conduce a $B = 2$ y $A = -1$, esto es, $y = 2\sin t - \cos t$. Coincide con el resultado obtenido por transformada de Laplace.
