---
title: "Boyce 6.1 Ejercicio 11"
exercise-id: boyce-c06-s01-e011
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.1, ejercicio 11"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
  - aplicar-condiciones.problema-valor-inicial
prerequisitos:
  - transformadas.transformada-laplace
  - algebra.factorizacion-polinomios
  - integracion.fracciones-parciales
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s01i01-p324.png
---

## Enunciado

En cada uno de los problemas 11 a 23 aplique la transformada de Laplace para resolver el problema con valor inicial dado.

11. $y'' - y' - 6y = 0; \quad y(0) = 1, \quad y'(0) = -1$

## Solución

La solución del problema con valor inicial es

$$
y(t) = \frac{1}{5}e^{3t} + \frac{4}{5}e^{-2t}, \qquad t \ge 0.
$$

## Resolución

Se aplica la **transformada de Laplace** a ambos miembros. Sea $Y(s)=\mathcal{L}\{y(t)\}$. Las transformadas de las derivadas incorporan las condiciones iniciales:

$$
\mathcal{L}\{y'\} = sY(s) - y(0) = sY(s) - 1,
$$

$$
\mathcal{L}\{y''\} = s^{2}Y(s) - s\,y(0) - y'(0) = s^{2}Y(s) - s + 1.
$$

Al transformar la ecuación $y''-y'-6y=0$ resulta

$$
\begin{aligned}
\left(s^{2}Y(s)-s+1\right) - \left(sY(s)-1\right) - 6Y(s) &= 0, \\
\left(s^{2}-s-6\right)Y(s) - s + 2 &= 0.
\end{aligned}
$$

Se despeja $Y(s)$:

$$
Y(s) = \frac{s-2}{s^{2}-s-6}.
$$

El denominador factoriza como $s^{2}-s-6=(s-3)(s+2)$. Se descompone en **fracciones parciales**:

$$
\frac{s-2}{(s-3)(s+2)} = \frac{A}{s-3} + \frac{B}{s+2}.
$$

Los coeficientes se obtienen al evaluar cada factor en el polo del otro:

$$
A = \left.\frac{s-2}{s+2}\right|_{s=3} = \frac{1}{5}, \qquad
B = \left.\frac{s-2}{s-3}\right|_{s=-2} = \frac{4}{5}.
$$

Por lo tanto,

$$
Y(s) = \frac{1}{5}\cdot\frac{1}{s-3} + \frac{4}{5}\cdot\frac{1}{s+2}.
$$

Se invierte término a término con el par $\mathcal{L}^{-1}\left\{\dfrac{1}{s-a}\right\}=e^{at}$:

$$
y(t) = \frac{1}{5}e^{3t} + \frac{4}{5}e^{-2t}.
$$

La solución satisface $y(0)=\frac{1}{5}+\frac{4}{5}=1$ y $y'(0)=\frac{3}{5}-\frac{8}{5}=-1$, como exige el enunciado.

## Observaciones

La ecuación es lineal, homogénea y de coeficientes constantes, por lo que también puede resolverse con la **ecuación característica**: $r^{2}-r-6=0$ da las raíces $r=3$ y $r=-2$, y las condiciones iniciales fijan la misma solución. El enunciado prescribe la vía de Laplace, que evita determinar primero la solución general. La solución es una combinación de dos exponenciales reales y está definida para todo $t \ge 0$.
