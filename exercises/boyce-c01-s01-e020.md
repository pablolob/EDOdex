---
title: "Boyce 1.1 Ejercicio 20"
exercise-id: boyce-c01-s01-e020
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 1.1, ejercicio 20"
statement-status: accepted
solution-status: draft
topics:
  - fundamentos
competencies:
  - verificar.solucion
prerequisitos:
  - polinomios.resolver
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c01s01i02-p026.png
---

## Enunciado

En cada uno de los problemas 19 y 20, determine los valores de $r$ para los que la ecuación diferencial dada tiene soluciones de la forma $y = x^r$, para $x > 0$.

20. $x^2 y'' - 4xy' + 4y = 0$

## Solución

Los valores buscados son

$$
r = 1 \quad\text{y}\quad r = 4.
$$

Las funciones $y = x$ y $y = x^4$ satisfacen la ecuación $x^2 y'' - 4xy' + 4y = 0$.

## Resolución

Se sustituye $y = x^r$, con derivadas $y' = r x^{r-1}$ y $y'' = r(r-1) x^{r-2}$, en la ecuación:

$$
\begin{aligned}
x^2 y'' - 4xy' + 4y &= 0, \\
x^2 \bigl(r(r-1) x^{r-2}\bigr) - 4x \bigl(r x^{r-1}\bigr) + 4 x^r &= 0, \\
\bigl(r(r-1) - 4r + 4\bigr) x^r &= 0, \\
\bigl(r^2 - 5r + 4\bigr) x^r &= 0.
\end{aligned}
$$

Como $x > 0$, la potencia $x^r$ es positiva y distinta de cero para todo $r$ real; se divide entre $x^r$ y la igualdad exige

$$
r^2 - 5r + 4 = 0.
$$

El polinomio se factoriza:

$$
(r - 1)(r - 4) = 0.
$$

Por tanto,

$$
r = 1 \quad\text{o}\quad r = 4.
$$

Las soluciones correspondientes son $y = x$ y $y = x^4$.

## Observaciones

La verificación emplea solo cálculo diferencial: la derivada de $x^r$ es $r x^{r-1}$ y la de $r x^{r-1}$ es $r(r-1) x^{r-2}$. La condición $x > 0$ garantiza que $x^r$ esté definida y no se anule, de modo que dividir entre $x^r$ es válido y no se pierden soluciones.
