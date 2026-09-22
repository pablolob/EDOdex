---
title: "Boyce 4.3 Ejercicio 6"
exercise-id: boyce-c04-s03-e006
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.3, ejercicio 6"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
  - resolver-analiticamente.coeficientes-indeterminados
hidden-competencies:
  - clasificar.lineal-no-hom
  - seleccionar-metodo.coeficientes-indeterminados
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.factorizacion-polinomios
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c04s03i01-p234.png
---

## Enunciado

En cada uno de los problemas 1 a 8, halle la solución general de la ecuación diferencial dada.

6. $y^{(iv)} + 2y'' + y = 3 + \cos 2x$

## Solución

$$
y = (c_1 + c_2 x)\cos x + (c_3 + c_4 x)\sin x + 3 + \frac{1}{9}\cos 2x.
$$

## Resolución

La ecuación es **lineal**, de **cuarto orden**, **no homogénea** y con coeficientes constantes. Su solución general tiene la estructura $y = y_c + y_p$, donde $y_c$ resuelve la ecuación homogénea asociada e $y_p$ es una solución particular.

**Solución complementaria.** La ecuación característica es

$$
r^4 + 2r^2 + 1 = 0.
$$

El miembro izquierdo es un trinomio cuadrado perfecto,

$$
r^4 + 2r^2 + 1 = (r^2 + 1)^2 = 0,
$$

cuyas raíces son $r = i$ y $r = -i$, ambas dobles. El caso de raíces complejas repetidas genera, para cada par conjugado, un factor lineal en $x$. Por tanto,

$$
y_c = (c_1 + c_2 x)\cos x + (c_3 + c_4 x)\sin x.
$$

**Solución particular.** El término no homogéneo es $g(x) = 3 + \cos 2x$. Se aplica el principio de superposición y se busca una solución particular para cada sumando.

Para el término constante $3$ se propone $Y_1 = A$. Al sustituir, todas las derivadas se anulan y queda $Y_1 = A$, de modo que $A = 3$.

Para el término $\cos 2x$ se propone

$$
Y_2 = B\cos 2x + C\sin 2x.
$$

Esta forma no duplica ningún término de $y_c$, porque $\pm 2i$ no son raíces de la ecuación característica, así que no se requiere la regla de modificación. Las derivadas pares son

$$
Y_2'' = -4(B\cos 2x + C\sin 2x), \qquad Y_2^{(iv)} = 16(B\cos 2x + C\sin 2x).
$$

Al sustituir en el miembro izquierdo,

$$
\begin{aligned}
Y_2^{(iv)} + 2Y_2'' + Y_2
&= \bigl[16 - 8 + 1\bigr](B\cos 2x + C\sin 2x) \\
&= 9(B\cos 2x + C\sin 2x).
\end{aligned}
$$

La igualdad $9(B\cos 2x + C\sin 2x) = \cos 2x$ fija $B = \tfrac{1}{9}$ y $C = 0$. Así,

$$
y_p = 3 + \frac{1}{9}\cos 2x.
$$

**Solución general.** Al reunir ambas partes,

$$
y = (c_1 + c_2 x)\cos x + (c_3 + c_4 x)\sin x + 3 + \frac{1}{9}\cos 2x.
$$

Los coeficientes son constantes y $g(x)$ está definida en todo $\mathbb{R}$, de modo que la solución general es válida en el intervalo $(-\infty, \infty)$.

## Observaciones

El operador de la ecuación es $(D^2 + 1)^2$. Aplicado a una constante devuelve esa misma constante, por eso $Y_1 = A$ no necesita ningún factor de corrección y basta con $A = 3$.

La frecuencia del término forzante, $2$, es distinta de la frecuencia natural de la parte homogénea, $1$. Como $\pm 2i$ no son raíces de $r^4 + 2r^2 + 1 = 0$, la forma de prueba $\cos 2x$ no duplica ningún término de $y_c$ y la regla de modificación no interviene.

La raíz doble $\pm i$ es la que origina los factores $x$ en $y_c$. Este caso se reconoce porque el polinomio auxiliar contiene el factor $(r^2 + 1)^2$.
