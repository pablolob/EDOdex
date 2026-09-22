---
title: "Boyce 11.6 Ejercicio 7"
exercise-id: boyce-c11-s06-e007
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 11.6, ejercicio 7"
statement-status: accepted
solution-status: open
source-images:
  - c11s06i01-p701.png
---

## Enunciado

Suponga que las funciones $\phi_1, \dots, \phi_n$ satisfacen la relación de ortonormalidad (1) y que una función $f$ dada se va a aproximar por $S_n(x) = c_1\phi_1(x) + \dots + c_n\phi_n(x)$, en donde los coeficientes $c_i$ no son necesariamente los de la ecuación (9). Demuestre que el error cuadrático medio $R_n$ dado por la ecuación (6) puede escribirse en la forma
$$R_n = \int_0^1 r(x)f^2(x)\, dx - \sum_{i=1}^n a_i^2 + \sum_{i=1}^n (c_i - a_i)^2,$$
en donde los $a_i$ son los coeficientes de Fourier dados por (9). Demuestre que $R_n$ se minimiza si $c_i = a_i$ para cada oficiales $i$.
