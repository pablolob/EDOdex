---
title: "Boyce 1.1 Ejercicio 8"
exercise-id: boyce-c01-s01-e008
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 1.1, ejercicio 8"
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

Verifique que la función o funciones que se dan son una solución de la ecuación diferencial: $$y'' + 2y' - 3y = 0, \quad y_1(x) = e^{-3x}, \quad y_2(x) = e^x$$

## Solución

Ambas funciones satisfacen la ecuación diferencial. Al sustituir cada una se obtiene la identidad

$$
y'' + 2y' - 3y = 0.
$$

## Resolución

Se verifica $y_1(x) = e^{-3x}$. Sus derivadas son

$$
\begin{aligned}
y_1' &= -3e^{-3x}, \\
y_1'' &= 9e^{-3x}.
\end{aligned}
$$

Se sustituyen en el miembro izquierdo de la ecuación:

$$
\begin{aligned}
y_1'' + 2y_1' - 3y_1 &= 9e^{-3x} + 2\left(-3e^{-3x}\right) - 3e^{-3x} \\
&= 9e^{-3x} - 6e^{-3x} - 3e^{-3x} \\
&= 0.
\end{aligned}
$$

Se verifica $y_2(x) = e^x$. Sus derivadas son

$$
\begin{aligned}
y_2' &= e^x, \\
y_2'' &= e^x.
\end{aligned}
$$

Se sustituyen en el miembro izquierdo de la ecuación:

$$
\begin{aligned}
y_2'' + 2y_2' - 3y_2 &= e^x + 2e^x - 3e^x \\
&= 0.
\end{aligned}
$$

En ambos casos el miembro izquierdo se anula, de modo que $y_1$ y $y_2$ son soluciones de la ecuación diferencial.

## Observaciones

La verificación emplea únicamente cálculo diferencial: la derivada de $e^{-3x}$ se obtiene con la **regla de la cadena** y la de $e^x$ es inmediata. Ambas funciones están definidas para todo $x\in\mathbb{R}$.
