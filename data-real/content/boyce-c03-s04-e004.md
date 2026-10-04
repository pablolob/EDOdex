
## Enunciado

En cada uno de los problemas 1 a 6, exprese el número complejo dado en la forma $a + ib$.

4. $e^{2-(\pi/2)i}$

## Solución

El número complejo es

$$
e^{2-\frac{\pi}{2}i}=0-e^{2}i,
$$

de modo que $a=0$ y $b=-e^{2}$.

## Resolución

Se separa el exponente en su parte real y su parte imaginaria y se aplica la **fórmula de Euler**, $e^{i\theta}=\cos\theta+i\sin\theta$:

$$
\begin{aligned}
e^{2-\frac{\pi}{2}i}
&= e^{2}\,e^{-\frac{\pi}{2}i} \\
&= e^{2}\left(\cos\left(-\frac{\pi}{2}\right)+i\sin\left(-\frac{\pi}{2}\right)\right) \\
&= e^{2}\,(0-i) \\
&= -e^{2}i.
\end{aligned}
$$

Al comparar con la forma $a+ib$ se identifica la parte real $a=0$ y la parte imaginaria $b=-e^{2}$.

## Observaciones

El argumento se interpreta en radianes, según la convención de la fórmula de Euler. El factor $e^{2}$ es real y positivo, por lo que solo modifica el módulo; el argumento $-\pi/2$ sitúa el número sobre el semieje imaginario negativo. La descomposición $a+ib$ de un número complejo es única.
