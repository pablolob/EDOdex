
## Enunciado

Aplique el método de reducción de orden (problema 24) para resolver la ecuación diferencial dada.

26. $x^2(x + 3)y''' - 3x(x + 2)y'' + 6(1 + x)y' - 6y = 0, \quad x > 0; \quad y_1(x) = x^2, \quad y_2(x) = x^3$

## Solución

La ecuación es de **tercer orden**, **lineal** y **homogénea**. La aplicación del método de **reducción de orden** con $y_1 = x^2$ produce una tercera solución independiente $y_3(x) = x+1$. La solución general en $x>0$ es

$$
y(x) = c_1 x^2 + c_2 x^3 + c_3(x+1).
$$

## Resolución

Se escribe la ecuación en forma estándar. Para $x>0$ se divide entre $x^2(x+3)$:

$$
y''' + p_1(x)y'' + p_2(x)y' + p_3(x)y = 0,
$$

con

$$
p_1(x) = -\frac{3(x+2)}{x(x+3)}, \qquad p_2(x) = \frac{6(1+x)}{x^2(x+3)}.
$$

Como $y_1 = x^2$ es solución, la sustitución $y = x^2 v(x)$ del problema 24 reduce la ecuación a una de segundo orden para $v'$:

$$
x^2 v''' + \left(3y_1' + p_1 y_1\right)v'' + \left(3y_1'' + 2p_1 y_1' + p_2 y_1\right)v' = 0.
$$

Con $y_1 = x^2$, $y_1' = 2x$ y $y_1'' = 2$, los coeficientes valen

$$
\begin{aligned}
3y_1' + p_1 y_1 &= 6x - \frac{3(x+2)}{x(x+3)}\,x^2 = \frac{3x(x+4)}{x+3}, \\
3y_1'' + 2p_1 y_1' + p_2 y_1 &= 6 - \frac{12(x+2)}{x+3} + \frac{6(1+x)}{x+3} = 0.
\end{aligned}
$$

El término en $v'$ se anula, como corresponde a que $y_2 = x^3$ también es solución. Dividiendo entre $x^2$ resulta

$$
v''' + \frac{3(x+4)}{x(x+3)}\,v'' = 0.
$$

Con el cambio $w = v'$ se obtiene una ecuación de segundo orden que no contiene $w$:

$$
w'' + \frac{3(x+4)}{x(x+3)}\,w' = 0.
$$

Al escribir $u = w'$ queda una ecuación de primer orden separable:

$$
u' + \frac{3(x+4)}{x(x+3)}\,u = 0.
$$

Se separan las variables y se descompone en fracciones parciales:

$$
\frac{3(x+4)}{x(x+3)} = \frac{4}{x} - \frac{1}{x+3}.
$$

Por tanto,

$$
\ln|u| = -\int\left(\frac{4}{x} - \frac{1}{x+3}\right)dx = -4\ln x + \ln(x+3) + C,
$$

de donde

$$
u(x) = C_1\,\frac{x+3}{x^4} = C_1\left(\frac{1}{x^3} + \frac{3}{x^4}\right).
$$

Se integra para recuperar $w = v'$ y luego $v$:

$$
\begin{aligned}
w(x) &= \int u\,dx = C_1\left(-\frac{1}{2x^2} - \frac{1}{x^3}\right) + C_2, \\
v(x) &= \int w\,dx = C_1\left(\frac{1}{2x} + \frac{1}{2x^2}\right) + C_2 x + C_3.
\end{aligned}
$$

Finalmente, $y = x^2 v$ da

$$
y(x) = \frac{C_1}{2}(x+1) + C_2 x^3 + C_3 x^2.
$$

Al renombrar las constantes, la solución general es

$$
y(x) = c_1 x^2 + c_2 x^3 + c_3(x+1), \qquad x>0.
$$

## Observaciones

Las funciones $x^2$, $x^3$ y $x+1$ son linealmente independientes en $x>0$: su wronskiano es $W = 2x^2(x+3) \neq 0$. Por ello la combinación anterior es la solución general.

El término $x+1$ no puede separarse en una constante y un múltiplo de $x$. La función $y=1$ no resuelve la ecuación, ya que el miembro izquierdo vale $-6$.

La forma estándar presenta singularidades en $x=0$ y $x=-3$; el intervalo $x>0$ indicado en el enunciado evita ambas.
