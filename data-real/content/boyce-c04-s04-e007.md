
## Enunciado

Halle una fórmula que comprenda integrales para una solución particular de la ecuación diferencial

$$y''' - 3y'' + 3y' - y = g(x).$$

Si $g(x) = x^{-2}e^x$, determine $Y$.

## Solución

La fórmula integral para una solución particular es

$$
Y(x) = \frac{1}{2}\int_{x_0}^{x} (x-t)^2 e^{x-t} g(t)\,dt.
$$

Para $g(x) = x^{-2}e^x$,

$$
Y(x) = -x e^x \ln|x|, \qquad x \neq 0.
$$

## Resolución

La ecuación $y''' - 3y'' + 3y' - y = g(x)$ es **lineal**, de **tercer orden**, **no homogénea** y con coeficientes constantes. La fórmula integral se obtiene mediante **variación de parámetros**.

**Ecuación homogénea.** La ecuación característica asociada es

$$
r^3 - 3r^2 + 3r - 1 = (r-1)^3 = 0,
$$

con la raíz triple $r=1$. Un conjunto fundamental de soluciones es

$$
y_1 = e^x, \qquad y_2 = x e^x, \qquad y_3 = x^2 e^x.
$$

**Sistema de variación de parámetros.** Se busca $Y = u_1 y_1 + u_2 y_2 + u_3 y_3$, donde las funciones $u_k$ satisfacen

$$
\begin{aligned}
u_1' y_1 + u_2' y_2 + u_3' y_3 &= 0, \\
u_1' y_1' + u_2' y_2' + u_3' y_3' &= 0, \\
u_1' y_1'' + u_2' y_2'' + u_3' y_3'' &= g(x).
\end{aligned}
$$

El Wronskiano del conjunto fundamental es

$$
W = \begin{vmatrix}
e^x & x e^x & x^2 e^x \\
e^x & (x+1)e^x & (x^2+2x)e^x \\
e^x & (x+2)e^x & (x^2+4x+2)e^x
\end{vmatrix} = 2e^{3x}.
$$

Por la regla de Cramer, $u_k' = W_k/W$, donde $W_k$ se obtiene sustituyendo la $k$-ésima columna de $W$ por el vector $(0,0,g(x))$. Al desarrollar por la columna sustituida,

$$
\begin{aligned}
W_1 &= g(x)\,(y_2 y_3' - y_2' y_3)
      = g(x)\bigl[x e^x (2x+x^2)e^x - (1+x)e^x \cdot x^2 e^x\bigr]
      = x^2 g(x) e^{2x}, \\
W_2 &= -g(x)\,(y_1 y_3' - y_1' y_3)
      = -g(x)\bigl[e^x (2x+x^2)e^x - e^x \cdot x^2 e^x\bigr]
      = -2x\,g(x)e^{2x}, \\
W_3 &= g(x)\,(y_1 y_2' - y_1' y_2)
      = g(x)\bigl[e^x (1+x)e^x - e^x \cdot x e^x\bigr]
      = g(x)e^{2x}.
\end{aligned}
$$

Entonces

$$
u_1' = \frac{x^2}{2}g(x)e^{-x}, \qquad
u_2' = -x\,g(x)e^{-x}, \qquad
u_3' = \frac{1}{2}g(x)e^{-x}.
$$

**Fórmula integral.** Se integra cada $u_k'$ con una variable muda $t$ y se sustituye en $Y$:

$$
\begin{aligned}
Y(x) &= e^x \int \frac{t^2}{2} g(t)e^{-t}\,dt
      + x e^x \int (-t)\,g(t)e^{-t}\,dt
      + x^2 e^x \int \frac{1}{2} g(t)e^{-t}\,dt \\
     &= \frac{1}{2} e^x \int \bigl(t^2 - 2xt + x^2\bigr) g(t)e^{-t}\,dt \\
     &= \frac{1}{2} \int (x-t)^2 e^{x-t} g(t)\,dt.
\end{aligned}
$$

Con una integral definida entre un punto fijo $x_0$ y $x$ se obtiene la fórmula

$$
Y(x) = \frac{1}{2}\int_{x_0}^{x} (x-t)^2 e^{x-t} g(t)\,dt.
$$

**Caso $g(x) = x^{-2}e^x$.** Al sustituir $g(t) = t^{-2}e^{t}$, el factor exponencial se cancela:

$$
Y(x) = \frac{1}{2}\int (x-t)^2 e^{x-t} t^{-2}e^{t}\,dt
      = \frac{1}{2} e^x \int \frac{(x-t)^2}{t^2}\,dt.
$$

El integrando se descompone como

$$
\frac{(x-t)^2}{t^2} = 1 - \frac{2x}{t} + \frac{x^2}{t^2},
$$

cuya primitiva es $t - 2x\ln|t| - \dfrac{x^2}{t}$. Al evaluar entre $x_0$ y $x$,

$$
Y(x) = \frac{1}{2} e^x \left[ -2x\ln|x| - x_0 + 2x\ln|x_0| + \frac{x^2}{x_0} \right].
$$

Los términos con $x_0$ son combinaciones de $e^x$, $x e^x$ y $x^2 e^x$, es decir, soluciones de la ecuación homogénea, por lo que se descartan. Una solución particular es

$$
Y(x) = -x e^x \ln|x|.
$$

**Comprobación.** Con $L = \ln|x|$ se tiene

$$
\begin{aligned}
Y' &= -e^x(1 + L + xL), \\
Y'' &= -e^x\left(2 + 2L + xL + \frac{1}{x}\right), \\
Y''' &= -e^x\left(3 + 3L + xL + \frac{3}{x} - \frac{1}{x^2}\right).
\end{aligned}
$$

Al sustituir, todos los términos se cancelan salvo el último:

$$
Y''' - 3Y'' + 3Y' - Y = -e^x\left(-\frac{1}{x^2}\right) = \frac{e^x}{x^2} = g(x).
$$

La función $g(x) = x^{-2}e^x$ es continua en $x \neq 0$, de modo que la solución particular es válida en $(-\infty, 0)$ o en $(0,\infty)$.

## Observaciones

La elección del límite inferior $x_0$ solo añade términos de la solución complementaria, por lo que cualquier $x_0$ en el intervalo de trabajo conduce a la misma solución particular salvo solución homogénea.

La cancelación $e^{-t}e^{t}=1$ es propia de este término no homogéneo. Para una $g$ arbitraria la fórmula conserva el núcleo $e^{x-t}$.

### Método alternativo: sustitución $y = e^x v$

El polinomio característico es $(r-1)^3$, así que la sustitución $y = e^x v(x)$ reduce la ecuación. La identidad $(D-1)^3[e^x v] = e^x v'''$ transforma $y''' - 3y'' + 3y' - y = x^{-2}e^x$ en $v''' = x^{-2}$. Integrando tres veces,

$$
v = -x\ln|x| + C_1 x^2 + C_2 x + C_3,
$$

de donde $y = -x e^x\ln|x|$ salvo términos de la solución homogénea, en concordancia con el resultado anterior.
