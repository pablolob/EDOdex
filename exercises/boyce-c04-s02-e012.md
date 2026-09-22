---
title: "Boyce 4.2 Ejercicio 12"
exercise-id: boyce-c04-s02-e012
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.2, ejercicio 12"
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

12. $y''' - 3y'' + 3y' - y = 0$

## Solución

$$
y(x) = \left(C_1 + C_2 x + C_3 x^2\right)e^{x}, \qquad x\in\mathbb{R}.
$$

## Resolución

La ecuación es **lineal**, **homogénea**, de **tercer orden** y con **coeficientes constantes**. Al proponer $y=e^{rx}$ se obtiene la ecuación característica

$$
r^3 - 3r^2 + 3r - 1 = 0.
$$

El polinomio auxiliar es un cubo perfecto:

$$
r^3 - 3r^2 + 3r - 1 = (r-1)^3.
$$

Por tanto, la única raíz es $r=1$, con multiplicidad $3$.

Una raíz real repetida $k$ veces aporta las soluciones $e^{rx}$, $xe^{rx}$, ..., $x^{k-1}e^{rx}$. Con $k=3$ y $r=1$ resultan las tres funciones linealmente independientes

$$
e^{x}, \qquad xe^{x}, \qquad x^2e^{x}.
$$

La solución general es la combinación lineal del conjunto fundamental:

$$
y(x) = C_1 e^{x} + C_2 xe^{x} + C_3 x^2e^{x} = \left(C_1 + C_2 x + C_3 x^2\right)e^{x}.
$$

La comprobación por sustitución directa confirma el resultado: cada aplicación del operador $D-1$ a $x^me^{x}$ reduce el grado del factor polinómico en una unidad, de modo que $(D-1)^3$ anula a $e^{x}$, a $xe^{x}$ y a $x^2e^{x}$. Como $y'''-3y''+3y'-y=(D-1)^3y$, las tres funciones satisfacen la ecuación.

## Observaciones

La ecuación tiene coeficientes constantes y ningún punto singular, así que la solución general está definida para todo $x\in\mathbb{R}$. Es lineal y homogénea, por lo que no admite soluciones singulares ni se pierde ninguna solución.

El factor polinómico $\left(C_1 + C_2 x + C_3 x^2\right)$ es indispensable: una raíz triple solo aporta una exponencial, y se necesitan tres soluciones independientes para generar todas las soluciones de una ecuación de tercer orden. El número de constantes arbitrarias coincide con el orden.
