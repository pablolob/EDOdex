---
title: "Boyce 4.2 Ejercicio 32"
exercise-id: boyce-c04-s02-e032
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.2, ejercicio 32"
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
  technical: 1
source-images:
  - c04s02i03-p231.png
---

## Enunciado

En cada uno de los problemas 29 a 34, use una computadora para hallar la solución general de la ecuación diferencial dada.

32. $y^{\text{iv}} + 2y'' + y = 0$

## Solución

La solución general es

$$
y(x) = (C_1 + C_2 x)\cos x + (C_3 + C_4 x)\sin x,
$$

válida para todo $x \in \mathbb{R}$.

## Resolución

La ecuación

$$
y^{\text{iv}} + 2y'' + y = 0
$$

es **lineal homogénea de cuarto orden con coeficientes constantes**. Se propone $y = e^{rx}$, lo que conduce a la **ecuación característica**

$$
r^4 + 2r^2 + 1 = 0.
$$

El enunciado pide el uso de una computadora, de modo que la factorización del polinomio característico se obtiene con **cómputo simbólico** (por ejemplo, el comando `roots` o `solve` de un sistema de álgebra computacional). El resultado es

$$
r^4 + 2r^2 + 1 = (r^2 + 1)^2 = 0.
$$

Las raíces son $r = i$ y $r = -i$, ambas de multiplicidad dos.

Para un par complejo conjugado $\lambda \pm i\mu$ de multiplicidad $m$, la ecuación característica aporta las soluciones

$$
x^k e^{\lambda x}\cos(\mu x), \qquad x^k e^{\lambda x}\sin(\mu x), \qquad k = 0, 1, \dots, m-1.
$$

En este caso $\lambda = 0$, $\mu = 1$ y $m = 2$, así que las cuatro soluciones son

$$
\cos x, \qquad x\cos x, \qquad \sin x, \qquad x\sin x.
$$

Estas funciones son linealmente independientes en $\mathbb{R}$ y forman un conjunto fundamental de soluciones. La solución general es su combinación lineal:

$$
y(x) = (C_1 + C_2 x)\cos x + (C_3 + C_4 x)\sin x.
$$

Al ser una ecuación lineal homogénea con coeficientes constantes, la solución está definida en todo $\mathbb{R}$.

## Observaciones

- El polinomio característico es un cuadrado perfecto en $r^2$. La raíz compleja doble es la razón de que aparezcan los factores $x$ que multiplican a $\cos x$ y a $\sin x$.
- No hay soluciones singulares ni perdidas: la ecuación es lineal homogénea y no se divide por ningún factor que pueda anularse. El número de constantes arbitrarias coincide con el orden de la ecuación.
- En notación de operadores, la ecuación se escribe $(D^2 + 1)^2 y = 0$, forma que muestra de inmediato la raíz doble $\pm i$.
