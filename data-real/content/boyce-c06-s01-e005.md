
## Enunciado

En cada uno de los problemas 1 a 10 encuentre la transformada inversa de Laplace de la función dada.

5. $\frac{2s + 2}{s^2 + 2s + 5}$

## Solución

La transformada inversa es

$$
\mathcal{L}^{-1}\left\{\frac{2s+2}{s^2+2s+5}\right\}=2e^{-t}\cos(2t).
$$

## Resolución

Mediante **completar el cuadrado**, el denominador se escribe como un cuadrado desplazado:

$$
s^2+2s+5=(s+1)^2+4=(s+1)^2+2^2.
$$

El numerador es exactamente el doble del desplazamiento,

$$
2s+2=2(s+1),
$$

de modo que la función dada se reescribe como

$$
\frac{2s+2}{s^2+2s+5}=2\,\frac{s+1}{(s+1)^2+2^2}.
$$

Se emplea el par básico

$$
\mathcal{L}\{e^{at}\cos(bt)\}=\frac{s-a}{(s-a)^2+b^2},
$$

que para $a=-1$ y $b=2$ da $\mathcal{L}\{e^{-t}\cos(2t)\}=\dfrac{s+1}{(s+1)^2+4}$. Por la linealidad de la transformada inversa,

$$
\mathcal{L}^{-1}\left\{\frac{2s+2}{s^2+2s+5}\right\}=2\,\mathcal{L}^{-1}\left\{\frac{s+1}{(s+1)^2+4}\right\}=2e^{-t}\cos(2t).
$$

## Observaciones

La inversa se comprueba transformando el resultado: $\mathcal{L}\{2e^{-t}\cos(2t)\}=2(s+1)/((s+1)^2+4)=(2s+2)/(s^2+2s+5)$, con lo que se recupera la función dada. La solución es válida para $t\ge 0$, el dominio de la transformada de Laplace.
