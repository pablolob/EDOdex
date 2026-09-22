---
title: "Boyce 3.7 Ejercicio 21"
exercise-id: boyce-c03-s07-e021
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.7, ejercicio 21"
statement-status: accepted
solution-status: open
source-images:
  - c03s07i02-p195.png
---

## Enunciado

Demuestre que la solución del problema con valor inicial

$$L[y] = y'' + p(x)y' + q(x)y = g(x), \quad y(x_0) = y_0, \quad y'(x_0) = y_0' \tag{i}$$

puede escribirse como $y = u(x) + v(x)$, en donde $u$ y $v$ son soluciones de los dos problemas con valor inicial

$$L[u] = 0, \quad u(x_0) = y_0, \quad u'(x_0) = y_0' \tag{ii}$$

$$L[v] = g(x), \quad v(x_0) = 0, \quad v'(x_0) = 0 \tag{iii}$$

respectivamente. En otras palabras, las no homogeneidades de la ecuación diferencial y de las condiciones iniciales pueden tratarse por separado. Observe que es fácil hallar $u$ si se conoce un conjunto fundamental de soluciones de $L[y] = 0$.
