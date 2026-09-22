---
title: "Boyce 1.1 Ejercicio 5"
exercise-id: boyce-c01-s01-e005
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 1.1, ejercicio 5"
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

Determine el orden de la ecuación diferencial dada; diga también si la ecuación es lineal o no lineal: $$\frac{d^2y}{dx^2} + \sin(x + y) = \sin x$$

## Solución

La ecuación es de **segundo orden** y **no lineal**.

## Resolución

La derivada de mayor orden presente es $\dfrac{d^2y}{dx^2}$. Por tanto, la ecuación es de **segundo orden**.

Una EDO es **lineal** cuando puede escribirse como una combinación lineal de la variable dependiente $y$ y de sus derivadas, con coeficientes que dependen solo de la variable independiente $x$:

$$
a_n(x) \frac{d^n y}{dx^n} + \cdots + a_1(x) \frac{dy}{dx} + a_0(x) y = g(x).
$$

En la ecuación dada,

$$
\frac{d^2y}{dx^2} + \sin(x + y) = \sin x,
$$

el término $\sin(x+y)$ no es una combinación lineal de $y$ ni de sus derivadas: al aplicar la identidad de la suma de ángulos resulta $\sin(x+y)=\sin x\cos y+\cos x\sin y$, donde $y$ aparece como argumento de $\cos$ y de $\sin$. La presencia de una función no lineal de la variable dependiente hace que la ecuación sea **no lineal**.

## Observaciones

La clasificación del orden se obtiene inspeccionando la derivada de mayor orden; la linealidad se decide examinando cómo aparece $y$ en cada término. Un término como $\sin(x+y)$ depende no linealmente de $y$, mientras que el miembro derecho $\sin x$ es una función no homogénea que solo depende de $x$ y no afecta a la linealidad.
