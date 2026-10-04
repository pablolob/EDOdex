
## Enunciado

En cada uno de los problemas 1 a 6, exprese el número complejo dado en la forma $a + ib$.

6. $\pi^{-1+2i}$

## Solución

$$
\pi^{-1+2i}=\frac{\cos(2\ln\pi)}{\pi}+i\,\frac{\sin(2\ln\pi)}{\pi}.
$$

## Resolución

Para una base real positiva $a$ y un exponente complejo $z$, la potencia se define mediante el logaritmo real:

$$
a^{z}=e^{z\ln a}.
$$

Con $a=\pi$ y $z=-1+2i$ resulta

$$
\begin{aligned}
\pi^{-1+2i}
&=e^{(-1+2i)\ln\pi} \\
&=e^{-\ln\pi}\,e^{2i\ln\pi} \\
&=\frac{1}{\pi}\,e^{2i\ln\pi}.
\end{aligned}
$$

La **fórmula de Euler** $e^{i\theta}=\cos\theta+i\sin\theta$ con $\theta=2\ln\pi$ da

$$
e^{2i\ln\pi}=\cos(2\ln\pi)+i\,\sin(2\ln\pi).
$$

Al sustituir en la expresión anterior se obtiene la forma pedida:

$$
\pi^{-1+2i}=\frac{\cos(2\ln\pi)}{\pi}+i\,\frac{\sin(2\ln\pi)}{\pi}.
$$

Por tanto, $a=\dfrac{\cos(2\ln\pi)}{\pi}$ y $b=\dfrac{\sin(2\ln\pi)}{\pi}$.

## Observaciones

La potencia se interpreta como el valor principal, que es el único definido para una base real positiva. El módulo del resultado es $1/\pi$ y su argumento es $2\ln\pi$; numéricamente, $\pi^{-1+2i}\approx -0.20955+0.23958\,i$.
