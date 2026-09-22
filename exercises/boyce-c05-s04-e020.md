---
title: "Boyce 5.4 Ejercicio 20"
exercise-id: boyce-c05-s04-e020
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.4, ejercicio 20"
topics:
  - frobenius
competencies:
  - clasificar.punto-singular-regular
  - resolver-series.serie-potencias
  - resolver-series.recurrencia
prerequisitos:
  - calculo-avanzado.series-potencias
  - algebra.factorizacion-polinomios
difficulty:
  conceptual: 1
  technical: 2
solution-status: draft
statement-status: accepted
source-images:
  - c05s04i02-p271.png
---

## Enunciado

En cada uno de los problemas 19 y 20 demuestre que el punto $x = 0$ es un punto singular regular. En cada problema, intente hallar soluciones de la forma $\sum_{n=0}^{\infty} a_n x^n$. Demuestre que en el problema 19 sólo existe una solución diferente de cero de esta forma y que en el problema 20 no existen soluciones diferentes de cero de esta forma. Por tanto, en ningún caso es posible hallar la solución general de esta manera. Esto es típico de las ecuaciones con puntos singulares.

20. $2x^2y'' + 3xy' - (1 + x)y = 0$

## Solución

El punto $x=0$ es un **punto singular regular** de la ecuación. La única solución de la forma $y=\sum_{n=0}^{\infty}a_nx^{n}$ es la solución trivial; por tanto, no existe ninguna solución diferente de cero con esa forma.

$$
y(x)\equiv 0.
$$

## Resolución

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. Para $x\ne 0$,

$$
y''+\frac{3}{2x}y'-\frac{1+x}{2x^{2}}y=0,\qquad p(x)=\frac{3}{2x},\qquad q(x)=-\frac{1+x}{2x^{2}}.
$$

En $x=0$ los coeficientes $p$ y $q$ dejan de ser analíticos, de modo que $x=0$ es un punto singular. Para clasificarlo se calculan los productos

$$
x\,p(x)=\frac{3}{2},\qquad x^{2}q(x)=-\frac{1+x}{2}.
$$

Ambos son polinomios y, por tanto, analíticos en $x=0$. Se satisface la condición de punto singular regular; en consecuencia, $x=0$ es un **punto singular regular**.

A continuación se intenta una solución en **serie de potencias**,

$$
y=\sum_{n=0}^{\infty}a_nx^{n},\qquad y'=\sum_{n=1}^{\infty}na_nx^{n-1},\qquad y''=\sum_{n=2}^{\infty}n(n-1)a_nx^{n-2}.
$$

Al sustituir en la ecuación y reindexar cada suma como potencias de $x^{n}$,

$$
\begin{aligned}
2x^{2}y''+3xy'-(1+x)y
&= \sum_{n=0}^{\infty}2n(n-1)a_nx^{n}
 + \sum_{n=0}^{\infty}3na_nx^{n} \\
&\quad - \sum_{n=0}^{\infty}a_nx^{n}
 - \sum_{n=1}^{\infty}a_{n-1}x^{n}=0.
\end{aligned}
$$

El coeficiente de $x^{0}$ procede solo de los términos con $n=0$ y vale $-a_0$. La ecuación exige

$$
-a_0=0,\qquad\text{es decir,}\qquad a_0=0.
$$

Para $n\ge 1$, la anulación del coeficiente de $x^{n}$ da la relación de recurrencia

$$
\left[2n(n-1)+3n-1\right]a_n-a_{n-1}=0.
$$

Como $2n(n-1)+3n-1=2n^{2}+n-1=(2n-1)(n+1)$ no se anula para $n\ge 1$, resulta

$$
a_n=\frac{a_{n-1}}{(2n-1)(n+1)},\qquad n\ge 1.
$$

Partiendo de $a_0=0$, la recurrencia implica $a_1=0$, $a_2=0$ y, por inducción, $a_n=0$ para todo $n\ge 0$. Por tanto, la única solución de la forma $\sum_{n=0}^{\infty}a_nx^{n}$ es

$$
y(x)\equiv 0.
$$

No existe, pues, ninguna solución diferente de cero de esa forma.

## Observaciones

El coeficiente de la potencia más baja, $x^{0}$, es $-a_0$ y no contiene ninguna incógnita de índice superior. Por eso fija $a_0=0$ y arrastra a todos los coeficientes restantes.

La forma $\sum_{n=0}^{\infty}a_nx^{n}$ es la serie de potencias propia de un punto ordinario. Como $x=0$ es singular, el método no garantiza solución y, en este caso, colapsa a la solución trivial. La ecuación sí admite soluciones no triviales; lo que no admite es una solución de ese tipo en torno a $x=0$.
