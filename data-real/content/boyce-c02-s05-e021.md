
## Enunciado

Un tanque con una capacidad de 500 gal contiene originalmente 200 gal de agua con 100 lb de sal en solución. Se hace entrar agua que contiene 1 lb de sal por galón, a razón de 3 gal/min, y se deja que la mezcla salga del tanque a razón de 2 gal/min. Encuentre la cantidad de sal en el tanque en cualquier instante antes del momento en que la solución comienza a derramarse. Encuentre la concentración (en libras por galón) de sal en el tanque cuando se encuentra en el punto en que se derrama. Compare esta concentración con la concentración límite teórica, si la capacidad del tanque fuera infinita.

## Solución

La cantidad de sal antes del derrame es

$$
Q(t)=200+t-\frac{4\times 10^{6}}{(200+t)^2},
\qquad 0\le t\le 300,
$$

la concentración en el instante del derrame es

$$
c(300)=\frac{484}{500}=0.968\ \text{lb/gal},
$$

y la concentración límite teórica, si la capacidad fuera infinita, es $1$ lb/gal.

## Resolución

Sea $Q(t)$ la cantidad de sal en el tanque, en libras, y $V(t)$ el volumen de la solución, en galones, en el instante $t$ en minutos. El agua entra a razón de $3$ gal/min y sale a razón de $2$ gal/min, de modo que el volumen aumenta a razón de $1$ gal/min:

$$
V(t)=200+t.
$$

El tanque se llena cuando $V(t)=500$, es decir, en $t=300$ min; antes de ese instante la solución no se derrama.

La sal entra a razón de

$$
1\ \text{lb/gal}\cdot 3\ \text{gal/min}=3\ \text{lb/min}.
$$

La mezcla sale bien revuelta, por lo que su concentración es la del tanque, $Q(t)/V(t)$. Entonces la sal sale a razón de

$$
\frac{Q(t)}{200+t}\cdot 2=\frac{2Q(t)}{200+t}\ \text{lb/min}.
$$

El balance de sal conduce a la **ecuación lineal de primer orden**

$$
\frac{dQ}{dt}=3-\frac{2Q}{200+t}
\qquad\Longrightarrow\qquad
Q'+\frac{2}{200+t}Q=3,
$$

con la condición inicial $Q(0)=100$ lb.

El **factor integrante** es

$$
\mu(t)=\exp\!\left(\int \frac{2}{200+t}\,dt\right)
=\exp\!\left(2\ln(200+t)\right)=(200+t)^2.
$$

Al multiplicar la ecuación por $\mu(t)$, el miembro izquierdo es la derivada de un producto:

$$
\frac{d}{dt}\!\left[(200+t)^2Q\right]=3(200+t)^2.
$$

La integración da

$$
(200+t)^2Q=(200+t)^3+C,
$$

y al despejar,

$$
Q(t)=200+t+\frac{C}{(200+t)^2}.
$$

La condición inicial $Q(0)=100$ fija

$$
100=200+\frac{C}{200^2}
\quad\Longrightarrow\quad
C=-100\cdot 40000=-4\times 10^{6}.
$$

Por tanto, la cantidad de sal en el tanque antes del derrame es

$$
Q(t)=200+t-\frac{4\times 10^{6}}{(200+t)^2},
\qquad 0\le t\le 300.
$$

En el instante en que la solución comienza a derramarse, $t=300$ y $V=500$ gal, de donde

$$
Q(300)=500-\frac{4\times 10^{6}}{500^2}=500-16=484\ \text{lb}.
$$

La concentración es entonces

$$
c(300)=\frac{Q(300)}{V(300)}=\frac{484}{500}=0.968\ \text{lb/gal}.
$$

Si la capacidad del tanque fuera infinita, el mismo modelo seguiría siendo válido para todo $t\ge 0$ sin derrame. La concentración en el tanque es

$$
c(t)=\frac{Q(t)}{200+t}=1-\frac{4\times 10^{6}}{(200+t)^3},
$$

de modo que la concentración límite teórica es

$$
\lim_{t\to\infty}c(t)=1\ \text{lb/gal}.
$$

La concentración en el derrame, $0.968$ lb/gal, es menor que la concentración límite $1$ lb/gal, que coincide con la del agua que entra. La concentración del tanque se aproxima a ese valor desde abajo.

## Observaciones

La concentración aumenta de forma monótona desde $0.5$ lb/gal en $t=0$ hasta $0.968$ lb/gal en el derrame. El valor límite coincide con la concentración de la corriente de entrada: con el tiempo, el aporte de sal de la entrada domina y la concentración del tanque se iguala a la de dicha corriente. En un tanque de capacidad finita el derrame ocurre antes de alcanzar ese límite, por lo que la concentración de derrame queda por debajo.
