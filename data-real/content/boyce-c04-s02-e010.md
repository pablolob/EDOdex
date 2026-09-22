
## Enunciado

Observe que $e^{i(\theta + 2m\pi)} = e^{i\theta}$ si $m$ es un entero y que

$$[e^{i(\theta + 2m\pi)}]^{1/n} = e^{i(\theta + 2m\pi)/n} = \cos\left(\frac{\theta}{n} + \frac{2m\pi}{n}\right) + i\sin\left(\frac{\theta}{n} + \frac{2m\pi}{n}\right).$$

En cada uno de los problemas 7 a 10 aplique estos hechos para determinar la raíz indicada del número complejo dado.

10. $[2(\cos \pi/3 + i\sin \pi/3)]^{1/2}$

## Solución

$$
[2(\cos \tfrac{\pi}{3} + i\sin \tfrac{\pi}{3})]^{1/2}
= \pm\left(\frac{\sqrt{6}}{2} + \frac{\sqrt{2}}{2}i\right).
$$

## Resolución

El número complejo dado es

$$
z = 2\left(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right) = 2\,e^{i\pi/3},
$$

con módulo $R = 2$ y argumento $\theta = \pi/3$. Como $e^{i(\theta + 2m\pi)} = e^{i\theta}$, también $z = 2\,e^{i(\pi/3 + 2m\pi)}$ para todo entero $m$.

Se aplica la fórmula del enunciado con $n = 2$. La raíz cuadrada del módulo es $\sqrt{2}$ y el argumento se divide entre $2$:

$$
z^{1/2} = \sqrt{2}\,e^{i(\pi/3 + 2m\pi)/2}
= \sqrt{2}\left[\cos\left(\frac{\pi}{6} + m\pi\right) + i\sin\left(\frac{\pi}{6} + m\pi\right)\right].
$$

Los valores $m = 0$ y $m = 1$ producen raíces distintas. Los enteros que difieren en $2$ dan el mismo punto, porque $e^{i(\pi/6 + (m+2)\pi)} = e^{i(\pi/6 + m\pi)}e^{2\pi i}$; por tanto solo hay dos raíces cuadradas.

Para $m = 0$:

$$
\sqrt{2}\left(\cos\frac{\pi}{6} + i\sin\frac{\pi}{6}\right)
= \sqrt{2}\left(\frac{\sqrt{3}}{2} + \frac{i}{2}\right)
= \frac{\sqrt{6}}{2} + \frac{\sqrt{2}}{2}i.
$$

Para $m = 1$:

$$
\sqrt{2}\left(\cos\frac{7\pi}{6} + i\sin\frac{7\pi}{6}\right)
= \sqrt{2}\left(-\frac{\sqrt{3}}{2} - \frac{i}{2}\right)
= -\frac{\sqrt{6}}{2} - \frac{\sqrt{2}}{2}i.
$$

Comprobación: el cuadrado de $\dfrac{\sqrt{6}}{2} + \dfrac{\sqrt{2}}{2}i$ es

$$
\left(\frac{\sqrt{6}}{2}\right)^2 - \left(\frac{\sqrt{2}}{2}\right)^2
+ 2\cdot\frac{\sqrt{6}}{2}\cdot\frac{\sqrt{2}}{2}\,i
= \frac{3}{2} - \frac{1}{2} + \frac{\sqrt{12}}{2}i
= 1 + \sqrt{3}\,i,
$$

que coincide con $2(\cos\pi/3 + i\sin\pi/3) = 2\left(\tfrac{1}{2} + \tfrac{\sqrt{3}}{2}i\right) = 1 + \sqrt{3}\,i$.

## Observaciones

Las dos raíces son opuestas entre sí. Geométricamente corresponden a los dos puntos del círculo de radio $\sqrt{2}$ separados por un ángulo $\pi$; el valor $m = 0$ es la raíz principal.

El resultado también puede comprobarse operando en forma binómica: al escribir $2(\cos\pi/3 + i\sin\pi/3) = 1 + \sqrt{3}\,i$ y resolver $(a+bi)^2 = 1 + \sqrt{3}\,i$ se recuperan las mismas dos raíces.
