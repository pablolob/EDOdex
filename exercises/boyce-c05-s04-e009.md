---
title: "Boyce 5.4 Ejercicio 9"
exercise-id: boyce-c05-s04-e009
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.4, ejercicio 9"
topics:
  - frobenius
competencies:
  - clasificar.punto-singular-regular
  - clasificar.punto-singular-irregular
prerequisitos:
  - algebra.factorizacion-polinomios
  - calculo-avanzado.series-potencias
difficulty:
  conceptual: 1
  technical: 1
solution-status: draft
statement-status: accepted
source-images:
  - c05s04i01-p270.png
---

## Enunciado

En cada uno de los problemas 1 a 18, halle todos los puntos singulares de la ecuación dada y determine si cada uno de ellos es singular o irregular.

9. $(x + 2)^2(x - 1)y'' + 3(x - 1)y' - 2(x + 2)y = 0$

## Solución

La ecuación tiene dos puntos singulares: $x=-2$ es un **punto singular irregular** y $x=1$ es un **punto singular regular**.

## Resolución

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. Para $x\ne -2$ y $x\ne 1$, al dividir por el coeficiente de $y''$, $P(x)=(x+2)^2(x-1)$, resulta

$$
p(x)=\frac{3(x-1)}{(x+2)^2(x-1)},\qquad q(x)=-\frac{2(x+2)}{(x+2)^2(x-1)}.
$$

Los puntos singulares son los ceros de $P$, es decir, $x=-2$ y $x=1$. En cada uno se examinan los productos $(x-x_0)p(x)$ y $(x-x_0)^2q(x)$: el punto es regular si ambos son analíticos en $x_0$, e irregular en caso contrario.

En $x_0=-2$,

$$
(x+2)\,p(x)=\frac{3}{x+2},\qquad (x+2)^2\,q(x)=-\frac{2(x+2)}{x-1}.
$$

El segundo producto es analítico en $x=-2$, pero el primero presenta un polo allí y no es analítico. Basta que falle una condición, de modo que $x=-2$ es un **punto singular irregular**.

En $x_0=1$,

$$
(x-1)\,p(x)=\frac{3(x-1)}{(x+2)^2},\qquad (x-1)^2\,q(x)=-\frac{2(x-1)}{x+2}.
$$

Ambos productos son funciones racionales definidas y finitas en $x=1$ (valen $0$ y $0$, respectivamente), luego son analíticas allí. Se satisfacen las dos condiciones y $x=1$ es un **punto singular regular**.

## Observaciones

Criterio general para la clasificación: escrito como $P(x)y''+Q(x)y'+R(x)y=0$, un punto singular $x_0$ es **regular** si $(x-x_0)\frac{Q}{P}$ y $(x-x_0)^2\frac{R}{P}$ son analíticas en $x_0$; en caso contrario es **irregular**.

El factor $(x-1)$ se cancela en $p(x)$, de modo que $p$ no tiene singularidad en $x=1$; la única singularidad de los coeficientes en ese punto proviene de $q$. Todos los puntos distintos de $x=-2$ y $x=1$ son puntos ordinarios.
