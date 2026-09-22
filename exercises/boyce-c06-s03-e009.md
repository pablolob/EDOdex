---
title: "Boyce 6.3 Ejercicio 9"
exercise-id: boyce-c06-s03-e009
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.3, ejercicio 9"
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
  - integracion.fracciones-parciales
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s03i01-p339.png
---

## Enunciado

En cada uno de los problemas 1 a 13, encuentre la solución del problema con valor inicial dado.

9. $y'' + y = g(t); \quad y(0) = 0, \ y'(0) = 1 \quad g(t) = \begin{cases} t, & 0 \le t < 1 \\ 1, & t \ge 1 \end{cases}$

## Solución

$$
y(t) = t - \bigl[(t-1) - \sin(t-1)\bigr]u_1(t)
= \begin{cases} t, & 0 \le t < 1, \\[4pt] 1 + \sin(t-1), & t \ge 1. \end{cases}
$$

## Resolución

La forzante es lineal a tramos: vale $t$ en $0 \le t < 1$ y $1$ en $t \ge 1$. Se escribe con la **función escalón unitario** $u_1(t)$, definida por $u_1(t) = 0$ para $t < 1$ y $u_1(t) = 1$ para $t \ge 1$:

$$
g(t) = t - (t-1)u_1(t).
$$

Sea $Y(s) = \mathcal{L}\{y(t)\}$. Con $y(0) = 0$ y $y'(0) = 1$, la transformada de la derivada segunda es

$$
\mathcal{L}\{y''\} = s^2Y(s) - s\,y(0) - y'(0) = s^2Y(s) - 1.
$$

Por el **segundo teorema de traslación**, $\mathcal{L}\{(t-1)u_1(t)\} = e^{-s}/s^2$, luego

$$
\mathcal{L}\{g(t)\} = \frac{1}{s^2} - \frac{e^{-s}}{s^2}.
$$

La ecuación transformada resulta

$$
s^2Y(s) - 1 + Y(s) = \frac{1-e^{-s}}{s^2},
\qquad\text{de donde}\qquad
Y(s) = \frac{1}{s^2+1} + \frac{1-e^{-s}}{s^2(s^2+1)}.
$$

La fracción racional se descompone mediante **fracciones parciales**:

$$
\frac{1}{s^2(s^2+1)} = \frac{1}{s^2} - \frac{1}{s^2+1}.
$$

Al sustituir y cancelar los términos en $1/(s^2+1)$,

$$
Y(s) = \frac{1}{s^2} - e^{-s}\left(\frac{1}{s^2} - \frac{1}{s^2+1}\right).
$$

La función $h(t) = t - \sin t$ tiene transformada $1/s^2 - 1/(s^2+1)$. Por el segundo teorema de traslación,

$$
\mathcal{L}^{-1}\!\left\{e^{-s}\left(\frac{1}{s^2} - \frac{1}{s^2+1}\right)\right\}
= h(t-1)\,u_1(t)
= \bigl[(t-1) - \sin(t-1)\bigr]u_1(t).
$$

Por tanto,

$$
y(t) = t - \bigl[(t-1) - \sin(t-1)\bigr]u_1(t).
$$

Al sustituir los dos valores del escalón se obtiene la expresión por intervalos. Para $0 \le t < 1$ es $y(t) = t$. Para $t \ge 1$,

$$
y(t) = t - (t-1) + \sin(t-1) = 1 + \sin(t-1).
$$

En $0 \le t < 1$ la solución es $y(t) = t$, luego $y(0) = 0$ y $y'(0) = 1$: ambas condiciones iniciales se satisfacen.

## Observaciones

La forzante es continua en $t = 1$, pues ambos tramos valen $1$. La solución y sus dos primeras derivadas también son continuas allí: las ramas $t$ y $1 + \sin(t-1)$ coinciden en valor, primera y segunda derivada. El salto de $g'$ se manifiesta en la tercera derivada.

La solución está definida para todo $t \ge 0$: la forzante es continua a tramos y de orden exponencial, y el coeficiente de $y''$ no se anula.

### Método alternativo: resolución por tramos

En $0 \le t < 1$ la ecuación es $y'' + y = t$, cuya solución general es $y = C_1\cos t + C_2\sin t + t$. Las condiciones iniciales dan $C_1 = 0$ y $C_2 = 0$, es decir, $y = t$. En $t \ge 1$ la ecuación es $y'' + y = 1$, con solución general $y = A\cos(t-1) + B\sin(t-1) + 1$. Las condiciones heredadas $y(1) = 1$ y $y'(1) = 1$ dan $A = 0$ y $B = 1$, esto es, $y = 1 + \sin(t-1)$.
