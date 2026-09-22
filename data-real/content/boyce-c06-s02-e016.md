
## Enunciado

Encuentre la transformada inversa de la función dada:

16. $F(s) = \frac{2e^{-2s}}{s^2 - 4}$

## Solución

$$
f(t) = \mathscr{L}^{-1}\!\left\{\frac{2e^{-2s}}{s^2 - 4}\right\} = \sinh\big(2(t-2)\big)\,u_2(t), \qquad t \ge 0.
$$

## Resolución

La función tiene la forma $F(s) = e^{-2s}G(s)$ con

$$
G(s) = \frac{2}{s^2 - 4} = \frac{2}{(s-2)(s+2)}.
$$

Se invierte primero $G(s)$ mediante **fracciones parciales**. Con la descomposición

$$
\frac{2}{(s-2)(s+2)} = \frac{A}{s-2} + \frac{B}{s+2},
$$

al multiplicar por $(s-2)(s+2)$ resulta $2 = A(s+2) + B(s-2)$. Evaluando en $s = 2$ se obtiene $A = \tfrac12$; evaluando en $s = -2$, $B = -\tfrac12$. Por tanto,

$$
G(s) = \frac{1}{2}\left(\frac{1}{s-2} - \frac{1}{s+2}\right).
$$

Con el par de la tabla $\mathscr{L}^{-1}\{1/(s-a)\} = e^{at}$,

$$
g(t) = \mathscr{L}^{-1}\{G(s)\} = \frac{1}{2}\left(e^{2t} - e^{-2t}\right) = \sinh(2t), \qquad t \ge 0.
$$

El **segundo teorema de traslación**, en su forma inversa, establece que

$$
\mathscr{L}^{-1}\{e^{-as}G(s)\} = g(t-a)\,u_a(t), \qquad a > 0.
$$

Al sustituir $a = 2$ y $g(t) = \sinh(2t)$,

$$
f(t) = \mathscr{L}^{-1}\!\left\{\frac{2e^{-2s}}{s^2 - 4}\right\} = \sinh\big(2(t-2)\big)\,u_2(t).
$$

## Observaciones

La transformada $F$ tiene polos en $s = \pm 2$; su abscisa de convergencia es $s > 2$, la misma que la de $G$, porque el factor $e^{-2s}$ no introduce singularidades nuevas. La función $f$ se anula en $0 \le t < 2$; en $t = 2$ el escalón la activa y $\sinh(2(t-2)) \to 0$, de modo que $f$ es continua en $t = 2$.

### Método alternativo: par directo de la tabla

La inversión de $G$ también se obtiene reconociendo el par

$$
\mathscr{L}\{\sinh(2t)\} = \frac{2}{s^2 - 4}, \qquad s > 2,
$$

sin descomponer en fracciones parciales. Aplicando después el segundo teorema de traslación con $a = 2$ se llega al mismo resultado.
