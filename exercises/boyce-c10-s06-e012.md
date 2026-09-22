---
title: "Boyce 10.6 Ejercicio 12"
exercise-id: boyce-c10-s06-e012
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 10.6, ejercicio 12"
statement-status: accepted
solution-status: open
source-images:
  - c10s06i03-p629.png
---

## Enunciado

Encuentre la solución $u(x, y)$ de la ecuación de Laplace en el rectángulo $0 < x < a$, $0 < y < b$, que también satisfaga las condiciones en la frontera
$$\begin{aligned} u_x(0, y) &= 0, & u(a, y) &= f(y), & 0 < y < b, \\ u(x, 0) &= 0, & u(x, b) &= 0, & 0 \le x \le a. \end{aligned}$$
Observe que éste no es un problema de Dirichlet ni de Neumann, si no un problema mixto en el que se prescribe $u$ sobre parte de la frontera y su derivada normal sobre el resto.
