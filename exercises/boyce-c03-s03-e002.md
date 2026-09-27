---
title: "Boyce 3.3 Ejercicio 2"
exercise-id: boyce-c03-s03-e002
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.3, ejercicio 2"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - determinar.independencia-lineal
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s03i01-p159.png
---

## Enunciado

En cada uno de los problemas 1 a 6, determine si el par de funciones dado es linealmente independiente o linealmente dependiente.

2. $f(x) = \cos 3x, \quad g(x) = 4\cos^3 x - 3\cos x$

## Solución

El par de funciones es **linealmente dependiente**, porque la identidad del ángulo triple muestra que ambas coinciden en todo $\mathbb{R}$:

$$
g(x) = 4\cos^3 x - 3\cos x = \cos 3x = f(x).
$$

## Resolución

Dos funciones $f$ y $g$ son linealmente dependientes en un intervalo si existen constantes $c_1$ y $c_2$, no ambas nulas, tales que

$$
c_1 f(x) + c_2 g(x) = 0
$$

para todo $x$ del intervalo.

Se desarrolla $\cos 3x$ como $\cos(2x + x)$ con la fórmula del coseno de una suma:

$$
\begin{aligned}
\cos 3x &= \cos 2x \cos x - \sin 2x \sin x \\
&= \left(\cos^2 x - \sin^2 x\right)\cos x - (2\sin x \cos x)\sin x \\
&= \cos^3 x - \sin^2 x \cos x - 2\sin^2 x \cos x \\
&= \cos^3 x - 3\sin^2 x \cos x.
\end{aligned}
$$

Al reemplazar $\sin^2 x = 1 - \cos^2 x$,

$$
\cos 3x = \cos^3 x - 3\left(1 - \cos^2 x\right)\cos x = 4\cos^3 x - 3\cos x.
$$

Por tanto, $g(x) = f(x)$ para todo $x \in \mathbb{R}$. Tomando $c_1 = 1$ y $c_2 = -1$ resulta

$$
c_1 f(x) + c_2 g(x) = f(x) - g(x) = 0
$$

en todo $\mathbb{R}$, de modo que las funciones son linealmente dependientes.

## Observaciones

La dependencia no requiere calcular el **Wronskiano**: como $g = f$, la combinación no trivial $f - g = 0$ ya la establece. A modo de comprobación, $f'(x) = -3\sin 3x$ y $g'(x) = -3\sin 3x$, por lo que

$$
W(f,g) = f g' - f' g = 0
$$

en todo $\mathbb{R}$. Conviene notar que el criterio «$W \equiv 0$ implica dependencia lineal» es concluyente para dos soluciones de una misma ecuación lineal homogénea de segundo orden; para un par de funciones arbitrarias, $W \equiv 0$ por sí solo no basta. Como $g = f$, el par no forma un conjunto fundamental de soluciones.
