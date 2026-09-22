---
title: "Boyce 1.1 Ejercicio 26"
exercise-id: boyce-c01-s01-e026
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 1.1, ejercicio 26"
statement-status: accepted
solution-status: draft
topics:
  - fundamentos
competencies:
  - clasificar.orden
  - clasificar.linealidad
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c01s01i02-p026.png
---

## Enunciado

En cada uno de los problemas 21 a 26, determine el orden de la ecuación diferencial parcial dada; diga también si la ecuación diferencial es lineal o no lineal. Las derivadas parciales se denotan por medio de subíndices.

26. $u_t + uu_x = 1 + u_{xx}$

## Solución

La ecuación es de **segundo orden** y **no lineal**.

## Resolución

La derivada de mayor orden presente es $u_{xx} = \dfrac{\partial^2 u}{\partial x^2}$, la derivada parcial segunda respecto de $x$. Por tanto, la ecuación es de **segundo orden**.

Una ecuación diferencial parcial es lineal en la función incógnita $u$ si $u$ y todas sus derivadas parciales aparecen únicamente elevadas a la primera potencia y sin multiplicarse entre sí, con coeficientes que dependen solo de las variables independientes $x$ y $t$.

En la ecuación

$$
u_t + uu_x = 1 + u_{xx},
$$

el término $uu_x$ es el producto de la función incógnita $u$ por su derivada parcial $u_x$. Esa multiplicación de la incógnita por su propia derivada rompe la linealidad. Por tanto, la ecuación es **no lineal**.

## Observaciones

La no linealidad proviene únicamente del término $uu_x$, en el que la incógnita se multiplica por su propia derivada. El término constante $1$ del miembro derecho no interviene en la clasificación de linealidad: solo afectaría a la homogeneidad si la ecuación fuese lineal.
