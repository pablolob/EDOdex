
## Enunciado

En cada uno de los problemas 8 a 11 encuentre la transformada inversa de Laplace de la función dada al aplicar el teorema de convolución.

9. $F(s) = \frac{s}{(s + 1)(s^2 + 4)}$

## Solución

La transformada inversa es

$$
f(t) = \frac{1}{5}\left(\cos 2t + 2\sin 2t - e^{-t}\right), \qquad t \ge 0.
$$

## Resolución

Se aplica el **teorema de convolución**. La función se factoriza como producto de dos transformadas conocidas,

$$
F(s) = \frac{s}{s^2+4}\cdot\frac{1}{s+1}.
$$

De la tabla, $\mathcal{L}^{-1}\!\left\{\dfrac{s}{s^2+4}\right\} = \cos 2t$ y $\mathcal{L}^{-1}\!\left\{\dfrac{1}{s+1}\right\} = e^{-t}$. Por el teorema de convolución, $\mathcal{L}^{-1}\{F_1 F_2\} = f_1 * f_2$, de modo que

$$
f(t) = \int_0^t \cos(2\tau)\,e^{-(t-\tau)}\,d\tau
= e^{-t}\int_0^t e^{\tau}\cos 2\tau\,d\tau .
$$

La integral se calcula por **integración por partes** (dos veces). Con la primitiva

$$
\int e^{\tau}\cos 2\tau\,d\tau = \frac{e^{\tau}}{5}\left(\cos 2\tau + 2\sin 2\tau\right),
$$

la evaluación entre $0$ y $t$ da

$$
\int_0^t e^{\tau}\cos 2\tau\,d\tau
= \frac{e^{t}}{5}\left(\cos 2t + 2\sin 2t\right) - \frac{1}{5}.
$$

Al sustituir en la expresión de $f$,

$$
f(t) = e^{-t}\left[\frac{e^{t}}{5}\left(\cos 2t + 2\sin 2t\right) - \frac{1}{5}\right]
= \frac{1}{5}\left(\cos 2t + 2\sin 2t - e^{-t}\right).
$$

La transformada inversa está definida para todo $t \ge 0$ y es continua en ese intervalo.

## Observaciones

En $t=0$ la solución vale $f(0)=\frac{1}{5}(1-1)=0$; el término $e^{-t}$ es el transitorio y la combinación $\frac{1}{5}(\cos 2t + 2\sin 2t)$ es la parte oscilatoria permanente.

### Método alternativo: fracciones parciales

La descomposición directa

$$
\frac{s}{(s+1)(s^2+4)}
= -\frac{1}{5}\cdot\frac{1}{s+1} + \frac{1}{5}\cdot\frac{s}{s^2+4} + \frac{2}{5}\cdot\frac{2}{s^2+4}
$$

permite invertir término a término y conduce al mismo resultado, $\frac{1}{5}(\cos 2t + 2\sin 2t - e^{-t})$. Este camino no emplea el teorema de convolución y por eso no es el solicitado en el enunciado.
