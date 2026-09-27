---
title: "Boyce 11.4 Ejercicio 29"
exercise-id: boyce-c11-s04-e029
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 11.4, ejercicio 29"
statement-status: pending-review
solution-status: open
source-images:
  - c11s04i05-p679.png
  - c11s04i06-p680.png
---

## Enunciado

Mediante un procedimiento semejante al del problema anterior demuestre que la solución del problema con valores en la frontera
$$-(y'' + y) = f(x), \quad y(0) = 0, \quad y(1) = 0,$$
es
$$y = \phi(x) = \int_{0}^{1} G(x, s) f(s) \,ds,$$
en donde
$$G(x, s) = \begin{cases} \frac{\sin s \sin(1 - x)}{\sin 1}, & 0 \le s \le x, \\ \frac{\sin x \sin(1 - s)}{\sin 1}, & x \le s \le 1. \end{cases}$$
