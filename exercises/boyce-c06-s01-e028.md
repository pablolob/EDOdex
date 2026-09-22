---
title: "Boyce 6.1 Ejercicio 28"
exercise-id: boyce-c06-s01-e028
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.1, ejercicio 28"
statement-status: accepted
solution-status: open
blocked: enunciado
blocked-detail: "El enunciado cita el teorema 6.1.2 y sus condiciones, pero no las enuncia explícitamente ni están disponibles como material verificado del repositorio; la demostración de la derivación bajo el signo integral depende de esas hipótesis ausentes."
source-images:
  - c06s01i02-p325.png
  - c06s01i03-p326.png
---

## Enunciado

Los problemas 28 a 36 están relacionados con la derivación de la transformada de Laplace.

Sea

$$F(s) = \int_0^\infty e^{-st} f(t) \, dt.$$

Es posible demostrar que mientras $f$ satisfaga las condiciones del teorema 6.1.2, es válido derivar bajo el signo integral con respecto al parámetro $s$, cuando $s > a$.

a) Demuestre que $F'(s) = \mathcal{L}\{-t f(t)\}$.

b) Demuestre que $F^{(n)}(s) = \mathcal{L}\{(-t)^n f(t)\}$; por tanto, la derivación de la transformada de Laplace corresponde a multiplicar por $-t$ la función original.
