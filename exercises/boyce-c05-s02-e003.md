---
title: "Boyce 5.2 Ejercicio 3"
exercise-id: boyce-c05-s02-e003
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.2, ejercicio 3"
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
  - calculo-avanzado.series-taylor
  - calculo-avanzado.convergencia
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c05s02i01-p257.png
---

## Enunciado

En cada uno de los problemas 1 a 14, resuelva la ecuación diferencial dada por medio de una serie de potencias alrededor de un punto dado $x_0$. Halle la relación de recurrencia; encuentre también los cuatro primeros términos de cada una de dos soluciones linealmente independientes (a menos que la serie termine antes). Si es posible, encuentre el término general de cada solución.

3. $y'' - xy' - y = 0, \quad x_0 = 1$

## Solución

La relación de recurrencia es

$$
a_{n+2} = \frac{a_n + a_{n+1}}{n+2}, \qquad n = 0, 1, 2, \dots
$$

y, con $t = x-1$, dos soluciones linealmente independientes son

$$
\begin{aligned}
y_1(x) &= 1 + \frac{(x-1)^2}{2} + \frac{(x-1)^3}{6} + \frac{(x-1)^4}{6} + \cdots, \\
y_2(x) &= (x-1) + \frac{(x-1)^2}{2} + \frac{(x-1)^3}{2} + \frac{(x-1)^4}{4} + \cdots
\end{aligned}
$$

No existe una expresión elemental para el término general de ninguna de las dos soluciones.

## Resolución

La ecuación es de **segundo orden** y **lineal**. Sus coeficientes son polinomios, por lo que todo punto finito, en particular $x_0 = 1$, es un **punto ordinario**. La solución admite un desarrollo en serie de potencias de $x-1$.

Se introduce el cambio de variable

$$
t = x-1, \qquad x = t+1,
$$

con el que $y' = \dfrac{dy}{dt}$ y $y'' = \dfrac{d^2y}{dt^2}$. La ecuación se reescribe como

$$
y'' - (1+t)y' - y = 0.
$$

Se propone la solución en serie

$$
y = \sum_{n=0}^{\infty} a_n t^n,
$$

cuyas derivadas son

$$
y' = \sum_{n=1}^{\infty} n\,a_n t^{n-1}, \qquad y'' = \sum_{n=2}^{\infty} n(n-1)\,a_n t^{n-2}.
$$

Al sustituir en la ecuación resulta

$$
\sum_{n=2}^{\infty} n(n-1)\,a_n t^{n-2}
- \sum_{n=1}^{\infty} n\,a_n t^{n-1}
- \sum_{n=1}^{\infty} n\,a_n t^{n}
- \sum_{n=0}^{\infty} a_n t^{n} = 0.
$$

Se igualan todas las sumas a la potencia $t^m$. En las dos primeras se desplaza el índice y en las dos últimas se conserva:

$$
\sum_{m=0}^{\infty} (m+2)(m+1)\,a_{m+2} t^{m}
- \sum_{m=0}^{\infty} (m+1)\,a_{m+1} t^{m}
- \sum_{m=1}^{\infty} m\,a_m t^{m}
- \sum_{m=0}^{\infty} a_m t^{m} = 0.
$$

Al agrupar los términos de igual potencia,

$$
2a_2 - a_1 - a_0
+ \sum_{m=1}^{\infty}\Big[(m+2)(m+1)\,a_{m+2} - (m+1)\,a_{m+1} - (m+1)\,a_m\Big] t^{m} = 0.
$$

Como cada coeficiente debe anularse, el término constante da

$$
2a_2 = a_0 + a_1
$$

y, para $m \ge 1$, tras factorizar $(m+1)$,

$$
(m+2)(m+1)\,a_{m+2} = (m+1)(a_{m+1} + a_m)
\;\Longrightarrow\;
a_{m+2} = \frac{a_m + a_{m+1}}{m+2}.
$$

La misma expresión reproduce el caso $m = 0$, de modo que la relación de recurrencia es

$$
a_{n+2} = \frac{a_n + a_{n+1}}{n+2}, \qquad n = 0, 1, 2, \dots
$$

Los coeficientes $a_0$ y $a_1$ quedan libres. En función de ellos,

$$
\begin{aligned}
a_2 &= \frac{a_0 + a_1}{2}, \\
a_3 &= \frac{a_1 + a_2}{3} = \frac{a_0 + 3a_1}{6}, \\
a_4 &= \frac{a_2 + a_3}{4} = \frac{2a_0 + 3a_1}{12}, \\
a_5 &= \frac{a_3 + a_4}{5} = \frac{4a_0 + 9a_1}{60}.
\end{aligned}
$$

La elección $a_0 = 1$, $a_1 = 0$ define $y_1$, y la elección $a_0 = 0$, $a_1 = 1$ define $y_2$. Sustituyendo y volviendo a la variable $x$,

$$
\begin{aligned}
y_1(x) &= 1 + \frac{(x-1)^2}{2} + \frac{(x-1)^3}{6} + \frac{(x-1)^4}{6} + \cdots, \\
y_2(x) &= (x-1) + \frac{(x-1)^2}{2} + \frac{(x-1)^3}{2} + \frac{(x-1)^4}{4} + \cdots
\end{aligned}
$$

Las dos soluciones son linealmente independientes: el wronskiano en $x_0 = 1$ vale

$$
W(y_1, y_2)(1) = y_1(1)\,y_2'(1) - y_1'(1)\,y_2(1) = 1\cdot 1 - 0\cdot 0 = 1 \ne 0.
$$

La recurrencia acopla cada coeficiente $a_{n+2}$ con $a_n$ y $a_{n+1}$ y tiene coeficiente variable $1/(n+2)$; no se reduce a una fórmula cerrada para $a_n$. Por ello el término general no se expresa de forma elemental en este problema.

## Observaciones

Al ser $x_0 = 1$ un punto ordinario y no existir puntos singulares finitos, ambas series convergen para todo $x \in \mathbb{R}$.

La ecuación admite la solución elemental $y = e^{x^2/2}$, ya que puede escribirse como $(y' - xy)' = 0$. Por eso ninguna de las dos soluciones independientes anteriores tiene, por separado, una expresión cerrada sencilla.
