
## Enunciado

Verifique que la función o funciones que se dan son una solución de la ecuación diferencial: $$x^2 y'' + 5xy' + 4y = 0, \quad x > 0, \quad y_1(x) = x^{-2}, \quad y_2(x) = x^{-2} \ln x$$

## Solución

Las dos funciones dadas son soluciones de la ecuación diferencial en el intervalo $x > 0$. Al sustituir, cada una anula el miembro izquierdo:

$$
x^2 y_1'' + 5xy_1' + 4y_1 = 0, \qquad x^2 y_2'' + 5xy_2' + 4y_2 = 0.
$$

## Resolución

Se verifica cada función por **sustitución directa** en el miembro izquierdo de la ecuación.

Para $y_1(x) = x^{-2}$ se calculan las dos primeras derivadas:

$$
y_1' = -2x^{-3}, \qquad y_1'' = 6x^{-4}.
$$

Se sustituye en la ecuación:

$$
\begin{aligned}
x^2 y_1'' + 5x y_1' + 4 y_1
&= x^2 (6x^{-4}) + 5x (-2x^{-3}) + 4x^{-2} \\
&= 6x^{-2} - 10x^{-2} + 4x^{-2} \\
&= 0.
\end{aligned}
$$

Por tanto, $y_1(x) = x^{-2}$ es una solución.

Para $y_2(x) = x^{-2}\ln x$ se deriva con la **regla del producto**:

$$
\begin{aligned}
y_2' &= -2x^{-3}\ln x + x^{-2}\cdot x^{-1} \\
&= -2x^{-3}\ln x + x^{-3}.
\end{aligned}
$$

Se deriva una segunda vez:

$$
\begin{aligned}
y_2'' &= \frac{d}{dx}\big[-2x^{-3}\ln x\big] + \frac{d}{dx}\big[x^{-3}\big] \\
&= 6x^{-4}\ln x - 2x^{-4} - 3x^{-4} \\
&= 6x^{-4}\ln x - 5x^{-4}.
\end{aligned}
$$

Se sustituye en la ecuación:

$$
\begin{aligned}
x^2 y_2'' + 5x y_2' + 4 y_2
&= x^2 (6x^{-4}\ln x - 5x^{-4}) + 5x (-2x^{-3}\ln x + x^{-3}) + 4x^{-2}\ln x \\
&= (6 - 10 + 4)\,x^{-2}\ln x + (-5 + 5)\,x^{-2} \\
&= 0.
\end{aligned}
$$

Por tanto, $y_2(x) = x^{-2}\ln x$ también es una solución. Ambas están definidas en $x > 0$, que coincide con el intervalo indicado en el enunciado.

## Observaciones

La verificación emplea únicamente cálculo diferencial: $y_1$ es una potencia simple y $y_2$ requiere la regla del producto con $\ln x$. El factor $\ln x$ exige el dominio $x > 0$ del enunciado, donde ambas funciones y sus derivadas están bien definidas.
