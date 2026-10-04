---
title: "Boyce 2.8 Ejercicio 13"
exercise-id: boyce-c02-s08-e013
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.8, ejercicio 13"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.ecuaciones-exactas
  - aplicar-condiciones.problema-valor-inicial
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.exacta
prerequisitos:
  - calculo-avanzado.derivadas-parciales
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c02s08i02-p102.png
---

## Enunciado

En los problemas 13 y 14, resuelva el problema con valor inicial dado y determine, por lo menos aproximadamente, en dónde es válida la solución.

13. $(2x - y) \,dx + (2y - x) \,dy = 0, \quad y(1) = 3$

## Solución

La ecuación es **exacta**. La solución del problema con valor inicial, en forma implícita, es

$$
x^2 - xy + y^2 = 7.
$$

La solución es válida en el intervalo

$$
-\sqrt{\frac{28}{3}} < x < \sqrt{\frac{28}{3}},
$$

es decir, aproximadamente $-3.06 < x < 3.06$.

## Resolución

Se escribe la ecuación en la forma $M(x,y)\,dx + N(x,y)\,dy = 0$, con

$$
M(x,y) = 2x - y, \qquad N(x,y) = 2y - x.
$$

Se aplica el **test de exactitud**, que compara las derivadas parciales cruzadas:

$$
\frac{\partial M}{\partial y} = -1, \qquad \frac{\partial N}{\partial x} = -1.
$$

Las derivadas coinciden, de modo que la ecuación es **exacta** y existe una función potencial $F(x,y)$ con

$$
\frac{\partial F}{\partial x} = M(x,y) = 2x - y, \qquad \frac{\partial F}{\partial y} = N(x,y) = 2y - x.
$$

Se integra la primera igualdad respecto de $x$, manteniendo $y$ constante:

$$
F(x,y) = \int (2x - y)\,dx = x^2 - xy + g(y),
$$

donde $g(y)$ es la función arbitraria de integración.

Se deriva este resultado respecto de $y$ y se iguala a $N(x,y)$:

$$
\frac{\partial F}{\partial y} = -x + g'(y) = 2y - x
\quad\Longrightarrow\quad
g'(y) = 2y.
$$

Al integrar, $g(y) = y^2$. La solución general de la ecuación exacta es

$$
x^2 - xy + y^2 = C.
$$

La condición inicial $y(1) = 3$ fija la constante:

$$
C = 1^2 - (1)(3) + 3^2 = 7.
$$

Por tanto, la solución del problema con valor inicial es $x^2 - xy + y^2 = 7$. Al despejar $y$,

$$
y = \frac{x \pm \sqrt{28 - 3x^2}}{2},
$$

y la condición $y(1) = 3$ selecciona la rama con el signo positivo:

$$
y = \frac{x + \sqrt{28 - 3x^2}}{2}.
$$

Para el intervalo de validez se observa que la solución deja de ser una función derivable cuando el coeficiente de $dy$ se anula, esto es, cuando $N(x,y) = 2y - x = 0$. Al sustituir $y = x/2$ en la curva solución,

$$
x^2 - x\left(\frac{x}{2}\right) + \left(\frac{x}{2}\right)^2 = 7
\quad\Longrightarrow\quad
\frac{3}{4}x^2 = 7
\quad\Longrightarrow\quad
x = \pm\sqrt{\frac{28}{3}}.
$$

En esos puntos la tangente es vertical. Como la condición inicial corresponde a $x = 1$, el intervalo maximal que la contiene es

$$
-\sqrt{\frac{28}{3}} < x < \sqrt{\frac{28}{3}},
$$

equivalente a $\lvert x \rvert < \dfrac{2\sqrt{21}}{3} \approx 3.06$.

## Observaciones

La curva solución $x^2 - xy + y^2 = 7$ es una elipse centrada en el origen. Cada una de sus ramas recorre un arco entre los dos puntos de tangente vertical; el intervalo de validez corresponde al arco que contiene al punto inicial $(1,3)$.

En los extremos del intervalo la derivada de la solución crece sin cota, de modo que la solución no puede prolongarse más allá de ellos.
