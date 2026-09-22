---
title: "Boyce 3.6 Ejercicio 32"
exercise-id: boyce-c03-s06-e032
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.6, ejercicio 32"
statement-status: accepted
solution-status: open
source-images:
  - c03s06i02-p188.png
  - c03s06i03-p189.png
---

## Enunciado

En este problema se indica un procedimiento alternativo para resolver la ecuación diferencial

$$y'' + by' + cy = (D^2 + bD + c)y = g(x), \quad \text{(i)}$$

en donde $b$ y $c$ son constantes y $D$ denota derivación con respecto a $x$. Sean $r_1$ y $r_2$ los ceros del polinomio característico de la ecuación homogénea correspondiente. Estas raíces pueden ser números reales y diferentes, reales e iguales o complejos conjugados.

a) Compruebe que (i) puede escribirse en la forma factorizada

$$(D - r_1)(D - r_2)y = g(x),$$

en donde $r_1 + r_2 = -b$ y $r_1 r_2 = c$.

b) Sea $u = (D - r_2)y$. Demuestre que la solución de (i) puede encontrarse al resolver las dos ecuaciones de primer orden siguientes:

$$(D - r_1)u = g(x), \quad (D - r_2)y = u(x).$$
