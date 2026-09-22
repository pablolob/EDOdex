---
title: "Boyce 6.1 Ejercicio 1"
exercise-id: boyce-c06-s01-e001
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.1, ejercicio 1"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c06s01i01-p324.png
---

## Enunciado

En cada uno de los problemas 1 a 10 encuentre la transformada inversa de Laplace de la función dada.

1. $\frac{3}{s^2 + 4}$

## Solución

La transformada inversa de Laplace de la función dada es

$$
\mathcal{L}^{-1}\!\left\{\frac{3}{s^{2}+4}\right\} = \frac{3}{2}\sin(2t), \qquad t \ge 0.
$$

## Resolución

La función se reescribe para identificarla con un par de la tabla básica. Como $s^2+4 = s^2+2^2$, resulta

$$
\frac{3}{s^2+4} = \frac{3}{2}\cdot\frac{2}{s^2+2^2}.
$$

El par conocido es

$$
\mathcal{L}\{\sin(bt)\} = \frac{b}{s^2+b^2}, \qquad s>0.
$$

Con $b=2$, la transformada inversa del segundo factor es $\sin(2t)$. Por **linealidad** de la transformada inversa,

$$
\mathcal{L}^{-1}\!\left\{\frac{3}{s^2+4}\right\}
= \frac{3}{2}\,\mathcal{L}^{-1}\!\left\{\frac{2}{s^2+2^2}\right\}
= \frac{3}{2}\sin(2t).
$$

## Observaciones

El factor $3$ solo escala la amplitud; la frecuencia angular la fija el denominador, $b=2$. La transformada inversa se define para $t \ge 0$.
