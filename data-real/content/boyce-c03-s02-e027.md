
## Enunciado

**Ecuaciones exactas.** Se dice que la ecuación $P(x)y'' + Q(x)y' + R(x)y = 0$ es exacta si es posible escribirla en la forma $[P(x)y']' + [f(x)y]' = 0$, en donde $f(x)$ debe determinarse en términos de $P(x)$, $Q(x)$ y $R(x)$. La última ecuación puede integrarse una vez inmediatamente, con lo que se obtiene una ecuación lineal de primer orden para $y$ que es posible resolver como en la sección 2.1. Al igualar los coeficientes de las ecuaciones precedentes y después eliminar $f(x)$, demuestre que una condición necesaria para la exactitud es $P''(x) - Q'(x) + R(x) = 0$. Es posible demostrar que ésta también es una condición suficiente.

## Solución

Al desarrollar la suma $[P y']' + [f y]'$ y comparar sus coeficientes con los de $P y'' + Q y' + R y = 0$ resulta $f(x) = Q(x) - P'(x)$. Derivar esta expresión e igualarla al coeficiente de $y$ conduce a la condición necesaria

$$
P''(x) - Q'(x) + R(x) = 0.
$$

## Resolución

Se desarrolla cada uno de los dos sumandos con la **regla del producto**:

$$
\begin{aligned}
[P(x)y']' &= P'(x)y' + P(x)y'', \\
[f(x)y]' &= f'(x)y + f(x)y'.
\end{aligned}
$$

Al sumarlos, la ecuación $[P y']' + [f y]' = 0$ toma la forma

$$
P(x)y'' + \left[P'(x) + f(x)\right]y' + f'(x)y = 0.
$$

Esta expresión debe coincidir, como identidad entre operadores lineales de segundo orden, con la ecuación dada

$$
P(x)y'' + Q(x)y' + R(x)y = 0.
$$

Por tanto, los coeficientes de $y''$, $y'$ y $y$ han de ser iguales. La igualdad de los coeficientes de $y''$ se satisface de forma automática, ya que ambos valen $P(x)$. De los otros dos se obtiene el sistema

$$
\begin{aligned}
P'(x) + f(x) &= Q(x), \\
f'(x) &= R(x).
\end{aligned}
$$

La primera ecuación determina $f$:

$$
f(x) = Q(x) - P'(x).
$$

Al derivar esta expresión,

$$
f'(x) = Q'(x) - P''(x).
$$

Al sustituirla en la segunda ecuación del sistema e igualarla a $R(x)$,

$$
Q'(x) - P''(x) = R(x),
$$

de donde, al reordenar los términos,

$$
P''(x) - Q'(x) + R(x) = 0.
$$

Esta condición es necesaria para la exactitud de la ecuación. El enunciado añade que también es suficiente, de modo que caracteriza por completo a las ecuaciones exactas de este tipo.

## Observaciones

Una vez verificada la exactitud, integrar una vez $[P y']' + [f y]' = 0$ da la ecuación lineal de primer orden $P(x)y' + f(x)y = C_1$ para $y$, que se resuelve como en la sección 2.1.

La condición $P'' - Q' + R = 0$ es el análogo de segundo orden de la condición de exactitud $M_y = N_x$ para $M(x,y)\,dx + N(x,y)\,dy = 0$. Por ejemplo, en $x^2 y'' - 2y = 0$ se tiene $P = x^2$, $Q = 0$ y $R = -2$; como $P'' - Q' + R = 2 - 0 - 2 = 0$, la ecuación es exacta.
