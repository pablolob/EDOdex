---
title: "Boyce 2.1 Ejercicio 4"
exercise-id: boyce-c02-s01-e004
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.1, ejercicio 4"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.lineales-primer-orden
prerequisitos:
  - integracion.por-partes
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c02s01i01-p038.png
---

## Enunciado

En cada uno de los problemas 1 a 8, encuentre la solución general de la ecuación diferencial dada. $$y' + \frac{1}{x}y = 3 \cos 2x, \quad x > 0$$

## Solución

$$
y(x) = \frac{3}{2}\sin 2x + \frac{3}{4x}\cos 2x + \frac{C}{x}, \quad x > 0.
$$

## Resolución

La ecuación es **lineal de primer orden** y ya está escrita en la forma estándar

$$
y' + P(x)y = q(x),
$$

con $P(x) = \dfrac{1}{x}$ y $q(x) = 3\cos 2x$. Se aplica el método del **factor integrante**:

$$
\mu(x) = \exp\!\left(\int P(x)\,dx\right) = \exp\!\left(\int \frac{1}{x}\,dx\right) = \exp(\ln x) = x,
$$

donde la simplificación $\exp(\ln x) = x$ es válida porque $x > 0$.

Al multiplicar la ecuación por $\mu(x) = x$, el miembro izquierdo se convierte en la derivada de un producto:

$$
xy' + y = 3x\cos 2x,
\qquad\text{es decir,}\qquad
\frac{d}{dx}(xy) = 3x\cos 2x.
$$

Se integran ambos miembros:

$$
xy = \int 3x\cos 2x\,dx.
$$

La integral se calcula por partes con $u = x$ y $dv = \cos 2x\,dx$, de modo que $du = dx$ y $v = \dfrac{\sin 2x}{2}$:

$$
\begin{aligned}
\int x\cos 2x\,dx
&= \frac{x\sin 2x}{2} - \int \frac{\sin 2x}{2}\,dx \\
&= \frac{x\sin 2x}{2} + \frac{\cos 2x}{4}.
\end{aligned}
$$

Por tanto,

$$
xy = \frac{3x\sin 2x}{2} + \frac{3\cos 2x}{4} + C.
$$

Al despejar $y$ se obtiene la solución general.

## Observaciones

La solución solo está definida para $x > 0$, tal como indica el enunciado, porque el factor integrante empleado es $\mu(x) = x$. Los términos en $\dfrac{1}{x}$ pueden agruparse y escribir la solución general como

$$
y(x) = \frac{3}{2}\sin 2x + \frac{1}{x}\left(\frac{3}{4}\cos 2x + C\right).
$$

Si se impusiera una condición inicial en $x_0 > 0$, el valor de $C$ quedaría determinado por $C = x_0\,y(x_0) - \dfrac{3x_0\sin 2x_0}{2} - \dfrac{3\cos 2x_0}{4}$.
