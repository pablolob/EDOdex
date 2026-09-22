---
title: "Boyce 3.1 Ejercicio 4"
exercise-id: boyce-c03-s01-e004
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.1, ejercicio 4"
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

4. $2y'' - 3y' + y = 0$

## Solución

La ecuación característica $2r^2-3r+1=0$ tiene dos raíces reales distintas, $r=1$ y $r=\tfrac{1}{2}$. La solución general es

$$
y(x)=C_1e^{x}+C_2e^{x/2}.
$$

## Resolución

La ecuación es lineal, homogénea y de **coeficientes constantes**. Se buscan soluciones de la forma $y=e^{rx}$. Sus derivadas son $y'=re^{rx}$ y $y''=r^2e^{rx}$. Al sustituir,

$$
2r^2e^{rx}-3re^{rx}+e^{rx}=e^{rx}\left(2r^2-3r+1\right)=0.
$$

Como $e^{rx}\ne 0$, se obtiene la **ecuación característica**

$$
2r^2-3r+1=0.
$$

El polinomio se factoriza como

$$
2r^2-3r+1=(2r-1)(r-1)=0,
$$

de donde las raíces son $r_1=1$ y $r_2=\tfrac{1}{2}$. Son reales y distintas. Cada una produce una solución $e^{r_1x}$ y $e^{r_2x}$, linealmente independientes. Por lo tanto, la solución general es

$$
y(x)=C_1e^{x}+C_2e^{x/2}.
$$

## Observaciones

El discriminante de la ecuación característica es positivo, $(-3)^2-4(2)(1)=1$, de modo que las raíces son reales y distintas y no aparecen funciones trigonométricas ni factores polinómicos. Las dos exponenciales están definidas para todo $x\in\mathbb{R}$; la solución general también, cualesquiera sean $C_1$ y $C_2$.
