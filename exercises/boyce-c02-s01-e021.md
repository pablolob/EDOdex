---
title: "Boyce 2.1 Ejercicio 21"
exercise-id: boyce-c02-s01-e021
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.1, ejercicio 21"
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
  - derivacion.regla-cadena
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c02s01i02-p039.png
---

## Enunciado

Encuentre la solución de

$$\frac{dy}{dx} = \frac{1}{e^y - x}, \quad y(1) = 0.$$

Sugerencia: Considere $x$ como variable independiente, en vez de $y$.

## Solución

Al intercambiar los papeles de las variables, la ecuación resulta **lineal de primer orden** en $x(y)$. La solución del problema de valor inicial es

$$
y(x) = \ln\!\left(x + \sqrt{x^2 - 1}\right),
$$

definida para $x > 1$, con extensión continua $y(1) = 0$.

## Resolución

La ecuación no es separable ni lineal en $y$. El enunciado sugiere intercambiar los papeles de las variables y considerar $x$ como función de $y$. Si $x = x(y)$ es la función inversa, la regla de la cadena da

$$
\frac{dy}{dx} = \frac{1}{dx/dy},
$$

de modo que

$$
\frac{dx}{dy} = e^y - x, \qquad \frac{dx}{dy} + x = e^y.
$$

Esta última es una ecuación lineal de primer orden en $x(y)$, con $P(y) = 1$ y $f(y) = e^y$. El **factor integrante** es

$$
\mu(y) = \exp\!\left(\int 1\,dy\right) = e^y.
$$

Al multiplicar la ecuación por $\mu(y)$, el miembro izquierdo es la derivada de un producto:

$$
\frac{d}{dy}\!\left[e^y x\right] = e^y e^y = e^{2y}.
$$

Integrando ambos miembros respecto de $y$,

$$
e^y x = \int e^{2y}\,dy = \frac{1}{2}e^{2y} + C,
$$

es decir,

$$
x(y) = \frac{1}{2}e^y + C e^{-y}.
$$

La condición inicial $y(1) = 0$ equivale a $x(0) = 1$. Al sustituir,

$$
1 = \frac{1}{2} + C, \qquad C = \frac{1}{2}.
$$

Por tanto,

$$
x(y) = \frac{e^y + e^{-y}}{2} = \cosh y.
$$

Como $x = \cosh y$, se despeja $y$. De $e^y = x \pm \sqrt{x^2 - 1}$ se toma el signo positivo, que corresponde a $y \ge 0$ y es el que verifica $y(1) = 0$:

$$
y(x) = \operatorname{arccosh} x = \ln\!\left(x + \sqrt{x^2 - 1}\right).
$$

La solución satisface la ecuación: para $x > 1$,

$$
y'(x) = \frac{1}{\sqrt{x^2 - 1}}, \qquad e^{y} - x = \left(x + \sqrt{x^2 - 1}\right) - x = \sqrt{x^2 - 1},
$$

luego $y'(x) = \dfrac{1}{e^y - x}$. Además, $y(1) = \ln 1 = 0$.

## Observaciones

La ecuación no es lineal en $y$, pero el cambio de papeles la vuelve lineal en $x$; esa es la razón de la sugerencia. La curva solución $x = \cosh y$ es una catenaria.

El punto inicial $(1, 0)$ es singular para la ecuación, pues allí $e^y - x = 0$. Por eso la solución satisface la ecuación para $x > 1$ y solo se extiende con continuidad al valor $y(1) = 0$.
