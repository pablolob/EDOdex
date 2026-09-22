---
title: "Boyce 5.6 Ejercicio 9"
exercise-id: boyce-c05-s06-e009
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.6, ejercicio 9"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - clasificar.punto-singular-regular
  - resolver-series.ecuacion-indicial
  - resolver-series.recurrencia
  - resolver-analiticamente.series-frobenius
prerequisitos:
  - calculo-avanzado.series-potencias
  - polinomios.resolver
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c05s06i01-p284.png
---

## Enunciado

En cada uno de los problemas 1 a 10, demuestre que la ecuación diferencial dada tiene un punto singular regular en $x = 0$. Determine la ecuación indicial, la relación de recurrencia y las raíces de la ecuación indicial. Halle la solución en serie ($x > 0$) correspondiente a la raíz más grande. Si las raíces son desiguales y no difieren en un entero, encuentre también la solución en serie correspondiente a la raíz más pequeña.

9. $x^2y'' - x(x + 3)y' + (x + 3)y = 0$

## Solución

El punto $x=0$ es un **punto singular regular**. La **ecuación indicial** es

$$
r^2-4r+3=0,
$$

con raíces $r_1=3$ y $r_2=1$. La **relación de recurrencia** es

$$
a_n=\frac{n+r-2}{(n+r-1)(n+r-3)}\,a_{n-1},\qquad n\ge1 .
$$

La solución en serie para $x>0$ correspondiente a la raíz mayor $r_1=3$ es

$$
y_1(x)=a_0\,x^3\sum_{n=0}^{\infty}\frac{2(n+1)}{(n+2)!}\,x^n
=a_0\left(x^3+\frac{2}{3}x^4+\frac{1}{4}x^5+\frac{1}{15}x^6+\cdots\right).
$$

Como las raíces difieren en un entero, $r_1-r_2=2$, no se solicita la solución correspondiente a la raíz menor.

## Resolución

Se escribe la ecuación en forma estándar. Para $x\ne0$,

$$
y''-\frac{x+3}{x}\,y'+\frac{x+3}{x^2}\,y=0,
$$

con $P(x)=-\dfrac{x+3}{x}$ y $Q(x)=\dfrac{x+3}{x^2}$. Los productos

$$
xP(x)=-(x+3),\qquad x^2Q(x)=x+3
$$

son analíticos en $x=0$, de modo que $x=0$ es un **punto singular regular**; además es el único punto singular.

Se aplica el **método de Frobenius** con

$$
y=\sum_{n=0}^{\infty}a_nx^{n+r},\qquad a_0\ne0 .
$$

Las derivadas son

$$
y'=\sum_{n=0}^{\infty}(n+r)a_nx^{n+r-1},\qquad
y''=\sum_{n=0}^{\infty}(n+r)(n+r-1)a_nx^{n+r-2}.
$$

Al sustituir en la ecuación,

$$
\begin{aligned}
x^2y''-x(x+3)y'+(x+3)y
&=\sum_{n=0}^{\infty}\bigl[(n+r)(n+r-1)-3(n+r)+3\bigr]a_nx^{n+r}\\
&\quad+\sum_{n=0}^{\infty}\bigl[1-(n+r)\bigr]a_nx^{n+r+1}.
\end{aligned}
$$

En el segundo sumando se desplaza el índice con $j=n+1$:

$$
\sum_{n=0}^{\infty}\bigl[1-(n+r)\bigr]a_nx^{n+r+1}
=\sum_{j=1}^{\infty}(2-j-r)a_{j-1}x^{j+r}.
$$

Como $(j+r)(j+r-1)-3(j+r)+3=(j+r-1)(j+r-3)$, el coeficiente de $x^{j+r}$ para $j\ge1$ es

$$
(j+r-1)(j+r-3)a_j+(2-j-r)a_{j-1}.
$$

Igualarlo a cero y renombrar el índice da la **relación de recurrencia**

$$
a_n=\frac{n+r-2}{(n+r-1)(n+r-3)}\,a_{n-1},\qquad n\ge1 .
$$

Para $n=0$ el coeficiente de $x^{r}$ es $(r-1)(r-3)a_0$. Como $a_0\ne0$, la **ecuación indicial** es

$$
(r-1)(r-3)=0,
$$

cuyas raíces son

$$
r_1=3,\qquad r_2=1 .
$$

**Raíz mayor $r_1=3$.** La recurrencia se reduce a

$$
a_n=\frac{n+1}{n(n+2)}\,a_{n-1},\qquad n\ge1 .
$$

Iterando desde $a_0$,

$$
a_1=\frac{2}{3}a_0,\qquad
a_2=\frac{3}{8}a_1=\frac{1}{4}a_0,\qquad
a_3=\frac{4}{15}a_2=\frac{1}{15}a_0,
$$

y en general

$$
a_n=a_0\prod_{k=1}^{n}\frac{k+1}{k(k+2)}=\frac{2(n+1)}{(n+2)!}\,a_0,
$$

pues $\prod_{k=1}^{n}(k+1)=(n+1)!$ y $\prod_{k=1}^{n}k(k+2)=n!\,\dfrac{(n+2)!}{2}$. Tomando $a_0$ como constante arbitraria,

$$
y_1(x)=a_0\,x^3\sum_{n=0}^{\infty}\frac{2(n+1)}{(n+2)!}\,x^n
=a_0\left(x^3+\frac{2}{3}x^4+\frac{1}{4}x^5+\frac{1}{15}x^6+\cdots\right).
$$

**Raíz menor $r_2=1$.** Las raíces difieren en $r_1-r_2=2$, que es un entero. El enunciado solo pide la segunda solución en serie cuando las raíces no difieren en un entero, por lo que este caso no se desarrolla.

## Observaciones

La diferencia entre las raíces, $2$, es un entero. Por eso la solución asociada a la raíz menor $r_2=1$ puede contener un término logarítmico y no se obtiene con la misma recurrencia; el enunciado excluye ese caso.

La serie de la raíz mayor admite una forma cerrada. Al sumarla resulta

$$
y_1(x)=2a_0\,x\bigl[(x-1)e^x+1\bigr],
$$

que se comprueba desarrollando $e^x$ y sustituyendo en la ecuación.

La ecuación no es de Cauchy-Euler: los coeficientes $-(x+3)$ y $x+3$ no son constantes. Es esa dependencia en $x$ la que genera la recurrencia.

El único punto singular es $x=0$, de modo que la serie converge para todo $x$. En el intervalo $x>0$ que pide el enunciado la solución es válida en $(0,\infty)$.
