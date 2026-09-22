
## Enunciado

En cada uno de los problemas 4 a 7 encuentre la transformada de Laplace de la función dada.

5. $f(t) = \int_0^t e^{-(t - \tau)} \operatorname{sen} \tau \,d\tau$

## Solución

La función es la convolución de $e^{-t}$ con $\sin t$. Por el **teorema de convolución**, su transformada es el producto de las transformadas de los factores:

$$
\mathcal{L}\{f(t)\}=\frac{1}{(s+1)(s^2+1)}=\frac{1}{2}\left(\frac{1}{s+1}+\frac{1-s}{s^2+1}\right),\qquad s>0.
$$

## Resolución

La integral es una convolución causal. Con $g(t)=e^{-t}$ y $h(t)=\sin t$,

$$
f(t)=\int_0^t e^{-(t-\tau)}\sin\tau\,d\tau=(g*h)(t).
$$

El **teorema de convolución** establece que $\mathcal{L}\{g*h\}=\mathcal{L}\{g\}\,\mathcal{L}\{h\}$. Las transformadas de los factores son las básicas

$$
\mathcal{L}\{e^{-t}\}=\frac{1}{s+1}\quad (s>-1),\qquad
\mathcal{L}\{\sin t\}=\frac{1}{s^2+1}\quad (s>0).
$$

Al multiplicarlas,

$$
\mathcal{L}\{f(t)\}=\frac{1}{s+1}\cdot\frac{1}{s^2+1}=\frac{1}{(s+1)(s^2+1)}.
$$

La descomposición en fracciones parciales da la forma equivalente

$$
\frac{1}{(s+1)(s^2+1)}=\frac{1}{2}\left(\frac{1}{s+1}+\frac{1-s}{s^2+1}\right).
$$

El producto converge en la intersección de los dominios de los factores, es decir, para $s>0$.

## Observaciones

La función del integrando se reconoce como la convolución $e^{-t}*\sin t$, de modo que el **teorema de convolución** evita calcular la integral. La transformada inversa de $F(s)$ es $f(t)=\tfrac{1}{2}(\sin t-\cos t+e^{-t})$, lo que confirma el resultado.

### Método alternativo: integración directa

También puede calcularse primero la integral y transformar después. Con $f(t)=e^{-t}\int_0^t e^{\tau}\sin\tau\,d\tau$ e integrando por partes dos veces,

$$
f(t)=\frac{1}{2}\left(\sin t-\cos t+e^{-t}\right).
$$

Por linealidad y la tabla de transformadas,

$$
\mathcal{L}\{f(t)\}=\frac{1}{2}\left(\frac{1}{s^2+1}-\frac{s}{s^2+1}+\frac{1}{s+1}\right)=\frac{1}{(s+1)(s^2+1)}.
$$
