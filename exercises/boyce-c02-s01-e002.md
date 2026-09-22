---
title: "Boyce 2.1 Ejercicio 2"
exercise-id: boyce-c02-s01-e002
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.1, ejercicio 2"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.lineales-primer-orden
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

En cada uno de los problemas 1 a 8, encuentre la solución general de la ecuación diferencial dada. $$y' - 2y = x^2 e^{2x}$$

## Solución

$$
y = \left(\frac{x^3}{3} + C\right)e^{2x}, \qquad C \in \mathbb{R}.
$$

## Resolución

La ecuación es **lineal de primer orden** y está escrita en la forma estándar $y' + P(x)y = f(x)$, con $P(x) = -2$ y $f(x) = x^2 e^{2x}$.

Se calcula el factor integrante

$$
\mu(x) = \exp\!\left(\int P(x)\,dx\right) = \exp\!\left(\int -2\,dx\right) = e^{-2x}.
$$

Al multiplicar ambos miembros por $\mu(x)$ se obtiene

$$
e^{-2x}y' - 2e^{-2x}y = x^2,
$$

cuyo miembro izquierdo es la derivada del producto $e^{-2x}y$. Por tanto,

$$
\frac{d}{dx}\!\left(e^{-2x}y\right) = x^2.
$$

La integración respecto a $x$ da

$$
e^{-2x}y = \frac{x^3}{3} + C.
$$

Al despejar $y$ resulta la solución general

$$
y = \left(\frac{x^3}{3} + C\right)e^{2x}.
$$

## Observaciones

La ecuación es lineal y no homogénea. El término $Ce^{2x}$ es la solución general de la ecuación homogénea asociada $y' - 2y = 0$, y $\dfrac{x^3}{3}e^{2x}$ es una solución particular de la ecuación completa.

Como los coeficientes son constantes y continuos en todo $\mathbb{R}$, la solución está definida y es válida para todo $x \in \mathbb{R}$.
