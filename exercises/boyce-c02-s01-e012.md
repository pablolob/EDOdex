---
title: "Boyce 2.1 Ejercicio 12"
exercise-id: boyce-c02-s01-e012
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.1, ejercicio 12"
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

En cada uno de los problemas 9 a 16, encuentre la solución del problema con valor inicial dado. $$y' + \frac{2}{x}y = \frac{\cos x}{x^2}, \quad y(\pi) = 0, \quad x > 0$$

## Solución

La solución del problema con valor inicial es

$$
y(x) = \frac{\sin x}{x^2},
$$

definida en $x > 0$.

## Resolución

La ecuación es **lineal de primer orden** y ya está en la forma estándar $y' + P(x)y = f(x)$:

$$
y' + \frac{2}{x}y = \frac{\cos x}{x^2}, \qquad P(x) = \frac{2}{x}, \qquad f(x) = \frac{\cos x}{x^2}.
$$

El **factor integrante** es

$$
\mu(x) = \exp\!\left(\int P(x)\,dx\right) = \exp\!\left(\int \frac{2}{x}\,dx\right) = \exp(2\ln x) = x^2,
$$

donde la constante de integración se elige nula y $\ln x$ es real porque $x > 0$.

Al multiplicar ambos miembros por $\mu(x)$ se obtiene

$$
x^2 y' + 2x y = \cos x,
$$

y el miembro izquierdo es la derivada del producto $x^2 y$:

$$
\frac{d}{dx}\!\left(x^2 y\right) = \cos x.
$$

Integrando ambos miembros respecto de $x$,

$$
x^2 y = \sin x + C.
$$

Al despejar $y$,

$$
y(x) = \frac{\sin x + C}{x^2}.
$$

La condición inicial $y(\pi) = 0$ determina la constante:

$$
y(\pi) = \frac{\sin \pi + C}{\pi^2} = \frac{C}{\pi^2} = 0 \implies C = 0.
$$

Así, la solución particular es

$$
y(x) = \frac{\sin x}{x^2}.
$$

Comprobación: al derivar, $y'(x) = \dfrac{x\cos x - 2\sin x}{x^3}$; entonces

$$
y' + \frac{2}{x}y = \frac{x\cos x - 2\sin x}{x^3} + \frac{2\sin x}{x^3} = \frac{\cos x}{x^2},
$$

y además $y(\pi) = \dfrac{\sin \pi}{\pi^2} = 0$, como se pide.

## Observaciones

La ecuación es lineal de primer orden y **no homogénea**. Los coeficientes $P(x) = 2/x$ y $f(x) = \cos x / x^2$ son continuos en $(0, \infty)$, y la condición inicial se impone en $x = \pi$, por lo que el intervalo máximo de validez es $(0, \infty)$.

El factor integrante $x^2$ elimina los denominadores y reduce el miembro izquierdo a una derivada exacta. La condición inicial anula la constante porque $\sin \pi = 0$.
