---
title: "Boyce 6.1 Ejercicio 36"
exercise-id: boyce-c06-s01-e036
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.1, ejercicio 36"
statement-status: accepted
solution-status: open
blocked: enunciado
blocked-detail: "El enunciado remite a \"los resultados del problema 28\", una ecuación/resultado que no está escrita explícitamente en el texto ni disponible como material verificado del repositorio; sin ella no puede determinarse la ED que satisface $Y(s)$."
source-images:
  - c06s01i03-p326.png
---

## Enunciado

En cada uno de los problemas con valor inicial siguientes, use los resultados del problema 28 para encontrar la ecuación diferencial que satisface $Y(s) = \mathcal{L}\{\phi(t)\}$, en donde $y = \phi(t)$ es la solución del problema con valor inicial dado.

a) $y'' - ty = 0; \quad y(0) = 1, \ y'(0) = 0$ (ecuación de Airy)

b) $(1 - t^2)y'' - 2ty' + \alpha(\alpha + 1)y = 0; \quad y(0) = 0, \ y'(0) = 1$ (ecuación de Legendre)

Observe que la ecuación diferencial para $Y(s)$ es de primer orden en el inciso a), pero de segundo orden en el inciso b). Esto se debe al hecho de que $t$ aparece cuando mucho a la primera potencia en la ecuación del inciso a), mientras que en la del inciso b) aparece a la segunda potencia. Esto ilustra que a menudo la transformada de Laplace no es útil al resolver ecuaciones diferenciales con coeficientes variables, a menos que todos los coeficientes sean cuando mucho funciones lineales de la variable independiente.
