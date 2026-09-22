---
title: "Boyce 2.2 Ejercicio 8"
exercise-id: boyce-c02-s02-e008
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.2, ejercicio 8"
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
  - integracion.por-partes
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c02s02i01-p045.png
---

## Enunciado

En cada uno de los problemas del 5 al 12, determine la solución del problema con valor inicial dado. Escriba el intervalo en que la solución es válida.

$$xy' + 2y = \sin x, \quad y(\pi) = \frac{1}{\pi}$$

## Solución

La ecuación es **lineal de primer orden**. La solución del problema con valor inicial es

$$
y(x) = \frac{\sin x - x\cos x}{x^2}, \qquad x > 0.
$$

## Resolución

La ecuación es **lineal de primer orden**. Se escribe en forma estándar dividiendo entre $x$ (para $x \ne 0$):

$$
y' + \frac{2}{x}\,y = \frac{\sin x}{x}.
$$

Se aplica el **método del factor integrante**. Con $P(x) = \dfrac{2}{x}$,

$$
\mu(x) = \exp\!\left(\int \frac{2}{x}\,dx\right) = \exp(2\ln|x|) = x^2.
$$

Al multiplicar la forma estándar por $\mu(x) = x^2$, el miembro izquierdo es la derivada de un producto:

$$
\frac{d}{dx}\!\left(x^2 y\right) = x\sin x.
$$

Se integra el miembro derecho por partes, con $u = x$ y $dv = \sin x\,dx$, de modo que $du = dx$ y $v = -\cos x$:

$$
\int x\sin x\,dx = -x\cos x + \int \cos x\,dx = -x\cos x + \sin x + C.
$$

Por tanto,

$$
x^2 y = -x\cos x + \sin x + C.
$$

Se impone la condición inicial $y(\pi) = \dfrac{1}{\pi}$. En $x = \pi$ se tiene $x^2 = \pi^2$, $\sin\pi = 0$ y $\cos\pi = -1$, así que

$$
\pi^2 \cdot \frac{1}{\pi} = \pi = -\pi(-1) + 0 + C = \pi + C,
$$

de donde $C = 0$. La solución del problema con valor inicial es

$$
y(x) = \frac{\sin x - x\cos x}{x^2}.
$$

Los coeficientes de la forma estándar, $\dfrac{2}{x}$ y $\dfrac{\sin x}{x}$, son continuos en $x \ne 0$; el único punto singular es $x = 0$. Como la condición inicial se da en $x = \pi > 0$, el intervalo de validez es $(0, \infty)$.

## Observaciones

La solución no se extiende a través de $x = 0$. En ese punto los coeficientes de la forma estándar dejan de ser continuos y la expresión de $y$ presenta una singularidad; por eso el intervalo de validez es $(0, \infty)$ y no todo $\mathbb{R} \setminus \{0\}$.
