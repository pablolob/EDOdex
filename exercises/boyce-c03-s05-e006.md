---
title: "Boyce 3.5 Ejercicio 6"
exercise-id: boyce-c03-s05-e006
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.5, ejercicio 6"
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
  - c03s05i01-p175.png
---

## Enunciado

En cada uno de los problemas 1 a 10, halle la solución general de la ecuación diferencial dada.

6. $y'' - 6y' + 9y = 0$

## Solución

La ecuación característica $r^2-6r+9=(r-3)^2=0$ tiene la raíz repetida $r=3$. La solución general es

$$
y(x)=C_1e^{3x}+C_2xe^{3x}=(C_1+C_2x)e^{3x}.
$$

## Resolución

La ecuación es lineal, homogénea y de **coeficientes constantes**. Se buscan soluciones de la forma $y=e^{rx}$. Sus derivadas son $y'=re^{rx}$ y $y''=r^2e^{rx}$. Al sustituir,

$$
r^2e^{rx}-6re^{rx}+9e^{rx}=e^{rx}\left(r^2-6r+9\right)=0.
$$

Como $e^{rx}\ne 0$, se obtiene la **ecuación característica**

$$
r^2-6r+9=0.
$$

El polinomio es un cuadrado perfecto,

$$
r^2-6r+9=(r-3)^2=0,
$$

de modo que hay una única raíz real, $r=3$, con multiplicidad dos. Una solución es $e^{3x}$. Para una raíz repetida, la segunda solución linealmente independiente se obtiene multiplicando por $x$, es decir, $xe^{3x}$. Por lo tanto, la solución general es

$$
y(x)=C_1e^{3x}+C_2xe^{3x}=(C_1+C_2x)e^{3x}.
$$

## Observaciones

El discriminante de la ecuación característica es $(-6)^2-4(1)(9)=36-36=0$, lo que confirma la raíz doble. Ambas funciones $e^{3x}$ y $xe^{3x}$ están definidas para todo $x\in\mathbb{R}$; la solución general también, cualesquiera sean $C_1$ y $C_2$.

### Método alternativo: reducción de orden

Conocida la solución $y_1=e^{3x}$, puede buscarse una segunda solución de la forma $y_2=u(x)e^{3x}$. Al sustituir en la ecuación se obtiene $u''=0$, de donde $u(x)=x$ (salvo combinaciones con $y_1$) y, por tanto, $y_2=xe^{3x}$.
