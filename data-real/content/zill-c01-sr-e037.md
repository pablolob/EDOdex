
## Enunciado

**Problemas 35 a 38.**

En los problemas 35 a 38, $y = c_1 e^{3x} + c_2 e^{-x} - 2x$ es una familia de soluciones de dos parámetros de la ED de segundo orden $y'' - 2y' - 3y = 6x + 4$. Determine una solución del PVI de segundo orden que consiste en esta ecuación diferencial y en las condiciones iniciales dadas.

37. $y(1) = 4,\quad y'(1) = -2$

## Solución

La solución del PVI es

$$
y = \frac{3}{2}e^{3x-3} + \frac{9}{2}e^{1-x} - 2x.
$$

## Resolución

Se parte de la familia de soluciones y su derivada:

$$
\begin{aligned}
y   &= c_1 e^{3x} + c_2 e^{-x} - 2x, \\
y'  &= 3c_1 e^{3x} - c_2 e^{-x} - 2.
\end{aligned}
$$

Se evalúan las condiciones iniciales $y(1) = 4$ e $y'(1) = -2$:

$$
\begin{aligned}
y(1)   &= c_1 e^{3} + c_2 e^{-1} - 2 = 4
        \;\Longrightarrow\; c_1 e^{3} + c_2 e^{-1} = 6, \\[4pt]
y'(1)  &= 3c_1 e^{3} - c_2 e^{-1} - 2 = -2
        \;\Longrightarrow\; 3c_1 e^{3} - c_2 e^{-1} = 0.
\end{aligned}
$$

De la segunda ecuación se obtiene $c_2 e^{-1} = 3c_1 e^{3}$. Sustituyendo en la primera:

$$
c_1 e^{3} + 3c_1 e^{3} = 6 \;\Longrightarrow\; 4c_1 e^{3} = 6
\;\Longrightarrow\; c_1 = \frac{3}{2e^{3}}.
$$

Entonces

$$
c_2 e^{-1} = 3\!\left(\frac{3}{2e^{3}}\right)\!e^{3} = \frac{9}{2}
\;\Longrightarrow\; c_2 = \frac{9}{2}\,e.
$$

La solución particular del PVI es

$$
y = \frac{3}{2e^{3}}\,e^{3x} + \frac{9}{2}\,e\,e^{-x} - 2x
  = \frac{3}{2}e^{3x-3} + \frac{9}{2}e^{1-x} - 2x.
$$

## Observaciones

Cuando las condiciones iniciales se imponen en $x = 1$ en lugar de $x = 0$, las constantes $c_1$ y $c_2$ aparecen multiplicadas por factores exponenciales, lo que da lugar a expresiones con desplazamiento en el exponente.
