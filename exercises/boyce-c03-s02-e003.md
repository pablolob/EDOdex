---
title: "Boyce 3.2 Ejercicio 3"
exercise-id: boyce-c03-s02-e003
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.2, ejercicio 3"
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

3. $e^{-2x}, xe^{-2x}$

## Solución

El wronskiano del par es

$$
W\!\left(e^{-2x},\,xe^{-2x}\right)(x)=e^{-4x}.
$$

## Resolución

Las funciones son $y_1=e^{-2x}$ y $y_2=xe^{-2x}$. Ambas son derivables en todo $\mathbb{R}$. La derivada de $y_1$ es inmediata; la de $y_2$ requiere la regla del producto:

$$
y_1'=-2e^{-2x}, \qquad y_2'=e^{-2x}-2xe^{-2x}=(1-2x)e^{-2x}.
$$

El **wronskiano** del par es el determinante formado por las funciones y sus primeras derivadas:

$$
W(y_1,y_2)=
\begin{vmatrix}
e^{-2x} & xe^{-2x}\\
-2e^{-2x} & (1-2x)e^{-2x}
\end{vmatrix}.
$$

Al desarrollar el determinante,

$$
\begin{aligned}
W(y_1,y_2) &= e^{-2x}(1-2x)e^{-2x} - \left(-2e^{-2x}\right)\left(xe^{-2x}\right) \\
&= (1-2x)e^{-4x}+2xe^{-4x} \\
&= e^{-4x}.
\end{aligned}
$$

El resultado vale para todo $x\in\mathbb{R}$, pues las exponenciales y el factor polinómico están definidos en todo el eje real.

## Observaciones

El wronskiano $e^{-4x}$ nunca se anula, ya que $e^{-4x}>0$ para todo $x$. Por el criterio del wronskiano, $e^{-2x}$ y $xe^{-2x}$ son **linealmente independientes** en $\mathbb{R}$. Ambas funciones resuelven $y''+4y'+4y=0$, cuya ecuación característica tiene la raíz doble $r=-2$; por tanto, forman un conjunto fundamental de soluciones de esa ecuación.
