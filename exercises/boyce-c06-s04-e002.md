---
title: "Boyce 6.4 Ejercicio 2"
exercise-id: boyce-c06-s04-e002
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.4, ejercicio 2"
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
  technical: 2
source-images:
  - c06s04i01-p344.png
---

## Enunciado

En cada uno de los problemas 1 a 12, encuentre la solución del problema con valor inicial dado por medio de la transformada de Laplace.

2. $y'' + 4y = \delta(t - \pi) - \delta(t - 2\pi); \quad y(0) = 0, \ y'(0) = 0$

## Solución

$$
y(t) = \frac{1}{2}\sin(2t)\left[u_\pi(t) - u_{2\pi}(t)\right]
=
\begin{cases}
0, & 0 \le t < \pi, \\
\dfrac{1}{2}\sin(2t), & \pi \le t < 2\pi, \\
0, & t \ge 2\pi.
\end{cases}
$$

## Resolución

Sea $Y(s) = \mathcal{L}\{y(t)\}$. La **transformada de Laplace** de la ecuación es

$$
s^2Y(s) - s\,y(0) - y'(0) + 4Y(s) = e^{-\pi s} - e^{-2\pi s},
$$

donde se emplean $\mathcal{L}\{y''\} = s^2Y(s) - s\,y(0) - y'(0)$ y $\mathcal{L}\{\delta(t-a)\} = e^{-as}$. Con $y(0) = 0$ y $y'(0) = 0$,

$$
(s^2+4)Y(s) = e^{-\pi s} - e^{-2\pi s}
\quad\Longrightarrow\quad
Y(s) = \frac{e^{-\pi s} - e^{-2\pi s}}{s^2+4}.
$$

De la tabla de pares, $\mathcal{L}^{-1}\{1/(s^2+4)\} = \frac{1}{2}\sin(2t)$. Sea $g(t) = \frac{1}{2}\sin(2t)$. El **segundo teorema de traslación** establece

$$
\mathcal{L}^{-1}\left\{e^{-as}G(s)\right\} = g(t-a)\,u_a(t),
$$

donde $u_a$ es la **función escalón unitario**. Al aplicarlo a cada término,

$$
y(t) = \frac{1}{2}\sin\!\big(2(t-\pi)\big)\,u_\pi(t) - \frac{1}{2}\sin\!\big(2(t-2\pi)\big)\,u_{2\pi}(t).
$$

Como $\sin\!\big(2(t-\pi)\big) = \sin(2t-2\pi) = \sin(2t)$ y $\sin\!\big(2(t-2\pi)\big) = \sin(2t-4\pi) = \sin(2t)$,

$$
y(t) = \frac{1}{2}\sin(2t)\left[u_\pi(t) - u_{2\pi}(t)\right].
$$

Al evaluar los escalones en cada intervalo se obtiene la expresión por tramos de la sección anterior.

## Observaciones

La solución es continua para todo $t \ge 0$. El primer impulso comunica a la velocidad un salto $+1$ en $t = \pi$ y el segundo un salto $-1$ en $t = 2\pi$; por ello el movimiento existe solo en $\pi \le t < 2\pi$ y la solución vuelve a cero tras el segundo impulso.

El intervalo de validez es $[0, \infty)$: la forzante es una combinación de impulsos y el coeficiente de $y''$ es constante no nulo.
