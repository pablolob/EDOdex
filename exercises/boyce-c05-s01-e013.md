---
title: "Boyce 5.1 Ejercicio 13"
exercise-id: boyce-c05-s01-e013
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.1, ejercicio 13"
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
  technical: 2
source-images:
  - c05s01i01-p247.png
---

## Enunciado

En cada uno de los problemas 9 a 16, determine la serie de Taylor en torno al punto $x_0$ para la función dada. Determine también el radio de convergencia de la serie.

13. $\ln x, \quad x_0 = 1$

## Solución

La serie de Taylor de $\ln x$ en torno a $x_0=1$ es

$$
\ln x = \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}\,(x-1)^n,
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

Para $f(x)=\ln x$ las derivadas sucesivas siguen el patrón

$$
f'(x) = \frac{1}{x}, \qquad f''(x) = -\frac{1}{x^{2}}, \qquad f'''(x) = \frac{2}{x^{3}}, \qquad \ldots
$$

de modo que, para $n \ge 1$,

$$
f^{(n)}(x) = \frac{(-1)^{n-1}(n-1)!}{x^{n}}.
$$

Al evaluar en $x_0=1$ resulta $f(1)=\ln 1 = 0$ y

$$
f^{(n)}(1) = (-1)^{n-1}(n-1)!, \qquad n = 1, 2, 3, \ldots
$$

Los coeficientes son $a_0 = 0$ y, para $n \ge 1$,

$$
a_n = \frac{f^{(n)}(1)}{n!} = \frac{(-1)^{n-1}(n-1)!}{n!} = \frac{(-1)^{n-1}}{n}.
$$

Por tanto,

$$
\ln x = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n}(x-1)^n
= (x-1) - \frac{(x-1)^{2}}{2} + \frac{(x-1)^{3}}{3} - \frac{(x-1)^{4}}{4} + \cdots
$$

El radio de convergencia se obtiene con el **criterio del cociente** aplicado a los coeficientes $a_n = (-1)^{n-1}/n$. Para $x \ne 1$,

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}(x-1)^{n+1}}{a_n(x-1)^{n}}\right|
= \lim_{n\to\infty}\left|\frac{n}{n+1}\,(x-1)\right|
= |x-1|.
$$

La serie converge cuando $|x-1|<1$ y diverge cuando $|x-1|>1$. En consecuencia,

$$
R = 1.
$$

## Observaciones

La serie es el desarrollo de $\ln(1+u)$ con $u=x-1$. El radio $R=1$ coincide con la distancia desde el centro $x_0=1$ hasta la singularidad de $\ln x$ en $x=0$.

El intervalo de convergencia es $(0,2]$. En $x=2$ la serie se reduce a la serie armónica alternante y converge a $\ln 2$; en $x=0$ se reduce a la serie armónica y diverge.
