---
title: "Zill Repaso C2 Ejercicio 8"
exercise-id: zill-c02-sr-e008
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 2, ejercicio 8"
language: es
competencies:
  - verificar.solucion
  - analizar-cualitativamente.puntos-equilibrio
solution-status: draft
statement-status: accepted
topics:
  - primer-orden
source-images:
  - c02sri01-p094.png
difficulty:
  conceptual: 1
  technical: 1
---

## Enunciado

**Responda los problemas 1-12 sin consultar las respuestas del libro. Llene los espacios en blanco o responda si es verdadero o falso.**

Por inspección, dos soluciones de la ecuación diferencial $y' + |y| = 2$ son ________

## Solución

Por inspección, dos soluciones constantes de la ecuación son

$$
y=2 \qquad\text{y}\qquad y=-2.
$$

## Resolución

La ecuación $y' + |y| = 2$ es autónoma: el miembro derecho depende solo de $y$. Por ello se proponen soluciones constantes $y=c$. Para una función constante la derivada se anula, $y'=0$, de modo que la ecuación se reduce a

$$
|c| = 2.
$$

De esta condición resultan los dos valores $c=2$ y $c=-2$. La sustitución directa confirma cada uno:

$$
\begin{aligned}
y=2: &\quad y' + |y| = 0 + |2| = 2, \\
y=-2: &\quad y' + |y| = 0 + |{-2}| = 2.
\end{aligned}
$$

Ambas igualdades se cumplen para todo $x\in\mathbb{R}$, luego las funciones constantes $y=2$ y $y=-2$ satisfacen la ecuación.

## Observaciones

Las dos soluciones halladas son las soluciones de equilibrio de la ecuación. Por el signo de $2-|y|$, el equilibrio $y=2$ es asintóticamente estable y el equilibrio $y=-2$ es inestable.

La ecuación no es lineal y admite más soluciones además de las constantes. En la región $y\ge 0$ equivale a $y'=2-y$, con familia $y=2+C_1e^{-x}$; en la región $y\le 0$ equivale a $y'=2+y$, con familia $y=-2+C_2e^{x}$. Las soluciones constantes corresponden a $C_1=0$ y $C_2=0$.
