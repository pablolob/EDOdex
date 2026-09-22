---
title: "Boyce 6.5 Ejercicio 13"
exercise-id: boyce-c06-s05-e013
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.5, ejercicio 13"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.convolucion
prerequisitos:
  - transformadas.convolucion
  - transformadas.transformada-laplace
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s05i02-p350.png
---

## Enunciado

En cada uno de los problemas 12 a 19 exprese la solución del problema con valor inicial dado en términos de una integral de convolución.

13. $y'' + 2y' + 2y = \operatorname{sen} \alpha t; \quad y(0) = 0, \ y'(0) = 0$

## Solución

$$
y(t)=\int_0^t e^{-(t-\tau)}\sin(t-\tau)\,\sin\alpha\tau\,d\tau .
$$

## Resolución

Se aplica la **transformada de Laplace** al problema de valor inicial. Con $Y(s)=\mathcal{L}\{y\}$ y las condiciones iniciales nulas,

$$
\mathcal{L}\{y'\}=sY(s),\qquad \mathcal{L}\{y''\}=s^2Y(s).
$$

La ecuación se transforma en

$$
\left(s^2+2s+2\right)Y(s)=\frac{\alpha}{s^2+\alpha^2},
$$

donde se ha usado $\mathcal{L}\{\sin\alpha t\}=\dfrac{\alpha}{s^2+\alpha^2}$. Al despejar,

$$
Y(s)=\frac{1}{s^2+2s+2}\cdot\frac{\alpha}{s^2+\alpha^2}=H(s)G(s).
$$

El primer factor se escribe completando el cuadrado,

$$
H(s)=\frac{1}{(s+1)^2+1},
$$

de modo que, por el **primer teorema de traslación**,

$$
h(t)=\mathcal{L}^{-1}\{H(s)\}=e^{-t}\sin t .
$$

El segundo factor es la transformada del seno,

$$
g(t)=\mathcal{L}^{-1}\{G(s)\}=\sin\alpha t .
$$

Por el **teorema de convolución**, $\mathcal{L}^{-1}\{H G\}=(h*g)(t)$, por lo que

$$
y(t)=\int_0^t h(t-\tau)g(\tau)\,d\tau
=\int_0^t e^{-(t-\tau)}\sin(t-\tau)\,\sin\alpha\tau\,d\tau .
$$

La ecuación es lineal con coeficientes constantes y las condiciones iniciales son nulas; por tanto, esta integral es la solución completa del problema.

## Observaciones

La función $h(t)=e^{-t}\sin t$ es la respuesta al impulso del sistema: satisface $h''+2h'+2h=0$ con $h(0)=0$ y $h'(0)=1$. La solución es la convolución de esa respuesta con la excitación $g(t)=\sin\alpha t$.
