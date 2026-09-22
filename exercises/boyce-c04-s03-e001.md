---
title: "Boyce 4.3 Ejercicio 1"
exercise-id: boyce-c04-s03-e001
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.3, ejercicio 1"
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

1. $y''' - y'' - y' + y = 2e^{-x} + 3$

## Solución

$$
y = c_1 e^{x} + c_2 x e^{x} + c_3 e^{-x} + \frac{1}{2} x e^{-x} + 3.
$$

## Resolución

La ecuación es **lineal**, de **tercer orden**, **no homogénea** y con coeficientes constantes. Su solución general tiene la estructura $y = y_c + y_p$, donde $y_c$ resuelve la ecuación homogénea asociada e $y_p$ es una solución particular.

**Solución complementaria.** La ecuación característica es

$$
r^3 - r^2 - r + 1 = 0.
$$

La factorización por agrupación da

$$
r^3 - r^2 - r + 1 = r^2(r-1) - (r-1) = (r^2-1)(r-1) = (r-1)^2(r+1).
$$

Las raíces son $r=1$ (doble) y $r=-1$ (simple). Por tanto,

$$
y_c = c_1 e^{x} + c_2 x e^{x} + c_3 e^{-x}.
$$

**Solución particular.** El término no homogéneo es $g(x) = 2e^{-x} + 3$. Se aplica el principio de superposición y se busca una solución particular para cada sumando.

Para el término constante $3$ se propone $Y_1 = A$. Esta forma no duplica ningún término de $y_c$. Al sustituir, $Y_1''' - Y_1'' - Y_1' + Y_1 = A$, de modo que $A = 3$.

Para el término $2e^{-x}$ la forma natural $Be^{-x}$ duplica al término $c_3 e^{-x}$ de $y_c$. La **regla de modificación** obliga a multiplicar por $x$:

$$
Y_2 = B x e^{-x}.
$$

Sus derivadas son

$$
Y_2' = B e^{-x}(1-x), \qquad Y_2'' = B e^{-x}(x-2), \qquad Y_2''' = B e^{-x}(3-x).
$$

Al sustituir en el miembro izquierdo,

$$
\begin{aligned}
Y_2''' - Y_2'' - Y_2' + Y_2
&= B e^{-x}\bigl[(3-x) - (x-2) - (1-x) + x\bigr] \\
&= B e^{-x}\bigl[3 - x - x + 2 - 1 + x + x\bigr] \\
&= 4B e^{-x}.
\end{aligned}
$$

La igualdad $4B e^{-x} = 2e^{-x}$ fija $B = \tfrac{1}{2}$. Así,

$$
y_p = 3 + \frac{1}{2} x e^{-x}.
$$

**Solución general.** Al reunir ambas partes,

$$
y = c_1 e^{x} + c_2 x e^{x} + c_3 e^{-x} + \frac{1}{2} x e^{-x} + 3.
$$

Los coeficientes de la ecuación son constantes y $g(x)$ está definida en todo $\mathbb{R}$, de modo que la solución general es válida en el intervalo $(-\infty, \infty)$.

## Observaciones

La regla de modificación se aplica cuando la forma de prueba de $y_p$ ya figura en $y_c$: se multiplica por la menor potencia de $x$ que elimine la duplicación. Aquí $e^{-x}$ es solución de la homogénea y por eso aparece $x e^{-x}$.

La raíz doble $r=1$ genera el término $x e^{x}$ de $y_c$, pero no interviene en la parte particular, porque $g(x)$ contiene $e^{-x}$ y no $e^{x}$.

Los dos términos exponenciales pueden combinarse como $(c_3 + \tfrac{1}{2}x)e^{-x}$; mantener separadas la parte complementaria y la particular es la presentación habitual.
