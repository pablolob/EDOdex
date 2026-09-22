---
title: "Boyce 6.3 Ejercicio 7"
exercise-id: boyce-c06-s03-e007
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.3, ejercicio 7"
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

7. $y'' + y = u_\pi(t); \quad y(0) = 1, \ y'(0) = 0$

## Solución

$$
y(t) = \cos t + \bigl[1 - \cos(t-\pi)\bigr]u_\pi(t)
= \begin{cases} \cos t, & 0 \le t < \pi, \\[4pt] 1 + 2\cos t, & t \ge \pi. \end{cases}
$$

## Resolución

Se aplica la **transformada de Laplace** a ambos miembros. Sea $Y(s) = \mathcal{L}\{y(t)\}$. Con $y(0) = 1$ y $y'(0) = 0$, la transformada de la derivada segunda es

$$
\mathcal{L}\{y''\} = s^2Y(s) - s\,y(0) - y'(0) = s^2Y(s) - s.
$$

La transformada de la **función escalón unitario** $u_\pi(t)$ es

$$
\mathcal{L}\{u_\pi(t)\} = \frac{e^{-\pi s}}{s}, \qquad s > 0.
$$

La ecuación transformada resulta

$$
(s^2+1)Y(s) - s = \frac{e^{-\pi s}}{s},
\qquad\text{de donde}\qquad
Y(s) = \frac{s}{s^2+1} + \frac{e^{-\pi s}}{s(s^2+1)}.
$$

Se descompone el segundo término en **fracciones parciales**:

$$
\frac{1}{s(s^2+1)} = \frac{1}{s} - \frac{s}{s^2+1}.
$$

Entonces

$$
Y(s) = \frac{s}{s^2+1} + e^{-\pi s}\left(\frac{1}{s} - \frac{s}{s^2+1}\right).
$$

Con los pares $\mathcal{L}\{\cos t\} = \dfrac{s}{s^2+1}$ y $\mathcal{L}\{1-\cos t\} = \dfrac{1}{s} - \dfrac{s}{s^2+1}$, la transformada inversa del primer término es $\cos t$. La del segundo es, por el **segundo teorema de traslación**,

$$
\mathcal{L}^{-1}\!\left\{e^{-\pi s}\left(\frac{1}{s} - \frac{s}{s^2+1}\right)\right\} = \bigl[1 - \cos(t-\pi)\bigr]u_\pi(t).
$$

Por tanto,

$$
y(t) = \cos t + \bigl[1 - \cos(t-\pi)\bigr]u_\pi(t).
$$

Al separar por intervalos, para $0 \le t < \pi$ el escalón se anula y $y(t) = \cos t$. Para $t \ge \pi$, con $\cos(t-\pi) = -\cos t$,

$$
y(t) = \cos t + 1 + \cos t = 1 + 2\cos t.
$$

La solución satisface las condiciones iniciales: en $0 \le t < \pi$ es $y(t) = \cos t$, luego $y(0) = 1$ y $y'(0) = -\sin 0 = 0$.

## Observaciones

En $t = \pi$ la solución y su derivada primera son continuas: la rama $\cos t$ toma los valores $\cos\pi = -1$ y $-\sin\pi = 0$, iguales a los de $1+2\cos t$. La derivada segunda salta en la misma magnitud que la fuerza.

Para $t \ge \pi$ la fuerza vale $1$, de modo que la solución oscila alrededor del equilibrio $y = 1$.

### Método alternativo: resolución por tramos

Sin transformada de Laplace, en $0 \le t < \pi$ la ecuación homogénea $y'' + y = 0$ con $y(0) = 1$ y $y'(0) = 0$ da $y = \cos t$. En $t \ge \pi$ se resuelve $y'' + y = 1$ con las condiciones heredadas $y(\pi) = -1$ y $y'(\pi) = 0$, lo que conduce a $y = 1 + 2\cos t$.
