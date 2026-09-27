
## Enunciado

Para cada uno de los problemas 9 a 16, encuentre la solución del problema con valor inicial dado en forma explícita y determine (por lo menos aproximadamente) el intervalo en que está definida.

11. $y' = 2x/(y + x^2 y), \quad y(0) = -2$

## Solución

La ecuación es **de primer orden** y **separable**. La solución explícita del problema con valor inicial es

$$
y(x) = -\sqrt{2\ln(1+x^{2}) + 4},
$$

definida en el intervalo

$$
(-\infty, \infty).
$$

## Resolución

Se factoriza el denominador del miembro derecho:

$$
y + x^{2}y = y(1+x^{2}),
$$

de modo que la ecuación toma la forma

$$
y' = \frac{2x}{y(1+x^{2})}.
$$

Esta ecuación admite **separación de variables**. Se multiplica ambos miembros por $y\,dx$ y se agrupan las variables:

$$
y\,dy = \frac{2x}{1+x^{2}}\,dx.
$$

La reescritura supone $y \neq 0$, que se cumple para la rama que fija la condición inicial, pues $y(0) = -2$. Integrando ambos miembros,

$$
\frac{y^{2}}{2} = \ln(1+x^{2}) + C,
$$

ya que $1+x^{2} > 0$ en todo el eje real. La condición inicial $y(0) = -2$ determina la constante:

$$
\frac{(-2)^{2}}{2} = \ln 1 + C \quad\Longrightarrow\quad 2 = C.
$$

Sustituyendo la constante y despejando $y$,

$$
y^{2} = 2\ln(1+x^{2}) + 4.
$$

Como $y(0) = -2 < 0$, la solución es la rama negativa:

$$
y(x) = -\sqrt{2\ln(1+x^{2}) + 4}.
$$

El radicando cumple $2\ln(1+x^{2}) + 4 \ge 4 > 0$ para todo $x$ real, porque $1+x^{2} \ge 1$. La raíz está definida en todo $\mathbb{R}$ y la solución nunca se anula, de modo que tampoco se anula el denominador de la ecuación original. El intervalo de validez es, por tanto, $(-\infty, \infty)$.

Comprobación: derivando la solución,

$$
y'(x) = -\frac{1}{2}\left(2\ln(1+x^{2}) + 4\right)^{-1/2}\cdot\frac{4x}{1+x^{2}} = -\frac{2x}{(1+x^{2})\sqrt{2\ln(1+x^{2}) + 4}}.
$$

Por otra parte,

$$
\frac{2x}{y(1+x^{2})} = \frac{2x}{-\sqrt{2\ln(1+x^{2}) + 4}\,(1+x^{2})},
$$

que coincide con la derivada. Además $y(0) = -\sqrt{4} = -2$.

## Observaciones

El producto $y\,y'$ presente en la ecuación la hace no lineal; sin embargo, no aparecen soluciones singulares que añadir. La función $y = 0$ no satisface la ecuación, porque el miembro derecho queda indefinido al anularse el denominador. La rama positiva $y = +\sqrt{2\ln(1+x^{2}) + 4}$ también resuelve la ecuación diferencial, pero no la condición inicial $y(0) = -2$.
