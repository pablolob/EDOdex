---
title: "Boyce 3.1 Ejercicio 6"
exercise-id: boyce-c03-s01-e006
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.1, ejercicio 6"
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
  - c03s01i01-p142.png
---

## Enunciado

En cada uno de los problemas 1 a 8, halle la solución general de la ecuación diferencial dada.

6. $4y'' - 9y = 0$

## Solución

La ecuación es **lineal, homogénea y de coeficientes constantes**. Su solución general es

$$
y(x)=C_1e^{3x/2}+C_2e^{-3x/2},
$$

definida para todo $x\in\mathbb{R}$.

## Resolución

La ecuación es lineal, homogénea y de **coeficientes constantes**. Se buscan soluciones de la forma $y=e^{rx}$. Sus derivadas son $y'=re^{rx}$ y $y''=r^2e^{rx}$. Al sustituir,

$$
4r^2e^{rx}-9e^{rx}=e^{rx}\left(4r^2-9\right)=0.
$$

Como $e^{rx}\ne 0$, se obtiene la **ecuación característica**

$$
4r^2-9=0.
$$

El miembro izquierdo es una diferencia de cuadrados y se factoriza:

$$
(2r-3)(2r+3)=0.
$$

De aquí las raíces son $r_1=\dfrac{3}{2}$ y $r_2=-\dfrac{3}{2}$. Son reales y distintas. Cada una produce una solución $e^{r_1x}$ y $e^{r_2x}$, linealmente independientes. Por lo tanto, la solución general es

$$
y(x)=C_1e^{3x/2}+C_2e^{-3x/2}.
$$

## Observaciones

Las raíces de la ecuación característica son reales y distintas, de modo que no aparecen funciones trigonométricas ni factores polinómicos. Las dos exponenciales están definidas para todo $x\in\mathbb{R}$; la solución general también, cualesquiera sean $C_1$ y $C_2$. La misma familia puede escribirse en la forma hiperbólica $y(x)=A\cosh\left(\dfrac{3x}{2}\right)+B\sinh\left(\dfrac{3x}{2}\right)$.
