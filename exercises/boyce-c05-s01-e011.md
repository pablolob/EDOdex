---
title: "Boyce 5.1 Ejercicio 11"
exercise-id: boyce-c05-s01-e011
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.1, ejercicio 11"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - resolver-series.serie-potencias
prerequisitos:
  - calculo-avanzado.series-taylor
  - calculo-avanzado.convergencia
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c05s01i01-p247.png
---

## Enunciado

En cada uno de los problemas 9 a 16, determine la serie de Taylor en torno al punto $x_0$ para la función dada. Determine también el radio de convergencia de la serie.

11. $x, \quad x_0 = 1$

## Solución

La serie de Taylor de $x$ en torno a $x_0=1$ es

$$
x = 1 + (x-1),
$$

y su radio de convergencia es

$$
R = \infty.
$$

## Resolución

La serie de Taylor de una función $f$ infinitamente derivable en torno al punto $x_0$ es

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(x_0)}{n!}(x-x_0)^n.
$$

Para $f(x)=x$, las derivadas son

$$
f'(x) = 1, \qquad f^{(n)}(x) = 0 \quad (n \ge 2).
$$

Al evaluar en $x_0=1$ resultan $f(1)=1$, $f'(1)=1$ y $f^{(n)}(1)=0$ para $n \ge 2$. Por tanto, solo los dos primeros coeficientes son distintos de cero y la serie se reduce a

$$
x = 1 + (x-1).
$$

Los términos de orden $n \ge 2$ se anulan. La serie es un polinomio, de modo que converge para todo $x \in \mathbb{R}$; equivalentemente, el **criterio del cociente** da un límite nulo y

$$
R = \infty.
$$

## Observaciones

La serie de Taylor de un polinomio de grado $n$ en torno a cualquier punto es el propio polinomio y tiene a lo sumo $n+1$ términos no nulos. Aquí la suma reproduce exactamente $x$, no una aproximación. Como los polinomios son funciones enteras, el radio de convergencia es infinito.
