
## Enunciado

Dado que $y = \sum_{n=0}^{\infty} a_n x^n$, calcule $y'$ y $y''$ y escriba los cuatro primeros términos de cada serie, así como el coeficiente de $x^n$ del término general. Demuestre que si $y'' = y$, entonces los coeficientes $a_0$ y $a_1$ son arbitrarios y determine $a_2$ y $a_3$ en términos de $a_0$ y $a_1$. Demuestre que $a_{n+2} = \frac{a_n}{(n+2)(n+1)}, \, n = 0, 1, 2, 3, \dots$

## Solución

Al derivar término a término la **serie de potencias** resultan

$$
y' = \sum_{n=0}^{\infty}(n+1)a_{n+1}x^n, \qquad y'' = \sum_{n=0}^{\infty}(n+2)(n+1)a_{n+2}x^n,
$$

con coeficientes $a_n$, $(n+1)a_{n+1}$ y $(n+2)(n+1)a_{n+2}$ para el término en $x^n$ de $y$, $y'$ y $y''$, respectivamente.

La condición $y''=y$ conduce a $(n+2)(n+1)a_{n+2}=a_n$. Por tanto, $a_0$ y $a_1$ son arbitrarios,

$$
a_2=\frac{a_0}{2}, \qquad a_3=\frac{a_1}{6},
$$

y, en general,

$$
a_{n+2}=\frac{a_n}{(n+2)(n+1)}, \qquad n=0,1,2,\dots
$$

## Resolución

Se parte de la serie de potencias centrada en $x=0$,

$$
y = \sum_{n=0}^{\infty} a_n x^n = a_0 + a_1 x + a_2 x^2 + a_3 x^3 + \cdots
$$

La derivación término a término de una serie de potencias es válida en su intervalo de convergencia. Derivando una vez,

$$
y' = \sum_{n=1}^{\infty} n a_n x^{n-1}.
$$

El índice de esta serie comienza en $n=1$. Con el cambio $n = m+1$ se reescribe con potencias $x^m$,

$$
y' = \sum_{m=0}^{\infty}(m+1)a_{m+1}x^m = \sum_{n=0}^{\infty}(n+1)a_{n+1}x^n,
$$

donde el último paso solo renombra el índice. Sus cuatro primeros términos son

$$
y' = a_1 + 2a_2 x + 3a_3 x^2 + 4a_4 x^3 + \cdots
$$

Derivando de nuevo,

$$
y'' = \sum_{n=2}^{\infty} n(n-1) a_n x^{n-2}.
$$

Con el cambio $n = m+2$ se obtiene

$$
y'' = \sum_{m=0}^{\infty}(m+2)(m+1)a_{m+2}x^m = \sum_{n=0}^{\infty}(n+2)(n+1)a_{n+2}x^n,
$$

cuyos cuatro primeros términos son

$$
y'' = 2a_2 + 6a_3 x + 12a_4 x^2 + 20a_5 x^3 + \cdots
$$

El coeficiente de $x^n$ en el término general es, por tanto, $a_n$ en $y$, $(n+1)a_{n+1}$ en $y'$ y $(n+2)(n+1)a_{n+2}$ en $y''$.

Si $y''=y$, las dos series de potencias son iguales:

$$
\sum_{n=0}^{\infty}(n+2)(n+1)a_{n+2}x^n = \sum_{n=0}^{\infty} a_n x^n.
$$

La representación de una función mediante una serie de potencias es única, de modo que los coeficientes de igual potencia deben coincidir:

$$
(n+2)(n+1)a_{n+2} = a_n, \qquad n = 0, 1, 2, \dots
$$

Para $n=0$ esta relación da $2\cdot 1\,a_2 = a_0$, es decir, $a_2 = \dfrac{a_0}{2}$. Para $n=1$ da $3\cdot 2\,a_3 = a_1$, es decir, $a_3 = \dfrac{a_1}{6}$. La relación no impone condición alguna sobre $a_0$ ni sobre $a_1$: ambos permanecen libres y determinan, a partir de ellos, todos los coeficientes restantes. Al despejar $a_{n+2}$ se obtiene

$$
a_{n+2} = \frac{a_n}{(n+2)(n+1)}, \qquad n = 0, 1, 2, \dots
$$

## Observaciones

La relación de recurrencia separa los coeficientes en dos cadenas independientes: los de índice par se generan a partir de $a_0$ y los de índice impar a partir de $a_1$. Esas dos constantes libres corresponden a los valores iniciales $y(0)=a_0$ e $y'(0)=a_1$.

La solución que se construye es $y = a_0\cosh x + a_1\sinh x$, cuyas series son $\cosh x = \sum_{n=0}^{\infty}\frac{x^{2n}}{(2n)!}$ y $\sinh x = \sum_{n=0}^{\infty}\frac{x^{2n+1}}{(2n+1)!}$. El desarrollo confirma que $a_0$ y $a_1$ son las dos constantes arbitrarias esperadas en una ecuación lineal de segundo orden.
