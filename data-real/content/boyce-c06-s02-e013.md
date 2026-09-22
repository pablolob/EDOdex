
## Enunciado

Encuentre la transformada inversa de la función dada:

13. $F(s) = \frac{3!}{(s - 2)^4}$

## Solución

$$
\mathscr{L}^{-1}\{F(s)\} = t^3 e^{2t}, \qquad t \ge 0.
$$

## Resolución

La función $F$ tiene la forma $G(s-2)$, con $G(s) = 3!/s^4$. De la tabla de transformadas, con $n = 3$,

$$
\mathscr{L}\{t^3\} = \frac{3!}{s^4}, \qquad s > 0.
$$

El **primer teorema de traslación** establece que, si $G(s) = \mathscr{L}\{g(t)\}$, entonces

$$
\mathscr{L}^{-1}\{G(s-a)\} = e^{at} g(t).
$$

Con $a = 2$ y $g(t) = t^3$, resulta

$$
\mathscr{L}^{-1}\left\{\frac{3!}{(s-2)^4}\right\} = e^{2t}\, t^3.
$$

## Observaciones

El mismo resultado se lee directamente de la tabla mediante el par

$$
\mathscr{L}\{t^n e^{at}\} = \frac{n!}{(s-a)^{n+1}}, \qquad s > a,
$$

con $n = 3$ y $a = 2$. La transformada converge para $s > 2$, región en la que $F$ es analítica salvo el polo de orden $4$ en $s = 2$. No se requieren fracciones parciales porque el denominador es una potencia única.
