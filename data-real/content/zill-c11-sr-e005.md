
## Enunciado

En los problemas 1-6 complete el espacio en blanco o concluya cierto o falso sin consultar el libro.

$\lambda = 0$ nunca es un eigenvalor de un problema de Sturm-Liouville. ______

## Solución

La afirmación es **falsa**. El valor $\lambda = 0$ sí puede ser un eigenvalor. Por ejemplo,

$$
y'' + \lambda y = 0, \quad y'(0) = 0, \quad y'(\pi) = 0,
$$

admite para $\lambda = 0$ la eigenfunción no nula $y(x) = 1$.

## Resolución

Un problema regular de Sturm-Liouville tiene la forma

$$
\frac{d}{dx}\!\left[r(x)y'\right] + \left[q(x) + \lambda p(x)\right]y = 0
$$

con $r(x) > 0$, $p(x) > 0$ y condiciones de frontera homogéneas. Un número $\lambda$ es un eigenvalor cuando existe una solución no nula de la ecuación que satisface esas condiciones.

Para juzgar la afirmación se examina el caso $\lambda = 0$. La ecuación se reduce a

$$
\frac{d}{dx}\!\left[r(x)y'\right] + q(x)y = 0,
$$

que es una EDO lineal homogénea de segundo orden. Sus soluciones no nulas pueden satisfacer las condiciones de frontera homogéneas; cuando esto ocurre, $\lambda = 0$ es un eigenvalor.

Un ejemplo concreto lo confirma. En $[0,\pi]$ se toman $r(x) = 1$, $p(x) = 1$ y $q(x) = 0$:

$$
y'' + \lambda y = 0, \quad y'(0) = 0, \quad y'(\pi) = 0.
$$

Para $\lambda = 0$ la ecuación es $y'' = 0$, cuya solución general es $y(x) = c_1 x + c_2$. La condición $y'(0) = 0$ exige $c_1 = 0$; la condición $y'(\pi) = 0$ se cumple de forma automática. Resulta $y(x) = c_2$, y con $c_2 \neq 0$ se obtiene una solución no nula. Por tanto, $\lambda = 0$ es un eigenvalor con eigenfunción $y(x) = 1$.

Como existe un problema de Sturm-Liouville en el que $\lambda = 0$ es eigenvalor, la afirmación general «nunca es un eigenvalor» es falsa.

## Observaciones

Los eigenvalores de un problema regular de Sturm-Liouville forman una sucesión creciente $\lambda_0 < \lambda_1 < \lambda_2 < \dots$ no acotada superiormente, pero la sucesión no tiene por qué comenzar en un valor positivo: $\lambda_0$ puede ser cero o negativo según $q(x)$. Que $\lambda = 0$ sea o no un eigenvalor depende de las condiciones de frontera; con condiciones de Dirichlet $y(0) = y(\pi) = 0$ y $q(x) = 0$, el caso $\lambda = 0$ solo admite la solución $y = 0$.
