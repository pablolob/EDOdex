---
title: "Boyce 9.5 Ejercicio 6"
exercise-id: boyce-c09-s05-e006
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 9.5, ejercicio 6"
statement-status: accepted
solution-status: open
source-images:
  - c09s05i02-p539.png
---

## Enunciado

Una generalización de la ecuación del péndulo no amortiguado
$$\frac{d^2u}{dt^2} + g(u) = 0, \quad \text{(i)}$$
en donde $g(0) = 0$, $g(u) > 0$ para $0 < u < k$, y $g(u) < 0$ para $-k < u < 0$; es decir, $ug(u) > 0$ para $u \neq 0$, $-k < u < k$. Observe que $g(u) = \sin u$ tiene esta propiedad sobre $(-\pi/2, \pi/2)$.
a) Haga $x = u$, $y = \dfrac{du}{dt}$, escriba la ecuación (i) como un sistema de dos ecuaciones y demuestre que $x = 0$, $y = 0$ es un punto crítico.
b) Demuestre que
$$V(x, y) = \frac{1}{2}y^2 + \int_0^x g(s)\,ds, \quad -k < x < k, \quad \text{(ii)}$$
es definida positiva y aplique estos resultados para demostrar que el punto crítico $(0, 0)$ es estable. Observe que la función de Liapunov $V$ dada por la ecuación (ii) corresponde a la función de energía $V(x, y) = \frac{1}{2}y^2 + (1 - \cos x)$ para el caso $g(u) = \sin u$.
