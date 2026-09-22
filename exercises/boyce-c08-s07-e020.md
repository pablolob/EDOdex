---
title: "Boyce 8.7 Ejercicio 20"
exercise-id: boyce-c08-s07-e020
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 8.7, ejercicio 20"
statement-status: accepted
solution-status: open
source-images:
  - c08s07i04-p486.png
---

## Enunciado

Considere el sistema lineal

$$dx/dt = ax + by, \quad dy/dt = cx + dy,$$

en donde $a$, $b$, $c$ y $d$ son constantes reales. Sean $p = a + d$, $q = ad - bc$ y $\Delta = p^2 - 4q$. Demuestre que el punto crítico $(0,0)$ es un
a) nodo si $q > 0$ y $\Delta \ge 0$;
b) punto silla si $q < 0$;
c) punto espiral si $p \neq 0$ y $\Delta < 0$;
d) centro si $p = 0$ y $q > 0$.
Sugerencia: Es posible llegar a estas conclusiones al estudiar los eigenvalores $r_1$ y $r_2$. También puede ser útil demostrar, y luego aplicar, las relaciones $r_1 r_2 = q$ y $r_1 + r_2 = p$.
