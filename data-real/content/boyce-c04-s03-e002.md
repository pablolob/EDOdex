
## Enunciado

En cada uno de los problemas 1 a 8, halle la solución general de la ecuación diferencial dada.

2. $y^{(iv)} - y = 3x + \cos x$

## Solución

$$
y(x) = C_1 e^{x} + C_2 e^{-x} + C_3\cos x + C_4\sin x - 3x - \frac{1}{4}\,x\sin x.
$$

## Resolución

La ecuación es lineal, no homogénea y de coeficientes constantes. Su solución general tiene la estructura $y = y_c + Y$, donde $y_c$ es la solución de la ecuación homogénea asociada y $Y$ una solución particular.

**Solución complementaria.** La ecuación homogénea es $y^{(iv)} - y = 0$, con ecuación característica

$$
r^4 - 1 = (r^2-1)(r^2+1) = (r-1)(r+1)(r^2+1) = 0.
$$

Las raíces son $r = 1$, $r = -1$, $r = i$ y $r = -i$. Las dos primeras son reales distintas; el par complejo conjugado $\pm i$ aporta las funciones $\cos x$ y $\sin x$. Por tanto,

$$
y_c = C_1 e^{x} + C_2 e^{-x} + C_3\cos x + C_4\sin x.
$$

**Solución particular.** El término no homogéneo $g(x) = 3x + \cos x$ se trata por **superposición**. Para el polinomio $3x$ se propone $Y_1 = Ax + B$. Para el término $\cos x$ la forma natural $C\cos x + D\sin x$ duplica funciones de $y_c$; la **regla de modificación** obliga a multiplicarla por $x$,

$$
Y_2 = x(C\cos x + D\sin x).
$$

La solución particular de prueba es $Y = Y_1 + Y_2 = Ax + B + x(C\cos x + D\sin x)$. Sus derivadas sucesivas son

$$
\begin{aligned}
Y' &= A + C(\cos x - x\sin x) + D(\sin x + x\cos x), \\
Y'' &= -2C\sin x - Cx\cos x + 2D\cos x - Dx\sin x, \\
Y''' &= -3C\cos x - 3D\sin x + Cx\sin x - Dx\cos x, \\
Y^{(iv)} &= 4C\sin x - 4D\cos x + Cx\cos x + Dx\sin x.
\end{aligned}
$$

Al restar $Y$ se cancelan los términos en $x\cos x$ y $x\sin x$:

$$
Y^{(iv)} - Y = 4C\sin x - 4D\cos x - Ax - B.
$$

La igualdad $Y^{(iv)} - Y = 3x + \cos x$ se satisface igualando coeficientes:

$$
-A = 3, \qquad -B = 0, \qquad 4C = 0, \qquad -4D = 1.
$$

De aquí $A = -3$, $B = 0$, $C = 0$ y $D = -\tfrac{1}{4}$. Así,

$$
Y = -3x - \frac{1}{4}\,x\sin x.
$$

Al sumar $y_c$ y $Y$ resulta la solución general

$$
y(x) = C_1 e^{x} + C_2 e^{-x} + C_3\cos x + C_4\sin x - 3x - \frac{1}{4}\,x\sin x.
$$

## Observaciones

La solución es válida para todo $x \in \mathbb{R}$: la ecuación tiene coeficientes constantes y el término no homogéneo está definido en toda la recta.

El término $-3x$ proviene del polinomio $3x$; el coeficiente constante $B$ resulta nulo porque el término no homogéneo carece de parte constante. La presencia de $x\sin x$ se debe a que $\cos x$ y $\sin x$ ya figuraban en $y_c$.

### Método alternativo: aniquiladores

El mismo resultado se obtiene aplicando operadores aniquiladores. $D^2$ aniquila a $3x$ y $D^2+1$ aniquila a $\cos x$; aplicando $(D^2+1)D^2$ a la ecuación se obtiene la homogénea $(D^2+1)D^2(D^4-1)y = 0$, con ecuación característica $r^2(r^2+1)(r^4-1)=0$. Sus raíces son $0$ (doble), $\pm 1$ y $\pm i$ (cada una doble), de modo que la forma de prueba es $A + Bx + x(C\cos x + D\sin x)$ tras descartar las funciones que ya aparecen en $y_c$. Es la misma $Y$ empleada arriba.
