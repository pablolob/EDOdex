
## Enunciado

Demuestre que las ecuaciones de los problemas 19 a 22 no son exactas, aunque se transforman en exactas si se multiplican por el factor integrante dado. En seguida, resuelva las ecuaciones.

22. $(x + 2) \sin y \,dx + x \cos y \,dy = 0; \quad \mu(x, y) = xe^x$

## Solución

La ecuación no es **exacta**; al multiplicarla por $\mu(x,y)=xe^x$ se transforma en una ecuación exacta. Su solución general, en forma implícita, es

$$
x^2e^x\sin y = C.
$$

Las soluciones constantes $y = n\pi$ quedan incluidas en la familia para $C = 0$.

## Resolución

Se escribe la ecuación en la forma $M(x,y)\,dx + N(x,y)\,dy = 0$, con

$$
M(x,y) = (x+2)\sin y, \qquad N(x,y) = x\cos y.
$$

Se aplica el **test de exactitud**, que compara las derivadas parciales cruzadas:

$$
\frac{\partial M}{\partial y} = (x+2)\cos y, \qquad \frac{\partial N}{\partial x} = \cos y.
$$

Las derivadas no coinciden: su diferencia vale $(x+1)\cos y$, que no se anula en toda la región. Por tanto, la ecuación no es exacta.

Se multiplica la ecuación por el factor integrante $\mu(x,y) = xe^x$. Los nuevos coeficientes son

$$
M^*(x,y) = x(x+2)e^x\sin y, \qquad N^*(x,y) = x^2e^x\cos y.
$$

Se repite el test de exactitud:

$$
\frac{\partial M^*}{\partial y} = x(x+2)e^x\cos y, \qquad
\frac{\partial N^*}{\partial x} = (x^2+2x)e^x\cos y = x(x+2)e^x\cos y.
$$

Las derivadas coinciden, de modo que la ecuación multiplicada es exacta y existe una función potencial $F(x,y)$ con

$$
\frac{\partial F}{\partial x} = M^*(x,y), \qquad \frac{\partial F}{\partial y} = N^*(x,y).
$$

Se integra la segunda igualdad respecto de $y$, manteniendo $x$ constante:

$$
F(x,y) = \int x^2e^x\cos y\,dy = x^2e^x\sin y + g(x),
$$

donde $g(x)$ es la función arbitraria de integración.

Se deriva este resultado respecto de $x$ y se iguala a $M^*(x,y)$:

$$
\frac{\partial F}{\partial x} = (x^2+2x)e^x\sin y + g'(x) = x(x+2)e^x\sin y.
$$

De aquí $g'(x) = 0$; la función $g$ es constante y se absorbe en la constante de integración. La solución general de la ecuación exacta es la familia implícita

$$
x^2e^x\sin y = C.
$$

Comprobación. La diferencial de $F(x,y) = x^2e^x\sin y$ es

$$
dF = x(x+2)e^x\sin y\,dx + x^2e^x\cos y\,dy,
$$

que es exactamente $xe^x$ veces el miembro izquierdo original.

Dominio y soluciones singulares. La función $x^2e^x\sin y$ es de clase $C^\infty$ en todo $\mathbb{R}^2$. Para $x \neq 0$ el factor $xe^x$ no se anula, así que multiplicar por él es reversible y no altera el conjunto de soluciones. Las funciones constantes $y = n\pi$ satisfacen la ecuación original y aparecen en la familia con $C = 0$, de modo que no hay soluciones singulares perdidas.

## Observaciones

La familia implícita define $y$ en cada una de sus ramas. Al despejar,

$$
\sin y = C x^{-2}e^{-x},
$$

expresión válida mientras $|C|e^{-x}/x^2 \le 1$ y $x \neq 0$. Las constantes $y = n\pi$ corresponden a $C = 0$.

### Método alternativo: separación de variables

La ecuación también es separable. Para $\sin y \neq 0$ y $x \neq 0$,

$$
\frac{\cos y}{\sin y}\,dy = -\frac{x+2}{x}\,dx,
$$

e integrando ambos miembros se obtiene

$$
\ln|\sin y| = -x - 2\ln|x| + c,
$$

que equivale a $x^2e^x\sin y = C$. La integración por el factor integrante y la separación de variables conducen a la misma familia.
