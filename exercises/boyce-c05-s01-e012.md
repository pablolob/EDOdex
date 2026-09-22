---
title: "Boyce 5.1 Ejercicio 12"
exercise-id: boyce-c05-s01-e012
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.1, ejercicio 12"
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

12. $x^2, \quad x_0 = -1$

## Solución

La serie de Taylor de $x^2$ en torno a $x_0=-1$ es

$$
x^2 = 1 - 2(x+1) + (x+1)^2,
$$

y su radio de convergencia es $R=\infty$.

## Resolución

La serie de Taylor de una función infinitamente derivable en torno a $x_0$ es

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(x_0)}{n!}\,(x-x_0)^{n}, \qquad f(x)=x^2,\quad x_0=-1.
$$

Las derivadas de $f(x)=x^2$ son

$$
f'(x)=2x, \qquad f''(x)=2, \qquad f^{(n)}(x)=0 \quad \text{para } n\ge 3.
$$

Evaluadas en $x_0=-1$ resultan

$$
f(-1)=1, \qquad f'(-1)=-2, \qquad f''(-1)=2, \qquad f^{(n)}(-1)=0 \quad (n\ge 3).
$$

Al sustituir en la serie, todos los coeficientes desde $n=3$ se anulan y el desarrollo termina:

$$
x^2 = \frac{1}{0!}(x+1)^{0} + \frac{-2}{1!}(x+1)^{1} + \frac{2}{2!}(x+1)^{2}
= 1 - 2(x+1) + (x+1)^{2}.
$$

Para el radio de convergencia se observa que la serie tiene un número finito de términos no nulos: es un polinomio en $(x+1)$. La suma es finita para todo $x \in \mathbb{R}$, de modo que la serie converge en toda la recta real y su radio de convergencia es $R=\infty$.

## Observaciones

La igualdad es exacta, no una aproximación truncada. Al ser $x^2$ un polinomio de grado $2$, su serie de Taylor en cualquier punto tiene solo tres términos no nulos y, por tanto, radio infinito.

El resultado también se obtiene por factorización directa: con $x=(x+1)-1$ se tiene $x^2=\bigl((x+1)-1\bigr)^2=1-2(x+1)+(x+1)^2$, que reproduce el mismo desarrollo.
