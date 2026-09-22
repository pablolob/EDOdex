
## Enunciado

En cada uno de los problemas 1 a 12, encuentre la solución del problema con valor inicial dado por medio de la transformada de Laplace.

1. $y'' + 2y' + 2y = \delta(t - \pi); \quad y(0) = 1, \ y'(0) = 0$

## Solución

La solución del problema con valor inicial es

$$
y(t)=e^{-t}\left(\cos t+\sin t\right)-u(t-\pi)\,e^{-(t-\pi)}\sin t,
$$

donde $u(t-\pi)$ es la función escalón unitario.

## Resolución

Se aplica la **transformada de Laplace**. Sea $Y(s)=\mathcal{L}\{y(t)\}$. Con las condiciones iniciales dadas,

$$
\begin{aligned}
\mathcal{L}\{y'\} &= sY(s)-y(0)=sY(s)-1,\\
\mathcal{L}\{y''\} &= s^2Y(s)-s\,y(0)-y'(0)=s^2Y(s)-s,
\end{aligned}
$$

y por la transformada del impulso, $\mathcal{L}\{\delta(t-\pi)\}=e^{-\pi s}$.

Al transformar la ecuación,

$$
\begin{aligned}
s^2Y-s+2(sY-1)+2Y &= e^{-\pi s},\\
(s^2+2s+2)Y &= s+2+e^{-\pi s}.
\end{aligned}
$$

Por tanto,

$$
Y(s)=\frac{s+2}{s^2+2s+2}+\frac{e^{-\pi s}}{s^2+2s+2}.
$$

El denominador se escribe como $s^2+2s+2=(s+1)^2+1$. El primer término se separa en

$$
\frac{s+2}{(s+1)^2+1}=\frac{s+1}{(s+1)^2+1}+\frac{1}{(s+1)^2+1}.
$$

El **primer teorema de traslación** da

$$
\mathcal{L}^{-1}\!\left\{\frac{s+1}{(s+1)^2+1}\right\}=e^{-t}\cos t,
\qquad
\mathcal{L}^{-1}\!\left\{\frac{1}{(s+1)^2+1}\right\}=e^{-t}\sin t.
$$

Para el segundo término se emplea el **segundo teorema de traslación**. Con $f(t)=e^{-t}\sin t$,

$$
\mathcal{L}^{-1}\!\left\{\frac{e^{-\pi s}}{(s+1)^2+1}\right\}
=u(t-\pi)\,f(t-\pi)
=u(t-\pi)\,e^{-(t-\pi)}\sin(t-\pi).
$$

Como $\sin(t-\pi)=-\sin t$, este término equivale a $-u(t-\pi)\,e^{-(t-\pi)}\sin t$. Al reunir ambos resultados,

$$
y(t)=e^{-t}(\cos t+\sin t)-u(t-\pi)\,e^{-(t-\pi)}\sin t.
$$

La solución satisface las condiciones iniciales: en $t=0$ el término escalón se anula y $e^{-t}(\cos t+\sin t)$ toma los valores $1$ y $0$ para la función y su derivada, respectivamente.

## Observaciones

En forma explícita por intervalos,

$$
y(t)=
\begin{cases}
e^{-t}(\cos t+\sin t), & 0\le t<\pi,\\[4pt]
e^{-t}\bigl[\cos t+(1-e^{\pi})\sin t\bigr], & t\ge \pi.
\end{cases}
$$

El impulso en $t=\pi$ no altera el valor de la solución, que es continua en ese punto, pero produce un salto en la derivada: $y'(\pi^+)-y'(\pi^-)=1$, igual al coeficiente del impulso.
