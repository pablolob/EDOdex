
## Enunciado

Encuentre la transformada inversa de la función dada:

15. $F(s) = \frac{2(s - 1)e^{-2s}}{s^2 - 2s + 2}$

## Solución

$$
f(t) = \mathcal{L}^{-1}\{F(s)\} = 2e^{t-2}\cos(t-2)\,u_2(t), \qquad t \ge 0,
$$

esto es,

$$
f(t) =
\begin{cases}
0, & 0 \le t < 2, \\
2e^{t-2}\cos(t-2), & t \ge 2.
\end{cases}
$$

## Resolución

Se completa el cuadrado del denominador. Como

$$
s^2 - 2s + 2 = (s-1)^2 + 1,
$$

la función se reescribe como

$$
F(s) = e^{-2s}\,\frac{2(s-1)}{(s-1)^2 + 1}.
$$

El factor $\dfrac{2(s-1)}{(s-1)^2+1}$ se identifica con el **primer teorema de traslación**. De la tabla, $\mathcal{L}\{\cos t\} = \dfrac{s}{s^2+1}$; al reemplazar $s$ por $s-1$ resulta

$$
\mathcal{L}\{e^{t}\cos t\} = \frac{s-1}{(s-1)^2+1}.
$$

Por linealidad,

$$
\frac{2(s-1)}{(s-1)^2+1} = \mathcal{L}\{2e^{t}\cos t\},
$$

de modo que $G(s) = \dfrac{2(s-1)}{(s-1)^2+1}$ tiene inversa $g(t) = 2e^{t}\cos t$.

El factor restante $e^{-2s}$ se trata con el **segundo teorema de traslación**,

$$
\mathcal{L}\{g(t-a)u_a(t)\} = e^{-as}G(s).
$$

Con $a = 2$,

$$
f(t) = \mathcal{L}^{-1}\{e^{-2s}G(s)\} = g(t-2)u_2(t) = 2e^{t-2}\cos(t-2)\,u_2(t).
$$

## Observaciones

El factor $e^{-2s}$ no cambia la forma de la solución: la retrasa. La señal $2e^{t}\cos t$ se activa en $t = 2$ mediante el escalón $u_2(t)$ y su argumento se desplaza a $t-2$.

La función presenta una discontinuidad de salto en $t = 2$: el límite por la izquierda es $0$ y el valor en el punto es $f(2) = 2$. La transformada converge para $s > 1$, la abscisa de convergencia del par $\mathcal{L}\{e^{t}\cos t\}$.
