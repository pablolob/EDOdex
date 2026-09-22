
## Enunciado

En cada uno de los problemas 1 a 8, determine el radio de convergencia de la serie de potencias dada.

3. $\sum_{n=0}^{\infty} \frac{x^{2n}}{n!}$

## Solución

La serie converge para todo $x \in \mathbb{R}$, por lo que su radio de convergencia es

$$
R = \infty.
$$

## Resolución

Se aplica el **criterio del cociente** a los términos $u_n = \dfrac{x^{2n}}{n!}$. Para $x \ne 0$,

$$
\begin{aligned}
\left|\frac{u_{n+1}}{u_n}\right|
&= \frac{|x|^{2(n+1)}}{(n+1)!}\cdot\frac{n!}{|x|^{2n}} \\
&= \frac{|x|^2}{n+1}.
\end{aligned}
$$

Al fijar $x$ y hacer $n \to \infty$, el cociente tiende a cero:

$$
\lim_{n\to\infty}\left|\frac{u_{n+1}}{u_n}\right| = 0 < 1.
$$

El criterio del cociente garantiza la convergencia absoluta de la serie para todo $x$ real. En consecuencia, el radio de convergencia es $R = \infty$. Para $x = 0$ la serie se reduce al término $n = 0$ y converge trivialmente.

## Observaciones

La serie es la serie de Maclaurin de $e^{x^2}$: con $t = x^2$ se tiene $\sum_{n=0}^{\infty}\frac{t^n}{n!} = e^t$. La convergencia en todo $\mathbb{R}$ es coherente con el dominio de $e^{x^2}$, y el intervalo de convergencia es $(-\infty,\infty)$.
