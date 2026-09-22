---
title: "Boyce 7.3 Ejercicio 8"
exercise-id: boyce-c07-s03-e008
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 7.3, ejercicio 8"
statement-status: accepted
solution-status: open
source-images:
  - c07s03i02-p388.png
---

## Enunciado

Sean $\mathbf{x}^{(1)}, \dots, \mathbf{x}^{(m)}$ soluciones de $\mathbf{x}' = \mathbf{P}(t)\mathbf{x}$ sobre el intervalo $\alpha < t < \beta$. Suponga que $\mathbf{P}$ es continua y sea $t_0$ un punto arbitrario en el intervalo dado. Demuestre que $\mathbf{x}^{(1)}, \dots, \mathbf{x}^{(m)}$ son linealmente dependientes para $\alpha < t < \beta$ si y sólo si $\mathbf{x}^{(1)}(t_0), \dots, \mathbf{x}^{(m)}(t_0)$ son linealmente dependientes. En otras palabras, $\mathbf{x}^{(1)}, \dots, \mathbf{x}^{(m)}$ son linealmente dependientes sobre el intervalo $(\alpha, \beta)$ si son linealmente dependientes en cualquier punto de él.

Sugerencia: Existen constantes $c_1, \dots, c_m$ tales que $c_1\mathbf{x}^{(1)}(t_0) + \dots + c_m\mathbf{x}^{(m)}(t_0) = 0$. Sea $\mathbf{z}(t) = c_1\mathbf{x}^{(1)}(t) + \dots + c_m\mathbf{x}^{(m)}(t)$, y aplique el teorema de unicidad para demostrar que $\mathbf{z}(t) = 0$ para cada $t$ en $\alpha < t < \beta$.
