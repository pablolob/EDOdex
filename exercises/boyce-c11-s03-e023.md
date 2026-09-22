---
title: "Boyce 11.3 Ejercicio 23"
exercise-id: boyce-c11-s03-e023
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 11.3, ejercicio 23"
statement-status: accepted
solution-status: open
source-images:
  - c11s03i03-p677.png
---

## Enunciado

Considere el problema con valores en la frontera
$$r(x)u_t = [p(x)u_x]_x - q(x)u + F(x),$$
$$u(0, t) = T_1, \quad u(1, t) = T_2, \quad u(x, 0) = f(x).$$
a) Sea $v(x)$ una solución del problema
$$[p(x)v']' - q(x)v = -F(x), \quad v(0) = T_1, \quad v(1) = T_2.$$
Si $w(x, t) = u(x, t) - v(x)$, halle el problema con valores en la frontera satisfecho por $w$. Observe que este problema se puede resolver por el método de esta sección.
b) Generalice el procedimiento del inciso a) para el caso en el que $u$ satisface las condiciones en la frontera
$$u_x(0, t) - h_1u(0, t) = T_1, \quad u_x(1, t) + h_2u(1, t) = T_2.$$
