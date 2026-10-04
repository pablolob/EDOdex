
## Enunciado

En cada uno de los problemas 7 a 16, halle la solución general de la ecuación diferencial dada.

12. $4y'' + 9y = 0$

## Solución

$$
y(x) = C_1 \cos\!\left(\frac{3x}{2}\right) + C_2 \sin\!\left(\frac{3x}{2}\right),
$$

donde $C_1$ y $C_2$ son constantes arbitrarias.

## Resolución

La ecuación es **lineal**, **homogénea**, de **coeficientes constantes** y de
segundo orden. Se ensaya una solución de la forma $y = e^{rx}$. Al sustituir en
$4y'' + 9y = 0$,

$$
\left(4r^2 + 9\right)e^{rx} = 0,
$$

y como $e^{rx} \neq 0$ para todo $x$ real, se obtiene la **ecuación
característica**

$$
4r^2 + 9 = 0.
$$

Al despejar,

$$
r^2 = -\frac{9}{4}, \qquad r = \pm \frac{3}{2}i.
$$

Las raíces forman un par complejo conjugado $\alpha \pm \beta i$ con parte real
$\alpha = 0$ y parte imaginaria $\beta = \frac{3}{2}$. Al aplicar la fórmula de
Euler, las soluciones complejas

$$
e^{(3/2)ix} = \cos\!\left(\frac{3x}{2}\right) + i\sin\!\left(\frac{3x}{2}\right),
\qquad
e^{-(3/2)ix} = \cos\!\left(\frac{3x}{2}\right) - i\sin\!\left(\frac{3x}{2}\right)
$$

dan lugar a las dos soluciones reales

$$
y_1(x) = \cos\!\left(\frac{3x}{2}\right),
\qquad
y_2(x) = \sin\!\left(\frac{3x}{2}\right).
$$

Estas funciones son linealmente independientes, pues su wronskiano es

$$
W(y_1, y_2)(x)
= \begin{vmatrix}
\cos\!\left(\frac{3x}{2}\right) & \sin\!\left(\frac{3x}{2}\right) \\
-\frac{3}{2}\sin\!\left(\frac{3x}{2}\right) & \frac{3}{2}\cos\!\left(\frac{3x}{2}\right)
\end{vmatrix}
= \frac{3}{2} \neq 0.
$$

Por tanto, $\{y_1, y_2\}$ es un conjunto fundamental de soluciones y la solución
general es

$$
y(x) = C_1 \cos\!\left(\frac{3x}{2}\right) + C_2 \sin\!\left(\frac{3x}{2}\right),
$$

con $C_1$ y $C_2$ constantes arbitrarias.

## Observaciones

Como $\alpha = 0$, el factor exponencial $e^{\alpha x}$ se reduce a $1$: la
solución es puramente oscilatoria, sin crecimiento ni decaimiento. El factor
trigonométrico tiene frecuencia angular $\beta = \frac{3}{2}$ y periodo
fundamental $T = \frac{2\pi}{\beta} = \frac{4\pi}{3}$.

La solución está definida para todo $x \in \mathbb{R}$, ya que el seno y el
coseno carecen de singularidades. Al ser la ecuación homogénea, no hay
soluciones singulares asociadas a un término no homogéneo.
