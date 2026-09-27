---
title: "Boyce 3.3 Ejercicio 8"
exercise-id: boyce-c03-s03-e008
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.3, ejercicio 8"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - determinar.independencia-lineal
prerequisitos:
  - ecuaciones-diferenciales.wronskiano
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s03i01-p159.png
---

## Enunciado

El wronskiano de dos funciones es $x^2 - 4$. ¿Las funciones son linealmente independientes o linealmente dependientes? ¿Por qué?

## Solución

El par de funciones es **linealmente independiente**, porque su wronskiano no es idénticamente nulo.

$$
W(x) = x^2 - 4, \qquad W(0) = -4 \ne 0.
$$

## Resolución

El wronskiano dado es

$$
W(x) = x^2 - 4 = (x - 2)(x + 2).
$$

El criterio del wronskiano para dos funciones diferenciables establece que el par es linealmente dependiente en un intervalo si y solo si $W$ es idénticamente nulo en ese intervalo.

Aquí $W$ no es idénticamente nulo: por ejemplo, en $x = 0$ se tiene $W(0) = -4 \ne 0$. Por tanto, el par es **linealmente independiente** en $\mathbb{R}$, donde ambos factores y el wronskiano son continuos.

## Observaciones

El wronskiano se anula en $x = 2$ y $x = -2$. Un cero aislado no implica dependencia lineal; la conclusión depende de que $W$ no sea idénticamente nulo en el intervalo.

Para dos soluciones de una ecuación lineal homogénea de segundo orden con coeficientes continuos, el teorema de Abel garantiza que el wronskiano es idénticamente nulo o nunca se anula en el intervalo de validez. Por ello, $x^2 - 4$ no puede ser el wronskiano de un par de soluciones de tal ecuación en un intervalo que contenga $x = 2$ o $x = -2$; el enunciado, sin embargo, solo habla de dos funciones, no necesariamente soluciones.
