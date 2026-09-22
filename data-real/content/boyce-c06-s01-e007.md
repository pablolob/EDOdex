
## Enunciado

En cada uno de los problemas 1 a 10 encuentre la transformada inversa de Laplace de la función dada.

7. $\frac{2s + 1}{s^2 - 2s + 2}$

## Solución

La transformada inversa es

$$
\mathcal{L}^{-1}\left\{\frac{2s+1}{s^{2}-2s+2}\right\}=e^{t}\left(2\cos t+3\sin t\right).
$$

## Resolución

El denominador no es un cuadrado perfecto, pero se completa el cuadrado:

$$
s^{2}-2s+2=(s-1)^{2}+1.
$$

Se reescribe el numerador en términos de $s-1$:

$$
2s+1=2(s-1)+3.
$$

Con esto, la función se descompone en dos términos que coinciden con pares de la tabla de transformadas:

$$
\frac{2s+1}{s^{2}-2s+2}=\frac{2(s-1)}{(s-1)^{2}+1}+\frac{3}{(s-1)^{2}+1}.
$$

Con $a=1$ y $b=1$ se emplean los pares

$$
\mathcal{L}\{e^{at}\cos bt\}=\frac{s-a}{(s-a)^{2}+b^{2}},
\qquad
\mathcal{L}\{e^{at}\sin bt\}=\frac{b}{(s-a)^{2}+b^{2}}.
$$

Al identificar cada término resulta

$$
\mathcal{L}^{-1}\left\{\frac{2(s-1)}{(s-1)^{2}+1}\right\}=2e^{t}\cos t,
\qquad
\mathcal{L}^{-1}\left\{\frac{3}{(s-1)^{2}+1}\right\}=3e^{t}\sin t.
$$

Por la linealidad de la transformada inversa,

$$
\mathcal{L}^{-1}\left\{\frac{2s+1}{s^{2}-2s+2}\right\}=2e^{t}\cos t+3e^{t}\sin t=e^{t}\left(2\cos t+3\sin t\right).
$$

## Observaciones

La función $f(t)=e^{t}(2\cos t+3\sin t)$ está definida para todo $t\ge 0$. La transformada $F(s)$ tiene polos en $s=1\pm i$, de modo que su región de convergencia es $\operatorname{Re}(s)>1$. Los pares empleados son los pares básicos $\mathcal{L}\{\cos bt\}$ y $\mathcal{L}\{\sin bt\}$ trasladados en $s$; se aplican directamente desde la tabla.
