---
title: "Boyce 7.8 Ejercicio 17"
exercise-id: boyce-c07-s08-e017
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 7.8, ejercicio 17"
statement-status: accepted
solution-status: open
source-images:
  - c07s08i02-p427.png
---

## Enunciado

Considere el problema con valor inicial
$$\mathbf{x}' = \mathbf{A}\mathbf{x} + \mathbf{g}(t), \quad \mathbf{x}(0) = \mathbf{x}^0$$
a) Con referencia al problema 12 c) de la sección 7.8, demuestre que
$$\mathbf{x} = \mathbf{\Phi}(t)\mathbf{x}^0 + \int_0^t \mathbf{\Phi}(t - s)\mathbf{g}(s)\,ds.$$
b) También demuestre que
$$\mathbf{x} = \exp(\mathbf{A}t)\mathbf{x}^0 + \int_0^t \exp[\mathbf{A}(t - s)]\mathbf{g}(s)\,ds.$$
Compare estos resultados con los del problema 27 de la sección 3.7.
