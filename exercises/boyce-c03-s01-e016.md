---
title: "Boyce 3.1 Ejercicio 16"
exercise-id: boyce-c03-s01-e016
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.1, ejercicio 16"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
  - aplicar-condiciones.problema-valor-inicial
  - analizar-cualitativamente.comportamiento-asintotico
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - ecuaciones-diferenciales.condiciones-iniciales
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c03s01i02-p143.png
---

## Enunciado

Halle $\beta$ de modo que la solución del problema con valor inicial

$$4y'' - y = 0, \quad y(0) = 2, \quad y'(0) = \beta$$

tienda a cero cuando $x \to \infty$.

## Solución

$$
\beta = -1, \qquad y(x) = 2e^{-x/2}.
$$

## Resolución

La ecuación es **lineal homogénea de segundo orden con coeficientes constantes**. Su **ecuación característica** es

$$
4r^2 - 1 = 0,
$$

cuyas raíces son $r = \pm \dfrac{1}{2}$. Por tanto, la solución general es

$$
y(x) = C_1 e^{x/2} + C_2 e^{-x/2}.
$$

Cuando $x \to \infty$, el término $e^{x/2}$ crece sin cota y $e^{-x/2} \to 0$. Para que $y(x) \to 0$ debe anularse el coeficiente del término creciente, es decir, $C_1 = 0$. La solución queda entonces

$$
y(x) = C_2 e^{-x/2}.
$$

La condición $y(0) = 2$ da $C_2 = 2$, de modo que $y(x) = 2e^{-x/2}$. Su derivada es $y'(x) = -e^{-x/2}$; por consiguiente,

$$
\beta = y'(0) = -1.
$$

Con este valor la solución particular es $y(x) = 2e^{-x/2}$, que tiende a cero cuando $x \to \infty$.

## Observaciones

La condición $y \to 0$ obliga a eliminar el término creciente $e^{x/2}$. Cualquier $\beta \ne -1$ deja un coeficiente no nulo de ese término y la solución diverge.

La ecuación es lineal y su solución general contiene todas las soluciones, por lo que no hay soluciones singulares. La solución particular está definida para todo $x \in \mathbb{R}$.
