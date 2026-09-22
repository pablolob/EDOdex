---
title: "Boyce 5.2 Ejercicio 2"
exercise-id: boyce-c05-s02-e002
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.2, ejercicio 2"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - resolver-analiticamente.series-potencias
  - resolver-series.recurrencia
prerequisitos:
  - calculo-avanzado.series-potencias
  - calculo-avanzado.convergencia
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c05s02i01-p257.png
---

## Enunciado

En cada uno de los problemas 1 a 14, resuelva la ecuación diferencial dada por medio de una serie de potencias alrededor de un punto dado $x_0$. Halle la relación de recurrencia; encuentre también los cuatro primeros términos de cada una de dos soluciones linealmente independientes (a menos que la serie termine antes). Si es posible, encuentre el término general de cada solución.

2. $y'' - xy' - y = 0, \quad x_0 = 0$

## Solución

La relación de recurrencia es

$$
a_{n+2}=\frac{a_n}{n+2},\qquad n=0,1,2,\dots
$$

Dos soluciones linealmente independientes son

$$
y_1(x)=1+\frac{x^2}{2}+\frac{x^4}{8}+\frac{x^6}{48}+\cdots=\sum_{k=0}^{\infty}\frac{x^{2k}}{2^k k!},
$$

$$
y_2(x)=x+\frac{x^3}{3}+\frac{x^5}{15}+\frac{x^7}{105}+\cdots=x+\sum_{k=1}^{\infty}\frac{2^k k!}{(2k+1)!}\,x^{2k+1}.
$$

La solución general es $y=a_0y_1+a_1y_2$, con $a_0$ y $a_1$ constantes arbitrarias. La primera serie se reconoce como $y_1=e^{x^2/2}$.

## Resolución

Se busca una solución en **serie de potencias** alrededor de $x_0=0$:

$$
y=\sum_{n=0}^{\infty}a_nx^n.
$$

El punto $x_0=0$ es ordinario: el coeficiente de $y''$ es $1$ y los demás coeficientes son polinomios, de modo que no aparece ninguna singularidad en el origen.

Derivando término a término y reindexando para que todas las sumas queden en potencias $x^n$,

$$
\begin{aligned}
y'&=\sum_{n=1}^{\infty}na_nx^{n-1}=\sum_{n=0}^{\infty}(n+1)a_{n+1}x^n, \\
y''&=\sum_{n=2}^{\infty}n(n-1)a_nx^{n-2}=\sum_{n=0}^{\infty}(n+2)(n+1)a_{n+2}x^n, \\
xy'&=\sum_{n=1}^{\infty}na_nx^n=\sum_{n=0}^{\infty}na_nx^n.
\end{aligned}
$$

Sustituyendo en $y''-xy'-y=0$ y agrupando,

$$
\sum_{n=0}^{\infty}\big[(n+2)(n+1)a_{n+2}-na_n-a_n\big]x^n=0.
$$

Cada coeficiente debe anularse. Por tanto,

$$
(n+2)(n+1)a_{n+2}-(n+1)a_n=0,
$$

y como $n+1\neq 0$,

$$
a_{n+2}=\frac{a_n}{n+2},\qquad n=0,1,2,\dots
$$

Los coeficientes de índice par quedan determinados por $a_0$ y los de índice impar por $a_1$. Para los pares,

$$
a_2=\frac{a_0}{2},\qquad a_4=\frac{a_2}{4}=\frac{a_0}{2\cdot4},\qquad a_6=\frac{a_4}{6}=\frac{a_0}{2\cdot4\cdot6},
$$

es decir,

$$
a_{2k}=\frac{a_0}{2^kk!}.
$$

Para los impares,

$$
a_3=\frac{a_1}{3},\qquad a_5=\frac{a_3}{5}=\frac{a_1}{3\cdot5},\qquad a_7=\frac{a_5}{7}=\frac{a_1}{3\cdot5\cdot7},
$$

y como $3\cdot5\cdots(2k+1)=\dfrac{(2k+1)!}{2^kk!}$,

$$
a_{2k+1}=\frac{a_1}{3\cdot5\cdots(2k+1)}=\frac{2^kk!}{(2k+1)!}\,a_1.
$$

Reuniendo ambas familias,

$$
y=a_0\sum_{k=0}^{\infty}\frac{x^{2k}}{2^kk!}+a_1\left(x+\sum_{k=1}^{\infty}\frac{2^kk!}{(2k+1)!}\,x^{2k+1}\right).
$$

Las dos series que multiplican a $a_0$ y $a_1$ son linealmente independientes, pues sus primeros términos son $1$ y $x$, respectivamente. La primera es la serie de $e^{x^2/2}$:

$$
\sum_{k=0}^{\infty}\frac{x^{2k}}{2^kk!}=\sum_{k=0}^{\infty}\frac{1}{k!}\left(\frac{x^2}{2}\right)^k=e^{x^2/2}.
$$

En efecto, $y_1=e^{x^2/2}$ cumple $y_1'=xe^{x^2/2}$ y $y_1''=(1+x^2)e^{x^2/2}$, de donde $y_1''-xy_1'-y_1=(1+x^2-x^2-1)e^{x^2/2}=0$.

## Observaciones

Los coeficientes de la ecuación son polinomios y el coeficiente de $y''$ no se anula, así que todo punto es ordinario. En consecuencia, ambas series convergen para todo $x\in\mathbb{R}$ y las soluciones son válidas en toda la recta.

La segunda solución $y_2$ no admite una forma elemental cerrada.
