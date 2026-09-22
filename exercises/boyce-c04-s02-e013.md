---
title: "Boyce 4.2 Ejercicio 13"
exercise-id: boyce-c04-s02-e013
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.2, ejercicio 13"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
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

13. $2y''' - 4y'' - 2y' + 4y = 0$

## Solución

La ecuación característica tiene tres raíces reales distintas, $r=2$, $r=1$ y $r=-1$. La solución general es

$$
y(x)=C_1e^{2x}+C_2e^{x}+C_3e^{-x}.
$$

## Resolución

La ecuación es lineal, homogénea, de **tercer orden** y de **coeficientes constantes**. Se buscan soluciones de la forma $y=e^{rx}$. Sus derivadas son $y'=re^{rx}$, $y''=r^2e^{rx}$ y $y'''=r^3e^{rx}$. Al sustituir,

$$
2r^3e^{rx}-4r^2e^{rx}-2re^{rx}+4e^{rx}=e^{rx}\left(2r^3-4r^2-2r+4\right)=0.
$$

Como $e^{rx}\ne 0$, se obtiene la **ecuación característica**

$$
2r^3-4r^2-2r+4=0.
$$

Al dividir entre el coeficiente principal $2$ resultan las mismas raíces y una ecuación más simple:

$$
r^3-2r^2-r+2=0.
$$

El polinomio se factoriza por agrupación de términos. Al agrupar los dos primeros y los dos últimos,

$$
r^2(r-2)-(r-2)=(r-2)\left(r^2-1\right)=0.
$$

El factor $r^2-1$ se factoriza como diferencia de cuadrados, $(r-1)(r+1)$, de modo que

$$
(r-2)(r-1)(r+1)=0.
$$

Las raíces son $r_1=2$, $r_2=1$ y $r_3=-1$. Son reales y distintas. Cada una produce una solución $e^{2x}$, $e^{x}$ y $e^{-x}$, linealmente independientes. Por lo tanto, la solución general es

$$
y(x)=C_1e^{2x}+C_2e^{x}+C_3e^{-x}.
$$

## Observaciones

Las tres raíces de la ecuación característica son reales y distintas, de modo que la solución general es una combinación de exponenciales puras, sin funciones trigonométricas ni factores polinómicos.

Dividir la ecuación característica entre $2$ no altera sus raíces, porque $2\ne 0$; solo simplifica la factorización.

Las exponenciales $e^{2x}$, $e^{x}$ y $e^{-x}$ están definidas para todo $x\in\mathbb{R}$. La solución general también, cualesquiera sean las constantes $C_1$, $C_2$ y $C_3$.
