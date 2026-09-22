---
title: "Boyce 6.4 Ejercicio 8"
exercise-id: boyce-c06-s04-e008
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.4, ejercicio 8"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
  - resolver-analiticamente.delta-dirac
  - aplicar-condiciones.problema-valor-inicial
prerequisitos:
  - transformadas.transformada-laplace
  - transformadas.delta-dirac
  - transformadas.funcion-escalon
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c06s04i01-p344.png
---

## Enunciado

En cada uno de los problemas 1 a 12, encuentre la solución del problema con valor inicial dado por medio de la transformada de Laplace.

8. $y'' + 4y = 2\delta(t - \pi/4); \quad y(0) = 0, \ y'(0) = 0$

## Solución

$$
y(t) = u_{\pi/4}(t)\,\sin\!\left(2\left(t - \frac{\pi}{4}\right)\right).
$$

Equivalentemente, por tramos,

$$
y(t) =
\begin{cases}
0, & 0 \le t < \frac{\pi}{4}, \\[8pt]
\sin\!\left(2\left(t - \frac{\pi}{4}\right)\right) = -\cos(2t), & t \ge \frac{\pi}{4}.
\end{cases}
$$

## Resolución

Se aplica la **transformada de Laplace**, indicada porque el término forzante es un **impulso de Dirac**. Sea $Y(s) = \mathscr{L}\{y(t)\}$. Como $y(0) = 0$ y $y'(0) = 0$,

$$
\mathscr{L}\{y''\} = s^2 Y(s) - s\,y(0) - y'(0) = s^2 Y(s).
$$

La transformada del impulso es $\mathscr{L}\{\delta(t-a)\} = e^{-as}$, de modo que $\mathscr{L}\{2\delta(t-\pi/4)\} = 2e^{-\pi s/4}$. Al transformar la ecuación resulta

$$
s^2 Y(s) + 4Y(s) = 2e^{-\pi s/4},
$$

es decir,

$$
Y(s) = \frac{2e^{-\pi s/4}}{s^2+4}.
$$

El par básico de la tabla da

$$
\mathscr{L}^{-1}\!\left\{\frac{2}{s^2+4}\right\} = \sin(2t).
$$

El factor $e^{-\pi s/4}$ corresponde a la forma $e^{-as}F(s)$ con $a = \pi/4$ y $F(s) = 2/(s^2+4)$. Por el **segundo teorema de traslación**, $\mathscr{L}^{-1}\{e^{-as}F(s)\} = u_a(t)f(t-a)$, con $f(t) = \sin(2t)$. Por tanto,

$$
y(t) = u_{\pi/4}(t)\,\sin\!\left(2\left(t - \frac{\pi}{4}\right)\right).
$$

La solución satisface las condiciones iniciales: para $0 \le t < \pi/4$ la función escalón es nula y $y(t) = 0$, de modo que $y(0) = 0$ y $y'(0) = 0$. El impulso introduce en $t = \pi/4$ un salto de magnitud $2$ en $y'$, mientras que $y$ permanece continua. La solución es válida para todo $t \ge 0$.

## Observaciones

El término $2\delta(t-\pi/4)$ no modifica la posición en $t = \pi/4$, pero sí la velocidad: al integrar $y'' + 4y = 2\delta(t-\pi/4)$ en un entorno de $t = \pi/4$ se obtiene $y'(\pi/4^+) - y'(\pi/4^-) = 2$. La respuesta para $t \ge \pi/4$ es la oscilación libre $\sin(2(t-\pi/4))$, que puede escribirse como $-\cos(2t)$; al no existir amortiguamiento, la amplitud del impulso se conserva indefinidamente.
