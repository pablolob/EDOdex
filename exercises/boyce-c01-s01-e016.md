---
title: "Boyce 1.1 Ejercicio 16"
exercise-id: boyce-c01-s01-e016
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 1.1, ejercicio 16"
topics:
  - fundamentos
competencies:
  - verificar.solucion
prerequisitos:
  - derivacion.regla-cadena
  - polinomios.resolver
difficulty:
  conceptual: 1
  technical: 1
statement-status: accepted
solution-status: draft
source-images:
  - c01s01i02-p026.png
---

## Enunciado

En cada uno de los problemas 15 a 18, determine los valores de $r$ para los que la ecuación diferencial dada tiene soluciones de la forma $y = e^{rx}$.

16. $y'' - y = 0$

## Solución

La ecuación $y'' - y = 0$ admite soluciones de la forma $y = e^{rx}$ para

$$
r = \pm 1,
$$

es decir, $r = 1$ y $r = -1$.

## Resolución

Se sustituye $y = e^{rx}$ en la ecuación. Sus dos primeras derivadas son

$$
y' = r\,e^{rx}, \qquad y'' = r^{2}\,e^{rx}.
$$

Al sustituir en el miembro izquierdo se obtiene

$$
\begin{aligned}
y'' - y &= r^{2} e^{rx} - e^{rx} \\
&= (r^{2} - 1)\,e^{rx}.
\end{aligned}
$$

La exponencial $e^{rx}$ no se anula para ningún valor real de $x$. Por tanto, la igualdad $y'' - y = 0$ se cumple para todo $x$ exactamente cuando se anula el factor restante:

$$
r^{2} - 1 = 0 \iff r^{2} = 1 \iff r = \pm 1.
$$

Ambos valores son admisibles: para $r = 1$ resulta $y = e^{x}$, y para $r = -1$ resulta $y = e^{-x}$. Las dos funciones satisfacen la ecuación.

## Observaciones

La elección de la forma $y = e^{rx}$ convierte la operación de derivar en una multiplicación por $r$. Por eso el problema diferencial se transforma en el problema algebraico $r^{2} - 1 = 0$, cuyas raíces son los valores de $r$ buscados.
