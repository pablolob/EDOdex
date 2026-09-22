---
title: "Boyce 5.9 Ejercicio 5"
exercise-id: boyce-c05-s09-e005
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.9, ejercicio 5"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
prerequisitos:
  - transformadas.transformada-laplace
  - calculo-avanzado.integrales-impropias
  - integracion.por-partes
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c05s09i01-p314.png
---

## Enunciado

Encuentre la transformada de Laplace de cada una de las siguientes funciones:

a) $t$

b) $t^2$

c) $t^n$, en donde $n$ es un entero positivo.

## Solución

$$
\mathcal{L}\{t\} = \frac{1}{s^{2}}, \qquad
\mathcal{L}\{t^{2}\} = \frac{2}{s^{3}}, \qquad
\mathcal{L}\{t^{n}\} = \frac{n!}{s^{n+1}}, \qquad s > 0.
$$

## Resolución

La transformada de Laplace se define mediante la integral impropia

$$
\mathcal{L}\{f(t)\} = \int_0^{\infty} e^{-st} f(t)\,dt.
$$

**Apartado a.** Para $f(t) = t$,

$$
\mathcal{L}\{t\} = \int_0^{\infty} t\,e^{-st}\,dt.
$$

Se integra por partes con $u = t$ y $dv = e^{-st}\,dt$, de modo que $du = dt$ y $v = -\dfrac{e^{-st}}{s}$:

$$
\begin{aligned}
\mathcal{L}\{t\}
&= \left[-\frac{t}{s}e^{-st}\right]_0^{\infty} + \frac{1}{s}\int_0^{\infty} e^{-st}\,dt \\
&= 0 + \frac{1}{s}\cdot\frac{1}{s}
= \frac{1}{s^{2}}, \qquad s > 0.
\end{aligned}
$$

El término de frontera se anula porque $t\,e^{-st} \to 0$ cuando $t \to \infty$ para $s > 0$.

**Apartado b.** Para $f(t) = t^2$ se integra por partes con $u = t^2$:

$$
\begin{aligned}
\mathcal{L}\{t^2\}
&= \int_0^{\infty} t^2 e^{-st}\,dt \\
&= \left[-\frac{t^2}{s}e^{-st}\right]_0^{\infty} + \frac{2}{s}\int_0^{\infty} t\,e^{-st}\,dt \\
&= \frac{2}{s}\,\mathcal{L}\{t\}
= \frac{2}{s}\cdot\frac{1}{s^{2}}
= \frac{2}{s^{3}}, \qquad s > 0.
\end{aligned}
$$

El término de frontera también se anula porque $t^2 e^{-st} \to 0$ cuando $t \to \infty$ para $s > 0$.

**Apartado c.** Para $f(t) = t^n$ con $n$ entero positivo se aplica el mismo procedimiento con $u = t^n$:

$$
\begin{aligned}
\mathcal{L}\{t^n\}
&= \int_0^{\infty} t^n e^{-st}\,dt \\
&= \left[-\frac{t^n}{s}e^{-st}\right]_0^{\infty} + \frac{n}{s}\int_0^{\infty} t^{n-1} e^{-st}\,dt \\
&= \frac{n}{s}\,\mathcal{L}\{t^{n-1}\}, \qquad s > 0.
\end{aligned}
$$

La fórmula de recurrencia $\mathcal{L}\{t^n\} = \dfrac{n}{s}\,\mathcal{L}\{t^{n-1}\}$ se itera desde $n$ hasta $1$. Con $\mathcal{L}\{1\} = \displaystyle\int_0^{\infty} e^{-st}\,dt = \dfrac{1}{s}$, resulta

$$
\mathcal{L}\{t^n\}
= \frac{n}{s}\cdot\frac{n-1}{s}\cdots\frac{1}{s}\cdot\frac{1}{s}
= \frac{n!}{s^{n+1}}, \qquad s > 0.
$$

Los resultados de los apartados a y b son los casos $n = 1$ y $n = 2$ de esta fórmula: $\dfrac{1!}{s^{2}}$ y $\dfrac{2!}{s^{3}}$.

## Observaciones

La integral que define cada transformada converge únicamente para $s > 0$; esa es la región de validez de los tres resultados. El factor $t^n$ no introduce singularidades ni ramas adicionales, y la transformada de Laplace de una función continua en $t \ge 0$ es única.
