
## Enunciado

4. A una habitación cuyo volumen es $200\text{ m}^3$ se bombea aire que contiene $0.06\%$ de dióxido de carbono. Se introduce a la habitación un flujo de aire de $50\text{ m}^3/\text{min}$ y se extrae el mismo flujo de aire circulado. Si hay una concentración inicial de $0.2\%$ de dióxido de carbono en la habitación, determine la cantidad posterior en la habitación al tiempo $t$. ¿Cuál es la concentración de dióxido de carbono a los 10 minutos? ¿Cuál es la concentración de dióxido de carbono de estado estable o de equilibrio?

## Solución

La cantidad de dióxido de carbono en la habitación al tiempo $t$ es

$$
x(t) = 0.12 + 0.28 e^{-t/4}\ \text{m}^3.
$$

La concentración a los 10 minutos es

$$
c(10) = 0.06 + 0.14 e^{-2.5} \approx 0.0715\%,
$$

y la concentración de equilibrio es $0.06\%$.

## Resolución

Sea $x(t)$ el volumen de dióxido de carbono, en metros cúbicos, presente en la habitación al tiempo $t$, con $t$ en minutos. El volumen de la habitación es constante e igual a $200\text{ m}^3$. La concentración instantánea es entonces $x(t)/200$.

El aire que entra contiene $0.06\% = 0.0006$ de dióxido de carbono en volumen. Con un flujo de $50\text{ m}^3/\text{min}$, la cantidad que entra por minuto es

$$
50 \cdot 0.0006 = 0.03\ \text{m}^3/\text{min}.
$$

El aire sale al mismo flujo y la mezcla se supone uniforme. Por tanto, la cantidad que sale por minuto es

$$
50 \cdot \frac{x(t)}{200} = \frac{x(t)}{4}\ \text{m}^3/\text{min}.
$$

El balance de masa da la ecuación diferencial

$$
\frac{dx}{dt} = 0.03 - \frac{x}{4},
$$

que en forma estándar se escribe

$$
\frac{dx}{dt} + \frac{1}{4}x = 0.03.
$$

La ecuación es lineal de primer orden. El factor integrante es

$$
\mu(t) = \exp\!\left(\int \frac{1}{4}\,dt\right) = e^{t/4}.
$$

Al multiplicar ambos miembros por $\mu(t)$ se obtiene

$$
\frac{d}{dt}\!\left(e^{t/4}x\right) = 0.03 e^{t/4}.
$$

La integración da

$$
e^{t/4}x = 0.03 \int e^{t/4}\,dt = 0.12 e^{t/4} + C,
$$

de donde

$$
x(t) = 0.12 + C e^{-t/4}.
$$

La concentración inicial es $0.2\% = 0.002$, de modo que la cantidad inicial es

$$
x(0) = 0.002 \cdot 200 = 0.4\ \text{m}^3.
$$

Al imponer $x(0) = 0.4$ resulta $0.4 = 0.12 + C$, es decir, $C = 0.28$. Entonces

$$
x(t) = 0.12 + 0.28 e^{-t/4}\ \text{m}^3.
$$

La concentración, expresada como porcentaje, es

$$
c(t) = \frac{x(t)}{200}\cdot 100\% = 0.06 + 0.14 e^{-t/4}\ \%.
$$

A los 10 minutos, $e^{-2.5} \approx 0.0821$, así que

$$
c(10) = 0.06 + 0.14 e^{-2.5} \approx 0.06 + 0.0115 = 0.0715\%.
$$

Cuando $t \to \infty$, el término exponencial tiende a cero. La concentración de equilibrio es

$$
c_{\text{eq}} = 0.06\%,
$$

y la cantidad de equilibrio correspondiente es $0.12\text{ m}^3$.

## Observaciones

La concentración de equilibrio coincide con la del aire que entra y no depende de la concentración inicial. La cantidad de dióxido de carbono se aproxima a ese valor de forma monótona, sin oscilaciones.

### Método alternativo: separación de variables

La ecuación del balance también es separable, ya que $0.03 - x/4 = -\frac{1}{4}(x - 0.12)$. Integrando,

$$
\int \frac{dx}{0.03 - x/4} = \int dt, \qquad -4\ln\left|0.03 - \frac{x}{4}\right| = t + C',
$$

y al despejar se recupera $x(t) = 0.12 + C e^{-t/4}$.
