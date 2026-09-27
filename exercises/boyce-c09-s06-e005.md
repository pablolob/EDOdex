---
title: "Boyce 9.6 Ejercicio 5"
exercise-id: boyce-c09-s06-e005
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 9.6, ejercicio 5"
statement-status: pending-review
solution-status: open
source-images:
  - c09s06i02-p539.png
---

## Enunciado

Considere el sistema de ecuaciones

$$\frac{dx}{dt} = y - xf(x, y), \quad \frac{dy}{dt} = -x - yf(x, y),$$

en donde $f$ es continua y tiene primeras derivadas parciales continuas. Demuestre que si $f(x, y) > 0$ en alguna vecindad del origen, entonces éste es un punto crítico asintóticamente estable y, si $f(x, y) < 0$, en alguna vecindad del origen, entonces éste es un punto crítico inestable.

Sugerencia: construya una función de Liapunov de la forma $c(x^2 + y^2)$.
