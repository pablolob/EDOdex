
## Enunciado

En los problemas 19-26 resuelva la ecuación diferencial dada.

$$(x^2 + 4) \, dy = (2x - 8xy) \, dx$$

## Solución

La ecuación es **de primer orden** y **separable**. Su solución general es

$$
y(x) = \frac{1}{4} + \frac{C}{(x^2+4)^4},
$$

definida para todo $x \in \mathbb{R}$.

## Resolución

Se divide la ecuación entre $(x^2+4)\,dx$ para despejar la derivada:

$$
\frac{dy}{dx} = \frac{2x - 8xy}{x^2+4} = \frac{2x(1-4y)}{x^2+4}.
$$

El miembro derecho factoriza en un factor que depende solo de $x$ y otro que
depende solo de $y$; la ecuación es **separable**. Se separan las variables:

$$
\frac{dy}{1-4y} = \frac{2x}{x^2+4}\,dx.
$$

La separación supone $1-4y \ne 0$; el caso excluido se analiza al final.
Integrando ambos miembros,

$$
\int \frac{dy}{1-4y} = \int \frac{2x}{x^2+4}\,dx.
$$

La primera integral se calcula con la sustitución $u = 1-4y$, $du = -4\,dy$:

$$
\int \frac{dy}{1-4y} = -\frac{1}{4}\ln|1-4y|.
$$

La segunda se calcula con $v = x^2+4$, $dv = 2x\,dx$; como $x^2+4>0$, no se
requiere valor absoluto:

$$
\int \frac{2x}{x^2+4}\,dx = \ln(x^2+4).
$$

Igualando e incorporando la constante de integración,

$$
-\frac{1}{4}\ln|1-4y| = \ln(x^2+4) + C_0.
$$

Al multiplicar por $-4$ y usar $\ln a^{-4} = -4\ln a$,

$$
\ln|1-4y| = -4\ln(x^2+4) + C_1.
$$

Exponenciando y eliminando el valor absoluto mediante una constante con signo,

$$
1-4y = C\,(x^2+4)^{-4}.
$$

Finalmente, al despejar $y$ se obtiene la solución general:

$$
y(x) = \frac{1}{4} + \frac{C}{(x^2+4)^4}.
$$

La sustitución directa confirma el resultado. Derivando,

$$
y'(x) = -8Cx\,(x^2+4)^{-5},
$$

y evaluando el miembro derecho,

$$
\frac{2x(1-4y)}{x^2+4}
= \frac{2x\left(1 - 4\left(\frac{1}{4} + \frac{C}{(x^2+4)^4}\right)\right)}{x^2+4}
= \frac{-8Cx}{(x^2+4)^5},
$$

que coincide con $y'(x)$. Como $x^2+4 \ge 4 > 0$ para todo $x$ real, la
solución está definida y es derivable en $\mathbb{R}$, que es el intervalo más
largo de validez.

El caso excluido en la separación, $1-4y = 0$, da la solución constante
$y = 1/4$. Corresponde a $C = 0$, por lo que no es una solución singular ni una
rama perdida.

## Observaciones

La solución constante $y = 1/4$ es el único equilibrio de la ecuación: anula
$dy/dx$ y separa las soluciones con $C>0$ de las que tienen $C<0$.

### Método alternativo: factor integrante

La ecuación también es **lineal de primer orden**. En forma estándar,

$$
y' + \frac{8x}{x^2+4}\,y = \frac{2x}{x^2+4},
$$

con factor integrante

$$
\mu(x) = \exp\!\left(\int \frac{8x}{x^2+4}\,dx\right) = (x^2+4)^4.
$$

La ecuación equivale a $\dfrac{d}{dx}\!\left[(x^2+4)^4 y\right] = 2x(x^2+4)^3$.
Integrando, $(x^2+4)^4 y = \dfrac{(x^2+4)^4}{4} + C$, de donde resulta la misma
solución general.
