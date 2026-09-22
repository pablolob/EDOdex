
## Enunciado

En cada uno de los problemas 1 a 12, encuentre la solución del problema con valor inicial dado por medio de la transformada de Laplace.

6. $y'' + \omega^2 y = \delta(t - \pi/\omega); \quad y(0) = 1, \ y'(0) = 0$

## Solución

Para $\omega > 0$ la solución del problema con valor inicial es

$$
y(t)=\cos(\omega t)-\frac{1}{\omega}\,u\!\left(t-\frac{\pi}{\omega}\right)\sin(\omega t),
$$

donde $u$ es la función escalón unitario.

## Resolución

Se aplica la **transformada de Laplace**. Sea $Y(s)=\mathcal{L}\{y(t)\}$. Con las condiciones iniciales dadas,

$$
\mathcal{L}\{y''\}=s^2Y(s)-s\,y(0)-y'(0)=s^2Y(s)-s,
$$

y por la transformada del impulso, $\mathcal{L}\{\delta(t-\pi/\omega)\}=e^{-\pi s/\omega}$.

Al transformar la ecuación resulta

$$
s^2Y(s)-s+\omega^2Y(s)=e^{-\pi s/\omega},
$$

es decir,

$$
(s^2+\omega^2)\,Y(s)=s+e^{-\pi s/\omega},
$$

de donde

$$
Y(s)=\frac{s}{s^2+\omega^2}+\frac{e^{-\pi s/\omega}}{s^2+\omega^2}.
$$

El primer sumando es un par básico de la tabla:

$$
\mathcal{L}^{-1}\!\left\{\frac{s}{s^2+\omega^2}\right\}=\cos(\omega t).
$$

Para el segundo sumando se emplea el **segundo teorema de traslación**. Con $a=\pi/\omega$ y $F(s)=\dfrac{1}{s^2+\omega^2}$, cuya transformada inversa es $f(t)=\dfrac{1}{\omega}\sin(\omega t)$, se tiene

$$
\mathcal{L}^{-1}\!\left\{e^{-as}F(s)\right\}=u(t-a)\,f(t-a)
=\frac{1}{\omega}\,u\!\left(t-\frac{\pi}{\omega}\right)\sin\!\left(\omega t-\pi\right).
$$

Como $\sin(\omega t-\pi)=-\sin(\omega t)$, este término equivale a $-\dfrac{1}{\omega}u\!\left(t-\dfrac{\pi}{\omega}\right)\sin(\omega t)$. Al reunir ambos resultados,

$$
y(t)=\cos(\omega t)-\frac{1}{\omega}\,u\!\left(t-\frac{\pi}{\omega}\right)\sin(\omega t).
$$

La solución satisface las condiciones iniciales: en $t=0$ el término escalón se anula y $\cos 0=1$, mientras que su derivada $-\omega\sin 0=0$; por tanto $y(0)=1$ y $y'(0)=0$.

## Observaciones

En forma explícita por intervalos,

$$
y(t)=
\begin{cases}
\cos(\omega t), & 0\le t<\dfrac{\pi}{\omega},\\[8pt]
\cos(\omega t)-\dfrac{1}{\omega}\sin(\omega t), & t\ge \dfrac{\pi}{\omega}.
\end{cases}
$$

El impulso actúa en $t=\pi/\omega$, que corresponde a medio periodo de oscilación. La solución es continua allí, pues el término con escalón se anula, pero su derivada presenta un salto de magnitud $1$: $y'(\pi/\omega^+)-y'(\pi/\omega^-)=1$, igual al coeficiente del impulso. Después del impulso la solución sigue siendo una oscilación libre del mismo periodo, con amplitud y fase modificadas.
