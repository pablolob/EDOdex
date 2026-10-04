---
title: "Boyce 3.4 Ejercicio 16"
exercise-id: boyce-c03-s04-e016
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.4, ejercicio 16"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
hidden-competencies:
  - clasificar.coeficientes-constantes
prerequisitos:
  - algebra.numeros-complejos
  - algebra.ecuaciones-caracteristicas
difficulty:
  conceptual: 1
  technical: 1
metadata-status: pending
source-images:
  - c03s04i01-p166.png
---

## Enunciado

En cada uno de los problemas 7 a 16, halle la solución general de la ecuación diferencial dada.

16. $y'' + 4y' + 6.25y = 0$

## Solución

$$
y(x) = e^{-2x}\left(C_1 \cos\!\left(\frac{3x}{2}\right) + C_2 \sin\!\left(\frac{3x}{2}\right)\right),
$$

donde $C_1$ y $C_2$ son constantes arbitrarias.

## Resolución

La ecuación es **lineal**, **homogénea** y de **coeficientes constantes** de segundo orden. Se ensaya la solución $y = e^{rx}$; al sustituir, el factor $e^{rx}$ no se anula y la ecuación se reduce a la **ecuación característica**

$$
r^2 + 4r + 6.25 = 0.
$$

Las raíces se obtienen con la fórmula cuadrática:

$$
\begin{aligned}
r &= \frac{-4 \pm \sqrt{4^2 - 4(1)(6.25)}}{2} \\
  &= \frac{-4 \pm \sqrt{16 - 25}}{2} \\
  &= \frac{-4 \pm \sqrt{-9}}{2} \\
  &= -2 \pm \frac{3}{2}i.
\end{aligned}
$$

Como el discriminante es negativo, las raíces forman un par complejo conjugado $\alpha \pm i\beta$ con $\alpha = -2$ y $\beta = \frac{3}{2}$. La solución general de una ecuación homogénea con coeficientes constantes y raíces complejas es

$$
y(x) = e^{\alpha x}\left(C_1 \cos(\beta x) + C_2 \sin(\beta x)\right).
$$

Con $\alpha = -2$ y $\beta = \frac{3}{2}$ resulta

$$
y(x) = e^{-2x}\left(C_1 \cos\!\left(\frac{3x}{2}\right) + C_2 \sin\!\left(\frac{3x}{2}\right)\right).
$$

## Observaciones

Las dos soluciones reales $y_1 = e^{-2x}\cos\!\left(\frac{3x}{2}\right)$ y $y_2 = e^{-2x}\sin\!\left(\frac{3x}{2}\right)$ son linealmente independientes, por lo que la familia anterior es la solución general. La parte real $\alpha = -2$ es negativa, de modo que la amplitud decrece como $e^{-2x}$; el factor oscilatorio tiene frecuencia angular $\frac{3}{2}$. Por tratarse de una ecuación con coeficientes constantes, toda solución está definida para $x \in \mathbb{R}$.
