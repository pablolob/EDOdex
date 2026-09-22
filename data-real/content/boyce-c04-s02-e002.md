
## Enunciado

En cada uno de los problemas 1 a 6, exprese el número complejo dado en la forma

$$R(\cos\theta + i\sin\theta) = Re^{i\theta}.$$

Observe que $e^{i(\theta + 2m\pi)} = e^{i\theta}$ si $m$ es un entero.

2. $-1 + \sqrt{3}i$

## Solución

$$
-1+\sqrt{3}\,i = 2\left(\cos\frac{2\pi}{3}+i\sin\frac{2\pi}{3}\right) = 2e^{2\pi i/3}.
$$

La forma polar también se escribe como $2e^{i(2\pi/3+2m\pi)}$ para todo entero $m$.

## Resolución

El número complejo es $z=-1+\sqrt{3}\,i$, con parte real $a=-1$ y parte imaginaria $b=\sqrt{3}$.

El módulo es

$$
R=|z|=\sqrt{a^2+b^2}=\sqrt{(-1)^2+(\sqrt{3})^2}=\sqrt{1+3}=2.
$$

El argumento $\theta$ satisface

$$
\cos\theta=\frac{a}{R}=-\frac{1}{2}, \qquad \sin\theta=\frac{b}{R}=\frac{\sqrt{3}}{2}.
$$

El punto $(-1,\sqrt{3})$ está en el segundo cuadrante. Por tanto, el argumento no es el ángulo del primer cuadrante $\pi/3$, sino

$$
\theta=\pi-\frac{\pi}{3}=\frac{2\pi}{3}.
$$

Con $R=2$ y $\theta=2\pi/3$ se obtiene

$$
z=2\left(\cos\frac{2\pi}{3}+i\sin\frac{2\pi}{3}\right)=2e^{2\pi i/3}.
$$

Como $e^{i(\theta+2m\pi)}=e^{i\theta}$ para todo entero $m$, también se cumple $z=2e^{i(2\pi/3+2m\pi)}$.

## Observaciones

La forma polar no es única: cualquier argumento $\theta+2m\pi$, con $m\in\mathbb{Z}$, representa el mismo número. El argumento principal es $2\pi/3$, que pertenece a $(-\pi,\pi]$.

El módulo es siempre no negativo; en este caso $R=2>0$. El signo de la parte real fija el cuadrante y, con él, el argumento: como $a<0$ y $b>0$, el ángulo es $\pi-\pi/3=2\pi/3$ y no $\arccos(-1/2)=\pi/3$.
