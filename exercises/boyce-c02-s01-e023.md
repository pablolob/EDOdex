---
title: "Boyce 2.1 Ejercicio 23"
exercise-id: boyce-c02-s01-e023
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.1, ejercicio 23"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - verificar.solucion
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c02s01i02-p039.png
---

## Enunciado

Demuestre que si $y = \phi(x)$ es una solución de $y' + p(x)y = 0$, entonces $y = c\phi(x)$ también es una solución para cualquier valor de la constante $c$.

## Solución

Si $\phi$ satisface la ecuación, entonces $y = c\phi(x)$ también la satisface para cualquier constante $c$:

$$
(c\phi)' + p(x)(c\phi) = c\left(\phi' + p(x)\phi\right) = 0.
$$

## Resolución

Sea $y = c\phi(x)$ con $c$ constante. Por la regla del múltiplo constante, su derivada es $y' = c\phi'(x)$. Al sustituir $y$ y $y'$ en el miembro izquierdo de la ecuación $y' + p(x)y = 0$ resulta

$$
\begin{aligned}
y' + p(x)y &= c\phi'(x) + p(x)\,c\phi(x) \\
&= c\left(\phi'(x) + p(x)\phi(x)\right).
\end{aligned}
$$

Por hipótesis $\phi$ es solución, de modo que $\phi'(x) + p(x)\phi(x) = 0$ para todo $x$ del dominio. En consecuencia,

$$
y' + p(x)y = c\cdot 0 = 0,
$$

y $y = c\phi(x)$ satisface la ecuación para cualquier valor de $c$.

## Observaciones

El resultado es la propiedad de **homogeneidad** de las ecuaciones lineales: el operador $L[y] = y' + p(x)y$ es lineal, y por ello $L[c\phi] = c\,L[\phi]$. La ecuación es **lineal** y **homogénea**, así que el conjunto de sus soluciones es un espacio vectorial; en particular, $c = 0$ da la solución trivial $y = 0$. La identidad se cumple en cualquier intervalo donde $p$ sea continua y $\phi$ esté definida.
