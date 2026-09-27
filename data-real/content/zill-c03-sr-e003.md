
## Enunciado

3. En marzo de 1976 la población mundial llegó a cuatro mil millones. Una popular revista de noticias pronosticó que con una rapidez de crecimiento anual promedio de $1.8\%$, la población mundial sería de 8 mil millones en 45 años. ¿Cómo se compara este valor con el que se predice por el modelo en el que se supone que la rapidez de crecimiento en la población es proporcional a la población presente en el tiempo $t$?

## Solución

Sea $P(t)$ la población mundial, en miles de millones, al cabo de $t$ años desde marzo de 1976. El modelo de crecimiento proporcional es $dP/dt=kP$ con $P(0)=4$ y $k=0.018$. La solución es

$$
P(t)=4e^{0.018t}.
$$

En $t=45$ años,

$$
P(45)=4e^{0.81}\approx 8.99 \text{ mil millones}.
$$

El modelo predice unos $9.0$ mil millones, alrededor de $1$ mil millones más que los $8$ mil millones del pronóstico. De forma equivalente, la población se duplica en

$$
t=\frac{\ln 2}{0.018}\approx 38.5 \text{ años},
$$

antes de los $45$ años de la revista.

## Resolución

Sea $P(t)$ la población mundial, en miles de millones, y $t$ el tiempo en años medido desde marzo de 1976. La rapidez de crecimiento proporcional a la población presente se traduce en

$$
\frac{dP}{dt}=kP,\qquad P(0)=4,
$$

donde $k$ es la tasa relativa de crecimiento anual.

La ecuación es **lineal de primer orden**. En forma estándar,

$$
\frac{dP}{dt}-kP=0.
$$

El factor integrante es $\mu(t)=\exp\!\left(\int -k\,dt\right)=e^{-kt}$. Al multiplicar la ecuación por $\mu$,

$$
\frac{d}{dt}\!\left(e^{-kt}P\right)
=e^{-kt}\left(\frac{dP}{dt}-kP\right)=0.
$$

Por tanto, $e^{-kt}P=C$ y

$$
P(t)=Ce^{kt}.
$$

La condición inicial $P(0)=4$ fija $C=4$, así que

$$
P(t)=4e^{kt}.
$$

La revista cita una tasa media anual de $1.8\%$. En el modelo, esa tasa es la constante relativa, es decir, $k=0.018$. Para $t=45$ años,

$$
P(45)=4e^{0.018\cdot 45}=4e^{0.81}.
$$

Con $e^{0.81}\approx 2.2479$,

$$
P(45)\approx 8.99.
$$

El modelo predice aproximadamente $9.0$ mil millones, un valor mayor que los $8$ mil millones del pronóstico; la diferencia es de alrededor de $1$ mil millones.

La comparación admite una lectura equivalente en términos del tiempo de duplicación. La población se duplica cuando $P(t)=8$:

$$
4e^{0.018t}=8
\quad\Longrightarrow\quad
e^{0.018t}=2
\quad\Longrightarrow\quad
t=\frac{\ln 2}{0.018}\approx 38.5.
$$

El modelo alcanza los $8$ mil millones unos $6.5$ años antes de los $45$ años del pronóstico. Dicho de otro modo, un tiempo de duplicación de $45$ años correspondería a una tasa media de $\frac{\ln 2}{45}\approx 0.0154$, esto es, $1.54\%$ anual, inferior al $1.8\%$ citado.

El modelo se interpreta para $t\ge 0$ y la población es siempre creciente porque $k>0$.

## Observaciones

La constante $k=0.018$ es la tasa relativa o per cápita: mide el aumento anual por cada unidad de población, no un incremento absoluto constante.

La diferencia entre ambos resultados no es de cálculo. Un $1.8\%$ sostenido y una duplicación en $45$ años son incompatibles dentro del modelo exponencial: la tasa que duplica en $45$ años es $\approx 1.54\%$ anual.

El modelo exponencial supone recursos ilimitados; describe bien periodos cortos y sobreestima la población a plazos largos.

### Método alternativo: separación de variables

La misma ecuación es separable. Para $P>0$,

$$
\frac{dP}{P}=k\,dt
\quad\Longrightarrow\quad
\ln P=kt+C_1
\quad\Longrightarrow\quad
P(t)=Ce^{kt}.
$$

La condición inicial $P(0)=4$ conduce al mismo resultado $P(t)=4e^{kt}$.
