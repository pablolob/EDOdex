
## Enunciado

En los problemas 19-26 resuelva la ecuación diferencial dada.

$$(6x + 1)y^2 \frac{dy}{dx} + 3x^2 + 2y^3 = 0$$

## Solución

La ecuación es **exacta** y su solución general, en forma implícita, es

$$
\boxed{3x^3 + (6x + 1)y^3 = C}.
$$

## Resolución

Se escribe la ecuación en la forma diferencial $M(x,y)\,dx + N(x,y)\,dy = 0$. Multiplicando por $dx$,

$$
(3x^2 + 2y^3)\,dx + (6x + 1)y^2\,dy = 0,
$$

de modo que

$$
M(x,y) = 3x^2 + 2y^3, \qquad N(x,y) = (6x + 1)y^2.
$$

Se aplica el **test de exactitud**, que compara las derivadas parciales cruzadas:

$$
\frac{\partial M}{\partial y} = 6y^2, \qquad \frac{\partial N}{\partial x} = 6y^2.
$$

Ambas coinciden, así que la ecuación es **exacta** y existe una función $F(x,y)$ con

$$
\frac{\partial F}{\partial x} = M(x,y), \qquad \frac{\partial F}{\partial y} = N(x,y).
$$

Se integra la primera igualdad respecto de $x$, manteniendo $y$ constante:

$$
F(x,y) = \int (3x^2 + 2y^3)\,dx = x^3 + 2xy^3 + g(y),
$$

donde $g(y)$ es la función arbitraria de integración.

Se deriva este resultado respecto de $y$ y se iguala a $N(x,y)$. Como $(6x+1)y^2 = 6xy^2 + y^2$,

$$
\frac{\partial F}{\partial y} = 6xy^2 + g'(y) = 6xy^2 + y^2.
$$

Por tanto, $g'(y) = y^2$ y, al integrar, $g(y) = \frac{y^3}{3}$. La función potencial es

$$
F(x,y) = x^3 + 2xy^3 + \frac{y^3}{3},
$$

y la solución general de la ecuación exacta se escribe de forma implícita como $F(x,y) = C$. Al multiplicar por $3$ se obtiene la forma equivalente más compacta,

$$
3x^3 + (6x + 1)y^3 = C.
$$

Los coeficientes $M$ y $N$ son polinomios, definidos en todo $\mathbb{R}^2$. En el procedimiento no se divide por ningún factor, de modo que la familia implícita no pierde ninguna solución; la ecuación carece de soluciones constantes y de soluciones singulares.

## Observaciones

Despejando $y$ de la familia implícita se obtiene la forma explícita

$$
y(x) = \sqrt[3]{\frac{C - 3x^3}{6x + 1}},
$$

definida para todo $x \ne -\frac{1}{6}$ salvo cuando el numerador también se anula. La recta $x = -\frac{1}{6}$ es una asíntota vertical de la solución, porque allí se anula el coeficiente $N = (6x+1)y^2$ que multiplica a $dy$ en la forma diferencial.

Los puntos donde $M$ y $N$ se anulan a la vez son $(0,0)$ y $\left(-\frac{1}{6}, -\frac{1}{\sqrt[3]{24}}\right)$; en ellos la forma resuelta $y' = -M/N$ queda indeterminada, pero las curvas de nivel correspondientes siguen siendo soluciones regulares de la forma diferencial.

### Método alternativo: agrupación como derivada exacta

La ecuación puede reescribirse agrupando el miembro izquierdo como la derivada de un producto. Del lado izquierdo,

$$
(6x+1)y^2\,y' + 2y^3 = \frac{d}{dx}\!\left[\left(2x + \frac{1}{3}\right)y^3\right],
$$

porque la derivada del producto es $2y^3 + \left(2x + \frac{1}{3}\right)3y^2\,y' = 2y^3 + (6x+1)y^2\,y'$. La ecuación se reduce entonces a

$$
\frac{d}{dx}\!\left[\left(2x + \frac{1}{3}\right)y^3\right] = -3x^2.
$$

Integrando ambos miembros,

$$
\left(2x + \frac{1}{3}\right)y^3 = -x^3 + C,
$$

y al multiplicar por $3$ resulta la misma familia implícita $3x^3 + (6x+1)y^3 = C$.
