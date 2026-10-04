---
title: "Boyce 3.4 Ejercicio 8"
exercise-id: boyce-c03-s04-e008
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.4, ejercicio 8"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
hidden-competencies:
  - clasificar.coeficientes-constantes
prerequisitos:
  - algebra.numeros-complejos
  - algebra.ecuaciones-caracteristicas
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s04i01-p166.png
---

## Enunciado

En cada uno de los problemas 7 a 16, halle la solución general de la ecuación diferencial dada.

8. $y'' - 2y' + 6y = 0$

## Solución

$$
y(x) = e^{x}\left(C_1 \cos(\sqrt{5}\,x) + C_2 \sin(\sqrt{5}\,x)\right),
$$

donde $C_1$ y $C_2$ son constantes arbitrarias.

## Resolución

La ecuación es lineal, homogénea y de coeficientes constantes. Se ensaya la solución $y = e^{rx}$; al sustituir, el factor $e^{rx}$ no se anula y la ecuación se reduce a la **ecuación característica**

$$
r^2 - 2r + 6 = 0.
$$

Las raíces se obtienen con la fórmula cuadrática:

$$
\begin{aligned}
r &= \frac{2 \pm \sqrt{(-2)^2 - 4(1)(6)}}{2} \\
  &= \frac{2 \pm \sqrt{4 - 24}}{2} \\
  &= \frac{2 \pm \sqrt{-20}}{2} \\
  &= 1 \pm i\sqrt{5}.
\end{aligned}
$$

Como el discriminante es negativo, las raíces forman un par complejo conjugado $\alpha \pm i\beta$ con $\alpha = 1$ y $\beta = \sqrt{5}$. La solución general de una ecuación homogénea con coeficientes constantes y raíces complejas es

$$
y(x) = e^{\alpha x}\left(C_1 \cos(\beta x) + C_2 \sin(\beta x)\right).
$$

Con $\alpha = 1$ y $\beta = \sqrt{5}$ resulta

$$
y(x) = e^{x}\left(C_1 \cos(\sqrt{5}\,x) + C_2 \sin(\sqrt{5}\,x)\right).
$$

## Observaciones

Las dos soluciones reales $y_1 = e^{x}\cos(\sqrt{5}\,x)$ y $y_2 = e^{x}\sin(\sqrt{5}\,x)$ son linealmente independientes, por lo que la familia anterior es la solución general. La parte real $\alpha = 1$ es positiva, de modo que la amplitud crece como $e^{x}$; el factor oscilatorio tiene frecuencia angular $\sqrt{5}$. Por tratarse de una ecuación con coeficientes constantes, toda solución está definida para $x \in \mathbb{R}$.
