---
title: "Boyce 4.2 Ejercicio 17"
exercise-id: boyce-c04-s02-e017
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.2, ejercicio 17"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
hidden-competencies:
  - clasificar.lineal-hom
  - clasificar.coeficientes-constantes
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

17. $y^{\mathrm{vi}} - 3y^{\mathrm{iv}} + 3y'' - y = 0$

## Solución

La ecuación es **lineal**, **homogénea**, de **orden 6** y con **coeficientes constantes**. Su solución general es

$$
y(x)=\left(C_1+C_2x+C_3x^2\right)e^{x}+\left(C_4+C_5x+C_6x^2\right)e^{-x},
$$

válida para todo $x\in\mathbb{R}$.

## Resolución

La ecuación es lineal, homogénea, de orden 6 y con coeficientes constantes. Al proponer $y=e^{rx}$ se obtiene la **ecuación característica**

$$
r^6-3r^4+3r^2-1=0.
$$

El polinomio auxiliar contiene solo potencias pares de $r$. Con el cambio $u=r^2$ se reconoce un cubo perfecto:

$$
u^3-3u^2+3u-1=(u-1)^3.
$$

Por tanto

$$
r^6-3r^4+3r^2-1=(r^2-1)^3=(r-1)^3(r+1)^3,
$$

de modo que las raíces son $r=1$ y $r=-1$, cada una de multiplicidad $3$.

Una raíz real $r$ de multiplicidad $k$ aporta las soluciones $e^{rx}, xe^{rx}, \dots, x^{k-1}e^{rx}$. Con $k=3$, la raíz $r=1$ aporta $e^{x}$, $xe^{x}$ y $x^2e^{x}$; la raíz $r=-1$ aporta $e^{-x}$, $xe^{-x}$ y $x^2e^{-x}$. Estas seis funciones son linealmente independientes en $\mathbb{R}$ y forman un conjunto fundamental de soluciones.

La solución general es la combinación lineal de ese conjunto fundamental:

$$
y(x)=C_1e^{x}+C_2xe^{x}+C_3x^2e^{x}+C_4e^{-x}+C_5xe^{-x}+C_6x^2e^{-x}.
$$

Al ser una ecuación lineal homogénea con coeficientes constantes, la solución está definida en todo $\mathbb{R}$.

## Observaciones

El polinomio auxiliar tiene dos raíces reales, $r=1$ y $r=-1$, ambas de multiplicidad tres. Por eso la solución general combina dos bloques de la forma $\left(C_1+C_2x+C_3x^2\right)e^{rx}$, uno por cada raíz. El número de constantes arbitrarias, seis, coincide con el orden de la ecuación.

La ecuación es lineal y homogénea, así que no presenta soluciones singulares ni soluciones perdidas.
