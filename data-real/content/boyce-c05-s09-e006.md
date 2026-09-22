
## Enunciado

Encuentre la transformada de Laplace de $f(t) = \cos at$ en donde $a$ es una constante real.

## Solución

La transformada de Laplace de $f(t)=\cos at$ es

$$
\mathcal{L}\{\cos at\}=\frac{s}{s^{2}+a^{2}}, \qquad s>0.
$$

## Resolución

Por la definición integral de la transformada,

$$
\mathcal{L}\{\cos at\}=\int_0^\infty e^{-st}\cos(at)\,dt, \qquad s>0.
$$

La integral impropia converge porque $|e^{-st}\cos(at)|\le e^{-st}$ y $\int_0^\infty e^{-st}\,dt=1/s$.

Se introduce la exponencial compleja $e^{iat}=\cos(at)+i\sin(at)$ y se calcula su transformada con la misma definición:

$$
\mathcal{L}\{e^{iat}\}=\int_0^\infty e^{-st}e^{iat}\,dt=\int_0^\infty e^{-(s-ia)t}\,dt=\left[-\frac{e^{-(s-ia)t}}{s-ia}\right]_0^\infty=\frac{1}{s-ia}.
$$

El límite superior se anula porque $\operatorname{Re}(s-ia)=s>0$, de modo que $e^{-(s-ia)t}\to 0$ cuando $t\to\infty$.

Como la transformada es lineal y $s$ es real,

$$
\mathcal{L}\{e^{iat}\}=\mathcal{L}\{\cos at\}+i\,\mathcal{L}\{\sin at\}.
$$

Al racionalizar el resultado,

$$
\frac{1}{s-ia}=\frac{s+ia}{(s-ia)(s+ia)}=\frac{s+ia}{s^{2}+a^{2}}=\frac{s}{s^{2}+a^{2}}+i\,\frac{a}{s^{2}+a^{2}}.
$$

La igualdad de ambas expresiones como funciones de $s$ permite separar partes real e imaginaria. La parte real es la transformada buscada:

$$
\mathcal{L}\{\cos at\}=\frac{s}{s^{2}+a^{2}}.
$$

## Observaciones

La fórmula vale para toda constante real $a$. Para $a=0$ se reduce a $\mathcal{L}\{1\}=1/s$, coherente con $f(t)=1$. Al separar la parte imaginaria se obtiene además $\mathcal{L}\{\sin at\}=a/(s^{2}+a^{2})$.

### Método alternativo: integración por partes

La integral $\int_0^\infty e^{-st}\cos(at)\,dt$ también se evalúa por partes dos veces. Con $I=\int_0^\infty e^{-st}\cos(at)\,dt$ y $J=\int_0^\infty e^{-st}\sin(at)\,dt$, la primera integración da $I=\frac{s}{a}J$ y la segunda, $J=\frac{1}{a}-\frac{s}{a}I$. Al sustituir y despejar, $I\left(1+\frac{s^{2}}{a^{2}}\right)=\frac{s}{a^{2}}$, de donde $I=\frac{s}{s^{2}+a^{2}}$. Este camino supone $a\ne 0$ y obliga a tratar aparte el caso $a=0$.
