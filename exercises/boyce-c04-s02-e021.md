---
title: "Boyce 4.2 Ejercicio 21"
exercise-id: boyce-c04-s02-e021
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.2, ejercicio 21"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
hidden-competencies:
  - clasificar.lineal-hom
  - clasificar.coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.factorizacion-polinomios
  - algebra.numeros-complejos
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c04s02i01-p229.png
---

## Enunciado

En cada uno de los problemas 11 a 22, determine la solución de la ecuación diferencial dada.

21. $y^{\mathrm{viii}} + 8y^{\mathrm{iv}} + 16y = 0$

## Solución

La solución general es

$$
y(x) = e^{x}\left[(C_1 + C_2 x)\cos x + (C_3 + C_4 x)\sin x\right]
+ e^{-x}\left[(C_5 + C_6 x)\cos x + (C_7 + C_8 x)\sin x\right],
$$

válida para todo $x \in \mathbb{R}$.

## Resolución

La ecuación

$$
y^{\mathrm{viii}} + 8y^{\mathrm{iv}} + 16y = 0
$$

es **lineal homogénea de octavo orden con coeficientes constantes**. Se propone $y = e^{rx}$, lo que conduce a la **ecuación característica**

$$
r^8 + 8r^4 + 16 = 0.
$$

El polinomio solo contiene potencias de $r$ múltiplos de cuatro. Con la sustitución $u = r^4$ se obtiene

$$
u^2 + 8u + 16 = (u + 4)^2 = 0,
$$

de modo que $u = -4$ es una raíz doble. En términos de $r$,

$$
(r^4 + 4)^2 = 0, \qquad r^4 = -4.
$$

El polinomio $r^4 + 4$ se factoriza como una diferencia de cuadrados:

$$
r^4 + 4 = (r^2 + 2)^2 - (2r)^2 = (r^2 - 2r + 2)(r^2 + 2r + 2).
$$

La ecuación característica queda

$$
(r^2 - 2r + 2)^2 (r^2 + 2r + 2)^2 = 0.
$$

Las raíces del primer factor son

$$
r = \frac{2 \pm \sqrt{4 - 8}}{2} = 1 \pm i,
$$

y las del segundo factor,

$$
r = \frac{-2 \pm \sqrt{4 - 8}}{2} = -1 \pm i.
$$

Por tanto, las raíces son $1 + i$, $1 - i$, $-1 + i$ y $-1 - i$, cada una de multiplicidad dos.

Para un par complejo conjugado $\lambda \pm i\mu$ de multiplicidad dos, la ecuación característica aporta las soluciones $e^{\lambda x}\cos\mu x$, $x e^{\lambda x}\cos\mu x$, $e^{\lambda x}\sin\mu x$ y $x e^{\lambda x}\sin\mu x$. El par $\lambda = 1$, $\mu = 1$ aporta $e^{x}\cos x$, $x e^{x}\cos x$, $e^{x}\sin x$ y $x e^{x}\sin x$. El par $\lambda = -1$, $\mu = 1$ aporta $e^{-x}\cos x$, $x e^{-x}\cos x$, $e^{-x}\sin x$ y $x e^{-x}\sin x$.

Estas ocho funciones son linealmente independientes en $\mathbb{R}$ y forman un conjunto fundamental de soluciones. La solución general es su combinación lineal:

$$
y(x) = e^{x}\left[(C_1 + C_2 x)\cos x + (C_3 + C_4 x)\sin x\right]
+ e^{-x}\left[(C_5 + C_6 x)\cos x + (C_7 + C_8 x)\sin x\right].
$$

Al ser una ecuación lineal homogénea con coeficientes constantes, la solución está definida en todo $\mathbb{R}$.

## Observaciones

- La ecuación es un polinomio en $D^4$, por lo que la sustitución $u = r^4$ reduce el problema a una cuadrática. El trinomio $u^2 + 8u + 16$ es un cuadrado perfecto, y de ahí provienen las raíces dobles y los factores $x$ en la solución.
- No hay soluciones singulares ni perdidas: la ecuación es lineal homogénea y no se divide por ningún factor que pueda anularse. El número de constantes arbitrarias coincide con el orden de la ecuación.

### Método alternativo: raíces cuartas en forma polar

Las raíces de $r^4 = -4$ también se obtienen escribiendo $-4 = 4e^{i\pi}$. Sus raíces cuartas son

$$
r = \sqrt{2}\,e^{i(\pi/4 + k\pi/2)}, \qquad k = 0, 1, 2, 3,
$$

es decir, $1 + i$, $-1 + i$, $-1 - i$ y $1 - i$, cada una de multiplicidad dos. Con ellas se forman las mismas soluciones reales.
