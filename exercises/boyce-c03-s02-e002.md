---
title: "Boyce 3.2 Ejercicio 2"
exercise-id: boyce-c03-s02-e002
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.2, ejercicio 2"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies: []
prerequisitos:
  - ecuaciones-diferenciales.wronskiano
  - matrices.determinantes
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s02i01-p152.png
---

## Enunciado

En cada uno de los problemas 1 a 6, determine el wronskiano de las funciones dadas.

2. $\cos x, \sin x$

## Solución

El wronskiano del par es

$$
W(\cos x,\sin x)=1.
$$

## Resolución

Las funciones son $y_1=\cos x$ y $y_2=\sin x$. Ambas son derivables en todo $\mathbb{R}$, con

$$
y_1'=-\sin x, \qquad y_2'=\cos x.
$$

El **wronskiano** del par es el determinante formado por las funciones y sus primeras derivadas:

$$
W(\cos x,\sin x)=
\begin{vmatrix}
\cos x & \sin x\\
-\sin x & \cos x
\end{vmatrix}.
$$

Se desarrolla el determinante:

$$
W(\cos x,\sin x)=(\cos x)(\cos x)-(\sin x)(-\sin x)=\cos^2 x+\sin^2 x.
$$

Por la identidad pitagórica, $\cos^2 x+\sin^2 x=1$. Por tanto,

$$
W(\cos x,\sin x)=1.
$$

## Observaciones

El wronskiano vale $1$ para todo $x\in\mathbb{R}$; en particular nunca se anula. Por el criterio del wronskiano, $\{\cos x,\sin x\}$ es linealmente independiente y constituye un conjunto fundamental de soluciones de la ecuación $y''+y=0$. Que el wronskiano sea constante es coherente con la fórmula de Abel.
