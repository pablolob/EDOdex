---
title: "Boyce 1.1 Ejercicio 23"
exercise-id: boyce-c01-s01-e023
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 1.1, ejercicio 23"
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

23. $a^2 u_{xx} = u_{tt}$

## Solución

La ecuación es de **segundo orden** y **lineal**.

## Resolución

El **orden** de una ecuación diferencial parcial es el de la derivada parcial de mayor orden presente. En $a^2 u_{xx} = u_{tt}$ las derivadas que aparecen son $u_{xx}$ y $u_{tt}$, ambas de segundo orden. Por tanto, la ecuación es de **segundo orden**.

Una ecuación diferencial parcial es **lineal** si la variable dependiente $u$ y todas sus derivadas parciales aparecen elevadas a la primera potencia y no se multiplican entre sí, con coeficientes que dependen solo de las variables independientes.

La ecuación se reescribe como

$$
a^2 u_{xx} - u_{tt} = 0.
$$

Aquí $u$ y sus derivadas $u_{xx}$ y $u_{tt}$ aparecen en primer grado, sin multiplicarse entre sí; los coeficientes $a^2$ y $-1$ son constantes, es decir, dependen solo de las variables independientes $x$ y $t$. Por tanto, la ecuación es **lineal**.

## Observaciones

La ecuación es lineal y, además, **homogénea**, porque el miembro derecho es idénticamente nulo. Corresponde a la ecuación de onda unidimensional. La linealidad se refiere a la variable dependiente $u$ y a sus derivadas parciales, no a las variables independientes $x$ y $t$.
