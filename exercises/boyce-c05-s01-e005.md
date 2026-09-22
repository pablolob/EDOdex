---
title: "Boyce 5.1 Ejercicio 5"
exercise-id: boyce-c05-s01-e005
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.1, ejercicio 5"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - resolver-analiticamente.series-frobenius
prerequisitos:
  - calculo-avanzado.series-potencias
  - calculo-avanzado.convergencia
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c05s01i01-p247.png
---

## Enunciado

En cada uno de los problemas 1 a 8, determine el radio de convergencia de la serie de potencias dada.

5. $\sum_{n=1}^{\infty} \frac{(2x+1)^n}{n^2}$

## Solución

La serie es una serie de potencias centrada en $x_0 = -\frac{1}{2}$ con coeficientes $a_n = \frac{2^n}{n^2}$. Su radio de convergencia es

$$
R = \frac{1}{2}.
$$

## Resolución

El término general se reescribe para exhibir la potencia de $x - x_0$:

$$
\frac{(2x+1)^n}{n^2} = \frac{2^n}{n^2}\left(x + \frac{1}{2}\right)^n.
$$

Por tanto, la serie es $\sum_{n=1}^{\infty} a_n \left(x - x_0\right)^n$ con centro $x_0 = -\frac{1}{2}$ y coeficientes $a_n = \dfrac{2^n}{n^2}$.

Se aplica el **criterio del cociente** a los coeficientes:

$$
\lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right|
= \lim_{n \to \infty} \frac{2^{n+1}}{(n+1)^2} \cdot \frac{n^2}{2^n}
= 2 \lim_{n \to \infty} \left(\frac{n}{n+1}\right)^2
= 2.
$$

El radio de convergencia es el recíproco de ese límite:

$$
R = \frac{1}{\displaystyle\lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right|} = \frac{1}{2}.
$$

De forma equivalente, el criterio del cociente aplicado a los términos de la serie da convergencia cuando $\left|2x+1\right| < 1$, es decir, cuando $\left|x + \frac{1}{2}\right| < \frac{1}{2}$; esto confirma $R = \frac{1}{2}$.

## Observaciones

La serie converge absolutamente en el intervalo abierto $\left(-1, 0\right)$. En los extremos también converge: en $x = 0$ resulta $\sum_{n=1}^{\infty} \frac{1}{n^2}$ y en $x = -1$ resulta $\sum_{n=1}^{\infty} \frac{(-1)^n}{n^2}$, ambas convergentes. El intervalo de convergencia es entonces $\left[-1, 0\right]$.

El **criterio de la raíz** conduce al mismo radio, ya que $\lim_{n \to \infty} \sqrt[n]{\frac{2^n}{n^2}} = 2$.
