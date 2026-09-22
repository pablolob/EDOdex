---
title: "Boyce 1.1 Ejercicio 2"
exercise-id: boyce-c01-s01-e002
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 1.1, ejercicio 2"
statement-status: accepted
solution-status: draft
topics:
  - fundamentos
competencies:
  - clasificar.orden
  - clasificar.linealidad
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c01s01i01-p025.png
---

## Enunciado

Determine el orden de la ecuación diferencial dada; diga también si la ecuación es lineal o no lineal: $$(1 + y^2) \frac{d^2y}{dx^2} + x \frac{dy}{dx} + y = e^x$$

## Solución

La ecuación es de **segundo orden** y **no lineal**.

## Resolución

La derivada de mayor orden que aparece en la ecuación es $\dfrac{d^2y}{dx^2}$. Por tanto, la ecuación es de **segundo orden**.

Una ecuación diferencial es **lineal** si puede escribirse en la forma

$$
a_n(x)\,y^{(n)} + \cdots + a_1(x)\,y' + a_0(x)\,y = g(x),
$$

donde los coeficientes dependen solo de la variable independiente $x$. En la ecuación dada, el coeficiente de $y''$ es $(1 + y^2)$, que depende de la variable dependiente $y$. Por eso la ecuación no es lineal.

Se concluye que la ecuación es de **segundo orden** y **no lineal**.

## Observaciones

El término $(1 + y^2)\dfrac{d^2y}{dx^2}$ es lo que rompe la linealidad: la dependencia del coeficiente respecto de $y$ impide escribir la ecuación en la forma estándar lineal. El orden, en cambio, solo mira la derivada de mayor orden presente.
