---
title: "Boyce 3.2 Ejercicio 33"
exercise-id: boyce-c03-s02-e033
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.2, ejercicio 33"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - construir.ecuacion-adjunta
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s02i02-p153.png
---

## Enunciado

En cada uno de los problemas 33 a 35, aplique el resultado del problema 32 para hallar la adjunta de la ecuación diferencial dada.

33. $x^2 y'' + xy' + (x^2 - \nu^2)y = 0, \quad \text{Ecuación de Bessel}$

## Solución

La **ecuación adjunta** de la ecuación de Bessel es

$$
x^2\mu'' + 3x\mu' + (x^2 - \nu^2 + 1)\mu = 0.
$$

## Resolución

El problema 32 establece que, si la ecuación lineal homogénea de segundo orden se escribe como

$$
P(x)y'' + Q(x)y' + R(x)y = 0,
$$

su adjunta es la ecuación adjunta que debe satisfacer el factor integrante $\mu(x)$,

$$
P\mu'' + (2P' - Q)\mu' + (P'' - Q' + R)\mu = 0.
$$

La ecuación de Bessel,

$$
x^2 y'' + xy' + (x^2 - \nu^2)y = 0,
$$

tiene los coeficientes

$$
P(x) = x^2, \qquad Q(x) = x, \qquad R(x) = x^2 - \nu^2.
$$

Sus derivadas son

$$
P'(x) = 2x, \qquad P''(x) = 2, \qquad Q'(x) = 1.
$$

Se calculan los tres coeficientes de la adjunta:

$$
\begin{aligned}
P &= x^2, \\
2P' - Q &= 2(2x) - x = 3x, \\
P'' - Q' + R &= 2 - 1 + (x^2 - \nu^2) = x^2 - \nu^2 + 1.
\end{aligned}
$$

Al sustituirlos en la fórmula del problema 32 se obtiene la adjunta

$$
x^2\mu'' + 3x\mu' + (x^2 - \nu^2 + 1)\mu = 0.
$$

## Observaciones

La ecuación de Bessel no es autoadjunta, pues la condición $P' = Q$ falla: $P'(x) = 2x$ es distinto de $Q(x) = x$. Por eso su adjunta no reproduce la ecuación original, como muestra el término adicional $+1$ en el coeficiente de $\mu$.
