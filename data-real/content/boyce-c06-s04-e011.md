
## Enunciado

En cada uno de los problemas 1 a 12, encuentre la solución del problema con valor inicial dado por medio de la transformada de Laplace.

11. $y'' + 2y' + 2y = \cos t + \delta(t - \pi/2); \quad y(0) = 0, \ y'(0) = 0$

## Solución

La solución del problema con valor inicial es

$$
y(t)=\frac{1}{5}\left(\cos t+2\sin t\right)-\frac{1}{5}e^{-t}\left(\cos t+3\sin t\right)+u\!\left(t-\frac{\pi}{2}\right)e^{-(t-\pi/2)}\sin\!\left(t-\frac{\pi}{2}\right),
$$

donde $u(t-\pi/2)$ es la función escalón unitario.

## Resolución

Se aplica la **transformada de Laplace**. Sea $Y(s)=\mathcal{L}\{y(t)\}$. Con las condiciones iniciales dadas,

$$
\begin{aligned}
\mathcal{L}\{y'\} &= sY(s)-y(0)=sY(s),\\
\mathcal{L}\{y''\} &= s^2Y(s)-s\,y(0)-y'(0)=s^2Y(s),
\end{aligned}
$$

y de la tabla, $\mathcal{L}\{\cos t\}=s/(s^2+1)$ y $\mathcal{L}\{\delta(t-\pi/2)\}=e^{-\pi s/2}$.

Al transformar la ecuación,

$$
(s^2+2s+2)\,Y(s)=\frac{s}{s^2+1}+e^{-\pi s/2},
$$

de modo que

$$
Y(s)=\frac{s}{(s^2+2s+2)(s^2+1)}+\frac{e^{-\pi s/2}}{s^2+2s+2}.
$$

El denominador cuadrático se escribe como $s^2+2s+2=(s+1)^2+1$. El primer término se descompone en fracciones simples:

$$
\frac{s}{(s^2+2s+2)(s^2+1)}
=\frac{1}{5}\cdot\frac{s+2}{s^2+1}-\frac{1}{5}\cdot\frac{s+4}{(s+1)^2+1}.
$$

La inversa del primer sumando usa la tabla:

$$
\frac{1}{5}\cdot\frac{s+2}{s^2+1}
\;\longmapsto\;
\frac{1}{5}\left(\cos t+2\sin t\right).
$$

Para el segundo se separa $\dfrac{s+4}{(s+1)^2+1}=\dfrac{s+1}{(s+1)^2+1}+\dfrac{3}{(s+1)^2+1}$. El **primer teorema de traslación** da

$$
-\frac{1}{5}\,\mathcal{L}^{-1}\!\left\{\frac{s+4}{(s+1)^2+1}\right\}
=-\frac{1}{5}e^{-t}\left(\cos t+3\sin t\right).
$$

Resta invertir $\dfrac{e^{-\pi s/2}}{(s+1)^2+1}$. Con $g(t)=e^{-t}\sin t$, el **segundo teorema de traslación** establece $\mathcal{L}^{-1}\{e^{-as}G(s)\}=g(t-a)\,u(t-a)$. Por tanto,

$$
\mathcal{L}^{-1}\!\left\{\frac{e^{-\pi s/2}}{(s+1)^2+1}\right\}
=u\!\left(t-\frac{\pi}{2}\right)e^{-(t-\pi/2)}\sin\!\left(t-\frac{\pi}{2}\right).
$$

Al reunir los tres resultados,

$$
y(t)=\frac{1}{5}\left(\cos t+2\sin t\right)-\frac{1}{5}e^{-t}\left(\cos t+3\sin t\right)+u\!\left(t-\frac{\pi}{2}\right)e^{-(t-\pi/2)}\sin\!\left(t-\frac{\pi}{2}\right).
$$

La solución satisface las condiciones iniciales: en $t=0$ el término escalón se anula, y la parte continua vale $y(0)=\frac{1}{5}-\frac{1}{5}=0$ y $y'(0)=0$, pues su derivada es $\frac{1}{5}(-\sin t+2\cos t)-\frac{1}{5}e^{-t}(2\cos t-4\sin t)$.

## Observaciones

En forma explícita por intervalos,

$$
y(t)=
\begin{cases}
\dfrac{1}{5}\left(\cos t+2\sin t\right)-\dfrac{1}{5}e^{-t}\left(\cos t+3\sin t\right), & 0\le t<\dfrac{\pi}{2},\\[10pt]
\dfrac{1}{5}\left(\cos t+2\sin t\right)-e^{-t}\left[\left(\dfrac{1}{5}+e^{\pi/2}\right)\cos t+\dfrac{3}{5}\sin t\right], & t\ge \dfrac{\pi}{2}.
\end{cases}
$$

El impulso en $t=\pi/2$ no altera el valor de la solución, que es continua en ese punto, pero produce un salto en la derivada: $y'(\pi/2^+)-y'(\pi/2^-)=1$, igual al coeficiente del impulso.
