
## Enunciado

En los problemas 19-26 resuelva la ecuación diferencial dada.

$$\frac{dx}{dy} = -\frac{4y^2 + 6xy}{3y^2 + 2x}$$

## Solución

La ecuación es **exacta** y su solución general, en forma implícita, es

$$
\boxed{x^{2}+3xy^{2}+\frac{4}{3}y^{3}=C}.
$$

## Resolución

Se escribe la ecuación en la forma diferencial $M(x,y)\,dx+N(x,y)\,dy=0$. Al multiplicar la expresión dada por $3y^{2}+2x$,

$$
(3y^{2}+2x)\,dx+(4y^{2}+6xy)\,dy=0,
$$

de modo que

$$
M(x,y)=3y^{2}+2x, \qquad N(x,y)=4y^{2}+6xy.
$$

Se aplica el **test de exactitud**, que compara las derivadas parciales cruzadas:

$$
\frac{\partial M}{\partial y}=6y, \qquad \frac{\partial N}{\partial x}=6y.
$$

Ambas derivadas coinciden, luego la ecuación es **exacta**. Existe entonces una función $F(x,y)$ con

$$
\frac{\partial F}{\partial x}=M(x,y), \qquad \frac{\partial F}{\partial y}=N(x,y).
$$

Se integra la primera igualdad respecto de $x$, manteniendo $y$ constante:

$$
F(x,y)=\int (3y^{2}+2x)\,dx=x^{2}+3xy^{2}+g(y),
$$

donde $g(y)$ es la función arbitraria de integración. Se deriva respecto de $y$ y se iguala a $N(x,y)$:

$$
\frac{\partial F}{\partial y}=6xy+g'(y)=4y^{2}+6xy.
$$

Al cancelar $6xy$ resulta $g'(y)=4y^{2}$, y al integrar,

$$
g(y)=\frac{4}{3}y^{3}.
$$

La función potencial es

$$
F(x,y)=x^{2}+3xy^{2}+\frac{4}{3}y^{3},
$$

y la solución general se escribe de forma implícita como $F(x,y)=C$.

La familia obtenida satisface la ecuación original. Al derivar $F(x,y)=C$ respecto de $y$,

$$
2x\frac{dx}{dy}+3\left(2xy\frac{dx}{dy}+y^{2}\right)+4y^{2}=0,
$$

es decir,

$$
\left(2x+3y^{2}\right)\frac{dx}{dy}+6xy+4y^{2}=0,
$$

de donde

$$
\frac{dx}{dy}=-\frac{4y^{2}+6xy}{3y^{2}+2x}.
$$

## Observaciones

La solución también se escribe sin fracciones como $3x^{2}+9xy^{2}+4y^{3}=C'$. La familia $F(x,y)=C$ está definida para todo $(x,y)\in\mathbb{R}^{2}$; la forma normal solo exige $3y^{2}+2x\ne 0$ para que el miembro derecho esté definido. Al no aparecer un factor que se anule, no se pierden soluciones singulares.

### Método alternativo: integración partiendo de $N$

Se puede comenzar por la segunda igualdad. Integrando $N$ respecto de $y$,

$$
F(x,y)=\int (4y^{2}+6xy)\,dy=\frac{4}{3}y^{3}+3xy^{2}+h(x).
$$

Al derivar respecto de $x$ e igualar a $M$ resulta $h'(x)=2x$, luego $h(x)=x^{2}$ y se recupera el mismo potencial.
