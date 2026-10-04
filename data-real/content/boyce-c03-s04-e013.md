
## Enunciado

En cada uno de los problemas 7 a 16, halle la solución general de la ecuación diferencial dada.

13. $y'' + 2y' + 1.25y = 0$

## Solución

$$
y(x) = e^{-x}\left(C_1 \cos\frac{x}{2} + C_2 \sin\frac{x}{2}\right),
$$

donde $C_1$ y $C_2$ son constantes arbitrarias.

## Resolución

La ecuación es lineal, homogénea y de coeficientes constantes. Se ensaya la solución $y = e^{rx}$; al sustituir, el factor $e^{rx}$ no se anula y la ecuación se reduce a la **ecuación característica**

$$
r^2 + 2r + 1.25 = 0.
$$

Conviene escribir el término constante como fracción, $1.25 = 5/4$, para operar con exactitud:

$$
r^2 + 2r + \frac{5}{4} = 0.
$$

Las raíces se obtienen con la fórmula cuadrática:

$$
\begin{aligned}
r &= \frac{-2 \pm \sqrt{4 - 4(1)(5/4)}}{2} \\
  &= \frac{-2 \pm \sqrt{4 - 5}}{2} \\
  &= \frac{-2 \pm \sqrt{-1}}{2} \\
  &= \frac{-2 \pm i}{2} \\
  &= -1 \pm \frac{i}{2}.
\end{aligned}
$$

Como el discriminante es negativo, las raíces forman un par complejo conjugado $\alpha \pm i\beta$ con $\alpha = -1$ y $\beta = 1/2$. La solución general de una ecuación homogénea con coeficientes constantes y raíces complejas es

$$
y(x) = e^{\alpha x}\left(C_1 \cos(\beta x) + C_2 \sin(\beta x)\right).
$$

Con $\alpha = -1$ y $\beta = 1/2$ resulta

$$
y(x) = e^{-x}\left(C_1 \cos\frac{x}{2} + C_2 \sin\frac{x}{2}\right).
$$

## Observaciones

Las soluciones reales $y_1 = e^{-x}\cos(x/2)$ y $y_2 = e^{-x}\sin(x/2)$ son linealmente independientes, por lo que la familia anterior es la solución general. La parte real $\alpha = -1$ es negativa, de modo que la amplitud decae como $e^{-x}$; el factor oscilatorio tiene frecuencia angular $1/2$, es decir, periodo $4\pi$. Por tratarse de una ecuación con coeficientes constantes, toda solución está definida para $x \in \mathbb{R}$.
