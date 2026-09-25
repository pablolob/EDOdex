---
title: "Boyce 3.2 Ejercicio 6"
exercise-id: boyce-c03-s02-e006
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.2, ejercicio 6"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies: []
prerequisitos:
  - ecuaciones-diferenciales.wronskiano
  - matrices.determinantes
  - derivacion.regla-cadena
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s02i01-p152.png
---

## Enunciado

En cada uno de los problemas 1 a 6, determine el wronskiano de las funciones dadas.

6. $\cos^2 x, 1 + \cos 2x$

## Solución

Las funciones $\cos^2 x$ y $1+\cos 2x$ son **linealmente dependientes**, porque $1+\cos 2x = 2\cos^2 x$. Su **wronskiano** es idénticamente nulo:

$$
W\!\left(\cos^2 x, 1+\cos 2x\right)(x) = 0.
$$

## Resolución

Para dos funciones diferenciables $f$ y $g$, el wronskiano es el determinante

$$
W(f,g)(x) =
\begin{vmatrix}
f(x) & g(x) \\
f'(x) & g'(x)
\end{vmatrix}
= f(x)g'(x) - f'(x)g(x).
$$

Se toman $f(x) = \cos^2 x$ y $g(x) = 1+\cos 2x$. Con la regla de la cadena, sus derivadas son

$$
f'(x) = 2\cos x\,(-\sin x) = -2\sin x\cos x = -\sin 2x, \qquad g'(x) = -2\sin 2x.
$$

Al sustituir en el determinante,

$$
\begin{aligned}
W(f,g)(x) &= \cos^2 x\,(-2\sin 2x) - (-\sin 2x)(1+\cos 2x) \\
&= -2\cos^2 x\,\sin 2x + \sin 2x\,(1+\cos 2x) \\
&= \sin 2x\left(1+\cos 2x - 2\cos^2 x\right).
\end{aligned}
$$

La identidad del ángulo doble, $\cos 2x = 2\cos^2 x - 1$, anula el paréntesis:

$$
1+\cos 2x - 2\cos^2 x = 1 + (2\cos^2 x - 1) - 2\cos^2 x = 0.
$$

Por lo tanto,

$$
W(f,g)(x) = 0 \qquad \text{para todo } x.
$$

Ambas funciones están definidas y son derivables en todo $\mathbb{R}$; en consecuencia, el wronskiano está definido en todo $\mathbb{R}$.

## Observaciones

El wronskiano se anula porque las funciones son linealmente dependientes: la identidad del ángulo doble da $1+\cos 2x = 2\cos^2 x$, de modo que la segunda función es el doble de la primera. El criterio del wronskiano es una implicación en un solo sentido, así que $W=0$ no garantiza por sí solo dependencia lineal; aquí la relación lineal es explícita.

### Método alternativo: proporcionalidad de las funciones

Al reconocer que $1+\cos 2x = 2\cos^2 x$, las dos columnas de la matriz del wronskiano son proporcionales y el determinante se anula sin calcular las derivadas de las funciones concretas. En general, para toda función diferenciable $f$,

$$
W(f, 2f)(x) = f(x)\left(2f'(x)\right) - f'(x)\left(2f(x)\right) = 0.
$$
