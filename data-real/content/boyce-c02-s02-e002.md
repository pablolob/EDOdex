
## Enunciado

En cada uno de los problemas 1 a 4, halle la solución general de la ecuación diferencial dada.

$$x^2 y' + 3xy = \frac{\sin x}{x}, \quad x < 0$$

## Solución

La ecuación es **lineal de primer orden**. Su solución general es

$$
y(x) = \frac{C - \cos x}{x^3},
$$

definida en el intervalo $(-\infty, 0)$.

## Resolución

La ecuación se escribe en la forma estándar $y' + P(x)y = f(x)$. Como $x < 0$, se puede dividir por $x^2$:

$$
y' + \frac{3}{x}y = \frac{\sin x}{x^3}.
$$

Se tiene $P(x) = \dfrac{3}{x}$ y $f(x) = \dfrac{\sin x}{x^3}$. El **factor integrante** es

$$
\mu(x) = \exp\!\left(\int \frac{3}{x}\,dx\right) = \exp(3\ln|x|) = |x|^3.
$$

Para $x < 0$ se cumple $|x|^3 = -x^3$, de modo que puede tomarse $\mu(x) = x^3$; cualquier múltiplo constante no nulo sirve como factor integrante. Al multiplicar la ecuación por $x^3$, el miembro izquierdo es la derivada de un producto:

$$
\frac{d}{dx}\!\left[x^3 y\right] = x^3 \cdot \frac{\sin x}{x^3} = \sin x.
$$

Integrando ambos miembros respecto de $x$,

$$
x^3 y = -\cos x + C.
$$

Al despejar $y$ resulta

$$
y(x) = \frac{C - \cos x}{x^3}.
$$

La expresión está definida para todo $x \ne 0$; con la restricción $x < 0$ del enunciado, el intervalo de validez es $(-\infty, 0)$.

## Observaciones

El punto $x = 0$ es singular para la ecuación. Para todo valor de $C$, $|y(x)| \to \infty$ cuando $x \to 0^-$: si $C \ne 1$ por el numerador, y si $C = 1$ porque $1 - \cos x \sim x^2/2$. La condición $x < 0$ delimita así el intervalo máximo de validez $(-\infty, 0)$.
