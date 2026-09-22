---
title: "Boyce 6.4 Ejercicio 9"
exercise-id: boyce-c06-s04-e009
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.4, ejercicio 9"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
  - resolver-analiticamente.escalon-unitario
  - resolver-analiticamente.delta-dirac
  - aplicar-condiciones.problema-valor-inicial
prerequisitos:
  - transformadas.transformada-laplace
  - transformadas.funcion-escalon
  - transformadas.delta-dirac
  - integracion.fracciones-parciales
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s04i01-p344.png
---

## Enunciado

En cada uno de los problemas 1 a 12, encuentre la solución del problema con valor inicial dado por medio de la transformada de Laplace.

9. $y'' + y = u_{\pi/2}(t) + \delta(t - \pi) - u_{3\pi/2}(t); \quad y(0) = 0, \ y'(0) = 0$

## Solución

La solución del problema con valor inicial es

$$
y(t) = u_{\pi/2}(t)\left(1 - \sin t\right) - u_{3\pi/2}(t)\left(1 + \sin t\right) - u_{\pi}(t)\sin t,
$$

donde $u_a(t) = u(t-a)$ es la función escalón unitario. Equivalentemente, por tramos,

$$
y(t) =
\begin{cases}
0, & 0 \le t < \dfrac{\pi}{2}, \\[8pt]
1 - \sin t, & \dfrac{\pi}{2} \le t < \pi, \\[8pt]
1 - 2\sin t, & \pi \le t < \dfrac{3\pi}{2}, \\[8pt]
-3\sin t, & t \ge \dfrac{3\pi}{2}.
\end{cases}
$$

## Resolución

Se aplica la **transformada de Laplace**. Sea $Y(s) = \mathcal{L}\{y(t)\}$. Con $y(0) = 0$ y $y'(0) = 0$,

$$
\mathcal{L}\{y''\} = s^2 Y(s) - s\,y(0) - y'(0) = s^2 Y(s).
$$

Las transformadas de las forzantes son

$$
\mathcal{L}\{u_a(t)\} = \frac{e^{-as}}{s}, \qquad
\mathcal{L}\{\delta(t-\pi)\} = e^{-\pi s}.
$$

Al transformar la ecuación,

$$
s^2 Y + Y = \frac{e^{-\pi s/2}}{s} + e^{-\pi s} - \frac{e^{-3\pi s/2}}{s}.
$$

Al agrupar los términos en $Y$ resulta

$$
(s^2+1)\,Y(s) = \frac{e^{-\pi s/2} - e^{-3\pi s/2}}{s} + e^{-\pi s},
\qquad\text{de donde}\qquad
Y(s) = \frac{e^{-\pi s/2} - e^{-3\pi s/2}}{s(s^2+1)} + \frac{e^{-\pi s}}{s^2+1}.
$$

El factor racional se descompone mediante **fracciones parciales**:

$$
\frac{1}{s(s^2+1)} = \frac{1}{s} - \frac{s}{s^2+1},
\qquad\text{cuya inversa es}\qquad
f(t) = \mathcal{L}^{-1}\!\left\{\frac{1}{s(s^2+1)}\right\} = 1 - \cos t.
$$

Cada factor $e^{-as}$ se trata con el **segundo teorema de traslación**, $\mathcal{L}^{-1}\{e^{-as}F(s)\} = u_a(t)\,f(t-a)$. Para los dos términos escalón,

$$
\begin{aligned}
\mathcal{L}^{-1}\!\left\{e^{-\pi s/2}\frac{1}{s(s^2+1)}\right\}
&= u_{\pi/2}(t)\left[1 - \cos\left(t-\tfrac{\pi}{2}\right)\right]
= u_{\pi/2}(t)\left(1 - \sin t\right), \\[4pt]
\mathcal{L}^{-1}\!\left\{e^{-3\pi s/2}\frac{1}{s(s^2+1)}\right\}
&= u_{3\pi/2}(t)\left[1 - \cos\left(t-\tfrac{3\pi}{2}\right)\right]
= u_{3\pi/2}(t)\left(1 + \sin t\right),
\end{aligned}
$$

donde se usan $\cos(t-\pi/2) = \sin t$ y $\cos(t-3\pi/2) = -\sin t$. Para el término impulsivo, con $\mathcal{L}^{-1}\{1/(s^2+1)\} = \sin t$,

$$
\mathcal{L}^{-1}\!\left\{e^{-\pi s}\frac{1}{s^2+1}\right\}
= u_{\pi}(t)\sin(t-\pi)
= -u_{\pi}(t)\sin t,
$$

pues $\sin(t-\pi) = -\sin t$. Al reunir los tres términos,

$$
y(t) = u_{\pi/2}(t)\left(1 - \sin t\right) - u_{3\pi/2}(t)\left(1 + \sin t\right) - u_{\pi}(t)\sin t.
$$

Al separar por intervalos, en $0 \le t < \pi/2$ las tres funciones escalón son nulas y $y = 0$; en $\pi/2 \le t < \pi$ solo actúa el primer escalón; en $\pi \le t < 3\pi/2$ actúan el primero y el término impulsivo; y en $t \ge 3\pi/2$ actúan los tres. La solución satisface las condiciones iniciales, pues $y$ y $y'$ son idénticamente nulas antes de $t = \pi/2$.

## Observaciones

La solución es continua en los tres puntos de conmutación. En $t = \pi/2$ y $t = 3\pi/2$ los escalones introducen sendos saltos en $y''$, mientras que $y$ y $y'$ permanecen continuas. El impulso en $t = \pi$ no altera el valor de $y$, pero produce un salto en la derivada: $y'(\pi^+) - y'(\pi^-) = 1$, igual al coeficiente de $\delta(t-\pi)$.

Tras el último escalón la forzante se anula y la solución queda como la oscilación libre $y = -3\sin t$, de amplitud $3$; el impulso y el escalón negativo dejan una oscilación permanente en lugar de un transitorio que decaiga.
