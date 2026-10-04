---
title: "Boyce 3.4 Ejercicio 26"
exercise-id: boyce-c03-s04-e026
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.4, ejercicio 26"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - verificar.solucion
prerequisitos:
  - algebra.numeros-complejos
  - ecuaciones-diferenciales.linealidad
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s04i01-p166.png
---

## Enunciado

Sean las funciones con valores reales $p$ y $q$ continuas sobre el intervalo abierto $I$ y sea $y = \phi(x) = u(x) + iv(x)$ una solución con valores complejos de

$$y'' + p(x)y' + q(x)y = 0, \tag{i}$$

en donde $u$ y $v$ son funciones con valores reales. Demuestre que $u$ y $v$ también son soluciones de (i). Sugerencia: Sustituya $y = \phi(x)$ en (i) y separe las partes real e imaginaria.

## Solución

Las partes real e imaginaria $u$ y $v$ de la solución compleja $\phi$ satisfacen la misma ecuación (i):

$$
u'' + p(x)u' + q(x)u = 0, \qquad v'' + p(x)v' + q(x)v = 0.
$$

## Resolución

Como $\phi = u + iv$ es solución de (i), al sustituirla se cumple

$$
\phi'' + p(x)\phi' + q(x)\phi = 0.
$$

Las derivadas de $\phi$ se obtienen derivando término a término su parte real y su parte imaginaria:

$$
\phi' = u' + iv', \qquad \phi'' = u'' + iv''.
$$

Al reemplazar en la ecuación y agrupar las partes real e imaginaria, resulta

$$
\begin{aligned}
0 &= \phi'' + p(x)\phi' + q(x)\phi \\
&= \left(u'' + iv''\right) + p(x)\left(u' + iv'\right) + q(x)\left(u + iv\right) \\
&= \left(u'' + p(x)u' + q(x)u\right) + i\left(v'' + p(x)v' + q(x)v\right).
\end{aligned}
$$

Aquí se usa que $p$ y $q$ toman valores reales, de modo que no mezclan las partes real e imaginaria. Un número complejo es cero si y solo si su parte real y su parte imaginaria son ambas cero. Por tanto,

$$
u'' + p(x)u' + q(x)u = 0, \qquad v'' + p(x)v' + q(x)v = 0.
$$

Es decir, $u$ y $v$ son soluciones con valores reales de (i) sobre $I$. La continuidad de $p$ y $q$ en $I$ garantiza que las expresiones anteriores están definidas en todo el intervalo.

## Observaciones

La hipótesis de que $p$ y $q$ son reales es esencial. Si los coeficientes fueran complejos, la agrupación de partes real e imaginaria no produciría dos ecuaciones separadas y la conclusión fallaría.

El recíproco también es válido: si $u$ y $v$ son soluciones reales de (i), el mismo cálculo muestra que $\phi = u + iv$ es una solución compleja. Esto es lo que permite, en la sección, obtener las dos soluciones reales $e^{\alpha x}\cos(\beta x)$ y $e^{\alpha x}\sin(\beta x)$ a partir de una solución compleja de la ecuación característica.
