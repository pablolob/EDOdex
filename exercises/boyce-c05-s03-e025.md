---
title: "Boyce 5.3 Ejercicio 25"
exercise-id: boyce-c05-s03-e025
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.3, ejercicio 25"
statement-status: pending-review
solution-status: open
source-images:
  - c05s03i03-p265.png
---

## Enunciado

Los polinomios de Legendre tienen una función importante en física matemática. Por ejemplo, al resolver la ecuación de Laplace (ecuación del potencial) en coordenadas esféricas se encuentra la ecuación

$$\frac{d^2 F(\varphi)}{d\varphi^2} + \cot \varphi \frac{d F(\varphi)}{d\varphi} + n(n + 1)F(\varphi) = 0, \quad 0 < \varphi < \pi,$$

en donde $n$ es un entero positivo. Demuestre que el cambio de variable $x = \cos \varphi$ conduce a la ecuación de Legendre con $\alpha = n$ para $y = f(x) = F(\arccos x)$.
