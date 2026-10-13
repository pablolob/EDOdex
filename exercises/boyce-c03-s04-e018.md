---
title: "Boyce 3.4 Ejercicio 18"
exercise-id: boyce-c03-s04-e018
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.4, ejercicio 18"
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
  - clasificar.lineal-hom
prerequisitos:
  - algebra.numeros-complejos
  - algebra.ecuaciones-caracteristicas
  - polinomios.resolver
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s04i01-p166.png
---

## Enunciado

En cada uno de los problemas 17 a 22, resuelva el problema con valor inicial dado.

18. $y'' + 4y' + 5y = 0, \quad y(0) = 1, \quad y'(0) = 0$

## Solución

La solución del problema con valor inicial es

$$
y(x) = e^{-2x}\left(\cos x + 2\sin x\right).
$$

## Resolución

La ecuación es **lineal**, **homogénea** y con **coeficientes constantes** de segundo orden. Se proponen soluciones de la forma $y = e^{rx}$. Al sustituir,

$$
\left(r^{2} + 4r + 5\right)e^{rx} = 0,
$$

y como $e^{rx} \neq 0$, la **ecuación característica** es

$$
r^{2} + 4r + 5 = 0.
$$

Sus raíces son complejas conjugadas:

$$
r = \frac{-4 \pm \sqrt{16 - 20}}{2}
= \frac{-4 \pm 2i}{2}
= -2 \pm i.
$$

Con parte real $\alpha = -2$ y parte imaginaria $\beta = 1$, la solución general es

$$
y(x) = e^{-2x}\left(c_1\cos x + c_2\sin x\right),
$$

donde $c_1$ y $c_2$ son constantes arbitrarias. Se aplican las condiciones iniciales. De $y(0) = 1$ se obtiene

$$
y(0) = c_1 = 1.
$$

La derivada es

$$
\begin{aligned}
y'(x) &= -2e^{-2x}\left(c_1\cos x + c_2\sin x\right) + e^{-2x}\left(-c_1\sin x + c_2\cos x\right) \\
&= e^{-2x}\left[\left(-2c_1 + c_2\right)\cos x + \left(-2c_2 - c_1\right)\sin x\right].
\end{aligned}
$$

Al imponer $y'(0) = 0$ resulta

$$
-2c_1 + c_2 = 0,
$$

de modo que $c_2 = 2c_1 = 2$. La solución del problema con valor inicial es, por tanto,

$$
y(x) = e^{-2x}\left(\cos x + 2\sin x\right).
$$

La comprobación confirma las condiciones: $y(0) = 1$ y $y'(0) = -2(1) + 2 = 0$.

## Observaciones

El factor $e^{-2x}$ amortigua la oscilación descrita por $\cos x + 2\sin x$. Como consecuencia, $y(x) \to 0$ cuando $x \to \infty$ y la solución presenta oscilaciones de amplitud decreciente.

La solución está definida para todo $x \in \mathbb{R}$. Al ser la ecuación homogénea y lineal, no hay soluciones singulares ni pérdida de soluciones al aplicar las condiciones iniciales.
