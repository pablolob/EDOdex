---
title: "Boyce 6.2 Ejercicio 28"
exercise-id: boyce-c06-s02-e028
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.2, ejercicio 28"
statement-status: pending-review
solution-status: open
source-images:
  - c06s02i02-p325.png
  - c06s02i03-p326.png
---

## Enunciado

28. Sea
$$F(s) = \int_{0}^{\infty} e^{-st} f(t) \, dt.$$
Es posible demostrar que mientras $f$ satisfaga las condiciones del teorema 6.1.2, es válido derivar bajo el signo integral con respecto al parámetro $s$, cuando $s > a$.
a) Demuestre que $F'(s) = \mathcal{L}\{-t f(t)\}$.
b) Demuestre que $F^{(n)}(s) = \mathcal{L}\{(-t)^n f(t)\}$; por tanto, la derivación de la transformada de Laplace corresponde a multiplicar por $-t$ la función original.
