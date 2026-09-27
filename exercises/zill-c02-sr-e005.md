---
title: "Zill Repaso C2 Ejercicio 5"
exercise-id: zill-c02-sr-e005
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 2, ejercicio 5"
language: es
competencies:
  - clasificar.orden
  - clasificar.linealidad
solution-status: draft
statement-status: accepted
topics:
  - primer-orden
source-images:
  - c02sri01-p094.png
difficulty:
  conceptual: 2
  technical: 1
---

## Enunciado

**Responda los problemas 1-12 sin consultar las respuestas del libro. Llene los espacios en blanco o responda si es verdadero o falso.**

Un ejemplo de una ecuación diferencial no lineal de tercer orden en forma normal es ________

## Solución

Un ejemplo es

$$
y''' = y^2.
$$

La ecuación es de **tercer orden**, está en **forma normal** y es **no lineal**.

## Resolución

Se recuerdan las tres nociones que debe satisfacer el ejemplo.

El orden de una ecuación diferencial es el de la derivada de mayor orden que aparece en ella. Una ecuación de orden $n$ está en forma normal cuando se resuelve explícitamente para la derivada de mayor orden,

$$
y^{(n)} = f\!\left(x, y, y', \dots, y^{(n-1)}\right).
$$

Una ecuación es lineal cuando puede escribirse como

$$
a_n(x)y^{(n)} + a_{n-1}(x)y^{(n-1)} + \dots + a_0(x)y = g(x),
$$

donde los coeficientes $a_k(x)$ y el término $g(x)$ dependen solo de $x$; en caso contrario es no lineal.

Se propone la ecuación

$$
y''' = y^2.
$$

La derivada de mayor orden es $y'''$, de modo que la ecuación es de tercer orden. La derivada $y'''$ está despejada, por lo que la ecuación está en forma normal con $f(x, y, y', y'') = y^2$. El miembro derecho no es lineal en $y$, ya que contiene el producto $y \cdot y$; por tanto, la ecuación es no lineal. La no linealidad se confirma con el fallo de la superposición: si $y_1''' = y_1^2$ y $y_2''' = y_2^2$, entonces para $y = y_1 + y_2$ se tiene

$$
y''' = y_1''' + y_2''' = y_1^2 + y_2^2,
$$

mientras que la ecuación exigiría $y''' = (y_1 + y_2)^2 = y_1^2 + 2y_1y_2 + y_2^2$; ambas expresiones coinciden solo en el caso particular $2y_1y_2 = 0$.

## Observaciones

La respuesta no es única: cualquier elección de $f$ no lineal en $y, y', y''$ proporciona un ejemplo válido. Otros ejemplos son $y''' = (y')^2$, $y''' = \sin y$ y $y''' = y\,y''$.

Una ecuación que no está despejada para la derivada de mayor orden, como $(y'')^2 + y''' = y$, sí puede llevarse a forma normal escribiendo $y''' = y - (y'')^2$.
