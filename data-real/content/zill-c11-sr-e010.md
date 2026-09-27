
## Enunciado

El conjunto de polinomios de Legendre $\{P_n(x)\}$, donde $P_0(x) = 1$, $P_1(x) = x$, $\dots$ es ortogonal a la función de peso $w(x) = 1$ sobre el intervalo $[-1, 1]$. Explique por qué $\int_{-1}^1 P_n(x) \,dx = 0$ para $n > 0$.

## Solución

El polinomio constante $P_0(x)=1$ pertenece al conjunto. Para $n>0$ se cumple $n\ne 0$, de modo que $P_n$ es ortogonal a $P_0$ y

$$
\int_{-1}^{1} P_n(x)\,dx = \int_{-1}^{1} P_n(x)P_0(x)\,dx = 0.
$$

## Resolución

El conjunto $\{P_n(x)\}$ es ortogonal con peso $w(x)=1$ sobre $[-1,1]$. Esto significa que

$$
\int_{-1}^{1} P_n(x)P_m(x)\,dx = 0 \qquad \text{para } n\ne m.
$$

El primer polinomio de Legendre es la función constante

$$
P_0(x)=1.
$$

La integral pedida coincide con el producto interno de $P_n$ con esa constante:

$$
\int_{-1}^{1} P_n(x)\,dx = \int_{-1}^{1} P_n(x)P_0(x)\,dx.
$$

La hipótesis $n>0$ implica $n\ne 0$, luego el par $(n,m)=(n,0)$ verifica $n\ne m$. Al aplicar la relación de ortogonalidad,

$$
\begin{aligned}
\int_{-1}^{1} P_n(x)\,dx
&= \int_{-1}^{1} P_n(x)P_0(x)\,dx \\
&= 0.
\end{aligned}
$$

El integrando es un polinomio, en particular continuo sobre $[-1,1]$; la integral definida está bien definida y no requiere condiciones adicionales.

## Observaciones

La anulación expresa que cada $P_n$ con $n>0$ es ortogonal a la función constante. De forma equivalente, el valor medio de $P_n$ sobre $[-1,1]$ es cero.

Para $n$ impar el resultado también se sigue de la paridad: $P_n$ es impar y su integral sobre un intervalo simétrico es nula. La ortogonalidad cubre además los $n$ pares, cuyo integrando es par y no se anula por simetría.
