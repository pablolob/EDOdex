---
title: "Boyce 3.2 Ejercicio 10"
exercise-id: boyce-c03-s02-e010
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.2, ejercicio 10"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.lineal-hom
prerequisitos:
  - ecuaciones-diferenciales.existencia-unicidad
  - ecuaciones-diferenciales.linealidad
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s02i01-p152.png
---

## Enunciado

En cada uno de los problemas 7 a 12, determine el intervalo más largo en el que el problema con valor inicial dado tiene con seguridad una solución dos veces diferenciable.

10. $y'' + (\cos x)y' + 3(\ln |x|)y = 0, \quad y(2) = 3, \quad y'(2) = 1$

## Solución

El intervalo más largo es

$$
0 < x < \infty.
$$

## Resolución

La ecuación se escribe en la forma estándar

$$
y'' + P(x)y' + Q(x)y = 0,
$$

con $P(x)=\cos x$ y $Q(x)=3\ln|x|$. Es una ecuación **lineal** de **segundo orden** y **homogénea**.

El **teorema de existencia y unicidad** para ecuaciones lineales de segundo orden asegura que, si $P$ y $Q$ son continuas en un intervalo abierto $I$ que contiene al punto inicial $x_0$, entonces el problema con valor inicial tiene una única solución dos veces diferenciable en todo $I$. Por tanto, el intervalo más largo con seguridad es el mayor intervalo abierto que contiene a $x_0$ y en el que $P$ y $Q$ son continuas.

La función $P(x)=\cos x$ es continua en todo $\mathbb{R}$. La función $Q(x)=3\ln|x|$ es continua en $\mathbb{R}\setminus\{0\}$, pues su único punto de discontinuidad es $x=0$. Así, $Q$ es continua en los intervalos $(-\infty,0)$ y $(0,\infty)$.

El punto inicial $x_0=2$ pertenece a $(0,\infty)$. El mayor intervalo abierto que contiene a $2$ y en el que $P$ y $Q$ son continuas es $(0,\infty)$.

## Observaciones

La restricción del intervalo proviene únicamente del término $3(\ln|x|)y$, que no está definido en $x=0$. El término $(\cos x)y'$ es continuo en todo $\mathbb{R}$ y no limita el intervalo. El teorema garantiza la existencia de la solución en $(0,\infty)$; el intervalo no puede extenderse más allá de $x=0$.
