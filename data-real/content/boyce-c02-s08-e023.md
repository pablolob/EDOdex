
## Enunciado

Demuestre que si $(N_x - M_y)/M = Q$, en donde $Q$ es una función sólo de $y$, entonces la ecuación diferencial

$$M + Ny' = 0$$

tiene un factor integrante de la forma

$$\mu(y) = \exp \int Q(y) \,dy.$$

## Solución

La función

$$
\mu(y) = \exp\!\int Q(y)\,dy
$$

es un **factor integrante** de $M + Ny' = 0$: al multiplicar la ecuación por ella, la ecuación resultante es **exacta**.

## Resolución

Se denotan $M_y = \partial M/\partial y$ y $N_x = \partial N/\partial x$. La hipótesis es que $(N_x - M_y)/M = Q(y)$, donde $Q$ es una función solo de $y$.

Se multiplica la ecuación $M + Ny' = 0$ por el factor $\mu(y)$:

$$
\mu(y)M(x,y)\,dx + \mu(y)N(x,y)\,dy = 0.
$$

Se busca que esta ecuación sea **exacta**; es decir, que se cumpla

$$
\frac{\partial}{\partial y}\bigl[\mu(y)M(x,y)\bigr] = \frac{\partial}{\partial x}\bigl[\mu(y)N(x,y)\bigr].
$$

Se calculan ambas derivadas parciales. Con la regla del producto,

$$
\frac{\partial}{\partial y}\bigl[\mu M\bigr] = \mu'(y)M + \mu(y)M_y, \qquad
\frac{\partial}{\partial x}\bigl[\mu N\bigr] = \mu(y)N_x.
$$

La condición de exactitud exige

$$
\mu'(y)M + \mu(y)M_y = \mu(y)N_x,
$$

de donde

$$
\mu'(y)M = \mu(y)\bigl(N_x - M_y\bigr).
$$

Como la hipótesis define el cociente $(N_x - M_y)/M$, se divide por $M$ (no nula en la región considerada):

$$
\frac{\mu'(y)}{\mu(y)} = \frac{N_x - M_y}{M} = Q(y).
$$

Esta es una ecuación diferencial separable para $\mu$. Al integrar respecto de $y$,

$$
\ln \mu(y) = \int Q(y)\,dy,
$$

y por tanto

$$
\mu(y) = \exp\!\int Q(y)\,dy.
$$

Con este factor se satisface la condición de exactitud, de modo que la ecuación $\mu M + \mu N y' = 0$ es exacta. Queda demostrado que $M + Ny' = 0$ admite un factor integrante de esta forma.

## Observaciones

La constante de integración que aparece en $\int Q(y)\,dy$ solo multiplica a $\mu$ por una constante. Como todo múltiplo constante no nulo de un factor integrante vuelve a ser un factor integrante, se elige la primitiva sin constante.

El resultado es la contrapartida del criterio simétrico: si $(N_x - M_y)/M$ depende solo de $y$, existe un factor integrante $\mu(y)$; si $(M_y - N_x)/N$ depende solo de $x$, existe un factor integrante $\mu(x)$.

La hipótesis presupone $M \ne 0$ en la región donde está definido el cociente $(N_x - M_y)/M$, y también la continuidad de $M$, $N$ y sus derivadas parciales para poder aplicar el criterio de exactitud.
