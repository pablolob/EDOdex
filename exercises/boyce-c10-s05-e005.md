---
title: "Boyce 10.5 Ejercicio 5"
exercise-id: boyce-c10-s05-e005
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 10.5, ejercicio 5"
statement-status: accepted
solution-status: open
source-images:
  - c10s05i02-p616.png
---

## Enunciado

Demuestre que la solución $u(x, t)$ del problema
$$a^2 u_{xx} = u_{tt},$$
$$u(0, t) = 0, \quad u(l, t) = 0, \quad u(x, 0) = f(x), \quad u_t(x, 0) = g(x),$$
puede escribirse como
$$u(x, t) = v(x, t) + w(x, t),$$
en donde $v(x, t)$ es la solución del mismo problema con $g(x) = 0$ y $w(x, t)$ es la solución del mismo problema con $f(x) = 0$. De este modo, $v(x, t)$ representa el movimiento de una cuerda a partir del reposo con el desplazamiento inicial $f(x)$ y $w(x, t)$ representa el movimiento de una cuerda que se pone en movimiento a partir de su posición de equilibrio con velocidad inicial $g(x)$. Por lo tanto, se puede obtener la solución del problema general al resolver dos problemas subsidiarios.
