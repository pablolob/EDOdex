---
title: "Boyce 3.3 Ejercicio 4"
exercise-id: boyce-c03-s03-e004
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.3, ejercicio 4"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - determinar.independencia-lineal
prerequisitos:
  - ecuaciones-diferenciales.wronskiano
  - derivacion.regla-cadena
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s03i01-p159.png
---

## Enunciado

En cada uno de los problemas 1 a 6, determine si el par de funciones dado es linealmente independiente o linealmente dependiente.

4. $f(x) = e^{3x}, \quad g(x) = e^{3(x-1)}$

## Solución

El par es **linealmente dependiente**, porque $g$ es un múltiplo constante de $f$. El wronskiano es idénticamente nulo:

$$
W(f,g)(x) = 0.
$$

## Resolución

Se reescribe $g$ con las leyes de los exponentes:

$$
g(x) = e^{3(x-1)} = e^{-3}e^{3x} = e^{-3} f(x).
$$

Como $e^{-3}$ es una constante, las dos funciones son proporcionales. Existe entonces una combinación lineal no trivial que se anula para todo $x$:

$$
e^{-3} f(x) + (-1)\,g(x) = 0.
$$

Con $c_1 = e^{-3}$ y $c_2 = -1$, no ambos nulos, el par es **linealmente dependiente**.

El resultado es coherente con el **wronskiano**. Las derivadas son $f'(x) = 3e^{3x}$ y $g'(x) = 3e^{3x-3}$, y el determinante resulta

$$
\begin{aligned}
W(f,g)(x) &= \begin{vmatrix} f(x) & g(x) \\ f'(x) & g'(x) \end{vmatrix}
= \begin{vmatrix} e^{3x} & e^{3x-3} \\ 3e^{3x} & 3e^{3x-3} \end{vmatrix} \\
&= e^{3x}\left(3e^{3x-3}\right) - 3e^{3x}\,e^{3x-3} = 0.
\end{aligned}
$$

Las dos filas del determinante son proporcionales, de modo que $W(f,g) \equiv 0$. Las funciones y sus derivadas son continuas en todo $\mathbb{R}$.

## Observaciones

Dos funciones son linealmente dependientes cuando una es múltiplo constante de la otra. Aquí el factor $e^{-3}$ no depende de $x$; si dependiera de $x$, la proporcionalidad no sería automática.

El wronskiano se anula idénticamente, condición necesaria para la dependencia lineal. En general, $W \equiv 0$ no basta para concluir que dos funciones arbitrarias son dependientes; en este ejercicio el argumento decisivo es la proporcionalidad directa.
