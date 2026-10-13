---
title: "Boyce 3.4 Ejercicio 17"
exercise-id: boyce-c03-s04-e017
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.4, ejercicio 17"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver.lineal.homogenea.coeficientes-constantes
  - aplicar-condiciones.problema-valor-inicial
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

En cada uno de los problemas 17 a 22, resuelva el problema con valor inicial dado.

17. $y'' + 4y = 0, \quad y(0) = 0, \quad y'(0) = 1$

## Solución

$$
y(x) = \frac{1}{2}\sin(2x), \qquad x \in \mathbb{R}.
$$

## Resolución

La ecuación es **lineal**, **homogénea**, de **segundo orden** y con **coeficientes constantes**. Se ensaya $y = e^{rx}$; al sustituir, el factor $e^{rx}$ no se anula y se obtiene la **ecuación característica**

$$
r^2 + 4 = 0.
$$

Sus raíces son

$$
r^2 = -4 \quad \Longrightarrow \quad r = \pm 2i.
$$

Forman un par complejo conjugado $\alpha \pm i\beta$ con $\alpha = 0$ y $\beta = 2$. La solución general es

$$
y(x) = e^{0\cdot x}\left(C_1\cos(2x) + C_2\sin(2x)\right) = C_1\cos(2x) + C_2\sin(2x).
$$

Se aplican las condiciones iniciales. La primera, $y(0) = 0$, da

$$
C_1\cos 0 + C_2\sin 0 = C_1 = 0.
$$

Con $C_1 = 0$ la solución se reduce a $y = C_2\sin(2x)$. Su derivada es

$$
y'(x) = 2C_2\cos(2x).
$$

La segunda condición, $y'(0) = 1$, impone

$$
2C_2\cos 0 = 2C_2 = 1 \quad \Longrightarrow \quad C_2 = \frac{1}{2}.
$$

Por tanto, la solución del problema con valor inicial es

$$
y(x) = \frac{1}{2}\sin(2x).
$$

## Observaciones

La solución es un movimiento armónico simple de amplitud $1/2$ y frecuencia angular $2$. Como la parte real de las raíces es nula, la amplitud no crece ni decrece: la solución es periódica y está definida para todo $x \in \mathbb{R}$.

La comprobación directa confirma el resultado: $y' = \cos(2x)$ y $y'' = -2\sin(2x)$, de modo que $y'' + 4y = -2\sin(2x) + 2\sin(2x) = 0$, y además $y(0) = 0$ y $y'(0) = 1$.
