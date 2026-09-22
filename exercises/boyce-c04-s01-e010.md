---
title: "Boyce 4.1 Ejercicio 10"
exercise-id: boyce-c04-s01-e010
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.1, ejercicio 10"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
  - fundamentos
competencies: []
prerequisitos:
  - matrices.determinantes
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c04s01i02-p223.png
---

## Enunciado

En cada uno de los problemas 7 a 12, determine si las funciones dadas son linealmente dependientes o independientes. Si son linealmente dependientes, halle una relación lineal entre ellas.

10. $y = c_1 x + c_2 x^2 + c_3 x^3$

## Solución

Las funciones que acompañan a las constantes son $y_1 = x$, $y_2 = x^2$ y $y_3 = x^3$. Son **linealmente independientes** y no existe una relación lineal entre ellas. Su wronskiano es

$$
W(x, x^2, x^3) = 2x^3,
$$

que no es idénticamente nulo.

## Resolución

Las funciones del conjunto son

$$
y_1 = x, \qquad y_2 = x^2, \qquad y_3 = x^3.
$$

Son polinomios, definidos y derivables en todo $\mathbb{R}$, de modo que su wronskiano está definido en todo $\mathbb{R}$.

Se forma el **wronskiano** del conjunto:

$$
W(x, x^2, x^3) =
\begin{vmatrix}
x & x^2 & x^3\\
1 & 2x & 3x^2\\
0 & 2 & 6x
\end{vmatrix}.
$$

Se desarrolla por la primera fila:

$$
\begin{aligned}
W &= x \begin{vmatrix} 2x & 3x^2 \\ 2 & 6x \end{vmatrix}
   - x^2 \begin{vmatrix} 1 & 3x^2 \\ 0 & 6x \end{vmatrix}
   + x^3 \begin{vmatrix} 1 & 2x \\ 0 & 2 \end{vmatrix} \\
  &= x\left(12x^2 - 6x^2\right) - x^2\left(6x\right) + x^3\left(2\right) \\
  &= 6x^3 - 6x^3 + 2x^3 \\
  &= 2x^3.
\end{aligned}
$$

El wronskiano $W = 2x^3$ no es idénticamente nulo: se anula en $x = 0$ y es distinto de cero en cualquier otro punto. Por el criterio del wronskiano, si $W$ no se anula en algún punto de un intervalo, las funciones son linealmente independientes sobre ese intervalo. Por tanto, $x$, $x^2$ y $x^3$ son linealmente independientes sobre $\mathbb{R}$.

En consecuencia, la única combinación lineal que se anula idénticamente es la trivial, $c_1 = c_2 = c_3 = 0$. No existe una relación lineal no trivial entre las funciones, de modo que no hay nada que hallar en el segundo supuesto del enunciado.

## Observaciones

El conjunto $\{x, x^2, x^3\}$ es linealmente independiente porque los tres polinomios tienen grados distintos; el wronskiano lo confirma.

El que $W$ se anule en $x = 0$ no implica dependencia lineal. El criterio del wronskiano es una implicación en un solo sentido: $W \neq 0$ en algún punto garantiza independencia, mientras que $W = 0$ en un punto aislado no aporta información.

### Método alternativo: definición de independencia lineal

Sin calcular el wronskiano, se supone que $c_1 x + c_2 x^2 + c_3 x^3 = 0$ para todo $x$. Para $x \neq 0$ se divide entre $x$ y resulta el polinomio $c_1 + c_2 x + c_3 x^2 = 0$. Un polinomio de grado a lo más $2$ que se anula en todos los $x \neq 0$ es idénticamente nulo, luego $c_1 = c_2 = c_3 = 0$. La única combinación lineal que se anula es la trivial, así que las funciones son linealmente independientes.
