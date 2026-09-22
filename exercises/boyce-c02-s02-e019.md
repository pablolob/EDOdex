---
title: "Boyce 2.2 Ejercicio 19"
exercise-id: boyce-c02-s02-e019
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.2, ejercicio 19"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.lineal-primer-orden
prerequisitos:
  - polinomios.resolver
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c02s02i02-p046.png
---

## Enunciado

En cada uno de los problemas 17 a 20, determine (sin resolver el problema) un intervalo en el que se tenga la certeza de que la solución del problema con valor inicial dado existe.

19. $(4 - x^2)y' + 2xy = 3x^2, \quad y(-3) = 1$

## Solución

El mayor intervalo que contiene al punto inicial $x_0=-3$ y en el que los coeficientes son continuos es

$$
(-\infty,-2).
$$

En él el teorema de existencia y unicidad para ecuaciones lineales de primer orden garantiza una solución única; fuera del intervalo el teorema no garantiza la existencia.

## Resolución

La ecuación es **lineal de primer orden** y tiene la forma $P_0(x)y' + P_1(x)y = f(x)$, con coeficientes que dependen solo de $x$. Para aplicar el teorema de existencia y unicidad se escribe en la forma estándar $y' + p(x)y = g(x)$. Se divide entre $4-x^2$, operación válida para $x \ne \pm 2$:

$$
y' + \frac{2x}{4-x^2}\,y = \frac{3x^2}{4-x^2}.
$$

Así,

$$
p(x) = \frac{2x}{4-x^2}, \qquad g(x) = \frac{3x^2}{4-x^2}.
$$

Ambas funciones son continuas salvo donde se anula el denominador:

$$
4-x^2 = 0 \quad \Longleftrightarrow \quad x = -2 \quad \text{o} \quad x = 2.
$$

El teorema garantiza una solución única en el mayor intervalo abierto que contiene al punto inicial $x_0=-3$ y no contiene ninguno de los puntos de discontinuidad. Los puntos $x=-2$ y $x=2$ dividen la recta real en los intervalos $(-\infty,-2)$, $(-2,2)$ y $(2,\infty)$. El único que contiene a $-3$ es

$$
(-\infty,-2).
$$

Por tanto, el intervalo en el que la existencia está garantizada es $(-\infty,-2)$.

## Observaciones

El resultado que la sección 2.2 permite determinar es el mayor intervalo abierto que contiene al punto inicial y en el que los coeficientes son continuos; fuera de ese intervalo el teorema no garantiza la existencia. Los puntos singulares $x=\pm 2$ quedan excluidos.
