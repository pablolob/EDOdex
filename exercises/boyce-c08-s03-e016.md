---
title: "Boyce 8.3 Ejercicio 16"
exercise-id: boyce-c08-s03-e016
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 8.3, ejercicio 16"
statement-status: accepted
solution-status: open
source-images:
  - c08s03i02-p454.png
---

## Enunciado

a) Siga el procedimiento del método de extrapolación de Richardson (problemas 9 y 11 de la sección 8.2) para demostrar que para el problema con valor inicial $y' = f(t, y)$, $y(t_0) = y_0$, una estimación mejorada de $\phi(\bar{t})$, $\bar{t} = t_0 + nh$, en términos de $y_n(h)$ y $y_2(h/2)$ por el método de Runge-Kutta, se expresa por
$$y_{2n}(h/2) + \frac{y_{2n}(h/2) - y_n(h)}{2^4 - 1}.$$
b) Considere el problema con valor inicial $y' = 1 - t + 4y$, $y(0) = 1$. Use los valores aproximados de $\phi(1)$ obtenidos por el método de Runge-Kutta con $h = 0.2$ y $h = 0.1$ (ver las tablas 8.4.1 u 8.4.2) y la fórmula del inciso a) para obtener una nueva estimación de $\phi(1)$. Compare el resultado con la solución exacta.
