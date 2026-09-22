---
title: "Boyce 5.8 Ejercicio 10"
exercise-id: boyce-c05-s08-e010
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.8, ejercicio 10"
statement-status: accepted
solution-status: open
blocked: enunciado
blocked-detail: "El enunciado cita la ecuación (7) (expresión en series de J₀), el teorema 5.8.1 y la ecuación (11), que no están escritas explícitamente en el texto ni disponibles como material verificado del repositorio. Sin la ecuación (7) no puede sustituirse J₀(x) en (i) para obtener (ii), y sin (11) no puede completarse la deducción final."
source-images:
  - c05s08i02-p305.png
  - c05s08i03-p306.png
---

## Enunciado

En esta sección se demostró que una solución de la ecuación de Bessel de orden cero,

$$L[y] = x^2y'' + xy' + x^2y = 0$$

es $J_0$, en donde $J_0$ se expresa por la ecuación (7) con $a_0 = 1$. Según el teorema 5.8.1, una segunda solución tiene la forma ($x > 0$)

$$y_2(x) = J_0(x)\ln x + \sum_{n=1}^\infty b_n x^n.$$

a) Demuestre que

$$L[y_2](x) = \sum_{n=2}^\infty n(n-1)b_n x^n + \sum_{n=1}^\infty nb_n x^n + \sum_{n=1}^\infty b_n x^{n+2} + 2x J_0'(x). \quad \text{(i)}$$

b) Si se sustituye por $J_0(x)$ la presentación en series de la ecuación (i), demuestre que

$$b_1 x + 2^2 b_2 x^2 + \sum_{n=3}^\infty (n^2 b_n + b_{n-2})x^n = -2 \sum_{n=1}^\infty \frac{(-1)^n 2n x^{2n}}{2^{2n}(n!)^2}. \quad \text{(ii)}$$

c) Observe que en el segundo miembro de (ii) sólo aparecen potencias pares de $x$. Demuestre que $b_1 = b_3 = b_5 = \cdots = 0$, $b_2 = \frac{1}{2^2(1!)^2}$ y que

$$(2n)^2 b_{2n} + b_{2n-2} = \frac{-2(-1)^n(2n)}{2^{2n}(n!)^2}, \quad n = 2, 3, 4, \dots$$

Deduzca que

$$b_4 = \frac{-1}{2^2 4^2} \left(1 + \frac{1}{2}\right) \quad \text{y} \quad b_6 = \frac{1}{2^2 4^2 6^2} \left(1 + \frac{1}{2} + \frac{1}{3}\right).$$

La solución general de la relación de recurrencia es $b_{2n} = \frac{(-1)^n H_n}{2^{2n}(n!)^2}$. Si se sustituyen los $b_n$ de la expresión para $y_2(x)$ se obtiene la solución dada en la ecuación (11).
