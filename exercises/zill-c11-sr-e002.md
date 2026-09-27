---
title: "Zill Repaso C11 Ejercicio 2"
exercise-id: zill-c11-sr-e002
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 11, ejercicio 2"
source-images:
  - c11sri01-p471.png
statement-status: accepted
solution-status: draft
topics:
  - sturm-liouville
competencies:
  - clasificar.paridad
difficulty:
  conceptual: 1
  technical: 1
---

## Enunciado

En los problemas 1-6 complete el espacio en blanco o concluya cierto o falso sin consultar el libro.

El producto de una función impar $f$ por otra función impar $g$ es ______.

## Solución

El producto de dos funciones impares es una función **par**:

$$
(fg)(-x) = (-f(x))(-g(x)) = f(x)g(x) = (fg)(x).
$$

## Resolución

Sean $f$ y $g$ funciones impares. Por definición, para todo $x$ del dominio común se cumple

$$
f(-x) = -f(x), \qquad g(-x) = -g(x).
$$

Se define el producto $h(x) = f(x)g(x)$ y se evalúa en $-x$:

$$
\begin{aligned}
h(-x) &= f(-x)g(-x) \\
      &= (-f(x))(-g(x)) \\
      &= f(x)g(x) \\
      &= h(x).
\end{aligned}
$$

Como $h(-x) = h(x)$ para todo $x$ del dominio, el producto $fg$ es par. El resultado supone que el dominio de ambas funciones es simétrico respecto al origen, de modo que $f(-x)$ y $g(-x)$ están definidos siempre que lo esté $f(x)g(x)$.

## Observaciones

La regla de los signos resume el comportamiento de los productos: el producto de dos funciones **pares** o de dos **impares** es par, y el producto de una par por una impar es impar. En las series de Fourier, esta simetría explica por qué una función par se desarrolla solo con términos en coseno y una impar solo con términos en seno.
