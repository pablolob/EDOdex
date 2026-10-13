---
title: "Boyce 3.4 Ejercicio 9"
exercise-id: boyce-c03-s04-e009
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.4, ejercicio 9"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver.lineal.homogenea.coeficientes-constantes
hidden-competencies:
  - clasificar.coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.factorizacion-polinomios
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s04i01-p166.png
---

## Enunciado

En cada uno de los problemas 7 a 16, halle la solución general de la ecuación diferencial dada.

9. $y'' + 2y' - 8y = 0$

## Solución

$$
y(x) = C_1 e^{2x} + C_2 e^{-4x},
$$

donde $C_1$ y $C_2$ son constantes arbitrarias.

## Resolución

La ecuación es **lineal**, **homogénea** y de **coeficientes constantes** de segundo orden. Se ensaya una solución de la forma $y = e^{rx}$. Al sustituir, el factor $e^{rx}$ no se anula y la ecuación se reduce a la **ecuación característica**

$$
r^2 + 2r - 8 = 0.
$$

El polinomio se factoriza como

$$
(r + 4)(r - 2) = 0,
$$

de modo que las raíces son

$$
r_1 = 2, \qquad r_2 = -4.
$$

Son reales y distintas. Cada raíz aporta una solución, $y_1(x) = e^{2x}$ y $y_2(x) = e^{-4x}$, que son linealmente independientes porque $r_1 \neq r_2$. Por tanto, la solución general es

$$
y(x) = C_1 e^{2x} + C_2 e^{-4x}.
$$

## Observaciones

Las dos soluciones son linealmente independientes y su wronskiano es $W(y_1,y_2)(x) = (r_2 - r_1)e^{(r_1+r_2)x} = -6e^{-2x} \neq 0$. La solución está definida para todo $x \in \mathbb{R}$, ya que la ecuación tiene coeficientes constantes y carece de puntos singulares. Al ser una ecuación homogénea, no existen soluciones singulares.
