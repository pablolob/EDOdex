---
title: "Boyce 3.1 Ejercicio 2"
exercise-id: boyce-c03-s01-e002
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.1, ejercicio 2"
statement-status: accepted
solution-status: draft
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
  - c03s01i01-p142.png
---

## Enunciado

En cada uno de los problemas 1 a 8, halle la solución general de la ecuación diferencial dada.

2. $y'' + 3y' + 2y = 0$

## Solución

La ecuación es **de segundo orden**, **lineal**, **homogénea** y con **coeficientes constantes**. Su solución general es

$$
y(x) = C_1 e^{-x} + C_2 e^{-2x},
$$

válida para todo $x \in \mathbb{R}$.

## Resolución

Se busca la solución general de

$$
y'' + 3y' + 2y = 0.
$$

Al ser una ecuación de coeficientes constantes, se propone $y = e^{rx}$, de donde $y' = r e^{rx}$ y $y'' = r^2 e^{rx}$. Al sustituir y dividir entre $e^{rx} \neq 0$ resulta la **ecuación característica**

$$
r^2 + 3r + 2 = 0.
$$

El polinomio se factoriza como

$$
r^2 + 3r + 2 = (r + 1)(r + 2),
$$

por lo que sus raíces son

$$
r_1 = -1, \qquad r_2 = -2.
$$

Son reales y distintas, así que cada una aporta una solución exponencial y ambas son linealmente independientes. La solución general es la combinación lineal

$$
y(x) = C_1 e^{-x} + C_2 e^{-2x}.
$$

La sustitución confirma el resultado: para $r_1 = -1$ se tiene $1 - 3 + 2 = 0$, y para $r_2 = -2$ se tiene $4 - 6 + 2 = 0$. Al no haber condiciones iniciales, $C_1$ y $C_2$ quedan arbitrarias, y la solución está definida para todo $x \in \mathbb{R}$.

## Observaciones

Las raíces de la ecuación característica son reales y distintas, de modo que la solución general combina dos exponenciales reales y no aparecen soluciones singulares. Como ambas raíces son negativas, toda solución tiende a $0$ cuando $x \to \infty$; el término $C_2 e^{-2x}$ decae más rápido que $C_1 e^{-x}$.
