---
title: "Boyce 2.8 Ejercicio 14"
exercise-id: boyce-c02-s08-e014
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.8, ejercicio 14"
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
  - ecuaciones-diferenciales.condiciones-iniciales
  - polinomios.resolver
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c02s08i02-p102.png
---

## Enunciado

En los problemas 13 y 14, resuelva el problema con valor inicial dado y determine, por lo menos aproximadamente, en dónde es válida la solución.

14. $(9x^2 + y - 1) \,dx - (4y - x) \,dy = 0, \quad y(1) = 0$

## Solución

La ecuación es **exacta**. La solución del problema con valor inicial, en forma implícita, es

$$
3x^3 + xy - x - 2y^2 = 2,
$$

y es válida en el intervalo

$$
x > x_0, \qquad x_0 \approx 0.9846,
$$

donde $x_0$ es la única raíz real de $24x^3 + x^2 - 8x - 16 = 0$.

## Resolución

Se escribe la ecuación en la forma $M(x,y)\,dx + N(x,y)\,dy = 0$. Al incorporar el signo del segundo término,

$$
M(x,y) = 9x^2 + y - 1, \qquad N(x,y) = -(4y - x) = x - 4y.
$$

Se aplica la **prueba de exactitud**, que compara las derivadas parciales cruzadas:

$$
\frac{\partial M}{\partial y} = 1, \qquad \frac{\partial N}{\partial x} = 1.
$$

Ambas derivadas coinciden, de modo que la ecuación es **exacta**. Existe entonces una **función potencial** $F(x,y)$ con

$$
\frac{\partial F}{\partial x} = 9x^2 + y - 1, \qquad \frac{\partial F}{\partial y} = x - 4y.
$$

Se integra la primera igualdad respecto de $x$, manteniendo $y$ constante:

$$
F(x,y) = \int (9x^2 + y - 1)\,dx = 3x^3 + xy - x + g(y),
$$

donde $g(y)$ es la función arbitraria de integración. Se deriva este resultado respecto de $y$ y se iguala a $N(x,y)$:

$$
\frac{\partial F}{\partial y} = x + g'(y) = x - 4y
\quad\Longrightarrow\quad
g'(y) = -4y.
$$

Al integrar, $g(y) = -2y^2$. La función potencial es

$$
F(x,y) = 3x^3 + xy - x - 2y^2,
$$

y la solución general de la ecuación exacta se escribe de forma implícita como $F(x,y) = C$.

La condición inicial $y(1) = 0$ fija la constante:

$$
F(1,0) = 3(1)^3 + 0 - 1 - 0 = 2
\quad\Longrightarrow\quad
C = 2.
$$

Por tanto, la solución del problema con valor inicial, en forma implícita, es

$$
3x^3 + xy - x - 2y^2 = 2.
$$

Para determinar el intervalo de validez se despeja $y$ en función de $x$. La relación implícita es cuadrática en $y$:

$$
2y^2 - xy - (3x^3 - x - 2) = 0,
$$

de donde

$$
y = \frac{x \pm \sqrt{24x^3 + x^2 - 8x - 16}}{4}.
$$

La condición $y(1) = 0$ selecciona la rama con el signo menos, pues en $x = 1$ el radicando vale $1$ y $\dfrac{1 - 1}{4} = 0$:

$$
y = \frac{x - \sqrt{24x^3 + x^2 - 8x - 16}}{4}.
$$

La raíz cuadrada exige $R(x) = 24x^3 + x^2 - 8x - 16 \ge 0$. El polinomio $R$ tiene una única raíz real, que se aproxima numéricamente:

$$
R(x) = 0
\quad\Longrightarrow\quad
x = x_0 \approx 0.9846.
$$

Como $R(x) < 0$ para $x < x_0$ y $R(x) > 0$ para $x > x_0$, la rama que contiene al punto inicial está definida para $x \ge x_0$ y es derivable para $x > x_0$. El extremo $x_0$ es también el punto donde la tangente de la curva solución es vertical: allí $x - 4y = 0$ y, sustituyendo $y = x/4$ en la solución implícita, se obtiene de nuevo $R(x) = 0$.

En consecuencia, el intervalo máximo de validez, que contiene a $x = 1$, es

$$
(x_0, \infty), \qquad x_0 \approx 0.9846.
$$

La solución se comprueba por derivación implícita de $3x^3 + xy - x - 2y^2 = 2$:

$$
(9x^2 + y - 1) + (x - 4y)\,y' = 0
\quad\Longrightarrow\quad
(9x^2 + y - 1)\,dx + (x - 4y)\,dy = 0,
$$

que es la ecuación original, ya que $(x - 4y)\,dy = -(4y - x)\,dy$. Además, en $(1,0)$ se cumple $3 - 1 = 2$.

## Observaciones

La función potencial es un polinomio, definido y suave en todo $\mathbb{R}^2$, de modo que no hay soluciones singulares ni ramas perdidas: la única restricción proviene del signo del radicando al despejar $y$.

El extremo $x_0$ no es un punto donde los coeficientes $M$ y $N$ dejen de estar definidos, sino un punto de tangente vertical donde las dos ramas de la curva implícita se encuentran. Por eso el intervalo de validez es abierto en $x_0$.

La solución también puede presentarse en forma explícita con la rama elegida:

$$
y(x) = \frac{x - \sqrt{24x^3 + x^2 - 8x - 16}}{4}, \qquad x > x_0.
$$
