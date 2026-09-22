
## Enunciado

Encuentre la transformada inversa de la función dada:

18. $F(s) = \frac{e^{-s} + e^{-2s} - e^{-3s} - e^{-4s}}{s}$

## Solución

$$
\mathcal{L}^{-1}\{F(s)\} = u_1(t) + u_2(t) - u_3(t) - u_4(t)
= \begin{cases}
0, & 0 \le t < 1, \\
1, & 1 \le t < 2, \\
2, & 2 \le t < 3, \\
1, & 3 \le t < 4, \\
0, & t \ge 4.
\end{cases}
$$

## Resolución

La transformada del **escalón unitario** $u_c(t)$ se obtiene de la definición. Como $u_c$ se anula para $t < c$ y vale $1$ para $t \ge c$,

$$
\mathcal{L}\{u_c(t)\}
= \int_0^\infty e^{-st}u_c(t)\,dt
= \int_c^\infty e^{-st}\,dt
= \left[-\frac{e^{-st}}{s}\right]_c^\infty
= \frac{e^{-cs}}{s}, \qquad s > 0.
$$

Por la unicidad de la transformada inversa, este par equivale a

$$
\mathcal{L}^{-1}\!\left\{\frac{e^{-cs}}{s}\right\} = u_c(t).
$$

La transformada inversa es lineal. Al descomponer $F(s)$ y aplicar el par anterior con $c = 1, 2, 3, 4$,

$$
\begin{aligned}
\mathcal{L}^{-1}\{F(s)\}
&= \mathcal{L}^{-1}\!\left\{\frac{e^{-s}}{s}\right\}
+ \mathcal{L}^{-1}\!\left\{\frac{e^{-2s}}{s}\right\}
- \mathcal{L}^{-1}\!\left\{\frac{e^{-3s}}{s}\right\}
- \mathcal{L}^{-1}\!\left\{\frac{e^{-4s}}{s}\right\} \\
&= u_1(t) + u_2(t) - u_3(t) - u_4(t).
\end{aligned}
$$

Cada escalón vale $0$ antes de su retardo y $1$ después, de modo que la suma por tramos es

$$
u_1(t) + u_2(t) - u_3(t) - u_4(t)
= \begin{cases}
0, & 0 \le t < 1, \\
1, & 1 \le t < 2, \\
2, & 2 \le t < 3, \\
1, & 3 \le t < 4, \\
0, & t \ge 4.
\end{cases}
$$

## Observaciones

El resultado es una función escalonada, constante por tramos, con saltos en $t = 1, 2, 3, 4$; es nula fuera del intervalo $[1, 4)$. El par empleado, $\mathcal{L}\{u_c(t)\} = e^{-cs}/s$, es la forma que adopta el segundo teorema de traslación cuando $F(s) = 1/s$ y $f(t) = 1$.

### Método alternativo: segundo teorema de traslación

El mismo resultado se obtiene reconociendo que cada término tiene la forma $e^{-cs}F(s)$ con $F(s) = 1/s$. Como $\mathcal{L}^{-1}\{F(s)\} = \mathcal{L}^{-1}\{1/s\} = 1$ y $f(t-c)u_c(t) = u_c(t)$, se concluye directamente que $\mathcal{L}^{-1}\{e^{-cs}/s\} = u_c(t)$.
