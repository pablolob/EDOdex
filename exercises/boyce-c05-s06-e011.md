---
title: "Boyce 5.6 Ejercicio 11"
exercise-id: boyce-c05-s06-e011
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.6, ejercicio 11"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
  - orden-superior
competencies:
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

La ecuación de Legendre de orden $\alpha$ es

$$(1 - x^2)y'' - 2xy' + \alpha(\alpha + 1)y = 0.$$

La solución de esta ecuación cerca del punto ordinario $x = 0$ se analizó en los problemas 20 y 21 de la sección 5.3. En el ejemplo 4 de la sección 5.4 se demostró que $x = \pm 1$ son puntos singulares regulares. Determine la ecuación indicial y sus raíces para el punto $x = 1$. Encuentre una solución en serie en potencias de $x - 1$ para $x - 1 > 0$.

Sugerencia: escriba $1 + x = 2 + (x - 1)$ y $x = 1 + (x - 1)$. De manera opcional haga el cambio de variable $x - 1 = t$ y determine una solución en serie en potencias de $t$.

## Solución

El punto $x=1$ es un **punto singular regular**. La **ecuación indicial** es

$$
r^2=0,
$$

con raíz doble $r_1=r_2=0$. Una **solución en serie** en potencias de $x-1$ para $x-1>0$ es

$$
y(x)=a_0\left[1+\frac{\alpha(\alpha+1)}{2}(x-1)
+\frac{\alpha(\alpha+1)\bigl(\alpha(\alpha+1)-2\bigr)}{16}(x-1)^2+\cdots\right],
$$

cuyos coeficientes quedan definidos por $c_0=1$ y la **relación de recurrencia**

$$
c_{n+1}=\frac{\alpha(\alpha+1)-n(n+1)}{2(n+1)^2}\,c_n,\qquad n\ge 0 .
$$

Es decir, $y(x)=a_0\sum_{n=0}^{\infty}c_n(x-1)^n$ con $a_0$ arbitrario no nulo.

## Resolución

Se busca una solución válida en $x-1>0$ alrededor del punto singular regular $x=1$. El cambio de variable $t=x-1$ traslada ese punto a $t=0$.

Con $x=1+t$ se tiene

$$
1-x^2=1-(1+t)^2=-2t-t^2=-t(2+t),\qquad 2x=2(1+t).
$$

Al sustituir y multiplicar por $-1$, la ecuación de Legendre se escribe

$$
t(2+t)y''+2(1+t)y'-\alpha(\alpha+1)y=0 . \tag{1}
$$

Como $t=0$ es un punto singular regular, se aplica el **método de Frobenius** con

$$
y=\sum_{n=0}^{\infty}a_nt^{n+r},\qquad a_0\ne 0 .
$$

Las derivadas son

$$
y'=\sum_{n=0}^{\infty}(n+r)a_nt^{n+r-1},\qquad
y''=\sum_{n=0}^{\infty}(n+r)(n+r-1)a_nt^{n+r-2}.
$$

Al sustituir en (1) resulta

$$
\begin{aligned}
t(2+t)y''&=2ty''+t^2y''
=\sum_{n=0}^{\infty}2(n+r)(n+r-1)a_nt^{n+r-1}
+\sum_{n=0}^{\infty}(n+r)(n+r-1)a_nt^{n+r},\\
2(1+t)y'&=2y'+2ty'
=\sum_{n=0}^{\infty}2(n+r)a_nt^{n+r-1}
+\sum_{n=0}^{\infty}2(n+r)a_nt^{n+r},\\
-\alpha(\alpha+1)y&=-\sum_{n=0}^{\infty}\alpha(\alpha+1)a_nt^{n+r}.
\end{aligned}
$$

La potencia más baja, $t^{r-1}$, procede solo de los primeros sumandos de $2ty''$ y de $2y'$. Su coeficiente es

$$
\bigl[2r(r-1)+2r\bigr]a_0=2r^2a_0 .
$$

Como $a_0\ne 0$, la **ecuación indicial** es $2r^2=0$, es decir,

$$
r^2=0,
$$

cuya raíz es doble: $r_1=r_2=0$.

Para obtener la recurrencia se iguala a cero el coeficiente de $t^{n+r}$:

$$
\bigl[2(n+1+r)(n+r)+2(n+1+r)\bigr]a_{n+1}
+\bigl[(n+r)(n+r-1)+2(n+r)-\alpha(\alpha+1)\bigr]a_n=0,
$$

que se simplifica a

$$
2(n+r+1)^2a_{n+1}+\bigl[(n+r)(n+r+1)-\alpha(\alpha+1)\bigr]a_n=0 . \tag{2}
$$

Con $r=0$, la **relación de recurrencia** es

$$
a_{n+1}=\frac{\alpha(\alpha+1)-n(n+1)}{2(n+1)^2}\,a_n,\qquad n\ge 0 .
$$

Los primeros coeficientes, con $a_0\ne 0$, son

$$
a_1=\frac{\alpha(\alpha+1)}{2}\,a_0,\qquad
a_2=\frac{\alpha(\alpha+1)\bigl(\alpha(\alpha+1)-2\bigr)}{16}\,a_0 .
$$

Escribiendo $c_n=a_n/a_0$, de modo que $c_0=1$, la solución es

$$
y(x)=a_0\sum_{n=0}^{\infty}c_n(x-1)^n .
$$

El punto singular más próximo a $x=1$ es $x=-1$, a distancia $2$. Por el teorema de Frobenius la serie converge al menos para $|x-1|<2$, esto es, en $0<x-1<2$.

## Observaciones

La raíz doble $r=0$ explica que el método de Frobenius proporcione una única solución en serie. La segunda solución linealmente independiente contiene, en general, un término logarítmico y no se solicita.

Cuando $\alpha$ es un entero no negativo, el factor $\alpha(\alpha+1)-n(n+1)$ se anula para $n=\alpha$ y la serie termina. La solución es entonces un polinomio, el polinomio de Legendre de orden $\alpha$. Por ejemplo, para $\alpha=1$ resulta $y=a_0x$.

### Método alternativo: desarrollo directo en potencias de $x-1$

Sin introducir la variable auxiliar $t$, se sustituye directamente $y=\sum_{n=0}^{\infty}a_n(x-1)^{n+r}$ y se desarrollan $1-x^2=-(x-1)(1+x)$ y $2x$ en potencias de $x-1$ usando la sugerencia. El resultado es idéntico al anterior; el cambio $t=x-1$ solo simplifica la escritura.
