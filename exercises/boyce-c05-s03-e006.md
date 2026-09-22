---
title: "Boyce 5.3 Ejercicio 6"
exercise-id: boyce-c05-s03-e006
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.3, ejercicio 6"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.punto-ordinario
prerequisitos:
  - calculo-avanzado.series-potencias
  - calculo-avanzado.convergencia
  - algebra.factorizacion-polinomios
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c05s03i01-p263.png
---

## Enunciado

En cada uno de los problemas 5 a 8, determinen una cota inferior para el radio de convergencia de las soluciones serie alrededor de cada punto que se da, $x_0$ para la ecuación diferencial dada.

6. $(x^2 - 2x - 3)y'' + xy' + 4y = 0; \quad x_0 = 4, \quad x_0 = -4, \quad x_0 = 0$

## Solución

El coeficiente de $y''$ se factoriza como

$$
x^2 - 2x - 3 = (x-3)(x+1),
$$

de modo que los puntos singulares son $x=-1$ y $x=3$. El radio de convergencia de las soluciones en serie alrededor de un punto ordinario $x_0$ es al menos la distancia de $x_0$ al punto singular más próximo. Por tanto,

$$
R_{x_0=4} \ge 1, \qquad R_{x_0=-4} \ge 3, \qquad R_{x_0=0} \ge 1.
$$

## Resolución

La ecuación es de **segundo orden** y **lineal**. Se escribe en la forma estándar

$$
y'' + \frac{x}{x^2-2x-3}\,y' + \frac{4}{x^2-2x-3}\,y = 0.
$$

Los coeficientes son cocientes de polinomios y solo dejan de ser analíticos donde se anula el denominador. La factorización

$$
x^2 - 2x - 3 = (x-3)(x+1)
$$

muestra que los puntos singulares son $x=-1$ y $x=3$. Los tres puntos dados, $x_0=4$, $x_0=-4$ y $x_0=0$, son puntos ordinarios porque no anulan el coeficiente de $y''$.

El teorema de existencia para soluciones en serie establece que, alrededor de un punto ordinario $x_0$, la solución en serie de potencias converge al menos hasta el punto singular más próximo. Como los puntos singulares son reales, la distancia en el plano complejo coincide con la distancia sobre la recta real. Así,

$$
\begin{aligned}
x_0 = 4: &\quad \min\{|4-3|,\,|4-(-1)|\} = \min\{1,5\} = 1, \\
x_0 = -4: &\quad \min\{|-4-3|,\,|-4-(-1)|\} = \min\{7,3\} = 3, \\
x_0 = 0: &\quad \min\{|0-3|,\,|0-(-1)|\} = \min\{3,1\} = 1.
\end{aligned}
$$

En consecuencia, la cota inferior del radio de convergencia es $1$ alrededor de $x_0=4$, $3$ alrededor de $x_0=-4$ y $1$ alrededor de $x_0=0$.

## Observaciones

La cota es inferior: el radio real puede ser mayor. Por ejemplo, si los coeficientes de la serie se anulan a partir de cierto índice, la solución es un polinomio y su radio de convergencia es infinito, aunque la cota calculada siga siendo válida.

La distancia se mide en el plano complejo. Si los ceros del coeficiente de $y''$ fueran complejos, habría que emplear su módulo; en este caso son reales y basta la distancia sobre la recta real.
