
## Enunciado

En cada uno de los problemas 1 a 10 encuentre la transformada inversa de Laplace de la función dada.

9. $\frac{1 - 2s}{s^2 + 4s + 5}$

## Solución

La transformada inversa es

$$
f(t) = \mathcal{L}^{-1}\left\{\frac{1-2s}{s^2+4s+5}\right\} = e^{-2t}\left(5\sin t - 2\cos t\right), \qquad t \ge 0.
$$

## Resolución

El denominador $s^2+4s+5$ es un polinomio cuadrático irreducible. Se escribe en forma canónica al **completar el cuadrado**:

$$
s^2+4s+5 = (s+2)^2 + 1.
$$

El numerador se reescribe para separar los pares de la tabla asociados a $e^{-2t}\cos t$ y $e^{-2t}\sin t$:

$$
1-2s = -2(s+2) + 5.
$$

Con esto,

$$
\begin{aligned}
F(s) &= \frac{-2(s+2)}{(s+2)^2+1} + \frac{5}{(s+2)^2+1} \\
     &= -2\,\frac{s+2}{(s+2)^2+1} + 5\,\frac{1}{(s+2)^2+1}.
\end{aligned}
$$

Se emplean los pares de la tabla

$$
\mathcal{L}\{e^{at}\cos bt\} = \frac{s-a}{(s-a)^2+b^2}, \qquad
\mathcal{L}\{e^{at}\sin bt\} = \frac{b}{(s-a)^2+b^2},
$$

con $a=-2$ y $b=1$. Por **linealidad** de la transformada inversa,

$$
f(t) = -2e^{-2t}\cos t + 5e^{-2t}\sin t = e^{-2t}\left(5\sin t - 2\cos t\right).
$$

## Observaciones

La transformada inversa se define para $t \ge 0$. La función $f$ es continua en ese intervalo, de modo que la inversa es única. Decae como $e^{-2t}$ y oscila con frecuencia angular $1$.
