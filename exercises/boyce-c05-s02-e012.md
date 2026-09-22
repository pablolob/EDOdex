---
title: "Boyce 5.2 Ejercicio 12"
exercise-id: boyce-c05-s02-e012
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.2, ejercicio 12"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - resolver-series.serie-potencias
  - resolver-series.recurrencia
hidden-competencies:
  - clasificar.punto-ordinario
prerequisitos:
  - calculo-avanzado.series-potencias
  - calculo-avanzado.series-taylor
  - calculo-avanzado.convergencia
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c05s02i02-p258.png
---

## Enunciado

En cada uno de los problemas 1 a 14, resuelva la ecuación diferencial dada por medio de una serie de potencias alrededor de un punto dado $x_0$. Halle la relación de recurrencia; encuentre también los cuatro primeros términos de cada una de dos soluciones linealmente independientes (a menos que la serie termine antes). Si es posible, encuentre el término general de cada solución.

12. $(1 - x)y'' + xy' - y = 0, \quad x_0 = 0$

## Solución

La relación de recurrencia es

$$
a_{n+2}=\frac{n(n+1)a_{n+1}-(n-1)a_n}{(n+2)(n+1)},\qquad n\ge 0.
$$

La solución general es

$$
y=C_1e^x+C_2x,
$$

con las dos soluciones linealmente independientes

$$
y_1(x)=e^x=\sum_{n=0}^{\infty}\frac{x^n}{n!}=1+x+\frac{x^2}{2}+\frac{x^3}{6}+\cdots,\qquad y_2(x)=x,
$$

donde la serie de $y_2$ termina en el primer término.

## Resolución

La ecuación es de **segundo orden** y **lineal**. Al escribirla en forma estándar,

$$
y''+\frac{x}{1-x}\,y'-\frac{1}{1-x}\,y=0,
$$

se observa que su único punto singular es $x=1$. Por tanto $x_0=0$ es un **punto ordinario** y la solución admite un desarrollo en serie de potencias de $x$ con radio de convergencia al menos $1$.

Se propone entonces

$$
y=\sum_{n=0}^{\infty}a_nx^n.
$$

Derivando término a término y reindexando para escribir todas las sumas en potencias $x^n$,

$$
\begin{aligned}
y''&=\sum_{n=2}^{\infty}n(n-1)a_nx^{n-2}=\sum_{n=0}^{\infty}(n+2)(n+1)a_{n+2}x^n, \\
xy'&=x\sum_{n=1}^{\infty}na_nx^{n-1}=\sum_{n=1}^{\infty}na_nx^n, \\
xy''&=x\sum_{n=2}^{\infty}n(n-1)a_nx^{n-2}=\sum_{n=1}^{\infty}n(n+1)a_{n+1}x^n.
\end{aligned}
$$

Sustituyendo en $(1-x)y''+xy'-y=0$, es decir $y''-xy''+xy'-y=0$, resulta

$$
\sum_{n=0}^{\infty}(n+2)(n+1)a_{n+2}x^n
-\sum_{n=1}^{\infty}n(n+1)a_{n+1}x^n
+\sum_{n=1}^{\infty}na_nx^n
-\sum_{n=0}^{\infty}a_nx^n=0.
$$

El término constante da $2a_2-a_0=0$, de donde $a_2=\dfrac{a_0}{2}$. Para $n\ge1$, el coeficiente de $x^n$ es

$$
(n+2)(n+1)a_{n+2}-n(n+1)a_{n+1}+(n-1)a_n=0.
$$

Al despejar $a_{n+2}$ se obtiene la relación de recurrencia

$$
a_{n+2}=\frac{n(n+1)a_{n+1}-(n-1)a_n}{(n+2)(n+1)},\qquad n\ge1.
$$

Esta misma expresión reproduce el caso $n=0$, pues da $a_2=\dfrac{a_0}{2}$; por eso puede escribirse para $n\ge0$.

Los coeficientes $a_0$ y $a_1$ quedan libres. Iterando la recurrencia,

$$
a_2=\frac{a_0}{2},\qquad
a_3=\frac{2a_2}{6}=\frac{a_0}{6},\qquad
a_4=\frac{6a_3-a_2}{12}=\frac{a_0}{24},\qquad
a_5=\frac{12a_4-2a_3}{20}=\frac{a_0}{120}.
$$

El coeficiente $a_1$ no interviene en ningún coeficiente de orden superior: la recurrencia reproduce $a_n=\dfrac{a_0}{n!}$ para todo $n\ge2$, con independencia de $a_1$. En efecto, si $a_n=\dfrac{a_0}{n!}$ y $a_{n+1}=\dfrac{a_0}{(n+1)!}$, entonces

$$
a_{n+2}
=\frac{n(n+1)\dfrac{a_0}{(n+1)!}-(n-1)\dfrac{a_0}{n!}}{(n+2)(n+1)}
=\frac{\dfrac{a_0}{n!}}{(n+2)(n+1)}
=\frac{a_0}{(n+2)!}.
$$

Por tanto, la solución general es

$$
y=a_0\left(1+\frac{x^2}{2}+\frac{x^3}{6}+\frac{x^4}{24}+\cdots\right)+a_1x=a_0(e^x-x)+a_1x.
$$

Las dos series que multiplican a $a_0$ y $a_1$ son linealmente independientes, pues sus términos dominantes son $1$ y $x$. Como $e^x=(e^x-x)+x$ es combinación lineal de ambas, el conjunto $\{e^x,x\}$ también es fundamental. Así,

$$
y_1(x)=e^x=1+x+\frac{x^2}{2}+\frac{x^3}{6}+\cdots,\qquad y_2(x)=x,
$$

y la solución general se escribe $y=C_1e^x+C_2x$.

El único punto singular es $x=1$, de modo que el teorema garantiza convergencia al menos para $|x|<1$. Ambas soluciones son funciones enteras, así que en realidad sus series convergen para todo $x\in\mathbb{R}$.

## Observaciones

La ecuación admite las soluciones elementales $y=e^x$ y $y=x$: al sustituir $y=e^x$ todos los términos se cancelan, y $y=x$ anula $xy'-y$. Esa estructura explica que una de las series termine y que la otra se reconozca como la exponencial.

A diferencia de otras ecuaciones de la sección, la recurrencia es de tres términos y no desacopla las subsucesiones par e impar. El coeficiente $a_1$ solo aporta el término lineal, mientras que todos los coeficientes de orden $n\ge2$ dependen de $a_0$.
