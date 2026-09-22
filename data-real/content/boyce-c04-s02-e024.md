
## Enunciado

En cada uno de los problemas 23 a 26, halle la solución del problema con valor inicial dado.

24. $y^{iv} - y = 0; \quad y(0) = 1, \quad y'(0) = 0, \quad y''(0) = -1, \quad y'''(0) = 0$

## Solución

$$
y(x) = \cos x,
$$

válida para todo $x \in \mathbb{R}$.

## Resolución

La ecuación

$$
y^{iv} - y = 0
$$

es **lineal homogénea de cuarto orden con coeficientes constantes**. Se propone $y = e^{rx}$, lo que conduce a la **ecuación característica**

$$
r^4 - 1 = 0.
$$

Se factoriza la diferencia de cuadrados:

$$
r^4 - 1 = (r^2 - 1)(r^2 + 1) = (r - 1)(r + 1)(r^2 + 1) = 0.
$$

Las raíces son las reales simples $r = 1$ y $r = -1$, junto con el par complejo conjugado $r = \pm i$.

Cada raíz real simple aporta una exponencial y el par complejo conjugado $\lambda \pm i\mu$, con $\lambda = 0$ y $\mu = 1$, aporta $e^{0\cdot x}\cos x$ y $e^{0\cdot x}\sin x$. Las cuatro funciones

$$
e^{x}, \quad e^{-x}, \quad \cos x, \quad \sin x
$$

son linealmente independientes en $\mathbb{R}$ y forman un conjunto fundamental de soluciones. La solución general es

$$
y(x) = C_1 e^{x} + C_2 e^{-x} + C_3\cos x + C_4\sin x.
$$

Al derivar sucesivamente,

$$
\begin{aligned}
y'(x) &= C_1 e^{x} - C_2 e^{-x} - C_3\sin x + C_4\cos x, \\
y''(x) &= C_1 e^{x} + C_2 e^{-x} - C_3\cos x - C_4\sin x, \\
y'''(x) &= C_1 e^{x} - C_2 e^{-x} + C_3\sin x - C_4\cos x.
\end{aligned}
$$

Las condiciones iniciales dan el sistema

$$
\begin{aligned}
y(0) &= C_1 + C_2 + C_3 = 1, \\
y'(0) &= C_1 - C_2 + C_4 = 0, \\
y''(0) &= C_1 + C_2 - C_3 = -1, \\
y'''(0) &= C_1 - C_2 - C_4 = 0.
\end{aligned}
$$

Al sumar la primera y la tercera ecuación se obtiene $2(C_1 + C_2) = 0$, es decir $C_1 + C_2 = 0$ y, sustituyendo, $C_3 = 1$. Al sumar la segunda y la cuarta resulta $2(C_1 - C_2) = 0$, de modo que $C_1 = C_2$. Con $C_1 + C_2 = 0$ se concluye $C_1 = C_2 = 0$ y, de la segunda ecuación, $C_4 = 0$.

La solución del problema con valor inicial es

$$
y(x) = \cos x.
$$

## Observaciones

- La solución carece de términos exponenciales porque las condiciones iniciales anulan las constantes $C_1$ y $C_2$; el resultado es puramente oscilatorio.
- La ecuación es lineal homogénea y no se divide por ningún factor que pueda anularse. No hay soluciones singulares ni perdidas, y el número de constantes arbitrarias coincide con el orden de la ecuación.
- La solución está definida en todo $\mathbb{R}$, pues las exponenciales y las funciones trigonométricas son continuas en todo el eje real.
