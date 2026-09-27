
## Enunciado

Desarrolle $f(x) = e^x$, $0 < x < 1$.
**a)** en una serie de cosenos
**b)** en una serie de senos.

## Solución

a) La serie de cosenos es

$$
e^x = e-1 + \sum_{n=1}^{\infty}\frac{2\left((-1)^n e - 1\right)}{n^2\pi^2+1}\,\cos(n\pi x),
\qquad 0<x<1.
$$

b) La serie de senos es

$$
e^x = \sum_{n=1}^{\infty}\frac{2n\pi\left(1-(-1)^n e\right)}{n^2\pi^2+1}\,\sin(n\pi x),
\qquad 0<x<1.
$$

## Resolución

Para una función definida en $(0,L)$ con $L=1$, la serie de cosenos corresponde a la extensión par y la serie de senos a la extensión impar de $f$.

**a) Serie de cosenos.** Se escribe

$$
f(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty} a_n\cos(n\pi x),
$$

con los coeficientes

$$
a_0 = 2\int_{0}^{1} f(x)\,dx, \qquad
a_n = 2\int_{0}^{1} f(x)\cos(n\pi x)\,dx.
$$

El término constante es

$$
a_0 = 2\int_{0}^{1} e^x\,dx = 2\left[e^x\right]_{0}^{1} = 2(e-1),
$$

de modo que $a_0/2 = e-1$. Para $n\ge 1$ se usa la primitiva

$$
\int e^x\cos(n\pi x)\,dx
= \frac{e^x\left(\cos(n\pi x)+n\pi\sin(n\pi x)\right)}{1+n^2\pi^2}.
$$

Al evaluar entre $0$ y $1$, y como $\cos(n\pi)=(-1)^n$ y $\sin(n\pi)=0$,

$$
\int_{0}^{1} e^x\cos(n\pi x)\,dx
= \frac{e(-1)^n - 1}{1+n^2\pi^2}.
$$

Por tanto,

$$
a_n = \frac{2\left((-1)^n e - 1\right)}{1+n^2\pi^2}.
$$

Al sustituir $a_0/2$ y $a_n$ resulta la serie de cosenos del apartado a).

**b) Serie de senos.** Se escribe

$$
f(x)=\sum_{n=1}^{\infty} b_n\sin(n\pi x),
\qquad
b_n = 2\int_{0}^{1} f(x)\sin(n\pi x)\,dx.
$$

Con la primitiva

$$
\int e^x\sin(n\pi x)\,dx
= \frac{e^x\left(\sin(n\pi x)-n\pi\cos(n\pi x)\right)}{1+n^2\pi^2},
$$

la evaluación entre $0$ y $1$ da

$$
\int_{0}^{1} e^x\sin(n\pi x)\,dx
= \frac{n\pi\left(1-(-1)^n e\right)}{1+n^2\pi^2}.
$$

En consecuencia,

$$
b_n = \frac{2n\pi\left(1-(-1)^n e\right)}{1+n^2\pi^2},
$$

que conduce a la serie de senos del apartado b).

## Observaciones

La serie de cosenos converge a $e^x$ en todo punto de $[0,1]$, porque la extensión par periódica es continua. En $x=0$ y $x=1$ reproduce $1$ y $e$, respectivamente.

La serie de senos procede de la extensión impar, discontinua en $x=0$ y $x=1$; allí converge al promedio de los saltos, es decir, a $0$. Por eso su igualdad con $e^x$ se declara solo en el intervalo abierto $0<x<1$.

Las dos series representan la misma función $e^x$ en $(0,1)$ aunque sus coeficientes y sus extensiones periódicas sean distintos.
