---
title: "Boyce 3.3 Ejercicio 19"
exercise-id: boyce-c03-s03-e019
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.3, ejercicio 19"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - determinar.independencia-lineal
prerequisitos:
  - ecuaciones-diferenciales.wronskiano
  - ecuaciones-diferenciales.linealidad
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c03s03i02-p160.png
---

## Enunciado

En los problemas 19 a 21 suponga que $p$ y $q$ son continuas y que las funciones $y_1$ y $y_2$ son soluciones de la ecuación diferencial $y'' + p(x)y' + p(x)y = 0$ sobre un intervalo abierto $I$. Demuestre que si $y_1$ y $y_2$ son cero en el mismo punto en $I$, entonces sobre ese intervalo no pueden ser un conjunto fundamental de soluciones.

## Solución

Las funciones $y_1$ y $y_2$ no pueden formar un conjunto fundamental de soluciones sobre $I$. Como ambas se anulan en un mismo punto $x_0 \in I$, su wronskiano se anula en $x_0$ y, por la **fórmula de Abel**, es idénticamente nulo en $I$:

$$
W[y_1,y_2](x) = 0, \qquad x \in I.
$$

Un wronskiano idénticamente nulo implica que $y_1$ y $y_2$ son linealmente dependientes sobre $I$.

## Resolución

Sean $y_1$ y $y_2$ soluciones de $y'' + p(x)y' + p(x)y = 0$ sobre el intervalo abierto $I$, con $p$ y $q$ continuas en $I$. Sea $x_0 \in I$ un punto tal que $y_1(x_0) = y_2(x_0) = 0$.

El **wronskiano** del par se define como

$$
W[y_1,y_2](x) = y_1(x)y_2'(x) - y_1'(x)y_2(x).
$$

Al evaluar en $x_0$, ambos términos se anulan porque cada producto contiene una función nula en $x_0$:

$$
W[y_1,y_2](x_0) = y_1(x_0)y_2'(x_0) - y_1'(x_0)y_2(x_0) = 0.
$$

Para decidir la dependencia lineal se estudia cómo varía el wronskiano. Derivando,

$$
W' = y_1' y_2' + y_1 y_2'' - y_1'' y_2 - y_1' y_2' = y_1 y_2'' - y_1'' y_2.
$$

Cada solución satisface $y_i'' = -p(x)y_i' - p(x)y_i$. Al sustituir en $W'$,

$$
\begin{aligned}
W' &= y_1\left(-p\,y_2' - p\,y_2\right) - \left(-p\,y_1' - p\,y_1\right)y_2 \\
   &= -p\,y_1 y_2' - p\,y_1 y_2 + p\,y_1' y_2 + p\,y_1 y_2 \\
   &= -p\left(y_1 y_2' - y_1' y_2\right) \\
   &= -p(x)\,W.
\end{aligned}
$$

Así, $W$ resuelve la ecuación lineal de primer orden $W' + p(x)W = 0$. Como $p$ es continua en $I$, esta ecuación tiene por solución la **fórmula de Abel**,

$$
W[y_1,y_2](x) = W(x_0)\exp\!\left(-\int_{x_0}^{x} p(t)\,dt\right).
$$

Como $W(x_0) = 0$, resulta $W[y_1,y_2](x) = 0$ para todo $x \in I$.

Por el **criterio del wronskiano**, dos soluciones de una ecuación lineal homogénea cuyo wronskiano se anula idénticamente sobre el intervalo son linealmente dependientes. En consecuencia, $\{y_1,y_2\}$ no es un conjunto fundamental de soluciones sobre $I$. $\blacksquare$

## Observaciones

El resultado no depende del coeficiente de $y$. En la fórmula de Abel solo interviene el coeficiente de $y'$; por eso la demostración únicamente requiere que $p$ sea continua en $I$, y la conclusión vale igual si el coeficiente de $y$ es otra función continua.

### Método alternativo: existencia y unicidad

También puede razonarse sin el wronskiano. Como $y_1(x_0) = y_2(x_0) = 0$, la ecuación $c_1 y_1'(x_0) + c_2 y_2'(x_0) = 0$ admite una solución no trivial $(c_1,c_2)$. La función $y = c_1 y_1 + c_2 y_2$ es solución de la ecuación y cumple $y(x_0) = 0$ y $y'(x_0) = 0$. Por el teorema de existencia y unicidad, $y \equiv 0$ sobre $I$. Existe entonces una combinación lineal no trivial de $y_1$ y $y_2$ que es idénticamente nula, de modo que las funciones son linealmente dependientes y no pueden formar un conjunto fundamental.
