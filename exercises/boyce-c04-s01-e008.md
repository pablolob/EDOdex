---
title: "Boyce 4.1 Ejercicio 8"
exercise-id: boyce-c04-s01-e008
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.1, ejercicio 8"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
  - fundamentos
competencies: []
prerequisitos:
  - matrices.determinantes
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c04s01i02-p223.png
---

## Enunciado

En cada uno de los problemas 7 a 12, determine si las funciones dadas son linealmente dependientes o independientes. Si son linealmente dependientes, halle una relación lineal entre ellas.

8. $y = c_1 + c_2 \cos x + c_3 \sin x$

## Solución

Las funciones que acompañan a las constantes son $y_1 = 1$, $y_2 = \cos x$ y $y_3 = \sin x$. Son **linealmente independientes** y no existe una relación lineal entre ellas. Su wronskiano es

$$
W(1,\cos x,\sin x)=1\neq 0.
$$

## Resolución

Las funciones del conjunto son

$$
y_1 = 1, \qquad y_2 = \cos x, \qquad y_3 = \sin x.
$$

Están definidas y son derivables en todo $\mathbb{R}$, de modo que su wronskiano está definido en todo $\mathbb{R}$.

Se forma el **wronskiano** del conjunto:

$$
W(1,\cos x,\sin x)=
\begin{vmatrix}
1 & \cos x & \sin x\\
0 & -\sin x & \cos x\\
0 & -\cos x & -\sin x
\end{vmatrix}.
$$

Se desarrolla por la primera columna, en la que el único elemento no nulo es el primero:

$$
W = 1\cdot
\begin{vmatrix}
-\sin x & \cos x\\
-\cos x & -\sin x
\end{vmatrix}
= (-\sin x)(-\sin x)-(\cos x)(-\cos x)
= \sin^2 x+\cos^2 x = 1.
$$

El wronskiano vale $1$ para todo $x\in\mathbb{R}$, en particular no se anula. Por el criterio del wronskiano, un conjunto de funciones con wronskiano distinto de cero en algún punto es linealmente independiente. Por tanto, $1$, $\cos x$ y $\sin x$ son linealmente independientes.

En consecuencia, la única combinación lineal que se anula idénticamente es la trivial, $c_1=c_2=c_3=0$. No existe una relación lineal no trivial entre las funciones, de modo que no hay nada que hallar en el segundo supuesto del enunciado.

## Observaciones

El conjunto $\{1,\cos x,\sin x\}$ es un conjunto fundamental de soluciones de la ecuación de tercer orden $y'''+y'=0$; por ello la expresión $y=c_1+c_2\cos x+c_3\sin x$ es la solución general de esa ecuación.

### Método alternativo: definición de independencia lineal

Sin calcular el wronskiano, se supone que $c_1+c_2\cos x+c_3\sin x=0$ para todo $x$. Al evaluar en $x=0$, $x=\dfrac{\pi}{2}$ y $x=\pi$ se obtiene el sistema

$$
\begin{aligned}
c_1+c_2 &= 0,\\
c_1+c_3 &= 0,\\
c_1-c_2 &= 0.
\end{aligned}
$$

De la primera y la tercera ecuaciones resulta $c_1=c_2=0$; al sustituir en la segunda, $c_3=0$. La única combinación lineal que se anula es la trivial, así que las funciones son linealmente independientes.
