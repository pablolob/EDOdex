---
title: "Boyce 4.1 Ejercicio 2"
exercise-id: boyce-c04-s01-e002
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.1, ejercicio 2"
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
  conceptual: 2
  technical: 1
source-images:
  - c04s01i01-p222.png
---

## Enunciado

En cada uno de los problemas 1 a 6, determine los intervalos en los que se tenga la seguridad de que existen soluciones.

2. $xy''' + (\sin x)y'' + 3y = \cos x$

## Solución

La ecuación es de **tercer orden** y **lineal**. Sus coeficientes en forma estándar son continuos salvo en $x = 0$. Por tanto, existen soluciones en cada uno de los intervalos

$$
(-\infty, 0) \qquad \text{y} \qquad (0, \infty).
$$

## Resolución

La ecuación es de **tercer orden** y **lineal**. Para llevarla a la forma estándar se divide entre el coeficiente de $y'''$, lo cual es válido para $x \ne 0$:

$$
y''' + \frac{\sin x}{x}\,y'' + \frac{3}{x}\,y = \frac{\cos x}{x}.
$$

El **teorema de existencia y unicidad** para ecuaciones lineales de orden $n$ garantiza que, si los coeficientes de la forma estándar son continuos en un intervalo abierto $I$ que contiene a $x_0$, entonces el problema de valor inicial con condiciones en $x_0$ tiene una única solución en todo $I$. Basta, entonces, con localizar los puntos donde los coeficientes dejan de ser continuos.

Los coeficientes de la forma estándar son $\dfrac{\sin x}{x}$, $\dfrac{3}{x}$ y $\dfrac{\cos x}{x}$. Los tres son continuos para todo $x \ne 0$. En $x = 0$ los coeficientes $\dfrac{3}{x}$ y $\dfrac{\cos x}{x}$ no están definidos; la discontinuidad de $\dfrac{3}{x}$ no es evitable. El único punto singular es, por tanto,

$$
S = \{0\}.
$$

Fuera de $S$ los coeficientes son continuos. Los intervalos más grandes en los que se asegura la existencia de soluciones son las componentes conexas de $\mathbb{R} \setminus S$, es decir, $(-\infty, 0)$ y $(0, \infty)$.

## Observaciones

El punto $x = 0$ es singular porque allí se anula el coeficiente de $y'''$ y la ecuación no admite la forma estándar. Aunque $\dfrac{\sin x}{x} \to 1$ cuando $x \to 0$, esa discontinuidad evitable no elimina la de $\dfrac{3}{x}$ y $\dfrac{\cos x}{x}$, de modo que $x = 0$ queda excluido. El teorema garantiza solución única en cada intervalo para cualquier condición inicial fijada en un punto $x_0$ interior, pero no dice nada sobre el comportamiento en los extremos, que quedan fuera por ser intervalos abiertos.
