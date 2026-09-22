
## Enunciado

En cada uno de los problemas 9 a 16, determine la serie de Taylor en torno al punto $x_0$ para la función dada. Determine también el radio de convergencia de la serie.

9. $\sin x, \quad x_0 = 0$

## Solución

La serie de Taylor de $\sin x$ en torno a $x_0=0$ es

$$
\sin x = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)!}\,x^{2n+1},
$$

y su radio de convergencia es $R=\infty$.

## Resolución

La serie de Taylor de una función infinitamente derivable en torno a $x_0=0$ (serie de Maclaurin) es

$$
\sin x = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}\,x^{n}, \qquad f(x)=\sin x.
$$

Las derivadas de $\sin x$ se repiten con periodo cuatro:

$$
f^{(n)}(x) \in \{\sin x,\ \cos x,\ -\sin x,\ -\cos x\}.
$$

Evaluadas en $x=0$, solo son distintas de cero las derivadas de orden impar:

$$
f^{(2n)}(0)=0, \qquad f^{(2n+1)}(0)=(-1)^{n}, \qquad n=0,1,2,\dots
$$

Al sustituir en la serie, los términos de orden par se anulan y los de orden impar dan

$$
\sin x = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n+1)!}\,x^{2n+1}
= x - \frac{x^{3}}{3!} + \frac{x^{5}}{5!} - \frac{x^{7}}{7!} + \cdots
$$

Para el radio de convergencia se aplica el **criterio del cociente** a los coeficientes $c_n = \dfrac{(-1)^{n}}{(2n+1)!}$ de las potencias $x^{2n+1}$. El cociente de dos términos consecutivos es

$$
\left|\frac{c_{n+1}\,x^{2n+3}}{c_n\,x^{2n+1}}\right|
= \frac{|x|^{2}}{(2n+2)(2n+3)} \xrightarrow[n\to\infty]{} 0
$$

para todo $x$ real. El límite es menor que $1$ cualquiera que sea el valor de $x$, por lo que la serie converge absolutamente para todo $x \in \mathbb{R}$ y el radio de convergencia es $R=\infty$.

## Observaciones

$\sin x$ es una función entera: su serie de Taylor converge a la función en todo $\mathbb{R}$, y por eso el radio de convergencia es infinito. La igualdad es exacta, no una aproximación polinómica.

Los primeros términos de la serie coinciden con los del polinomio de Taylor que se emplea en los métodos numéricos de la sección 8.2.
