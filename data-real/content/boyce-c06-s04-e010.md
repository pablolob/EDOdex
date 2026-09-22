
## Enunciado

En cada uno de los problemas 1 a 12, encuentre la solución del problema con valor inicial dado por medio de la transformada de Laplace.

10. $y'' + 4y = 4\delta(t - \pi/6)\sin t; \quad y(0) = 0, \ y'(0) = 0$

## Solución

La solución del problema con valor inicial es

$$
y(t)=u\!\left(t-\frac{\pi}{6}\right)\sin\!\left(2t-\frac{\pi}{3}\right),
$$

donde $u$ es la función escalón unitario.

## Resolución

Se aplica la **transformada de Laplace**. Sea $Y(s)=\mathcal{L}\{y(t)\}$. Como $y(0)=y'(0)=0$,

$$
\mathcal{L}\{y''\}=s^2Y(s)-s\,y(0)-y'(0)=s^2Y(s).
$$

Para transformar el miembro derecho se usa la propiedad de muestreo del impulso, $\mathcal{L}\{f(t)\delta(t-a)\}=e^{-as}f(a)$. Con $f(t)=4\sin t$ y $a=\pi/6$,

$$
f\!\left(\frac{\pi}{6}\right)=4\sin\frac{\pi}{6}=2,
\qquad
\mathcal{L}\!\left\{4\sin t\,\delta\!\left(t-\frac{\pi}{6}\right)\right\}=2e^{-\pi s/6}.
$$

Al transformar la ecuación resulta

$$
(s^2+4)Y(s)=2e^{-\pi s/6},
$$

de donde

$$
Y(s)=\frac{2e^{-\pi s/6}}{s^2+4}.
$$

Como $\mathcal{L}^{-1}\{2/(s^2+4)\}=\sin 2t$, el **segundo teorema de traslación** da

$$
y(t)=u\!\left(t-\frac{\pi}{6}\right)\sin\!\left(2\left(t-\frac{\pi}{6}\right)\right)
=u\!\left(t-\frac{\pi}{6}\right)\sin\!\left(2t-\frac{\pi}{3}\right).
$$

Para $t<\pi/6$ el escalón se anula, de modo que $y(t)=0$ y las condiciones iniciales se satisfacen.

## Observaciones

En forma explícita por intervalos,

$$
y(t)=
\begin{cases}
0, & 0\le t<\dfrac{\pi}{6},\\[6pt]
\sin\!\left(2t-\dfrac{\pi}{3}\right), & t\ge \dfrac{\pi}{6}.
\end{cases}
$$

El impulso no altera el valor de la solución, que es continua en $t=\pi/6$, pero produce un salto en la derivada igual a $4\sin(\pi/6)=2$.
