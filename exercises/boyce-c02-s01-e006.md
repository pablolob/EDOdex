---
title: "Boyce 2.1 Ejercicio 6"
exercise-id: boyce-c02-s01-e006
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.1, ejercicio 6"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.lineales-primer-orden
hidden-competencies:
  - clasificar.lineal-primer-orden
prerequisitos:
  - integracion.por-partes
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c02s01i01-p038.png
---

## Enunciado

En cada uno de los problemas 1 a 8, encuentre la solución general de la ecuación diferencial dada. $$xy' + 2y = \sin x, \quad x > 0$$

## Solución

La ecuación es **lineal de primer orden**. Su solución general es

$$
y(x) = \frac{\sin x - x\cos x + C}{x^2}, \quad x > 0.
$$

## Resolución

Se reescribe la ecuación en la forma estándar $y' + P(x)y = f(x)$. Como $x > 0$, es lícito dividir entre $x$:

$$
y' + \frac{2}{x}y = \frac{\sin x}{x}.
$$

Se tiene $P(x) = \dfrac{2}{x}$ y $f(x) = \dfrac{\sin x}{x}$. El **factor integrante** es

$$
\mu(x) = \exp\!\left(\int \frac{2}{x}\,dx\right) = \exp(2\ln x) = x^2,
$$

donde la constante de integración se toma nula por tratarse de un factor integrante.

Al multiplicar la ecuación por $\mu(x) = x^2$,

$$
x^2 y' + 2x y = x\sin x.
$$

El miembro izquierdo es la derivada del producto $x^2 y$, de modo que

$$
\frac{d}{dx}\!\left[x^2 y\right] = x\sin x.
$$

Integrando ambos miembros respecto de $x$ y aplicando **integración por partes** con $u = x$, $dv = \sin x\,dx$, $du = dx$, $v = -\cos x$:

$$
\int x\sin x\,dx = -x\cos x + \int \cos x\,dx = -x\cos x + \sin x + C.
$$

Por tanto,

$$
x^2 y = \sin x - x\cos x + C,
$$

y despejando $y$ se obtiene la solución general

$$
y(x) = \frac{\sin x - x\cos x + C}{x^2}.
$$

La ecuación está dada para $x > 0$ y el factor integrante $x^2$ no se anula en ese intervalo; los coeficientes $P(x)$ y $f(x)$ son continuos en $(0, \infty)$. El intervalo de validez de la solución general es, entonces, $I = (0, \infty)$.

## Observaciones

La solución se descompone como $y = \dfrac{C}{x^2} + \dfrac{\sin x}{x^2} - \dfrac{\cos x}{x}$. El término $\dfrac{C}{x^2}$ es la solución de la ecuación homogénea asociada. La ecuación es singular en $x = 0$, por lo que la solución no se extiende a ese punto.
