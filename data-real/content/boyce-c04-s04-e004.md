
## Enunciado

Dado que $x$, $x^2$ y $1/x$ son soluciones de la ecuación homogénea correspondiente a

$$x^3 y''' + x^2 y'' - 2xy' + 2y = 2x^4, \quad x > 0,$$

determine una solución particular.

## Solución

Una solución particular es

$$
y_p = \frac{1}{15}x^4.
$$

## Resolución

La ecuación es **lineal**, de **tercer orden**, **no homogénea** y con coeficientes variables. El enunciado proporciona un conjunto fundamental de la ecuación homogénea asociada,

$$
y_1 = x, \qquad y_2 = x^2, \qquad y_3 = \frac{1}{x},
$$

y pide una solución particular. La vía directa es la **variación de parámetros**, que solo requiere un conjunto fundamental y el término no homogéneo.

**Forma estándar.** El coeficiente de $y'''$ debe ser $1$. Como $x>0$, se divide la ecuación entre $x^3$:

$$
y''' + \frac{1}{x}y'' - \frac{2}{x^2}y' + \frac{2}{x^3}y = 2x.
$$

El término no homogéneo es $g(x)=2x$, no $2x^4$.

**Sistema de variación de parámetros.** Se busca $y_p = u_1 y_1 + u_2 y_2 + u_3 y_3$, donde las funciones $u_k$ satisfacen

$$
\begin{aligned}
u_1' x + u_2' x^2 + u_3' x^{-1} &= 0, \\
u_1' + u_2'(2x) - u_3' x^{-2} &= 0, \\
2u_2' + 2x^{-3}u_3' &= 2x.
\end{aligned}
$$

El wronskiano del conjunto fundamental es

$$
W = \begin{vmatrix} x & x^2 & x^{-1} \\ 1 & 2x & -x^{-2} \\ 0 & 2 & 2x^{-3} \end{vmatrix} = 6x^{-1}.
$$

Por la regla de Cramer, $u_k' = W_k/W$, donde $W_k$ se obtiene sustituyendo la $k$-ésima columna de $W$ por $(0,0,2x)$:

$$
\begin{aligned}
W_1 &= \begin{vmatrix} 0 & x^2 & x^{-1} \\ 0 & 2x & -x^{-2} \\ 2x & 2 & 2x^{-3} \end{vmatrix} = -6x, \\
W_2 &= \begin{vmatrix} x & 0 & x^{-1} \\ 1 & 0 & -x^{-2} \\ 0 & 2x & 2x^{-3} \end{vmatrix} = 4, \\
W_3 &= \begin{vmatrix} x & x^2 & 0 \\ 1 & 2x & 0 \\ 0 & 2 & 2x \end{vmatrix} = 2x^3.
\end{aligned}
$$

Entonces

$$
u_1' = \frac{-6x}{6x^{-1}} = -x^2, \qquad u_2' = \frac{4}{6x^{-1}} = \frac{2}{3}x, \qquad u_3' = \frac{2x^3}{6x^{-1}} = \frac{1}{3}x^4.
$$

**Integración.** Se toman las constantes de integración iguales a cero, pues solo se requiere una solución particular:

$$
u_1 = -\frac{x^3}{3}, \qquad u_2 = \frac{x^2}{3}, \qquad u_3 = \frac{x^5}{15}.
$$

**Solución particular.** Al sustituir en $y_p = u_1 y_1 + u_2 y_2 + u_3 y_3$,

$$
y_p = -\frac{x^3}{3}\cdot x + \frac{x^2}{3}\cdot x^2 + \frac{x^5}{15}\cdot\frac{1}{x}
= -\frac{x^4}{3} + \frac{x^4}{3} + \frac{x^4}{15}
= \frac{x^4}{15}.
$$

Los dos primeros términos se cancelan, de modo que

$$
y_p = \frac{1}{15}x^4.
$$

**Comprobación.** Con $y_p = x^4/15$ se tiene $y_p' = 4x^3/15$, $y_p'' = 12x^2/15$ y $y_p''' = 24x/15$. Por tanto,

$$
x^3 y_p''' + x^2 y_p'' - 2x y_p' + 2y_p
= \frac{24 + 12 - 8 + 2}{15}x^4
= \frac{30}{15}x^4 = 2x^4.
$$

La función satisface la ecuación diferencial dada.

**Validez.** Los coeficientes de la forma estándar son continuos en $x>0$ y $g(x)=2x$ también lo es. La solución particular es válida en el intervalo $x>0$ indicado en el enunciado.

## Observaciones

La división entre $x^3$ para llegar a la forma estándar es imprescindible: el término que se coloca en la última ecuación del sistema es $g(x)=2x$, no $2x^4$. Usar $2x^4$ conduce a un resultado incorrecto.

Las constantes de integración de los $u_k$ se fijan en cero. Cualquier otra elección añade una combinación de $y_1$, $y_2$ y $y_3$, es decir, una solución de la ecuación homogénea, y no altera la validez de $y_p$.

### Método alternativo: ansatz de potencia

La ecuación es de tipo Cauchy-Euler y el término no homogéneo es una potencia $x^4$. Un ansatz $y_p = Ax^4$ satisface

$$
x^3(24Ax) + x^2(12Ax^2) - 2x(4Ax^3) + 2Ax^4 = 30Ax^4 = 2x^4,
$$

de donde $A = 1/15$. Este atajo reproduce el mismo resultado, pero solo es aplicable porque el operador transforma $x^4$ en un múltiplo de $x^4$; la variación de parámetros es el método general de la sección.
