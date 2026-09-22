---
title: "Boyce 11.3 Ejercicio 28"
exercise-id: boyce-c11-s03-e028
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 11.3, ejercicio 28"
statement-status: accepted
solution-status: open
source-images:
  - c11s03i05-p679.png
---

## Enunciado

a) Demuestre por el método de variación de parámetros que la solución general de la ecuación diferencial
$$-y'' = f(x)$$
puede escribirse en la forma
$$y = \phi(x) = c_1 + c_2 x - \int_0^x (x - s)f(s)\,ds,$$
en donde $c_1$ y $c_2$ son constantes arbitrarias.
b) Supóngase que también se requiere $y = \phi(x)$ para satisfacer las condiciones en la frontera $y(0) = 0$, $y(1) = 0$. Demuestre que, en este caso,
$$c_1 = 0, \quad c_2 = \int_0^1 (1 - s)f(s)\,ds.$$
c) Demuestre que, en las condiciones de los incisos a) y b), $\phi(x)$ se puede escribir en la forma
$$\phi(x) = \int_0^x s(1 - x)f(s)\,ds + \int_x^1 x(1 - s)f(s)\,ds.$$
d) Si se define
$$G(x, s) = \begin{cases} s(1 - x), & 0 \le s \le x, \\ x(1 - s), & x \le s \le 1, \end{cases}$$
demuestre que la solución toma la forma
$$\phi(x) = \int_0^1 G(x, s)f(s)\,ds.$$
