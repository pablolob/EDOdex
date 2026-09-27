
## Enunciado

**Responda los problemas 1-12 sin consultar las respuestas del libro. Llene los espacios en blanco o responda si es verdadero o falso.**

La ED lineal, $a_1(x)y' + a_0(x)y = 0$ es también separable. ________

## Solución

La afirmación es **verdadera**: la ecuación **lineal homogénea** de primer orden es también **separable**.

$$
y' = -\frac{a_0(x)}{a_1(x)}\,y \quad\Longrightarrow\quad \frac{dy}{y} = -\frac{a_0(x)}{a_1(x)}\,dx.
$$

## Resolución

Una ecuación de primer orden es separable si puede escribirse en la forma

$$
\frac{dy}{dx} = g(x)h(y),
$$

es decir, si el miembro derecho es el producto de una función de $x$ por una función de $y$.

En la ecuación $a_1(x)y' + a_0(x)y = 0$ se despeja $y'$. La división entre $a_1(x)$ es la que permite escribirla en forma estándar $y' + P(x)y = 0$, y es válida donde $a_1(x) \ne 0$. Entonces

$$
y' = -\frac{a_0(x)}{a_1(x)}\,y.
$$

El miembro derecho es el producto de $g(x) = -\dfrac{a_0(x)}{a_1(x)}$ por $h(y) = y$. En consecuencia, la ecuación admite separación de variables:

$$
\frac{dy}{y} = -\frac{a_0(x)}{a_1(x)}\,dx.
$$

Al integrar ambos miembros se obtiene

$$
\ln|y| = -\int \frac{a_0(x)}{a_1(x)}\,dx + C,
$$

de donde la solución general es

$$
y = C\exp\!\left(-\int \frac{a_0(x)}{a_1(x)}\,dx\right),
$$

con $C$ una constante arbitraria (redefinida respecto de la constante de integración anterior).

La división entre $y$ excluye el caso $y = 0$, que también satisface la ecuación y corresponde a $C = 0$.

Por tanto, la ecuación lineal homogénea $a_1(x)y' + a_0(x)y = 0$ es también separable y la afirmación es verdadera.

## Observaciones

La afirmación no se extiende a toda ecuación lineal: la ecuación lineal no homogénea $a_1(x)y' + a_0(x)y = a_2(x)$, con $a_2(x) \ne 0$, no es, en general, separable. El recíproco tampoco se cumple: $y' = xy^2$ es separable y no lineal.
