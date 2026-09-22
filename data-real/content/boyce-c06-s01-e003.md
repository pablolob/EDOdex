
## Enunciado

En cada uno de los problemas 1 a 10 encuentre la transformada inversa de Laplace de la función dada.

3. $\frac{2}{s^2 + 3s - 4}$

## Solución

$$
\mathcal{L}^{-1}\!\left\{\frac{2}{s^2+3s-4}\right\}
= \frac{2}{5}\left(e^{t}-e^{-4t}\right), \qquad t \ge 0.
$$

## Resolución

Se factoriza el denominador y se descompone el cociente en **fracciones simples**. Como $s^2+3s-4=(s+4)(s-1)$, se escribe

$$
\frac{2}{s^2+3s-4} = \frac{2}{(s+4)(s-1)} = \frac{A}{s+4} + \frac{B}{s-1}.
$$

Al multiplicar por $(s+4)(s-1)$ resulta la identidad

$$
2 = A(s-1) + B(s+4).
$$

La evaluación en cada raíz determina las constantes:

$$
\begin{aligned}
s=1: &\quad 2 = 5B, & B &= \frac{2}{5}, \\
s=-4: &\quad 2 = -5A, & A &= -\frac{2}{5}.
\end{aligned}
$$

Por tanto,

$$
\frac{2}{s^2+3s-4} = -\frac{2}{5}\cdot\frac{1}{s+4} + \frac{2}{5}\cdot\frac{1}{s-1}.
$$

La transformada inversa es lineal y el par básico $\mathcal{L}^{-1}\left\{\dfrac{1}{s-a}\right\}=e^{at}$ invierte cada término:

$$
\mathcal{L}^{-1}\!\left\{\frac{2}{s^2+3s-4}\right\}
= -\frac{2}{5}e^{-4t} + \frac{2}{5}e^{t}.
$$

## Observaciones

Cada polo simple de $F(s)$ en $s=a$ corresponde a una exponencial $e^{at}$ en la transformada inversa. En este caso los polos $s=-4$ y $s=1$ generan los dos términos exponenciales del resultado.
