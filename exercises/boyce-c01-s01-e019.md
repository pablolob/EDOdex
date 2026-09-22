---
title: "Boyce 1.1 Ejercicio 19"
exercise-id: boyce-c01-s01-e019
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 1.1, ejercicio 19"
topics:
  - fundamentos
competencies:
  - verificar.solucion
prerequisitos:
  - polinomios.resolver
difficulty:
  conceptual: 1
  technical: 1
statement-status: accepted
solution-status: draft
source-images:
  - c01s01i02-p026.png
---

## Enunciado

En cada uno de los problemas 19 y 20, determine los valores de $r$ para los que la ecuación diferencial dada tiene soluciones de la forma $y = x^r$, para $x > 0$.

19. $x^2 y'' + 4xy' + 2y = 0$

## Solución

La ecuación $x^2 y'' + 4xy' + 2y = 0$ admite soluciones de la forma $y = x^r$ para

$$
r = -1 \quad\text{y}\quad r = -2,
$$

es decir, $y = x^{-1}$ y $y = x^{-2}$ para $x > 0$.

## Resolución

Se sustituye $y = x^r$ en la ecuación. Sus dos primeras derivadas son

$$
y' = r\,x^{r-1}, \qquad y'' = r(r-1)\,x^{r-2}.
$$

Al sustituir en el miembro izquierdo se obtiene

$$
\begin{aligned}
x^2 y'' + 4xy' + 2y
&= x^2 \cdot r(r-1)\,x^{r-2} + 4x \cdot r\,x^{r-1} + 2x^r \\
&= r(r-1)\,x^r + 4r\,x^r + 2x^r \\
&= \bigl(r(r-1) + 4r + 2\bigr)\,x^r.
\end{aligned}
$$

Como $x > 0$, el factor $x^r$ no se anula para ningún valor real de $r$. Por tanto, la igualdad se cumple para todo $x > 0$ exactamente cuando se anula el factor restante:

$$
r(r-1) + 4r + 2 = 0.
$$

Se desarrolla y se factoriza:

$$
r^2 - r + 4r + 2 = r^2 + 3r + 2 = (r+1)(r+2) = 0.
$$

Los valores buscados son

$$
r = -1 \quad\text{y}\quad r = -2.
$$

Para $r = -1$ resulta $y = x^{-1}$, y para $r = -2$ resulta $y = x^{-2}$. Ambas funciones están definidas para $x > 0$ y satisfacen la ecuación.

## Observaciones

La ecuación es **equidimensional**: el grado de cada factor $x^k$ que multiplica una derivada iguala el orden de esa derivada. Por eso la sustitución $y = x^r$ conserva una única potencia $x^r$ en todos los términos y reduce el problema a una ecuación algebraica en $r$. Esta familia de ecuaciones se conoce como **ecuaciones de Cauchy–Euler** y se estudia sistemáticamente en capítulos posteriores; en esta sección basta la sustitución directa.
