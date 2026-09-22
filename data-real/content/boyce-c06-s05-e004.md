
## Enunciado

En cada uno de los problemas 4 a 7 encuentre la transformada de Laplace de la función dada.

4. $f(t) = \int_0^t (t - \tau)^2 \cos 2\tau \,d\tau$

## Solución

La función es la convolución de $t^2$ con $\cos 2t$. Por el **teorema de convolución**,

$$
\mathcal{L}\{f(t)\}=\frac{2}{s^2(s^2+4)}.
$$

## Resolución

Se identifica la integral como una convolución. Con $g(t)=t^2$ y $h(t)=\cos 2t$,

$$
(g*h)(t)=\int_0^t g(t-\tau)h(\tau)\,d\tau
=\int_0^t (t-\tau)^2\cos 2\tau\,d\tau=f(t).
$$

El **teorema de convolución** establece que la transformada de la convolución es el producto de las transformadas:

$$
\mathcal{L}\{g*h\}=G(s)H(s).
$$

Las transformadas elementales de los dos factores son

$$
\mathcal{L}\{t^2\}=\frac{2}{s^3},
\qquad
\mathcal{L}\{\cos 2t\}=\frac{s}{s^2+4}.
$$

Al multiplicarlas,

$$
\mathcal{L}\{f(t)\}
=\frac{2}{s^3}\cdot\frac{s}{s^2+4}
=\frac{2}{s^2(s^2+4)}.
$$

## Observaciones

La función $f$ es la convolución de $t^2$ y $\cos 2t$; reconocer esa estructura permite aplicar el teorema de convolución sin calcular la integral. La transformada es válida para $s>0$, región de convergencia de las transformadas elementales empleadas.

### Método alternativo: integración directa

Integrando dos veces por partes se obtiene $f(t)=\dfrac{t}{2}-\dfrac{1}{4}\sin 2t$. Su transformada es

$$
\frac{1}{2s^2}-\frac{1}{2(s^2+4)}=\frac{2}{s^2(s^2+4)},
$$

en concordancia con el resultado anterior.
