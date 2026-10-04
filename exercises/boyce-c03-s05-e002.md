---
title: "Boyce 3.5 Ejercicio 2"
exercise-id: boyce-c03-s05-e002
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.5, ejercicio 2"
statement-status: accepted
solution-status: draft
metadata-status: pending
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
hidden-competencies:
  - clasificar.coeficientes-constantes
  - seleccionar-metodo.coeficientes-constantes
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

2. $9y'' + 6y' + y = 0$

## Solución

La ecuación es **de segundo orden**, **lineal**, **homogénea** y con **coeficientes constantes**. Su ecuación característica tiene una raíz doble, y la solución general es

$$
y(x) = (C_1 + C_2 x)e^{-x/3},
$$

válida para todo $x \in \mathbb{R}$.

## Resolución

Se busca la solución general de

$$
9y'' + 6y' + y = 0.
$$

Al ser una ecuación de coeficientes constantes, se propone $y = e^{rx}$, de donde $y' = r e^{rx}$ y $y'' = r^2 e^{rx}$. Al sustituir y dividir entre $e^{rx} \neq 0$ resulta la **ecuación característica**

$$
9r^2 + 6r + 1 = 0.
$$

El polinomio es un trinomio cuadrado perfecto,

$$
9r^2 + 6r + 1 = (3r + 1)^2,
$$

por lo que la única raíz es

$$
r = -\frac{1}{3},
$$

con multiplicidad dos. Ante una raíz real repetida, la solución general toma la forma

$$
y(x) = (C_1 + C_2 x)e^{rx},
$$

y al sustituir $r = -1/3$ se obtiene

$$
y(x) = (C_1 + C_2 x)e^{-x/3}.
$$

La sustitución confirma el resultado: para $y = e^{-x/3}$ la ecuación característica da $9\left(\tfrac{1}{9}\right) + 6\left(-\tfrac{1}{3}\right) + 1 = 1 - 2 + 1 = 0$, y la segunda solución $x e^{-x/3}$ aporta el término lineal que compensa la repetición de la raíz. Al no haber condiciones iniciales, $C_1$ y $C_2$ quedan arbitrarias, y la solución está definida para todo $x \in \mathbb{R}$.

## Observaciones

La raíz doble introduce el factor lineal $x$ en la solución; no aparece ninguna solución singular. Como la raíz es negativa, toda solución tiende a $0$ cuando $x \to \infty$, y el factor $x$ describe un crecimiento transitorio antes de que domine la exponencial decreciente.
