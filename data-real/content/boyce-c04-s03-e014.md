
## Enunciado

En cada uno de los problemas 12 a 17, determine una forma adecuada para $Y(x)$, si ha de aplicarse el método de los coeficientes indeterminados. No evalúe las constantes.

14. $y^{iv} - 2y'' + y = e^x + \sin x$

## Solución

$$
Y(x) = Ax^2 e^x + B\cos x + C\sin x.
$$

## Resolución

La ecuación es **lineal**, de **cuarto orden**, **no homogénea** y con coeficientes constantes. Su solución general tiene la estructura $y = y_c + y_p$. El enunciado solo pide la forma de la solución particular $Y(x)$ por **coeficientes indeterminados**, con el enfoque de superposición, sin evaluar las constantes.

**Solución complementaria.** La ecuación homogénea asociada es $y^{iv} - 2y'' + y = 0$. Su ecuación característica es

$$
r^4 - 2r^2 + 1 = (r^2-1)^2 = (r-1)^2(r+1)^2 = 0,
$$

cuyas raíces son $r = 1$ y $r = -1$, ambas dobles. Por tanto,

$$
y_c = (c_1 + c_2 x)e^{x} + (c_3 + c_4 x)e^{-x}.
$$

**Forma de la solución particular.** El término no homogéneo es $g(x) = e^x + \sin x$. Por el principio de superposición se propone una forma de prueba para cada sumando y se reúnen al final.

Para el término $e^x$, la forma natural sería $Ae^x$. Sin embargo, $e^x$ y $xe^x$ ya figuran en $y_c$, porque $r = 1$ es raíz doble del polinomio auxiliar. La **regla de modificación** exige multiplicar por la menor potencia de $x$ que elimine la duplicación, esto es, por $x^2$:

$$
Y_1 = Ax^2 e^x.
$$

Para el término $\sin x$, la forma natural es $B\cos x + C\sin x$, que corresponde a las raíces complejas $\pm i$. Estas no son raíces del polinomio auxiliar, cuyas raíces son $1$ y $-1$. No hay duplicación y no se necesita ningún factor $x$:

$$
Y_2 = B\cos x + C\sin x.
$$

**Forma propuesta.** Al reunir ambas contribuciones,

$$
Y(x) = Ax^2 e^x + B\cos x + C\sin x.
$$

## Observaciones

El factor $x^2$ de la parte exponencial no es opcional. Si se ensayara $Ae^x$ o $Axe^x$, el miembro izquierdo de la ecuación anularía esa expresión, pues $e^x$ y $xe^x$ resuelven la ecuación homogénea, y no podría igualarse a $e^x$.

La regla de modificación se aplica con la menor potencia de $x$ que rompe la duplicación. Como $r = 1$ es una raíz doble, basta $x^2$; si fuera simple bastaría $x^1$ y si fuera triple haría falta $x^3$.

El término trigonométrico no requiere modificación porque $\pm i$ no son raíces del polinomio auxiliar. Las constantes $A$, $B$ y $C$ quedan sin determinar, según lo pedido.

### Método alternativo: aniquiladores

El mismo resultado se obtiene con **aniquiladores**. El operador $D-1$ aniquila $e^x$ y el operador $D^2+1$ aniquila $\sin x$. Al aplicar ambos a la ecuación resulta una ecuación homogénea cuya ecuación característica es

$$
(r-1)^3(r+1)^2(r^2+1) = 0.
$$

La forma de $Y(x)$ es la parte de su solución general que no pertenece a $y_c$. Como la raíz $r=1$ pasa a ser triple, aporta $x^2e^x$; las raíces nuevas $\pm i$ aportan $\cos x$ y $\sin x$.
