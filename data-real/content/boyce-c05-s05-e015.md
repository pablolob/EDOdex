
## Enunciado

En cada uno de los problemas 13 a 16, encuentre la solución del problema con valor inicial dado.

15. $x^2 y'' - 3xy' + 4y = 0, \quad y(-1) = 2, \quad y'(-1) = 3$

## Solución

La solución del problema con valor inicial, válida en $(-\infty,0)$, es

$$
y(x)=2x^2-7x^2\ln(-x).
$$

## Resolución

La ecuación es de **segundo orden**, **lineal**, **homogénea** y de tipo **Cauchy-Euler** (equidimensional). El coeficiente de $y''$ se anula en $x=0$, único punto singular; como la condición inicial se impone en $x=-1$, el intervalo de validez es $(-\infty,0)$.

Para $x<0$ conviene el cambio $t=-x$, con $t>0$, y $u(t)=y(-t)$. Entonces

$$
\frac{dy}{dx}=-u'(t),\qquad \frac{d^2y}{dx^2}=u''(t),
$$

y como $x^2=t^2$ y $xy'=tu'$, la ecuación se transforma en

$$
t^2 u''-3t u'+4u=0.
$$

Se propone $u=t^r$, con $u'=rt^{r-1}$ y $u''=r(r-1)t^{r-2}$. Al sustituir,

$$
\begin{aligned}
t^2\cdot r(r-1)t^{r-2}-3t\cdot rt^{r-1}+4t^r
  &= t^r\left[r(r-1)-3r+4\right] \\
  &= t^r\left(r^2-4r+4\right) \\
  &= t^r(r-2)^2=0.
\end{aligned}
$$

Como $t^r\ne 0$, la **ecuación característica** $(r-2)^2=0$ tiene la raíz doble $r=2$. La solución general en $t$ es

$$
u(t)=C_1 t^2+C_2 t^2\ln t.
$$

Al deshacer el cambio, con $t=-x$ y $\ln t=\ln(-x)$,

$$
y(x)=C_1 x^2+C_2 x^2\ln(-x).
$$

Para aplicar las condiciones iniciales se deriva, con la regla del producto y el hecho de que $\dfrac{d}{dx}\ln(-x)=\dfrac{1}{x}$:

$$
y'(x)=2C_1 x+C_2\left(2x\ln(-x)+x\right).
$$

En $x=-1$, donde $\ln 1=0$, resultan

$$
y(-1)=C_1,\qquad y'(-1)=-2C_1-C_2.
$$

Las condiciones iniciales dan

$$
\begin{aligned}
C_1 &= 2, \\
-2C_1-C_2 &= 3.
\end{aligned}
$$

De la primera ecuación $C_1=2$. Al sustituir en la segunda, $-4-C_2=3$, de donde $C_2=-7$. Por lo tanto,

$$
y(x)=2x^2-7x^2\ln(-x).
$$

Esta solución está definida en $(-\infty,0)$, el intervalo que contiene a $x=-1$ y no incluye el punto singular $x=0$.

## Observaciones

El punto $x=0$ es el punto singular de la ecuación: allí se anula el coeficiente de $y''$. La solución del problema con valor inicial queda en $(-\infty,0)$; en $(0,\infty)$ la solución general de la misma familia se escribe con $\ln x$.

### Método alternativo: solución fundamental con $\ln|x|$

La raíz doble $r=2$ permite escribir directamente la solución general para $x\ne 0$ como $y=C_1 x^2+C_2 x^2\ln|x|$. En el intervalo $x<0$ se tiene $\ln|x|=\ln(-x)$, lo que reproduce el resultado anterior. Este camino prescinde del cambio $t=-x$ y se apoya en la forma estándar de las soluciones de una ecuación de Cauchy-Euler con raíz doble.
