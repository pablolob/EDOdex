---
title: "Boyce 6.4 Ejercicio 12"
exercise-id: boyce-c06-s04-e012
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.4, ejercicio 12"
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
  - integracion.fracciones-parciales
  - algebra.factorizacion-polinomios
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s04i01-p344.png
---

## Enunciado

En cada uno de los problemas 1 a 12, encuentre la solución del problema con valor inicial dado por medio de la transformada de Laplace.

12. $y^{\mathrm{iv}} - y = \delta(t - 1); \quad y(0) = 0, \ y'(0) = 0, \ y''(0) = 0, \ y'''(0) = 0$

## Solución

$$
y(t) = u_1(t)\left[\frac{1}{2}\sinh(t-1) - \frac{1}{2}\sin(t-1)\right],
$$

o, por tramos,

$$
y(t) = \begin{cases}
0, & 0 \le t < 1, \\[6pt]
\dfrac{1}{2}\left[\sinh(t-1) - \sin(t-1)\right], & t \ge 1.
\end{cases}
$$

## Resolución

Se aplica la **transformada de Laplace**, indicada porque el término forzante es un **impulso de Dirac**. Sea $Y(s) = \mathscr{L}\{y(t)\}$. Con las cuatro condiciones iniciales nulas,

$$
\mathscr{L}\{y^{\mathrm{iv}}\} = s^4 Y(s) - s^3 y(0) - s^2 y'(0) - s\,y''(0) - y'''(0) = s^4 Y(s).
$$

La transformada del impulso es $\mathscr{L}\{\delta(t-1)\} = e^{-s}$. Al transformar la ecuación resulta

$$
s^4 Y(s) - Y(s) = e^{-s},
$$

es decir,

$$
(s^4 - 1)\,Y(s) = e^{-s},
$$

de donde

$$
Y(s) = \frac{e^{-s}}{s^4 - 1}.
$$

El denominador se factoriza como $s^4 - 1 = (s-1)(s+1)(s^2+1)$. La descomposición en fracciones parciales es

$$
\frac{1}{s^4 - 1} = \frac{1/4}{s-1} - \frac{1/4}{s+1} - \frac{1/2}{s^2+1}.
$$

Los pares básicos de la tabla dan

$$
\mathscr{L}^{-1}\!\left\{\frac{1}{s-1}\right\} = e^{t},
\qquad
\mathscr{L}^{-1}\!\left\{\frac{1}{s+1}\right\} = e^{-t},
\qquad
\mathscr{L}^{-1}\!\left\{\frac{1}{s^2+1}\right\} = \sin t.
$$

Por tanto,

$$
\mathscr{L}^{-1}\!\left\{\frac{1}{s^4 - 1}\right\}
= \frac{1}{4}e^{t} - \frac{1}{4}e^{-t} - \frac{1}{2}\sin t
= \frac{1}{2}\sinh t - \frac{1}{2}\sin t.
$$

El factor $e^{-s}$ se maneja con el **segundo teorema de traslación**, $\mathscr{L}^{-1}\{e^{-s}F(s)\} = u_1(t)\,f(t-1)$, con $f(t) = \tfrac{1}{2}\sinh t - \tfrac{1}{2}\sin t$. Así,

$$
y(t) = u_1(t)\left[\frac{1}{2}\sinh(t-1) - \frac{1}{2}\sin(t-1)\right].
$$

La solución satisface las condiciones iniciales: para $0 \le t < 1$ es $y(t) = 0$, de modo que $y(0) = y'(0) = y''(0) = y'''(0) = 0$. En $t = 1$ el impulso introduce un salto unitario en la tercera derivada. Al integrar $y^{\mathrm{iv}} - y = \delta(t-1)$ en un entorno de $t = 1$ se obtiene $y'''(1^+) - y'''(1^-) = 1$, que la solución reproduce porque $f'''(0) = \tfrac{1}{2}\cosh 0 + \tfrac{1}{2}\cos 0 = 1$. La solución es válida para todo $t \ge 0$.

## Observaciones

El impulso no altera los valores de $y$, $y'$ ni $y''$ en $t = 1$; solo produce el salto unitario en $y'''$. Por eso la respuesta es nula antes de $t = 1$ y, después, una combinación de las soluciones homogéneas impares $\sinh$ y $\sin$, coherente con las condiciones iniciales nulas y con el carácter del operador $y^{\mathrm{iv}} - y$.
