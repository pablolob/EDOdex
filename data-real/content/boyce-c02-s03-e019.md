
## Enunciado

Resuelva la ecuación

$$y^2(1 - x^2)^{1/2}\, dy = \arcsin x\, dx$$

en el intervalo $-1 < x < 1$.

## Solución

La ecuación es **de primer orden** y **separable**. Su solución general, en forma implícita, es

$$
y^3 = \frac{3}{2}(\arcsin x)^2 + C,
$$

donde $C$ es una constante arbitraria. Despejando $y$,

$$
y(x) = \left[\frac{3}{2}(\arcsin x)^2 + C\right]^{1/3}, \qquad -1 < x < 1.
$$

## Resolución

La ecuación admite **separación de variables**: cada miembro involucra una sola variable. Al dividir entre $\sqrt{1-x^2}$, que es positivo para $-1<x<1$, se obtiene

$$
y^2\,dy = \frac{\arcsin x}{\sqrt{1-x^2}}\,dx.
$$

Se integra cada miembro. La integral del miembro izquierdo es directa:

$$
\int y^2\,dy = \frac{y^3}{3}.
$$

Para el miembro derecho se emplea la **sustitución** $u = \arcsin x$, con $du = \dfrac{dx}{\sqrt{1-x^2}}$:

$$
\int \frac{\arcsin x}{\sqrt{1-x^2}}\,dx = \int u\,du = \frac{u^2}{2} = \frac{(\arcsin x)^2}{2}.
$$

Igualando ambos resultados y agrupando las constantes de integración,

$$
\frac{y^3}{3} = \frac{(\arcsin x)^2}{2} + C_1
\quad\Longrightarrow\quad
y^3 = \frac{3}{2}(\arcsin x)^2 + C,
$$

con $C = 3C_1$. La raíz cúbica real permite despejar $y$ sin ambigüedad de signo:

$$
y(x) = \left[\frac{3}{2}(\arcsin x)^2 + C\right]^{1/3}.
$$

La solución se comprueba por derivación implícita de $y^3 = \frac{3}{2}(\arcsin x)^2 + C$. Derivando respecto de $x$,

$$
3y^2\,y' = 3\arcsin x \cdot \frac{1}{\sqrt{1-x^2}},
$$

es decir,

$$
y^2\sqrt{1-x^2}\,y' = \arcsin x,
$$

que coincide con la ecuación dada al escribir $dy = y'\,dx$.

En el intervalo $-1<x<1$ el factor $\sqrt{1-x^2}$ es positivo y las funciones que intervienen son derivables, de modo que la solución general es válida en todo él. La función constante $y=0$ no es solución: al sustituirla, el miembro izquierdo se anula mientras que $\arcsin x$ no se anula en general. Por tanto, no hay soluciones singulares ni soluciones perdidas.

## Observaciones

La ecuación ya está escrita con las variables separadas en los diferenciales, por lo que la única manipulación algebraica consiste en aislar el factor $\sqrt{1-x^2}$. La sustitución $u=\arcsin x$ es natural porque su derivada, $1/\sqrt{1-x^2}$, aparece como factor en el integrando.

Como la raíz cúbica real está definida para todo número real y $\arcsin x$ está definida en $[-1,1]$, cada valor de $C$ proporciona una solución válida en todo el intervalo $-1<x<1$. La solución también puede dejarse en la forma implícita $y^3 = \frac{3}{2}(\arcsin x)^2 + C$.
