---
title: "Boyce 3.3 Ejercicio 5"
exercise-id: boyce-c03-s03-e005
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.3, ejercicio 5"
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

En cada uno de los problemas 1 a 6, determine si el par de funciones dado es linealmente independiente o linealmente dependiente.

5. $f(x) = 3x - 5, \quad g(x) = 9x - 15$

## Solución

El par de funciones es **linealmente dependiente**, porque $g$ es un múltiplo constante de $f$:

$$
g(x) = 9x - 15 = 3(3x - 5) = 3f(x).
$$

## Resolución

Dos funciones $f$ y $g$ son linealmente dependientes en un intervalo si existen constantes $c_1$ y $c_2$, no ambas nulas, tales que

$$
c_1 f(x) + c_2 g(x) = 0
$$

para todo $x$ del intervalo.

Se factoriza $g$:

$$
g(x) = 9x - 15 = 3(3x - 5) = 3f(x).
$$

Por tanto, $g$ coincide en todo $\mathbb{R}$ con el múltiplo $3f$. Con $c_1 = 3$ y $c_2 = -1$, ambos no nulos, resulta

$$
c_1 f(x) + c_2 g(x) = 3f(x) - g(x) = 0
$$

para todo $x \in \mathbb{R}$. Existe entonces una combinación lineal no trivial de las funciones que se anula idénticamente, de modo que el par es **linealmente dependiente** en $\mathbb{R}$.

## Observaciones

La proporcionalidad $g = 3f$ decide la dependencia sin necesidad de calcular el **Wronskiano**. A modo de comprobación, $f'(x) = 3$, $g'(x) = 9$ y

$$
W(f,g)(x) = f(x)g'(x) - f'(x)g(x) = (3x - 5)(9) - 3(9x - 15) = 0
$$

para todo $x$. Conviene notar que, para un par de funciones arbitrarias, $W \equiv 0$ por sí solo no basta para concluir la dependencia lineal; aquí la conclusión se apoya en la proporcionalidad explícita.
