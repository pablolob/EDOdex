---
title: "Boyce 5.1 Ejercicio 15"
exercise-id: boyce-c05-s01-e015
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.1, ejercicio 15"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - resolver-series.serie-potencias
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

En cada uno de los problemas 9 a 16, determine la serie de Taylor en torno al punto $x_0$ para la función dada. Determine también el radio de convergencia de la serie.

15. $\frac{1}{1 - x}, \quad x_0 = 0$

## Solución

La serie de Taylor en torno a $x_0 = 0$ es la serie geométrica

$$
\frac{1}{1-x}=\sum_{n=0}^{\infty}x^n,\qquad |x|<1,
$$

cuyo radio de convergencia es $R=1$.

## Resolución

La serie de Taylor de $f(x)=\dfrac{1}{1-x}$ en torno a $x_0=0$ es su serie de Maclaurin $\sum_{n=0}^{\infty} a_n x^n$, con coeficientes $a_n=\dfrac{f^{(n)}(0)}{n!}$.

Las derivadas sucesivas de $f$ son

$$
f^{(n)}(x)=n!\,(1-x)^{-(n+1)},\qquad n\ge 0,
$$

de modo que $f^{(n)}(0)=n!$ y, por tanto, $a_n=1$ para todo $n$. La serie resulta

$$
\sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + \cdots,
$$

que es la **serie geométrica** de razón $x$.

El radio de convergencia se obtiene con el **criterio del cociente**. Como $a_n=1$ para todo $n$,

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|=\lim_{n\to\infty}1=1,
$$

luego $R=1$. De forma equivalente, la serie geométrica converge exactamente cuando $|x|<1$.

## Observaciones

El radio de convergencia es igual a la distancia de $x_0=0$ al punto singular más próximo de la función, $x=1$. En $|x|<1$ la serie representa a $f$; en $|x|>1$ diverge.
