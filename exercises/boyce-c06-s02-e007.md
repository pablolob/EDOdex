---
title: "Boyce 6.2 Ejercicio 7"
exercise-id: boyce-c06-s02-e007
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.2, ejercicio 7"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
hidden-competencies:
  - resolver-analiticamente.escalon-unitario
prerequisitos:
  - transformadas.transformada-laplace
  - transformadas.funcion-escalon
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c06s02i01-p332.png
---

## Enunciado

Encuentre la transformada de Laplace de la función dada:

7. $f(t) = \begin{cases} 0, & t < 2 \\ (t - 2)^2, & t \ge 2 \end{cases}$

## Solución

$$
\mathscr{L}\{f(t)\} = \frac{2e^{-2s}}{s^3}, \qquad s > 0.
$$

## Resolución

La función se anula para $0 \le t < 2$ y coincide con $(t-2)^2$ para $t \ge 2$. En términos de la **función escalón unitario** $u_2(t)$,

$$
f(t) = (t-2)^2\,u_2(t).
$$

Esta expresión tiene la forma $g(t-a)u_a(t)$ con $a = 2$ y $g(t) = t^2$. El **segundo teorema de traslación** establece que

$$
\mathscr{L}\{g(t-a)u_a(t)\} = e^{-as}G(s), \qquad G(s) = \mathscr{L}\{g(t)\}.
$$

De la tabla de transformadas, con $n = 2$,

$$
\mathscr{L}\{t^2\} = \frac{2!}{s^3} = \frac{2}{s^3}, \qquad s > 0.
$$

Al sustituir $a = 2$ y $G(s) = 2/s^3$ resulta

$$
\mathscr{L}\{f(t)\} = e^{-2s}\cdot\frac{2}{s^3} = \frac{2e^{-2s}}{s^3}.
$$

## Observaciones

La función $f$ es continua en $t = 2$, pues $(t-2)^2 \to 0$ cuando $t \to 2^{+}$. La transformada converge para $s > 0$, la misma región que la del par $\mathscr{L}\{t^2\}=2/s^3$, ya que el factor $e^{-2s}$ no introduce singularidades nuevas.

### Método alternativo: definición integral

El resultado también se obtiene de la definición de la transformada, integrando solo desde $t = 2$. Con el cambio $u = t-2$,

$$
\mathscr{L}\{f(t)\} = \int_2^{\infty} e^{-st}(t-2)^2\,dt
= e^{-2s}\int_0^{\infty} u^2 e^{-su}\,du
= e^{-2s}\cdot\frac{2}{s^3}.
$$
