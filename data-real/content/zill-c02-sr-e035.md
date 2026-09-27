
## Enunciado

a) Sin resolver, explique por qué el problema con valores iniciales
$$\frac{dy}{dx} = \sqrt{y}, \quad y(x_0) = y_0$$
no tiene solución para $y_0 < 0$.

b) Resuelva el problema con valores iniciales del inciso a) para $y_0 > 0$ y determine el intervalo $I$ más largo sobre el que la solución está definida.

## Solución

Para $y_0 < 0$ no existe solución, pues el miembro derecho $\sqrt{y}$ no es real cuando $y < 0$.

Para $y_0 > 0$ la solución es

$$
y(x) = \left(\sqrt{y_0} + \frac{x - x_0}{2}\right)^2,
\qquad
I = \left(x_0 - 2\sqrt{y_0},\ \infty\right).
$$

## Resolución

### Inciso a)

La ecuación requiere evaluar $f(x,y) = \sqrt{y}$, que es real solo para $y \ge 0$. En el punto inicial $(x_0, y_0)$ con $y_0 < 0$ el miembro derecho no está definido, de modo que la ecuación no puede satisfacerse en $x = x_0$: la pendiente $y'(x_0) = \sqrt{y_0}$ sería un número no real.

Alternativamente, cualquier solución real cumple $y(x) \ge 0$ en todo su intervalo de definición, porque $\sqrt{y(x)}$ debe ser real. Por continuidad se tendría $y(x_0) = y_0 \ge 0$, en contradicción con $y_0 < 0$. Por tanto, no existe solución.

### Inciso b)

Para $y_0 > 0$ la función $f(x,y) = \sqrt{y}$ y su derivada parcial $\dfrac{\partial f}{\partial y} = \dfrac{1}{2\sqrt{y}}$ son continuas en un entorno de $(x_0, y_0)$, así que el problema tiene una solución única en un entorno de $x_0$.

La ecuación es **separable**. Como $y > 0$ cerca del punto inicial, se separan las variables:

$$
\frac{dy}{\sqrt{y}} = dx.
$$

Se integran ambos miembros:

$$
\int y^{-1/2}\,dy = \int dx
\qquad\Longrightarrow\qquad
2\sqrt{y} = x + C.
$$

La condición inicial $y(x_0) = y_0$ fija la constante:

$$
2\sqrt{y_0} = x_0 + C
\qquad\Longrightarrow\qquad
C = 2\sqrt{y_0} - x_0.
$$

Al sustituir $C$ y despejar $y$ resulta

$$
2\sqrt{y} = x - x_0 + 2\sqrt{y_0}
\qquad\Longrightarrow\qquad
y(x) = \left(\sqrt{y_0} + \frac{x - x_0}{2}\right)^2.
$$

Esta función cumple $y(x_0) = y_0$. Además, su derivada es

$$
y'(x) = \sqrt{y_0} + \frac{x - x_0}{2},
$$

y la raíz vale $\sqrt{y(x)} = \left|\sqrt{y_0} + \dfrac{x - x_0}{2}\right|$. Ambos miembros coinciden exactamente cuando el radicando es no negativo, es decir, cuando

$$
\sqrt{y_0} + \frac{x - x_0}{2} \ge 0
\qquad\Longleftrightarrow\qquad
x \ge x_0 - 2\sqrt{y_0}.
$$

Para $x < x_0 - 2\sqrt{y_0}$ la función sigue siendo positiva, pero satisface $y' = -\sqrt{y}$ y no la ecuación original. Por tanto, el intervalo más largo sobre el que la solución está definida es

$$
I = \left(x_0 - 2\sqrt{y_0},\ \infty\right).
$$

En el extremo izquierdo la solución alcanza $y = 0$; allí el miembro derecho pierde la condición de Lipschitz y el intervalo se toma abierto.

## Observaciones

En $y = 0$ la ecuación no satisface una condición de Lipschitz y la unicidad falla: la función constante $y \equiv 0$ es una **solución singular**. Por eso el intervalo es abierto en $x = x_0 - 2\sqrt{y_0}$. Si $y_0 = 0$, el problema con valores iniciales tiene infinitas soluciones.

La solución también puede escribirse como $y(x) = \dfrac{1}{4}\left(x + 2\sqrt{y_0} - x_0\right)^2$. Como $\sqrt{y} \ge 0$, toda solución de la ecuación es no decreciente en $x$.
