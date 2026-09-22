---
title: "Boyce 5.2 Ejercicio 19"
exercise-id: boyce-c05-s02-e019
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.2, ejercicio 19"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - resolver-series.serie-potencias
  - resolver-series.recurrencia
prerequisitos:
  - calculo-avanzado.series-potencias
  - calculo-avanzado.series-taylor
difficulty:
  conceptual: 2
  technical: 3
source-images:
  - c05s02i02-p258.png
---

## Enunciado

Al realizar el cambio de variable $x - 1 = t$ y suponer que $y$ es una serie de potencias en $t$, encuentre dos soluciones en serie linealmente independientes de

$$y'' + (x - 1)^2y' + (x^2 - 1)y = 0$$

en potencias de $x - 1$. Demuestre que se obtiene el mismo resultado directamente al suponer que $y$ es una serie de Taylor en potencias de $x - 1$ y también al expresar el coeficiente $x^2 - 1$ en potencias de $x - 1$.

## Solución

El cambio $t = x - 1$ transforma la ecuación en

$$
y'' + t^2y' + (t^2 + 2t)y = 0.
$$

La relación de recurrencia es

$$
a_{n+2} = -\frac{(n+1)a_{n-1} + a_{n-2}}{(n+2)(n+1)},\qquad n \ge 2,
$$

con $a_2 = 0$ y $a_3 = -\dfrac{a_0}{3}$. Dos soluciones linealmente independientes, escritas en potencias de $x - 1$, son

$$
\begin{aligned}
y_1(x) &= 1 - \frac{(x-1)^3}{3} - \frac{(x-1)^4}{12} + \frac{(x-1)^6}{18}
 + \frac{5(x-1)^7}{252} + \frac{(x-1)^8}{672} + \cdots, \\[4pt]
y_2(x) &= (x-1) - \frac{(x-1)^4}{4} - \frac{(x-1)^5}{20}
 + \frac{(x-1)^7}{28} + \frac{3(x-1)^8}{280} + \cdots.
\end{aligned}
$$

La solución general es $y = a_0y_1 + a_1y_2$, con $a_0$ y $a_1$ arbitrarios.

## Resolución

### Cambio de variable

Con $t = x - 1$ se tiene $\dfrac{d}{dx} = \dfrac{d}{dt}$, porque $x = t + 1$. El coeficiente $x^2 - 1$ se escribe en potencias de $t$:

$$
x^2 - 1 = (t+1)^2 - 1 = t^2 + 2t.
$$

Al sustituir en la ecuación, esta queda

$$
y'' + t^2y' + (t^2 + 2t)y = 0. \tag{1}
$$

Los coeficientes de (1) son polinomios, de modo que $t = 0$ es un punto ordinario y la solución admite un desarrollo en **serie de potencias** en $t$.

### Serie de potencias y relación de recurrencia

Se busca

$$
y = \sum_{n=0}^{\infty} a_n t^n.
$$

La derivación término a término es válida dentro del intervalo de convergencia. Las derivadas y los productos que aparecen en (1) son

$$
\begin{aligned}
y'' &= \sum_{n=2}^{\infty} n(n-1)a_n t^{n-2}
 = \sum_{n=0}^{\infty} (n+2)(n+1)a_{n+2}t^n, \\
t^2y' &= \sum_{n=1}^{\infty} n a_n t^{n+1}
 = \sum_{n=2}^{\infty} (n-1)a_{n-1}t^n, \\
t^2y &= \sum_{n=0}^{\infty} a_n t^{n+2}
 = \sum_{n=2}^{\infty} a_{n-2}t^n, \\
2ty &= \sum_{n=0}^{\infty} 2a_n t^{n+1}
 = \sum_{n=1}^{\infty} 2a_{n-1}t^n.
\end{aligned}
$$

Cada serie se ha reindexado para escribir todo con la potencia $t^n$. Al reunir los coeficientes de $t^n$ en (1) e igualar a cero se obtiene:

$$
\begin{aligned}
t^0 &: \quad 2a_2 = 0, \\
t^1 &: \quad 6a_3 + 2a_0 = 0, \\
t^n \ (n \ge 2) &: \quad (n+2)(n+1)a_{n+2} + (n+1)a_{n-1} + a_{n-2} = 0.
\end{aligned}
$$

De las dos primeras igualdades resultan

$$
a_2 = 0, \qquad a_3 = -\frac{a_0}{3}.
$$

La tercera, al despejar $a_{n+2}$, da la relación de recurrencia

$$
a_{n+2} = -\frac{(n+1)a_{n-1} + a_{n-2}}{(n+2)(n+1)},\qquad n \ge 2. \tag{2}
$$

La recurrencia no impone condición sobre $a_0$ ni sobre $a_1$, que quedan arbitrarios. Con (2) se calculan los coeficientes sucesivos:

$$
\begin{aligned}
a_4 &= -\frac{3a_1 + a_0}{12}, & a_5 &= -\frac{a_1}{20}, \\
a_6 &= \frac{a_0}{18}, & a_7 &= \frac{9a_1 + 5a_0}{252}, \\
a_8 &= \frac{36a_1 + 5a_0}{3360}. & &
\end{aligned}
$$

A partir de $a_4$ cada coeficiente depende de $a_0$ y de $a_1$; por eso conviene separar la parte proporcional a $a_0$ y la proporcional a $a_1$. Con $a_0 = 1$, $a_1 = 0$ se obtiene

$$
y_1(t) = 1 - \frac{t^3}{3} - \frac{t^4}{12} + \frac{t^6}{18} + \frac{5t^7}{252} + \frac{t^8}{672} + \cdots,
$$

y con $a_0 = 0$, $a_1 = 1$,

$$
y_2(t) = t - \frac{t^4}{4} - \frac{t^5}{20} + \frac{t^7}{28} + \frac{3t^8}{280} + \cdots.
$$

Estas dos series son linealmente independientes: en $t = 0$ valen $y_1(0) = 1$, $y_1'(0) = 0$ e $y_2(0) = 0$, $y_2'(0) = 1$, por lo que su Wronskiano en $t = 0$ es $1 \ne 0$. Al volver a la variable original, $t = x - 1$, se obtienen las soluciones $y_1(x)$ e $y_2(x)$ dadas en la sección Solución.

### Equivalencia con el desarrollo directo en potencias de $x-1$

Si en lugar del cambio de variable se supone directamente

$$
y = \sum_{n=0}^{\infty} a_n (x-1)^n,
$$

las derivadas tienen la misma forma que en la sección anterior, porque $\dfrac{d}{dx} = \dfrac{d}{d(x-1)}$. Basta expresar el coeficiente $x^2 - 1$ en potencias de $x - 1$:

$$
x^2 - 1 = \big[(x-1) + 1\big]^2 - 1 = (x-1)^2 + 2(x-1),
$$

que es su desarrollo de Taylor en torno a $x = 1$. Al sustituir en la ecuación,

$$
\sum n(n-1)a_n(x-1)^{n-2} + (x-1)^2\sum n a_n(x-1)^{n-1}
 + \big[(x-1)^2 + 2(x-1)\big]\sum a_n(x-1)^n = 0,
$$

es decir,

$$
y'' + (x-1)^2y' + \big[(x-1)^2 + 2(x-1)\big]y = 0,
$$

que es exactamente la ecuación (1) con $t = x - 1$. Por tanto la relación de recurrencia y los coeficientes son los mismos: el cambio de variable no aporta información nueva, solo hace explícita la variable natural del desarrollo.

### Dominio e intervalo de validez

Los coeficientes de la ecuación son polinomios, así que $x = 1$ es un punto ordinario y no hay puntos singulares finitos. Las dos soluciones en serie convergen para todo $x \in \mathbb{R}$, con radio de convergencia infinito.

## Observaciones

El punto $x_0 = 1$ es un punto ordinario de la ecuación, ya que los coeficientes de $y'$ e $y$ son polinomios. Esto garantiza la existencia de las dos soluciones en serie y su convergencia en todo $\mathbb{R}$.

La recurrencia (2) es de cuatro términos: relaciona $a_{n+2}$ con $a_{n-1}$ y $a_{n-2}$. Por eso, a diferencia del caso $y'' - y = 0$, los coeficientes pares e impares no forman cadenas independientes a partir de $a_4$, y cada solución contiene potencias de ambas paridades. La separación en dos soluciones independientes se hace por las condiciones iniciales $y(1) = a_0$ e $y'(1) = a_1$.

La ecuación no admite una solución elemental conocida, a diferencia de otros casos de la sección. La recurrencia permite, sin embargo, calcular tantos coeficientes como se desee y con ellos aproximar la solución en un entorno de $x = 1$.
