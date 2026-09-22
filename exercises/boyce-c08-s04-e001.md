---
title: "Boyce 8.4 Ejercicio 1"
exercise-id: boyce-c08-s04-e001
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 8.4, ejercicio 1"
statement-status: accepted
solution-status: open
source-images:
  - c08s04i01-p459.png
---

## Enunciado

Para adquirir cierta idea sobre los peligros posibles de los errores pequeños en las condiciones iniciales, como los debidos al redondeo, considere el problema con valor inicial

$$y' = t + y - 3, \quad y(0) = 2.$$

a) Demuestre que la solución es $y = \phi_1(t) = 2 - t$.
b) Suponga que en la condición inicial se comete un error y que en vez de 2 se usa 2.001. Determine la solución $y = \phi_2(t)$ en este caso y compare la diferencia $\phi_2(t) - \phi_1(t)$ en $t = 1$ y cuando $t \to \infty$.
