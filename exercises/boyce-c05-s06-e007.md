---
title: "Boyce 5.6 Ejercicio 7"
exercise-id: boyce-c05-s06-e007
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.6, ejercicio 7"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
  - orden-superior
competencies:
  - clasificar.punto-singular-regular
  - resolver-series.ecuacion-indicial
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

7. $xy'' + (1 - x)y' - y = 0$

## Solución

La ecuación tiene un **punto singular regular** en $x=0$. La **ecuación indicial** es

$$
r^2=0,
$$

con raíz doble $r_1=r_2=0$. La **relación de recurrencia** es

$$
a_{n+1}=\frac{a_n}{n+1+r},\qquad n\ge0 .
$$

Solución en serie correspondiente a la raíz mayor $r_1=0$:

$$
y(x)=a_0\sum_{n=0}^{\infty}\frac{x^n}{n!}=a_0\,e^x,\qquad x>0 .
$$

Como las raíces son iguales, el enunciado no solicita una segunda solución en serie.

## Resolución

Se escribe la ecuación en forma estándar,

$$
y''+\frac{1-x}{x}\,y'-\frac{1}{x}\,y=0,
$$

con $p(x)=\dfrac{1-x}{x}$ y $q(x)=-\dfrac{1}{x}$. En $x=0$ los productos $xp(x)=1-x$ y $x^2q(x)=-x$ son analíticos y tienen límite finito. Por tanto, $x=0$ es un **punto singular regular**.

Se aplica el **método de Frobenius** con

$$
y=\sum_{n=0}^{\infty}a_nx^{n+r},\qquad a_0\ne0 .
$$

Las derivadas son

$$
y'=\sum_{n=0}^{\infty}(n+r)a_nx^{n+r-1},\qquad y''=\sum_{n=0}^{\infty}(n+r)(n+r-1)a_nx^{n+r-2}.
$$

Al sustituir en la ecuación resulta

$$
xy''+(1-x)y'-y=\sum_{n=0}^{\infty}(n+r)^2a_nx^{n+r-1}-\sum_{n=0}^{\infty}(n+r+1)a_nx^{n+r}.
$$

La potencia más baja es $x^{r-1}$ y proviene solo del primer sumando. Su coeficiente es $r^2a_0$. Como $a_0\ne0$, la **ecuación indicial** es

$$
r^2=0,
$$

cuya raíz doble es

$$
r_1=r_2=0 .
$$

Para obtener la recurrencia se iguala a cero el coeficiente de $x^{n+r}$. El primer sumando aporta el término con $a_{n+1}$ y el segundo el término con $a_n$:

$$
(n+1+r)^2a_{n+1}-(n+r+1)a_n=0,\qquad n\ge0 .
$$

Como $n+1+r=n+r+1\ne0$, se simplifica a

$$
a_{n+1}=\frac{a_n}{n+1+r},\qquad n\ge0 .
$$

**Raíz doble $r=0$.** La recurrencia se reduce a

$$
a_{n+1}=\frac{a_n}{n+1},\qquad n\ge0,
$$

y por iteración

$$
a_n=\frac{a_0}{n!} .
$$

Tomando $a_0=1$,

$$
y(x)=\sum_{n=0}^{\infty}\frac{x^n}{n!}=e^x .
$$

Esta serie es la solución en serie correspondiente a la raíz mayor $r_1=0$, que coincide con la raíz menor. Como ambas raíces son iguales, no procede calcular una segunda solución en serie.

## Observaciones

La serie converge para todo $x$ real, pues $x=0$ es el único punto singular de la ecuación; en particular es válida en $x>0$, como pide el enunciado.

La raíz de la ecuación indicial es doble, de modo que la segunda solución linealmente independiente que predice el método de Frobenius contendría un término logarítmico. El enunciado no la solicita, ya que solo la pide cuando las raíces son desiguales y no difieren en un entero.
