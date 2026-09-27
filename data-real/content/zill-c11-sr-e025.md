
## Enunciado

Suponga que $f$ es una función de periodo $2p$ integrable. Demuestre que para cualquier número $a$,
$$\int_0^{2p} f(x) \,dx = \int_a^{a+2p} f(x) \,dx$$

## Solución

Por ser $f$ de periodo $2p$, su integral sobre cualquier intervalo de longitud $2p$ es la misma. En particular,

$$
\int_0^{2p} f(x)\,dx = \int_a^{a+2p} f(x)\,dx, \qquad a \in \mathbb{R}.
$$

## Resolución

Sea $a$ un número real cualquiera. Por la aditividad de la integral respecto a la concatenación de intervalos,

$$
\int_a^{a+2p} f(x)\,dx
= \int_a^0 f(x)\,dx + \int_0^{2p} f(x)\,dx + \int_{2p}^{a+2p} f(x)\,dx.
$$

Al restar $\int_0^{2p} f(x)\,dx$ en ambos miembros,

$$
\int_a^{a+2p} f(x)\,dx - \int_0^{2p} f(x)\,dx
= \int_a^0 f(x)\,dx + \int_{2p}^{a+2p} f(x)\,dx.
$$

En la segunda integral del miembro derecho se aplica el **cambio de variable** $x = t + 2p$, con $dx = dt$; cuando $x = 2p$ resulta $t = 0$ y cuando $x = a+2p$ resulta $t = a$. Así,

$$
\int_{2p}^{a+2p} f(x)\,dx = \int_0^a f(t+2p)\,dt.
$$

Como $f$ tiene periodo $2p$, se cumple $f(t+2p) = f(t)$, de donde

$$
\int_{2p}^{a+2p} f(x)\,dx = \int_0^a f(t)\,dt.
$$

Al sustituir en la diferencia,

$$
\int_a^{a+2p} f(x)\,dx - \int_0^{2p} f(x)\,dx
= \int_a^0 f(t)\,dt + \int_0^a f(t)\,dt
= 0,
$$

pues $\int_a^0 f = -\int_0^a f$. En consecuencia,

$$
\int_0^{2p} f(x)\,dx = \int_a^{a+2p} f(x)\,dx
$$

para todo $a \in \mathbb{R}$.

## Observaciones

La identidad permite integrar los coeficientes de la serie de Fourier sobre cualquier intervalo de longitud $2p$, no solo sobre $[0, 2p]$. Solo se requiere que $f$ sea integrable en intervalos finitos; no se necesita continuidad.

### Método alternativo: función del extremo superior

Si además $f$ es continua, se define $G(a) = \int_a^{a+2p} f(x)\,dx$. El **teorema fundamental del cálculo** da

$$
G'(a) = f(a+2p) - f(a) = 0
$$

por la periodicidad, de modo que $G$ es constante. Como $G(0) = \int_0^{2p} f(x)\,dx$, se recupera la identidad. Este argumento exige continuidad de $f$; el desarrollo principal evita esa hipótesis.
