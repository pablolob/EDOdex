
## Enunciado

En cada uno de los problemas 15 a 18, determine los valores de $r$ para los que la ecuación diferencial dada tiene soluciones de la forma $y = e^{rx}$.

15. $y' + 2y = 0$

## Solución

El valor buscado es

$$
r = -2.
$$

La función $y = e^{-2x}$ satisface la ecuación $y' + 2y = 0$.

## Resolución

Se sustituye $y = e^{rx}$ y su derivada $y' = r e^{rx}$ en la ecuación:

$$
\begin{aligned}
y' + 2y &= 0, \\
r e^{rx} + 2 e^{rx} &= 0, \\
(r + 2) e^{rx} &= 0.
\end{aligned}
$$

Como la exponencial $e^{rx}$ nunca se anula, la igualdad exige $r + 2 = 0$. Por tanto,

$$
r = -2.
$$

La solución correspondiente es $y = e^{-2x}$.

## Observaciones

La verificación emplea solo cálculo diferencial: la derivada de $e^{rx}$ es $r e^{rx}$ por la **regla de la cadena**. El parámetro $r$ se determina anulando el factor que acompaña a la exponencial, ya que $e^{rx} \neq 0$ para todo $x \in \mathbb{R}$.
