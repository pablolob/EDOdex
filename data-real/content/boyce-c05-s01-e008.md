
## Enunciado

En cada uno de los problemas 1 a 8, determine el radio de convergencia de la serie de potencias dada.

8. $\sum_{n=1}^{\infty} \frac{n! x^n}{n^n}$

## Solución

El radio de convergencia de la serie de potencias es

$$
R = e.
$$

## Resolución

La serie se escribe en la forma $\sum_{n\ge 1} a_n x^n$, con $a_n = \dfrac{n!}{n^n}$. Para una serie de potencias, el **criterio del cociente** da el radio de convergencia

$$
R = \frac{1}{L}, \qquad L = \lim_{n\to\infty} \left|\frac{a_{n+1}}{a_n}\right|,
$$

siempre que este límite exista.

Se calcula el cociente entre coeficientes consecutivos:

$$
\begin{aligned}
\frac{a_{n+1}}{a_n}
&= \frac{(n+1)!}{(n+1)^{n+1}} \cdot \frac{n^n}{n!} \\
&= \frac{(n+1)\,n!}{(n+1)^{n+1}} \cdot \frac{n^n}{n!} \\
&= \frac{n^n}{(n+1)^n}
= \left(\frac{n}{n+1}\right)^n.
\end{aligned}
$$

El coeficiente $a_n$ es positivo para todo $n \ge 1$, de modo que el valor absoluto no introduce cambios. El último factor se reescribe como

$$
\left(\frac{n}{n+1}\right)^n = \frac{1}{\left(1+\dfrac{1}{n}\right)^n}.
$$

Cuando $n \to \infty$, el denominador tiende a $e$; por tanto,

$$
L = \lim_{n\to\infty} \left(\frac{n}{n+1}\right)^n = \frac{1}{e}.
$$

En consecuencia,

$$
R = \frac{1}{L} = e.
$$

## Observaciones

El criterio del cociente fija el radio sin estudiar los extremos del intervalo. En $x = \pm e$ la serie diverge, porque su término general no tiende a cero; el radio, sin embargo, sigue siendo $e$.

El valor $L = 1/e$ procede del límite estándar $\displaystyle\lim_{n\to\infty}\left(1+\frac{1}{n}\right)^n = e$.
