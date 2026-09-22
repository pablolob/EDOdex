
## Enunciado

17. **a)** Dé el dominio de la función $y = x^{2/3}$.

    **b)** Dé el intervalo $I$ de definición más largo en el cual $y = x^{2/3}$ es solución de la ecuación diferencial $3xy' - 2y = 0$.

## Solución

**a)** El dominio de $y = x^{2/3}$ es $\mathbb{R} = (-\infty, \infty)$.

**b)** El intervalo de definición más largo es $(0, \infty)$ (o bien $(-\infty, 0)$).

## Resolución

**a)** La función $y = x^{2/3} = \bigl(x^{1/3}\bigr)^2$ está definida para todo número real, pues la raíz cúbica existe para cualquier $x \in \mathbb{R}$. Por tanto, el dominio es $(-\infty, \infty)$.

**b)** Para que $y = x^{2/3}$ sea solución de la EDO en un intervalo $I$, la función debe ser diferenciable en todo punto de $I$. Se calcula la derivada:

$$
y' = \frac{2}{3}\,x^{-1/3} = \frac{2}{3\,x^{1/3}}.
$$

Esta derivada no está definida en $x = 0$. Por tanto, $y$ no es diferenciable en $x = 0$.

Se verifica la EDO para $x \neq 0$:

$$
3x y' - 2y = 3x\!\left(\frac{2}{3}\,x^{-1/3}\right) - 2\,x^{2/3} = 2x^{2/3} - 2x^{2/3} = 0.
$$

La ecuación se satisface puntualmente para todo $x \neq 0$. El intervalo de definición más largo que no contiene a $x = 0$ es $(0, \infty)$ (o, equivalentemente, $(-\infty, 0)$).

## Observaciones

Aunque la función $y = x^{2/3}$ está definida en todo $\mathbb{R}$ y satisface la EDO en cada $x \neq 0$, el punto $x = 0$ debe excluirse del intervalo de definición porque la derivada no existe allí. El intervalo de definición de una solución debe ser un intervalo abierto en el que la función sea diferenciable.
