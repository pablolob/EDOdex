
## Enunciado

En cada uno de los problemas 12 a 17, determine una forma adecuada para $Y(x)$, si ha de aplicarse el método de los coeficientes indeterminados. No evalúe las constantes.

15. $y^{iv} + 4y'' = \sin 2x + xe^x + 4$

## Solución

La solución complementaria es

$$
y_c = c_1 + c_2 x + c_3 \cos 2x + c_4 \sin 2x.
$$

La forma adecuada de la solución particular es

$$
Y(x) = A x^2 + x\left(B\cos 2x + C\sin 2x\right) + (D x + E)e^x.
$$

## Resolución

Se aplica el **método de los coeficientes indeterminados** por superposición. La ecuación es lineal, no homogénea y de coeficientes constantes. El término no homogéneo es la suma de tres términos,

$$
g(x) = \underbrace{4}_{g_1} + \underbrace{\sin 2x}_{g_2} + \underbrace{xe^x}_{g_3}.
$$

**Solución complementaria.** El polinomio característico de la ecuación homogénea es

$$
r^4 + 4r^2 = r^2\left(r^2 + 4\right) = 0.
$$

Sus raíces son $r = 0$ (doble) y $r = \pm 2i$. Por tanto,

$$
y_c = c_1 + c_2 x + c_3 \cos 2x + c_4 \sin 2x.
$$

**Formas de prueba.** Se propone una forma para cada término de $g$ y se corrige con la **regla de modificación** cuando duplica algún término de $y_c$.

- Para $g_1 = 4$, la forma inicial es la constante $A$. Como $r = 0$ es raíz doble del polinomio característico, tanto $1$ como $x$ ya aparecen en $y_c$; se multiplica por $x^2$ y resulta $Y_1 = A x^2$.
- Para $g_2 = \sin 2x$, la forma inicial es $B\cos 2x + C\sin 2x$. Como $r = \pm 2i$ son raíces simples, $\cos 2x$ y $\sin 2x$ ya aparecen en $y_c$; se multiplica por $x$ y resulta $Y_2 = x\left(B\cos 2x + C\sin 2x\right)$.
- Para $g_3 = xe^x$, la forma inicial es $(D x + E)e^x$. El valor $r = 1$ no es raíz del polinomio característico, de modo que $e^x$ no figura en $y_c$ y no se necesita modificación: $Y_3 = (D x + E)e^x$.

Por el **principio de superposición**, la forma de la solución particular es la suma de las tres formas anteriores:

$$
Y(x) = A x^2 + x\left(B\cos 2x + C\sin 2x\right) + (D x + E)e^x.
$$

## Observaciones

El término constante $4$ es el único que obliga a multiplicar por $x^2$. El valor $r = 0$ es raíz doble del polinomio característico, así que tanto $1$ como $x$ ya están en $y_c$ y la modificación debe aplicarse dos veces. En cambio, $e^x$ no resuelve la ecuación homogénea, por lo que $(D x + E)e^x$ no requiere modificación. El enunciado solo pide la forma de $Y$; no es necesario determinar los valores de $A$, $B$, $C$, $D$ y $E$.
