---
title: "Boyce 2.5 Ejercicio 13"
exercise-id: boyce-c02-s05-e013
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.5, ejercicio 13"
topics:
  - primer-orden
competencies:
  - modelizar.formular-edo
  - resolver-analiticamente.lineales-primer-orden
  - interpretar.contexto-modelo
hidden-competencies:
  - clasificar.linealidad
  - seleccionar-metodo.factor-integrante
prerequisitos:
  - ecuaciones-diferenciales.primer-orden
  - integracion.directa
difficulty:
  conceptual: 1
  technical: 2
statement-status: accepted
solution-status: draft
source-images:
  - c02s05i03-p069.png
---

## Enunciado

Suponga que la población de la Tierra cambia con una rapidez proporcional a la población actual. (En la sección 2.6 se considera una hipótesis más exacta referente al crecimiento de la población.) Además, se estima que en el instante $t = 0$ (1650 de nuestra era), la población de la Tierra era de 600 millones ($6.0 \times 10^8$); en el instante $t = 300$ (1950 D.C.), la población era de 2.8 miles de millones ($2.8 \times 10^9$). Encuentre una expresión que dé la población de la Tierra en cualquier instante. Si se supone que la población máxima que la Tierra puede sostener es de 25 miles de millones ($2.5 \times 10^{10}$), ¿cuándo se alcanzará este límite?

## Solución

La población en el instante $t$, medido en años a partir de 1650, es

$$
P(t) = 6.0\times10^8\, e^{kt}, \qquad
k = \frac{1}{300}\ln\frac{14}{3} \approx 5.135\times10^{-3}\ \text{año}^{-1}.
$$

De forma equivalente,

$$
P(t) = 6.0\times10^8\left(\frac{14}{3}\right)^{t/300}.
$$

El límite de $2.5\times10^{10}$ habitantes se alcanza en

$$
t = \frac{300\ln(125/3)}{\ln(14/3)} \approx 726\ \text{años},
$$

esto es, alrededor del año 2376.

## Resolución

Sea $P(t)$ la población de la Tierra, con $t$ medido en años desde 1650. La hipótesis «la rapidez de cambio es proporcional a la población actual» se traduce en la ecuación

$$
\frac{dP}{dt} = kP, \qquad k > 0.
$$

La ecuación es **lineal de primer orden**. En su forma estándar, $\dfrac{dP}{dt} - kP = 0$, el factor integrante es

$$
\mu(t) = \exp\!\left(\int(-k)\,dt\right) = e^{-kt}.
$$

Al multiplicar por $\mu(t)$, la ecuación resulta

$$
e^{-kt}\left(\frac{dP}{dt} - kP\right) = 0
\quad\Longrightarrow\quad
\frac{d}{dt}\!\left(e^{-kt}P\right) = 0.
$$

Integrando respecto de $t$,

$$
e^{-kt}P = C,
$$

de donde la solución general es

$$
P(t) = Ce^{kt}.
$$

La condición en $t = 0$ fija la constante: $P(0) = C = 6.0\times10^8$. La condición en $t = 300$ determina $k$:

$$
6.0\times10^8\,e^{300k} = 2.8\times10^9.
$$

Por tanto,

$$
e^{300k} = \frac{2.8\times10^9}{6.0\times10^8} = \frac{14}{3},
\qquad
k = \frac{1}{300}\ln\frac{14}{3} \approx 5.135\times10^{-3}.
$$

Así, la población en cualquier instante es

$$
P(t) = 6.0\times10^8\, e^{(\ln(14/3)/300)\,t}
      = 6.0\times10^8\left(\frac{14}{3}\right)^{t/300}.
$$

Se determina ahora el instante $T$ en que $P(T) = 2.5\times10^{10}$:

$$
6.0\times10^8\, e^{kT} = 2.5\times10^{10}
\quad\Longrightarrow\quad
e^{kT} = \frac{2.5\times10^{10}}{6.0\times10^8} = \frac{125}{3},
$$

$$
T = \frac{1}{k}\ln\frac{125}{3}
  = \frac{300\ln(125/3)}{\ln(14/3)} \approx 726.4\ \text{años}.
$$

El límite se alcanza unos 726 años después de 1650, esto es, hacia el año 2376.

Comprobación. De $P(t) = Ce^{kt}$ se obtiene $P'(t) = kCe^{kt} = kP(t)$, que es la ecuación planteada. Las dos condiciones de los datos se emplearon para fijar $C$ y $k$. La solución es válida para $t \ge 0$, el intervalo en que se dispone de los datos.

## Observaciones

El modelo exponencial supone crecimiento sin restricciones. Por eso predice que la cota de $2.5\times10^{10}$ se alcanza en un tiempo finito, en lugar de aproximarse a ella de forma asintótica. Este comportamiento motiva la hipótesis logística que se estudia en la sección 2.6.

### Método alternativo: separación de variables

La ecuación $\dfrac{dP}{dt} = kP$ también es separable. Al separar e integrar,

$$
\frac{dP}{P} = k\,dt
\quad\Longrightarrow\quad
\ln P = kt + C_1
\quad\Longrightarrow\quad
P(t) = Ce^{kt},
$$

con $C = e^{C_1} > 0$, en concordancia con la solución obtenida mediante el **factor integrante**.
