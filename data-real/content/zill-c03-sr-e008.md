
## Enunciado

8. Suponga que una célula está suspendida en una solución que contiene un soluto de concentración constante $C_s$. Suponga además que la célula tiene volumen constante $V$ y que el área de su membrana permeable es la constante $A$. Por la ley de Fick, la rapidez de cambio de su masa $m$ es directamente proporcional al área $A$ y la diferencia $C_s - C(t)$, donde $C(t)$ es la concentración del soluto dentro de la célula al tiempo $t$. Encuentre $C(t)$ si $m = V \cdot C(t)$ y $C(0) = C_0$. Vea la figura 3.R.2.

## Solución

Sea $k>0$ la constante de proporcionalidad. La concentración del soluto dentro de la célula es

$$
C(t) = C_s + (C_0 - C_s)\,e^{-(kA/V)t}.
$$

## Resolución

La ley de Fick se traduce en la ecuación diferencial

$$
\frac{dm}{dt} = k\,A\,\bigl(C_s - C(t)\bigr),
$$

donde $k>0$ es la constante de proporcionalidad. Como el volumen $V$ es constante y $m = V\,C(t)$, la regla de la cadena da

$$
\frac{dm}{dt} = V\,\frac{dC}{dt}.
$$

Al igualar las dos expresiones para $\dfrac{dm}{dt}$ y dividir entre $V$ se obtiene

$$
\frac{dC}{dt} = \frac{kA}{V}\,\bigl(C_s - C\bigr).
$$

Esta es una **ecuación lineal de primer orden**. Se escribe en forma estándar:

$$
\frac{dC}{dt} + \frac{kA}{V}\,C = \frac{kA}{V}\,C_s.
$$

Se aplica el **factor integrante**. Con $\lambda = \dfrac{kA}{V}$, el factor es

$$
\mu(t) = \exp\!\left(\int \lambda\,dt\right) = e^{\lambda t}.
$$

Al multiplicar la forma estándar por $\mu(t)$, el miembro izquierdo es la derivada de $\mu(t)C$:

$$
\frac{d}{dt}\!\left(e^{\lambda t}C\right) = \lambda C_s\,e^{\lambda t}.
$$

La integración respecto a $t$ da

$$
e^{\lambda t}C(t) = C_s\,e^{\lambda t} + K,
$$

con $K$ constante arbitraria. Por tanto,

$$
C(t) = C_s + K\,e^{-\lambda t}.
$$

La condición inicial $C(0)=C_0$ fija la constante:

$$
C_0 = C_s + K \quad\Longrightarrow\quad K = C_0 - C_s.
$$

Sustituyendo $\lambda = \dfrac{kA}{V}$ resulta

$$
C(t) = C_s + (C_0 - C_s)\,e^{-(kA/V)t}.
$$

La solución es válida para todo $t \ge 0$.

## Observaciones

La concentración $C(t)=C_s$ es la solución de equilibrio del modelo: no hay flujo neto de soluto a través de la membrana. Si $C_0<C_s$ la célula gana soluto y $C$ crece; si $C_0>C_s$ lo pierde y $C$ decrece. En ambos casos $C(t)\to C_s$ cuando $t\to\infty$.

### Método alternativo: separación de variables

La misma ecuación, con $\lambda=\dfrac{kA}{V}$, admite **separación de variables**:

$$
\int\frac{dC}{C_s-C}=\lambda\int dt
\quad\Longrightarrow\quad
-\ln|C_s-C|=\lambda t + C_1.
$$

Al despejar, $|C_s-C|=e^{-C_1}e^{-\lambda t}$, esto es, $C(t)=C_s+K\,e^{-\lambda t}$ con $K=\pm e^{-C_1}$. La condición inicial $C(0)=C_0$ vuelve a dar $K=C_0-C_s$ y conduce a la misma solución. Esta vía supone $C\ne C_s$ al dividir; la solución constante $C=C_s$ se recupera como el caso $C_0=C_s$.
