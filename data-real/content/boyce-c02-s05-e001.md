
## Enunciado

El isótopo radiactivo plutonio 241 decae de forma que se satisface la ecuación diferencial

$$dQ/dt = -0.0525Q$$

en donde $Q$ se mide en miligramos y $t$ en años.

a) Determine la vida media $\tau$ del plutonio 241.

b) Si en este momento se cuenta con 50 mg de plutonio, ¿cuánto quedará en 10 años?

## Solución

La vida media y la masa restante son

$$
\tau = \frac{\ln 2}{0.0525}\approx 13.20\ \text{años},
\qquad
Q(10) = 50\,e^{-0.525}\approx 29.6\ \text{mg}.
$$

## Resolución

La ecuación $dQ/dt = -0.0525Q$ es **lineal de primer orden y homogénea**. En la forma estándar $Q' + P(t)Q = 0$ se tiene $P(t) = 0.0525$, de modo que el **factor integrante** es

$$
\mu(t) = \exp\!\left(\int 0.0525\,dt\right) = e^{0.0525t}.
$$

Al multiplicar la ecuación por $\mu(t)$, el miembro izquierdo es la derivada de un producto:

$$
\frac{d}{dt}\!\left[e^{0.0525t}Q\right] = 0.
$$

La integración da $e^{0.0525t}Q = C$; al despejar,

$$
Q(t) = C e^{-0.0525t}.
$$

Si $Q_0 = Q(0)$ es la cantidad inicial, la constante queda $C = Q_0$, así que

$$
Q(t) = Q_0 e^{-0.0525t}.
$$

**a)** La vida media $\tau$ es el tiempo necesario para que la cantidad se reduzca a la mitad, es decir, $Q(\tau) = Q_0/2$. Con $Q_0 > 0$,

$$
Q_0 e^{-0.0525\tau} = \frac{Q_0}{2}
\quad\Longrightarrow\quad
e^{-0.0525\tau} = \frac{1}{2}.
$$

Al aplicar logaritmo natural y usar $\ln\!\left(\frac{1}{2}\right) = -\ln 2$,

$$
-0.0525\tau = -\ln 2
\quad\Longrightarrow\quad
\tau = \frac{\ln 2}{0.0525}\approx 13.20\ \text{años}.
$$

**b)** Con $Q_0 = 50$ mg y $t = 10$ años,

$$
Q(10) = 50\,e^{-0.0525(10)} = 50\,e^{-0.525}\approx 29.6\ \text{mg}.
$$

## Observaciones

La vida media no depende de la cantidad inicial $Q_0$: es una propiedad de la sustancia. De $Q(t)/Q_0 = 2^{-t/\tau}$ se desprende que cada intervalo de duración $\tau$ reduce la masa a la mitad.

La solución es válida para todo $t \ge 0$. Como el coeficiente de decaimiento es negativo, $Q(t) \to 0$ cuando $t \to \infty$.
