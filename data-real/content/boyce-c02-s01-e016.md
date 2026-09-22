
## Enunciado

En cada uno de los problemas 9 a 16, encuentre la solución del problema con valor inicial dado. $$xy' + (x + 1)y = x, \quad y(\ln 2) = 1$$

## Solución

La ecuación es **lineal de primer orden**. La solución del problema con valor inicial es

$$
y(x) = \frac{x - 1}{x} + \frac{2}{x e^{x}}, \qquad x \in (0, \infty).
$$

## Resolución

Para $x \ne 0$ la ecuación se escribe en la forma estándar $y' + P(x)y = f(x)$:

$$
y' + \frac{x + 1}{x}\,y = 1.
$$

Se tiene $P(x) = \dfrac{x + 1}{x}$ y $f(x) = 1$. El **factor integrante** es

$$
\mu(x) = \exp\!\left(\int \frac{x + 1}{x}\,dx\right) = \exp\!\left(\int \left(1 + \frac{1}{x}\right)dx\right) = e^{x + \ln x} = x e^{x},
$$

donde se toma $x > 0$, coherente con la condición inicial en $x = \ln 2$. Al multiplicar la ecuación por $\mu(x)$, el miembro izquierdo es la derivada de un producto:

$$
\frac{d}{dx}\!\left[x e^{x} y\right] = x e^{x}.
$$

Integrando ambos miembros respecto de $x$, con $\int x e^{x}\,dx = e^{x}(x - 1)$ por **integración por partes**,

$$
x e^{x} y = e^{x}(x - 1) + C.
$$

De aquí la solución general es

$$
y(x) = \frac{x - 1}{x} + \frac{C}{x e^{x}}.
$$

La condición inicial $y(\ln 2) = 1$ determina $C$. Como $e^{\ln 2} = 2$,

$$
1 = \frac{\ln 2 - 1}{\ln 2} + \frac{C}{2 \ln 2}
  = 1 - \frac{1}{\ln 2} + \frac{C}{2 \ln 2},
$$

de donde $C = 2$. Por tanto,

$$
y(x) = \frac{x - 1}{x} + \frac{2}{x e^{x}}.
$$

## Observaciones

El factor integrante $\mu(x) = x e^{x}$ no se anula en $(0, \infty)$, así que el procedimiento no descarta ninguna solución. El punto $x = 0$ queda excluido porque el coeficiente $P(x) = (x + 1)/x$ no está definido allí; como la condición inicial se impone en $x = \ln 2 > 0$, el intervalo de validez es $(0, \infty)$. Para $x \to \infty$ el término $\dfrac{2}{x e^{x}}$ tiende a cero y la solución se aproxima a $\dfrac{x - 1}{x} \to 1$.
