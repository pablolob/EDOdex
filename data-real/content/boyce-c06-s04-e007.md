
## Enunciado

En cada uno de los problemas 1 a 12, encuentre la solución del problema con valor inicial dado por medio de la transformada de Laplace.

7. $y'' + y = \delta(t - \pi)\cos t; \quad y(0) = 0, \ y'(0) = 1$

## Solución

La solución del problema con valor inicial es

$$
y(t)=\sin t+u(t-\pi)\sin t,
$$

donde $u(t-\pi)$ es la **función escalón unitario**. De forma explícita por intervalos,

$$
y(t)=
\begin{cases}
\sin t, & 0\le t<\pi,\\[4pt]
2\sin t, & t\ge \pi.
\end{cases}
$$

## Resolución

Se aplica la **transformada de Laplace**. Sea $Y(s)=\mathcal{L}\{y(t)\}$. Con $y(0)=0$ y $y'(0)=1$,

$$
\mathcal{L}\{y''\}=s^2Y(s)-s\,y(0)-y'(0)=s^2Y(s)-1.
$$

Para la forzante se emplea la propiedad de muestreo del impulso,
$\mathcal{L}\{\delta(t-a)f(t)\}=e^{-as}f(a)$, con $f(t)=\cos t$ y $a=\pi$:

$$
\mathcal{L}\{\delta(t-\pi)\cos t\}=e^{-\pi s}\cos\pi=-e^{-\pi s}.
$$

Al transformar la ecuación,

$$
\begin{aligned}
s^2Y(s)-1+Y(s) &= -e^{-\pi s},\\
(s^2+1)\,Y(s) &= 1-e^{-\pi s},
\end{aligned}
$$

de donde

$$
Y(s)=\frac{1}{s^2+1}-\frac{e^{-\pi s}}{s^2+1}.
$$

El primer término es el par básico $\mathcal{L}^{-1}\{1/(s^2+1)\}=\sin t$. El segundo tiene la forma $e^{-as}F(s)$ con $a=\pi$ y $F(s)=1/(s^2+1)$, de modo que el **segundo teorema de traslación** da

$$
\mathcal{L}^{-1}\!\left\{\frac{e^{-\pi s}}{s^2+1}\right\}
=u(t-\pi)\sin(t-\pi)
=-u(t-\pi)\sin t,
$$

pues $\sin(t-\pi)=-\sin t$. Al reunir ambos términos,

$$
y(t)=\sin t+u(t-\pi)\sin t.
$$

La solución satisface las condiciones iniciales: en $t=0$ el término escalón se anula, $y(0)=\sin 0=0$ y $y'(0)=\cos 0=1$.

## Observaciones

El impulso aparece multiplicado por $\cos t$, de modo que no se transforma el coseno por separado: la propiedad de muestreo lo evalúa en $t=\pi$, donde $\cos\pi=-1$. Por eso el coeficiente del impulso es $-1$.

La solución es continua en $t=\pi$, con $y(\pi)=0$, y la derivada salta en esa cantidad:

$$
y'(\pi^+)-y'(\pi^-)=2\cos\pi-\cos\pi=\cos\pi=-1.
$$

Tras el impulso la amplitud se duplica: la solución pasa de $\sin t$ a $2\sin t$. El intervalo de validez es $[0,\infty)$.
