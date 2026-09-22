---
title: "Boyce 5.6 Ejercicio 13"
exercise-id: boyce-c05-s06-e013
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.6, ejercicio 13"
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
  - c05s06i02-p285.png
---

## Enunciado

La ecuación diferencial de Laguerre es

$$xy'' + (1 - x)y' + \lambda y = 0.$$

Demuestre que $x = 0$ es un punto singular regular. Determine la ecuación indicicial, sus raíces, la relación de recurrencias y una solución ($x > 0$). Demuestre que si $\lambda = m$, un entero positivo, esta solución se reduce a un polinomio. Si se normaliza adecuadamente, este polinomio se conoce como polinomio de Laguerre, $L_m(x)$.

## Solución

La ecuación tiene un **punto singular regular** en $x=0$. La **ecuación indicial** es

$$
r^2=0,
$$

con raíz doble $r=0$. La **relación de recurrencia** es

$$
a_n=\frac{n-1-\lambda}{n^2}\,a_{n-1},\qquad n\ge1 .
$$

Una solución para $x>0$ es

$$
y_1(x)=\sum_{n=0}^{\infty}\frac{(-1)^n\,\lambda(\lambda-1)\cdots(\lambda-n+1)}{(n!)^2}\,x^n .
$$

Si $\lambda=m$ es un entero positivo, el factor $\lambda-n+1$ se anula en $n=m+1$, de modo que la serie se trunca en un polinomio de grado $m$. Con la normalización $a_0=1$ se obtiene el polinomio de Laguerre

$$
L_m(x)=\sum_{n=0}^{m}\frac{(-1)^n}{n!}\binom{m}{n}x^n .
$$

## Resolución

Se escribe la ecuación en forma estándar,

$$
y''+\frac{1-x}{x}\,y'+\frac{\lambda}{x}\,y=0,
$$

con $P(x)=\dfrac{1-x}{x}$ y $Q(x)=\dfrac{\lambda}{x}$. En $x=0$ los productos

$$
xP(x)=1-x,\qquad x^2Q(x)=\lambda x
$$

son polinomios, luego analíticos y con límite finito. Por tanto, $x=0$ es un **punto singular regular**, con $p_0=1$ y $q_0=0$.

Se aplica el **método de Frobenius** con

$$
y=\sum_{n=0}^{\infty}a_nx^{n+r},\qquad a_0\ne0 .
$$

Las derivadas son

$$
y'=\sum_{n=0}^{\infty}(n+r)a_nx^{n+r-1},\qquad
y''=\sum_{n=0}^{\infty}(n+r)(n+r-1)a_nx^{n+r-2}.
$$

Al sustituir en la ecuación resulta

$$
xy''+(1-x)y'+\lambda y
=\sum_{n=0}^{\infty}(n+r)^2a_nx^{n+r-1}
+\sum_{n=0}^{\infty}(\lambda-n-r)a_nx^{n+r}.
$$

La potencia más baja es $x^{r-1}$ y proviene solo del primer sumando. Su coeficiente es $r^2a_0$; como $a_0\ne0$, la **ecuación indicial** es

$$
r^2=0,
$$

cuya raíz es doble: $r_1=r_2=0$.

Para obtener la recurrencia se iguala a cero el coeficiente de $x^{m+r-1}$ con $m\ge1$. El primer sumando aporta $(m+r)^2a_m$; el segundo, tras reindexar, aporta $(m-1+r-\lambda)a_{m-1}$. Así,

$$
(m+r)^2a_m+(m-1+r-\lambda)a_{m-1}=0 .
$$

Con $r=0$ queda

$$
a_m=\frac{m-1-\lambda}{m^2}\,a_{m-1},\qquad m\ge1 .
$$

Iterando desde $a_0$,

$$
a_m=\frac{(m-1-\lambda)(m-2-\lambda)\cdots(0-\lambda)}{(m!)^2}\,a_0
=\frac{(-1)^m\,\lambda(\lambda-1)\cdots(\lambda-m+1)}{(m!)^2}\,a_0 .
$$

Por tanto, una solución para $x>0$ es

$$
y_1(x)=a_0\sum_{m=0}^{\infty}
\frac{(-1)^m\,\lambda(\lambda-1)\cdots(\lambda-m+1)}{(m!)^2}\,x^m .
$$

**Caso $\lambda=m$ entero positivo.** El coeficiente $a_n$ contiene el producto $\lambda(\lambda-1)\cdots(\lambda-n+1)$, que incluye el factor $\lambda-m=0$ cuando $n=m+1$. Entonces $a_{m+1}=0$ y todos los coeficientes posteriores se anulan: la serie se reduce a un polinomio de grado $m$. Con la normalización $a_0=1$,

$$
a_n=\frac{(-1)^n\,m(m-1)\cdots(m-n+1)}{(n!)^2}
=\frac{(-1)^n}{n!}\binom{m}{n},\qquad 0\le n\le m,
$$

de modo que

$$
L_m(x)=\sum_{n=0}^{m}\frac{(-1)^n}{n!}\binom{m}{n}x^n .
$$

## Observaciones

La serie $y_1$ converge para todo $x$ real, pues el cociente $\left|\dfrac{a_{n+1}}{a_n}\right|=\dfrac{|n-\lambda|}{(n+1)^2}$ tiende a cero; en particular es válida para todo $x>0$.

Como la ecuación indicial tiene una raíz doble, una segunda solución linealmente independiente contiene en general un término $\log x$. El enunciado solo pide una solución.

La normalización $a_0=1$ fija $L_m(0)=1$. Los primeros polinomios son $L_0(x)=1$, $L_1(x)=1-x$ y $L_2(x)=1-2x+\dfrac{x^2}{2}$.
