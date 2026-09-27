---
title: "Boyce 2.3 Ejercicio 9"
exercise-id: boyce-c02-s03-e009
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.3, ejercicio 9"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.variables-separables
  - aplicar-condiciones.problema-valor-inicial
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.separable
prerequisitos:
  - integracion.por-partes
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c02s03i02-p053.png
---

## Enunciado

Para cada uno de los problemas 9 a 16, encuentre la solución del problema con valor inicial dado en forma explícita y determine (por lo menos aproximadamente) el intervalo en que está definida.

9. $x\, dx + ye^{-x}\, dy = 0, \quad y(0) = 1$

## Solución

La ecuación es **de primer orden** y **separable**. La solución del problema con valor inicial es

$$
y(x) = \sqrt{2e^{x}(1-x) - 1}.
$$

Está definida en el intervalo

$$
(x_1, x_2) \approx (-1.68,\ 0.77),
$$

donde $x_1$ y $x_2$ son las dos raíces de $2e^{x}(1-x) = 1$.

## Resolución

La ecuación admite **separación de variables**. Se reescribe como

$$
y e^{-x}\, dy = -x\, dx
$$

y se multiplica por $e^{x}$:

$$
y\, dy = -x e^{x}\, dx.
$$

La factorización $e^{-x}$ no se anula, de modo que esta reescritura no introduce ni pierde soluciones. Integrando ambos miembros y resolviendo la integral del miembro derecho por partes,

$$
\frac{y^2}{2} = \int -x e^{x}\, dx = e^{x}(1-x) + C.
$$

La condición inicial $y(0) = 1$ fija la constante:

$$
\frac{1}{2} = e^{0}(1-0) + C = 1 + C \quad\Longrightarrow\quad C = -\frac{1}{2}.
$$

Así,

$$
y^{2} = 2e^{x}(1-x) - 1.
$$

Como $y(0) = 1 > 0$, la solución es la rama positiva,

$$
y(x) = \sqrt{2e^{x}(1-x) - 1}.
$$

Para determinar el intervalo de validez se estudia el radicando

$$
\varphi(x) = 2e^{x}(1-x) - 1.
$$

Su derivada es $\varphi'(x) = 2e^{x}(1-x) - 2e^{x} = -2x e^{x}$, que se anula solo en $x = 0$. En consecuencia, $\varphi$ tiene un máximo en $x = 0$ con $\varphi(0) = 1 > 0$ y decrece en cada lado de ese punto. Por tanto, existe una raíz negativa $x_1$ y una raíz positiva $x_2$ de $\varphi(x) = 0$, y el radicando es positivo exactamente en $(x_1, x_2)$. La ecuación $\varphi(x) = 0$ es trascendente, por lo que las raíces se aproximan numéricamente:

$$
x_1 \approx -1.678, \qquad x_2 \approx 0.768.
$$

En los extremos la solución se anula, $y(x_1) = y(x_2) = 0$, y como

$$
2y\,y' = \varphi'(x) = -2x e^{x},
$$

la derivada $y' = -x e^{x}/y$ no está acotada allí. El intervalo maximal, que contiene al punto inicial, es entonces

$$
(x_1, x_2) \approx (-1.68,\ 0.77).
$$

## Observaciones

La ecuación $x\, dx + y e^{-x}\, dy = 0$ no admite soluciones constantes: $y = 0$ solo satisface la ecuación en el punto $x = 0$ y no en un intervalo, de modo que no hay soluciones singulares que añadir a la familia.

El intervalo de definición no coincide con todo $\mathbb{R}$ porque la rama explícita solo es real y diferenciable mientras el radicando es positivo. Los extremos $x_1$ y $x_2$ son raíces de una ecuación trascendente, por lo que el enunciado pide determinarlos de forma aproximada; no se expresan con funciones elementales.
