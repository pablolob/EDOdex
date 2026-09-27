---
title: "Boyce 2.3 Ejercicio 17"
exercise-id: boyce-c02-s03-e017
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.3, ejercicio 17"
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
  - ecuaciones-diferenciales.condiciones-iniciales
  - algebra.factorizacion-polinomios
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c02s03i02-p053.png
---

## Enunciado

Resuelva el problema con valor inicial

$$y' = (1 + 3x^2)/(3y^2 - 6y), \quad y(0) = 1$$

y determinar el intervalo en que la solución es válida.

Sugerencia: Para encontrar el intervalo de definición, busque los puntos en los que $dx/dy = 0$.

## Solución

La solución del problema con valor inicial, en forma implícita, es

$$
y^3 - 3y^2 = x^3 + x - 2,
$$

válida en el intervalo $(-1, 1)$.

## Resolución

La ecuación

$$
y' = \frac{1 + 3x^2}{3y^2 - 6y}
$$

admite **separación de variables**. Se escriben los diferenciales separados:

$$
(3y^2 - 6y)\,dy = (1 + 3x^2)\,dx.
$$

El factor $3y^2 - 6y = 3y(y-2)$ se anula en $y = 0$ y en $y = 2$. Esas dos rectas son soluciones constantes de la ecuación diferencial, pero no satisfacen la condición inicial $y(0) = 1$.

Integrando ambos miembros, resulta

$$
y^3 - 3y^2 = x + x^3 + C.
$$

La condición inicial $y(0) = 1$ fija la constante:

$$
1 - 3 = 0 + 0 + C \quad\Longrightarrow\quad C = -2.
$$

Por tanto, la solución implícita del problema es

$$
y^3 - 3y^2 = x^3 + x - 2.
$$

Para el intervalo de validez se sigue la sugerencia y se considera $x$ como función de $y$. De la expresión implícita,

$$
\frac{dx}{dy} = \frac{3y^2 - 6y}{1 + 3x^2} = \frac{3y(y-2)}{1 + 3x^2},
$$

que se anula en $y = 0$ y en $y = 2$. En esos valores la curva solución tiene tangente vertical y la función $y(x)$ deja de estar definida.

La solución pasa por $(0,1)$, con $y = 1$ entre $0$ y $2$. En el intervalo $0 < y < 2$ la función $F(y) = y^3 - 3y^2$ es estrictamente decreciente y su rango es $(-4, 0)$. Por consiguiente, esa rama corresponde a $g(x) = x^3 + x - 2$ en $(-4, 0)$. Como $g'(x) = 3x^2 + 1 > 0$, la función $g$ es estrictamente creciente, y el rango $(-4, 0)$ corresponde a $x \in (-1, 1)$. Los extremos son los valores en que $y$ alcanza $2$ y $0$:

$$
g(-1) = -4 = F(2), \qquad g(1) = 0 = F(0).
$$

El intervalo más largo que contiene a $x = 0$ y en el que la solución está definida es, entonces, $(-1, 1)$.

La solución se comprueba por derivación implícita. Derivando $y^3 - 3y^2 = x^3 + x - 2$ respecto de $x$,

$$
(3y^2 - 6y)\,y' = 1 + 3x^2,
$$

de donde $y' = (1 + 3x^2)/(3y^2 - 6y)$. Además, $y(0) = 1$ porque $1 - 3 = -2$ satisface la relación implícita.

## Observaciones

La solución no se despeja en forma explícita sencilla: la rama que pasa por $(0,1)$ es la raíz de $y^3 - 3y^2 = x^3 + x - 2$ que permanece en $0 < y < 2$. Las ramas con $y < 0$ o $y > 2$ también satisfacen la ecuación diferencial, pero no la condición inicial.
