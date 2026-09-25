---
title: "Boyce 3.2 Ejercicio 9"
exercise-id: boyce-c03-s02-e009
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.2, ejercicio 9"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.linealidad
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

9. $x(x - 4)y'' + 3xy' + 4y = 2, \quad y(3) = 0, \quad y'(3) = -1$

## Solución

La ecuación es **lineal de segundo orden**. Por el **teorema de existencia y unicidad**, el intervalo más largo en el que el problema con valor inicial tiene con seguridad una solución dos veces diferenciable es

$$
\boxed{\,0<x<4\,}.
$$

## Resolución

El problema es un valor inicial de una ecuación lineal de segundo orden. El teorema de existencia y unicidad para este tipo de ecuaciones afirma que, si las funciones $p$, $q$ y $g$ son continuas en un intervalo abierto $I$ que contiene a $x_0$, entonces el problema

$$
y'' + p(x)y' + q(x)y = g(x), \qquad y(x_0)=y_0, \qquad y'(x_0)=y_0'
$$

tiene una única solución dos veces diferenciable en $I$. Por tanto, el intervalo buscado es el mayor intervalo abierto que contiene a $x_0$ y en el que los tres coeficientes son continuos.

Se escribe primero la ecuación en la forma estándar, con coeficiente $1$ en $y''$. Al dividir entre $x(x-4)$ resulta

$$
y'' + \frac{3x}{x(x-4)}\,y' + \frac{4}{x(x-4)}\,y = \frac{2}{x(x-4)}.
$$

De aquí,

$$
p(x)=\frac{3x}{x(x-4)}=\frac{3}{x-4}, \qquad q(x)=\frac{4}{x(x-4)}, \qquad g(x)=\frac{2}{x(x-4)}.
$$

El denominador $x(x-4)$ se anula en $x=0$ y $x=4$, y el denominador $x-4$ se anula en $x=4$. Por tanto, los únicos puntos donde alguna de las tres funciones puede ser discontinua son $x=0$ y $x=4$. El punto inicial es $x_0=3$, que pertenece al intervalo $(0,4)$ y no a ningún otro intervalo mayor libre de discontinuidades.

En consecuencia, el mayor intervalo abierto que contiene a $x_0=3$ y en el que $p$, $q$ y $g$ son continuas es $(0,4)$. El teorema garantiza entonces una única solución dos veces diferenciable en ese intervalo, y no más allá.

## Observaciones

El teorema asegura la existencia y la unicidad de la solución, pero no proporciona su expresión explícita.

El intervalo no puede ampliarse más allá de $x=0$ ni de $x=4$, porque en esos puntos los coeficientes dejan de ser continuos y el teorema no garantiza nada.

Aunque el término $\frac{3x}{x(x-4)}$ se simplifica a $\frac{3}{x-4}$ para $x\ne 0$, los coeficientes $q$ y $g$ siguen teniendo denominador $x(x-4)$; por eso $x=0$ continúa siendo una frontera del intervalo.
