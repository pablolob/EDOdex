---
title: "Boyce 1.1 Ejercicio 6"
exercise-id: boyce-c01-s01-e006
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 1.1, ejercicio 6"
statement-status: accepted
solution-status: draft
source-images:
  - c01s01i01-p025.png
topics:
  - fundamentos
competencies:
  - clasificar.orden
  - clasificar.linealidad
difficulty:
  conceptual: 1
  technical: 1
---

## Enunciado

Determine el orden de la ecuación diferencial dada; diga también si la ecuación es lineal o no lineal: $$\frac{d^3y}{dx^3} - \frac{dy}{dx} + (\cos^2 x) y = x^3$$

## Solución

La ecuación es de **tercer orden** y **lineal**.

## Resolución

La variable dependiente es $y$ y la independiente es $x$. La derivada de mayor orden presente es $\frac{d^3y}{dx^3}$, por lo que la EDO es de **tercer orden**.

Una EDO lineal de orden $n$ tiene la forma

$$a_n(x)\frac{d^ny}{dx^n} + a_{n-1}(x)\frac{d^{n-1}y}{dx^{n-1}} + \cdots + a_1(x)\frac{dy}{dx} + a_0(x)y = g(x),$$

donde la variable dependiente y todas sus derivadas aparecen a la primera potencia y cada coeficiente $a_i(x)$ depende solo de la variable independiente.

La ecuación dada se reescribe como

$$1\cdot\frac{d^3y}{dx^3} + (-1)\cdot\frac{dy}{dx} + (\cos^2 x)\, y = x^3.$$

Cada término que contiene a $y$ o a sus derivadas es de primer grado: $\frac{d^3y}{dx^3}$ tiene coeficiente $1$, $\frac{dy}{dx}$ tiene coeficiente $-1$ y $y$ tiene coeficiente $\cos^2 x$, que depende solo de $x$. No aparecen productos ni potencias de $y$ o de sus derivadas. El miembro derecho, $x^3$, tampoco involucra a $y$.

Por tanto, la ecuación puede expresarse en la forma lineal anterior y la EDO es **lineal**.

## Observaciones

La linealidad se mantiene aunque el coeficiente $\cos^2 x$ no sea constante: solo se exige que dependa de la variable independiente. El término no homogéneo $x^3$ no contiene a $y$, de modo que no afecta a la linealidad de la ecuación.
