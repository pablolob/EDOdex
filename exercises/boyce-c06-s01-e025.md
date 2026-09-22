---
title: "Boyce 6.1 Ejercicio 25"
exercise-id: boyce-c06-s01-e025
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.1, ejercicio 25"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
  - aplicar-condiciones.problema-valor-inicial
hidden-competencies:
  - resolver-analiticamente.escalon-unitario
prerequisitos:
  - transformadas.transformada-laplace
  - transformadas.funcion-escalon
  - integracion.por-partes
  - integracion.fracciones-parciales
difficulty:
  conceptual: 2
  technical: 3
source-images:
  - c06s01i02-p325.png
---

## Enunciado

En cada uno de los problemas 24 a 26, aplique la transformada de Laplace para resolver el problema con valor inicial dado.

25. $y'' + y = \begin{cases} t, & 0 \le t < 1, \\ 0, & 1 \le t < \infty; \end{cases} \quad y(0) = 0, \; y'(0) = 0$

## Solución

$$
y(t) = \begin{cases} t - \sin t, & 0 \le t < 1, \\[4pt] \cos(t-1) + \sin(t-1) - \sin t, & t \ge 1. \end{cases}
$$

## Resolución

Se aplica la **transformada de Laplace** a ambos miembros. Sea $Y(s) = \mathcal{L}\{y(t)\}$. Con $y(0) = y'(0) = 0$, la transformada de la derivada segunda es

$$
\mathcal{L}\{y''\} = s^2Y(s) - s\,y(0) - y'(0) = s^2Y(s).
$$

El miembro derecho es la función $f$ definida por tramos, nula para $t \ge 1$. Su transformada se calcula con la **definición integral**:

$$
\mathcal{L}\{f(t)\} = \int_0^\infty e^{-st}f(t)\,dt = \int_0^1 t\,e^{-st}\,dt.
$$

Integrando por **partes** con $u = t$ y $dv = e^{-st}\,dt$,

$$
\begin{aligned}
\int_0^1 t\,e^{-st}\,dt
&= \left[-\frac{t\,e^{-st}}{s}\right]_0^1 + \frac{1}{s}\int_0^1 e^{-st}\,dt \\
&= -\frac{e^{-s}}{s} + \frac{1-e^{-s}}{s^2}
= \frac{1-(1+s)e^{-s}}{s^2}.
\end{aligned}
$$

La ecuación transformada es $s^2Y(s) + Y(s) = \dfrac{1-(1+s)e^{-s}}{s^2}$, de donde

$$
Y(s) = \frac{1-(1+s)e^{-s}}{s^2(s^2+1)}
= \frac{1}{s^2(s^2+1)} - e^{-s}\frac{s+1}{s^2(s^2+1)}.
$$

Las **fracciones parciales** de cada factor son

$$
\frac{1}{s^2(s^2+1)} = \frac{1}{s^2} - \frac{1}{s^2+1},
\qquad
\frac{s+1}{s^2(s^2+1)} = \frac{1}{s} + \frac{1}{s^2} - \frac{s}{s^2+1} - \frac{1}{s^2+1}.
$$

Con los pares básicos $\mathcal{L}\{t\} = \dfrac{1}{s^2}$, $\mathcal{L}\{\sin t\} = \dfrac{1}{s^2+1}$, $\mathcal{L}\{1\} = \dfrac{1}{s}$ y $\mathcal{L}\{\cos t\} = \dfrac{s}{s^2+1}$,

$$
\mathcal{L}^{-1}\!\left\{\frac{1}{s^2} - \frac{1}{s^2+1}\right\} = t - \sin t,
$$

$$
g(t) = \mathcal{L}^{-1}\!\left\{\frac{1}{s} + \frac{1}{s^2} - \frac{s}{s^2+1} - \frac{1}{s^2+1}\right\} = 1 + t - \cos t - \sin t.
$$

El factor $e^{-s}$ desplaza la función inversa. Por el **segundo teorema de traslación**, $\mathcal{L}^{-1}\{e^{-s}G(s)\} = g(t-1)U(t-1)$, donde $U$ es la función escalón unitario. Entonces

$$
y(t) = t - \sin t - \bigl[1 + (t-1) - \cos(t-1) - \sin(t-1)\bigr]U(t-1).
$$

Al separar por intervalos, para $0 \le t < 1$ el escalón se anula y $y(t) = t - \sin t$. Para $t \ge 1$,

$$
y(t) = t - \sin t - 1 - (t-1) + \cos(t-1) + \sin(t-1) = \cos(t-1) + \sin(t-1) - \sin t.
$$

La solución satisface las condiciones iniciales: en $0 \le t < 1$ es $y(t) = t - \sin t$, luego $y(0) = 0$ y $y'(t) = 1 - \cos t$, con $y'(0) = 0$.

## Observaciones

La función de fuerza tiene una discontinuidad de salto en $t = 1$. La solución es continua allí junto con su derivada primera, y su derivada segunda salta en la misma magnitud que la fuerza; la continuidad de $y$ y $y'$ en $t = 1$ se comprueba evaluando ambas ramas.

Para $t \ge 1$ la fuerza se anula, de modo que la solución continúa como oscilación libre $y'' + y = 0$ con las condiciones $y(1) = 1 - \sin 1$ y $y'(1) = 1 - \cos 1$ heredadas del tramo anterior.

### Método alternativo: resolución por tramos

Sin transformada de Laplace, el problema se resuelve en dos etapas. En $0 \le t < 1$, $y'' + y = t$ con $y(0) = y'(0) = 0$ da $y = t - \sin t$. En $t \ge 1$, $y'' + y = 0$ con las condiciones $y(1)$ y $y'(1)$ anteriores conduce a $y = (1-\sin 1)\cos(t-1) + (1-\cos 1)\sin(t-1)$, equivalente a la rama obtenida.
