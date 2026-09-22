---
title: "Boyce 11.5 Ejercicio 1"
exercise-id: boyce-c11-s05-e001
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 11.5, ejercicio 1"
statement-status: accepted
solution-status: open
source-images:
  - c11s05i01-p692.png
---

## Enunciado

Considere la ecuación de Laplace $u_{xx} + u_{yy} = 0$ en el paralelogramo cuyos vértices son $(0, 0)$, $(2, 0)$, $(3, 2)$ y $(1, 2)$. Suponga que, sobre el lado $y = 2$, la condición en la frontera es $u(x, 2) = f(x)$ para $1 \le x \le 3$ y que sobre los otros tres lados $u = 0$ (ver la figura 11.6.1).

a) Demuestre que no hay soluciones no triviales de la ecuación diferencial parcial de la forma $u(x, y) = X(x)Y(y)$ que también satisfagan las condiciones homogéneas en la frontera.

b) Sean $\xi = x - \frac{1}{2}y$, $\eta = y$. Demuestre que el paralelogramo dado en el plano $xy$ se transforma en el cuadrado $0 \le \xi \le 2$, $0 \le \eta \le 2$ en el plano $\xi\eta$. Demuestre que la ecuación diferencial se transforma en

$$\frac{5}{4}u_{\xi\xi} - u_{\xi\eta} + u_{\eta\eta} = 0.$$

¿Cómo se transforman las condiciones en la frontera?

c) Demuestre que en el plano $\xi\eta$ la ecuación diferencial no tiene soluciones de la forma

$$u(\xi, \eta) = U(\xi)V(\eta).$$

Por tanto, en el plano $xy$ la forma de la frontera impide realizar una solución por el método de separación de variables, mientras que en el plano $\xi\eta$ la región es aceptable, pero las variables en la ecuación diferencial ya no pueden separarse.
