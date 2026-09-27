---
title: "Zill Repaso C2 Ejercicio 23"
exercise-id: zill-c02-sr-e023
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 2, ejercicio 23"
language: es
competencies:
  - resolver-analiticamente.lineales-primer-orden
hidden-competencies:
  - clasificar.linealidad
  - seleccionar-metodo.factor-integrante
prerequisitos:
  - integracion.por-partes
solution-status: draft
statement-status: accepted
topics:
  - primer-orden
source-images:
  - c02sri02-p095.png
difficulty:
  conceptual: 2
  technical: 2
---

## Enunciado

En los problemas 19-26 resuelva la ecuación diferencial dada.

$$t \frac{dQ}{dt} + Q = t^4 \ln t$$

## Solución

La ecuación es **lineal de primer orden**. Su solución general es

$$
Q(t) = \frac{t^4}{5}\ln t - \frac{t^4}{25} + \frac{C}{t},
$$

definida en el intervalo $I = (0, \infty)$.

## Resolución

La ecuación se lleva a la forma estándar $Q' + P(t)Q = f(t)$. Como el término
$t^4\ln t$ exige $t>0$, se divide entre $t$:

$$
\frac{dQ}{dt} + \frac{1}{t}Q = t^3\ln t.
$$

Aquí $P(t) = 1/t$ y $f(t) = t^3\ln t$. El **factor integrante** es

$$
\mu(t) = \exp\!\left(\int \frac{1}{t}\,dt\right) = e^{\ln t} = t.
$$

Al multiplicar la ecuación por $\mu(t) = t$, el miembro izquierdo es la derivada
de un producto:

$$
t\frac{dQ}{dt} + Q = \frac{d}{dt}\!\left[tQ\right].
$$

Por tanto, la ecuación equivale a

$$
\frac{d}{dt}\!\left[tQ\right] = t^4\ln t.
$$

Integrando ambos miembros respecto de $t$,

$$
tQ = \int t^4\ln t\,dt.
$$

La integral se calcula **por partes** con $u = \ln t$ y $dv = t^4\,dt$, de modo
que $du = dt/t$ y $v = t^5/5$:

$$
\begin{aligned}
\int t^4\ln t\,dt
&= \frac{t^5}{5}\ln t - \int \frac{t^5}{5}\cdot\frac{1}{t}\,dt \\
&= \frac{t^5}{5}\ln t - \frac{1}{5}\int t^4\,dt \\
&= \frac{t^5}{5}\ln t - \frac{t^5}{25} + C.
\end{aligned}
$$

Sustituyendo y despejando $Q$:

$$
tQ = \frac{t^5}{5}\ln t - \frac{t^5}{25} + C
\quad\Longrightarrow\quad
Q(t) = \frac{t^4}{5}\ln t - \frac{t^4}{25} + \frac{C}{t}.
$$

La sustitución directa confirma el resultado. Derivando la solución,

$$
Q'(t) = \frac{4t^3}{5}\ln t + \frac{t^3}{5} - \frac{4t^3}{25} - \frac{C}{t^2},
$$

y multiplicando por $t$ y sumando $Q$,

$$
tQ' + Q
= \left(\frac{4t^4}{5}\ln t + \frac{t^4}{5} - \frac{4t^4}{25} - \frac{C}{t}\right)
+ \left(\frac{t^4}{5}\ln t - \frac{t^4}{25} + \frac{C}{t}\right)
= t^4\ln t.
$$

La función está definida y es derivable en $(0,\infty)$, que es el intervalo más
largo en el que la ecuación tiene sentido porque $\ln t$ solo está definida para
$t>0$.

## Observaciones

El miembro izquierdo de la ecuación original ya es una derivada exacta:
$tQ' + Q = (tQ)'$. Reconocerla permite integrar directamente sin introducir de
forma explícita el factor integrante; el cálculo es idéntico, pues equivale a
multiplicar por $\mu(t) = t$.

La ecuación es lineal, así que la solución general contiene todas las soluciones
y no hay soluciones singulares ni ramas perdidas. La constante $C$ es arbitraria
y basta una condición inicial para determinarla.
