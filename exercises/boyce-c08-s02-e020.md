---
title: "Boyce 8.2 Ejercicio 20"
exercise-id: boyce-c08-s02-e020
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 8.2, ejercicio 20"
statement-status: accepted
solution-status: open
source-images:
  - c08s02i02-p449.png
---

## Enunciado

La fórmula modificada de Euler para el problema con valor inicial $y' = f(t, y)$, $y(t_0) = y_0$ se expresa por
$$y_{n + 1} = y_n + hf\left(t_n + \frac{1}{2}h, y_n + \frac{1}{2}hf(t_n, y_n)\right).$$
Si se sigue el procedimiento descrito en el problema 15, demuestre que el error local por truncamiento en la fórmula modificada de Euler es proporcional a $h^3$.
