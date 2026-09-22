
## Enunciado

En cada uno de los problemas 19 y 20 demuestre que el punto $x = 0$ es un punto singular regular. En cada problema, intente hallar soluciones de la forma $\sum_{n=0}^{\infty} a_n x^n$. Demuestre que en el problema 19 sólo existe una solución diferente de cero de esta forma y que en el problema 20 no existen soluciones diferentes de cero de esta forma. Por tanto, en ningún caso es posible hallar la solución general de esta manera. Esto es típico de las ecuaciones con puntos singulares.

19. $2xy'' + 3y' + xy = 0$

## Solución

El punto $x=0$ es un **punto singular regular**. La única solución no nula de la forma $y=\sum_{n=0}^{\infty} a_n x^n$ es

$$
y_1(x)=a_0\left(1-\frac{x^2}{10}+\frac{x^4}{360}-\frac{x^6}{28080}+\cdots\right),\qquad a_0\neq 0,
$$

de modo que no existe una segunda solución en serie de potencias linealmente independiente de ella.

## Resolución

Se escribe la ecuación en forma estándar. Al dividir por $2x$,

$$
y''+\frac{3}{2x}y'+\frac{1}{2}y=0,
$$

de modo que $P(x)=\dfrac{3}{2x}$ y $Q(x)=\dfrac{1}{2}$. El punto $x=0$ es singular porque $P$ no es analítica allí y el coeficiente de $y''$ se anula en $x=0$. Además,

$$
xP(x)=\frac{3}{2},\qquad x^2Q(x)=\frac{x^2}{2},
$$

son analíticas en $x=0$. Por tanto, $x=0$ es un punto singular regular.

Se intenta una solución en **serie de potencias** centrada en $x=0$,

$$
y=\sum_{n=0}^{\infty}a_n x^n.
$$

Las derivadas son $y'=\sum_{n=1}^{\infty}n a_n x^{n-1}$ y $y''=\sum_{n=2}^{\infty}n(n-1)a_n x^{n-2}$. La combinación $2xy''+3y'$ reúne ambas derivadas:

$$
2xy''+3y'=\sum_{n=1}^{\infty}\bigl[2n(n-1)+3n\bigr]a_n x^{n-1}
=\sum_{n=1}^{\infty}n(2n+1)a_n x^{n-1}.
$$

Al sustituir en $2xy''+3y'+xy=0$ resulta

$$
\sum_{n=1}^{\infty}n(2n+1)a_n x^{n-1}+\sum_{n=0}^{\infty}a_n x^{n+1}=0.
$$

Se reindexan ambas sumas con la potencia $x^m$. En la primera, $m=n-1$; en la segunda, $m=n+1$:

$$
\sum_{m=0}^{\infty}(m+1)(2m+3)a_{m+1}x^m+\sum_{m=1}^{\infty}a_{m-1}x^m=0.
$$

La serie de potencias que representa a la función cero tiene todos sus coeficientes nulos. El coeficiente de $x^0$ es $3a_1$, luego

$$
a_1=0.
$$

Para $m\ge 1$, el coeficiente de $x^m$ da

$$
(m+1)(2m+3)a_{m+1}+a_{m-1}=0.
$$

Con el cambio $n=m-1$ se obtiene la **relación de recurrencia**

$$
a_{n+2}=-\frac{a_n}{(n+2)(2n+5)},\qquad n=0,1,2,\dots
$$

La recurrencia determina cada coeficiente a partir del que está dos posiciones antes. Como $a_1=0$, todos los coeficientes impares se anulan: $a_3=-\dfrac{a_1}{3\cdot 7}=0$ y, por inducción, $a_{2k+1}=0$. Los coeficientes pares quedan determinados por $a_0$:

$$
a_2=-\frac{a_0}{2\cdot 5}=-\frac{a_0}{10},\qquad
a_4=-\frac{a_2}{4\cdot 9}=\frac{a_0}{360},\qquad
a_6=-\frac{a_4}{6\cdot 13}=-\frac{a_0}{28080}.
$$

Por tanto,

$$
y_1(x)=a_0\left(1-\frac{x^2}{10}+\frac{x^4}{360}-\frac{x^6}{28080}+\cdots\right).
$$

El único coeficiente libre es $a_0$. Si $a_0=0$, la condición $a_1=0$ y la recurrencia fuerzan $a_n=0$ para todo $n$. En consecuencia, el espacio de soluciones en serie de potencias tiene dimensión uno: toda solución no nula de la forma $\sum_{n=0}^{\infty}a_n x^n$ es un múltiplo de $y_1$. No existe una segunda solución de esa forma y la solución general de la ecuación no puede construirse con series de potencias en torno a $x=0$.

## Observaciones

La serie $y_1$ converge para todo $x$, pues el cociente entre términos consecutivos no nulos es $\dfrac{|a_{n+2}x^{n+2}|}{|a_n x^n|}=\dfrac{|x|^2}{(n+2)(2n+5)}\to 0$.

El ejercicio ilustra el comportamiento típico de un punto singular regular: el método de series de potencias no basta para obtener dos soluciones linealmente independientes. La segunda solución contiene el factor $x^{-1/2}$ y se obtiene con el método de Frobenius.
