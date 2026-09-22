---
title: "Boyce 6.1 Ejercicio 10"
exercise-id: boyce-c06-s01-e010
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.1, ejercicio 10"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
prerequisitos:
  - transformadas.transformada-laplace
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s01i01-p324.png
---

## Enunciado

En cada uno de los problemas 1 a 10 encuentre la transformada inversa de Laplace de la función dada.

10. $\frac{2s - 3}{s^2 + 2s + 10}$

## Solución

La transformada inversa es

$$
f(t) = \mathcal{L}^{-1}\left\{\frac{2s-3}{s^2+2s+10}\right\} = e^{-t}\left(2\cos 3t - \frac{5}{3}\sin 3t\right), \qquad t \ge 0.
$$

## Resolución

El denominador $s^2+2s+10$ es un polinomio cuadrático irreducible. Se escribe en forma canónica al **completar el cuadrado**:

$$
s^2+2s+10 = (s+1)^2 + 9 = (s+1)^2 + 3^2.
$$

El numerador se reescribe para separar los pares de la tabla asociados a $e^{-t}\cos 3t$ y $e^{-t}\sin 3t$:

$$
2s-3 = 2(s+1) - 5.
$$

Con esto,

$$
\begin{aligned}
F(s) &= \frac{2(s+1)}{(s+1)^2+3^2} - \frac{5}{(s+1)^2+3^2} \\
     &= 2\,\frac{s+1}{(s+1)^2+3^2} - \frac{5}{3}\,\frac{3}{(s+1)^2+3^2}.
\end{aligned}
$$

Se emplean los pares de la tabla

$$
\mathcal{L}\{e^{at}\cos bt\} = \frac{s-a}{(s-a)^2+b^2}, \qquad
\mathcal{L}\{e^{at}\sin bt\} = \frac{b}{(s-a)^2+b^2},
$$

con $a=-1$ y $b=3$. Por **linealidad** de la transformada inversa,

$$
f(t) = 2e^{-t}\cos 3t - \frac{5}{3}e^{-t}\sin 3t.
$$

## Observaciones

La transformada inversa se define para $t \ge 0$. La función $f$ es continua en ese intervalo, de modo que la inversa es única. Decae como $e^{-t}$ y oscila con frecuencia angular $3$. El factor $\dfrac{5}{3}$ ajusta el numerador $5$ al par del seno, cuyo numerador canónico es $b=3$.
