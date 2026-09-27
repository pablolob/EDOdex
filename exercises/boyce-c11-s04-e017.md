---
title: "Boyce 11.4 Ejercicio 17"
exercise-id: boyce-c11-s04-e017
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 11.4, ejercicio 17"
statement-status: pending-review
solution-status: open
source-images:
  - c11s04i02-p676.png
---

## Enunciado

Considérese el problema
$$y'' + p(x)y' + q(x)y = 0, \quad y(0) = a, \quad y(1) = b$$
sea $y = u + v$, en donde $v$ es cualquier función dos veces diferenciable que satisface las condiciones en la frontera (pero no necesariamente la ecuación diferencial). Demuestre que $u$ es una solución del problema
$$u'' + p(x)u' + q(x)u = g(x), \quad u(0) = 0, \quad u(1) = 0$$
en donde $g(x) = -[v'' + p(x)v' + q(x)v]$, y que se conoce una vez que se elige a $v$. Por tanto, las no homogeneidades pueden transferirse de las condiciones en la frontera a la ecuación diferencial. Encuentre una función $v$ para este problema.
