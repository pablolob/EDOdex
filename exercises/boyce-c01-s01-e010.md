---
title: "Boyce 1.1 Ejercicio 10"
exercise-id: boyce-c01-s01-e010
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 1.1, ejercicio 10"
statement-status: accepted
solution-status: draft
topics:
  - fundamentos
competencies:
  - verificar.solucion
prerequisitos:
  - derivacion.regla-cadena
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c01s01i01-p025.png
---

## Enunciado

Verifique que la función o funciones que se dan son una solución de la ecuación diferencial: $$y'''' + 4y''' + 3y = x, \quad y_1(x) = \frac{x}{3}, \quad y_2(x) = e^{-x} + \frac{x}{3}$$

## Solución

Ambas funciones satisfacen la ecuación diferencial. Al sustituir cada una se obtiene la identidad

$$
y'''' + 4y''' + 3y = x.
$$

## Resolución

Para $y_1(x)=\dfrac{x}{3}$ se calculan las derivadas:

$$
y_1' = \frac{1}{3},\qquad y_1'' = 0,\qquad y_1''' = 0,\qquad y_1'''' = 0.
$$

Se sustituyen en el miembro izquierdo de la ecuación:

$$
y_1'''' + 4y_1''' + 3y_1 = 0 + 4\cdot 0 + 3\cdot\frac{x}{3} = x.
$$

La identidad se cumple; $y_1$ es una solución.

Para $y_2(x)=e^{-x}+\dfrac{x}{3}$, la derivación de $e^{-x}$ alterna el signo. Se calculan las derivadas:

$$
\begin{aligned}
y_2' &= -e^{-x} + \frac{1}{3}, \\
y_2'' &= e^{-x}, \\
y_2''' &= -e^{-x}, \\
y_2'''' &= e^{-x}.
\end{aligned}
$$

Se sustituyen en el miembro izquierdo:

$$
\begin{aligned}
y_2'''' + 4y_2''' + 3y_2
&= e^{-x} + 4\left(-e^{-x}\right) + 3\left(e^{-x} + \frac{x}{3}\right) \\
&= e^{-x} - 4e^{-x} + 3e^{-x} + x \\
&= x.
\end{aligned}
$$

La identidad se cumple; $y_2$ es una solución.

## Observaciones

Ambas funciones están definidas para todo $x\in\mathbb{R}$; la verificación emplea únicamente cálculo diferencial. El término $\dfrac{x}{3}$ es común a las dos funciones. El término adicional $e^{-x}$ de $y_2$ satisface la ecuación homogénea asociada $y'''' + 4y''' + 3y = 0$, de modo que no altera el resultado del miembro izquierdo.
