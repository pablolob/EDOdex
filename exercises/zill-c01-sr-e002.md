---
title: "Zill Repaso C1 Ejercicio 2"
exercise-id: zill-c01-sr-e002
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 1, ejercicio 2"
topics:
  - fundamentos
competencies:
  - modelizar.formular-edo
difficulty:
  conceptual: 1
  technical: 1
solution-status: draft
---

## Enunciado

**Problemas 1 y 2.**

Llene el espacio en blanco y después escriba este resultado como una ecuación diferencial de primer orden que no contiene al símbolo $c_1$ y que tiene la forma $dy/dx = f(x, y)$. El símbolo $c_1$ representa una constante.

2. $\dfrac{d}{dx}\!\left(5 + c_1 e^{-2x}\right) = $

## Solución

El espacio se llena con $-2c_1 e^{-2x}$. La ecuación diferencial es

$$
\frac{dy}{dx} = 10 - 2y.
$$

## Resolución

Se deriva la expresión $5 + c_1 e^{-2x}$ respecto de $x$:

$$
\frac{d}{dx}\!\left(5 + c_1 e^{-2x}\right) = 0 + c_1 \!\left(-2 e^{-2x}\right) = -2c_1 e^{-2x}.
$$

Se define $y = 5 + c_1 e^{-2x}$. De aquí se despeja $c_1 e^{-2x} = y - 5$. Sustituyendo en la derivada:

$$
\frac{dy}{dx} = -2c_1 e^{-2x} = -2\,(y - 5) = 10 - 2y.
$$

La ecuación diferencial de primer orden libre de $c_1$ es

$$
\frac{dy}{dx} = 10 - 2y.
$$

## Observaciones

La constante aditiva $5$ en la expresión original se traduce en el término constante $10$ de la EDO. La solución general de $dy/dx = 10 - 2y$ es $y = 5 + c_1 e^{-2x}$.
