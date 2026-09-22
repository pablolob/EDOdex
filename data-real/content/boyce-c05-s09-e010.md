
## Enunciado

Recuerde que $\cosh bt = (e^{bt} + e^{-bt})/2$ y $\operatorname{senh} bt = (e^{bt} - e^{-bt})/2$. En cada uno de los problemas 7 a 10, halle la transformada de Laplace de la función dada; $a$ y $b$ son constantes reales.

10. $e^{at} \operatorname{senh} bt$

## Solución

$$
\mathcal{L}\{e^{at}\sinh bt\} = \frac{b}{(s-a)^{2}-b^{2}}, \qquad s > a + |b|.
$$

## Resolución

Se parte de la identidad que indica el enunciado. Con $\sinh bt = \dfrac{e^{bt}-e^{-bt}}{2}$,

$$
e^{at}\sinh bt = \frac{1}{2}\left(e^{(a+b)t} - e^{(a-b)t}\right).
$$

Por **linealidad** de la transformada de Laplace y el par básico $\mathcal{L}\{e^{ct}\} = \dfrac{1}{s-c}$, válido para $s>c$,

$$
\mathcal{L}\{e^{at}\sinh bt\}
= \frac{1}{2}\left(\frac{1}{s-(a+b)} - \frac{1}{s-(a-b)}\right).
$$

Se combinan las dos fracciones con el denominador común $(s-a)^{2}-b^{2}$:

$$
\frac{1}{s-a-b} - \frac{1}{s-a+b}
= \frac{(s-a+b)-(s-a-b)}{(s-a)^{2}-b^{2}}
= \frac{2b}{(s-a)^{2}-b^{2}}.
$$

Por tanto,

$$
\mathcal{L}\{e^{at}\sinh bt\} = \frac{b}{(s-a)^{2}-b^{2}}.
$$

La transformada converge cuando $s>a+b$ y $s>a-b$ se cumplen a la vez, esto es, para $s>a+|b|$.

## Observaciones

La región de convergencia $s>a+|b|$ es la más restrictiva de los dos pares exponenciales que intervienen.

### Método alternativo: primer teorema de traslación

Del par $\mathcal{L}\{\sinh bt\} = \dfrac{b}{s^{2}-b^{2}}$, válido para $s>|b|$, el **primer teorema de traslación** produce directamente $\mathcal{L}\{e^{at}\sinh bt\} = \dfrac{b}{(s-a)^{2}-b^{2}}$.
