---
title: "Boyce 3.2 Ejercicio 23"
exercise-id: boyce-c03-s02-e023
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.2, ejercicio 23"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - verificar.solucion
  - determinar.independencia-lineal
prerequisitos:
  - derivacion.regla-cadena
  - ecuaciones-diferenciales.wronskiano
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s02i02-p153.png
---

## Enunciado

En cada uno de los problemas 23 a 26, verifique que las funciones $y_1$ y $y_2$ son soluciones de la ecuación diferencial dada. ¿Constituyen un conjunto fundamental de soluciones?

23. $y'' + 4y = 0; \quad y_1(x) = \cos 2x, \quad y_2(x) = \sin 2x$

## Solución

Ambas funciones son soluciones y el par $\{y_1, y_2\}$ forma un **conjunto fundamental** de soluciones en $\mathbb{R}$, ya que su wronskiano

$$
W(y_1, y_2)(x) = 2
$$

no se anula en ningún punto. La solución general es

$$
y(x) = C_1 \cos 2x + C_2 \sin 2x.
$$

## Resolución

Se verifica primero que cada función satisface la ecuación $y'' + 4y = 0$.

Para $y_1(x) = \cos 2x$, la **regla de la cadena** da

$$
y_1'(x) = -2\sin 2x, \qquad y_1''(x) = -4\cos 2x.
$$

Al sustituir,

$$
y_1'' + 4y_1 = -4\cos 2x + 4\cos 2x = 0.
$$

Para $y_2(x) = \sin 2x$,

$$
y_2'(x) = 2\cos 2x, \qquad y_2''(x) = -4\sin 2x,
$$

y

$$
y_2'' + 4y_2 = -4\sin 2x + 4\sin 2x = 0.
$$

Por tanto, $y_1$ y $y_2$ son soluciones de la ecuación en todo $\mathbb{R}$.

Para decidir si constituyen un conjunto fundamental se calcula el **wronskiano**:

$$
\begin{aligned}
W(y_1, y_2)(x) &= y_1 y_2' - y_1' y_2 \\
&= \cos 2x\,(2\cos 2x) - (-2\sin 2x)(\sin 2x) \\
&= 2\cos^2 2x + 2\sin^2 2x \\
&= 2.
\end{aligned}
$$

El wronskiano es la constante $2$, distinta de cero para todo $x \in \mathbb{R}$. Por el criterio del wronskiano, $y_1$ y $y_2$ son **linealmente independientes**, de modo que $\{y_1, y_2\}$ es un conjunto fundamental de soluciones de $y'' + 4y = 0$ en $\mathbb{R}$.

## Observaciones

La ecuación es de **segundo orden**, **lineal** y **homogénea** con coeficientes constantes. Como el par $\{\cos 2x, \sin 2x\}$ es un conjunto fundamental, toda solución se escribe como combinación lineal $C_1\cos 2x + C_2\sin 2x$.

El wronskiano es constante porque la ecuación no tiene término en $y'$; coincide con lo que predice la fórmula de Abel, $W(x) = W(x_0)\exp\!\left(-\int p(t)\,dt\right)$ con $p(x) = 0$.
