
## Enunciado

Verifique que la función o funciones que se dan son una solución de la ecuación diferencial: $$y' - 2xy = 1, \quad y = e^{x^2} \int_0^x e^{-t^2} \,dt + e^{x^2}$$

## Solución

La función dada satisface la ecuación diferencial. Al sustituir se obtiene la identidad

$$
y' - 2xy = 1.
$$

## Resolución

Se define

$$
y = e^{x^2}\int_0^x e^{-t^2}\,dt + e^{x^2}.
$$

Por el **teorema fundamental del cálculo** y la **regla del producto**, se deriva:

$$
\begin{aligned}
y' &= \frac{d}{dx}\!\left(e^{x^2}\int_0^x e^{-t^2}\,dt\right) + \frac{d}{dx}\!\left(e^{x^2}\right) \\
&= 2x\,e^{x^2}\int_0^x e^{-t^2}\,dt + e^{x^2}\cdot e^{-x^2} + 2x\,e^{x^2} \\
&= 2x\,e^{x^2}\int_0^x e^{-t^2}\,dt + 1 + 2x\,e^{x^2}.
\end{aligned}
$$

Por otra parte,

$$
2xy = 2x\,e^{x^2}\int_0^x e^{-t^2}\,dt + 2x\,e^{x^2}.
$$

Se sustituyen ambas expresiones en el miembro izquierdo de la ecuación:

$$
\begin{aligned}
y' - 2xy &= 2x\,e^{x^2}\int_0^x e^{-t^2}\,dt + 1 + 2x\,e^{x^2} - 2x\,e^{x^2}\int_0^x e^{-t^2}\,dt - 2x\,e^{x^2} \\
&= 1.
\end{aligned}
$$

Se concluye que $y$ es una solución de $y' - 2xy = 1$.

## Observaciones

La verificación emplea únicamente cálculo diferencial: el término con la integral se deriva con la regla del producto y el teorema fundamental del cálculo, y los términos que contienen la integral se cancelan al restar. La función está definida para todo $x\in\mathbb{R}$.
