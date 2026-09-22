---
title: "Boyce 5.2 Ejercicio 1"
exercise-id: boyce-c05-s02-e001
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.2, ejercicio 1"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - resolver-series.serie-potencias
  - resolver-series.recurrencia
prerequisitos:
  - calculo-avanzado.series-potencias
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c05s02i01-p257.png
---

## Enunciado

En cada uno de los problemas 1 a 14, resuelva la ecuación diferencial dada por medio de una serie de potencias alrededor de un punto dado $x_0$. Halle la relación de recurrencia; encuentre también los cuatro primeros términos de cada una de dos soluciones linealmente independientes (a menos que la serie termine antes). Si es posible, encuentre el término general de cada solución.

1. $y'' - y = 0, \quad x_0 = 0$

## Solución

La relación de recurrencia es

$$
a_{n+2}=\frac{a_n}{(n+2)(n+1)},\qquad n=0,1,2,\dots
$$

Dos soluciones linealmente independientes son

$$
y_1(x)=1+\frac{x^2}{2}+\frac{x^4}{24}+\frac{x^6}{720}+\cdots,\qquad
y_2(x)=x+\frac{x^3}{6}+\frac{x^5}{120}+\frac{x^7}{5040}+\cdots
$$

y sus términos generales son

$$
y_1(x)=\sum_{n=0}^{\infty}\frac{x^{2n}}{(2n)!},\qquad
y_2(x)=\sum_{n=0}^{\infty}\frac{x^{2n+1}}{(2n+1)!}.
$$

## Resolución

Se busca una solución en **serie de potencias** centrada en $x_0=0$,

$$
y=\sum_{n=0}^{\infty} a_n x^n.
$$

La derivación término a término es válida dentro del intervalo de convergencia. Derivando dos veces y reindexando para escribir todo con potencias $x^n$,

$$
y''=\sum_{n=0}^{\infty}(n+2)(n+1)a_{n+2}x^n.
$$

Al sustituir $y$ y $y''$ en $y''-y=0$ resulta

$$
\sum_{n=0}^{\infty}\big[(n+2)(n+1)a_{n+2}-a_n\big]x^n=0.
$$

La representación de una función mediante una serie de potencias es única, de modo que cada coeficiente se anula:

$$
(n+2)(n+1)a_{n+2}-a_n=0.
$$

Al despejar $a_{n+2}$ se obtiene la relación de recurrencia

$$
a_{n+2}=\frac{a_n}{(n+2)(n+1)},\qquad n=0,1,2,\dots
$$

La relación no impone condición sobre $a_0$ ni sobre $a_1$: ambos son arbitrarios y generan dos cadenas de coeficientes independientes.

Para la cadena de índice par, que parte de $a_0$,

$$
a_2=\frac{a_0}{2},\qquad
a_4=\frac{a_2}{12}=\frac{a_0}{24},\qquad
a_6=\frac{a_4}{30}=\frac{a_0}{720}.
$$

Para la cadena de índice impar, que parte de $a_1$,

$$
a_3=\frac{a_1}{6},\qquad
a_5=\frac{a_3}{20}=\frac{a_1}{120},\qquad
a_7=\frac{a_5}{42}=\frac{a_1}{5040}.
$$

La recurrencia se resuelve por inducción. Para los índices pares, $a_{2n}=\dfrac{a_0}{(2n)!}$; para los impares, $a_{2n+1}=\dfrac{a_1}{(2n+1)!}$. En efecto, sustituir $n$ por $2n$ en la recurrencia da $a_{2n+2}=\dfrac{a_{2n}}{(2n+2)(2n+1)}$, que reproduce el factorial al avanzar de $2n$ a $2n+2$; el caso impar es análogo.

Por tanto, la solución general es

$$
y=a_0\left(1+\frac{x^2}{2}+\frac{x^4}{24}+\frac{x^6}{720}+\cdots\right)
+a_1\left(x+\frac{x^3}{6}+\frac{x^5}{120}+\frac{x^7}{5040}+\cdots\right).
$$

Las dos series tienen radio de convergencia infinito, por lo que la solución es válida para todo $x\in\mathbb{R}$.

## Observaciones

Las dos soluciones obtenidas son $\cosh x$ y $\sinh x$, de modo que la solución general también se escribe como $y=C_1\cosh x+C_2\sinh x$ o, equivalentemente, $y=C_1e^{x}+C_2e^{-x}$.

El punto $x_0=0$ es un punto ordinario de la ecuación, ya que los coeficientes de $y''$ e $y$ no tienen singularidades; por eso la solución admite una serie de potencias con radio de convergencia infinito.

### Método alternativo: ecuación característica

La ecuación $y''-y=0$ tiene coeficientes constantes. Su ecuación característica es $r^2-1=0$, con raíces $r=\pm 1$. Esto da directamente la solución general $y=C_1e^{x}+C_2e^{-x}$, en concordancia con el resultado en serie.
