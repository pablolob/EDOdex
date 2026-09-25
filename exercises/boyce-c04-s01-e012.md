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
competencies:
  - modelizar.formular-edo
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c04s01i02-p223.png
---

## Enunciado

En cada uno de los problemas 7 a 12 elimine las constantes $c_1, c_2, \ldots, c_n$ entre las expresiones para $y$ y sus derivadas $y', \ldots, y^{(n-1)}$. Con ello, determine la ecuación diferencial que satisface la función dada.

12. $y = c_1 + c_2 x + c_3 \sinh x + c_4 \cosh x$

## Solución

La familia de funciones satisface la ecuación diferencial **lineal, homogénea y de cuarto orden**

$$
y'''' - y'' = 0,
$$

definida para todo $x \in \mathbb{R}$.

## Resolución

La familia contiene cuatro constantes arbitrarias, $c_1$, $c_2$, $c_3$ y $c_4$, de modo que la ecuación diferencial que la satisface es de **cuarto orden**. Se deriva la expresión de $y$ sucesivamente:

$$
\begin{aligned}
y &= c_1 + c_2 x + c_3\sinh x + c_4\cosh x, \\
y' &= c_2 + c_3\cosh x + c_4\sinh x, \\
y'' &= c_3\sinh x + c_4\cosh x, \\
y''' &= c_3\cosh x + c_4\sinh x, \\
y'''' &= c_3\sinh x + c_4\cosh x.
\end{aligned}
$$

Las constantes $c_1$ y $c_2$ desaparecen a partir de $y''$. Las derivadas de las funciones hiperbólicas son $\dfrac{d}{dx}\sinh x = \cosh x$ y $\dfrac{d}{dx}\cosh x = \sinh x$, de modo que cada dos derivaciones la combinación $c_3\sinh x + c_4\cosh x$ se reproduce. Por eso la segunda y la cuarta derivada coinciden:

$$
y'''' = c_3\sinh x + c_4\cosh x = y''.
$$

Al pasar $y''$ al miembro izquierdo se obtiene una relación sin las constantes:

$$
y'''' - y'' = 0.
$$

**Verificación.** Al sustituir $y''$ y $y''''$ en el miembro izquierdo,

$$
y'''' - y'' = \left(c_3\sinh x + c_4\cosh x\right) - \left(c_3\sinh x + c_4\cosh x\right) = 0,
$$

para todo $x \in \mathbb{R}$ y cualesquiera valores de las constantes.

## Observaciones

La ecuación $y'''' - y'' = 0$ es **lineal, homogénea y de coeficientes constantes**. Su ecuación característica es $r^4 - r^2 = r^2(r-1)(r+1)$, con la raíz doble $r = 0$ y las raíces $r = \pm 1$. Por ello $\{1,\, x,\, \sinh x,\, \cosh x\}$ es un conjunto fundamental de soluciones. Al ser lineal, la ecuación no posee soluciones singulares.

Las funciones $\sinh x$ y $\cosh x$ generan el mismo subespacio que $e^{x}$ y $e^{-x}$:

$$
\sinh x = \frac{e^{x} - e^{-x}}{2}, \qquad \cosh x = \frac{e^{x} + e^{-x}}{2}.
$$

En general, una familia con $n$ constantes arbitrarias origina una ecuación diferencial de orden $n$.

### Método alternativo: base exponencial

Al reescribir la familia en la base $\{1,\, x,\, e^{x},\, e^{-x}\}$,

$$
y = c_1 + c_2 x + A e^{x} + B e^{-x},
$$

con $A = \dfrac{c_3 + c_4}{2}$ y $B = \dfrac{c_4 - c_3}{2}$, la segunda derivada es $y'' = A e^{x} + B e^{-x}$. Como las exponenciales se reproducen cada dos derivaciones, $y'''' = A e^{x} + B e^{-x} = y''$, lo que conduce a la misma ecuación $y'''' - y'' = 0$.
