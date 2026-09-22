
## Enunciado

En cada uno de los problemas 15 a 20, aplique la integración por partes para hallar la transformada de Laplace de la función dada; $n$ es un entero positivo y $a$ es una constante real.

18. $t^n e^{at}$

## Solución

La transformada de Laplace de $t^{n}e^{at}$ es

$$
\mathcal{L}\{t^{n}e^{at}\}=\frac{n!}{(s-a)^{n+1}}, \qquad s>a.
$$

## Resolución

Se parte de la definición de la transformada y se agrupan las exponenciales en $t$:

$$
\mathcal{L}\{t^{n}e^{at}\}
=\int_{0}^{\infty} e^{-st}t^{n}e^{at}\,dt
=\int_{0}^{\infty} t^{n}e^{-(s-a)t}\,dt.
$$

Para $s>a$ la integral impropia converge, porque el factor exponencial decae más rápido de lo que crece $t^{n}$.

Se aplica **integración por partes** con $u=t^{n}$ y $dv=e^{-(s-a)t}\,dt$. Entonces $du=n t^{n-1}\,dt$ y $v=-\dfrac{e^{-(s-a)t}}{s-a}$, de modo que

$$
\begin{aligned}
\int_{0}^{\infty} t^{n}e^{-(s-a)t}\,dt
&=\left[-\frac{t^{n}e^{-(s-a)t}}{s-a}\right]_{0}^{\infty}
+\frac{n}{s-a}\int_{0}^{\infty} t^{n-1}e^{-(s-a)t}\,dt.
\end{aligned}
$$

El término de frontera se anula: en $t=0$ vale $0$ porque $n\ge 1$, y en $t\to\infty$ la exponencial domina al polinomio cuando $s>a$. Al escribir

$$
I_n=\int_{0}^{\infty} t^{n}e^{-(s-a)t}\,dt,
$$

la igualdad anterior es la recurrencia

$$
I_n=\frac{n}{s-a}\,I_{n-1}, \qquad I_0=\int_{0}^{\infty} e^{-(s-a)t}\,dt=\frac{1}{s-a}.
$$

Al iterarla $n$ veces,

$$
I_n=\frac{n}{s-a}\cdot\frac{n-1}{s-a}\cdots\frac{1}{s-a}\cdot\frac{1}{s-a}
=\frac{n!}{(s-a)^{n+1}}.
$$

Por lo tanto,

$$
\mathcal{L}\{t^{n}e^{at}\}=\frac{n!}{(s-a)^{n+1}}, \qquad s>a.
$$

## Observaciones

Cada **integración por partes** reduce en uno la potencia de $t$ y aporta el factor $n/(s-a)$; repetir el paso $n$ veces produce el factorial. La región de convergencia es $\operatorname{Re}(s)>a$, que sobre el eje real se reduce a $s>a$. Con $a=0$ la fórmula reproduce $\mathcal{L}\{t^{n}\}=n!/s^{n+1}$; con $n=0$ reproduce $\mathcal{L}\{e^{at}\}=1/(s-a)$.
