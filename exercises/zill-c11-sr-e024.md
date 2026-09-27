---
title: "Zill Repaso C11 Ejercicio 24"
exercise-id: zill-c11-sr-e024
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 11, ejercicio 24"
statement-status: accepted
solution-status: draft
source-images:
  - c11sri02-p472.png
topics:
  - sturm-liouville
competencies:
  - clasificar.paridad
difficulty:
  conceptual: 1
  technical: 1
---

## Enunciado

La función $f(x) = e^x$ no es función par ni impar. Utilice el problema 23 para escribir $f$ como la suma de una función par y de una función impar. Identifique $f_e$ y $f_o$.

## Solución

La descomposición de $f(x) = e^x$ es

$$
f(x) = f_e(x) + f_o(x) = \frac{e^x + e^{-x}}{2} + \frac{e^x - e^{-x}}{2} = \cosh x + \sinh x.
$$

La parte par es $f_e(x) = \cosh x$ y la parte impar es $f_o(x) = \sinh x$.

## Resolución

El problema 23 establece que toda función definida en $(-\infty, \infty)$ se descompone como $f = f_e + f_o$, con

$$
f_e(x) = \frac{f(x) + f(-x)}{2}, \qquad f_o(x) = \frac{f(x) - f(-x)}{2}.
$$

Para $f(x) = e^x$ se tiene $f(-x) = e^{-x}$. Al sustituir en ambas fórmulas,

$$
\begin{aligned}
f_e(x) &= \frac{e^x + e^{-x}}{2} = \cosh x, \\
f_o(x) &= \frac{e^x - e^{-x}}{2} = \sinh x.
\end{aligned}
$$

La función $f_e$ es par: $\cosh(-x) = \cosh x$. La función $f_o$ es impar: $\sinh(-x) = -\sinh x$. Su suma recupera la función original,

$$
f_e(x) + f_o(x) = \frac{e^x + e^{-x}}{2} + \frac{e^x - e^{-x}}{2} = e^x.
$$

Por tanto, $f(x) = e^x$ se escribe como la suma de la función par $f_e(x) = \cosh x$ y la función impar $f_o(x) = \sinh x$.

## Observaciones

Las partes par e impar de $e^x$ son las funciones coseno y seno hiperbólicos. La descomposición $f = f_e + f_o$ es única. Esta separación es la que permite extender una función a su serie de cosenos mediante la extensión par y a su serie de senos mediante la extensión impar.
