---
title: "Boyce 4.1 Ejercicio 19"
exercise-id: boyce-c04-s01-e019
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.1, ejercicio 19"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies: []
prerequisitos:
  - ecuaciones-diferenciales.wronskiano
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c04s01i02-p223.png
---

## Enunciado

Demuestre que $W(5, \sin^2 x, \cos 2x) = 0$ para toda $x$. ¿Es posible establecer este resultado sin necesidad de evaluar directamente el wronskiano?

## Solución

Las funciones $5$, $\sin^2 x$ y $\cos 2x$ son **linealmente dependientes** en $\mathbb{R}$, porque $\cos 2x = 1 - 2\sin^2 x$. Un conjunto linealmente dependiente tiene wronskiano idénticamente nulo, de modo que

$$
W(5, \sin^2 x, \cos 2x) = 0, \qquad x \in \mathbb{R}.
$$

Sí es posible establecer el resultado sin evaluar directamente el wronskiano: basta exhibir la relación lineal no trivial entre las funciones y aplicar el criterio de dependencia lineal.

## Resolución

Se consideran las funciones

$$
f_1(x) = 5, \qquad f_2(x) = \sin^2 x, \qquad f_3(x) = \cos 2x.
$$

Están definidas y son derivables en todo $\mathbb{R}$. La identidad trigonométrica del ángulo doble,

$$
\cos 2x = 1 - 2\sin^2 x,
$$

se reescribe como

$$
2\sin^2 x + \cos 2x - 1 = 0.
$$

El término constante se expresa mediante $f_1$: como $1 = \frac{1}{5}\cdot 5$, resulta

$$
-\frac{1}{5}\, f_1(x) + 2\, f_2(x) + 1\, f_3(x) = -1 + 2\sin^2 x + \cos 2x = 0
$$

para todo $x \in \mathbb{R}$. Los coeficientes $-\frac{1}{5}$, $2$ y $1$ no son todos nulos. Por tanto, $f_1$, $f_2$ y $f_3$ son **linealmente dependientes** en $\mathbb{R}$.

Un conjunto de $n$ funciones linealmente dependientes en un intervalo, derivables hasta el orden $n-1$ en él, tiene wronskiano idénticamente nulo en ese intervalo. Con $n = 3$, la dependencia lineal de $5$, $\sin^2 x$ y $\cos 2x$ implica

$$
W(5, \sin^2 x, \cos 2x) = 0 \qquad \text{para toda } x \in \mathbb{R}.
$$

Esto responde también a la segunda pregunta. El resultado se establece sin evaluar directamente el wronskiano: basta reconocer la relación lineal entre las funciones y aplicar el criterio de dependencia, sin desarrollar el determinante de $3\times 3$.

## Observaciones

El criterio empleado es una implicación en un solo sentido: la dependencia lineal garantiza $W = 0$, pero $W = 0$ no garantiza dependencia lineal. En este ejercicio no hay ambigüedad, porque la relación $2\sin^2 x + \cos 2x - 1 = 0$ se exhibe de forma explícita.

Como el wronskiano es idénticamente nulo, estas funciones no pueden formar un conjunto fundamental de soluciones de una ecuación lineal homogénea en $\mathbb{R}$.

### Método alternativo: evaluación directa del wronskiano

También puede calcularse el determinante de forma directa. Las derivadas son $f_1' = f_1'' = 0$, $f_2' = \sin 2x$, $f_2'' = 2\cos 2x$, $f_3' = -2\sin 2x$ y $f_3'' = -4\cos 2x$. Entonces

$$
W =
\begin{vmatrix}
5 & \sin^2 x & \cos 2x\\
0 & \sin 2x & -2\sin 2x\\
0 & 2\cos 2x & -4\cos 2x
\end{vmatrix}
= 5
\begin{vmatrix}
\sin 2x & -2\sin 2x\\
2\cos 2x & -4\cos 2x
\end{vmatrix}
= 5\left(-4\sin 2x\cos 2x + 4\sin 2x\cos 2x\right) = 0.
$$

Es un camino válido, pero más laborioso que el anterior.
