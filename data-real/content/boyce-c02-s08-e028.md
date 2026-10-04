
## Enunciado

En los problemas 25 a 31, resuelva la ecuación diferencial dada. Si es posible, halle un factor integrante de la forma $\mu(x, y) = \mu(x)$ o $\mu(x, y) = \mu(y)$.

28. $y \,dx + (2xy - e^{-2y}) \,dy = 0$

## Solución

La ecuación no es exacta; admite el **factor integrante** $\mu(y) = \dfrac{e^{2y}}{y}$. Su solución general, en forma implícita, es

$$
x e^{2y} - \ln|y| = C.
$$

## Resolución

La ecuación ya está escrita en la forma diferencial $M(x,y)\,dx + N(x,y)\,dy = 0$, con

$$
M(x,y) = y, \qquad N(x,y) = 2xy - e^{-2y}.
$$

Se aplica el **test de exactitud**, que compara las derivadas parciales cruzadas:

$$
\frac{\partial M}{\partial y} = 1, \qquad \frac{\partial N}{\partial x} = 2y.
$$

Ambas expresiones no coinciden; la ecuación no es exacta.

Se busca un **factor integrante** que dependa de una sola variable. Para $\mu(x)$ el cociente relevante es

$$
\frac{M_y - N_x}{N} = \frac{1 - 2y}{2xy - e^{-2y}},
$$

que depende de $x$ y de $y$; no conduce a un factor integrante solo de $x$. Para $\mu(y)$ el cociente es

$$
\frac{N_x - M_y}{M} = \frac{2y - 1}{y} = 2 - \frac{1}{y},
$$

que depende solo de $y$. Por tanto, el factor integrante es

$$
\mu(y) = \exp\!\left(\int \left(2 - \frac{1}{y}\right) dy\right)
= \exp\!\left(2y - \ln|y|\right)
= \frac{e^{2y}}{y}.
$$

Al multiplicar la ecuación por $\mu(y) = e^{2y}/y$ (se toma $y \neq 0$),

$$
e^{2y}\,dx + \left(2x e^{2y} - \frac{1}{y}\right) dy = 0.
$$

Se comprueba la exactitud de la nueva forma:

$$
\frac{\partial}{\partial y}\left(e^{2y}\right) = 2e^{2y}, \qquad
\frac{\partial}{\partial x}\left(2x e^{2y} - \frac{1}{y}\right) = 2e^{2y}.
$$

Al coincidir, existe una función $F(x,y)$ tal que

$$
\frac{\partial F}{\partial x} = e^{2y}, \qquad
\frac{\partial F}{\partial y} = 2x e^{2y} - \frac{1}{y}.
$$

Se integra la primera igualdad respecto de $x$, manteniendo $y$ constante:

$$
F(x,y) = \int e^{2y}\,dx = x e^{2y} + g(y),
$$

donde $g(y)$ es la función arbitraria de integración.

Se deriva este resultado respecto de $y$ y se iguala a $N$:

$$
\frac{\partial F}{\partial y} = 2x e^{2y} + g'(y) = 2x e^{2y} - \frac{1}{y},
$$

de donde $g'(y) = -\dfrac{1}{y}$ y, al integrar,

$$
g(y) = -\ln|y|.
$$

La función potencial es

$$
F(x,y) = x e^{2y} - \ln|y|,
$$

y la solución general de la ecuación exacta se escribe de forma implícita como $F(x,y) = C$.

## Observaciones

La solución general $x e^{2y} - \ln|y| = C$ puede despejarse como $x = \left(C + \ln|y|\right) e^{-2y}$. Está definida para $y \neq 0$, y cada rama con $y > 0$ o $y < 0$ constituye una familia sobre un intervalo que no cruza el eje $x$.

Al dividir por $y$ para construir el factor integrante se pierde la solución singular $y = 0$. La función constante $y = 0$ satisface la ecuación original, pues reduce la forma diferencial a $-dy = 0$; por eso debe reportarse aparte.

### Método alternativo: ecuación lineal en $x(y)$

La ecuación también es lineal si se considera $x$ como función de $y$. Dividiendo por $y$,

$$
\frac{dx}{dy} + 2x = \frac{e^{-2y}}{y}.
$$

Con el **factor integrante** $e^{2y}$ para ecuaciones lineales,

$$
\left(x e^{2y}\right)' = e^{2y} \cdot \frac{e^{-2y}}{y} = \frac{1}{y},
$$

e integrando se recupera $x e^{2y} = \ln|y| + C$.
