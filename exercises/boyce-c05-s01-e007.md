---
title: "Boyce 5.1 Ejercicio 7"
exercise-id: boyce-c05-s01-e007
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.1, ejercicio 7"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - resolver-analiticamente.series-frobenius
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c05s01i01-p247.png
---

## Enunciado

En cada uno de los problemas 1 a 8, determine el radio de convergencia de la serie de potencias dada.

7. $\sum_{n=1}^{\infty} \frac{(-1)^n n^2 (x+2)^n}{3^n}$

## Solución

El radio de convergencia de la serie es

$$
R = 3.
$$

## Resolución

La serie es una serie de potencias en $(x+2)$ con coeficientes

$$
a_n = \frac{(-1)^n n^2}{3^n}.
$$

Se aplica el **criterio del cociente** al término general $u_n = a_n (x+2)^n$. El cociente de términos consecutivos es

$$
\frac{u_{n+1}}{u_n}
= \frac{(-1)^{n+1}(n+1)^2 (x+2)^{n+1}/3^{n+1}}{(-1)^n n^2 (x+2)^n/3^n}
= -\frac{(n+1)^2}{n^2}\cdot\frac{x+2}{3}.
$$

Al tomar valor absoluto y el límite cuando $n \to \infty$,

$$
L = \lim_{n\to\infty}\left|\frac{u_{n+1}}{u_n}\right|
= \frac{|x+2|}{3}\lim_{n\to\infty}\left(\frac{n+1}{n}\right)^2
= \frac{|x+2|}{3}.
$$

El criterio del cociente garantiza convergencia absoluta si $L<1$, esto es, si $|x+2|<3$. Por tanto, la serie converge para todo $x$ con $|x+2|<3$ y el radio de convergencia es

$$
R = 3.
$$

## Observaciones

El centro de la serie es $x_0 = -2$, de modo que el intervalo abierto de convergencia es $(-5,1)$. El signo $(-1)^n$ y el factor $n^2$ no modifican el radio: solo influyen en el comportamiento en los extremos, que el enunciado no solicita.
