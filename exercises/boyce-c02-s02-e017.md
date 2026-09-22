---
title: "Boyce 2.2 Ejercicio 17"
exercise-id: boyce-c02-s02-e017
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.2, ejercicio 17"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.lineal-primer-orden
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c02s02i02-p046.png
---

## Enunciado

En cada uno de los problemas 17 a 20, determine (sin resolver el problema) un intervalo en el que se tenga la certeza de que la solución del problema con valor inicial dado existe.

17. $(x - 3)y' + (\ln x)y = 2x, \quad y(1) = 2$

## Solución

La ecuación es **lineal de primer orden**. Escrita en forma estándar,

$$
y' + \frac{\ln x}{x-3}\,y = \frac{2x}{x-3},
$$

sus coeficientes son continuos en $(0,3)$ y en $(3,\infty)$. Como la condición inicial se da en $x=1$, el intervalo de validez es

$$
0<x<3.
$$

Fuera de este intervalo el teorema no garantiza la existencia de la solución; en particular, tampoco la garantiza en ningún intervalo que contenga el punto singular $x=3$.

## Resolución

Se escribe la ecuación en la forma estándar de una ecuación lineal de primer orden. Como $x-3\ne 0$ en una vecindad de $x=1$, se divide entre $x-3$:

$$
y' + \frac{\ln x}{x-3}\,y = \frac{2x}{x-3}.
$$

Así, $p(x)=\dfrac{\ln x}{x-3}$ y $g(x)=\dfrac{2x}{x-3}$.

El teorema de existencia y unicidad para ecuaciones lineales afirma que, si $p$ y $g$ son continuas en un intervalo abierto $I$ que contiene al punto inicial $x_0$, el problema de valor inicial tiene una única solución en $I$.

Se localizan los puntos donde los coeficientes dejan de ser continuos. El logaritmo $\ln x$ exige $x>0$, y el denominador $x-3$ se anula en $x=3$. Por tanto, $p$ y $g$ son continuas en los intervalos $(0,3)$ y $(3,\infty)$.

La condición inicial se impone en $x_0=1$, que pertenece a $(0,3)$. El mayor intervalo abierto que contiene a $x_0$ y en el que los coeficientes son continuos es $(0,3)$. Por el teorema, el problema tiene una única solución en ese intervalo:

$$
0<x<3.
$$

En $x=3$ los coeficientes presentan una discontinuidad y la ecuación deja de estar definida, de modo que la solución no puede prolongarse a través de ese punto. Tampoco está definida para $x\le 0$, donde $\ln x$ no existe. Por tanto, fuera de $(0,3)$ el teorema no garantiza la existencia de la solución; en particular, no la garantiza en ningún intervalo que contenga $x=3$, como $(3,\infty)$.

## Observaciones

El intervalo de validez es el mayor intervalo abierto que contiene al punto inicial y en el que los coeficientes de la forma estándar son continuos. Los puntos $x=0$ (por $\ln x$) y $x=3$ (por el denominador) quedan excluidos. Si la condición inicial se hubiera dado en $x>3$, el intervalo de validez habría sido $(3,\infty)$.
