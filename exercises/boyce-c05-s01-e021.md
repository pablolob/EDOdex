---
title: "Boyce 5.1 Ejercicio 21"
exercise-id: boyce-c05-s01-e021
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.1, ejercicio 21"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - resolver-series.serie-potencias
prerequisitos:
  - calculo-avanzado.series-potencias
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c05s01i01-p247.png
---

## Enunciado

En cada uno de los problemas 19 a 23, compruebe la ecuación dada.

21. $\sum_{n=0}^{\infty} a_n x^{n+2} = \sum_{n=2}^{\infty} a_{n-2} x^n$

## Solución

La ecuación es una **reindexación** de una misma serie de potencias. Con el cambio de índice $m=n+2$, el miembro izquierdo se escribe como el miembro derecho:

$$
\sum_{n=0}^{\infty} a_n x^{n+2} = \sum_{n=2}^{\infty} a_{n-2} x^n.
$$

## Resolución

El miembro izquierdo suma sobre $n \ge 0$. Se introduce el índice $m=n+2$, equivalente a $n=m-2$. El límite inferior $n=0$ corresponde a $m=2$, y $n\to\infty$ corresponde a $m\to\infty$. Al sustituir en el término general,

$$
a_n x^{n+2} = a_{m-2} x^{m}.
$$

Por tanto,

$$
\sum_{n=0}^{\infty} a_n x^{n+2}
= \sum_{m=2}^{\infty} a_{m-2} x^{m}.
$$

El índice de una serie es mudo: renombrar $m$ como $n$ no altera la suma. Se obtiene

$$
\sum_{n=2}^{\infty} a_{n-2} x^n,
$$

que es el miembro derecho. La ecuación es, así, una identidad válida para todo $x$ para el que convergen ambas series.

## Observaciones

La reindexación empareja los términos uno a uno, de modo que ambas series tienen el mismo radio de convergencia y representan la misma función donde convergen.

La identidad equivale a extraer el factor $x^2$ de la serie: $\sum_{n=0}^{\infty} a_n x^{n+2} = x^2 \sum_{n=0}^{\infty} a_n x^n$. Esta operación se emplea al escribir soluciones en serie de potencias.
