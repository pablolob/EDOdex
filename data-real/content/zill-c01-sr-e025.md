
## Enunciado

**Problemas 23 a 26.**

En los problemas 23 a 26 verifique que la función indicada es una solución explícita de la ecuación diferencial dada. Dé una definición de intervalo $I$ para cada solución.

25. $x^2 y'' + xy' + y = 0$; $\quad y = \sin(\ln x)$

## Solución

La función $y = \sin(\ln x)$ es una **solución explícita** de la ecuación diferencial. Un intervalo de definición es

$$
I = (0, \infty).
$$

## Resolución

La función contiene $\ln x$, por lo que debe cumplirse $x > 0$.

Se calculan las derivadas:

$$
\begin{aligned}
y'  &= \frac{1}{x}\,\cos(\ln x), \\[4pt]
y'' &= -\frac{1}{x^{2}}\,\cos(\ln x) + \frac{1}{x}\bigl(-\sin(\ln x)\bigr)\frac{1}{x}
     = -\frac{\cos(\ln x) + \sin(\ln x)}{x^{2}}.
\end{aligned}
$$

Se multiplica cada término por la potencia de $x$ correspondiente y se suma:

$$
\begin{aligned}
x^{2}y'' &= -\cos(\ln x) - \sin(\ln x), \\
xy'     &= \cos(\ln x), \\
y       &= \sin(\ln x).
\end{aligned}
$$

Por tanto,

$$
x^{2}y'' + xy' + y = \bigl[-\cos(\ln x) - \sin(\ln x)\bigr] + \cos(\ln x) + \sin(\ln x) = 0.
$$

La función satisface la ecuación diferencial para todo $x > 0$. El mayor intervalo abierto en el que la función es continuamente derivable es $I = (0, \infty)$.

## Observaciones

Esta ecuación diferencial es del tipo **Euler–Cauchy** (o ecuación equidimensional). La solución $y = \sin(\ln x)$ corresponde al caso de raíces complejas conjugadas de la ecuación característica asociada, específicamente $r = \pm i$.
