---
title: "Boyce 3.3 Ejercicio 1"
exercise-id: boyce-c03-s03-e001
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.3, ejercicio 1"
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

1. $f(x) = x^2 + 5x, \quad g(x) = x^2 - 5x$

## Solución

El par de funciones es **linealmente independiente**. Su wronskiano es

$$
W(f,g)(x) = 10x^2,
$$

que no es idénticamente nulo.

## Resolución

Las derivadas de las funciones dadas son

$$
f'(x) = 2x + 5, \qquad g'(x) = 2x - 5.
$$

El **wronskiano** del par se calcula como el determinante

$$
\begin{aligned}
W(f,g)(x) &= \begin{vmatrix} f(x) & g(x) \\ f'(x) & g'(x) \end{vmatrix}
= f(x)g'(x) - f'(x)g(x) \\
&= (x^2 + 5x)(2x - 5) - (2x + 5)(x^2 - 5x) \\
&= \left(2x^3 + 5x^2 - 25x\right) - \left(2x^3 - 5x^2 - 25x\right) \\
&= 10x^2.
\end{aligned}
$$

El wronskiano no es idénticamente nulo: por ejemplo, $W(f,g)(1) = 10 \ne 0$. Por el criterio del wronskiano, el par es **linealmente independiente** en $\mathbb{R}$, que es donde ambas funciones y sus derivadas son continuas.

## Observaciones

El wronskiano se anula en $x = 0$, pero un cero aislado no implica dependencia lineal. La conclusión depende de que $W$ no sea idénticamente nulo.

### Método alternativo: definición directa

También puede aplicarse la definición. Si $c_1 f(x) + c_2 g(x) = 0$ para todo $x$, entonces

$$
(c_1 + c_2)x^2 + 5(c_1 - c_2)x = 0.
$$

Igualando a cero los coeficientes se obtiene $c_1 + c_2 = 0$ y $c_1 - c_2 = 0$, de donde $c_1 = c_2 = 0$. El par es linealmente independiente.
