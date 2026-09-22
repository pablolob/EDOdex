---
title: "Boyce 1.1 Ejercicio 11"
exercise-id: boyce-c01-s01-e011
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 1.1, ejercicio 11"
statement-status: accepted
solution-status: draft
topics:
  - fundamentos
competencies:
  - verificar.solucion
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c01s01i01-p025.png
---

## Enunciado

Verifique que la función o funciones que se dan son una solución de la ecuación diferencial: $$2x^2 y'' + 3xy' - y = 0, \quad x > 0, \quad y_1(x) = x^{1/2}, \quad y_2(x) = x^{-1}$$

## Solución

Ambas funciones satisfacen la ecuación diferencial. Al sustituir $y_1(x)=x^{1/2}$ y $y_2(x)=x^{-1}$ en el miembro izquierdo, en cada caso se obtiene la identidad

$$
2x^2 y'' + 3xy' - y = 0.
$$

## Resolución

Se verifica primero $y_1(x) = x^{1/2}$. Se deriva dos veces aplicando la **regla de la potencia**:

$$
y_1' = \frac{1}{2}x^{-1/2}, \qquad y_1'' = -\frac{1}{4}x^{-3/2}.
$$

Se sustituyen $y_1$, $y_1'$ y $y_1''$ en el miembro izquierdo de la ecuación:

$$
\begin{aligned}
2x^2 y_1'' + 3x y_1' - y_1
&= 2x^2\!\left(-\frac{1}{4}x^{-3/2}\right) + 3x\!\left(\frac{1}{2}x^{-1/2}\right) - x^{1/2} \\
&= -\frac{1}{2}x^{1/2} + \frac{3}{2}x^{1/2} - x^{1/2} \\
&= 0.
\end{aligned}
$$

Se verifica después $y_2(x) = x^{-1}$. Sus dos primeras derivadas son

$$
y_2' = -x^{-2}, \qquad y_2'' = 2x^{-3}.
$$

Se sustituyen en el miembro izquierdo:

$$
\begin{aligned}
2x^2 y_2'' + 3x y_2' - y_2
&= 2x^2\!\left(2x^{-3}\right) + 3x\!\left(-x^{-2}\right) - x^{-1} \\
&= 4x^{-1} - 3x^{-1} - x^{-1} \\
&= 0.
\end{aligned}
$$

En ambos casos el miembro izquierdo se anula idénticamente para todo $x > 0$. Por tanto, $y_1$ y $y_2$ son soluciones de la ecuación diferencial en el intervalo indicado.

## Observaciones

La verificación emplea únicamente cálculo diferencial: las derivadas se obtienen con la regla de la potencia, sin necesidad de resolver la ecuación. Las dos funciones están definidas para todo $x > 0$, que es precisamente el intervalo en el que se pide comprobar la solución.
