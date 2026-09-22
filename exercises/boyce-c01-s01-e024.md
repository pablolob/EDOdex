---
title: "Boyce 1.1 Ejercicio 24"
exercise-id: boyce-c01-s01-e024
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 1.1, ejercicio 24"
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

24. $u_{xx} + u_{yy} + uu_x + uu_y + u = 0$

## Solución

La ecuación es de **segundo orden** y **no lineal**.

## Resolución

El **orden** de una ecuación diferencial parcial es el de la derivada parcial de mayor orden presente. En $u_{xx} + u_{yy} + uu_x + uu_y + u = 0$ las derivadas de mayor orden que aparecen son $u_{xx}$ y $u_{yy}$, ambas de segundo orden. Por tanto, la ecuación es de **segundo orden**.

Una ecuación diferencial parcial es **lineal** si la variable dependiente $u$ y todas sus derivadas parciales aparecen elevadas a la primera potencia y no se multiplican entre sí, con coeficientes que dependen solo de las variables independientes.

En la ecuación dada aparecen los términos $uu_x$ y $uu_y$, en los que la función incógnita $u$ multiplica a sus propias derivadas parciales. Estos términos no satisfacen la condición de linealidad. Por tanto, la ecuación es **no lineal**.

## Observaciones

La no linealidad proviene únicamente de los términos $uu_x$ y $uu_y$. Los términos $u_{xx}$, $u_{yy}$ y $u$, considerados por separado, son lineales en $u$, pero su presencia no basta para que la ecuación sea lineal.
