
## Enunciado

En cada uno de los problemas 12 a 17, determine una forma adecuada para $Y(x)$, si ha de aplicarse el método de los coeficientes indeterminados. No evalúe las constantes.

17. $y^{iv} + 2y''' + 2y'' = 3e^x + 2xe^{-x} + e^{-x}\sin x$

## Solución

$$
Y(x) = Ae^{x} + (Bx + C)e^{-x} + xe^{-x}(D\cos x + E\sin x).
$$

## Resolución

La ecuación es **lineal**, de **cuarto orden**, **no homogénea** y con coeficientes constantes. El término no homogéneo es $g(x) = 3e^x + 2xe^{-x} + e^{-x}\sin x$. La forma de la solución particular $Y$ se construye a partir de las raíces de la ecuación característica de la ecuación homogénea asociada.

**Ecuación homogénea.** La ecuación característica es

$$
r^4 + 2r^3 + 2r^2 = r^2(r^2 + 2r + 2) = 0.
$$

Sus raíces son $r = 0$ (doble) y las raíces complejas de $r^2 + 2r + 2 = 0$, es decir $r = -1 \pm i$. Por tanto,

$$
y_c = c_1 + c_2 x + e^{-x}(c_3 \cos x + c_4 \sin x).
$$

**Forma de la solución particular.** Por el principio de superposición se propone una forma para cada sumando de $g(x)$.

Para el término $3e^x$ la forma natural es $Ae^x$. El valor $r = 1$ no es raíz de la ecuación característica, de modo que no hay duplicación:

$$
Y_1 = Ae^x.
$$

Para el término $2xe^{-x}$ la forma natural es $(Bx + C)e^{-x}$. El valor $r = -1$ no es raíz de la ecuación característica: las raíces asociadas al factor exponencial son $-1 \pm i$, no $-1$. Por tanto, no se aplica la **regla de modificación**:

$$
Y_2 = (Bx + C)e^{-x}.
$$

Para el término $e^{-x}\sin x$ la forma natural es $e^{-x}(D\cos x + E\sin x)$. Esta forma ya figura en $y_c$, porque $r = -1 \pm i$ son raíces simples. La regla de modificación obliga a multiplicar por $x$:

$$
Y_3 = xe^{-x}(D\cos x + E\sin x).
$$

Al reunir las tres contribuciones, la forma adecuada es

$$
Y(x) = Ae^x + (Bx + C)e^{-x} + xe^{-x}(D\cos x + E\sin x).
$$

No se evalúan las constantes $A$, $B$, $C$, $D$ y $E$, según pide el enunciado.

## Observaciones

La regla de modificación se aplica solo al término trigonométrico, porque $e^{-x}\cos x$ y $e^{-x}\sin x$ son soluciones de la ecuación homogénea. El factor $e^{-x}$ aislado y $xe^{-x}$ no lo son, de modo que la forma $(Bx + C)e^{-x}$ no se multiplica por $x$.

La forma de prueba del término $e^{-x}\sin x$ incluye también $\cos x$: la pareja $\{e^{-x}\cos x,\, e^{-x}\sin x\}$ se trata como un bloque, con una constante independiente para cada función.

### Método alternativo: aniquiladores

El operador $D-1$ aniquila a $e^x$, el operador $(D+1)^2$ aniquila a $xe^{-x}$ y el operador $D^2 + 2D + 2 = (D+1)^2 + 1$ aniquila a $e^{-x}\sin x$. La ecuación, escrita como $D^2(D^2 + 2D + 2)y = g(x)$, admite aplicar el producto de aniquiladores $(D-1)(D+1)^2(D^2 + 2D + 2)$. La ecuación homogénea resultante añade a las raíces de $y_c$ los valores $1$, $-1$ (doble) y $-1 \pm i$. Al descartar los términos que ya forman $y_c$ queda la misma forma de prueba $Ae^x + (Bx + C)e^{-x} + xe^{-x}(D\cos x + E\sin x)$.
