
## Enunciado

En cada uno de los problemas 12 a 17, determine una forma adecuada para $Y(x)$, si ha de aplicarse el método de los coeficientes indeterminados. No evalúe las constantes.

16. $y^{iv} - y''' - y'' + y' = x^2 + 4 + x\sin x$

## Solución

$$
Y(x) = x(Ax^2 + Bx + C) + (Dx + E)\cos x + (Fx + G)\sin x.
$$

## Resolución

La ecuación es **lineal**, de **cuarto orden**, **no homogénea** y con coeficientes constantes. El término no homogéneo es $g(x) = x^2 + 4 + x\sin x$. La forma de la solución particular $Y(x)$ se construye por el método de **coeficientes indeterminados**, con el enfoque de superposición, a partir de las raíces de la ecuación característica de la ecuación homogénea asociada.

**Solución complementaria.** La ecuación homogénea asociada es $y^{iv} - y''' - y'' + y' = 0$. Su ecuación característica es

$$
r^4 - r^3 - r^2 + r = r(r^3 - r^2 - r + 1) = r(r-1)^2(r+1) = 0.
$$

Sus raíces son $r = 0$ (simple), $r = 1$ (doble) y $r = -1$ (simple). Por tanto,

$$
y_c = c_1 + c_2 e^{x} + c_3 x e^{x} + c_4 e^{-x}.
$$

**Forma de la solución particular.** Por el principio de superposición se propone una forma de prueba para cada sumando de $g(x)$ y se reúnen al final.

Para el polinomio $x^2 + 4$ la forma natural es un polinomio del mismo grado,

$$
Ax^2 + Bx + C.
$$

Su término constante $C$ ya figura en $y_c$, asociado a la raíz $r = 0$. La **regla de modificación** obliga a multiplicar por $x$:

$$
Y_1 = x(Ax^2 + Bx + C) = Ax^3 + Bx^2 + Cx.
$$

Basta una sola potencia de $x$ porque $r = 0$ es raíz simple; ninguno de los términos resultantes duplica ya a los de $y_c$.

Para el término $x\sin x$ la forma natural es

$$
(Dx + E)\cos x + (Fx + G)\sin x,
$$

que corresponde a las raíces complejas $\pm i$. Estas no son raíces del polinomio auxiliar, cuyas raíces son $0$, $1$ y $-1$. No hay duplicación y no se necesita ningún factor $x$:

$$
Y_2 = (Dx + E)\cos x + (Fx + G)\sin x.
$$

Al reunir ambas contribuciones, la forma adecuada es

$$
Y(x) = x(Ax^2 + Bx + C) + (Dx + E)\cos x + (Fx + G)\sin x.
$$

No se evalúan las constantes $A$, $B$, $C$, $D$, $E$, $F$ y $G$, según pide el enunciado.

## Observaciones

El factor $x$ de la parte polinómica no es opcional. El término constante $C$ interfiere con la constante $c_1$ de $y_c$, porque $r = 0$ es raíz de la ecuación característica. Sin el factor $x$, el miembro izquierdo anularía esa contribución constante y no podría igualarse a $4$.

La regla de modificación se aplica con la menor potencia de $x$ que rompe la duplicación. Como $r = 0$ es raíz simple, basta $x^1$.

El término $x\sin x$ no requiere modificación porque $\pm i$ no son raíces del polinomio auxiliar.

### Método alternativo: aniquiladores

El mismo resultado se obtiene con **aniquiladores**. La ecuación, en notación de operadores, es $D(D-1)^2(D+1)y = x^2 + 4 + x\sin x$. El operador $D^3$ aniquila a $x^2 + 4$ y el operador $(D^2+1)^2$ aniquila a $x\sin x$. Al aplicar $D^3(D^2+1)^2$ se obtiene una ecuación homogénea que añade la raíz $0$ (triple) y las raíces $\pm i$ (dobles). Descartando los términos que ya forman $y_c$, las raíces nuevas aportan $Ax^3 + Bx^2 + Cx$ y $(Dx+E)\cos x + (Fx+G)\sin x$.
