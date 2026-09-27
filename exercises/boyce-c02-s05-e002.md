---
title: "Boyce 2.5 Ejercicio 2"
exercise-id: boyce-c02-s05-e002
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.5, ejercicio 2"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - modelizar.formular-edo
  - resolver-analiticamente.lineales-primer-orden
  - interpretar.contexto-modelo
prerequisitos:
  - integracion.directa
  - ecuaciones-diferenciales.primer-orden
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c02s05i01-p067.png
---

## Enunciado

El einstenio 253 decae con una rapidez proporcional a la cantidad que se tenga. Determine la vida media $\tau$ si este material pierde un tercio de su masa en 11.7 días.

## Solución

$$
\tau = \frac{11.7\,\ln 2}{\ln(3/2)} \approx 20.0\ \text{días}.
$$

## Resolución

Sea $Q(t)$ la masa de einstenio 253 presente en el instante $t$, medido en días. El enunciado indica que la rapidez de decaimiento es proporcional a la cantidad presente, de modo que el modelo es

$$
\frac{dQ}{dt} = -kQ, \qquad k > 0,
$$

donde $k$ es la constante de decaimiento. La ecuación es **lineal de primer orden** (y también **separable**). Separando las variables e integrando,

$$
\int \frac{dQ}{Q} = -\int k\,dt \quad\Longrightarrow\quad \ln Q = -kt + C,
$$

por lo que la solución general es

$$
Q(t) = Q_0 e^{-kt},
$$

con $Q_0 = Q(0) > 0$ la masa inicial.

La condición «pierde un tercio de su masa en 11.7 días» significa que la masa restante es dos tercios de la inicial:

$$
Q(11.7) = \tfrac{2}{3}Q_0.
$$

Al sustituir en la solución,

$$
Q_0 e^{-11.7k} = \tfrac{2}{3}Q_0 \quad\Longrightarrow\quad e^{-11.7k} = \tfrac{2}{3}.
$$

Tomando logaritmos se despeja la constante de decaimiento:

$$
k = \frac{\ln(3/2)}{11.7}.
$$

La vida media $\tau$ es el tiempo en que la masa se reduce a la mitad. Se impone $Q(\tau) = Q_0/2$:

$$
Q_0 e^{-k\tau} = \tfrac{1}{2}Q_0 \quad\Longrightarrow\quad -k\tau = \ln\tfrac{1}{2} = -\ln 2,
$$

es decir, $k\tau = \ln 2$. Sustituyendo $k$,

$$
\tau = \frac{\ln 2}{k} = \frac{11.7\,\ln 2}{\ln(3/2)} \approx 20.0\ \text{días}.
$$

La comprobación es directa: con este valor de $\tau$, la masa restante tras $\tau$ días es $Q_0 e^{-k\tau} = Q_0 e^{-\ln 2} = Q_0/2$.

## Observaciones

La vida media no depende de la masa inicial $Q_0$: el cociente $Q(\tau)/Q(0) = 1/2$ fija $\tau$ por sí solo. De forma equivalente, la fracción restante tras un tiempo $t$ es $(2/3)^{t/11.7}$, y al exigir que sea $1/2$ se obtiene el mismo $\tau$.

La masa $Q(t)$ decrece hacia $0$ cuando $t \to \infty$, pero no se anula en tiempo finito.
