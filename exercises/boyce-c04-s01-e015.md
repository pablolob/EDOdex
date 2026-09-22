---
title: "Boyce 4.1 Ejercicio 15"
exercise-id: boyce-c04-s01-e015
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.1, ejercicio 15"
topics:
  - orden-superior
competencies:
  - verificar.solucion
prerequisitos:
  - ecuaciones-diferenciales.wronskiano
  - matrices.determinantes
difficulty:
  conceptual: 1
  technical: 2
statement-status: accepted
solution-status: draft
source-images:
  - c04s01i02-p223.png
---

## Enunciado

En cada uno de los problemas 13 a 18, compruebe que las funciones dadas son soluciones de la ecuación diferencial y determine su wronskiano.

15. $y''' + 2y'' - y' - 2y = 0; \quad e^x, e^{-x}, e^{-2x}$

## Solución

Las funciones $e^{x}$, $e^{-x}$ y $e^{-2x}$ son soluciones de la ecuación en todo $\mathbb{R}$. Su wronskiano es

$$
W(x) = -6e^{-2x}.
$$

## Resolución

Se comprueba primero que las tres funciones son soluciones. Todas tienen la forma $y=e^{rx}$, con derivadas

$$
y' = r\,e^{rx}, \qquad y'' = r^{2}e^{rx}, \qquad y''' = r^{3}e^{rx}.
$$

Al sustituirlas en el miembro izquierdo de la ecuación resulta

$$
\begin{aligned}
y''' + 2y'' - y' - 2y &= r^{3}e^{rx} + 2r^{2}e^{rx} - r\,e^{rx} - 2e^{rx} \\
&= \left(r^{3} + 2r^{2} - r - 2\right)e^{rx} \\
&= (r-1)(r+1)(r+2)\,e^{rx}.
\end{aligned}
$$

La exponencial $e^{rx}$ no se anula para ningún valor de $x$. Por tanto $y=e^{rx}$ satisface la ecuación para todo $x$ exactamente cuando $r$ es una raíz del polinomio $r^{3}+2r^{2}-r-2$. Sus raíces son $r=1$, $r=-1$ y $r=-2$, que corresponden a las funciones $e^{x}$, $e^{-x}$ y $e^{-2x}$. Las tres son soluciones en todo $\mathbb{R}$.

El wronskiano de las tres funciones es el determinante

$$
W(x) = \begin{vmatrix} e^{x} & e^{-x} & e^{-2x} \\ e^{x} & -e^{-x} & -2e^{-2x} \\ e^{x} & e^{-x} & 4e^{-2x} \end{vmatrix}.
$$

Se extrae de cada columna el factor común $e^{x}$, $e^{-x}$ y $e^{-2x}$, respectivamente:

$$
W(x) = e^{x}e^{-x}e^{-2x} \begin{vmatrix} 1 & 1 & 1 \\ 1 & -1 & -2 \\ 1 & 1 & 4 \end{vmatrix}.
$$

El determinante restante se evalúa por expansión en la primera fila:

$$
\begin{vmatrix} 1 & 1 & 1 \\ 1 & -1 & -2 \\ 1 & 1 & 4 \end{vmatrix}
= 1\,(-4+2) - 1\,(4+2) + 1\,(1+1) = -2 - 6 + 2 = -6.
$$

Como $e^{x}e^{-x}e^{-2x} = e^{-2x}$, se obtiene

$$
W(x) = -6e^{-2x}.
$$

## Observaciones

El wronskiano no se anula en ningún punto, $W(x)=-6e^{-2x}\ne 0$. Por el criterio del wronskiano, las tres funciones son linealmente independientes y forman un conjunto fundamental de soluciones de la ecuación.

### Método alternativo: fórmula de Abel

La ecuación tiene coeficientes constantes y el término en $y''$ es $2y''$. La fórmula de Abel da $W(x) = C\exp\!\left(-\int 2\,dx\right) = Ce^{-2x}$. La constante se fija evaluando el wronskiano en $x=0$:

$$
W(0) = \begin{vmatrix} 1 & 1 & 1 \\ 1 & -1 & -2 \\ 1 & 1 & 4 \end{vmatrix} = -6,
$$

de donde $C=-6$ y $W(x)=-6e^{-2x}$, en coincidencia con el cálculo directo.
