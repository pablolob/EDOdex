
## Enunciado

En cada uno de los problemas 1 a 4, demuestre que la ecuación diferencial dada tiene un punto singular regular en $x = 0$ y determine dos soluciones linealmente independientes para $x > 0$.

4. $x^2 y'' + 4xy' + (2 + x)y = 0$

## Solución

El punto $x=0$ es un **punto singular regular**. La **ecuación indicial** $r^2+3r+2=0$ tiene raíces $r_1=-1$ y $r_2=-2$, que difieren en un entero. Dos soluciones linealmente independientes para $x>0$ son

$$
\begin{aligned}
y_1(x) &= \frac{1}{x}\sum_{n=0}^{\infty}\frac{(-1)^n}{n!\,(n+1)!}\,x^n
= \frac{1}{x}\left(1-\frac{x}{2}+\frac{x^2}{12}-\frac{x^3}{144}+\cdots\right),\\
y_2(x) &= -y_1(x)\ln x + \frac{1}{x^2}\left(1-\frac{3}{4}x^2+\frac{7}{36}x^3-\frac{35}{1728}x^4+\cdots\right).
\end{aligned}
$$

La solución general es $y=C_1y_1+C_2y_2$, con $C_1$ y $C_2$ constantes arbitrarias.

## Resolución

Para $x\ne 0$ la ecuación se escribe en la forma estándar

$$
y''+\frac{4}{x}y'+\frac{2+x}{x^2}y=0.
$$

Los productos

$$
x\,p(x)=4,\qquad x^2q(x)=2+x
$$

son analíticos en $x=0$, de modo que $x=0$ es un **punto singular regular**. Es el único punto singular de la ecuación.

Se aplica el **método de Frobenius** con

$$
y=\sum_{n=0}^{\infty}a_n x^{r+n},\qquad a_0\ne 0.
$$

Las derivadas son $y'=\sum_{n\ge0}(n+r)a_n x^{n+r-1}$ y $y''=\sum_{n\ge0}(n+r)(n+r-1)a_n x^{n+r-2}$. Al sustituir en la ecuación resulta

$$
\sum_{n\ge0}(n+r)(n+r-1)a_n x^{n+r}
+4\sum_{n\ge0}(n+r)a_n x^{n+r}
+2\sum_{n\ge0}a_n x^{n+r}
+\sum_{n\ge0}a_n x^{n+r+1}=0.
$$

Al reunir los términos de potencia $x^{r+n}$ se obtiene el factor

$$
(n+r)(n+r-1)+4(n+r)+2=(n+r+1)(n+r+2)
$$

y la relación de recurrencia

$$
(n+r+1)(n+r+2)\,a_n=-a_{n-1},\qquad n\ge 1,
$$

con $a_{-1}=0$. Para $n=0$, y como $a_0\ne 0$, se obtiene la **ecuación indicial**

$$
r^2+3r+2=0,
$$

cuyas raíces son $r_1=-1$ y $r_2=-2$; su diferencia, $r_1-r_2=1$, es un entero positivo.

**Solución correspondiente a la raíz mayor.** Con $r=-1$ la recurrencia es

$$
n(n+1)a_n=-a_{n-1},\qquad a_n=-\frac{a_{n-1}}{n(n+1)},
$$

y por iteración

$$
a_n=\frac{(-1)^n}{n!\,(n+1)!}\,a_0.
$$

La elección $a_0=1$ da

$$
y_1(x)=\frac{1}{x}\sum_{n=0}^{\infty}\frac{(-1)^n}{n!\,(n+1)!}\,x^n
=\frac{1}{x}\left(1-\frac{x}{2}+\frac{x^2}{12}-\frac{x^3}{144}+\cdots\right).
$$

**Segunda solución.** Con $r=-2$ la recurrencia toma la forma $(n-1)n\,a_n=-a_{n-1}$. En $n=1$ se reduce a $0=-a_0$, incompatible con $a_0\ne 0$; la raíz menor no genera por sí sola una serie de Frobenius. Como la diferencia de las raíces es un entero positivo, la segunda solución tiene la forma

$$
y_2(x)=c\,y_1(x)\ln x+\frac{1}{x^2}\sum_{n=0}^{\infty}b_n x^n,\qquad b_0=1.
$$

Para determinar $c$ y los coeficientes $b_n$ se usa el operador $L[y]=x^2y''+4xy'+(2+x)y$. Puesto que $L[y_1]=0$,

$$
L[y_1\ln x]=2xy_1'+3y_1=\frac{1}{x}\sum_{n\ge0}(2n+1)a_n x^n,
$$

y

$$
L\!\left[x^{-2}\sum_{n\ge0}b_n x^n\right]
=\frac{1}{x^2}\left[\sum_{n\ge0}(n-1)n\,b_n x^n+\sum_{n\ge0}b_n x^{n+1}\right].
$$

Al imponer $L[y_2]=0$ y multiplicar por $x^2$ queda

$$
c\sum_{n\ge0}(2n+1)a_n x^{n+1}
+\sum_{n\ge0}(n-1)n\,b_n x^n
+\sum_{n\ge0}b_n x^{n+1}=0.
$$

El coeficiente de $x$ es $c\,a_0+b_0$; con $a_0=b_0=1$ resulta $c=-1$. Para $m\ge 2$, el coeficiente de $x^m$ proporciona la recurrencia

$$
m(m-1)b_m=(2m-1)a_{m-1}-b_{m-1},
$$

esto es,

$$
b_m=\frac{(2m-1)a_{m-1}-b_{m-1}}{m(m-1)}.
$$

El coeficiente $b_1$ queda libre y se elige $b_1=0$, pues el término $b_1x^{-1}$ es un múltiplo de $y_1$. Con $a_0=1$, $a_1=-\frac{1}{2}$, $a_2=\frac{1}{12}$, $a_3=-\frac{1}{144}$ y $a_4=\frac{1}{2880}$,

$$
\begin{aligned}
b_2&=\frac{3a_1-b_1}{2}=-\frac{3}{4}, &
b_3&=\frac{5a_2-b_2}{6}=\frac{7}{36},\\
b_4&=\frac{7a_3-b_3}{12}=-\frac{35}{1728}, &
b_5&=\frac{9a_4-b_4}{20}=\frac{101}{86400}.
\end{aligned}
$$

Por tanto,

$$
y_2(x)=-y_1(x)\ln x
+\frac{1}{x^2}\left(1-\frac{3}{4}x^2+\frac{7}{36}x^3-\frac{35}{1728}x^4+\frac{101}{86400}x^5-\cdots\right).
$$

**Independencia lineal.** La función $y_2$ contiene el término $y_1\ln x$, que no es múltiplo de $y_1$. Por consiguiente, $\{y_1,y_2\}$ es un conjunto fundamental de soluciones en $(0,\infty)$.

## Observaciones

El único punto singular de la ecuación es $x=0$. Por el teorema de Frobenius, ambas series convergen para todo $x>0$ (de hecho, para todo $x\ne 0$), de modo que el intervalo de validez es el fijado por el enunciado.

El término general de $y_2$ no tiene una expresión tan compacta como el de $y_1$; sus coeficientes quedan determinados por la recurrencia $b_m=\bigl((2m-1)a_{m-1}-b_{m-1}\bigr)/\bigl(m(m-1)\bigr)$.

Las soluciones se relacionan con las funciones de Bessel de orden uno: $y_1(x)=x^{-3/2}J_1(2\sqrt{x})$, y $y_2$ coincide con un múltiplo de $x^{-3/2}Y_1(2\sqrt{x})$ salvo la adición de un múltiplo de $y_1$.
