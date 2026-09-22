
## Enunciado

**Problemas 23 a 26.**

En los problemas 23 a 26 verifique que la función indicada es una solución explícita de la ecuación diferencial dada. Dé una definición de intervalo $I$ para cada solución.

23. $y'' + y = 2\cos x - 2\sin x$; $\quad y = x\sin x + x\cos x$

## Solución

La función $y = x\sin x + x\cos x$ es una **solución explícita** de la ecuación diferencial. Un intervalo de definición es

$$
I = (-\infty, \infty).
$$

## Resolución

Se calculan la primera y segunda derivadas de $y$:

$$
\begin{aligned}
y'  &= \sin x + x\cos x + \cos x - x\sin x
     = (\sin x + \cos x) + x(\cos x - \sin x), \\[4pt]
y'' &= \cos x - \sin x + (\cos x - \sin x) + x(-\sin x - \cos x) \\
    &= 2(\cos x - \sin x) - x(\sin x + \cos x).
\end{aligned}
$$

Se sustituyen $y$ e $y''$ en el miembro izquierdo de la ecuación diferencial:

$$
\begin{aligned}
y'' + y &= \bigl[2(\cos x - \sin x) - x(\sin x + \cos x)\bigr]
          + \bigl[x\sin x + x\cos x\bigr] \\[4pt]
        &= 2(\cos x - \sin x) - x\sin x - x\cos x
           + x\sin x + x\cos x \\[4pt]
        &= 2\cos x - 2\sin x.
\end{aligned}
$$

El resultado coincide con el miembro derecho de la ecuación diferencial para todo $x$ real. La función está compuesta por productos y sumas de funciones continuas y derivables en todo $\mathbb{R}$, por lo que un intervalo de definición es $I = (-\infty, \infty)$.

## Observaciones

El intervalo de definición de una solución debe ser un intervalo abierto en el que la función sea continuamente derivable y satisfaga la ecuación diferencial. Como la función no presenta singularidades ni restricciones de dominio, cualquier intervalo abierto de $\mathbb{R}$ es válido.
