
## Enunciado

En cada uno de los problemas 1 a 6, exprese el número complejo dado en la forma

$$R(\cos\theta + i\sin\theta) = Re^{i\theta}.$$

Observe que $e^{i(\theta + 2m\pi)} = e^{i\theta}$ si $m$ es un entero.

5. $\sqrt{3} - i$

## Solución

El número complejo $\sqrt{3}-i$ tiene módulo $R=2$ y argumento principal $\theta=-\pi/6$. Su forma polar y exponencial es

$$
\sqrt{3}-i = 2\left(\cos\left(-\frac{\pi}{6}\right)+i\sin\left(-\frac{\pi}{6}\right)\right) = 2e^{-i\pi/6}.
$$

De manera general, el argumento queda determinado módulo $2\pi$:

$$
\sqrt{3}-i = 2e^{i\left(-\frac{\pi}{6}+2m\pi\right)},\qquad m\in\mathbb{Z}.
$$

## Resolución

El número complejo $z=\sqrt{3}-i$ tiene parte real $a=\sqrt{3}$ y parte imaginaria $b=-1$. El módulo es

$$
R=|z|=\sqrt{a^2+b^2}=\sqrt{(\sqrt{3})^2+(-1)^2}=\sqrt{3+1}=2.
$$

El argumento $\theta$ satisface

$$
\cos\theta=\frac{a}{R}=\frac{\sqrt{3}}{2},\qquad \sin\theta=\frac{b}{R}=-\frac{1}{2}.
$$

El único ángulo en $[0,2\pi)$ con esos valores es $\theta=11\pi/6$, cuyo valor principal es $-\pi/6$. Por tanto, la forma pedida es

$$
z=R(\cos\theta+i\sin\theta)=2\left(\cos\left(-\frac{\pi}{6}\right)+i\sin\left(-\frac{\pi}{6}\right)\right)=2e^{-i\pi/6}.
$$

Como $e^{i(\theta+2m\pi)}=e^{i\theta}$ para todo entero $m$, la familia de argumentos $\theta=-\pi/6+2m\pi$ representa al mismo número:

$$
z=2e^{i\left(-\frac{\pi}{6}+2m\pi\right)},\qquad m\in\mathbb{Z}.
$$

## Observaciones

El argumento de un número complejo no nulo solo está definido módulo $2\pi$. Por eso la forma polar admite infinitas expresiones equivalentes, una por cada entero $m$. El argumento principal se toma en $(-\pi,\pi]$ y aquí vale $-\pi/6$; la elección $11\pi/6$ en $[0,2\pi)$ describe el mismo punto del plano.

Esta forma exponencial es la que se emplea en la sección para escribir las raíces complejas del polinomio auxiliar de una ecuación lineal homogénea con coeficientes constantes.
