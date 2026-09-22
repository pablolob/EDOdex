---
title: "Boyce 4.1 Ejercicio 1"
exercise-id: boyce-c04-s01-e001
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.1, ejercicio 1"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
  - fundamentos
competencies:
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.linealidad
prerequisitos:
  - ecuaciones-diferenciales.existencia-unicidad
  - ecuaciones-diferenciales.linealidad
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c04s01i01-p222.png
---

## Enunciado

En cada uno de los problemas 1 a 6, determine los intervalos en los que se tenga la seguridad de que existen soluciones.

1. $y^{\mathrm{iv}} + 4y''' + 3y = x$

## Solución

La ecuación es **lineal de cuarto orden** con coeficientes constantes. Sus coeficientes en la forma estándar y el término no homogéneo son continuos en todo $\mathbb{R}$. Por tanto, las soluciones existen en el intervalo

$$
(-\infty, \infty).
$$

## Resolución

La ecuación

$$
y^{\mathrm{iv}} + 4y''' + 3y = x
$$

es **lineal de cuarto orden**. El coeficiente principal es $1$, de modo que ya está en la forma estándar

$$
y^{\mathrm{iv}} + p_1(x)\,y''' + p_2(x)\,y'' + p_3(x)\,y' + p_4(x)\,y = g(x),
$$

con $p_1(x) = 4$, $p_2(x) = 0$, $p_3(x) = 0$, $p_4(x) = 3$ y $g(x) = x$. Los términos en $y''$ y en $y'$ están ausentes, lo que equivale a coeficientes nulos.

El **teorema de existencia y unicidad** para ecuaciones lineales de orden superior garantiza que, si los coeficientes $p_1, \dots, p_4$ y el término $g$ son continuos en un intervalo abierto $I$ que contiene a $x_0$, entonces el problema de valor inicial con condiciones en $x_0$ tiene una única solución en todo $I$. Basta, entonces, con localizar los puntos donde estos coeficientes dejan de ser continuos.

Los coeficientes son constantes, $4$, $0$, $0$ y $3$, continuos en todo $\mathbb{R}$. El término $g(x) = x$ es un polinomio, también continuo en todo $\mathbb{R}$. No existe ningún punto singular. Por tanto, el intervalo de existencia es la recta real completa:

$$
(-\infty, \infty).
$$

## Observaciones

El intervalo es todo $\mathbb{R}$ porque el coeficiente principal no se anula en ningún punto y los restantes coeficientes son constantes, sin discontinuidades. Si el coeficiente principal tuviera ceros o algún coeficiente fuera discontinuo, la garantía quedaría restringida a los subintervalos abiertos entre esos puntos. La garantía cubre la existencia y la unicidad del problema de valor inicial: para cualquier $x_0 \in \mathbb{R}$ y cualesquiera condiciones iniciales, existe una única solución definida en $(-\infty, \infty)$.
