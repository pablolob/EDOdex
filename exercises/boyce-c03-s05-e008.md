---
title: "Boyce 3.5 Ejercicio 8"
exercise-id: boyce-c03-s05-e008
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.5, ejercicio 8"
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

8. $16y'' + 24y' + 9y = 0$

## Solución

La ecuación es **de segundo orden**, **lineal**, **homogénea** y con **coeficientes constantes**. Su ecuación característica tiene una raíz doble, y la solución general es

$$
y(x) = (C_1 + C_2 x)e^{-3x/4},
$$

válida para todo $x \in \mathbb{R}$.

## Resolución

Se busca la solución general de

$$
16y'' + 24y' + 9y = 0.
$$

Al ser una ecuación de coeficientes constantes, se propone $y = e^{rx}$, de donde $y' = r e^{rx}$ y $y'' = r^2 e^{rx}$. Al sustituir y dividir entre $e^{rx} \neq 0$ resulta la **ecuación característica**

$$
16r^2 + 24r + 9 = 0.
$$

El polinomio es un trinomio cuadrado perfecto,

$$
16r^2 + 24r + 9 = (4r + 3)^2,
$$

por lo que la única raíz es

$$
r = -\frac{3}{4},
$$

con multiplicidad dos. Ante una raíz real repetida, la solución general toma la forma

$$
y(x) = (C_1 + C_2 x)e^{rx},
$$

y al sustituir $r = -3/4$ se obtiene

$$
y(x) = (C_1 + C_2 x)e^{-3x/4}.
$$

La sustitución confirma el resultado: para $y = e^{-3x/4}$ la ecuación característica da $16\left(\tfrac{9}{16}\right) + 24\left(-\tfrac{3}{4}\right) + 9 = 9 - 18 + 9 = 0$, y la segunda solución $x e^{-3x/4}$ aporta el término lineal que compensa la repetición de la raíz. Al no haber condiciones iniciales, $C_1$ y $C_2$ quedan arbitrarias, y la solución está definida para todo $x \in \mathbb{R}$.

## Observaciones

La raíz doble introduce el factor lineal $x$ en la solución; no aparece ninguna solución singular. Como la raíz es negativa, toda solución tiende a $0$ cuando $x \to \infty$, y el factor $x$ describe un crecimiento transitorio antes de que domine la exponencial decreciente.
