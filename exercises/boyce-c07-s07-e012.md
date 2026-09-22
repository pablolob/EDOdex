---
title: "Boyce 7.7 Ejercicio 12"
exercise-id: boyce-c07-s07-e012
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 7.7, ejercicio 12"
statement-status: accepted
solution-status: open
source-images:
  - c07s07i02-p419.png
---

## Enunciado

Sea $\Phi(t)$ la matriz fundamental que satisface $\mathbf{\Phi}' = \mathbf{A\Phi}$, $\mathbf{\Phi}(0) = \mathbf{I}$. En el texto esta matriz también se denotó por $\exp(\mathbf{A}t)$. En este problema se demuestra que $\Phi$ de hecho tiene las principales propiedades algebraicas que se asocian a la función exponencial.
a) Demuestre que $\Phi(t)\Phi(s) = \Phi(t + s)$; es decir, que $\exp(\mathbf{A}t)\exp(\mathbf{A}s) = \exp[\mathbf{A}(t + s)]$. Sugerencia: Demuestre que si $s$ es fija y $t$ es variable, entonces tanto $\Phi(t)\Phi(s)$ como $\Phi(t + s)$ satisfacen el problema con valor inicial $\mathbf{Z}' = \mathbf{AZ}$, $\mathbf{Z}(0) = \mathbf{\Phi}(s)$.
b) Demuestre que $\Phi(t)\Phi(-t) = \mathbf{I}$; es decir, que $\exp(\mathbf{A}t)\exp[\mathbf{A}(-t)] = \mathbf{I}$. Entonces demuestre que $\Phi(-t) = \Phi^{-1}(t)$.
c) Demuestre que $\Phi(t - s) = \Phi(t)\Phi^{-1}(s)$.
