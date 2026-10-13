---
title: "Boyce 3.5 Ejercicio 7"
exercise-id: boyce-c03-s05-e007
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.5, ejercicio 7"
statement-status: accepted
solution-status: draft
metadata-status: pending
topics:
  - orden-superior
competencies:
  - resolver.lineal.homogenea.coeficientes-constantes
hidden-competencies:
  - clasificar.coeficientes-constantes
  - seleccionar.metodo.coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - polinomios.resolver
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s05i01-p175.png
---

## Enunciado

En cada uno de los problemas 1 a 10, halle la solución general de la ecuación diferencial dada.

7. $4y'' + 17y' + 4y = 0$

## Solución

La ecuación es **de segundo orden**, **lineal**, **homogénea** y con **coeficientes constantes**. Su ecuación característica tiene dos raíces reales distintas, $r_1=-\tfrac14$ y $r_2=-4$, y la solución general es

$$
y(x) = C_1 e^{-x/4} + C_2 e^{-4x},
$$

válida para todo $x \in \mathbb{R}$.

## Resolución

Se busca la solución general de

$$
4y'' + 17y' + 4y = 0.
$$

Al ser una ecuación de coeficientes constantes, se propone $y = e^{rx}$, con $y' = r e^{rx}$ y $y'' = r^2 e^{rx}$. Al sustituir y dividir entre $e^{rx} \neq 0$ resulta la **ecuación característica**

$$
4r^2 + 17r + 4 = 0.
$$

Su discriminante es

$$
17^2 - 4(4)(4) = 289 - 64 = 225 > 0,
$$

de modo que hay dos raíces reales distintas. Al resolver,

$$
r = \frac{-17 \pm \sqrt{225}}{8} = \frac{-17 \pm 15}{8},
$$

esto es,

$$
r_1 = \frac{-17 + 15}{8} = -\frac{1}{4}, \qquad r_2 = \frac{-17 - 15}{8} = -4.
$$

Ante dos raíces reales distintas, la solución general es la combinación lineal de las dos exponenciales,

$$
y(x) = C_1 e^{-x/4} + C_2 e^{-4x}.
$$

Al no haber condiciones iniciales ni de frontera, $C_1$ y $C_2$ quedan arbitrarias.

## Observaciones

Como las raíces son negativas, toda solución tiende a $0$ cuando $x \to \infty$: la exponencial $e^{-4x}$ decae más rápido y $e^{-x/4}$ domina para valores grandes de $x$. La solución general está definida para todo $x \in \mathbb{R}$ y no aparecen soluciones singulares.
