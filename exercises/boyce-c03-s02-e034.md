---
title: "Boyce 3.2 Ejercicio 34"
exercise-id: boyce-c03-s02-e034
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.2, ejercicio 34"
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

34. $(1 - x^2)y'' - 2xy' + \alpha(\alpha + 1)y = 0, \quad \text{Ecuación de Legendre}$

## Solución

La ecuación adjunta de la ecuación de Legendre es

$$
(1 - x^2)\mu'' - 2x\mu' + \alpha(\alpha + 1)\mu = 0.
$$

Coincide con la ecuación original, de modo que la ecuación de Legendre es **autoadjunta**.

## Resolución

El problema 32 establece que, si la ecuación lineal homogénea de segundo orden se escribe como

$$
P(x)y'' + Q(x)y' + R(x)y = 0,
$$

su adjunta es la ecuación que satisface el factor integrante $\mu(x)$,

$$
P\mu'' + (2P' - Q)\mu' + (P'' - Q' + R)\mu = 0.
$$

La ecuación de Legendre,

$$
(1 - x^2)y'' - 2xy' + \alpha(\alpha + 1)y = 0,
$$

tiene los coeficientes

$$
P(x) = 1 - x^2, \qquad Q(x) = -2x, \qquad R(x) = \alpha(\alpha + 1).
$$

Sus derivadas son

$$
P'(x) = -2x, \qquad P''(x) = -2, \qquad Q'(x) = -2.
$$

Se calculan los tres coeficientes de la adjunta:

$$
\begin{aligned}
P &= 1 - x^2, \\
2P' - Q &= 2(-2x) - (-2x) = -4x + 2x = -2x, \\
P'' - Q' + R &= -2 - (-2) + \alpha(\alpha + 1) = \alpha(\alpha + 1).
\end{aligned}
$$

Al sustituirlos en la fórmula del problema 32 se obtiene

$$
(1 - x^2)\mu'' - 2x\mu' + \alpha(\alpha + 1)\mu = 0.
$$

## Observaciones

Una ecuación $Py'' + Qy' + Ry = 0$ es **autoadjunta** cuando su adjunta reproduce la ecuación original, lo que ocurre si $Q = P'$. En la ecuación de Legendre $P' = -2x = Q$, de modo que la condición se cumple.

Como los coeficientes de la adjunta son los mismos que los de la ecuación original, ambas comparten el dominio de sus coeficientes y los puntos singulares $x = \pm 1$.
