---
title: "Boyce 5.2 Ejercicio 4"
exercise-id: boyce-c05-s02-e004
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.2, ejercicio 4"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - resolver-series.serie-potencias
  - resolver-series.recurrencia
hidden-competencies:
  - clasificar.punto-ordinario
prerequisitos:
  - calculo-avanzado.series-potencias
  - calculo-avanzado.convergencia
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c05s02i01-p257.png
---

## Enunciado

En cada uno de los problemas 1 a 14, resuelva la ecuación diferencial dada por medio de una serie de potencias alrededor de un punto dado $x_0$. Halle la relación de recurrencia; encuentre también los cuatro primeros términos de cada una de dos soluciones linealmente independientes (a menos que la serie termine antes). Si es posible, encuentre el término general de cada solución.

4. $y'' + k^2 x^2 y = 0, \quad x_0 = 0, \quad k \text{ una constante}$

## Solución

La relación de recurrencia es

$$
a_{n+2} = -\frac{k^2}{(n+2)(n+1)}\,a_{n-2}, \qquad n \ge 2,
$$

con $a_2 = a_3 = 0$. Dos soluciones linealmente independientes son

$$
\begin{aligned}
y_1(x) &= 1 - \frac{k^2}{12}x^4 + \frac{k^4}{672}x^8 - \frac{k^6}{88704}x^{12} + \cdots, \\
y_2(x) &= x - \frac{k^2}{20}x^5 + \frac{k^4}{1440}x^9 - \frac{k^6}{224640}x^{13} + \cdots,
\end{aligned}
$$

cuyos términos generales son

$$
\begin{aligned}
y_1(x) &= \sum_{m=0}^{\infty}(-1)^m\frac{k^{2m}}{\prod_{j=1}^{m}(4j)(4j-1)}\,x^{4m}, \\
y_2(x) &= \sum_{m=0}^{\infty}(-1)^m\frac{k^{2m}}{\prod_{j=1}^{m}(4j+1)(4j)}\,x^{4m+1},
\end{aligned}
$$

donde el producto vacío vale $1$. La solución general es $y = c_1 y_1 + c_2 y_2$, con $c_1$ y $c_2$ constantes arbitrarias.

## Resolución

La ecuación es de **segundo orden**, **lineal** y **homogénea**. Sus coeficientes son polinomios, de modo que $x_0 = 0$ es un **punto ordinario** y admite una solución en serie de potencias

$$
y = \sum_{n=0}^{\infty} a_n x^n.
$$

Las derivadas son

$$
y' = \sum_{n=1}^{\infty} n\,a_n x^{n-1}, \qquad y'' = \sum_{n=2}^{\infty} n(n-1)\,a_n x^{n-2}.
$$

Al sustituir en $y'' + k^2 x^2 y = 0$ resulta

$$
\sum_{n=2}^{\infty} n(n-1)\,a_n x^{n-2} + k^2 \sum_{n=0}^{\infty} a_n x^{n+2} = 0.
$$

Se reindexan ambas sumas a la potencia $x^m$: en la primera $n = m+2$ y en la segunda $n = m-2$, con $m \ge 2$. Entonces

$$
2a_2 + 6a_3 x + \sum_{m=2}^{\infty}\Big[(m+2)(m+1)\,a_{m+2} + k^2 a_{m-2}\Big]x^m = 0.
$$

Como el coeficiente de cada potencia debe anularse, el término constante y el de $x$ dan $a_2 = 0$ y $a_3 = 0$, y para $m \ge 2$,

$$
(m+2)(m+1)\,a_{m+2} + k^2 a_{m-2} = 0,
$$

es decir,

$$
a_{m+2} = -\frac{k^2}{(m+2)(m+1)}\,a_{m-2}, \qquad m \ge 2.
$$

La recurrencia liga coeficientes separados por cuatro índices. Puesto que $a_2 = a_3 = 0$, todos los coeficientes con índice congruente con $2$ o $3$ módulo $4$ se anulan. Quedan dos familias: la que arranca en $a_0$ (índices $0, 4, 8, \dots$) y la que arranca en $a_1$ (índices $1, 5, 9, \dots$). Los primeros coeficientes son

$$
\begin{aligned}
a_4 &= -\frac{k^2}{4\cdot3}a_0 = -\frac{k^2}{12}a_0, &
a_8 &= -\frac{k^2}{8\cdot7}a_4 = \frac{k^4}{672}a_0, &
a_{12} &= -\frac{k^2}{12\cdot11}a_8 = -\frac{k^6}{88704}a_0, \\
a_5 &= -\frac{k^2}{5\cdot4}a_1 = -\frac{k^2}{20}a_1, &
a_9 &= -\frac{k^2}{9\cdot8}a_5 = \frac{k^4}{1440}a_1, &
a_{13} &= -\frac{k^2}{13\cdot12}a_9 = -\frac{k^6}{224640}a_1.
\end{aligned}
$$

Por inducción, cada coeficiente par de la primera familia y cada uno de la segunda son

$$
a_{4m} = (-1)^m\frac{k^{2m}}{\prod_{j=1}^{m}(4j)(4j-1)},
\qquad
a_{4m+1} = (-1)^m\frac{k^{2m}}{\prod_{j=1}^{m}(4j+1)(4j)}.
$$

La elección $a_0 = 1$, $a_1 = 0$ define $y_1$, y la elección $a_0 = 0$, $a_1 = 1$ define $y_2$:

$$
\begin{aligned}
y_1(x) &= 1 - \frac{k^2}{12}x^4 + \frac{k^4}{672}x^8 - \frac{k^6}{88704}x^{12} + \cdots, \\
y_2(x) &= x - \frac{k^2}{20}x^5 + \frac{k^4}{1440}x^9 - \frac{k^6}{224640}x^{13} + \cdots
\end{aligned}
$$

Las dos soluciones son linealmente independientes, pues sus valores y derivadas en el origen son

$$
y_1(0) = 1, \quad y_1'(0) = 0, \qquad y_2(0) = 0, \quad y_2'(0) = 1,
$$

de donde el wronskiano en $x_0 = 0$ vale $W(y_1, y_2)(0) = 1 \ne 0$.

## Observaciones

Al ser $x_0 = 0$ un punto ordinario y no existir puntos singulares finitos, ambas series convergen para todo $x \in \mathbb{R}$; el radio de convergencia es infinito.

El término general se expresa mediante productos de factores consecutivos. No se reduce a un factorial único, a diferencia de los coeficientes de las soluciones de otras ecuaciones con recurrencia de paso dos.
