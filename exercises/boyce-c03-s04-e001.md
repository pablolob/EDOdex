---
title: "Boyce 3.4 Ejercicio 1"
exercise-id: boyce-c03-s04-e001
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.4, ejercicio 1"
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

1. $\exp(1 + 2i)$

## Solución

$$
\exp(1+2i) = e\left(\cos 2 + i\sin 2\right) = e\cos 2 + i\,e\sin 2.
$$

Por tanto $a = e\cos 2 \approx -1.1312$ y $b = e\sin 2 \approx 2.4717$.

## Resolución

Se aplica la **fórmula de Euler**, que para todo número real $\theta$ establece

$$
e^{i\theta} = \cos\theta + i\sin\theta.
$$

La exponencial compleja de una suma se descompone en producto de exponenciales,

$$
\exp(1+2i) = e^{1}e^{2i} = e\,e^{2i}.
$$

Al sustituir $\theta = 2$ en la fórmula de Euler resulta

$$
e^{2i} = \cos 2 + i\sin 2,
$$

de modo que

$$
\exp(1+2i) = e\left(\cos 2 + i\sin 2\right) = e\cos 2 + i\,e\sin 2.
$$

En la forma $a + ib$ solicitada, la parte real y la parte imaginaria son

$$
a = e\cos 2 \approx -1.1312, \qquad b = e\sin 2 \approx 2.4717.
$$

## Observaciones

El ángulo $2$ se interpreta en radianes. Como $2$ rad corresponde a un ángulo mayor que $\pi/2$ y menor que $\pi$, el número $\exp(1+2i)$ está en el segundo cuadrante del plano complejo: su parte real es negativa y su parte imaginaria positiva. Su módulo es $e$ y su argumento es $2$.
