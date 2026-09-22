---
title: "Boyce 4.2 Ejercicio 18"
exercise-id: boyce-c04-s02-e018
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.2, ejercicio 18"
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
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c04s02i01-p229.png
---

## Enunciado

En cada uno de los problemas 11 a 22, determine la solución de la ecuación diferencial dada.

18. $y^{\mathrm{vi}} - y'' = 0$

## Solución

La solución general es

$$
y(x) = C_1 + C_2 x + C_3 e^{x} + C_4 e^{-x} + C_5\cos x + C_6\sin x,
$$

válida para todo $x \in \mathbb{R}$.

## Resolución

La ecuación

$$
y^{\mathrm{vi}} - y'' = 0
$$

es **lineal homogénea de sexto orden con coeficientes constantes**. Se propone $y = e^{rx}$, lo que conduce a la **ecuación característica**

$$
r^6 - r^2 = 0.
$$

Se extrae el factor común $r^2$ y se factoriza la diferencia de cuadrados:

$$
r^2(r^4 - 1) = r^2(r^2 - 1)(r^2 + 1) = r^2(r - 1)(r + 1)(r^2 + 1) = 0.
$$

Las raíces son $r = 0$ (doble), $r = 1$, $r = -1$ y el par complejo conjugado $r = \pm i$.

Para una raíz real $r$ de multiplicidad $m$, la ecuación característica aporta las soluciones $e^{rx}, xe^{rx}, \dots, x^{m-1}e^{rx}$. La raíz $r = 0$, de multiplicidad dos, aporta $1$ y $x$. Las raíces reales simples $r = 1$ y $r = -1$ aportan $e^{x}$ y $e^{-x}$. El par complejo conjugado $\lambda \pm i\mu$ con $\lambda = 0$ y $\mu = 1$ aporta $e^{0\cdot x}\cos x$ y $e^{0\cdot x}\sin x$, es decir $\cos x$ y $\sin x$.

Las seis funciones $1, x, e^{x}, e^{-x}, \cos x, \sin x$ son linealmente independientes en $\mathbb{R}$, de modo que forman un conjunto fundamental de soluciones. La solución general es su combinación lineal:

$$
y(x) = C_1 + C_2 x + C_3 e^{x} + C_4 e^{-x} + C_5\cos x + C_6\sin x.
$$

Al ser una ecuación lineal homogénea con coeficientes constantes, la solución está definida en todo $\mathbb{R}$.

## Observaciones

- El término $C_1 + C_2 x$ proviene de la raíz doble $r = 0$: la ecuación no contiene $y$ ni $y'$, por lo que $r^2$ es factor común del polinomio característico.
- No hay soluciones singulares ni perdidas: la ecuación es lineal homogénea y no se divide por ningún factor que pueda anularse. El número de constantes arbitrarias coincide con el orden de la ecuación.

### Método alternativo: reducción con $u = y''$

Como la ecuación no contiene $y$ ni $y'$, la sustitución $u = y''$ reduce el orden a la ecuación de segundo orden

$$
u^{\mathrm{iv}} - u = 0,
$$

cuya ecuación característica $r^4 - 1 = 0$ da $u = A e^{x} + B e^{-x} + C\cos x + D\sin x$. Al integrar dos veces se recupera la forma de la solución general, con las constantes redefinidas.
