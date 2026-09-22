---
title: "Zill Repaso C1 Ejercicio 1"
exercise-id: zill-c01-sr-e001
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 1, ejercicio 1"
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

1. $\dfrac{d}{dx}\, c_1 e^{10x} = $

## Solución

El espacio se llena con $10c_1 e^{10x}$. La ecuación diferencial es

$$
\frac{dy}{dx} = 10y.
$$

## Resolución

Se deriva la expresión $c_1 e^{10x}$ respecto de $x$:

$$
\frac{d}{dx}\,c_1 e^{10x} = c_1 \cdot 10 e^{10x} = 10c_1 e^{10x}.
$$

Se define $y = c_1 e^{10x}$. Entonces la derivada obtenida se escribe como

$$
\frac{dy}{dx} = 10c_1 e^{10x} = 10y.
$$

La ecuación diferencial de primer orden que no contiene a $c_1$ es, por tanto,

$$
\frac{dy}{dx} = 10y.
$$

## Observaciones

Este procedimiento —derivar la solución general y eliminar la constante— es el inverso de resolver la EDO: la solución general de $dy/dx = 10y$ es $y = c_1 e^{10x}$.
