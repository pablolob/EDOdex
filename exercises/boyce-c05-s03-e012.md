---
title: "Boyce 5.3 Ejercicio 12"
exercise-id: boyce-c05-s03-e012
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.3, ejercicio 12"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
  - orden-superior
competencies:
  - resolver-series.serie-potencias
  - resolver-series.recurrencia
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.punto-ordinario
prerequisitos:
  - calculo-avanzado.series-potencias
  - calculo-avanzado.convergencia
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c05s03i02-p264.png
---

## Enunciado

Encuentre los tres primeros términos de cada una de dos soluciones linealmente independientes en serie de potencias de $x$ de

$$e^x y'' + xy = 0.$$

¿Cuál es el radio de convergencia de cada solución en serie?

Sugerencia: desarrolle $e^x$ o $xe^{-x}$ en una serie de potencias alrededor de $x = 0$.

## Solución

Dos soluciones linealmente independientes, con sus tres primeros términos, son

$$
\begin{aligned}
y_1(x) &= 1 - \frac{1}{6}x^3 + \frac{1}{12}x^4 + \cdots, \\[2pt]
y_2(x) &= x - \frac{1}{12}x^4 + \frac{1}{20}x^5 + \cdots.
\end{aligned}
$$

Ambas series tienen radio de convergencia

$$
\rho = \infty.
$$

## Resolución

Como $e^x$ no se anula, la ecuación se divide por $e^x$ y se escribe en forma estándar:

$$
y'' + xe^{-x}y = 0.
$$

La función $xe^{-x}$ es analítica en todo el plano complejo. Por tanto, $x=0$ es un **punto ordinario** y las soluciones admiten un desarrollo en **series de potencias** alrededor de $x=0$. Se propone

$$
y(x)=\sum_{n=0}^{\infty} a_n x^n,
\qquad
y''(x)=\sum_{n=0}^{\infty}(n+1)(n+2)a_{n+2}x^n.
$$

El desarrollo de $e^{-x}$ alrededor de $x=0$ es $e^{-x}=1-x+\frac{x^2}{2}-\frac{x^3}{6}+\cdots$, de modo que

$$
xe^{-x}y
=
\left(x-x^2+\frac{x^3}{2}-\frac{x^4}{6}+\cdots\right)
\left(a_0+a_1x+a_2x^2+a_3x^3+\cdots\right).
$$

Al sustituir en la ecuación e igualar a cero el coeficiente de cada potencia de $x$ se obtiene

$$
\begin{aligned}
x^0:&\quad 2a_2 = 0, \\
x^1:&\quad 6a_3 + a_0 = 0, \\
x^2:&\quad 12a_4 - a_0 + a_1 = 0, \\
x^3:&\quad 20a_5 + \frac{a_0}{2} - a_1 + a_2 = 0.
\end{aligned}
$$

Estas relaciones determinan

$$
a_2=0,\qquad
a_3=-\frac{a_0}{6},\qquad
a_4=\frac{a_0-a_1}{12},\qquad
a_5=\frac{2a_1-a_0}{40}.
$$

La solución general en serie es entonces

$$
y(x)
=
a_0\left(1-\frac{x^3}{6}+\frac{x^4}{12}-\frac{x^5}{40}+\cdots\right)
+
a_1\left(x-\frac{x^4}{12}+\frac{x^5}{20}+\cdots\right).
$$

Las dos series entre paréntesis son linealmente independientes: la primera vale $1$ en $x=0$ con derivada $0$, y la segunda vale $0$ con derivada $1$. Su wronskiano en $x=0$ es $1$. Tomando $(a_0,a_1)=(1,0)$ y $(0,1)$ resultan $y_1$ y $y_2$.

El radio de convergencia queda fijado por los puntos singulares más próximos a $x=0$. Al ser $xe^{-x}$ analítica en todo el plano complejo, la ecuación no tiene puntos singulares y cada serie converge para todo $x$ real; por tanto, $\rho=\infty$.

## Observaciones

El término $a_2$ se anula, por lo que ambas soluciones presentan huecos en sus primeras potencias. El desarrollo de $xe^{-x}$ no tiene término constante; por eso el coeficiente de $x^0$ en $xe^{-x}y$ es nulo y la ecuación de orden $x^0$ se reduce a $2a_2=0$.

El radio de convergencia es infinito porque $e^{-x}$ es una función entera. Si el coeficiente de $y''$ tuviera ceros, esos ceros serían los puntos singulares que acotarían el radio.

### Método alternativo: expansión de $e^x$

En lugar de dividir por $e^x$, puede mantenerse la ecuación original y desarrollar $e^x=1+x+\frac{x^2}{2}+\frac{x^3}{6}+\cdots$. Al multiplicar por $y''$ y sustituir la serie de $y$ se obtienen los mismos coeficientes; el sistema de ecuaciones resulta idéntico al anterior.
