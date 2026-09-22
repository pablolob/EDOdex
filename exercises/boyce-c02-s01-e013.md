---
title: "Boyce 2.1 Ejercicio 13"
exercise-id: boyce-c02-s01-e013
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.1, ejercicio 13"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.lineales-primer-orden
  - aplicar-condiciones.problema-valor-inicial
hidden-competencies:
  - clasificar.lineal-primer-orden
prerequisitos:
  - integracion.directa
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c02s01i01-p038.png
---

## Enunciado

En cada uno de los problemas 9 a 16, encuentre la solución del problema con valor inicial dado. $$y' - 2y = e^{2x}, \quad y(0) = 2$$

## Solución

La ecuación es **lineal de primer orden**. La solución del problema con valor inicial es

$$
y(x) = (x + 2)e^{2x},
$$

definida para todo $x \in \mathbb{R}$.

## Resolución

La ecuación se escribe en la forma estándar $y' + P(x)y = f(x)$:

$$
y' - 2y = e^{2x}.
$$

Se tiene $P(x) = -2$ y $f(x) = e^{2x}$. El **factor integrante** es

$$
\mu(x) = \exp\!\left(\int -2\,dx\right) = e^{-2x}.
$$

Al multiplicar la ecuación por $\mu(x)$, el miembro izquierdo es la derivada de un producto:

$$
\frac{d}{dx}\!\left[e^{-2x}y\right] = e^{-2x}e^{2x} = 1.
$$

Integrando ambos miembros respecto de $x$,

$$
e^{-2x}y = x + C,
$$

de donde la solución general es

$$
y(x) = (x + C)e^{2x}.
$$

La condición inicial $y(0) = 2$ exige $C = 2$. Por tanto,

$$
y(x) = (x + 2)e^{2x}.
$$

## Observaciones

El factor integrante $e^{-2x}$ no se anula, de modo que el procedimiento no descarta ninguna solución. Como $P(x) = -2$ y $f(x) = e^{2x}$ son continuos en todo $\mathbb{R}$, la solución está definida para todo $x \in \mathbb{R}$.
