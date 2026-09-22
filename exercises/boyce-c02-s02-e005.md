---
title: "Boyce 2.2 Ejercicio 5"
exercise-id: boyce-c02-s02-e005
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.2, ejercicio 5"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.lineales-primer-orden
  - aplicar-condiciones.problema-valor-inicial
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.lineal-primer-orden
prerequisitos:
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c02s02i01-p045.png
---

## Enunciado

En cada uno de los problemas del 5 al 12, determine la solución del problema con valor inicial dado. Escriba el intervalo en que la solución es válida.

$$xy' + 2y = x^2 - x + 1, \quad y(1) = \frac{1}{2}$$

## Solución

$$
y(x) = \frac{x^2}{4} - \frac{x}{3} + \frac{1}{2} + \frac{1}{12x^2}, \qquad x > 0.
$$

## Resolución

La ecuación es **lineal de primer orden**. Para escribirla en la forma estándar $y' + P(x)y = f(x)$ se divide entre $x$, lo cual es válido para $x \ne 0$:

$$
y' + \frac{2}{x}\,y = x - 1 + \frac{1}{x}.
$$

Se aplica el **método del factor integrante**. Con $P(x) = \dfrac{2}{x}$,

$$
\mu(x) = \exp\!\left(\int \frac{2}{x}\,dx\right) = \exp(2\ln|x|) = x^2.
$$

Al multiplicar la forma estándar por $\mu(x) = x^2$, el miembro izquierdo es la derivada del producto $x^2 y$:

$$
x^2 y' + 2x y = x^3 - x^2 + x,
\qquad \text{es decir,} \qquad
\frac{d}{dx}\!\left(x^2 y\right) = x^3 - x^2 + x.
$$

La integración respecto a $x$ da

$$
x^2 y = \frac{x^4}{4} - \frac{x^3}{3} + \frac{x^2}{2} + C.
$$

Al despejar $y$ resulta la solución general

$$
y(x) = \frac{x^2}{4} - \frac{x}{3} + \frac{1}{2} + \frac{C}{x^2}.
$$

Se impone la condición inicial $y(1) = \dfrac{1}{2}$:

$$
\frac{1}{4} - \frac{1}{3} + \frac{1}{2} + C = \frac{1}{2}
\qquad \Longrightarrow \qquad
C = \frac{1}{12}.
$$

La solución del problema con valor inicial es

$$
y(x) = \frac{x^2}{4} - \frac{x}{3} + \frac{1}{2} + \frac{1}{12x^2}.
$$

El intervalo de validez queda determinado por la continuidad de los coeficientes de la forma estándar. El coeficiente $P(x) = 2/x$ es discontinuo en $x = 0$, y la condición inicial se impone en $x = 1$. Por tanto, la solución es válida en el intervalo $(0, \infty)$.

## Observaciones

El término $C/x^2$ es la solución general de la ecuación homogénea asociada $xy' + 2y = 0$, y $\dfrac{x^2}{4} - \dfrac{x}{3} + \dfrac{1}{2}$ es una solución particular de la ecuación completa.
