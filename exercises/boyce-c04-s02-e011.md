---
title: "Boyce 4.2 Ejercicio 11"
exercise-id: boyce-c04-s02-e011
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.2, ejercicio 11"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.factorizacion-polinomios
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c04s02i01-p229.png
---

## Enunciado

En cada uno de los problemas 11 a 22, determine la solución de la ecuación diferencial dada.

11. $y''' - y'' - y' + y = 0$

## Solución

$$
y(x) = C_1 e^{x} + C_2 x e^{x} + C_3 e^{-x}.
$$

## Resolución

La ecuación es **lineal**, **homogénea**, de **tercer orden** y con **coeficientes constantes**. Su ecuación característica se obtiene al sustituir $y = e^{rx}$:

$$
r^3 - r^2 - r + 1 = 0.
$$

Se factoriza el polinomio por agrupación de términos:

$$
\begin{aligned}
r^3 - r^2 - r + 1 &= r^2(r - 1) - (r - 1) \\
&= (r - 1)(r^2 - 1) \\
&= (r - 1)^2(r + 1).
\end{aligned}
$$

Las raíces son $r = 1$, con multiplicidad $2$, y $r = -1$, simple.

A cada raíz real distinta le corresponde la solución $e^{rx}$. Cuando una raíz real se repite, la segunda solución linealmente independiente se obtiene multiplicando por $x$. Así, la raíz doble $r = 1$ aporta el par $e^{x}$ y $x e^{x}$, y la raíz simple $r = -1$ aporta $e^{-x}$.

La solución general es la combinación lineal del conjunto fundamental:

$$
y(x) = C_1 e^{x} + C_2 x e^{x} + C_3 e^{-x}.
$$

Comprobación: al sustituir $y = e^{x}$ resulta $1 - 1 - 1 + 1 = 0$; para $y = x e^{x}$ se tiene $y''' - y'' - y' + y = 0$; y para $y = e^{-x}$ resulta $-1 - 1 + 1 + 1 = 0$. Las tres funciones satisfacen la ecuación.

## Observaciones

La ecuación tiene coeficientes constantes y ningún punto singular, de modo que la solución general está definida en todo $\mathbb{R}$.

El factor $x$ en el término $C_2 x e^{x}$ es indispensable: sin él, $C_1 e^{x}$ y $C_3 e^{-x}$ solo aportarían dos soluciones independientes y no podrían generar todas las soluciones de una ecuación de tercer orden.
