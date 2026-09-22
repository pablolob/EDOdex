---
title: "Boyce 4.1 Ejercicio 11"
exercise-id: boyce-c04-s01-e011
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.1, ejercicio 11"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
  - fundamentos
competencies: []
prerequisitos:
  - ecuaciones-diferenciales.wronskiano
  - matrices.determinantes
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c04s01i02-p223.png
---

## Enunciado

En cada uno de los problemas 7 a 12, determine si las funciones dadas son linealmente dependientes o independientes. Si son linealmente dependientes, halle una relación lineal entre ellas.

11. $y = x + c_1 + c_2 \cos x + c_3 \sin x$

## Solución

Las funciones que intervienen en la expresión son $1$, $x$, $\cos x$ y $\sin x$. Son **linealmente independientes** y no existe una relación lineal entre ellas. Su wronskiano es

$$
W(1,x,\cos x,\sin x)=1\neq 0.
$$

## Resolución

Las funciones del conjunto son

$$
f_1(x)=1, \qquad f_2(x)=x, \qquad f_3(x)=\cos x, \qquad f_4(x)=\sin x.
$$

Están definidas y son derivables en todo $\mathbb{R}$, de modo que su wronskiano está definido en todo $\mathbb{R}$.

Un conjunto de funciones es linealmente independiente cuando la única combinación lineal que se anula idénticamente es la trivial. El **wronskiano**

$$
W(f_1,f_2,f_3,f_4)(x)=
\begin{vmatrix}
f_1 & f_2 & f_3 & f_4\\
f_1' & f_2' & f_3' & f_4'\\
f_1'' & f_2'' & f_3'' & f_4''\\
f_1''' & f_2''' & f_3''' & f_4'''
\end{vmatrix}
$$

decide el caso: si $W(x_0)\neq 0$ para algún $x_0$, las funciones son linealmente independientes.

Las derivadas necesarias son

$$
\begin{aligned}
f_1=1,\quad & f_1'=0,\quad & f_1''=0,\quad & f_1'''=0,\\
f_2=x,\quad & f_2'=1,\quad & f_2''=0,\quad & f_2'''=0,\\
f_3=\cos x,\quad & f_3'=-\sin x,\quad & f_3''=-\cos x,\quad & f_3'''=\sin x,\\
f_4=\sin x,\quad & f_4'=\cos x,\quad & f_4''=-\sin x,\quad & f_4'''=-\cos x.
\end{aligned}
$$

Con ellas se forma el wronskiano

$$
W(x)=
\begin{vmatrix}
1 & x & \cos x & \sin x\\
0 & 1 & -\sin x & \cos x\\
0 & 0 & -\cos x & -\sin x\\
0 & 0 & \sin x & -\cos x
\end{vmatrix}.
$$

La primera columna tiene un único elemento no nulo. Al desarrollar por ella,

$$
W(x)=1\cdot
\begin{vmatrix}
1 & -\sin x & \cos x\\
0 & -\cos x & -\sin x\\
0 & \sin x & -\cos x
\end{vmatrix}.
$$

El determinante $3\times 3$ se desarrolla de nuevo por su primera columna:

$$
W(x)=1\cdot
\begin{vmatrix}
-\cos x & -\sin x\\
\sin x & -\cos x
\end{vmatrix}
=(-\cos x)(-\cos x)-(-\sin x)(\sin x)
=\cos^2 x+\sin^2 x=1.
$$

El wronskiano vale $1$ para todo $x\in\mathbb{R}$, en particular no se anula. Por tanto, $1$, $x$, $\cos x$ y $\sin x$ son **linealmente independientes**.

En consecuencia, la única combinación lineal que se anula idénticamente es la trivial. No existe una relación lineal no trivial entre las funciones, de modo que no hay nada que hallar en el segundo supuesto del enunciado.

## Observaciones

El conjunto $\{1,x,\cos x,\sin x\}$ es un conjunto fundamental de soluciones de la ecuación $y^{(4)}+y''=0$. Su ecuación característica $r^4+r^2=r^2(r^2+1)$ tiene la raíz doble $0$ y las raíces $\pm i$. La expresión dada es la solución general de esa ecuación con el coeficiente de $x$ fijado en $1$.

El criterio del wronskiano es suficiente pero no necesario: $W\neq 0$ en un punto garantiza la independencia, mientras que $W=0$ en un punto aislado no prueba la dependencia. Aquí $W=1$ en todo $\mathbb{R}$, de modo que no hay ambigüedad.

### Método alternativo: evaluación directa de la combinación lineal

Sin calcular el wronskiano, se supone que $\alpha_1+\alpha_2 x+\alpha_3\cos x+\alpha_4\sin x=0$ para todo $x$. Al evaluar en $x=0,\dfrac{\pi}{2},\pi,\dfrac{3\pi}{2}$ se obtiene el sistema

$$
\begin{aligned}
\alpha_1+\alpha_3 &= 0,\\
\alpha_1+\dfrac{\pi}{2}\alpha_2+\alpha_4 &= 0,\\
\alpha_1+\pi\alpha_2-\alpha_3 &= 0,\\
\alpha_1+\dfrac{3\pi}{2}\alpha_2-\alpha_4 &= 0.
\end{aligned}
$$

De la primera y la tercera ecuaciones resulta $2\alpha_1+\pi\alpha_2=0$; al sumar la segunda y la cuarta, $2\alpha_1+2\pi\alpha_2=0$. Ambas juntas dan $\alpha_1=\alpha_2=0$, y entonces $\alpha_3=\alpha_4=0$. La única combinación lineal que se anula es la trivial.
