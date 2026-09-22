---
title: "Boyce 4.2 Ejercicio 33"
exercise-id: boyce-c04-s02-e033
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.2, ejercicio 33"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
hidden-competencies:
  - clasificar.coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.numeros-complejos
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c04s02i03-p231.png
---

## Enunciado

En cada uno de los problemas 29 a 34, use una computadora para hallar la solución general de la ecuación diferencial dada.

33. $y''' + 0.1y'' + 1.2y' - 0.4y = 0$

## Solución

$$
y(x)=C_1 e^{0.30261x}+e^{-0.20130x}\left(C_2\cos(1.13195x)+C_3\sin(1.13195x)\right).
$$

## Resolución

La ecuación es **lineal**, **homogénea**, de **tercer orden** y con **coeficientes constantes**. Al sustituir $y=e^{rx}$ se obtiene la ecuación característica

$$
r^3+0.1r^2+1.2r-0.4=0,
$$

o, multiplicando por $10$,

$$
10r^3+r^2+12r-4=0.
$$

El polinomio no tiene raíces racionales, de modo que se recurre al **cómputo simbólico**. Este proporciona una raíz real y un par de raíces complejas conjugadas:

$$
r_1\approx 0.30261,\qquad r_{2,3}\approx -0.20130\pm 1.13195\,i.
$$

A la raíz real le corresponde la solución $e^{0.30261x}$. Para el par complejo conjugado $\alpha\pm i\beta$, con $\alpha=-0.20130$ y $\beta=1.13195$, la contribución es $e^{\alpha x}\left(C_2\cos\beta x+C_3\sin\beta x\right)$.

La solución general es la combinación lineal de estas tres soluciones linealmente independientes:

$$
y(x)=C_1 e^{0.30261x}+e^{-0.20130x}\left(C_2\cos(1.13195x)+C_3\sin(1.13195x)\right).
$$

La ecuación es de orden tres y la solución contiene tres constantes arbitrarias. La sustitución directa confirma que cada uno de los tres términos satisface la ecuación.

## Observaciones

- El polinomio característico no factoriza sobre los racionales; sus raíces son irracionales, una real y dos complejas, por lo que el resultado se expresa con aproximaciones decimales.
- Al tener coeficientes constantes, la solución general está definida en todo $\mathbb{R}$.
- La raíz real positiva produce un crecimiento exponencial, mientras que el par complejo, de parte real negativa, aporta oscilaciones amortiguadas.
