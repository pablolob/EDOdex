---
title: "Boyce 5.1 Ejercicio 10"
exercise-id: boyce-c05-s01-e010
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.1, ejercicio 10"
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

10. $e^x, \quad x_0 = 0$

## Solución

La serie de Taylor de $e^x$ en torno a $x_0=0$ es

$$
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!},
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

Para $f(x)=e^x$, cada derivada sucesiva es $f^{(n)}(x)=e^x$. Al evaluar en $x_0=0$,

$$
f^{(n)}(0) = e^0 = 1, \qquad n = 0, 1, 2, \ldots
$$

Por tanto, los coeficientes son $a_n = \dfrac{1}{n!}$ y la serie resulta

$$
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}.
$$

El radio de convergencia se determina con el **criterio del cociente**. Para $x \ne 0$,

$$
\lim_{n\to\infty} \left|\frac{a_{n+1}\,x^{n+1}}{a_n\,x^n}\right|
= \lim_{n\to\infty} \left|\frac{x}{n+1}\right|
= 0.
$$

El límite es menor que $1$ para todo $x$ real, de modo que la serie converge para todo $x$. Equivalentemente,

$$
R = \lim_{n\to\infty} \left|\frac{a_n}{a_{n+1}}\right|
= \lim_{n\to\infty} (n+1)
= \infty.
$$

## Observaciones

La serie obtenida es la serie de Maclaurin de $e^x$ y converge de forma absoluta para todo $x \in \mathbb{R}$. El radio infinito refleja que $e^x$ es una función entera, sin singularidades en el plano complejo.
