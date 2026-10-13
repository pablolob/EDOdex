---
title: "Boyce 3.5 Ejercicio 4"
exercise-id: boyce-c03-s05-e004
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.5, ejercicio 4"
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

4. $4y'' + 12y' + 9y = 0$

## Solución

La ecuación característica $4r^2+12r+9=(2r+3)^2=0$ tiene la raíz repetida $r=-\tfrac{3}{2}$. La solución general es

$$
y(x)=C_1e^{-3x/2}+C_2xe^{-3x/2}=(C_1+C_2x)e^{-3x/2}.
$$

## Resolución

La ecuación es lineal, homogénea y de **coeficientes constantes**. Se buscan soluciones de la forma $y=e^{rx}$. Sus derivadas son $y'=re^{rx}$ y $y''=r^2e^{rx}$. Al sustituir,

$$
4r^2e^{rx}+12re^{rx}+9e^{rx}=e^{rx}\left(4r^2+12r+9\right)=0.
$$

Como $e^{rx}\ne 0$, se obtiene la **ecuación característica**

$$
4r^2+12r+9=0.
$$

El polinomio es un cuadrado perfecto,

$$
4r^2+12r+9=(2r+3)^2=0,
$$

de modo que hay una única raíz real, $r=-\tfrac{3}{2}$, con multiplicidad dos. Una solución es $e^{-3x/2}$. Para una raíz repetida, la segunda solución linealmente independiente se obtiene multiplicando por $x$, es decir, $xe^{-3x/2}$. Por lo tanto, la solución general es

$$
y(x)=C_1e^{-3x/2}+C_2xe^{-3x/2}=(C_1+C_2x)e^{-3x/2}.
$$

## Observaciones

El discriminante de la ecuación característica es $12^2-4(4)(9)=144-144=0$, lo que confirma la raíz doble. Ambas funciones $e^{-3x/2}$ y $xe^{-3x/2}$ están definidas para todo $x\in\mathbb{R}$; la solución general también, cualesquiera sean $C_1$ y $C_2$.

### Método alternativo: reducción de orden

Conocida la solución $y_1=e^{-3x/2}$, puede buscarse una segunda solución de la forma $y_2=u(x)e^{-3x/2}$. Al sustituir en la ecuación se obtiene $u''=0$, de donde $u(x)=x$ (salvo combinaciones con $y_1$) y, por tanto, $y_2=xe^{-3x/2}$.
