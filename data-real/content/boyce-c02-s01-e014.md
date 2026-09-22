
## Enunciado

En cada uno de los problemas 9 a 16, encuentre la solución del problema con valor inicial dado. $$xy' + 2y = \sin x, \quad y(\pi/2) = 1$$

## Solución

La solución del problema con valor inicial es

$$
y(x) = \frac{\sin x - x\cos x + \dfrac{\pi^2}{4} - 1}{x^2}, \quad x > 0.
$$

## Resolución

La ecuación es **lineal de primer orden**. Para $x \ne 0$ se divide entre $x$ y se escribe en la forma estándar $y' + P(x)y = f(x)$:

$$
y' + \frac{2}{x}y = \frac{\sin x}{x}, \qquad P(x) = \frac{2}{x}, \qquad f(x) = \frac{\sin x}{x}.
$$

El **factor integrante** es

$$
\mu(x) = \exp\!\left(\int \frac{2}{x}\,dx\right) = \exp(2\ln x) = x^2,
$$

válido para $x > 0$, que es el intervalo que contiene a $x_0 = \pi/2$.

Al multiplicar la ecuación por $\mu(x) = x^2$, el miembro izquierdo es la derivada de un producto:

$$
x^2y' + 2xy = x\sin x,
\qquad\text{es decir,}\qquad
\frac{d}{dx}\!\left(x^2y\right) = x\sin x.
$$

Se integran ambos miembros. La integral $\displaystyle\int x\sin x\,dx$ se calcula por partes con $u = x$ y $dv = \sin x\,dx$, de modo que $du = dx$ y $v = -\cos x$:

$$
\int x\sin x\,dx = -x\cos x + \int \cos x\,dx = -x\cos x + \sin x + C.
$$

Por tanto,

$$
x^2y = \sin x - x\cos x + C,
$$

y al despejar $y$,

$$
y(x) = \frac{\sin x - x\cos x + C}{x^2}.
$$

La condición inicial $y(\pi/2) = 1$ determina la constante. Como $\cos(\pi/2) = 0$ y $\sin(\pi/2) = 1$,

$$
y\!\left(\frac{\pi}{2}\right) = \frac{1 + C}{(\pi/2)^2} = \frac{4(1+C)}{\pi^2} = 1 \implies 1 + C = \frac{\pi^2}{4} \implies C = \frac{\pi^2}{4} - 1.
$$

Así, la solución particular es

$$
y(x) = \frac{\sin x - x\cos x + \dfrac{\pi^2}{4} - 1}{x^2}.
$$

## Observaciones

El coeficiente $P(x) = \dfrac{2}{x}$ no es continuo en $x = 0$. El intervalo más largo que contiene al punto inicial $x_0 = \pi/2$ y en el que la solución está definida es $(0, \infty)$. Al sustituir se comprueba que $xy' + 2y = \sin x$ y que $y(\pi/2) = 1$.
