
## Enunciado

Observe que $e^{i(\theta + 2m\pi)} = e^{i\theta}$ si $m$ es un entero y que

$$[e^{i(\theta + 2m\pi)}]^{1/n} = e^{i(\theta + 2m\pi)/n} = \cos\left(\frac{\theta}{n} + \frac{2m\pi}{n}\right) + i\sin\left(\frac{\theta}{n} + \frac{2m\pi}{n}\right).$$

En cada uno de los problemas 7 a 10 aplique estos hechos para determinar la raíz indicada del número complejo dado.

8. $(1 - i)^{1/2}$

## Solución

El número $1-i$ tiene módulo $R=\sqrt{2}$ y argumento principal $\theta=-\pi/4$, de modo que $1-i=\sqrt{2}\,e^{i(-\pi/4+2m\pi)}$ con $m\in\mathbb{Z}$. Aplicando la fórmula de la raíz $n$-ésima con $n=2$ se obtienen las dos raíces cuadradas

$$
(1-i)^{1/2} = 2^{1/4}e^{i\left(-\frac{\pi}{8}+m\pi\right)},\qquad m\in\mathbb{Z}.
$$

Solo $m=0$ y $m=1$ dan valores distintos. En forma cartesiana exacta,

$$
(1-i)^{1/2} = \pm\,2^{-3/4}\left(\sqrt{2+\sqrt{2}} - i\sqrt{2-\sqrt{2}}\right).
$$

## Resolución

Se escribe primero el radicando en forma exponencial. Para $z=1-i$, el módulo es

$$
R=|z|=\sqrt{1^2+(-1)^2}=\sqrt{2},
$$

y el argumento principal $\theta$ satisface

$$
\cos\theta=\frac{1}{\sqrt{2}},\qquad \sin\theta=-\frac{1}{\sqrt{2}},
$$

por lo que $\theta=-\pi/4$. Como $e^{i(\theta+2m\pi)}=e^{i\theta}$ para todo entero $m$, el radicando admite la familia de argumentos $-\pi/4+2m\pi$:

$$
1-i=\sqrt{2}\,e^{i\left(-\frac{\pi}{4}+2m\pi\right)},\qquad m\in\mathbb{Z}.
$$

Al elevar a $1/2$ se aplica la fórmula del enunciado. La potencia del módulo es $(\sqrt{2})^{1/2}=2^{1/4}$ y el argumento se divide entre $2$:

$$
(1-i)^{1/2} = (\sqrt{2})^{1/2}\,e^{i\left(-\frac{\pi}{4}+2m\pi\right)/2} = 2^{1/4}e^{i\left(-\frac{\pi}{8}+m\pi\right)},\qquad m\in\mathbb{Z}.
$$

El factor $e^{im\pi}$ toma solo dos valores, $1$ y $-1$, según la paridad de $m$. Por tanto hay exactamente dos raíces cuadradas distintas:

$$
\begin{aligned}
r_1 &= 2^{1/4}e^{-i\pi/8} = 2^{1/4}\left(\cos\frac{\pi}{8}-i\sin\frac{\pi}{8}\right),\\
r_2 &= 2^{1/4}e^{i7\pi/8} = 2^{1/4}\left(\cos\frac{7\pi}{8}+i\sin\frac{7\pi}{8}\right).
\end{aligned}
$$

Las identidades de ángulo mitad dan $\cos(\pi/8)=\dfrac{\sqrt{2+\sqrt{2}}}{2}$ y $\sin(\pi/8)=\dfrac{\sqrt{2-\sqrt{2}}}{2}$. Sustituyendo,

$$
r_1 = 2^{-3/4}\left(\sqrt{2+\sqrt{2}} - i\sqrt{2-\sqrt{2}}\right),\qquad r_2 = -r_1.
$$

Comprobación: el cuadrado de $r_1$ tiene módulo $(2^{1/4})^2=\sqrt{2}$ y argumento $2(-\pi/8)=-\pi/4$, luego $r_1^2=\sqrt{2}\,e^{-i\pi/4}=1-i$, que es el radicando.

## Observaciones

Las dos raíces cuadradas son opuestas entre sí y equidistan del origen sobre la circunferencia de radio $2^{1/4}$. Los valores $m=0$ y $m=1$ bastan porque $e^{i(-\pi/8+m\pi)}$ se repite cada dos enteros.

Este procedimiento es el que se emplea en la sección para obtener las raíces complejas del polinomio auxiliar de una ecuación lineal homogénea con coeficientes constantes.
