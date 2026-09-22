
## Enunciado

Encuentre la transformada inversa de la función dada:

14. $F(s) = \frac{e^{-2s}}{s^2 + s - 2}$

## Solución

La transformada inversa de Laplace de la función dada es

$$
\mathcal{L}^{-1}\!\left\{\frac{e^{-2s}}{s^{2}+s-2}\right\}
= \frac{1}{3}\left(e^{\,t-2} - e^{\,4-2t}\right)u_2(t), \qquad t \ge 0,
$$

es decir, $f(t)=0$ para $t<2$ y $f(t)=\dfrac{1}{3}\left(e^{\,t-2}-e^{\,4-2t}\right)$ para $t\ge 2$.

## Resolución

El denominador se factoriza como $s^{2}+s-2=(s-1)(s+2)$. La **descomposición en fracciones parciales** da

$$
\frac{1}{s^{2}+s-2}
= \frac{1}{(s-1)(s+2)}
= \frac{1}{3}\left(\frac{1}{s-1}-\frac{1}{s+2}\right).
$$

Sea $G(s)=\dfrac{1}{s^{2}+s-2}$. Su transformada inversa se obtiene de los pares básicos $\mathcal{L}\{e^{at}\}=\dfrac{1}{s-a}$ y de la linealidad:

$$
g(t)=\mathcal{L}^{-1}\{G(s)\}=\frac{1}{3}\left(e^{t}-e^{-2t}\right).
$$

El factor $e^{-2s}$ multiplica a $G(s)$, de modo que $F(s)=e^{-2s}G(s)$. El **segundo teorema de traslación**, en su forma inversa, establece que

$$
\mathcal{L}^{-1}\{e^{-as}G(s)\}=g(t-a)\,u_a(t).
$$

Con $a=2$ resulta

$$
f(t)=g(t-2)\,u_2(t)
= \frac{1}{3}\left(e^{\,t-2}-e^{-2(t-2)}\right)u_2(t)
= \frac{1}{3}\left(e^{\,t-2}-e^{\,4-2t}\right)u_2(t).
$$

## Observaciones

La función es nula para $t<2$. En $t=2$ los dos exponenciales valen $1$, de modo que $f(2)=0$ y $f$ es continua en ese punto.

La transformada $G(s)=\dfrac{1}{s^{2}+s-2}$ converge para $s>1$, región en la que las integrales $\int_2^{\infty}e^{-(s-1)t}\,dt$ y $\int_2^{\infty}e^{-(s+2)t}\,dt$ son finitas. El factor $e^{-2s}$ no introduce singularidades nuevas; los únicos polos, $s=1$ y $s=-2$, provienen de $G$.
