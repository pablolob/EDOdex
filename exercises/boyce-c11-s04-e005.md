---
title: "Boyce 11.4 Ejercicio 5"
exercise-id: boyce-c11-s04-e005
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 11.4, ejercicio 5"
statement-status: accepted
solution-status: open
source-images:
  - c11s04i02-p688.png
  - c11s04i03-p689.png
---

## Enunciado

La ecuación
$$(1 - x^2)y'' - xy' + \lambda y = 0 \tag{i}$$
es una ecuación de Chebyshev; ver el problema 10 de la sección 5.3.
a) Demuestre que la ecuación (i) puede escribirse en la forma
$$-[(1 - x^2)^{1/2}y']' = \lambda(1 - x^2)^{-1/2}y, \quad -1 < x < 1. \tag{ii}$$
b) Considere las condiciones en la frontera
$$y, y' \text{ acotadas cuando } x \to -1, \quad y, y' \text{ acotadas cuando } x \to 1 \tag{iii}$$
Demuestre que el problema con valores en la frontera (ii), (iii) es autoadjunto.
c) Es posible demostrar que el problema con valores en la frontera (ii), (iii) tiene los eigenvalores $\lambda_0 = 0, \lambda_1 = 1, \lambda_2 = 4, \dots, \lambda_n = n^2, \dots$. Las eigenfunciones correspondientes son los polinomios de Chebyshev $T_n(x)$: $T_0(x) = 1, T_1(x) = x, T_2(x) = 1 - 2x^2, \dots$. Demuestre que
$$\int_{-1}^1 \frac{T_m(x)T_n(x)}{(1 - x^2)^{1/2}} \,dx = 0, \quad m \neq n. \tag{iv}$$
Observe que esta es una integral impropia convergente.
