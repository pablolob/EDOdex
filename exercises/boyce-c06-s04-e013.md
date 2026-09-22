---
title: "Boyce 6.4 Ejercicio 13"
exercise-id: boyce-c06-s04-e013
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.4, ejercicio 13"
statement-status: accepted
solution-status: open
blocked: enunciado
blocked-detail: "El inciso b) remite a «la ecuación (21) del texto», una referencia externa que no está escrita explícitamente en el enunciado ni disponible como material verificado del repositorio."
source-images:
  - c06s04i01-p344.png
---

## Enunciado

a) Demuestre por el método de variación de parámetros que la solución del problema con valor inicial

$$y'' + 2y' + 2y = f(t); \quad y(0) = 0, \ y'(0) = 0$$

es

$$y = \int_{0}^{t} e^{-(t - \tau)} f(\tau) \sin(t - \tau) \, d\tau.$$

b) Demuestre que si $f(t) = \delta(t - \pi)$, entonces la solución del inciso a) se reduce a

$$y = u_{\pi}(t) e^{-(t - \pi)} \sin(t - \pi),$$

lo cual concuerda con la ecuación (21) del texto.
