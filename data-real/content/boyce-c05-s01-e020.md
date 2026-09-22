
## Enunciado

En cada uno de los problemas 19 a 23, compruebe la ecuación dada.

20. $\sum_{n=2}^{\infty} n(n-1)a_n x^{n-2} = \sum_{n=0}^{\infty} (n+2)(n+1)a_{n+2} x^n$

## Solución

La ecuación es una **reindexación** de una misma serie de potencias. Con el cambio de índice $m=n-2$, el miembro izquierdo se escribe como el miembro derecho:

$$
\sum_{n=2}^{\infty} n(n-1)a_n x^{n-2} = \sum_{n=0}^{\infty} (n+2)(n+1)a_{n+2} x^n.
$$

## Resolución

El miembro izquierdo suma sobre $n \ge 2$. Se introduce el índice $m=n-2$, equivalente a $n=m+2$. El límite inferior $n=2$ corresponde a $m=0$, y $n\to\infty$ corresponde a $m\to\infty$. Al sustituir en el término general,

$$
n(n-1)a_n x^{n-2} = (m+2)(m+1)a_{m+2} x^{m}.
$$

Por tanto,

$$
\sum_{n=2}^{\infty} n(n-1)a_n x^{n-2}
= \sum_{m=0}^{\infty} (m+2)(m+1)a_{m+2} x^{m}.
$$

El índice de una serie es mudo: renombrar $m$ como $n$ no altera la suma. Se obtiene

$$
\sum_{n=0}^{\infty} (n+2)(n+1)a_{n+2} x^n,
$$

que es el miembro derecho. La ecuación es, así, una identidad válida para todo $x$ para el que convergen ambas series.

## Observaciones

La reindexación empareja los términos uno a uno, de modo que ambas series tienen el mismo radio de convergencia y representan la misma función donde convergen.

Esta identidad es la que resulta al derivar dos veces la serie $\sum_{n=0}^{\infty} a_n x^n$. La segunda derivada es $\sum_{n=2}^{\infty} n(n-1)a_n x^{n-2}$, y el cambio de índice la lleva a la forma $\sum_{n=0}^{\infty}(n+2)(n+1)a_{n+2}x^n$. Por eso se emplea al escribir soluciones en serie de potencias.
