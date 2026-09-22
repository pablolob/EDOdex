
## Enunciado

En cada uno de los problemas 1 a 8, encuentre la solución general de la ecuación diferencial dada. $$y' + 3y = x + e^{-2x}$$

## Solución

La ecuación es **lineal de primer orden**. Su solución general es

$$
y(x) = \frac{x}{3} - \frac{1}{9} + e^{-2x} + C e^{-3x},
$$

definida para todo $x \in \mathbb{R}$.

## Resolución

La ecuación se escribe en la forma estándar $y' + P(x)y = f(x)$:

$$
y' + 3y = x + e^{-2x}.
$$

Se tiene $P(x) = 3$ y $f(x) = x + e^{-2x}$. El **factor integrante** es

$$
\mu(x) = \exp\!\left(\int 3\,dx\right) = e^{3x}.
$$

Al multiplicar la ecuación por $\mu(x)$, el miembro izquierdo es la derivada de un producto:

$$
\frac{d}{dx}\!\left[e^{3x}y\right] = e^{3x}\left(x + e^{-2x}\right) = x e^{3x} + e^{x}.
$$

Integrando ambos miembros respecto de $x$,

$$
\begin{aligned}
e^{3x}y &= \int x e^{3x}\,dx + \int e^{x}\,dx \\
&= \left(\frac{x}{3} - \frac{1}{9}\right)e^{3x} + e^{x} + C.
\end{aligned}
$$

La primera integral se calcula por partes, con $u = x$ y $dv = e^{3x}\,dx$. Al despejar $y$ resulta

$$
y(x) = \frac{x}{3} - \frac{1}{9} + e^{-2x} + C e^{-3x}.
$$

## Observaciones

La solución contiene un término polinómico, $\dfrac{x}{3} - \dfrac{1}{9}$, y dos términos exponenciales, $e^{-2x}$ y $C e^{-3x}$. Ambos exponenciales tienden a cero cuando $x \to \infty$, por lo que toda solución se aproxima a la recta $y = \dfrac{x}{3} - \dfrac{1}{9}$.
