---
title: "Boyce 6.3 Ejercicio 2"
exercise-id: boyce-c06-s03-e002
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.3, ejercicio 2"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
  - resolver-analiticamente.escalon-unitario
  - aplicar-condiciones.problema-valor-inicial
prerequisitos:
  - transformadas.transformada-laplace
  - transformadas.funcion-escalon
  - integracion.fracciones-parciales
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s03i01-p339.png
---

## Enunciado

En cada uno de los problemas 1 a 13, encuentre la solución del problema con valor inicial dado.

2. $y'' + 2y' + 2y = h(t); \quad y(0) = 0, \ y'(0) = 1 \quad h(t) = \begin{cases} 1, & \pi \le t < 2\pi \\ 0, & 0 \le t < \pi \ \text{y} \ t \ge 2\pi \end{cases}$

## Solución

$$
y(t) =
\begin{cases}
e^{-t}\sin t, & 0 \le t < \pi, \\[6pt]
e^{-t}\sin t + \dfrac{1}{2} + \dfrac{1}{2}e^{-(t-\pi)}(\cos t + \sin t), & \pi \le t < 2\pi, \\[10pt]
e^{-t}\sin t + \dfrac{1}{2}e^{-(t-\pi)}(\cos t + \sin t) + \dfrac{1}{2}e^{-(t-2\pi)}(\cos t + \sin t), & t \ge 2\pi.
\end{cases}
$$

## Resolución

La función forzante es una diferencia de dos **funciones escalón unitario**,

$$
h(t) = u_\pi(t) - u_{2\pi}(t),
$$

donde $u_c(t) = 0$ para $0 \le t < c$ y $u_c(t) = 1$ para $t \ge c$. En efecto, para $0 \le t < \pi$ ambos escalones son nulos; para $\pi \le t < 2\pi$ solo contribuye $u_\pi$; para $t \ge 2\pi$ los dos valen $1$ y su diferencia se anula. Su transformada es

$$
\mathcal{L}\{h(t)\} = \frac{e^{-\pi s}}{s} - \frac{e^{-2\pi s}}{s} = \frac{e^{-\pi s} - e^{-2\pi s}}{s}.
$$

Al aplicar la transformada de Laplace a la ecuación y usar las condiciones iniciales $y(0) = 0$ e $y'(0) = 1$,

$$
\mathcal{L}\{y''\} + 2\mathcal{L}\{y'\} + 2\mathcal{L}\{y\} = \mathcal{L}\{h\},
$$

$$
\left(s^2 Y(s) - s\,y(0) - y'(0)\right) + 2\left(sY(s) - y(0)\right) + 2Y(s) = \frac{e^{-\pi s} - e^{-2\pi s}}{s}.
$$

Los términos con las condiciones iniciales se reducen a $-1$, de modo que

$$
(s^2 + 2s + 2)\,Y(s) = 1 + \frac{e^{-\pi s} - e^{-2\pi s}}{s}.
$$

Al despejar y factorizar el denominador, $s^2 + 2s + 2 = (s+1)^2 + 1$,

$$
Y(s) = \frac{1}{(s+1)^2 + 1} + \left(e^{-\pi s} - e^{-2\pi s}\right)\frac{1}{s\left(s^2 + 2s + 2\right)}.
$$

La primera fracción se invierte con el par básico $\mathcal{L}^{-1}\{1/((s+1)^2+1)\} = e^{-t}\sin t$. Para la segunda se descompone en fracciones parciales. Con $A$, $B$ y $C$ por determinar,

$$
\frac{1}{s\left(s^2 + 2s + 2\right)} = \frac{A}{s} + \frac{Bs + C}{s^2 + 2s + 2}.
$$

Al multiplicar por el denominador común,

$$
1 = A\left(s^2 + 2s + 2\right) + s(Bs + C).
$$

Al comparar coeficientes resultan $A = \tfrac{1}{2}$, $B = -\tfrac{1}{2}$ y $C = -1$. Por tanto,

$$
\frac{1}{s\left(s^2 + 2s + 2\right)}
= \frac{1}{2s} - \frac{1}{2}\cdot\frac{s + 2}{s^2 + 2s + 2}
= \frac{1}{2s} - \frac{1}{2}\cdot\frac{(s+1) + 1}{(s+1)^2 + 1}.
$$

La transformada inversa de cada término es conocida; se define

$$
g(t) = \mathcal{L}^{-1}\!\left\{\frac{1}{s\left(s^2 + 2s + 2\right)}\right\}
= \frac{1}{2} - \frac{1}{2}e^{-t}\left(\cos t + \sin t\right).
$$

El **segundo teorema de traslación** establece que $\mathcal{L}\{u_c(t)\,g(t-c)\} = e^{-cs}G(s)$. Aplicado a los dos factores exponenciales,

$$
y(t) = e^{-t}\sin t + u_\pi(t)\,g(t-\pi) - u_{2\pi}(t)\,g(t-2\pi).
$$

Esta expresión se escribe por tramos. Para $\pi \le t < 2\pi$ solo actúa $u_\pi$ y se emplean $\cos(t-\pi) = -\cos t$ y $\sin(t-\pi) = -\sin t$:

$$
y(t) = e^{-t}\sin t + \frac{1}{2} - \frac{1}{2}e^{-(t-\pi)}\bigl(\cos(t-\pi) + \sin(t-\pi)\bigr)
= e^{-t}\sin t + \frac{1}{2} + \frac{1}{2}e^{-(t-\pi)}(\cos t + \sin t).
$$

Para $t \ge 2\pi$ actúan los dos escalones; con $\cos(t-2\pi) = \cos t$ y $\sin(t-2\pi) = \sin t$,

$$
y(t) = e^{-t}\sin t + \frac{1}{2}e^{-(t-\pi)}(\cos t + \sin t) + \frac{1}{2}e^{-(t-2\pi)}(\cos t + \sin t).
$$

Reuniendo los tres tramos se obtiene el resultado de `Solución`.

## Observaciones

La forzante $h$ es discontinua en $t = \pi$ y $t = 2\pi$, pero la solución y su derivada son continuas en ambos puntos. Esto es propio de una ecuación lineal de segundo orden con término forzante continuo a trozos: la discontinuidad se refleja en la segunda derivada, no en $y$ ni en $y'$.

Para $t \ge 2\pi$ la forzante se anula; la respuesta queda como la oscilación libre $e^{-t}\sin t$ más dos transitorios exponencialmente decrecientes originados en cada escalón.
