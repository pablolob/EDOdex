---
title: "Boyce 3.1 Ejercicio 15"
exercise-id: boyce-c03-s01-e015
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.1, ejercicio 15"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
  - aplicar-condiciones.problema-valor-inicial
  - analizar-cualitativamente.comportamiento-asintotico
hidden-competencies:
  - clasificar.coeficientes-constantes
  - seleccionar-metodo.coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - polinomios.resolver
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s01i02-p143.png
---

## Enunciado

Encuentre $\alpha$ de modo que la solución del problema con valor inicial

$$y'' - y' - 2y = 0, \quad y(0) = \alpha, \quad y'(0) = 2$$

tienda a cero cuando $x \to \infty$.

## Solución

La ecuación es **de segundo orden**, **lineal**, **homogénea** y con **coeficientes constantes**. La condición de decaimiento obliga a anular el modo creciente y la condición inicial sobre $y'$ fija el modo restante. El valor pedido es

$$
\alpha = -2.
$$

Con él, la solución del problema es $y(x) = -2e^{-x}$.

## Resolución

Se resuelve primero la ecuación homogénea. Se propone $y = e^{rx}$, de donde $y' = r e^{rx}$ y $y'' = r^2 e^{rx}$. Al sustituir y dividir entre $e^{rx} \neq 0$ resulta la **ecuación característica**

$$
r^2 - r - 2 = 0.
$$

El polinomio se factoriza como

$$
r^2 - r - 2 = (r - 2)(r + 1),
$$

de modo que las raíces son reales y distintas:

$$
r_1 = 2, \qquad r_2 = -1.
$$

Cada raíz aporta una solución exponencial y ambas son linealmente independientes, así que la solución general es

$$
y(x) = C_1 e^{2x} + C_2 e^{-x}.
$$

Cuando $x \to \infty$, el término $e^{2x}$ crece sin cota mientras que $e^{-x} \to 0$. Por lo tanto, $y(x) \to 0$ si y solo si se anula el coeficiente del modo creciente:

$$
C_1 = 0, \qquad y(x) = C_2 e^{-x}.
$$

Se aplican las condiciones iniciales a esta solución. De $y(0) = \alpha$ se obtiene $C_2 = \alpha$. La derivada es $y'(x) = -C_2 e^{-x}$, de donde $y'(0) = -C_2 = 2$, es decir, $C_2 = -2$. En consecuencia,

$$
\alpha = C_2 = -2,
$$

y la solución del problema con valor inicial es $y(x) = -2e^{-x}$.

La comprobación confirma el resultado: $y(0) = -2 = \alpha$, $y'(0) = 2$ y

$$
y'' - y' - 2y = -2e^{-x} - 2e^{-x} + 4e^{-x} = 0.
$$

Además, $y(x) = -2e^{-x} \to 0$ cuando $x \to \infty$.

## Observaciones

La condición $y \to 0$ cuando $x \to \infty$ selecciona, entre las infinitas soluciones de la ecuación, la que no contiene el modo creciente $e^{2x}$: equivale a exigir $C_1 = 0$. Cualquier dato inicial con $C_1 \neq 0$ produce una solución divergente.

La solución particular $-2e^{-x}$ está definida para todo $x \in \mathbb{R}$, no presenta soluciones singulares y su único término es decreciente.
