---
title: "Boyce 3.4 Ejercicio 5"
exercise-id: boyce-c03-s04-e005
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.4, ejercicio 5"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies: []
prerequisitos:
  - algebra.numeros-complejos
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s04i01-p166.png
---

## Enunciado

En cada uno de los problemas 1 a 6, exprese el número complejo dado en la forma $a + ib$.

5. $2^{1-i}$

## Solución

$$
2^{1-i}=2\cos(\ln 2)-2i\sin(\ln 2).
$$

Por tanto, la parte real es $a=2\cos(\ln 2)$ y la parte imaginaria es $b=-2\sin(\ln 2)$. Numéricamente, $a\approx 1.5385$ y $b\approx -1.2779$.

## Resolución

Para una base real positiva y un exponente complejo $w$, la potencia se define mediante $2^{w}=e^{w\ln 2}$, donde $\ln 2$ es el logaritmo real usual. Con $w=1-i$ se obtiene

$$
2^{1-i}=e^{(1-i)\ln 2}=e^{\ln 2}\,e^{-i\ln 2}=2\,e^{-i\ln 2}.
$$

La **fórmula de Euler**, $e^{i\theta}=\cos\theta+i\sin\theta$, aplicada a $\theta=-\ln 2$ da

$$
e^{-i\ln 2}=\cos(\ln 2)-i\sin(\ln 2).
$$

Al sustituir en la expresión anterior resulta

$$
2^{1-i}=2\cos(\ln 2)-2i\sin(\ln 2).
$$

Así, $a=2\cos(\ln 2)$ y $b=-2\sin(\ln 2)$.

Como $\ln 2$ no es un múltiplo racional de $\pi$, el resultado no admite una simplificación elemental adicional y se deja expresado mediante coseno y seno. Con $\ln 2\approx 0.6931$, se tiene $\cos(\ln 2)\approx 0.7692$ y $\sin(\ln 2)\approx 0.6390$, de modo que $a\approx 1.5385$ y $b\approx -1.2779$.

## Observaciones

El número $2^{1-i}$ es univaluado. La base es un real positivo, de manera que el logaritmo que define la potencia es el logaritmo real y la potencia queda determinada sin ambigüedad. Una potencia $z^{w}$ con base compleja general es multivaluada, porque depende de la rama elegida del logaritmo complejo.

La expresión $2^{1-i}=2e^{-i\ln 2}$ ilustra el puente entre la forma exponencial y la forma binómica. Esta conversión es la que permite, en esta sección, escribir en términos de seno y coseno las soluciones complejas de una ecuación lineal homogénea con coeficientes constantes.

El valor de $\ln 2$ es irracional, por lo que $a$ y $b$ son números reales no racionales; la forma exacta es $a=2\cos(\ln 2)$ y $b=-2\sin(\ln 2)$.
