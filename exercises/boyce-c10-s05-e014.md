---
title: "Boyce 10.5 Ejercicio 14"
exercise-id: boyce-c10-s05-e014
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 10.5, ejercicio 14"
statement-status: accepted
solution-status: open
source-images:
  - c10s05i04-p618.png
  - c10s05i05-p619.png
---

## Enunciado

Combine los resultados de los problemas 12 y 13 para demostrar que la solución del problema
$$a^2 u_{xx} = u_{tt}$$
$$u(x, 0) = f(x), \quad u_t(x, 0) = g(x), \quad -\infty < x < \infty$$
se expresa por
$$u(x, t) = \frac{1}{2}[f(x - at) + f(x + at)] + \frac{1}{2a} \int_{x - at}^{x + at} g(\xi)\,d\xi.$$
