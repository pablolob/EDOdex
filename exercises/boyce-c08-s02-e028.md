---
title: "Boyce 8.2 Ejercicio 28"
exercise-id: boyce-c08-s02-e028
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 8.2, ejercicio 28"
statement-status: accepted
solution-status: open
source-images:
  - c08s02i03-p450.png
---

## Enunciado

Si se sigue el procedimiento del método de extrapolación de Richardson (problemas 9 y 11 de la sección 8.2), demuestre que una estimación mejorada de $\phi(\bar{t})$, $\bar{t} = t_0 + nh$, en términos de $y_n(h)$ y $y_{2n}(h/2)$, calculada al aplicar el método de Taylor con tres términos o el método mejorado de Euler, expresa por $y_{2n}(h/2) + [y_{2n}(h/2) - y_n(h)]/(2^2 - 1)$. Considere el problema con valor inicial $y' = 1 - t + 4y$, $y(0) = 1$. Con la aplicación de los resultados aproximados para $\phi(1)$ que se obtuvieron por el método mejorado de Euler para $h = 0.1$ y $h = 0.05$ (ver la tabla 8.3.1), determinar una nueva estimación de $\phi(1)$. Compare este resultado con el valor de la solución exacta.
