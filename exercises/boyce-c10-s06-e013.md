---
title: "Boyce 10.6 Ejercicio 13"
exercise-id: boyce-c10-s06-e013
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 10.6, ejercicio 13"
statement-status: accepted
solution-status: open
source-images:
  - c10s06i03-p629.png
---

## Enunciado

Encuentre la solución $u(x, y)$ de la ecuación de Laplace en el rectángulo $0 < x < a$, $0 < y < b$, que también satisfaga las condiciones en la frontera
$$\begin{aligned} u_x(0, y) &= 0, & u(a, y) &= f(y), & 0 < y < b, \\ u(x, 0) &= 0, & u_y(x, b) &= 0, & 0 \le x \le a. \end{aligned}$$
Sugerencia: a la larga será necesario desarrollar $f(y)$ en una serie en la que se apliquen las funciones $\sin(\pi y / 2b)$, $\sin(3\pi y / 2b)$, $\sin(5\pi y / 2b)$, $\dots$ (ver el problema 39 de la sección 10.4).
