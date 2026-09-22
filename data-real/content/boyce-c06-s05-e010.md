
## Enunciado

En cada uno de los problemas 8 a 11 encuentre la transformada inversa de Laplace de la función dada al aplicar el teorema de convolución.

10. $F(s) = \frac{1}{(s + 1)^2(s^2 + 4)}$

## Solución

$$
f(t)=\frac{t e^{-t}}{5}+\frac{2e^{-t}}{25}-\frac{2\cos 2t}{25}-\frac{3\sin 2t}{50}.
$$

## Resolución

La función se factoriza como producto de dos transformadas conocidas:

$$
F(s)=\frac{1}{(s+1)^2}\cdot\frac{1}{s^2+4}=F_1(s)F_2(s).
$$

Las transformadas inversas de cada factor son

$$
f_1(t)=\mathcal{L}^{-1}\!\left\{\frac{1}{(s+1)^2}\right\}=t e^{-t},
\qquad
f_2(t)=\mathcal{L}^{-1}\!\left\{\frac{1}{s^2+4}\right\}=\frac{1}{2}\sin 2t .
$$

El primer resultado usa el par $\mathcal{L}^{-1}\{1/s^2\}=t$ junto con el **primer teorema de traslación** (desplazamiento $s\to s+1$); el segundo es el par básico del seno con $b=2$.

Por el **teorema de convolución**, $\mathcal{L}^{-1}\{F_1F_2\}=(f_1*f_2)(t)$, de modo que

$$
f(t)=\int_0^t f_1(t-\tau)f_2(\tau)\,d\tau
=\frac{1}{2}\int_0^t (t-\tau)e^{-(t-\tau)}\sin 2\tau\,d\tau .
$$

En la integral se aplica el cambio de variable $u=t-\tau$, con $d\tau=-du$ y límites $\tau=0\Rightarrow u=t$, $\tau=t\Rightarrow u=0$:

$$
f(t)=\frac{1}{2}\int_0^t u e^{-u}\sin\!\bigl(2(t-u)\bigr)\,du .
$$

Se desarrolla $\sin(2t-2u)=\sin 2t\cos 2u-\cos 2t\sin 2u$:

$$
f(t)=\frac{1}{2}\sin 2t\int_0^t u e^{-u}\cos 2u\,du
-\frac{1}{2}\cos 2t\int_0^t u e^{-u}\sin 2u\,du .
$$

Las dos integrales se calculan por **integración por partes** y resultan

$$
\begin{aligned}
A(t)&=\int_0^t u e^{-u}\cos 2u\,du
=\frac{t e^{-t}}{5}\bigl(-\cos 2t+2\sin 2t\bigr)
+\frac{e^{-t}}{25}\bigl(3\cos 2t+4\sin 2t\bigr)-\frac{3}{25},\\[2pt]
B(t)&=\int_0^t u e^{-u}\sin 2u\,du
=\frac{t e^{-t}}{5}\bigl(-\sin 2t-2\cos 2t\bigr)
+\frac{e^{-t}}{25}\bigl(3\sin 2t-4\cos 2t\bigr)+\frac{4}{25}.
\end{aligned}
$$

Al sustituir $A(t)$ y $B(t)$ en la expresión de $f(t)$, los términos con $\sin 2t\cos 2t$ se cancelan y, usando $\sin^2 2t+\cos^2 2t=1$, se obtiene

$$
f(t)=\frac{t e^{-t}}{5}+\frac{2e^{-t}}{25}-\frac{2\cos 2t}{25}-\frac{3\sin 2t}{50}.
$$

## Observaciones

La solución es continua en $[0,\infty)$, de modo que la transformada inversa no presenta saltos.

### Método alternativo: fracciones parciales

La misma transformada inversa se obtiene sin convolución, desarrollando $F(s)$ en fracciones parciales:

$$
F(s)=\frac{2/25}{s+1}+\frac{1/5}{(s+1)^2}-\frac{2s/25+3/25}{s^2+4}.
$$

Al invertir cada término se recupera la expresión anterior. Este camino confirma el resultado obtenido con el teorema de convolución.
