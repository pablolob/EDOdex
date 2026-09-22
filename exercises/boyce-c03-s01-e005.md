---
title: "Boyce 3.1 Ejercicio 5"
exercise-id: boyce-c03-s01-e005
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.1, ejercicio 5"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
hidden-competencies:
  - clasificar.coeficientes-constantes
prerequisitos:
  - algebra.factorizacion-polinomios
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c03s01i01-p142.png
---

## Enunciado

En cada uno de los problemas 1 a 8, halle la solución general de la ecuación diferencial dada.

5. $y'' + 5y' = 0$

## Solución

La ecuación es **lineal**, **homogénea** y de **coeficientes constantes**. Su solución general es

$$
y(x) = C_1 + C_2 e^{-5x},
$$

definida para todo $x \in \mathbb{R}$.

## Resolución

La ecuación

$$
y'' + 5y' = 0
$$

es de **segundo orden**, **lineal**, **homogénea** y de **coeficientes constantes**. Se buscan soluciones de la forma $y = e^{rx}$. Sus derivadas son $y' = r e^{rx}$ y $y'' = r^2 e^{rx}$. Al sustituir,

$$
r^2 e^{rx} + 5r e^{rx} = 0,
\qquad\text{es decir,}\qquad
\left(r^2 + 5r\right) e^{rx} = 0.
$$

Como $e^{rx} \neq 0$ para todo $x$, se obtiene la **ecuación característica**

$$
r^2 + 5r = 0.
$$

Al factorizar, $r(r + 5) = 0$, de modo que las raíces son $r_1 = 0$ y $r_2 = -5$. Son reales y distintas, y producen las dos soluciones linealmente independientes

$$
y_1(x) = e^{0 \cdot x} = 1,
\qquad
y_2(x) = e^{-5x}.
$$

Por el principio de superposición, la solución general es

$$
y(x) = C_1 + C_2 e^{-5x}.
$$

## Observaciones

La raíz $r_1 = 0$ aporta la solución constante $y = C_1$. La solución se comprueba por sustitución directa: con $y' = -5C_2 e^{-5x}$ y $y'' = 25C_2 e^{-5x}$ resulta $y'' + 5y' = 25C_2 e^{-5x} - 25C_2 e^{-5x} = 0$.

### Método alternativo: reducción a primer orden

Al escribir $v = y'$, la ecuación se reduce a $v' + 5v = 0$, que es lineal de primer orden y separable. Su solución es $v = C e^{-5x}$. Al integrar, $y = -\dfrac{C}{5} e^{-5x} + C_1$, expresión que coincide con la solución general obtenida.
