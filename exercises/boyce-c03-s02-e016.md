---
title: "Boyce 3.2 Ejercicio 16"
exercise-id: boyce-c03-s02-e016
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.2, ejercicio 16"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - verificar.solucion
prerequisitos:
  - ecuaciones-diferenciales.existencia-unicidad
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c03s02i01-p152.png
---

## Enunciado

¿Es posible que $y = \sin(x^2)$ sea una solución sobre un intervalo que contenga a $x = 0$ de una ecuación $y'' + p(x)y' + q(x)y = 0$ con coeficientes continuos? Dé una explicación de la respuesta.

## Solución

No es posible. La función satisface

$$
y(0) = 0, \qquad y'(0) = 0,
$$

de modo que el problema de valor inicial con esos datos tiene por única solución la función idénticamente nula, $y \equiv 0$. Como $\sin(x^2)$ no es idénticamente nula, no puede ser solución de tal ecuación.

## Resolución

Sea $y = \sin(x^2)$. Sus dos primeras derivadas son

$$
y' = 2x\cos(x^2), \qquad y'' = 2\cos(x^2) - 4x^2\sin(x^2).
$$

Al evaluar en $x = 0$,

$$
y(0) = \sin 0 = 0, \qquad y'(0) = 2(0)\cos 0 = 0.
$$

Supóngase que existe un intervalo abierto $I$ que contiene a $x = 0$ y funciones continuas $p$, $q$ en $I$ tales que $y = \sin(x^2)$ satisface $y'' + p(x)y' + q(x)y = 0$ en $I$.

El **teorema de existencia y unicidad** para ecuaciones lineales de segundo orden afirma que, si $p$ y $q$ son continuas en un intervalo abierto que contiene a $x_0$, el problema

$$
y'' + p(x)y' + q(x)y = 0, \qquad y(x_0) = y_0, \qquad y'(x_0) = y_0'
$$

tiene exactamente una solución en ese intervalo. Se aplica con $x_0 = 0$, $y_0 = 0$ y $y_0' = 0$. La función idénticamente nula, $y(x) \equiv 0$, es solución de la ecuación y cumple esas dos condiciones iniciales. Por la unicidad, es la única.

Sin embargo, $\sin(x^2)$ no es idénticamente nula en $I$: por ejemplo, $\sin(x^2) > 0$ para todo $x$ real con $0 < x^2 < \pi$, es decir, con $0 < |x| < \sqrt{\pi}$. Por tanto, $\sin(x^2)$ no coincide con la solución trivial y la hipótesis conduce a una contradicción. En consecuencia, $y = \sin(x^2)$ no puede ser solución de una ecuación $y'' + p(x)y' + q(x)y = 0$ con coeficientes continuos en ningún intervalo que contenga a $x = 0$.

## Observaciones

La continuidad de $p$ y $q$ es la hipótesis que permite invocar el teorema de existencia y unicidad; sin ella el razonamiento no es aplicable.

### Método alternativo: evaluación directa en $x = 0$

Si $y = \sin(x^2)$ fuera solución, la ecuación debería cumplirse en $x = 0$. Allí $y(0) = y'(0) = 0$ y $y''(0) = 2\cos 0 = 2$, luego

$$
y''(0) + p(0)y'(0) + q(0)y(0) = 2 + 0 + 0 = 2 \ne 0.
$$

La contradicción es inmediata y no requiere el teorema de unicidad. Este camino solo muestra que la ecuación falla en un punto; el argumento principal, además, explica por qué ninguna función con datos iniciales nulos puede ser solución no trivial.
