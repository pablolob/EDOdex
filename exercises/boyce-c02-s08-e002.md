---
title: "Boyce 2.8 Ejercicio 2"
exercise-id: boyce-c02-s08-e002
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.8, ejercicio 2"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - clasificar.exacta
prerequisitos:
  - calculo-avanzado.derivadas-parciales
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c02s08i01-p101.png
---

## Enunciado

Determine si cada una de las ecuaciones de los problemas 1 a 12 es exacta. En caso de serlo, halle la solución.

2. $(2x + 4y) + (2x - 2y)y' = 0$

## Solución

La ecuación **no es exacta**; por tanto, no se pide hallar su solución.

## Resolución

Una ecuación escrita en la forma $M(x,y)\,dx + N(x,y)\,dy = 0$ es exacta si sus derivadas parciales cruzadas coinciden:

$$
\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}.
$$

La ecuación dada se identifica con $M(x,y) = 2x + 4y$ y $N(x,y) = 2x - 2y$. Sus derivadas parciales son

$$
\begin{aligned}
\frac{\partial M}{\partial y} &= 4, \\
\frac{\partial N}{\partial x} &= 2.
\end{aligned}
$$

Como $4 \neq 2$, la condición de exactitud no se cumple. La ecuación **no es exacta** y, en consecuencia, la instrucción de hallar la solución cuando la ecuación lo sea no se aplica.

## Observaciones

El criterio de exactitud solo compara las derivadas parciales cruzadas de los coeficientes de $dx$ y $dy$. Que una ecuación no sea exacta no significa que carezca de solución; significa que el método de las ecuaciones exactas no se aplica de forma directa.
