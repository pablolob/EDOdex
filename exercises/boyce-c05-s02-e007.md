---
title: "Boyce 5.2 Ejercicio 7"
exercise-id: boyce-c05-s02-e007
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.2, ejercicio 7"
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
  conceptual: 1
  technical: 2
source-images:
  - c05s02i02-p258.png
---

## Enunciado

En cada uno de los problemas 1 a 14, resuelva la ecuación diferencial dada por medio de una serie de potencias alrededor de un punto dado $x_0$. Halle la relación de recurrencia; encuentre también los cuatro primeros términos de cada una de dos soluciones linealmente independientes (a menos que la serie termine antes). Si es posible, encuentre el término general de cada solución.

7. $y'' + xy' + 2y = 0, \quad x_0 = 0$

## Solución

La relación de recurrencia es

$$
a_{n+2} = -\frac{a_n}{n+1}, \qquad n = 0, 1, 2, \dots
$$

Los cuatro primeros términos de cada una de dos soluciones linealmente independientes son

$$
\begin{aligned}
y_1(x) &= 1 - x^2 + \frac{x^4}{3} - \frac{x^6}{15} + \cdots, \\
y_2(x) &= x - \frac{x^3}{2} + \frac{x^5}{8} - \frac{x^7}{48} + \cdots
\end{aligned}
$$

Los coeficientes tienen término general

$$
a_{2k} = (-1)^k \frac{a_0}{(2k-1)!!}, \qquad a_{2k+1} = (-1)^k \frac{a_1}{2^k k!}, \qquad k = 0, 1, 2, \dots,
$$

donde $(-1)!! = 1$. La solución general es $y = c_1 y_1 + c_2 y_2$.

## Resolución

La ecuación es de **segundo orden**, **lineal** y **homogénea**. El coeficiente de $y''$ es $1$ y los demás son polinomios, de modo que todo punto finito, en particular $x_0 = 0$, es un **punto ordinario**. Por ello admite una solución en serie de potencias de $x$.

Se propone

$$
y = \sum_{n=0}^{\infty} a_n x^n, \qquad
y' = \sum_{n=1}^{\infty} n\,a_n x^{n-1}, \qquad
y'' = \sum_{n=2}^{\infty} n(n-1)\,a_n x^{n-2}.
$$

Al sustituir en $y'' + xy' + 2y = 0$ resulta

$$
\sum_{n=2}^{\infty} n(n-1)\,a_n x^{n-2}
+ \sum_{n=1}^{\infty} n\,a_n x^{n}
+ \sum_{n=0}^{\infty} 2a_n x^{n} = 0.
$$

Se desplaza el índice de la primera suma para escribir todo como potencia $x^n$:

$$
\sum_{n=0}^{\infty} (n+2)(n+1)\,a_{n+2} x^{n}
+ \sum_{n=1}^{\infty} n\,a_n x^{n}
+ \sum_{n=0}^{\infty} 2a_n x^{n} = 0.
$$

El término de $x^0$ da $2a_2 + 2a_0 = 0$, es decir, $a_2 = -a_0$. Para $n \ge 1$,

$$
(n+2)(n+1)\,a_{n+2} + (n+2)\,a_n = 0.
$$

Al factorizar $(n+2)$ se obtiene

$$
a_{n+2} = -\frac{a_n}{n+1}.
$$

Esta expresión reproduce el caso $n = 0$, de modo que la relación de recurrencia es

$$
a_{n+2} = -\frac{a_n}{n+1}, \qquad n = 0, 1, 2, \dots
$$

Cada coeficiente depende del de dos posiciones antes, así que las potencias pares y las impares evolucionan por separado. Los coeficientes $a_0$ y $a_1$ quedan libres. Para las potencias pares,

$$
a_2 = -a_0, \qquad a_4 = -\frac{a_2}{3} = \frac{a_0}{3}, \qquad a_6 = -\frac{a_4}{5} = -\frac{a_0}{15};
$$

y para las impares,

$$
a_3 = -\frac{a_1}{2}, \qquad a_5 = -\frac{a_3}{4} = \frac{a_1}{8}, \qquad a_7 = -\frac{a_5}{6} = -\frac{a_1}{48}.
$$

La elección $a_0 = 1$, $a_1 = 0$ define $y_1$, y la elección $a_0 = 0$, $a_1 = 1$ define $y_2$:

$$
\begin{aligned}
y_1(x) &= 1 - x^2 + \frac{x^4}{3} - \frac{x^6}{15} + \cdots, \\
y_2(x) &= x - \frac{x^3}{2} + \frac{x^5}{8} - \frac{x^7}{48} + \cdots
\end{aligned}
$$

Por inducción sobre $k \ge 0$, los coeficientes pares son

$$
a_{2k} = (-1)^k \frac{a_0}{1\cdot 3\cdot 5\cdots(2k-1)} = (-1)^k \frac{a_0}{(2k-1)!!}
$$

y los impares,

$$
a_{2k+1} = (-1)^k \frac{a_1}{2\cdot 4\cdots(2k)} = (-1)^k \frac{a_1}{2^k k!}.
$$

Así, el término general de cada solución es

$$
y_1(x) = \sum_{k=0}^{\infty} \frac{(-1)^k x^{2k}}{(2k-1)!!}, \qquad
y_2(x) = \sum_{k=0}^{\infty} \frac{(-1)^k x^{2k+1}}{2^k k!},
$$

donde $(-1)!! = 1$. Las dos soluciones son linealmente independientes: el wronskiano en $x_0 = 0$ vale

$$
W(y_1, y_2)(0) = y_1(0)\,y_2'(0) - y_1'(0)\,y_2(0) = 1\cdot 1 - 0\cdot 0 = 1 \ne 0.
$$

Por tanto, la solución general es $y = c_1 y_1 + c_2 y_2$.

## Observaciones

Como $x_0 = 0$ es un punto ordinario y la ecuación no tiene puntos singulares finitos, ambas series convergen para todo $x \in \mathbb{R}$.

La solución impar admite la forma cerrada $y_2(x) = x e^{-x^2/2}$; su desarrollo de Maclaurin reproduce la serie obtenida. La solución par no se expresa mediante funciones elementales.
