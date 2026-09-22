
## Enunciado

Demuestre que para $n = 0, 1, 2, 3$ el polinomio de Legendre correspondiente queda definido por

$$P_n(x) = \frac{1}{2^n n!} \frac{d^n}{dx^n} (x^2 - 1)^n.$$

Esta fórmula, conocida como fórmula Rodrigues (1794-1851), es verdadera para todos los enteros positivos $n$.

## Solución

Al evaluar la **fórmula de Rodrigues** para $n = 0, 1, 2, 3$ se obtienen los polinomios de Legendre

$$
P_0(x) = 1, \qquad P_1(x) = x, \qquad P_2(x) = \frac{3x^2 - 1}{2}, \qquad P_3(x) = \frac{5x^3 - 3x}{2}.
$$

## Resolución

La fórmula de Rodrigues define $P_n$ mediante la $n$-ésima derivada de $(x^2-1)^n$, dividida entre $2^n n!$. La demostración consiste en calcular esa expresión para cada uno de los cuatro valores pedidos.

**Caso $n=0$.** La potencia $(x^2-1)^0=1$ no se deriva y el factor es $2^0\,0!=1$:

$$
P_0(x) = \frac{1}{1}\cdot 1 = 1.
$$

**Caso $n=1$.** Con $(x^2-1)^1=x^2-1$, la primera derivada es $2x$ y el factor es $2^1\,1!=2$:

$$
P_1(x) = \frac{1}{2}\cdot\frac{d}{dx}(x^2-1) = \frac{2x}{2} = x.
$$

**Caso $n=2$.** Se desarrolla $(x^2-1)^2=x^4-2x^2+1$ y se deriva dos veces:

$$
\frac{d}{dx}(x^4-2x^2+1) = 4x^3-4x, \qquad \frac{d^2}{dx^2}(x^4-2x^2+1) = 12x^2-4.
$$

Con $2^2\,2!=8$,

$$
P_2(x) = \frac{1}{8}\left(12x^2-4\right) = \frac{3x^2-1}{2}.
$$

**Caso $n=3$.** Se desarrolla $(x^2-1)^3=x^6-3x^4+3x^2-1$ y se deriva tres veces:

$$
\frac{d}{dx}(x^6-3x^4+3x^2-1) = 6x^5-12x^3+6x,
$$

$$
\frac{d^2}{dx^2}(x^6-3x^4+3x^2-1) = 30x^4-36x^2+6, \qquad \frac{d^3}{dx^3}(x^6-3x^4+3x^2-1) = 120x^3-72x.
$$

Con $2^3\,3!=48$,

$$
P_3(x) = \frac{1}{48}\left(120x^3-72x\right) = \frac{5x^3-3x}{2}.
$$

Los cuatro resultados coinciden con los polinomios de Legendre $P_0, P_1, P_2, P_3$. Por tanto, la fórmula de Rodrigues reproduce el polinomio de Legendre correspondiente para $n=0,1,2,3$.

## Observaciones

Cada $P_n$ es un polinomio de grado $n$ y tiene la paridad de $n$: $P_n(-x)=(-1)^n P_n(x)$. La normalización $P_n(1)=1$ se cumple en los cuatro casos.

Los polinomios obtenidos son las soluciones polinómicas de la ecuación de Legendre

$$
(1-x^2)y'' - 2xy' + n(n+1)y = 0,
$$

que es la propiedad que los define. La fórmula de Rodrigues es válida para todo entero no negativo $n$, no solo para los cuatro valores comprobados.
