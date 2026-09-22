---
title: "Boyce 4.1 Ejercicio 12"
exercise-id: boyce-c04-s01-e012
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.1, ejercicio 12"
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
  conceptual: 2
  technical: 2
source-images:
  - c04s01i02-p223.png
---

## Enunciado

En cada uno de los problemas 7 a 12, determine si las funciones dadas son linealmente dependientes o independientes. Si son linealmente dependientes, halle una relación lineal entre ellas.

12. $y = c_1 + c_2 x + c_3 \sinh x + c_4 \cosh x$

## Solución

Las funciones que acompañan a las constantes son $1$, $x$, $\sinh x$ y $\cosh x$. Estas funciones son **linealmente independientes**, de modo que no existe una relación lineal no trivial entre ellas. Su wronskiano es

$$
W(1,x,\sinh x,\cosh x)(x) = -1,
$$

que no se anula en ningún punto de $\mathbb{R}$.

## Resolución

La expresión

$$
y = c_1 + c_2 x + c_3 \sinh x + c_4 \cosh x
$$

es una combinación lineal de las funciones

$$
f_1(x) = 1, \qquad f_2(x) = x, \qquad f_3(x) = \sinh x, \qquad f_4(x) = \cosh x.
$$

Se pide decidir si este conjunto es linealmente dependiente o independiente.

Un conjunto de funciones $f_1, \dots, f_n$ con $n-1$ derivadas continuas en un intervalo $I$ es linealmente independiente cuando la única combinación lineal que se anula idénticamente en $I$ es la trivial. El **wronskiano**

$$
W(f_1,\dots,f_n)(x) =
\begin{vmatrix}
f_1 & f_2 & \cdots & f_n \\
f_1' & f_2' & \cdots & f_n' \\
\vdots & \vdots & & \vdots \\
f_1^{(n-1)} & f_2^{(n-1)} & \cdots & f_n^{(n-1)}
\end{vmatrix}
$$

decide el caso: si $W(x_0) \ne 0$ para algún $x_0 \in I$, entonces las funciones son linealmente independientes.

Las cuatro funciones son suaves en $\mathbb{R}$. Sus derivadas hasta el orden tres son

$$
\begin{aligned}
f_1 = 1, &\quad f_1' = 0, &\quad f_1'' = 0, &\quad f_1''' = 0, \\
f_2 = x, &\quad f_2' = 1, &\quad f_2'' = 0, &\quad f_2''' = 0, \\
f_3 = \sinh x, &\quad f_3' = \cosh x, &\quad f_3'' = \sinh x, &\quad f_3''' = \cosh x, \\
f_4 = \cosh x, &\quad f_4' = \sinh x, &\quad f_4'' = \cosh x, &\quad f_4''' = \sinh x.
\end{aligned}
$$

El wronskiano es el determinante de la matriz formada por estas derivadas:

$$
W(x) =
\begin{vmatrix}
1 & x & \sinh x & \cosh x \\
0 & 1 & \cosh x & \sinh x \\
0 & 0 & \sinh x & \cosh x \\
0 & 0 & \cosh x & \sinh x
\end{vmatrix}.
$$

La primera columna tiene un único elemento no nulo, de modo que el determinante se reduce a un determinante de orden tres:

$$
W(x) =
\begin{vmatrix}
1 & \cosh x & \sinh x \\
0 & \sinh x & \cosh x \\
0 & \cosh x & \sinh x
\end{vmatrix}.
$$

Se repite la reducción con la primera columna de este último determinante:

$$
W(x) =
\begin{vmatrix}
\sinh x & \cosh x \\
\cosh x & \sinh x
\end{vmatrix}
= \sinh^2 x - \cosh^2 x.
$$

La identidad hiperbólica fundamental $\cosh^2 x - \sinh^2 x = 1$ da

$$
W(x) = -1,
$$

que es distinto de cero para todo $x \in \mathbb{R}$. Al existir puntos donde el wronskiano no se anula, las funciones $1$, $x$, $\sinh x$ y $\cosh x$ son **linealmente independientes** sobre $\mathbb{R}$.

En consecuencia, la única combinación lineal que se anula idénticamente es la trivial, $c_1 = c_2 = c_3 = c_4 = 0$. No existe una relación lineal no trivial entre las funciones, así que no hay nada que hallar en el segundo supuesto del enunciado.

## Observaciones

El wronskiano resulta constante porque la identidad $\cosh^2 x - \sinh^2 x = 1$ elimina toda dependencia en $x$; el valor $-1$ es distinto de cero en todo punto.

Las cuatro funciones forman un conjunto fundamental de soluciones de $y'''' - y'' = 0$. Su ecuación característica es $r^4 - r^2 = r^2(r-1)(r+1)$, con raíces $0$ (doble), $1$ y $-1$. Las funciones $\sinh x$ y $\cosh x$ generan el mismo subespacio que $e^{x}$ y $e^{-x}$, ya que

$$
\sinh x = \frac{e^{x} - e^{-x}}{2}, \qquad \cosh x = \frac{e^{x} + e^{-x}}{2}.
$$

### Método alternativo: identidades hiperbólicas

Las identidades anteriores reescriben la combinación lineal como

$$
c_1 + c_2 x + c_3 \sinh x + c_4 \cosh x
= c_1 + c_2 x + \frac{c_3 + c_4}{2} e^{x} + \frac{c_4 - c_3}{2} e^{-x}.
$$

Si esta expresión se anula para todo $x$, la independencia lineal del conjunto $\{1, x, e^{x}, e^{-x}\}$ fuerza

$$
c_1 = 0, \qquad c_2 = 0, \qquad c_3 + c_4 = 0, \qquad c_4 - c_3 = 0.
$$

Las dos últimas ecuaciones dan $c_3 = c_4 = 0$. La única combinación lineal nula es la trivial, de modo que las funciones son linealmente independientes.
