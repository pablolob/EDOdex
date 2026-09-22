---
title: "Boyce 5.1 Ejercicio 14"
exercise-id: boyce-c05-s01-e014
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.1, ejercicio 14"
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

14. $\frac{1}{1 + x}, \quad x_0 = 0$

## Solución

La serie de Taylor de $\dfrac{1}{1+x}$ en torno a $x_0=0$ es

$$
\frac{1}{1+x} = \sum_{n=0}^{\infty} (-1)^n x^n = 1 - x + x^2 - x^3 + \cdots
$$

y su radio de convergencia es

$$
R = 1.
$$

## Resolución

La serie de Taylor de una función $f$ infinitamente derivable en torno al punto $x_0$ es

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(x_0)}{n!}(x-x_0)^n.
$$

Para $f(x)=\dfrac{1}{1+x}=(1+x)^{-1}$, cada derivada sucesiva conserva la potencia negativa:

$$
f^{(n)}(x) = (-1)^n n!\,(1+x)^{-(n+1)}, \qquad n = 0, 1, 2, \ldots
$$

Al evaluar en $x_0=0$ resulta $f^{(n)}(0) = (-1)^n n!$, de modo que los coeficientes son

$$
a_n = \frac{f^{(n)}(0)}{n!} = (-1)^n.
$$

Al sustituir en la serie se obtiene

$$
\frac{1}{1+x} = \sum_{n=0}^{\infty} (-1)^n x^n
= 1 - x + x^2 - x^3 + \cdots
$$

El radio de convergencia se determina con el **criterio del cociente**. Como $|a_n|=1$ para todo $n$,

$$
\lim_{n\to\infty} \left|\frac{a_{n+1}}{a_n}\right| = 1,
$$

por lo que

$$
R = \lim_{n\to\infty} \left|\frac{a_n}{a_{n+1}}\right| = 1.
$$

La serie converge para $|x| < 1$ y diverge para $|x| > 1$.

## Observaciones

La serie es geométrica de razón $-x$. Reconocer esa estructura evita el cálculo de las derivadas: la suma de la serie geométrica $\sum_{n=0}^{\infty}(-x)^n$ coincide con $\dfrac{1}{1+x}$ cuando $|-x|<1$.

La función tiene una singularidad en $x=-1$, el punto más próximo a $x_0=0$ donde deja de ser analítica. La distancia a esa singularidad, igual a $1$, coincide con el radio de convergencia.

En los extremos $x=1$ y $x=-1$ el término general $(-1)^n x^n$ no tiende a cero, de modo que la serie diverge allí. El intervalo abierto de convergencia es $(-1,1)$.
