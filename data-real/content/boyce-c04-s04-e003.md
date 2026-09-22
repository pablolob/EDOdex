
## Enunciado

En cada uno de los problemas 1 a 3, aplique el método de parámetros para determinar una solución particular de la ecuación diferencial dada.

3. $y''' - 2y'' - y' + 2y = e^{4x}$

## Solución

$$
y_p = \frac{1}{30}e^{4x}.
$$

## Resolución

La ecuación es **lineal**, de **tercer orden**, **no homogénea** y con coeficientes constantes. Se pide una solución particular mediante **variación de parámetros**, de modo que primero se determina un conjunto fundamental de la ecuación homogénea asociada.

**Ecuación homogénea.** La ecuación asociada es $y''' - 2y'' - y' + 2y = 0$. Su ecuación característica es

$$
r^3 - 2r^2 - r + 2 = (r-1)(r-2)(r+1) = 0,
$$

cuyas raíces son $r=1$, $r=2$ y $r=-1$. El conjunto fundamental correspondiente es

$$
y_1 = e^{x}, \qquad y_2 = e^{2x}, \qquad y_3 = e^{-x}.
$$

**Sistema de variación de parámetros.** Se busca $y_p = u_1 y_1 + u_2 y_2 + u_3 y_3$, donde las funciones $u_k$ satisfacen

$$
\begin{aligned}
u_1' y_1 + u_2' y_2 + u_3' y_3 &= 0, \\
u_1' y_1' + u_2' y_2' + u_3' y_3' &= 0, \\
u_1' y_1'' + u_2' y_2'' + u_3' y_3'' &= e^{4x}.
\end{aligned}
$$

Con $y_1=e^{x}$, $y_2=e^{2x}$ y $y_3=e^{-x}$ el sistema resulta

$$
\begin{aligned}
u_1' e^{x} + u_2' e^{2x} + u_3' e^{-x} &= 0, \\
u_1' e^{x} + 2u_2' e^{2x} - u_3' e^{-x} &= 0, \\
u_1' e^{x} + 4u_2' e^{2x} + u_3' e^{-x} &= e^{4x}.
\end{aligned}
$$

El wronskiano del conjunto fundamental es

$$
W = \begin{vmatrix} e^{x} & e^{2x} & e^{-x} \\ e^{x} & 2e^{2x} & -e^{-x} \\ e^{x} & 4e^{2x} & e^{-x} \end{vmatrix} = e^{2x}\begin{vmatrix} 1 & 1 & 1 \\ 1 & 2 & -1 \\ 1 & 4 & 1 \end{vmatrix} = 6e^{2x}.
$$

Por la regla de Cramer, cada derivada es el cociente entre el determinante con la columna correspondiente sustituida por $(0,0,e^{4x})$ y $W$:

$$
\begin{aligned}
W_1 &= \begin{vmatrix} 0 & e^{2x} & e^{-x} \\ 0 & 2e^{2x} & -e^{-x} \\ e^{4x} & 4e^{2x} & e^{-x} \end{vmatrix} = -3e^{5x}, \\
W_2 &= \begin{vmatrix} e^{x} & 0 & e^{-x} \\ e^{x} & 0 & -e^{-x} \\ e^{x} & e^{4x} & e^{-x} \end{vmatrix} = 2e^{4x}, \\
W_3 &= \begin{vmatrix} e^{x} & e^{2x} & 0 \\ e^{x} & 2e^{2x} & 0 \\ e^{x} & 4e^{2x} & e^{4x} \end{vmatrix} = e^{7x}.
\end{aligned}
$$

Entonces

$$
u_1' = \frac{W_1}{W} = -\frac{1}{2}e^{3x}, \qquad u_2' = \frac{W_2}{W} = \frac{1}{3}e^{2x}, \qquad u_3' = \frac{W_3}{W} = \frac{1}{6}e^{5x}.
$$

**Integración.** Al integrar cada expresión y tomar las constantes de integración iguales a cero,

$$
u_1 = -\frac{1}{6}e^{3x}, \qquad u_2 = \frac{1}{6}e^{2x}, \qquad u_3 = \frac{1}{30}e^{5x}.
$$

**Solución particular.** Al sustituir,

$$
\begin{aligned}
y_p &= u_1 e^{x} + u_2 e^{2x} + u_3 e^{-x} \\
&= -\frac{1}{6}e^{4x} + \frac{1}{6}e^{4x} + \frac{1}{30}e^{4x} \\
&= \frac{1}{30}e^{4x}.
\end{aligned}
$$

**Comprobación.** Para $y_p = \tfrac{1}{30}e^{4x}$ se tiene $y_p' = \tfrac{4}{30}e^{4x}$, $y_p'' = \tfrac{16}{30}e^{4x}$ y $y_p''' = \tfrac{64}{30}e^{4x}$. Por tanto,

$$
y_p''' - 2y_p'' - y_p' + 2y_p = \frac{64-32-4+2}{30}e^{4x} = e^{4x}.
$$

La función satisface la ecuación diferencial dada.

El término no homogéneo $e^{4x}$ es continuo en todo $\mathbb{R}$ y los coeficientes son constantes, de modo que la solución particular es válida en $(-\infty,\infty)$.

## Observaciones

La constante de integración se toma igual a cero en cada $u_k$. Cualquier otra elección añade términos de la solución complementaria a $y_p$ y no altera su validez como solución particular.

### Método alternativo: coeficientes indeterminados

Como el término no homogéneo es exponencial, también puede aplicarse el método de coeficientes indeterminados. La forma de prueba es $Y = Ae^{4x}$. Al sustituir, $(64-32-4+2)Ae^{4x} = 30Ae^{4x} = e^{4x}$, de donde $A = 1/30$. Se recupera así $y_p = \tfrac{1}{30}e^{4x}$.
