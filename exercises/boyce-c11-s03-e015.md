---
title: "Boyce 11.3 Ejercicio 15"
exercise-id: boyce-c11-s03-e015
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 11.3, ejercicio 15"
statement-status: accepted
solution-status: open
source-images:
  - c11s03i02-p676.png
---

## Enunciado

Sea $L$ un operador diferencial lineal de segundo orden. Demuestre que la solución $y = \phi(x)$ del problema
$$L[y] = f(x), \quad a_1y(0) + a_2y'(0) = \alpha, \quad b_1y(1) + b_2y'(1) = \beta$$
puede escribirse como $y = u + v$ siempre que $u = \phi_1(x)$ y $v = \phi_2(x)$ sean soluciones de los problemas
$$L[u] = 0, \quad a_1u(0) + a_2u'(0) = \alpha, \quad b_1u(1) + b_2u'(1) = \beta$$
y
$$L[v] = f(x), \quad a_1v(0) + a_2v'(0) = 0, \quad b_1v(1) + b_2v'(1) = 0$$
respectivamente.
