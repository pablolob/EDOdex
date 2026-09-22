---
title: "Boyce 6.3 Ejercicio 12"
exercise-id: boyce-c06-s03-e012
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.3, ejercicio 12"
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
  - algebra.factorizacion-polinomios
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s03i01-p339.png
---

## Enunciado

En cada uno de los problemas 1 a 13, encuentre la solución del problema con valor inicial dado.

12. $y^{iv} - y = u_1(t) - u_2(t); \quad y(0) = 0, \ y'(0) = 0, \ y''(0) = 0, \ y'''(0) = 0$

## Solución

$$
y(t) =
\begin{cases}
0, & 0 \le t < 1, \\[8pt]
\dfrac{1}{2}\left[\cosh(t-1) + \cos(t-1)\right] - 1, & 1 \le t < 2, \\[10pt]
\dfrac{1}{2}\left[\cosh(t-1) + \cos(t-1)\right] - \dfrac{1}{2}\left[\cosh(t-2) + \cos(t-2)\right], & t \ge 2.
\end{cases}
$$

## Resolución

La forzante es un pulso rectangular de altura $1$ sobre el intervalo $[1,2)$. Se escribe como diferencia de dos **funciones escalón unitario**,

$$
f(t) = u_1(t) - u_2(t),
$$

donde $u_c(t) = 0$ para $0 \le t < c$ y $u_c(t) = 1$ para $t \ge c$.

Sea $Y(s) = \mathcal{L}\{y(t)\}$. Con las cuatro condiciones iniciales nulas, la **transformada de Laplace** de la derivada cuarta es

$$
\mathcal{L}\{y^{(4)}\} = s^4 Y(s) - s^3 y(0) - s^2 y'(0) - s\,y''(0) - y'''(0) = s^4 Y(s).
$$

La transformada de la forzante es

$$
\mathcal{L}\{f(t)\} = \frac{e^{-s}}{s} - \frac{e^{-2s}}{s} = \frac{e^{-s} - e^{-2s}}{s}.
$$

Al transformar la ecuación resulta

$$
(s^4 - 1)Y(s) = \frac{e^{-s} - e^{-2s}}{s},
\qquad\text{de donde}\qquad
Y(s) = \left(e^{-s} - e^{-2s}\right)\frac{1}{s(s^4-1)}.
$$

Se factoriza $s^4 - 1 = (s-1)(s+1)(s^2+1)$ y se descompone el factor racional mediante **fracciones parciales**:

$$
\frac{1}{s(s^4-1)}
= -\frac{1}{s} + \frac{1}{4(s-1)} + \frac{1}{4(s+1)} + \frac{s}{2(s^2+1)}.
$$

Con los pares básicos $\mathcal{L}^{-1}\{1/s\} = 1$, $\mathcal{L}^{-1}\{1/(s-1)\} = e^{t}$, $\mathcal{L}^{-1}\{1/(s+1)\} = e^{-t}$ y $\mathcal{L}^{-1}\{s/(s^2+1)\} = \cos t$, la transformada inversa del factor es

$$
g(t) = \mathcal{L}^{-1}\!\left\{\frac{1}{s(s^4-1)}\right\}
= -1 + \frac{1}{4}e^{t} + \frac{1}{4}e^{-t} + \frac{1}{2}\cos t
= \frac{1}{2}\left(\cosh t + \cos t\right) - 1.
$$

El **segundo teorema de traslación** establece que $\mathcal{L}\{u_c(t)\,g(t-c)\} = e^{-cs}G(s)$. Aplicado a los dos factores exponenciales,

$$
y(t) = g(t-1)\,u_1(t) - g(t-2)\,u_2(t).
$$

Al sustituir $g$ y separar por intervalos, para $0 \le t < 1$ ambos escalones son nulos y $y = 0$; para $1 \le t < 2$ solo actúa $u_1$; para $t \ge 2$ actúan los dos escalones y los términos constantes $-1$ se cancelan. Se obtiene el resultado de `Solución`.

## Observaciones

La forzante es discontinua en $t = 1$ y $t = 2$, pero la solución y sus tres primeras derivadas son continuas en ambos puntos. El salto se refleja en $y^{(4)}$: como $g(0) = g'(0) = g''(0) = g'''(0) = 0$, cada copia trasladada arranca en reposo.

La solución está definida para todo $t \ge 0$. La forzante es continua a tramos y de orden exponencial, y el coeficiente de $y^{(4)}$ es constante no nulo, de modo que el problema de valor inicial tiene solución única en $[0, \infty)$. Para $t \ge 2$ la forzante se anula, pero la respuesta no decae: las raíces de $s^4 - 1$ incluyen $\pm 1$, lo que produce los términos no amortiguados $\cosh$ y $\cos$.
