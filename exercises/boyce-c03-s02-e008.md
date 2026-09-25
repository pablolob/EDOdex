---
title: "Boyce 3.2 Ejercicio 8"
exercise-id: boyce-c03-s02-e008
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.2, ejercicio 8"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.lineal-no-hom
prerequisitos:
  - ecuaciones-diferenciales.existencia-unicidad
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s02i01-p152.png
---

## Enunciado

En cada uno de los problemas 7 a 12, determine el intervalo más largo en el que el problema con valor inicial dado tiene con seguridad una solución dos veces diferenciable.

8. $(x - 1)y'' - 3xy' + 4y = \sin x, \quad y(-2) = 2, \quad y'(-2) = 1$

## Solución

La ecuación es **lineal** y de **segundo orden**. En forma estándar sus coeficientes son continuos salvo en $x = 1$. El intervalo más largo que contiene al punto inicial $x_0 = -2$ es

$$
(-\infty, 1).
$$

## Resolución

Se escribe la ecuación en la forma estándar $y'' + p(x)y' + q(x)y = g(x)$. Se divide entre el coeficiente de $y''$, que es $x - 1$, para $x \ne 1$:

$$
y'' - \frac{3x}{x - 1}\,y' + \frac{4}{x - 1}\,y = \frac{\sin x}{x - 1}.
$$

Los coeficientes son

$$
p(x) = -\frac{3x}{x - 1}, \qquad q(x) = \frac{4}{x - 1}, \qquad g(x) = \frac{\sin x}{x - 1}.
$$

Las funciones $3x$, $4$ y $\sin x$ son continuas en todo $\mathbb{R}$; los únicos denominadores se anulan en $x = 1$. Por tanto, $p$, $q$ y $g$ son continuas en los intervalos $(-\infty, 1)$ y $(1, \infty)$, y no lo son en $x = 1$.

El **teorema de existencia y unicidad** para ecuaciones lineales de segundo orden asegura que el problema con valor inicial tiene una única solución dos veces diferenciable en todo intervalo abierto que contenga al punto inicial $x_0 = -2$ y en el que los coeficientes sean continuos. Como $-2 < 1$, el intervalo más largo con esa propiedad es $(-\infty, 1)$.

## Observaciones

En $x = 1$ se anula el coeficiente de $y''$; ese punto es singular y la solución no está garantizada a través de él. El intervalo es abierto porque el teorema exige continuidad en un intervalo abierto, de modo que $x = 1$ no se incluye. Como la condición inicial se da en $x = -2$, a la izquierda de la singularidad, el intervalo es $(-\infty, 1)$ y no $(1, \infty)$.
