
## Enunciado

En cada uno de los problemas 1 a 6, determine los intervalos en los que se tenga la seguridad de que existen soluciones.

5. $(x - 1)y^{\mathrm{iv}} + (x + 1)y'' + (\tan x)y = 0$

## Solución

La ecuación es **lineal** y **homogénea** de **cuarto orden**. Sus coeficientes en forma estándar son continuos salvo en $x = 1$ y en $x = \dfrac{\pi}{2} + k\pi$, con $k \in \mathbb{Z}$. Por tanto, existen soluciones en cada uno de los intervalos

$$
\ldots,\ \left(-\frac{3\pi}{2}, -\frac{\pi}{2}\right),\ \left(-\frac{\pi}{2}, 1\right),\ \left(1, \frac{\pi}{2}\right),\ \left(\frac{\pi}{2}, \frac{3\pi}{2}\right),\ \left(\frac{3\pi}{2}, \frac{5\pi}{2}\right),\ \ldots
$$

## Resolución

Se divide entre el coeficiente de $y^{\mathrm{iv}}$ para escribir la ecuación en forma estándar:

$$
y^{\mathrm{iv}} + \frac{x + 1}{x - 1}\,y'' + \frac{\tan x}{x - 1}\,y = 0.
$$

El teorema de existencia y unicidad para ecuaciones lineales de orden $n$ garantiza que, si los coeficientes de la forma estándar son continuos en un intervalo abierto $I$ que contiene a $x_0$, entonces el problema de valor inicial con condiciones en $x_0$ tiene una única solución en todo $I$. Basta, entonces, con localizar los puntos donde los coeficientes dejan de ser continuos.

El coeficiente $\dfrac{x + 1}{x - 1}$ es discontinuo en $x = 1$, donde se anula el denominador. El coeficiente $\dfrac{\tan x}{x - 1}$ lo es en $x = 1$ y también donde $\cos x = 0$, es decir, en $x = \dfrac{\pi}{2} + k\pi$ con $k \in \mathbb{Z}$.

El conjunto de puntos singulares es, por tanto,

$$
S = \{1\} \cup \left\{\frac{\pi}{2} + k\pi : k \in \mathbb{Z}\right\}.
$$

Fuera de $S$ los coeficientes son continuos. Los intervalos más grandes en los que se asegura la existencia de soluciones son las componentes conexas de $\mathbb{R} \setminus S$. Como $\dfrac{\pi}{2} \approx 1.571$, el punto $x = 1$ queda entre $-\dfrac{\pi}{2}$ y $\dfrac{\pi}{2}$, de modo que el intervalo $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$ se divide en $\left(-\dfrac{\pi}{2}, 1\right)$ y $\left(1, \dfrac{\pi}{2}\right)$. Los restantes intervalos son $\left(\dfrac{\pi}{2} + k\pi, \dfrac{\pi}{2} + (k+1)\pi\right)$ para $k \ge 0$ y para $k \le -2$.

## Observaciones

Los puntos singulares son los ceros de $\cos x$ y el punto $x = 1$, que es donde el coeficiente principal se anula. En cada intervalo de la solución el problema de valor inicial tiene solución única, cualquiera que sea el punto $x_0$ elegido dentro de él. El teorema no dice nada sobre el comportamiento en los extremos, que quedan excluidos por ser intervalos abiertos.
