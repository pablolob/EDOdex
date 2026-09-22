---
title: "Boyce 3.1 Ejercicio 1"
exercise-id: boyce-c03-s01-e001
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.1, ejercicio 1"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
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

1. $y'' + 2y' - 3y = 0$

## Solución

La ecuación característica tiene dos raíces reales distintas, $r=1$ y $r=-3$. La solución general es

$$
y(x)=C_1e^{x}+C_2e^{-3x}.
$$

## Resolución

La ecuación es lineal, homogénea y de **coeficientes constantes**. Se buscan soluciones de la forma $y=e^{rx}$. Sus derivadas son $y'=re^{rx}$ y $y''=r^2e^{rx}$. Al sustituir,

$$
r^2e^{rx}+2re^{rx}-3e^{rx}=e^{rx}\left(r^2+2r-3\right)=0.
$$

Como $e^{rx}\ne 0$, se obtiene la **ecuación característica**

$$
r^2+2r-3=0.
$$

El polinomio se factoriza como $(r+3)(r-1)=0$, de modo que las raíces son $r_1=1$ y $r_2=-3$. Son reales y distintas. Cada una produce una solución $e^{r_1x}$ y $e^{r_2x}$, linealmente independientes. Por lo tanto, la solución general es

$$
y(x)=C_1e^{x}+C_2e^{-3x}.
$$

## Observaciones

Las raíces de la ecuación característica son reales y distintas, de modo que no aparecen funciones trigonométricas ni factores polinómicos. Las dos exponenciales están definidas para todo $x\in\mathbb{R}$; la solución general también, cualesquiera sean $C_1$ y $C_2$.
