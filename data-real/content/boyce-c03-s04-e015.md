
## Enunciado

En cada uno de los problemas 7 a 16, halle la solución general de la ecuación diferencial dada.

15. $y'' + y' + 1.25y = 0$

## Solución

$$
y(x) = e^{-x/2}\left(C_1 \cos x + C_2 \sin x\right),
$$

donde $C_1$ y $C_2$ son constantes arbitrarias.

## Resolución

La ecuación es lineal, homogénea y de coeficientes constantes. Se ensaya la solución $y = e^{rx}$; al sustituir, el factor $e^{rx}$ no se anula y la ecuación se reduce a la **ecuación característica**

$$
r^2 + r + 1.25 = 0.
$$

Conviene escribir el término constante como fracción, $1.25 = 5/4$, para operar con exactitud:

$$
r^2 + r + \frac{5}{4} = 0.
$$

Las raíces se obtienen con la fórmula cuadrática:

$$
\begin{aligned}
r &= \frac{-1 \pm \sqrt{1 - 4(1)(5/4)}}{2} \\
  &= \frac{-1 \pm \sqrt{1 - 5}}{2} \\
  &= \frac{-1 \pm \sqrt{-4}}{2} \\
  &= \frac{-1 \pm 2i}{2} \\
  &= -\frac{1}{2} \pm i.
\end{aligned}
$$

Como el discriminante es negativo, las raíces forman un par complejo conjugado $\alpha \pm i\beta$ con $\alpha = -1/2$ y $\beta = 1$. La solución general de una ecuación homogénea con coeficientes constantes y raíces complejas es

$$
y(x) = e^{\alpha x}\left(C_1 \cos(\beta x) + C_2 \sin(\beta x)\right).
$$

Con $\alpha = -1/2$ y $\beta = 1$ resulta

$$
y(x) = e^{-x/2}\left(C_1 \cos x + C_2 \sin x\right).
$$

## Observaciones

Las soluciones reales $y_1 = e^{-x/2}\cos x$ y $y_2 = e^{-x/2}\sin x$ son linealmente independientes, por lo que la familia anterior es la solución general. La parte real $\alpha = -1/2$ es negativa, de modo que la amplitud decae como $e^{-x/2}$; el factor oscilatorio tiene frecuencia angular $1$. Por tratarse de una ecuación con coeficientes constantes, toda solución está definida para $x \in \mathbb{R}$.
