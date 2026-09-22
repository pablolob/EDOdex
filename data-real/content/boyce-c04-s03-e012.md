
## Enunciado

En cada uno de los problemas 12 a 17, determine una forma adecuada para $Y(x)$, si ha de aplicarse el método de los coeficientes indeterminados. No evalúe las constantes.

12. $y''' - 2y'' + y' = x^3 + 2e^x$

## Solución

$$
Y(x) = x(Ax^3 + Bx^2 + Cx + D) + Ex^2 e^{x}.
$$

## Resolución

La ecuación es **lineal**, de **tercer orden**, **no homogénea** y con coeficientes constantes. El término no homogéneo es $g(x) = x^3 + 2e^x$. La forma de la solución particular $Y$ se construye a partir de las raíces de la ecuación característica de la ecuación homogénea asociada.

**Ecuación homogénea.** La ecuación característica es

$$
r^3 - 2r^2 + r = r(r^2 - 2r + 1) = r(r-1)^2 = 0.
$$

Sus raíces son $r = 0$ (simple) y $r = 1$ (doble). Por tanto,

$$
y_c = c_1 + c_2 e^{x} + c_3 x e^{x}.
$$

**Forma de la solución particular.** Por el principio de superposición se propone una forma para cada sumando de $g(x)$.

Para el polinomio $x^3$ la forma natural es un polinomio del mismo grado,

$$
Ax^3 + Bx^2 + Cx + D.
$$

Su término constante $D$ ya figura en $y_c$ (asociado a la raíz $r = 0$). La **regla de modificación** obliga a multiplicar por $x$:

$$
Y_1 = x(Ax^3 + Bx^2 + Cx + D) = Ax^4 + Bx^3 + Cx^2 + Dx.
$$

Basta una sola potencia de $x$ porque $r = 0$ es raíz simple; ninguno de los términos resultantes duplica ya a los de $y_c$.

Para el término $2e^{x}$ la forma natural $Ee^{x}$ figura en $y_c$ (raíz $r = 1$). Como $r = 1$ es raíz doble, la regla de modificación exige multiplicar por $x^2$:

$$
Y_2 = Ex^2 e^{x}.
$$

Al sumar ambas contribuciones, la forma adecuada es

$$
Y(x) = x(Ax^3 + Bx^2 + Cx + D) + Ex^2 e^{x}.
$$

No se evalúan las constantes $A$, $B$, $C$, $D$ y $E$, según pide el enunciado.

## Observaciones

La raíz $r = 0$ aparece porque la ecuación carece del término en $y$; por eso el término constante del polinomio de prueba interfiere con $y_c$ y debe absorberse con el factor $x$.

La multiplicación por $x^2$ en el término exponencial refleja la multiplicidad dos de la raíz $r = 1$: cada duplicación con la parte homogénea exige un factor $x$ adicional.

### Método alternativo: aniquiladores

El mismo resultado se obtiene con operadores aniquiladores. El operador $D^4$ aniquila a $x^3$ y $D-1$ aniquila a $e^x$. Aplicando $D^4(D-1)$ a la ecuación, escrita como $D(D-1)^2 y = x^3 + 2e^x$, se obtiene la ecuación homogénea

$$
D^5 (D-1)^3 y = 0,
$$

con raíces $r = 0$ de multiplicidad cinco y $r = 1$ de multiplicidad tres. La solución general de esta ecuación aumentada es $c_1 + c_2 x + c_3 x^2 + c_4 x^3 + c_5 x^4 + e^x(c_6 + c_7 x + c_8 x^2)$. Al descartar los términos que ya forman $y_c$ (constante, $e^x$ y $xe^x$) queda la misma forma de prueba $Ax^4 + Bx^3 + Cx^2 + Dx + Ex^2 e^x$.
