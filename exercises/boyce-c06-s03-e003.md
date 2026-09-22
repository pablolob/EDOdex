---
title: "Boyce 6.3 Ejercicio 3"
exercise-id: boyce-c06-s03-e003
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.3, ejercicio 3"
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

3. $y'' + 4y = \operatorname{sen} t - u_{2\pi}(t)\operatorname{sen}(t - 2\pi); \quad y(0) = 0, \ y'(0) = 0$

## Solución

$$
y(t) =
\begin{cases}
\dfrac{1}{3}\sin t - \dfrac{1}{6}\sin 2t, & 0 \le t < 2\pi, \\[8pt]
0, & t \ge 2\pi.
\end{cases}
$$

## Resolución

Se aplica la **transformada de Laplace**. Sea $Y(s) = \mathcal{L}\{y(t)\}$. Con $y(0) = 0$ y $y'(0) = 0$, la transformada de la derivada segunda es $\mathcal{L}\{y''\} = s^2Y(s)$.

La forzante se escribe con la **función escalón unitario**. Como $\sin(t-2\pi) = \sin t$, el término $u_{2\pi}(t)\sin(t-2\pi)$ es la traslación de $\sin t$, y por el segundo teorema de traslación

$$
\mathcal{L}\{\sin t - u_{2\pi}(t)\sin(t-2\pi)\}
= \frac{1}{s^2+1} - e^{-2\pi s}\frac{1}{s^2+1}
= \frac{1-e^{-2\pi s}}{s^2+1}.
$$

La ecuación transformada resulta

$$
(s^2+4)Y(s) = \frac{1-e^{-2\pi s}}{s^2+1},
\qquad\text{de donde}\qquad
Y(s) = \frac{1-e^{-2\pi s}}{(s^2+1)(s^2+4)}.
$$

Se descompone el factor racional mediante **fracciones parciales**:

$$
\frac{1}{(s^2+1)(s^2+4)}
= \frac{1}{3}\left(\frac{1}{s^2+1} - \frac{1}{s^2+4}\right).
$$

Con los pares $\mathcal{L}^{-1}\{1/(s^2+1)\} = \sin t$ y $\mathcal{L}^{-1}\{1/(s^2+4)\} = \tfrac{1}{2}\sin 2t$, la transformada inversa del factor es

$$
g(t) = \mathcal{L}^{-1}\!\left\{\frac{1}{(s^2+1)(s^2+4)}\right\}
= \frac{1}{3}\sin t - \frac{1}{6}\sin 2t.
$$

El **segundo teorema de traslación** da entonces

$$
y(t) = g(t) - u_{2\pi}(t)\,g(t-2\pi).
$$

Como $\sin(t-2\pi) = \sin t$ y $\sin 2(t-2\pi) = \sin 2t$, para $t \ge 2\pi$ se cumple $g(t-2\pi) = g(t)$ y los dos términos se cancelan:

$$
y(t) = \frac{1}{3}\sin t - \frac{1}{6}\sin 2t - u_{2\pi}(t)\left[\frac{1}{3}\sin t - \frac{1}{6}\sin 2t\right].
$$

Al separar por intervalos se obtiene el resultado de `Solución`. En $0 \le t < 2\pi$ la solución satisface las condiciones iniciales: $y(0) = 0$ y $y'(0) = \tfrac{1}{3}\cos 0 - \tfrac{1}{3}\cos 0 = 0$.

## Observaciones

La forzante es continua en $t = 2\pi$: allí vale $\sin 2\pi = 0$ por ambos lados. Lo que salta en $t = 2\pi$ es su primera derivada, que pasa de $\cos 2\pi = 1$ a $0$. En consecuencia, la solución y sus dos primeras derivadas son continuas en $t = 2\pi$ ($y(2\pi) = 0$, $y'(2\pi) = 0$ y $y''(2\pi) = 0$), y el salto de la derivada de la fuerza se refleja en $y'''$. Para $t \ge 2\pi$ la fuerza se anula y el sistema permanece en reposo, $y(t) = 0$.

### Método alternativo: resolución por tramos

En $0 \le t < 2\pi$ la ecuación es $y'' + 4y = \sin t$. Su solución general es $y = C_1\cos 2t + C_2\sin 2t + \tfrac{1}{3}\sin t$; las condiciones iniciales dan $C_1 = 0$ y $C_2 = -\tfrac{1}{6}$, es decir, $y = \tfrac{1}{3}\sin t - \tfrac{1}{6}\sin 2t$. En $t = 2\pi$ esta expresión y su derivada se anulan, de modo que en $t \ge 2\pi$ la ecuación homogénea $y'' + 4y = 0$ con datos nulos tiene por solución $y = 0$.
