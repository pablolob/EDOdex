---
title: "Boyce 7.3 Ejercicio 9"
exercise-id: boyce-c07-s03-e009
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 7.3, ejercicio 9"
statement-status: accepted
solution-status: open
source-images:
  - c07s03i02-p388.png
---

## Enunciado

Sean $\mathbf{x}^{(1)}, \dots, \mathbf{x}^{(m)}$ soluciones linealmente independientes de $\mathbf{x}' = \mathbf{P}(t)\mathbf{x}$, en donde $\mathbf{P}$ es continua sobre $\alpha < t < \beta$.

a) Demuestre que cualquier solución $\mathbf{x} = \mathbf{z}(t)$ puede escribirse en la forma
$$\mathbf{z}(t) = c_1\mathbf{x}^{(1)}(t) + \dots + c_n\mathbf{x}^{(n)}(t)$$
para constantes adecuadas $c_1, \dots, c_n$.
Sugerencia: aplique el resultado del problema 11 de la sección 7.3, así como el problema 8 anterior.

b) Demuestre que la expresión para la solución $\mathbf{z}(t)$ del inciso a) es única; es decir, si $\mathbf{z}(t) = k_1\mathbf{x}^{(1)}(t) + \dots + k_n\mathbf{x}^{(n)}(t)$, entonces $k_1 = c_1, \dots, k_n = c_n$.
Sugerencia: Demuestre que $(k_1 - c_1)\mathbf{x}^{(1)}(t) + \dots + (k_n - c_n)\mathbf{x}^{(n)}(t) = 0$ para cada $t$ en $\alpha < t < \beta$ y use la independencia lineal de $\mathbf{x}^{(1)}, \dots, \mathbf{x}^{(n)}$.
