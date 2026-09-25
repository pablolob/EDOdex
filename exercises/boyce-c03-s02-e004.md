---
title: "Boyce 3.2 Ejercicio 4"
exercise-id: boyce-c03-s02-e004
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.2, ejercicio 4"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies: []
prerequisitos:
  - ecuaciones-diferenciales.wronskiano
  - derivacion.producto
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s02i01-p152.png
---

## Enunciado

En cada uno de los problemas 1 a 6, determine el wronskiano de las funciones dadas.

4. $x, xe^x$

## Solución

El wronskiano de $y_1=x$ y $y_2=xe^x$ es

$$
W(x,xe^x)=x^2e^x.
$$

## Resolución

Las funciones son $y_1=x$ y $y_2=xe^x$. Ambas están definidas y son derivables en todo $\mathbb{R}$, de modo que el wronskiano está definido en todo $\mathbb{R}$.

Sus derivadas son

$$
y_1'=1, \qquad y_2'=e^x+xe^x=e^x(1+x).
$$

Se forma el **wronskiano** del par:

$$
W(x,xe^x)=
\begin{vmatrix}
x & xe^x\\
1 & e^x(1+x)
\end{vmatrix}
=x\,e^x(1+x)-xe^x.
$$

Al distribuir y simplificar,

$$
\begin{aligned}
W &= xe^x+x^2e^x-xe^x \\
  &= x^2e^x.
\end{aligned}
$$

Por tanto, $W(x,xe^x)=x^2e^x$ para todo $x\in\mathbb{R}$.

## Observaciones

El wronskiano se anula en $x=0$, pero no es idénticamente nulo: $W(1)=e$. La anulación en un punto aislado no implica dependencia lineal; el par $\{x,xe^x\}$ es linealmente independiente.

En cualquier intervalo que no contiene a $0$, $W\neq 0$ y $\{x,xe^x\}$ es un conjunto fundamental de soluciones de $x^2y''-(x^2+2x)y'+(x+2)y=0$. El valor $W=x^2e^x$ coincide con el que proporciona la fórmula de Abel para esa ecuación.
