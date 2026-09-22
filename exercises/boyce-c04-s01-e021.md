---
title: "Boyce 4.1 Ejercicio 21"
exercise-id: boyce-c04-s01-e021
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.1, ejercicio 21"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
  - fundamentos
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
  - verificar.solucion
prerequisitos:
  - algebra.factorizacion-polinomios
  - ecuaciones-diferenciales.wronskiano
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c04s01i02-p223.png
---

## Enunciado

Sea el operador diferencial lineal $L$ definido por

$$L[y] = a_0 y^{(n)} + a_1 y^{(n-1)} + \cdots + a_n y,$$

en donde $a_0, a_1, \dots, a_n$ son constantes reales.

a) Halle $L[x^n]$.

b) Halle $L[e^{rx}]$.

c) Determine cuatro soluciones de la ecuación $y^{iv} - 5y'' + 4y = 0$. ¿Se puede considerar que las cuatro soluciones forman un conjunto fundamental de soluciones? ¿Por qué?

## Solución

a)

$$
L[x^n] = \sum_{k=0}^{n} a_k \,\frac{n!}{k!}\, x^{k}
= a_0 n! + a_1 n!\,x + a_2 \frac{n!}{2!}\,x^2 + \cdots + a_n x^n.
$$

b)

$$
L[e^{rx}] = P(r)\,e^{rx}, \qquad P(r) = a_0 r^n + a_1 r^{n-1} + \cdots + a_n.
$$

c) Cuatro soluciones son $e^{x}$, $e^{-x}$, $e^{2x}$ y $e^{-2x}$. Sí forman un **conjunto fundamental de soluciones**, porque son linealmente independientes: su wronskiano vale $72 \ne 0$. La solución general es

$$
y = c_1 e^{x} + c_2 e^{-x} + c_3 e^{2x} + c_4 e^{-2x}.
$$

## Resolución

### Apartado a)

Para $0 \le k \le n$ se calcula la derivada de orden $n-k$ de $x^n$. Cada derivación reduce el exponente en una unidad y multiplica por el exponente vigente:

$$
\frac{d^{\,n-k}}{dx^{\,n-k}}\,x^{n}
= n(n-1)\cdots(k+1)\,x^{k}
= \frac{n!}{k!}\,x^{k}.
$$

Al sustituir esta expresión en cada término del operador resulta

$$
\begin{aligned}
L[x^n]
&= a_0\,\frac{d^n}{dx^n}x^n + a_1\,\frac{d^{\,n-1}}{dx^{\,n-1}}x^n + \cdots + a_n x^n \\
&= a_0\,n! + a_1\,n!\,x + a_2\,\frac{n!}{2!}\,x^2 + \cdots + a_n x^n \\
&= \sum_{k=0}^{n} a_k \,\frac{n!}{k!}\,x^{k}.
\end{aligned}
$$

### Apartado b)

La derivada de orden $n-k$ de $e^{rx}$ es

$$
\frac{d^{\,n-k}}{dx^{\,n-k}}\,e^{rx} = r^{\,n-k} e^{rx}.
$$

La exponencial es un factor común a todos los términos, de modo que

$$
\begin{aligned}
L[e^{rx}]
&= a_0 r^n e^{rx} + a_1 r^{n-1} e^{rx} + \cdots + a_n e^{rx} \\
&= \left(a_0 r^n + a_1 r^{n-1} + \cdots + a_n\right) e^{rx} \\
&= P(r)\,e^{rx}.
\end{aligned}
$$

El polinomio $P(r)$ tiene grado $n$ porque $a_0 \ne 0$.

### Apartado c)

La ecuación $y^{iv} - 5y'' + 4y = 0$ es $L[y] = 0$ con $n = 4$ y coeficientes $a_0 = 1$, $a_1 = 0$, $a_2 = -5$, $a_3 = 0$, $a_4 = 4$. El polinomio del apartado b) es

$$
P(r) = r^4 - 5r^2 + 4.
$$

Según el apartado b), $L[e^{rx}] = P(r)e^{rx}$. Como $e^{rx} \ne 0$, la función $e^{rx}$ es solución de $L[y] = 0$ si y solo si $P(r) = 0$. El polinomio se factoriza con el cambio $u = r^2$:

$$
P(r) = r^4 - 5r^2 + 4 = (r^2 - 1)(r^2 - 4) = (r - 1)(r + 1)(r - 2)(r + 2).
$$

Sus raíces son $r = 1$, $r = -1$, $r = 2$ y $r = -2$. Cada raíz produce una solución, de modo que

$$
y_1 = e^{x}, \qquad y_2 = e^{-x}, \qquad y_3 = e^{2x}, \qquad y_4 = e^{-2x}
$$

son cuatro soluciones de la ecuación.

Para decidir si forman un conjunto fundamental se calcula su **wronskiano**. El wronskiano de $n$ exponenciales con exponentes distintos admite la forma cerrada

$$
W\!\left(e^{r_1 x}, \dots, e^{r_n x}\right)
= \left[\prod_{i<j} \left(r_j - r_i\right)\right] e^{(r_1 + \cdots + r_n)x}.
$$

Con $r_1 = 1$, $r_2 = -1$, $r_3 = 2$ y $r_4 = -2$ la suma de los exponentes es $1 - 1 + 2 - 2 = 0$, y el producto de las diferencias vale

$$
\prod_{i<j} \left(r_j - r_i\right)
= (-2)(1)(-3)(3)(-1)(-4) = 72.
$$

Por tanto,

$$
W\!\left(e^{x}, e^{-x}, e^{2x}, e^{-2x}\right) = 72\,e^{0} = 72 \ne 0
$$

para todo $x \in \mathbb{R}$.

Un wronskiano que no se anula en un punto implica que las soluciones son **linealmente independientes** en $\mathbb{R}$. La ecuación es lineal homogénea de cuarto orden, y en ella cualesquiera cuatro soluciones linealmente independientes forman un conjunto fundamental de soluciones. En consecuencia, las cuatro soluciones obtenidas sí constituyen un conjunto fundamental, y la solución general es

$$
y = c_1 e^{x} + c_2 e^{-x} + c_3 e^{2x} + c_4 e^{-2x},
$$

con $c_1, c_2, c_3, c_4$ constantes arbitrarias.

## Observaciones

El apartado b) explica el origen de las soluciones exponenciales: $e^{rx}$ resuelve la ecuación homogénea exactamente cuando $r$ es una raíz del polinomio $P(r)$. Por eso, en el apartado c), factorizar $P$ equivale a encontrar las soluciones de tipo exponencial.

Las cuatro raíces son reales y distintas. Si alguna raíz se repitiera, o si aparecieran raíces complejas, las soluciones exponenciales asociadas no bastarían por sí solas para completar un conjunto fundamental; esos casos corresponden a la sección 4.2.
