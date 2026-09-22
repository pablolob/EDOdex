---
title: "Zill Repaso C1 Ejercicio 38"
exercise-id: zill-c01-sr-e038
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 1, ejercicio 38"
topics:
  - fundamentos
competencies:
  - aplicar-condiciones.problema-valor-inicial
  - verificar.condiciones-iniciales
difficulty:
  conceptual: 1
  technical: 1
solution-status: draft
---

## Enunciado

**Problemas 35 a 38.**

En los problemas 35 a 38, $y = c_1 e^{3x} + c_2 e^{-x} - 2x$ es una familia de soluciones de dos parámetros de la ED de segundo orden $y'' - 2y' - 3y = 6x + 4$. Determine una solución del PVI de segundo orden que consiste en esta ecuación diferencial y en las condiciones iniciales dadas.

38. $y(-1) = 0,\quad y'(-1) = 1$

## Solución

La solución del PVI es

$$
y = \frac{1}{4}e^{3x+3} - \frac{9}{4}e^{-x-1} - 2x.
$$

## Resolución

Se parte de la familia de soluciones y su derivada:

$$
\begin{aligned}
y   &= c_1 e^{3x} + c_2 e^{-x} - 2x, \\
y'  &= 3c_1 e^{3x} - c_2 e^{-x} - 2.
\end{aligned}
$$

Se evalúan las condiciones iniciales $y(-1) = 0$ e $y'(-1) = 1$:

$$
\begin{aligned}
y(-1)   &= c_1 e^{-3} + c_2 e^{1} - 2(-1) = c_1 e^{-3} + c_2 e + 2 = 0
          \;\Longrightarrow\; c_1 e^{-3} + c_2 e = -2, \\[4pt]
y'(-1)  &= 3c_1 e^{-3} - c_2 e^{1} - 2 = 1
          \;\Longrightarrow\; 3c_1 e^{-3} - c_2 e = 3.
\end{aligned}
$$

Se suma la segunda ecuación a la primera:

$$
(c_1 e^{-3} + 3c_1 e^{-3}) + (c_2 e - c_2 e) = -2 + 3
\;\Longrightarrow\; 4c_1 e^{-3} = 1
\;\Longrightarrow\; c_1 = \frac{e^{3}}{4}.
$$

De la segunda ecuación se despeja $c_2$:

$$
c_2 e = 3c_1 e^{-3} - 3 = 3\!\left(\frac{e^{3}}{4}\right)\!e^{-3} - 3 = \frac{3}{4} - 3 = -\frac{9}{4}
\;\Longrightarrow\; c_2 = -\frac{9}{4e}.
$$

La solución particular del PVI es

$$
y = \frac{e^{3}}{4}\,e^{3x} - \frac{9}{4e}\,e^{-x} - 2x
  = \frac{1}{4}e^{3x+3} - \frac{9}{4}e^{-x-1} - 2x.
$$

## Observaciones

En este caso las condiciones iniciales están dadas en $x = -1$. El sistema se resuelve cómodamente por suma de ecuaciones porque los coeficientes de $c_2 e$ son opuestos ($+1$ y $-1$).

