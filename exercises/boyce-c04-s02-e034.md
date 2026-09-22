---
title: "Boyce 4.2 Ejercicio 34"
exercise-id: boyce-c04-s02-e034
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.2, ejercicio 34"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
hidden-competencies:
  - clasificar.lineal-hom
  - clasificar.coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.factorizacion-polinomios
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c04s02i03-p231.png
---

## Enunciado

En cada uno de los problemas 29 a 34, use una computadora para hallar la solución general de la ecuación diferencial dada.

34. $y''' + 3.2y'' + 2.41y' + 0.21y = 0$

## Solución

La solución general es

$$
y(x) = C_1 e^{-0.1x} + C_2 e^{-x} + C_3 e^{-2.1x},
$$

válida para todo $x \in \mathbb{R}$.

## Resolución

La ecuación

$$
y''' + 3.2y'' + 2.41y' + 0.21y = 0
$$

es **lineal homogénea de tercer orden con coeficientes constantes**. Al proponer $y = e^{rx}$ se obtiene la **ecuación característica**

$$
r^3 + 3.2r^2 + 2.41r + 0.21 = 0.
$$

El enunciado pide el uso de una computadora, de modo que la factorización se obtiene con **cómputo simbólico** (por ejemplo, el comando `roots` o `solve` de un sistema de álgebra computacional). Para facilitarla se multiplica por $100$ y se resuelve la ecuación equivalente con coeficientes enteros:

$$
100r^3 + 320r^2 + 241r + 21 = 0.
$$

El resultado es la factorización

$$
100r^3 + 320r^2 + 241r + 21 = (10r + 1)(10r + 21)(r + 1) = 0,
$$

cuyas raíces son

$$
r_1 = -\frac{1}{10}, \qquad r_2 = -\frac{21}{10}, \qquad r_3 = -1.
$$

Las tres raíces son reales y distintas. Cada raíz real simple aporta la solución $e^{rx}$, así que las funciones

$$
e^{-0.1x}, \qquad e^{-2.1x}, \qquad e^{-x}
$$

son linealmente independientes y forman un conjunto fundamental de soluciones. La solución general es su combinación lineal:

$$
y(x) = C_1 e^{-0.1x} + C_2 e^{-x} + C_3 e^{-2.1x}.
$$

Al ser una ecuación lineal homogénea con coeficientes constantes, la solución está definida en todo $\mathbb{R}$.

## Observaciones

- Las raíces se escriben indistintamente como decimales o fracciones: $-0.1 = -\tfrac{1}{10}$ y $-2.1 = -\tfrac{21}{10}$. Multiplicar el polinomio característico por una constante no nula no altera sus raíces.
- No hay soluciones singulares ni perdidas: la ecuación es lineal homogénea y el número de constantes arbitrarias coincide con el orden. Las tres raíces son simples, por lo que no aparecen factores $x$.
- Las tres raíces son negativas, de modo que toda solución tiende a cero cuando $x \to \infty$.
