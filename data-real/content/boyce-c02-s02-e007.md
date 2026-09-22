
## Enunciado

En cada uno de los problemas del 5 al 12, determine la solución del problema con valor inicial dado. Escriba el intervalo en que la solución es válida.

$$y' + (\cot x)y = 2 \csc x, \quad y\left(\frac{\pi}{2}\right) = 1$$

## Solución

La ecuación es **lineal de primer orden**. La solución del problema con valor inicial es

$$
y(x) = \frac{2x + 1 - \pi}{\sin x},
$$

válida en el intervalo $(0, \pi)$.

## Resolución

La ecuación ya está en la forma estándar $y' + P(x)y = f(x)$, con

$$
P(x) = \cot x, \qquad f(x) = 2\csc x.
$$

En el intervalo que contiene a $x = \pi/2$ se cumple $\sin x > 0$. El **factor integrante** es

$$
\mu(x) = \exp\!\left(\int \cot x\,dx\right) = \exp(\ln \sin x) = \sin x.
$$

Al multiplicar ambos miembros por $\mu(x)$, el miembro izquierdo es la derivada del producto $\sin x\, y$:

$$
\frac{d}{dx}\left(\sin x\, y\right) = \sin x \left(2\csc x\right) = 2.
$$

Integrando ambos miembros respecto de $x$,

$$
\sin x\, y = 2x + C.
$$

La condición inicial fija la constante: al evaluar en $x = \pi/2$,

$$
\sin\!\left(\frac{\pi}{2}\right) \cdot 1 = 2 \cdot \frac{\pi}{2} + C,
$$

de donde $1 = \pi + C$, es decir, $C = 1 - \pi$. Por tanto,

$$
y(x) = \frac{2x + 1 - \pi}{\sin x}.
$$

Intervalo de validez: las funciones $P(x) = \cot x$ y $f(x) = 2\csc x$ son continuas siempre que $\sin x \ne 0$, esto es, en $\mathbb{R} \setminus \{n\pi : n \in \mathbb{Z}\}$. El intervalo más largo que contiene a $x = \pi/2$ sin cruzar una singularidad es $(0, \pi)$. En consecuencia, la solución es válida en $(0, \pi)$.

Comprobación: al derivar el cociente, $y' = \dfrac{2\sin x - (2x + 1 - \pi)\cos x}{\sin^2 x}$. Entonces

$$
y' + (\cot x)y = \frac{2\sin x - (2x + 1 - \pi)\cos x}{\sin^2 x} + \frac{(2x + 1 - \pi)\cos x}{\sin^2 x} = \frac{2}{\sin x} = 2\csc x,
$$

y $y(\pi/2) = (2\cdot\pi/2 + 1 - \pi)/1 = 1$, como se pide.

## Observaciones

La primitiva general de $\cot x$ es $\ln|\sin x|$. En el intervalo que contiene a $\pi/2$ se tiene $\sin x > 0$, por lo que el valor absoluto no es necesario y el factor integrante se toma como $\sin x$.

Aunque la fórmula $y(x) = (2x + 1 - \pi)/\sin x$ está definida en cualquier intervalo que no contenga múltiplos de $\pi$, el intervalo de validez exigido es el que contiene a la condición inicial, es decir, $(0, \pi)$.
