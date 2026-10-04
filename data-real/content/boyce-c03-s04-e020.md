
## Enunciado

En cada uno de los problemas 17 a 22, resuelva el problema con valor inicial dado.

20. $y'' + y = 0, \quad y(\pi/3) = 2, \quad y'(\pi/3) = -4$

## Solución

La solución del problema con valor inicial es

$$
y(x) = \left(1 + 2\sqrt{3}\right)\cos x + \left(\sqrt{3} - 2\right)\sin x, \qquad x \in \mathbb{R}.
$$

## Resolución

La ecuación es **lineal**, **homogénea**, de **segundo orden** y con **coeficientes constantes**. Se ensaya $y = e^{rx}$; al sustituir, el factor $e^{rx}$ no se anula y se obtiene la **ecuación característica**

$$
r^2 + 1 = 0.
$$

Sus raíces son

$$
r^2 = -1 \quad \Longrightarrow \quad r = \pm i.
$$

Forman un par complejo conjugado $\alpha \pm i\beta$ con $\alpha = 0$ y $\beta = 1$. La solución general es

$$
y(x) = C_1\cos x + C_2\sin x,
$$

donde $C_1$ y $C_2$ son constantes arbitrarias. Su derivada es

$$
y'(x) = -C_1\sin x + C_2\cos x.
$$

Se aplican las condiciones iniciales en $x = \pi/3$, donde $\cos(\pi/3) = 1/2$ y $\sin(\pi/3) = \sqrt{3}/2$. De $y(\pi/3) = 2$ resulta

$$
\frac{C_1}{2} + \frac{\sqrt{3}\,C_2}{2} = 2
\quad \Longrightarrow \quad
C_1 + \sqrt{3}\,C_2 = 4.
$$

De $y'(\pi/3) = -4$ resulta

$$
-\frac{\sqrt{3}\,C_1}{2} + \frac{C_2}{2} = -4
\quad \Longrightarrow \quad
-\sqrt{3}\,C_1 + C_2 = -8.
$$

Se resuelve el sistema lineal. De la primera ecuación, $C_1 = 4 - \sqrt{3}\,C_2$. Al sustituir en la segunda,

$$
\begin{aligned}
-\sqrt{3}\left(4 - \sqrt{3}\,C_2\right) + C_2 &= -8, \\
-4\sqrt{3} + 3C_2 + C_2 &= -8, \\
4C_2 &= 4\sqrt{3} - 8,
\end{aligned}
$$

de modo que $C_2 = \sqrt{3} - 2$. Entonces

$$
C_1 = 4 - \sqrt{3}\left(\sqrt{3} - 2\right) = 4 - 3 + 2\sqrt{3} = 1 + 2\sqrt{3}.
$$

Por tanto, la solución del problema con valor inicial es

$$
y(x) = \left(1 + 2\sqrt{3}\right)\cos x + \left(\sqrt{3} - 2\right)\sin x.
$$

La comprobación confirma las condiciones: $y(\pi/3) = \frac{1}{2}\left(1 + 2\sqrt{3}\right) + \frac{\sqrt{3}}{2}\left(\sqrt{3} - 2\right) = \frac{1 + 2\sqrt{3} + 3 - 2\sqrt{3}}{2} = 2$, y $y'(\pi/3) = -\frac{\sqrt{3}}{2}\left(1 + 2\sqrt{3}\right) + \frac{1}{2}\left(\sqrt{3} - 2\right) = \frac{-\sqrt{3} - 6 + \sqrt{3} - 2}{2} = -4$.

## Observaciones

La parte real de las raíces es nula, de modo que no hay amortiguamiento: la solución es un movimiento armónico simple de periodo $2\pi$ y está acotada. Está definida para todo $x \in \mathbb{R}$.

Al ser la ecuación lineal homogénea con coeficientes constantes y raíces distintas, el conjunto fundamental $\{\cos x, \sin x\}$ cubre todas las soluciones: no hay soluciones singulares ni pérdida de soluciones al aplicar las condiciones iniciales.

### Método alternativo: base trasladada al punto inicial

Como $y'' + y = 0$ tiene por soluciones a $\cos(x - x_0)$ y $\sin(x - x_0)$ para cualquier $x_0$, los datos en $x_0 = \pi/3$ dan directamente

$$
y(x) = 2\cos\!\left(x - \frac{\pi}{3}\right) - 4\sin\!\left(x - \frac{\pi}{3}\right).
$$

Al desarrollar con las fórmulas de adición se recupera la misma expresión obtenida antes.
