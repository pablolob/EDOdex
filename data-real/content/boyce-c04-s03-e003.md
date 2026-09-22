
## Enunciado

En cada uno de los problemas 1 a 8, halle la solución general de la ecuación diferencial dada.

3. $y''' + y'' + y' + y = e^{-x} + 4x$

## Solución

$$
y = c_1 e^{-x} + c_2 \cos x + c_3 \sin x + \frac{1}{2} x e^{-x} + 4x - 4.
$$

## Resolución

La ecuación es **lineal**, de **tercer orden**, **no homogénea** y con coeficientes constantes. Su solución general tiene la estructura $y = y_c + y_p$, donde $y_c$ resuelve la ecuación homogénea asociada e $y_p$ es una solución particular.

**Solución complementaria.** La ecuación característica es

$$
r^3 + r^2 + r + 1 = 0.
$$

La factorización por agrupación da

$$
r^3 + r^2 + r + 1 = r^2(r+1) + (r+1) = (r+1)(r^2+1).
$$

Las raíces son $r=-1$ y el par complejo conjugado $r=\pm i$. La raíz real aporta $e^{-x}$; el par complejo aporta $\cos x$ y $\sin x$. Por tanto,

$$
y_c = c_1 e^{-x} + c_2 \cos x + c_3 \sin x.
$$

**Solución particular.** El término no homogéneo es $g(x) = e^{-x} + 4x$. Se aplica el principio de superposición y se busca una solución particular para cada sumando.

Para el término polinómico $4x$ se propone $Y_1 = Ax + B$. Esta forma no duplica ningún término de $y_c$, ya que $r=0$ no es raíz del polinomio auxiliar. Sus derivadas son $Y_1' = A$ y $Y_1'' = Y_1''' = 0$. Al sustituir,

$$
Y_1''' + Y_1'' + Y_1' + Y_1 = A + (Ax + B) = Ax + (A+B).
$$

La igualdad $Ax + (A+B) = 4x$ fija $A = 4$ y $B = -4$. Así, $Y_1 = 4x - 4$.

Para el término $e^{-x}$ la forma natural $Ce^{-x}$ duplica al término $c_1 e^{-x}$ de $y_c$. La **regla de modificación** obliga a multiplicar por $x$:

$$
Y_2 = C x e^{-x}.
$$

Sus derivadas son

$$
Y_2' = C e^{-x}(1-x), \qquad Y_2'' = C e^{-x}(x-2), \qquad Y_2''' = C e^{-x}(3-x).
$$

Al sustituir en el miembro izquierdo,

$$
\begin{aligned}
Y_2''' + Y_2'' + Y_2' + Y_2
&= C e^{-x}\bigl[(3-x) + (x-2) + (1-x) + x\bigr] \\
&= C e^{-x}\bigl[3 - x + x - 2 + 1 - x + x\bigr] \\
&= 2C e^{-x}.
\end{aligned}
$$

La igualdad $2C e^{-x} = e^{-x}$ fija $C = \tfrac{1}{2}$. Por tanto,

$$
y_p = 4x - 4 + \frac{1}{2} x e^{-x}.
$$

**Solución general.** Al reunir ambas partes,

$$
y = c_1 e^{-x} + c_2 \cos x + c_3 \sin x + \frac{1}{2} x e^{-x} + 4x - 4.
$$

Los coeficientes de la ecuación son constantes y $g(x)$ está definida en todo $\mathbb{R}$, de modo que la solución general es válida en el intervalo $(-\infty, \infty)$.

## Observaciones

La regla de modificación se aplica cuando la forma de prueba de $y_p$ ya figura en $y_c$: se multiplica por la menor potencia de $x$ que elimine la duplicación. Aquí $e^{-x}$ es solución de la homogénea y por eso aparece $x e^{-x}$.

El par de raíces complejas $\pm i$ genera $\cos x$ y $\sin x$ en $y_c$, pero no interviene en la parte particular, porque $g(x)$ no contiene funciones trigonométricas.

Los dos términos exponenciales pueden combinarse como $\left(c_1 + \tfrac{1}{2}x\right)e^{-x}$; mantener separadas la parte complementaria y la particular es la presentación habitual.

### Método alternativo: aniquiladores

El mismo resultado se obtiene con operadores aniquiladores. El operador $D+1$ aniquila a $e^{-x}$ y $D^2$ aniquila a $4x$. Al aplicar $(D+1)D^2$ a la ecuación se obtiene la homogénea

$$
(D+1)D^2(D+1)(D^2+1)y = (D+1)^2 D^2 (D^2+1)y = 0,
$$

cuya ecuación característica $(r+1)^2 r^2 (r^2+1)=0$ tiene raíces $r=-1$ (doble), $r=0$ (doble) y $r=\pm i$. La forma de prueba es $c_1 e^{-x} + C x e^{-x} + A + Bx + c_2\cos x + c_3\sin x$; tras descartar las funciones que ya aparecen en $y_c$ queda $C x e^{-x} + A + Bx$, la misma $y_p$ empleada arriba.
