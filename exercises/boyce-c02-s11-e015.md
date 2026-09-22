---
title: "Boyce 2.11 Ejercicio 15"
exercise-id: boyce-c02-s11-e015
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.11, ejercicio 15"
statement-status: accepted
solution-status: open
blocked: enunciado
blocked-detail: "El enunciado cita el resultado del problema 11 y la ecuación (32) sin escribirlos explícitamente, y no hay material verificado que los aporte."
source-images:
  - c02s11i03-p120.png
---

## Enunciado

En este problema se aborda la cuestión de la unicidad de la solución de la ecuación integral (5)

$$\phi(x) = \int_0^x f[t, \phi(t)] \,dt.$$

a) Suponga que $\phi$ y $\psi$ son dos soluciones de la ecuación (5). Demuestre que

$$\phi(x) - \psi(x) = \int_0^x \{f[t, \phi(t)] - f[t, \psi(t)]\} \,dt.$$

b) Demuestre que

$$|\phi(x) - \psi(x)| \le \int_0^x |f[t, \phi(t)] - f[t, \psi(t)]| \,dt.$$

c) Aplique el resultado del problema 11 para demostrar que

$$|\phi(x) - \psi(x)| \le K \int_0^x |\phi(t) - \psi(t)| \,dt,$$

en donde $K$ es una cota superior de $\partial f / \partial y$ en $D$. Esto es lo mismo que la ecuación (32) y el resto de la demostración puede elaborarse como se indicó en el texto.
