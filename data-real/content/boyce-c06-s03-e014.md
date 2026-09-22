
## Enunciado

Sea la función $f$ definida por

$$f(t) = \begin{cases} 1, & 0 \le t < \pi, \\ 0, & \pi \le t < 2\pi, \end{cases}$$

y para todos los demás valores positivos de $t$ de modo que $f(t + 2\pi) = f(t)$. Es decir, $f$ es periódica con periodo $2\pi$ (ver el problema 28 de la sección 6.3). Encuentre la solución del problema con valor inicial

$$y'' + y = f(t); \quad y(0) = 1, \quad y'(0) = 0.$$

## Solución

La solución del problema con valor inicial es

$$
y(t)=\cos t+\sum_{n=0}^{\infty}(-1)^n\bigl[1-\cos(t-n\pi)\bigr]\,u_{n\pi}(t),
$$

donde $u_{n\pi}$ es la función escalón unitario. Como $\cos(t-n\pi)=(-1)^n\cos t$, la serie admite la forma equivalente

$$
y(t)=\cos t+\sum_{n=0}^{\infty}\bigl[(-1)^n-\cos t\bigr]\,u_{n\pi}(t).
$$

## Resolución

La función forzante es periódica con periodo $2\pi$. Su transformada de Laplace se obtiene con la fórmula para funciones periódicas (problema 28 de la sección 6.3),

$$
F(s)=\mathcal{L}\{f\}=\frac{1}{1-e^{-2\pi s}}\int_0^{2\pi}e^{-st}f(t)\,dt.
$$

En un periodo, $f(t)=1$ para $0\le t<\pi$ y $f(t)=0$ para $\pi\le t<2\pi$, de modo que

$$
\int_0^{2\pi}e^{-st}f(t)\,dt=\int_0^{\pi}e^{-st}\,dt=\frac{1-e^{-\pi s}}{s}.
$$

Por tanto,

$$
F(s)=\frac{1-e^{-\pi s}}{s\,(1-e^{-2\pi s})}=\frac{1}{s\,(1+e^{-\pi s})},
$$

donde se usó $1-e^{-2\pi s}=(1-e^{-\pi s})(1+e^{-\pi s})$. Para $\operatorname{Re}s>0$ se tiene $|e^{-\pi s}|<1$, así que el factor $1/(1+e^{-\pi s})$ admite el desarrollo en serie geométrica

$$
\frac{1}{1+e^{-\pi s}}=\sum_{n=0}^{\infty}(-1)^n e^{-n\pi s}
$$

y

$$
F(s)=\frac{1}{s}\sum_{n=0}^{\infty}(-1)^n e^{-n\pi s}.
$$

Se aplica la **transformada de Laplace** a la ecuación. Con $Y(s)=\mathcal{L}\{y\}$ y las condiciones $y(0)=1$, $y'(0)=0$,

$$
\begin{aligned}
s^2Y-s\,y(0)-y'(0)+Y &= F(s), \\
Y(s) &= \frac{s}{s^2+1}+\frac{F(s)}{s^2+1}.
\end{aligned}
$$

El primer término es la respuesta de la condición inicial. Para el segundo, la descomposición en fracciones parciales

$$
\frac{1}{s(s^2+1)}=\frac{1}{s}-\frac{s}{s^2+1}
$$

permite escribir

$$
\frac{F(s)}{s^2+1}=\sum_{n=0}^{\infty}(-1)^n e^{-n\pi s}\left(\frac{1}{s}-\frac{s}{s^2+1}\right).
$$

Como

$$
\mathcal{L}^{-1}\!\left\{\frac{1}{s}-\frac{s}{s^2+1}\right\}=1-\cos t,
$$

el **segundo teorema de traslación** invierte cada término desplazado:

$$
\mathcal{L}^{-1}\!\left\{e^{-n\pi s}\left(\frac{1}{s}-\frac{s}{s^2+1}\right)\right\}=\bigl[1-\cos(t-n\pi)\bigr]\,u_{n\pi}(t).
$$

Con $\mathcal{L}^{-1}\{s/(s^2+1)\}=\cos t$ y la linealidad de la transformada inversa,

$$
y(t)=\cos t+\sum_{n=0}^{\infty}(-1)^n\bigl[1-\cos(t-n\pi)\bigr]\,u_{n\pi}(t).
$$

Finalmente, $\cos(t-n\pi)=\cos t\cos n\pi=(-1)^n\cos t$, de donde

$$
(-1)^n\bigl[1-\cos(t-n\pi)\bigr]=(-1)^n-\cos t,
$$

lo que da la forma simplificada de la solución. Para cada $t\ge0$ solo contribuyen los términos con $n\pi\le t$, de modo que la serie tiene un número finito de sumandos no nulos y la solución está bien definida para todo $t\ge0$. La función $y$ y su derivada $y'$ son continuas en los puntos de salto $t=k\pi$, mientras que $y''$ salta junto con $f$; la solución satisface la ecuación en cada intervalo entre saltos y cumple las condiciones iniciales.

## Observaciones

Aunque $f$ es periódica, la solución no lo es: la componente fundamental de la onda cuadrada tiene la misma frecuencia que la oscilación libre del oscilador $y''+y=0$, de modo que se produce resonancia y la amplitud crece sin cota.

La solución también puede escribirse por tramos. Para $t\in[2k\pi,(2k+1)\pi)$ con $k=0,1,2,\dots$,

$$
y(t)=1-2k\cos t,
$$

y para $t\in[(2k+1)\pi,(2k+2)\pi)$,

$$
y(t)=-(2k+1)\cos t.
$$
