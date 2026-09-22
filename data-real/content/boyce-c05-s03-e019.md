
## Enunciado

Resuelva la ecuación diferencial dada mediante una serie de potencias de $x$ y compruebe que $a_0$ es arbitraria en cada caso:

19. $y' + xy = 1 + x$

## Solución

La solución general es la **serie de potencias** $y=\sum_{n=0}^{\infty}a_n x^n$, cuyos coeficientes quedan determinados por la **relación de recurrencia**

$$
a_1=1,\qquad a_2=\frac{1-a_0}{2},\qquad a_{n+1}=-\frac{a_{n-1}}{n+1}\quad (n\ge 2).
$$

Ninguna de estas relaciones fija $a_0$, de modo que $a_0$ es arbitraria. Equivalentemente,

$$
y(x)=a_0\,e^{-x^2/2}+1-e^{-x^2/2}+\sum_{k=0}^{\infty}\frac{(-1)^k}{(2k+1)!!}\,x^{2k+1},
$$

con $(2k+1)!!=1\cdot 3\cdot 5\cdots(2k+1)$.

## Resolución

Se busca una solución en **serie de potencias** centrada en $x=0$,

$$
y=\sum_{n=0}^{\infty}a_n x^n.
$$

Los coeficientes de la ecuación, $1$ y $x$, son polinomios; por tanto, $x=0$ es un **punto ordinario** y la solución admite un desarrollo de esta forma con radio de convergencia positivo.

La derivada y el producto $xy$ son

$$
y'=\sum_{n=1}^{\infty}n a_n x^{n-1}=\sum_{n=0}^{\infty}(n+1)a_{n+1}x^n,
\qquad
xy=\sum_{n=0}^{\infty}a_n x^{n+1}=\sum_{n=1}^{\infty}a_{n-1}x^n.
$$

Al sustituir en $y'+xy=1+x$ e igualar los coeficientes de cada potencia de $x$,

$$
\sum_{n=0}^{\infty}(n+1)a_{n+1}x^n+\sum_{n=1}^{\infty}a_{n-1}x^n=1+x.
$$

- Coeficiente de $x^0$: $a_1=1$.
- Coeficiente de $x^1$: $2a_2+a_0=1$, de donde $a_2=\dfrac{1-a_0}{2}$.
- Coeficiente de $x^n$ para $n\ge 2$: $(n+1)a_{n+1}+a_{n-1}=0$, es decir, $a_{n+1}=-\dfrac{a_{n-1}}{n+1}$.

La primera relación determina $a_1$ y la segunda expresa $a_2$ en términos de $a_0$; la recurrencia de dos pasos para $n\ge 2$ no vuelve a contener $a_0$. Como ninguna relación impone un valor a $a_0$, este coeficiente queda arbitrario; es el valor $y(0)$ y corresponde a la única constante libre de una ecuación lineal de primer orden.

Los primeros coeficientes son

$$
a_0\ \text{libre},\quad
a_1=1,\quad
a_2=\frac{1-a_0}{2},\quad
a_3=-\frac13,\quad
a_4=\frac{a_0-1}{8},\quad
a_5=\frac{1}{15},\quad
a_6=\frac{1-a_0}{48}.
$$

Al separar los términos que contienen $a_0$,

$$
y=a_0\left(1-\frac{x^2}{2}+\frac{x^4}{8}-\cdots\right)
+\left(x+\frac{x^2}{2}-\frac{x^3}{3}-\frac{x^4}{8}+\frac{x^5}{15}+\cdots\right).
$$

La serie que multiplica a $a_0$ es el desarrollo de $e^{-x^2/2}$ y resuelve la ecuación homogénea $y'+xy=0$; la segunda serie es una solución particular. Con la notación del doble factorial, la solución general se escribe como

$$
y(x)=a_0\,e^{-x^2/2}+1-e^{-x^2/2}+\sum_{k=0}^{\infty}\frac{(-1)^k}{(2k+1)!!}\,x^{2k+1}.
$$

## Observaciones

El coeficiente $a_0$ tiene interpretación directa: $a_0=y(0)$. En una ecuación lineal de primer orden la solución general depende de una sola constante arbitraria, que aquí es $a_0$.

El radio de convergencia de la serie es infinito. Los coeficientes de la ecuación son polinomios y el factor integrante $e^{x^2/2}$ es entero, de modo que las soluciones están definidas para todo $x$.

### Método alternativo: factor integrante

La ecuación es lineal de primer orden y puede resolverse con el factor integrante $\mu(x)=e^{x^2/2}$. Entonces

$$
\left(e^{x^2/2}y\right)'=(1+x)e^{x^2/2},
$$

y la solución general es

$$
y(x)=1+C\,e^{-x^2/2}+e^{-x^2/2}\int_0^x e^{t^2/2}\,dt,
$$

con $C$ arbitraria. La integral no es elemental; su desarrollo en serie reproduce la serie de potencias de la resolución.
