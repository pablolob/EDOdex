---
title: "Boyce 5.6 Ejercicio 16"
exercise-id: boyce-c05-s06-e016
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.6, ejercicio 16"
statement-status: accepted
solution-status: open
blocked: enunciado
blocked-detail: "El enunciado remite explícitamente al «problema 14» («Como en el problema 14, observe que la serie...»), cuya ecuación, resultado o contexto no está escrito en el texto ni disponible como material verificado del repositorio."
source-images:
  - c05s06i02-p285.png
  - c05s06i03-p286.png
---

## Enunciado

La ecuación de Bessel de orden uno es

$$x^2 y'' + xy' + (x^2 - 1)y = 0.$$

a) Demuestre que $x = 0$ es un punto singular regular; que las raíces de la ecuación indicicial son $r_1 = 1$ y $r_2 = -1$, y que una solución para $x > 0$ es

$$J_1(x) = \frac{x}{2} \sum_{n=0}^\infty \frac{(-1)^n x^{2n}}{(n + 1)! n! 2^{2n}}.$$

Como en el problema 14, observe que la serie en realidad converge para toda $x$ y que $J_1(x)$ es acotada cuando $x \to 0$. La función $J_1$ se conoce como función de Bessel de primera clase de orden uno.

b) Demuestre que es imposible determinar una segunda solución de la forma

$$x^{-1} \sum_{n=0}^\infty b_n x^n, \quad x > 0.$$
