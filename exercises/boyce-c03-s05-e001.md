---
title: "Boyce 3.5 Ejercicio 1"
exercise-id: boyce-c03-s05-e001
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.5, ejercicio 1"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver.lineal.homogenea.coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - polinomios.resolver
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s05i01-p175.png
---

## Enunciado

En cada uno de los problemas 1 a 10, halle la solución general de la ecuación diferencial dada.

1. $y'' - 2y' + y = 0$

## Solución

La ecuación característica $r^2-2r+1=(r-1)^2=0$ tiene la raíz repetida $r=1$. La solución general es

$$
y(x)=C_1e^{x}+C_2xe^{x}=(C_1+C_2x)e^{x}.
$$

## Resolución

La ecuación es lineal, homogénea y de **coeficientes constantes**. Se buscan soluciones de la forma $y=e^{rx}$. Sus derivadas son $y'=re^{rx}$ y $y''=r^2e^{rx}$. Al sustituir,

$$
r^2e^{rx}-2re^{rx}+e^{rx}=e^{rx}\left(r^2-2r+1\right)=0.
$$

Como $e^{rx}\ne 0$, se obtiene la **ecuación característica**

$$
r^2-2r+1=0.
$$

El polinomio es un cuadrado perfecto,

$$
r^2-2r+1=(r-1)^2=0,
$$

de modo que hay una única raíz real, $r=1$, con multiplicidad dos. Una solución es $e^{x}$. Para una raíz repetida, la segunda solución linealmente independiente se obtiene multiplicando por $x$, es decir, $xe^{x}$. Por lo tanto, la solución general es

$$
y(x)=C_1e^{x}+C_2xe^{x}=(C_1+C_2x)e^{x}.
$$

## Observaciones

El discriminante de la ecuación característica es $(-2)^2-4(1)(1)=0$, lo que confirma la raíz doble. Ambas funciones $e^{x}$ y $xe^{x}$ están definidas para todo $x\in\mathbb{R}$; la solución general también, cualesquiera sean $C_1$ y $C_2$.

### Método alternativo: reducción de orden

Conocida la solución $y_1=e^{x}$, puede buscarse una segunda solución de la forma $y_2=u(x)e^{x}$. Al sustituir en la ecuación se obtiene $u''=0$, de donde $u(x)=x$ (salvo combinaciones con $y_1$) y, por tanto, $y_2=xe^{x}$.
