---
title: "Boyce 3.3 Ejercicio 15"
exercise-id: boyce-c03-s03-e015
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.3, ejercicio 15"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - determinar.independencia-lineal
prerequisites:
  - ecuaciones-diferenciales.wronskiano
  - ecuaciones-diferenciales.linealidad
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c03s03i01-p159.png
---

## Enunciado

Demuestre que si $p$ es diferenciable y $p(x) > 0$, entonces el wronskiano $W(x)$ de dos soluciones de $[p(x)y']' + q(x)y = 0$ es $W(x) = c/p(x)$, en donde $c$ es una constante.

## Solución

El wronskiano de las dos soluciones es

$$
W(x) = \frac{c}{p(x)},
$$

con $c$ una constante.

## Resolución

Se desarrolla el término $[p(x)y']'$ con la **regla del producto**:

$$
[p(x)y']' + q(x)y = p(x)y'' + p'(x)y' + q(x)y = 0.
$$

Como $p(x) > 0$, la ecuación puede dividirse por $p(x)$ y se escribe en forma estándar:

$$
y'' + \frac{p'(x)}{p(x)}\,y' + \frac{q(x)}{p(x)}\,y = 0.
$$

Sean $y_1$ y $y_2$ dos soluciones y

$$
W(x) = y_1 y_2' - y_1' y_2
$$

su **wronskiano**. Al derivar,

$$
W' = y_1 y_2'' - y_1'' y_2.
$$

De la forma estándar se despeja la segunda derivada de cada solución:

$$
y_i'' = -\frac{p'}{p}\,y_i' - \frac{q}{p}\,y_i, \qquad i = 1, 2.
$$

Si se sustituyen estas expresiones en $W'$ y se agrupan términos,

$$
\begin{aligned}
W'
&= y_1\left(-\frac{p'}{p}\,y_2' - \frac{q}{p}\,y_2\right)
 - \left(-\frac{p'}{p}\,y_1' - \frac{q}{p}\,y_1\right) y_2 \\[2pt]
&= -\frac{p'}{p}\left(y_1 y_2' - y_1' y_2\right)
 - \frac{q}{p}\,y_1 y_2 + \frac{q}{p}\,y_1 y_2 \\[2pt]
&= -\frac{p'}{p}\,W.
\end{aligned}
$$

Por tanto, $W$ satisface la ecuación lineal de primer orden

$$
W' + \frac{p'}{p}\,W = 0.
$$

Un factor integrante de esta ecuación es $p(x)$, pues $p > 0$. Al multiplicar,

$$
p\,W' + p'\,W = 0,
\qquad\text{es decir,}\qquad (p\,W)' = 0.
$$

De ahí $p(x)W(x) = c$, con $c$ una constante, y al despejar

$$
W(x) = \frac{c}{p(x)}.
$$

## Observaciones

La constante $c$ queda determinada por el par de soluciones elegido: $c = p(x_0)W(x_0)$ en cualquier punto $x_0$ del intervalo. Para un par linealmente independiente se cumple $c \neq 0$; como $p(x) > 0$, el wronskiano no se anula y las dos soluciones forman un conjunto fundamental en ese intervalo.

El resultado es la **fórmula de Abel** particularizada a la forma $[p(x)y']' + q(x)y = 0$, en la que el coeficiente relevante de la forma estándar es $p'/p$. La fórmula es válida en todo intervalo donde $p$ sea diferenciable con $p > 0$ y $q$ sea continua.
