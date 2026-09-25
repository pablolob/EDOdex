---
title: "Boyce 3.2 Ejercicio 17"
exercise-id: boyce-c03-s02-e017
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.2, ejercicio 17"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-primer-orden
prerequisitos:
  - ecuaciones-diferenciales.wronskiano
  - ecuaciones-diferenciales.primer-orden
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c03s02i01-p152.png
---

## Enunciado

Si el wronskiano $W$ de $f$ y $g$ es $3e^{4x}$ y si $f(x) = e^{2x}$, halle $g(x)$.

## Solución

$$
g(x) = (3x + C)e^{2x}.
$$

## Resolución

El **wronskiano** de dos funciones diferenciables $f$ y $g$ es

$$
W(f,g) = f g' - f' g.
$$

Como $f(x) = e^{2x}$, su derivada es $f'(x) = 2e^{2x}$. Al imponer $W(f,g) = 3e^{4x}$,

$$
e^{2x} g' - 2e^{2x} g = 3e^{4x}.
$$

Al dividir entre $e^{2x} > 0$ se obtiene la ecuación **lineal de primer orden**

$$
g' - 2g = 3e^{2x}.
$$

Su factor integrante es

$$
\mu(x) = \exp\!\left(\int (-2)\,dx\right) = e^{-2x}.
$$

Al multiplicar la ecuación por $\mu(x)$, el miembro izquierdo es la derivada de un producto:

$$
\frac{d}{dx}\!\left(e^{-2x} g\right) = 3 e^{-2x} e^{2x} = 3.
$$

Integrando respecto de $x$,

$$
e^{-2x} g = 3x + C,
$$

de donde

$$
g(x) = (3x + C)e^{2x}.
$$

Las funciones $f$ y $g$ están definidas y son derivables en todo $\mathbb{R}$, de modo que la solución es válida para todo $x \in \mathbb{R}$.

## Observaciones

La constante $C$ es arbitraria. La condición sobre el wronskiano determina $g$ salvo un múltiplo de $f$: en efecto, $W(f, g + Cf) = W(f,g)$, porque al añadir a la segunda columna del determinante un múltiplo de la primera este no cambia. Así, todas las funciones $(3x + C)e^{2x}$ comparten el wronskiano $3e^{4x}$ con $f(x) = e^{2x}$.
