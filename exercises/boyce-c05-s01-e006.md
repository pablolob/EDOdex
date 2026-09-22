---
title: "Boyce 5.1 Ejercicio 6"
exercise-id: boyce-c05-s01-e006
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.1, ejercicio 6"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies: []
prerequisitos:
  - calculo-avanzado.series-potencias
  - calculo-avanzado.convergencia
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c05s01i01-p247.png
---

## Enunciado

En cada uno de los problemas 1 a 8, determine el radio de convergencia de la serie de potencias dada.

6. $\sum_{n=1}^{\infty} \frac{(x-x_0)^n}{n}$

## Solución

El radio de convergencia de la serie es

$$
R=1.
$$

## Resolución

Se aplica el **criterio del cociente** a los términos $b_n=\dfrac{(x-x_0)^n}{n}$ de la serie. Para $x\ne x_0$,

$$
\begin{aligned}
\lim_{n\to\infty}\left|\frac{b_{n+1}}{b_n}\right|
&= \lim_{n\to\infty}\left|\frac{(x-x_0)^{n+1}}{n+1}\cdot\frac{n}{(x-x_0)^n}\right| \\
&= |x-x_0|\lim_{n\to\infty}\frac{n}{n+1} \\
&= |x-x_0|.
\end{aligned}
$$

El criterio del cociente asegura convergencia absoluta cuando este límite es menor que $1$ y divergencia cuando es mayor que $1$. Por tanto, la serie converge para $|x-x_0|<1$ y diverge para $|x-x_0|>1$. En consecuencia, el radio de convergencia es $R=1$.

## Observaciones

El radio de convergencia no determina por sí solo el intervalo de convergencia: los extremos se estudian por separado. En $x=x_0+1$ la serie es la armónica $\sum_{n=1}^{\infty}\frac{1}{n}$, que diverge. En $x=x_0-1$ la serie es la armónica alternada $\sum_{n=1}^{\infty}\frac{(-1)^n}{n}$, que converge. El intervalo de convergencia es, por tanto, $(x_0-1,\,x_0+1]$.
