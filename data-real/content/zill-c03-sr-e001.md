
## Enunciado

**Responda los problemas 1 y 2 sin consultar las respuestas del libro. Llene los espacios en blanco y responda verdadero o falso.**

1. Si $P(t) = P_0 e^{0.15t}$ da la población en un medio ambiente al tiempo $t$, entonces una ecuación diferencial que satisface $P(t)$ es ________.

## Solución

La ecuación diferencial es

$$
\frac{dP}{dt}=0.15P.
$$

## Resolución

La función dada es $P(t)=P_0e^{0.15t}$, con $P_0$ constante. Al derivar respecto de $t$ se obtiene

$$
P'(t)=P_0\cdot 0.15\,e^{0.15t}.
$$

El factor $P_0e^{0.15t}$ es la propia función $P(t)$, de modo que

$$
P'(t)=0.15P(t).
$$

Por tanto, $P(t)$ satisface la ecuación diferencial

$$
\frac{dP}{dt}=0.15P.
$$

La ecuación es **lineal de primer orden** y **autónoma**; corresponde al modelo de crecimiento exponencial con tasa relativa $k=0.15$. La condición $P(0)=P_0$ está incorporada en la forma de la solución. Para $P_0>0$ se tiene $P(t)>0$ en todo $t$, y $P\equiv 0$ es la solución constante asociada a $P_0=0$; no hay soluciones perdidas.

## Observaciones

La ecuación también puede escribirse como $\dfrac{dP}{dt}-0.15P=0$. En general, toda función de la forma $P(t)=P_0e^{kt}$ satisface $P'=kP$, de modo que el exponente $0.15$ es la tasa relativa de crecimiento.

Este ejercicio recorre el camino inverso al habitual: la solución está dada y la ecuación se construye por derivación, sin resolverla.
