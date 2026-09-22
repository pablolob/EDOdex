
## Enunciado

La ecuación diferencial de Chebyshev es

$$\left(1 - x^2\right)y'' - xy' + \alpha^2 y = 0,$$

en donde $\alpha$ es una constante.

a) Determine dos soluciones linealmente independientes en potencias de $x$ para $|x| < 1$.

b) Demuestre que si $\alpha$ es un entero no negativo $n$, entonces existe una solución polinomial de grado $n$. Estos polinomios, cuando están normalizados adecuadamente, reciben el nombre de polinomios de Chebyshev y son muy útiles en problemas que requieren una aproximación polinomial para una función definida sobre $-1 \le x \le 1$.

c) Encuentre una solución polinomial para cada uno de los casos $\alpha = n = 0, 1, 2$ y $3$.

## Solución

a) Dos soluciones linealmente independientes para $|x|<1$ son

$$
y_1(x) = 1 - \frac{\alpha^2}{2!}x^2 + \frac{\alpha^2(\alpha^2-4)}{4!}x^4 - \cdots,
$$

$$
y_2(x) = x + \frac{1-\alpha^2}{3!}x^3 + \frac{(1-\alpha^2)(9-\alpha^2)}{5!}x^5 + \cdots,
$$

y la solución general es $y = a_0 y_1(x) + a_1 y_2(x)$.

b) Si $\alpha = n$ es un entero no negativo, la recurrencia contiene el factor $k^2-n^2$, que se anula para $k=n$. La serie de la misma paridad que $n$ termina y define un polinomio de grado $n$.

c) Las soluciones polinomiales son

$$
\begin{aligned}
\alpha=0:&\quad y = 1, & \alpha=1:&\quad y = x, \\
\alpha=2:&\quad y = 1-2x^2, & \alpha=3:&\quad y = x-\frac{4}{3}x^3.
\end{aligned}
$$

## Resolución

Se busca una solución en **series de potencias** centrada en $x=0$,

$$
y(x)=\sum_{n=0}^{\infty} a_n x^n.
$$

El punto $x=0$ es un punto ordinario: los coeficientes $1-x^2$, $-x$ y $\alpha^2$ son analíticos allí y $1-x^2\ne 0$ en $x=0$. Los puntos singulares más próximos son $x=\pm 1$, de modo que la serie converge al menos para $|x|<1$.

Las derivadas de la serie son

$$
y'(x)=\sum_{n=1}^{\infty} n a_n x^{n-1}, \qquad
y''(x)=\sum_{n=2}^{\infty} n(n-1) a_n x^{n-2}.
$$

Al sustituirlas en la ecuación,

$$
(1-x^2)y''-xy'+\alpha^2 y
= \sum_{n=2}^{\infty} n(n-1)a_n x^{n-2}
- \sum_{n=2}^{\infty} n(n-1)a_n x^{n}
- \sum_{n=1}^{\infty} n a_n x^{n}
+ \alpha^2\sum_{n=0}^{\infty} a_n x^{n}.
$$

La primera suma se reindexa con $k=n-2$. En las demás, los términos con $n=0$ y $n=1$ se anulan, por lo que también pueden escribirse desde $k=0$. Agrupando el coeficiente de $x^k$ e igualándolo a cero,

$$
(k+2)(k+1)a_{k+2} - k(k-1)a_k - k a_k + \alpha^2 a_k = 0,
$$

esto es,

$$
a_{k+2} = \frac{k^2-\alpha^2}{(k+2)(k+1)}\,a_k, \qquad k\ge 0.
$$

Esta es la **relación de recurrencia**. Liga cada coeficiente con el de dos posiciones antes, de modo que los coeficientes de índice par y los de índice impar se determinan por separado a partir de $a_0$ y $a_1$. Con $a_0=1$, los coeficientes pares son

$$
a_{2m}=\prod_{j=1}^{m}\frac{(2j-2)^2-\alpha^2}{(2j)(2j-1)},
$$

y con $a_1=1$, los impares son

$$
a_{2m+1}=\prod_{j=1}^{m}\frac{(2j-1)^2-\alpha^2}{(2j+1)(2j)}.
$$

De aquí resultan

$$
y_1(x)=\sum_{m=0}^{\infty} a_{2m}x^{2m}, \qquad
y_2(x)=\sum_{m=0}^{\infty} a_{2m+1}x^{2m+1},
$$

cuyos primeros términos son los escritos en la Solución. Son linealmente independientes porque $y_1(0)=1$, $y_1'(0)=0$ y $y_2(0)=0$, $y_2'(0)=1$; su wronskiano en $x=0$ vale $1$. La solución general es $y=a_0 y_1+a_1 y_2$.

b) Para $\alpha=n$, con $n$ entero no negativo, la recurrencia es

$$
a_{k+2}=\frac{k^2-n^2}{(k+2)(k+1)}\,a_k.
$$

En $k=n$ el numerador se anula, luego $a_{n+2}=0$. Por la misma recurrencia, todos los coeficientes posteriores de igual paridad que $n$ son nulos. La serie de esa paridad se corta en el término de grado $n$ y define un polinomio de grado $n$; la otra serie permanece infinita. Así, para cada entero $n\ge 0$ existe una solución polinomial de grado $n$.

c) Se aplica la recurrencia tomando $a_0=1$ en los casos pares y $a_1=1$ en los impares.

- $\alpha=0$ (par): $a_2=\dfrac{0-0}{2\cdot 1}a_0=0$, luego $y=1$.
- $\alpha=1$ (impar): $a_3=\dfrac{1-1}{3\cdot 2}a_1=0$, luego $y=x$.
- $\alpha=2$ (par): $a_2=\dfrac{0-4}{2\cdot 1}=-2$ y $a_4=\dfrac{4-4}{4\cdot 3}a_2=0$, luego $y=1-2x^2$.
- $\alpha=3$ (impar): $a_3=\dfrac{1-9}{3\cdot 2}=-\dfrac{4}{3}$ y $a_5=\dfrac{9-9}{5\cdot 4}a_3=0$, luego $y=x-\dfrac{4}{3}x^3$.

## Observaciones

Los polinomios obtenidos son, salvo una constante multiplicativa, los polinomios de Chebyshev $T_n$: $T_0=1$, $T_1=x$, $T_2=2x^2-1$ y $T_3=4x^3-3x$. La normalización habitual fija $T_n(1)=1$, lo que introduce el factor constante correspondiente en cada caso.

Para $\alpha$ no entero las dos soluciones son series infinitas. Su radio de convergencia es $1$, determinado por los puntos singulares de la ecuación en $x=\pm 1$.
