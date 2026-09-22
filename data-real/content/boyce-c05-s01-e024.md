
## Enunciado

Determine $a_n$ de modo que se satisfaga la ecuación

$$\sum_{n=1}^{\infty} n a_n x^{n-1} + 2 \sum_{n=0}^{\infty} a_n x^n = 0.$$

Intente identificar la función representada por la serie $\sum_{n=0}^{\infty} a_n x^n$.

## Solución

Al igualar los coeficientes de $x^n$ se obtiene la **relación de recurrencia**

$$
a_{n+1} = -\frac{2}{n+1}\,a_n, \qquad n \ge 0,
$$

de donde, con $a_0$ arbitrario,

$$
a_n = \frac{(-2)^n}{n!}\,a_0, \qquad n \ge 0.
$$

La serie representa la función

$$
\sum_{n=0}^{\infty} a_n x^n = a_0\,e^{-2x}.
$$

## Resolución

La ecuación es una identidad entre series de potencias. En el primer miembro se desplaza el índice con $n = m+1$, de modo que el exponente $x^{n-1}$ se convierte en $x^m$:

$$
\sum_{n=1}^{\infty} n a_n x^{n-1}
= \sum_{m=0}^{\infty} (m+1) a_{m+1} x^m
= \sum_{n=0}^{\infty} (n+1) a_{n+1} x^n.
$$

El índice de una serie es mudo, así que se ha renombrado $m$ como $n$. La ecuación original queda entonces con ambas series en potencias $x^n$:

$$
\sum_{n=0}^{\infty} \big[(n+1) a_{n+1} + 2 a_n\big] x^n = 0.
$$

Una serie de potencias que se anula idénticamente tiene todos sus coeficientes nulos. Por tanto,

$$
(n+1) a_{n+1} + 2 a_n = 0, \qquad n = 0, 1, 2, \dots
$$

Al despejar $a_{n+1}$ resulta la relación de recurrencia

$$
a_{n+1} = -\frac{2}{n+1}\,a_n, \qquad n \ge 0.
$$

Esta relación determina todos los coeficientes a partir del único valor libre $a_0$. Iterando los primeros pasos,

$$
a_1 = -\frac{2}{1}a_0, \qquad
a_2 = -\frac{2}{2}a_1 = \frac{(-2)^2}{2!}a_0, \qquad
a_3 = -\frac{2}{3}a_2 = \frac{(-2)^3}{3!}a_0.
$$

El patrón se confirma por inducción: si $a_n = \dfrac{(-2)^n}{n!}a_0$, entonces

$$
a_{n+1} = -\frac{2}{n+1}\cdot\frac{(-2)^n}{n!}a_0
= \frac{(-2)^{n+1}}{(n+1)!}a_0.
$$

Así, para todo $n \ge 0$,

$$
a_n = \frac{(-2)^n}{n!}\,a_0.
$$

Al sustituir estos coeficientes, la serie se reconoce como el desarrollo de la exponencial:

$$
\sum_{n=0}^{\infty} a_n x^n
= a_0 \sum_{n=0}^{\infty} \frac{(-2x)^n}{n!}
= a_0\,e^{-2x}.
$$

La comprobación es inmediata: con $y = a_0 e^{-2x}$ se tiene $y' = -2a_0 e^{-2x}$, y la ecuación $y' + 2y = 0$ se satisface porque

$$
y' + 2y = -2a_0 e^{-2x} + 2a_0 e^{-2x} = 0.
$$

## Observaciones

La constante $a_0$ es arbitraria y coincide con $y(0)$. La serie resultante es la de la exponencial, que converge para todo $x \in \mathbb{R}$; por ello la solución es válida en toda la recta real.

### Método alternativo: ecuación lineal de primer orden

Los dos miembros de la ecuación son, respectivamente, $y'$ y $y$ para $y = \sum_{n=0}^{\infty} a_n x^n$. Reconocerlo convierte la identidad en la ecuación lineal $y' + 2y = 0$, cuya solución general es $y = a_0 e^{-2x}$. Los coeficientes $a_n$ se recuperan después como los coeficientes de Taylor de esa función.
