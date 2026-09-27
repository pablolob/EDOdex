
## Enunciado

**Responda los problemas 1-12 sin consultar las respuestas del libro. Llene los espacios en blanco o responda si es verdadero o falso.**

La ED de primer orden $\dfrac{dr}{d\theta} = r\theta + r + \theta + 1$ no es separable ________

## Solución

La afirmación es **falsa**: la ecuación sí es **separable**, porque

$$
\frac{dr}{d\theta} = r\theta + r + \theta + 1 = (r+1)(\theta+1),
$$

y admite la forma separada

$$
\frac{dr}{r+1} = (\theta+1)\,d\theta.
$$

## Resolución

Una EDO de primer orden es **separable** cuando su miembro derecho se factoriza como el producto de una función de la variable dependiente por una función de la variable independiente. En ese caso la ecuación se reescribe como $g(r)\,dr = f(\theta)\,d\theta$.

Se factoriza el miembro derecho por agrupación:

$$
r\theta + r + \theta + 1 = r(\theta+1) + (\theta+1) = (r+1)(\theta+1).
$$

Con esta factorización la ecuación resulta

$$
\frac{dr}{d\theta} = (r+1)(\theta+1).
$$

Para $r \ne -1$ se separan las variables:

$$
\frac{dr}{r+1} = (\theta+1)\,d\theta.
$$

El miembro derecho es un producto con un factor que solo depende de $r$ y otro que solo depende de $\theta$. Por tanto la ecuación es separable y la afirmación «no es separable» es falsa.

## Observaciones

El valor $r=-1$ anula el factor $r+1$ y es una solución constante (singular) de la ecuación; por eso queda excluido del cociente al separar las variables. La ecuación también es lineal en $r$, con coeficiente $P(\theta)=-(\theta+1)$; la separabilidad se decide por la factorización del miembro derecho, no por su apariencia.
