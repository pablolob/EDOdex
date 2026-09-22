---
title: "Boyce 10.6 Ejercicio 10"
exercise-id: boyce-c10-s06-e010
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 10.6, ejercicio 10"
statement-status: accepted
solution-status: open
source-images:
  - c10s06i02-p628.png
---

## Enunciado

Considere el problema de encontrar una solución $u(x, y)$ de la ecuación de Laplace en el rectángulo $0 < x < a$, $0 < y < b$, que también satisfaga las condiciones en la frontera
$$u_x(0, y) = 0, \quad u_x(a, y) = f(y), \quad 0 < y < b,$$
$$u_y(x, 0) = 0, \quad u_y(x, b) = 0, \quad 0 \le x \le a.$$
Este es un ejemplo del problema de Neumann.
a) Demuestre que la ecuación de Laplace y las condiciones homogéneas en la frontera determinan el conjunto fundamental de soluciones
$$u_0(x, y) = c_0,$$
$$u_n(x, y) = c_n \cosh(n\pi x/b)\cos(n\pi y/b), \quad n = 1, 2, 3, \dots.$$
b) Superponga las soluciones fundamentales del inciso a), determinar formalmente una función $u$ que también satisfaga la condición no homogénea en la frontera $u_x(a, y) = f(y)$. Observe que, cuando se calcula $u_x(a, y)$, se elimina el término constante en $u(x, y)$ y no existe condición a partir de la cuál determinar $c_0$. Además, debe ser posible expresar $f$ por medio de una serie de casos de Fourier de periodo $2b$, que no tenga término constante. Esto significa que
$$\int_{0}^{b} f(y) \, dy = 0$$
es una condición necesaria para que el problema dado sea resoluble. Por último, observe que $c_0$ permanece arbitraria y, de donde, la solución sólo queda determinada hasta esta constante aditiva. Esta es una propiedad de todos los problemas de Neumann.
