---
title: "Boyce 3.1 Ejercicio 7"
exercise-id: boyce-c03-s01-e007
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.1, ejercicio 7"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
hidden-competencies:
  - clasificar.coeficientes-constantes
  - seleccionar-metodo.coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - polinomios.resolver
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s01i01-p142.png
---

## Enunciado

En cada uno de los problemas 1 a 8, halle la solución general de la ecuación diferencial dada.

7. $y'' - 4y' + 4y = 0$

## Solución

La ecuación es **de segundo orden**, **lineal**, **homogénea** y con **coeficientes constantes**. Su ecuación característica tiene una raíz real doble, $r = 2$. La solución general es

$$
y(x) = (C_1 + C_2 x)e^{2x},
$$

válida para todo $x \in \mathbb{R}$.

## Resolución

Se propone $y = e^{rx}$, con $y' = r e^{rx}$ y $y'' = r^2 e^{rx}$. Al sustituir en la ecuación,

$$
r^2 e^{rx} - 4r e^{rx} + 4 e^{rx} = e^{rx}\left(r^2 - 4r + 4\right) = 0.
$$

Como $e^{rx} \ne 0$, se obtiene la **ecuación característica**

$$
r^2 - 4r + 4 = 0.
$$

El polinomio es un cuadrado perfecto, $r^2 - 4r + 4 = (r - 2)^2$, de modo que la ecuación tiene la raíz real doble

$$
r = 2.
$$

La raíz doble aporta la solución $e^{2x}$. La segunda solución linealmente independiente no es otra exponencial, sino $x e^{2x}$. En efecto, para $y = x e^{2x}$ se tiene

$$
y' = (1 + 2x)e^{2x}, \qquad y'' = (4 + 4x)e^{2x},
$$

y al sustituir,

$$
y'' - 4y' + 4y = \left[(4 + 4x) - 4(1 + 2x) + 4x\right]e^{2x} = 0.
$$

Por lo tanto, la solución general es la combinación lineal

$$
y(x) = C_1 e^{2x} + C_2 x e^{2x} = (C_1 + C_2 x)e^{2x}.
$$

## Observaciones

La raíz doble $r = 2$ hace que las dos soluciones fundamentales sean $e^{2x}$ y $x e^{2x}$; ambas son linealmente independientes. La solución general está definida para todo $x \in \mathbb{R}$ y no hay soluciones singulares, porque la ecuación es lineal homogénea.
