---
title: "Boyce 3.5 Ejercicio 16"
exercise-id: boyce-c03-s05-e016
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.5, ejercicio 16"
statement-status: accepted
solution-status: draft
metadata-status: pending
topics:
  - orden-superior
competencies:
  - verificar.solucion
  - resolver.lineal.homogenea.coeficientes-constantes
prerequisitos:
  - ecuaciones-diferenciales.linealidad
  - algebra.ecuaciones-caracteristicas
  - calculo-avanzado.derivadas-parciales
  - calculo-avanzado.regla-lhopital
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c03s05i01-p175.png
---

## Enunciado

Suponga que $r_1$ y $r_2$ son raíces de $ar^2 + br + c = 0$ y que $r_1 \neq r_2$; entonces $\exp(r_1x)$ y $\exp(r_2x)$ soluciones de la ecuación diferencial $ay'' + by' + cy = 0$. Demuestre que $\phi(x; r_1, r_2) = [\exp(r_2x) - \exp(r_1x)] / (r_2 - r_1)$ también es una solución de la ecuación para $r_2 \neq r_1$. Entonces considere $r_1$ como fija y aplique la regla de L'Hospital para evaluar el límite de $\phi(x; r_1, r_2)$ cuando $r_2 \to r_1$, obteniéndose de esta manera la segunda solución en el caso de raíces iguales.

## Solución

La función $\phi$ satisface la ecuación porque es una combinación lineal de las dos soluciones $\exp(r_1x)$ y $\exp(r_2x)$. Al fijar $r_1$ y aplicar la **regla de L'Hôpital** con respecto a $r_2$,

$$
\lim_{r_2 \to r_1} \phi(x; r_1, r_2) = \lim_{r_2 \to r_1} \frac{\exp(r_2x) - \exp(r_1x)}{r_2 - r_1} = x\exp(r_1x).
$$

Esta es la segunda solución en el caso de la raíz doble $r_1 = r_2$.

## Resolución

Se define el operador $L[y] = ay'' + by' + cy$. Para cualquier $r$,

$$
L\!\left[\exp(rx)\right] = ar^2\exp(rx) + br\exp(rx) + c\exp(rx) = \left(ar^2 + br + c\right)\exp(rx).
$$

Como el polinomio característico se factoriza según sus raíces, $ar^2 + br + c = a(r - r_1)(r - r_2)$. Por tanto, $L[\exp(rx)] = a(r - r_1)(r - r_2)\exp(rx)$, y al ser $r_1$ y $r_2$ raíces con $r_1 \neq r_2$ se cumple $L[\exp(r_1x)] = 0$ y $L[\exp(r_2x)] = 0$.

El operador $L$ es lineal, de modo que por el **principio de superposición**

$$
\begin{aligned}
L\left[\phi(\cdot; r_1, r_2)\right]
&= L\!\left[\frac{\exp(r_2x) - \exp(r_1x)}{r_2 - r_1}\right] \\
&= \frac{1}{r_2 - r_1}\left(L\!\left[\exp(r_2x)\right] - L\!\left[\exp(r_1x)\right]\right) \\
&= \frac{0 - 0}{r_2 - r_1} = 0.
\end{aligned}
$$

Por lo tanto, $\phi$ es solución de $ay'' + by' + cy = 0$ para todo $r_2 \neq r_1$.

Para el límite se fija $r_1$ y se considera $\phi$ como función de $r_2$. Cuando $r_2 \to r_1$, el numerador y el denominador tienden a cero, así que se aplica la **regla de L'Hôpital** derivando ambos con respecto a $r_2$:

$$
\lim_{r_2 \to r_1} \frac{\exp(r_2x) - \exp(r_1x)}{r_2 - r_1}
= \lim_{r_2 \to r_1} \frac{\dfrac{\partial}{\partial r_2}\left(\exp(r_2x) - \exp(r_1x)\right)}{\dfrac{\partial}{\partial r_2}(r_2 - r_1)}
= \lim_{r_2 \to r_1} \frac{x\exp(r_2x)}{1}
= x\exp(r_1x).
$$

Al variar $r_2$ con $r_1$ fija, los coeficientes de la ecuación tienden a los de la ecuación con raíz doble $r_1$, y el límite de las soluciones satisface la ecuación límite. La sustitución directa lo confirma. En la ecuación con raíz doble $r_1$ se tiene $b/a = -2r_1$ y $c/a = r_1^2$; para $y = x\exp(r_1x)$,

$$
y' = (1 + r_1x)\exp(r_1x), \qquad y'' = \left(2r_1 + r_1^2x\right)\exp(r_1x),
$$

y al sustituir,

$$
y'' - 2r_1y' + r_1^2y
= \exp(r_1x)\left[\left(2r_1 + r_1^2x\right) - 2r_1(1 + r_1x) + r_1^2x\right] = 0.
$$

Las funciones $\exp(r_1x)$ y $x\exp(r_1x)$ son linealmente independientes, pues su wronskiano es $W = \exp(2r_1x) \neq 0$. En consecuencia, $x\exp(r_1x)$ es la segunda solución buscada en el caso de raíces iguales.

## Observaciones

La función $\phi$ es el cociente de diferencias de $\exp(rx)$ con respecto a $r$. Su límite al colapsar las dos raíces es la derivada parcial $\partial_r\exp(rx)$ evaluada en $r = r_1$, igual a $x\exp(r_1x)$; el factor $x$ es el mismo que aparece al reducir el orden cuando se conoce $\exp(r_1x)$.

Con las dos soluciones independientes, la solución general de la ecuación con raíz doble $r_1$ es

$$
y(x) = \left(C_1 + C_2x\right)\exp(r_1x).
$$

Los coeficientes son constantes y ambas funciones están definidas para todo $x \in \mathbb{R}$, de modo que la solución es válida en $(-\infty, \infty)$. No hay soluciones singulares y la ecuación es lineal homogénea.
