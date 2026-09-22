
## Enunciado

En cada uno de los problemas 1 a 6, exprese el número complejo dado en la forma

$$R(\cos\theta + i\sin\theta) = Re^{i\theta}.$$

Observe que $e^{i(\theta + 2m\pi)} = e^{i\theta}$ si $m$ es un entero.

6. $-1 - i$

## Solución

El número complejo $-1-i$ tiene módulo $R=\sqrt{2}$ y argumento principal $\theta=-3\pi/4$. Su forma polar y exponencial es

$$
-1-i = \sqrt{2}\left(\cos\left(-\frac{3\pi}{4}\right)+i\sin\left(-\frac{3\pi}{4}\right)\right) = \sqrt{2}\,e^{-i3\pi/4}.
$$

De manera general, el argumento queda determinado módulo $2\pi$:

$$
-1-i = \sqrt{2}\,e^{i\left(-\frac{3\pi}{4}+2m\pi\right)},\qquad m\in\mathbb{Z}.
$$

## Resolución

El número complejo $z=-1-i$ tiene parte real $a=-1$ y parte imaginaria $b=-1$. El módulo es

$$
R=|z|=\sqrt{a^2+b^2}=\sqrt{(-1)^2+(-1)^2}=\sqrt{2}.
$$

El argumento $\theta$ satisface

$$
\cos\theta=\frac{a}{R}=-\frac{1}{\sqrt{2}},\qquad \sin\theta=\frac{b}{R}=-\frac{1}{\sqrt{2}}.
$$

Ambas componentes son negativas, de modo que el punto $(-1,-1)$ está en el tercer cuadrante. El único ángulo en $[0,2\pi)$ con esos valores es $\theta=5\pi/4$, cuyo valor principal es $-3\pi/4$. Por tanto, la forma pedida es

$$
z=R(\cos\theta+i\sin\theta)=\sqrt{2}\left(\cos\left(-\frac{3\pi}{4}\right)+i\sin\left(-\frac{3\pi}{4}\right)\right)=\sqrt{2}\,e^{-i3\pi/4}.
$$

Como $e^{i(\theta+2m\pi)}=e^{i\theta}$ para todo entero $m$, la familia de argumentos $\theta=-3\pi/4+2m\pi$ representa al mismo número:

$$
z=\sqrt{2}\,e^{i\left(-\frac{3\pi}{4}+2m\pi\right)},\qquad m\in\mathbb{Z}.
$$

## Observaciones

El argumento de un número complejo no nulo solo está definido módulo $2\pi$. Por eso la forma polar admite infinitas expresiones equivalentes, una por cada entero $m$. El argumento principal se toma en $(-\pi,\pi]$ y aquí vale $-3\pi/4$; la elección $5\pi/4$ en $[0,2\pi)$ describe el mismo punto del plano.

Como $a<0$ y $b<0$, el punto está en el tercer cuadrante y el argumento no coincide con $\arctan(b/a)=\arctan 1=\pi/4$, sino con $\pi/4-\pi=-3\pi/4$. Este es el caso que suele inducir a error al usar la función arcotangente sin corregir el cuadrante.

Esta forma exponencial es la que se emplea en la sección para escribir las raíces complejas del polinomio auxiliar de una ecuación lineal homogénea con coeficientes constantes.
