---
title: "Boyce 4.2 Ejercicio 20"
exercise-id: boyce-c04-s02-e020
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.2, ejercicio 20"
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

20. $y^{\mathrm{iv}} - 8y'' = 0$

## Solución

La solución general es

$$
y(x) = c_1 + c_2 x + c_3 e^{2\sqrt{2}\,x} + c_4 e^{-2\sqrt{2}\,x},
$$

válida para todo $x \in \mathbb{R}$.

## Resolución

La ecuación

$$
y^{\mathrm{iv}} - 8y'' = 0
$$

es **lineal homogénea de cuarto orden con coeficientes constantes**. Se propone $y = e^{rx}$, lo que conduce a la **ecuación característica**

$$
r^4 - 8r^2 = 0.
$$

Se factoriza extrayendo el factor común $r^2$:

$$
r^2(r^2 - 8) = 0.
$$

Las raíces son $r = 0$, de multiplicidad dos, y $r = \pm 2\sqrt{2}$, simples.

Para una raíz real $r$ de multiplicidad $m$, la ecuación característica aporta las soluciones $e^{rx}, xe^{rx}, \dots, x^{m-1}e^{rx}$. La raíz $r = 0$, de multiplicidad dos, aporta $1$ y $x$; las raíces simples $r = 2\sqrt{2}$ y $r = -2\sqrt{2}$ aportan $e^{2\sqrt{2}\,x}$ y $e^{-2\sqrt{2}\,x}$. Estas cuatro funciones son linealmente independientes en $\mathbb{R}$, de modo que forman un conjunto fundamental de soluciones.

La solución general es la combinación lineal de ese conjunto fundamental:

$$
y(x) = c_1 + c_2 x + c_3 e^{2\sqrt{2}\,x} + c_4 e^{-2\sqrt{2}\,x}.
$$

Al ser una ecuación lineal homogénea con coeficientes constantes, la solución está definida en todo $\mathbb{R}$.

## Observaciones

- La raíz doble $r = 0$ corresponde a la ausencia de los términos en $y$ y $y'$ en la ecuación, y produce la parte polinómica $c_1 + c_2 x$.
- No hay soluciones singulares ni perdidas: la ecuación es lineal homogénea y no se divide por ningún factor que pueda anularse.
- Las raíces $\pm 2\sqrt{2}$ son reales, por lo que la solución general también puede escribirse con funciones hiperbólicas, $y(x) = c_1 + c_2 x + c_3\cosh(2\sqrt{2}\,x) + c_4\sinh(2\sqrt{2}\,x)$.

### Método alternativo: reducción con $u = y''$

Como la ecuación no contiene $y$ ni $y'$, la sustitución $u = y''$ reduce el orden a la ecuación de segundo orden

$$
u'' - 8u = 0,
$$

cuya ecuación característica $s^2 - 8 = 0$ da $u = A e^{2\sqrt{2}\,x} + B e^{-2\sqrt{2}\,x}$. Al integrar dos veces se recupera la forma de la solución general, con las constantes redefinidas.
