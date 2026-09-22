---
title: "Boyce 6.2 Ejercicio 10"
exercise-id: boyce-c06-s02-e010
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.2, ejercicio 10"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
  - resolver-analiticamente.escalon-unitario
prerequisitos:
  - transformadas.transformada-laplace
  - transformadas.funcion-escalon
  - calculo-avanzado.integrales-impropias
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c06s02i01-p332.png
---

## Enunciado

Encuentre la transformada de Laplace de la función dada:

10. $f(t) = u_1(t) + 2u_3(t) - 6u_4(t)$

## Solución

$$
F(s) = \mathcal{L}\{f(t)\} = \frac{e^{-s} + 2e^{-3s} - 6e^{-4s}}{s}, \qquad s > 0.
$$

## Resolución

La función escalón unitario se define por tramos como

$$
u_c(t) =
\begin{cases}
0, & t < c, \\
1, & t \ge c.
\end{cases}
$$

De este modo $u_1(t) = u(t-1)$, $u_3(t) = u(t-3)$ y $u_4(t) = u(t-4)$. La transformada de $u_c$ se obtiene directamente de la definición integral. Como $u_c$ se anula antes de $c$ y vale $1$ a partir de $c$,

$$
\mathcal{L}\{u_c(t)\}
= \int_0^\infty e^{-st}u_c(t)\,dt
= \int_c^\infty e^{-st}\,dt
= \left[-\frac{e^{-st}}{s}\right]_c^\infty
= \frac{e^{-cs}}{s}, \qquad s > 0.
$$

Al aplicar la linealidad de la transformada y sustituir $c = 1, 3, 4$,

$$
\begin{aligned}
F(s)
&= \mathcal{L}\{u_1(t)\} + 2\,\mathcal{L}\{u_3(t)\} - 6\,\mathcal{L}\{u_4(t)\} \\
&= \frac{e^{-s}}{s} + \frac{2e^{-3s}}{s} - \frac{6e^{-4s}}{s}
= \frac{e^{-s} + 2e^{-3s} - 6e^{-4s}}{s}.
\end{aligned}
$$

## Observaciones

La función escalón $u_c$ vale $0$ en $t < c$ y $1$ en $t \ge c$; cada exponencial $e^{-cs}$ registra el instante $c$ en que el escalón correspondiente se activa. La transformada converge para $s > 0$, donde la integral impropia $\int_c^\infty e^{-st}\,dt$ es finita.
