
## Enunciado

En cada uno de los problemas 1 a 8, resuelva la ecuación diferencial dada. $$y' + y^2 \sin x = 0$$

## Solución

La solución general es

$$
y(x) = \frac{1}{C - \cos x},
$$

definida en todo intervalo donde $\cos x \ne C$. Además, $y \equiv 0$ es una solución singular.

## Resolución

La ecuación es de **variables separables**. Se escribe como

$$
\frac{dy}{dx} = -y^2 \sin x.
$$

Para $y \ne 0$ se separan las variables:

$$
\frac{dy}{y^2} = -\sin x \, dx.
$$

Se integran ambos miembros:

$$
-\frac{1}{y} = \cos x + C_1,
$$

donde $C_1$ es una constante arbitraria. Al despejar $y$ resulta

$$
y = -\frac{1}{\cos x + C_1} = \frac{1}{C - \cos x},
$$

con $C = -C_1$.

La división por $y^2$ supone $y \ne 0$. La función $y \equiv 0$ satisface la ecuación original, ya que $0 + 0 \cdot \sin x = 0$. No se obtiene de la solución general para ningún valor finito de $C$, por lo que es una solución singular.

La solución general está definida en cualquier intervalo donde $\cos x \ne C$. Si $|C| > 1$ el denominador no se anula y la solución es válida en todo $\mathbb{R}$; si $|C| \le 1$, la solución tiene asíntotas verticales en los puntos con $\cos x = C$.

## Observaciones

La ecuación es no lineal. La solución singular $y \equiv 0$ aparece como caso límite de la solución general cuando $|C| \to \infty$.
