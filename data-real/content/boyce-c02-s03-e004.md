
## Enunciado

En cada uno de los problemas 1 a 8, resuelva la ecuación diferencial dada. $$y' = 1 + x + y^2 + xy^2$$

## Solución

La ecuación es **de primer orden** y **separable**. Su solución general es

$$
y(x) = \tan\!\left(\frac{x^2}{2} + x + C\right).
$$

## Resolución

El miembro derecho se factoriza agrupando términos:

$$
1 + x + y^2 + xy^2 = (1 + x) + y^2(1 + x) = (1 + x)(1 + y^2).
$$

La ecuación resulta

$$
\frac{dy}{dx} = (1 + x)(1 + y^2).
$$

Como $1 + y^2 > 0$ para todo $y$, se separan las variables sin excluir valores:

$$
\frac{dy}{1 + y^2} = (1 + x)\,dx.
$$

Integrando ambos miembros,

$$
\arctan y = \frac{x^2}{2} + x + C.
$$

Al invertir la función arcotangente,

$$
y(x) = \tan\!\left(\frac{x^2}{2} + x + C\right).
$$

La solución se comprueba por sustitución directa. Derivando,

$$
y' = \sec^2\!\left(\frac{x^2}{2} + x + C\right)(x + 1),
$$

y como $\sec^2 u = 1 + \tan^2 u = 1 + y^2$, resulta $y' = (1 + x)(1 + y^2)$, que es la ecuación dada.

La solución está definida allí donde el argumento de la tangente no alcanza una asíntota vertical:

$$
\frac{x^2}{2} + x + C \neq \frac{\pi}{2} + k\pi, \quad k \in \mathbb{Z}.
$$

El intervalo de validez que contiene a un punto $x_0$ es el acotado por las dos asíntotas consecutivas que rodean a $x_0$.

## Observaciones

La factorización por agrupación es el paso que revela la separabilidad; sin ella la ecuación no muestra de inmediato la forma $g(y)\,dy = f(x)\,dx$. No hay soluciones constantes, porque el factor $1 + y^2$ nunca se anula. La constante $C$ puede restringirse a $0 \le C < \pi$, ya que la tangente tiene periodo $\pi$.
