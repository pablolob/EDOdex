---
title: "Boyce 9.5 Ejercicio 5"
exercise-id: boyce-c09-s05-e005
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 9.5, ejercicio 5"
statement-status: accepted
solution-status: open
source-images:
  - c09s05i02-p539.png
---

## Enunciado

Considere el sistema de ecuaciones
$$\dfrac{dx}{dt} = y - xf(x, y), \quad \dfrac{dy}{dt} = -x - yf(x, y),$$
en donde $f$ es continua y tiene primeras derivadas parciales continuas. Demuestre que si $f(x, y) > 0$ en alguna vecindad del origen, entonces éste es un punto crítico asintóticamente estable y, si $f(x, y) < 0$, en alguna vecindad del origen, entonces éste es un punto crítico inestable.
*Sugerencia:* construya una función de Liapunov de la forma $c(x^2 + y^2)$.
