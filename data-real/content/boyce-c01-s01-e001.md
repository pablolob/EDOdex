
## Enunciado

Determine el orden de la ecuación diferencial dada; diga también si la ecuación es lineal o no lineal: $$x^2 \frac{d^2y}{dx^2} + x \frac{dy}{dx} + 2y = \sin x$$

## Solución

La ecuación es de **segundo orden** y **lineal**.

## Resolución

La derivada de mayor orden presente es $\dfrac{d^2y}{dx^2}$, la derivada segunda. Por tanto, la ecuación es de **segundo orden**.

Una ecuación diferencial lineal de orden $n$ tiene la forma

$$
a_n(x) \frac{d^n y}{dx^n} + a_{n-1}(x) \frac{d^{n-1} y}{dx^{n-1}} + \cdots + a_1(x) \frac{dy}{dx} + a_0(x) y = g(x),
$$

donde la variable dependiente $y$ y sus derivadas aparecen solo elevadas a la primera potencia, sin multiplicarse entre sí, y los coeficientes $a_i(x)$ y $g(x)$ dependen únicamente de la variable independiente $x$.

La ecuación dada,

$$
x^2 \frac{d^2y}{dx^2} + x \frac{dy}{dx} + 2y = \sin x,
$$

se escribe en esa forma con $a_2(x) = x^2$, $a_1(x) = x$, $a_0(x) = 2$ y $g(x) = \sin x$. Cada término con $y$ o sus derivadas es de primer grado en la variable dependiente; el término $\sin x$ no depende de $y$. Por tanto, la ecuación es **lineal**.

## Observaciones

La ecuación es lineal y, además, **no homogénea**, porque el miembro derecho $g(x) = \sin x$ no es idénticamente nulo. El término no homogéneo no interviene en la clasificación de linealidad: esta depende solo de cómo aparecen la variable dependiente $y$ y sus derivadas.
