---
title: "Boyce 5.1 Ejercicio 22"
exercise-id: boyce-c05-s01-e022
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.1, ejercicio 22"
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

22. $\sum_{n=k}^{\infty} a_{n+m} x^{n+p} = \sum_{n=0}^{\infty} a_{n+m+k} x^{n+p+k}, \quad x > 0,$

en donde $k$ y $m$ son enteros dados y $p$ es una constante.

## Solución

La ecuación es una **reindexación** de una misma serie de potencias. Con el cambio de índice $j = n - k$ se obtiene

$$
\sum_{n=k}^{\infty} a_{n+m} x^{n+p}
= \sum_{j=0}^{\infty} a_{j+m+k} x^{j+p+k}
= \sum_{n=0}^{\infty} a_{n+m+k} x^{n+p+k}.
$$

## Resolución

El miembro izquierdo suma sobre $n \ge k$. Se introduce el índice $j = n - k$, equivalente a $n = j + k$. El límite inferior $n = k$ corresponde a $j = 0$, y $n \to \infty$ corresponde a $j \to \infty$. Al sustituir en el término general,

$$
a_{n+m} x^{n+p} = a_{(j+k)+m} x^{(j+k)+p} = a_{j+m+k} x^{j+p+k}.
$$

Por tanto,

$$
\sum_{n=k}^{\infty} a_{n+m} x^{n+p}
= \sum_{j=0}^{\infty} a_{j+m+k} x^{j+p+k}.
$$

El índice de una serie es mudo: renombrar $j$ como $n$ no altera la suma. Se obtiene

$$
\sum_{n=0}^{\infty} a_{n+m+k} x^{n+p+k},
$$

que es el miembro derecho. La ecuación es, así, una identidad válida para todo $x > 0$ para el que converge la serie.

## Observaciones

La reindexación empareja los términos uno a uno, de modo que ambas series tienen el mismo radio de convergencia y representan la misma función donde convergen.

La condición $x > 0$ garantiza que $x^{p}$ esté definida para la constante real $p$, ya que los exponentes $n+p$ pueden no ser enteros.
