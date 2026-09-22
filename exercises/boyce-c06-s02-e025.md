---
title: "Boyce 6.2 Ejercicio 25"
exercise-id: boyce-c06-s02-e025
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.2, ejercicio 25"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
hidden-competencies:
  - resolver-analiticamente.escalon-unitario
prerequisitos:
  - transformadas.transformada-laplace
  - transformadas.funcion-escalon
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c06s02i02-p333.png
---

## Enunciado

En cada uno de los problemas 24 a 27, encuentre la transformada de Laplace de la función dada. En el problema 27, suponga que es permisible la integración término a término de la serie infinita.

25. $f(t) = \begin{cases} 1, & 0 \le t < 1 \\ 0, & 1 \le t < 2 \\ 1, & 2 \le t < 3 \\ 0, & t \ge 3 \end{cases}$

## Solución

$$
\mathscr{L}\{f(t)\} = \frac{1 - e^{-s} + e^{-2s} - e^{-3s}}{s}, \qquad s > 0.
$$

## Resolución

La función es constante a tramos. Se representa con la **función escalón unitario** $u(t-a)$. Como $f$ vale $1$ en $[0,1)$, $0$ en $[1,2)$, $1$ en $[2,3)$ y $0$ para $t \ge 3$, cada cambio de tramo se introduce con un escalón:

$$
f(t) = u(t) - u(t-1) + u(t-2) - u(t-3).
$$

En efecto, los escalones positivos activan el valor $1$ y los negativos lo desactivan, reproduciendo los cuatro tramos.

La transformada del escalón unitario es

$$
\mathscr{L}\{u(t-a)\} = \frac{e^{-as}}{s}, \qquad a \ge 0,\ s > 0,
$$

con $u(t) = u(t-0)$ y $\mathscr{L}\{u(t)\} = 1/s$. Por **linealidad** de la transformada,

$$
\mathscr{L}\{f(t)\}
= \frac{1}{s} - \frac{e^{-s}}{s} + \frac{e^{-2s}}{s} - \frac{e^{-3s}}{s}
= \frac{1 - e^{-s} + e^{-2s} - e^{-3s}}{s}.
$$

## Observaciones

La función es una onda cuadrada formada por dos pulsos unitarios. Los saltos en $t=1,2,3$ no afectan al valor de la integral, que es insensible a cambios en un conjunto de medida nula. La transformada converge para $s>0$, la misma región que la del escalón $\mathscr{L}\{u(t)\}=1/s$; los factores $e^{-as}$ no introducen singularidades nuevas.

### Método alternativo: integración directa por tramos

Como $f$ solo es no nula en $[0,1)$ y $[2,3)$, la definición de la transformada da directamente

$$
\mathscr{L}\{f(t)\} = \int_0^1 e^{-st}\,dt + \int_2^3 e^{-st}\,dt
= \frac{1-e^{-s}}{s} + \frac{e^{-2s}-e^{-3s}}{s},
$$

que coincide con el resultado anterior.
