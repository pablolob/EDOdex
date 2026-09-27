---
title: "Boyce 2.3 Ejercicio 14"
exercise-id: boyce-c02-s03-e014
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.3, ejercicio 14"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.variables-separables
  - aplicar-condiciones.problema-valor-inicial
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.separable
prerequisitos:
  - integracion.directa
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c02s03i02-p053.png
---

## Enunciado

Para cada uno de los problemas 9 a 16, encuentre la solución del problema con valor inicial dado en forma explícita y determine (por lo menos aproximadamente) el intervalo en que está definida.

14. $y' = x(x^2 + 1)/4y^3, \quad y(0) = -1/\sqrt{2}$

## Solución

La ecuación es **de primer orden** y **separable**. El problema con valor inicial tiene la solución

$$
y(x) = -\sqrt{\frac{x^2+1}{2}},
$$

definida en el intervalo $(-\infty, \infty)$.

## Resolución

La ecuación admite **separación de variables**. Se escribe la derivada como cociente de diferenciales y se multiplica por $4y^3$ y por $dx$:

$$
4y^3\,dy = x(x^2+1)\,dx.
$$

Esta reescritura supone $y \neq 0$; en la ecuación original el miembro derecho no está definido para $y = 0$, de modo que $y = 0$ no es solución y no se pierde ninguna.

Integrando ambos miembros,

$$
y^4 = \frac{x^4}{4} + \frac{x^2}{2} + C = \frac{(x^2+1)^2}{4} + C - \frac{1}{4}.
$$

Se renombra la constante arbitraria mediante $C_1 = C - \tfrac14$:

$$
y^4 = \frac{(x^2+1)^2}{4} + C_1.
$$

La condición inicial $y(0) = -1/\sqrt{2}$ da $y(0)^4 = 1/4$; evaluando en $x = 0$,

$$
\frac{1}{4} = \frac{1}{4} + C_1 \quad\Longrightarrow\quad C_1 = 0.
$$

Por tanto,

$$
y^4 = \frac{(x^2+1)^2}{4}.
$$

Como $y^2 \ge 0$, se toma la raíz cuadrada positiva del miembro derecho, $y^2 = \frac{x^2+1}{2}$, y el signo lo fija la condición inicial: $y(0) < 0$ selecciona la rama negativa,

$$
y(x) = -\sqrt{\frac{x^2+1}{2}}.
$$

La solución se comprueba por derivación implícita de $y^2 = \frac{x^2+1}{2}$. Derivando respecto de $x$,

$$
2y\,y' = x \quad\Longrightarrow\quad y' = \frac{x}{2y}.
$$

Como $x^2+1 = 2y^2$, el miembro derecho de la ecuación dada se reduce a

$$
\frac{x(x^2+1)}{4y^3} = \frac{x\cdot 2y^2}{4y^3} = \frac{x}{2y},
$$

que coincide con $y'$.

El radicando $\frac{x^2+1}{2}$ es positivo para todo $x$, y $y$ nunca se anula. La solución está definida y es derivable en todo $\mathbb{R}$; el intervalo máximo de validez es $(-\infty, \infty)$.

## Observaciones

La ecuación es no lineal, de modo que no se aplica el principio de superposición; la no linealidad no impide, sin embargo, la separación de variables. La rama negativa queda determinada por el signo de $y(0)$, y la rama positiva $\sqrt{(x^2+1)/2}$ es la otra solución del problema $y(0) = 1/\sqrt{2}$. Al despejar $y$ de $y^4$ se pierde la información del signo, que debe recuperarse de la condición inicial.
