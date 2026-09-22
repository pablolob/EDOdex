
## Enunciado

En cada uno de los problemas 1 a 8, halle la solución general de la ecuación diferencial dada.

8. $y^{(iv)} + y''' = \sin 2x$

## Solución

$$
y = C_1 + C_2 x + C_3 x^2 + C_4 e^{-x} + \frac{1}{20}\sin 2x + \frac{1}{40}\cos 2x.
$$

## Resolución

La ecuación es **lineal**, de **cuarto orden**, **no homogénea** y con coeficientes constantes. Su solución general tiene la estructura $y = y_c + y_p$, donde $y_c$ resuelve la ecuación homogénea asociada e $y_p$ es una solución particular.

**Solución complementaria.** La ecuación homogénea es $y^{(iv)} + y''' = 0$, con ecuación característica

$$
r^4 + r^3 = r^3(r+1) = 0.
$$

Las raíces son $r = 0$ (triple) y $r = -1$ (simple). La raíz triple genera $1$, $x$ y $x^2$; la raíz simple aporta $e^{-x}$. Por tanto,

$$
y_c = C_1 + C_2 x + C_3 x^2 + C_4 e^{-x}.
$$

**Solución particular.** El término no homogéneo es $g(x) = \sin 2x$. Se aplica el método de **coeficientes indeterminados** por **superposición**. Como $\sin 2x$ y $\cos 2x$ no figuran en $y_c$, la forma de prueba no requiere modificación:

$$
Y = A\sin 2x + B\cos 2x.
$$

Sus derivadas sucesivas son

$$
\begin{aligned}
Y' &= 2A\cos 2x - 2B\sin 2x, \\
Y'' &= -4A\sin 2x - 4B\cos 2x, \\
Y''' &= -8A\cos 2x + 8B\sin 2x, \\
Y^{(iv)} &= 16A\sin 2x + 16B\cos 2x.
\end{aligned}
$$

Al sustituir en el miembro izquierdo,

$$
Y^{(iv)} + Y''' = (16A + 8B)\sin 2x + (-8A + 16B)\cos 2x.
$$

La igualdad $Y^{(iv)} + Y''' = \sin 2x$ se satisface igualando coeficientes:

$$
16A + 8B = 1, \qquad -8A + 16B = 0.
$$

De la segunda ecuación $A = 2B$. Al sustituir en la primera resulta $40B = 1$, de donde $B = \tfrac{1}{40}$ y $A = \tfrac{1}{20}$. Así,

$$
y_p = \frac{1}{20}\sin 2x + \frac{1}{40}\cos 2x.
$$

**Solución general.** Al reunir ambas partes,

$$
y = C_1 + C_2 x + C_3 x^2 + C_4 e^{-x} + \frac{1}{20}\sin 2x + \frac{1}{40}\cos 2x.
$$

Los coeficientes de la ecuación son constantes y $g(x)$ está definida en todo $\mathbb{R}$, de modo que la solución general es válida en el intervalo $(-\infty, \infty)$.

## Observaciones

La raíz triple $r=0$ genera la parte polinómica $C_1 + C_2 x + C_3 x^2$ de $y_c$. El término no homogéneo $\sin 2x$ corresponde a las raíces $\pm 2i$, que no son raíces del polinomio auxiliar; por eso la forma de prueba no necesita la regla de modificación.

El resultado puede escribirse de forma equivalente como $y_p = \tfrac{1}{40}(2\sin 2x + \cos 2x)$.

### Método alternativo: aniquiladores

El operador $D^2 + 4$ aniquila a $\sin 2x$. Al aplicarlo a la ecuación $(D^4 + D^3)y = \sin 2x$ se obtiene la homogénea

$$
(D^2 + 4)D^3(D+1)y = 0,
$$

cuya ecuación característica $r^3(r+1)(r^2+4) = 0$ tiene raíces $r=0$ (triple), $r=-1$ y $r=\pm 2i$. La forma de prueba es $C_1 + C_2 x + C_3 x^2 + C_4 e^{-x} + A\sin 2x + B\cos 2x$; tras descartar las funciones que ya aparecen en $y_c$ queda la misma $y_p$ empleada arriba.
