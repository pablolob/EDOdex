
## Enunciado

En problemas 27-30 exprese la solución del problema de valor inicial dado en términos de una función dada por la integral definida.

$$\frac{dy}{dx} - 4xy = \text{sen } x^2, \quad y(0) = 7$$

## Solución

La ecuación es **lineal de primer orden**. La solución del problema de valor inicial es

$$
y(x) = e^{2x^2}\left[7 + \int_0^x e^{-2t^2}\sin\!\left(t^2\right)\,dt\right],
$$

definida en $\mathbb{R}$.

## Resolución

La ecuación está en la forma estándar $y' + P(x)y = f(x)$, con $P(x) = -4x$ y $f(x) = \sin x^2$. Es **lineal de primer orden**. El **factor integrante** es

$$
\mu(x) = \exp\!\left(\int -4x\,dx\right) = e^{-2x^2}.
$$

Al multiplicar la ecuación por $\mu(x)$, el miembro izquierdo es la derivada de un producto:

$$
\frac{d}{dx}\!\left[e^{-2x^2}y\right] = e^{-2x^2}\sin x^2.
$$

Se integran ambos miembros desde $0$ hasta $x$. El límite inferior es el punto de la condición inicial; esta elección incorpora $y(0)$ sin introducir una constante adicional:

$$
e^{-2x^2}y(x) - y(0) = \int_0^x e^{-2t^2}\sin t^2\,dt.
$$

Como $y(0) = 7$,

$$
e^{-2x^2}y(x) = 7 + \int_0^x e^{-2t^2}\sin t^2\,dt.
$$

Al despejar $y$ se obtiene

$$
y(x) = e^{2x^2}\left[7 + \int_0^x e^{-2t^2}\sin t^2\,dt\right].
$$

La sustitución directa confirma el resultado. Se deriva con la regla del producto y el teorema fundamental del cálculo:

$$
y'(x) = 4x e^{2x^2}\left[7 + \int_0^x e^{-2t^2}\sin t^2\,dt\right] + e^{2x^2}e^{-2x^2}\sin x^2
= 4x\,y(x) + \sin x^2.
$$

Por tanto $y' - 4xy = \sin x^2$. Además $y(0) = e^0\left[7 + 0\right] = 7$.

El integrando $e^{-2t^2}\sin t^2$ es continuo en todo $\mathbb{R}$ y no admite una primitiva elemental; por eso la solución se expresa mediante la integral definida. El coeficiente $-4x$ y el término $\sin x^2$ son continuos en $\mathbb{R}$, de modo que el intervalo de validez es $(-\infty, \infty)$. Al ser una ecuación lineal, no hay soluciones singulares ni ramas perdidas.

## Observaciones

La integral $\displaystyle\int_0^x e^{-2t^2}\sin t^2\,dt$ define una función no elemental. Su presencia explica que el resultado se dé como integral definida y no como una combinación finita de funciones elementales.

En la solución general $y = e^{2x^2}\left[C + \int_0^x e^{-2t^2}\sin t^2\,dt\right]$ la constante $C$ es precisamente $y(0)$, así que la condición $y(0) = 7$ la fija en $C = 7$.
