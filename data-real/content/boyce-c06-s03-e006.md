
## Enunciado

En cada uno de los problemas 1 a 13, encuentre la solución del problema con valor inicial dado.

6. $y'' + 3y' + 2y = u_2(t); \quad y(0) = 0, \ y'(0) = 1$

## Solución

$$
y(t) = e^{-t} - e^{-2t} + \left[\frac{1}{2} - e^{-(t-2)} + \frac{1}{2}e^{-2(t-2)}\right]u_2(t),
$$

esto es,

$$
y(t) =
\begin{cases}
e^{-t} - e^{-2t}, & 0 \le t < 2, \\[8pt]
\dfrac{1}{2} + \left(1 - e^{2}\right)e^{-t} + \left(\dfrac{e^{4}}{2} - 1\right)e^{-2t}, & t \ge 2.
\end{cases}
$$

## Resolución

Se aplica la **transformada de Laplace**. Sea $Y(s) = \mathcal{L}\{y(t)\}$. Con $y(0) = 0$ y $y'(0) = 1$, las transformadas de las derivadas son

$$
\mathcal{L}\{y''\} = s^2Y(s) - s\,y(0) - y'(0) = s^2Y(s) - 1,
\qquad
\mathcal{L}\{y'\} = sY(s) - y(0) = sY(s).
$$

La transformada de la **función escalón unitario** $u_2(t)$ es

$$
\mathcal{L}\{u_2(t)\} = \frac{e^{-2s}}{s}, \qquad s > 0.
$$

La ecuación transformada resulta

$$
\left(s^2Y(s) - 1\right) + 3sY(s) + 2Y(s) = \frac{e^{-2s}}{s}.
$$

Al agrupar los términos en $Y(s)$ y factorizar $s^2 + 3s + 2 = (s+1)(s+2)$,

$$
(s+1)(s+2)\,Y(s) = 1 + \frac{e^{-2s}}{s},
\qquad\text{de donde}\qquad
Y(s) = \frac{1}{(s+1)(s+2)} + e^{-2s}\,\frac{1}{s(s+1)(s+2)}.
$$

Se descompone en **fracciones parciales**. Para el primer término,

$$
\frac{1}{(s+1)(s+2)} = \frac{1}{s+1} - \frac{1}{s+2}.
$$

Para el segundo, con coeficientes $A$, $B$ y $C$ por determinar,

$$
\frac{1}{s(s+1)(s+2)} = \frac{A}{s} + \frac{B}{s+1} + \frac{C}{s+2}.
$$

Al multiplicar por el denominador común,

$$
1 = A(s+1)(s+2) + Bs(s+2) + Cs(s+1).
$$

Evaluando en $s = 0$, $s = -1$ y $s = -2$ resultan $A = \tfrac{1}{2}$, $B = -1$ y $C = \tfrac{1}{2}$. Por tanto,

$$
\frac{1}{s(s+1)(s+2)} = \frac{1}{2s} - \frac{1}{s+1} + \frac{1}{2(s+2)}.
$$

De los pares básicos, la inversa del primer término es $e^{-t} - e^{-2t}$. La inversa del segundo define la función

$$
g(t) = \mathcal{L}^{-1}\!\left\{\frac{1}{s(s+1)(s+2)}\right\} = \frac{1}{2} - e^{-t} + \frac{1}{2}e^{-2t}.
$$

El factor $e^{-2s}$ se trata con el **segundo teorema de traslación**, $\mathcal{L}^{-1}\{e^{-2s}G(s)\} = g(t-2)\,u_2(t)$, de modo que

$$
y(t) = e^{-t} - e^{-2t} + \left[\frac{1}{2} - e^{-(t-2)} + \frac{1}{2}e^{-2(t-2)}\right]u_2(t).
$$

Al sustituir los dos valores del escalón se obtiene la expresión por intervalos. Para $0 \le t < 2$ el escalón se anula y $y(t) = e^{-t} - e^{-2t}$. Para $t \ge 2$ el escalón vale $1$; con $e^{-(t-2)} = e^{2}e^{-t}$ y $e^{-2(t-2)} = e^{4}e^{-2t}$,

$$
y(t) = e^{-t} - e^{-2t} + \frac{1}{2} - e^{2}e^{-t} + \frac{1}{2}e^{4}e^{-2t}
= \frac{1}{2} + \left(1 - e^{2}\right)e^{-t} + \left(\frac{e^{4}}{2} - 1\right)e^{-2t}.
$$

La solución satisface las condiciones iniciales: en $0 \le t < 2$ es $y(t) = e^{-t} - e^{-2t}$, luego $y(0) = 0$ y $y'(0) = -1 + 2 = 1$.

## Observaciones

La solución y su derivada primera son continuas en $t = 2$; la discontinuidad de la forzante se refleja en la derivada segunda. La solución está definida para todo $t \ge 0$.

Para $t \ge 2$ la forzante vale $1$, de modo que la solución tiende a la solución de equilibrio $y = \tfrac{1}{2}$ cuando $t \to \infty$.

### Método alternativo: resolución por tramos

En $0 \le t < 2$ la ecuación es homogénea, $y'' + 3y' + 2y = 0$. Su ecuación característica $r^2 + 3r + 2 = 0$ tiene raíces $r = -1$ y $r = -2$, por lo que $y = C_1e^{-t} + C_2e^{-2t}$. Las condiciones iniciales dan $C_1 = 1$ y $C_2 = -1$, esto es, $y = e^{-t} - e^{-2t}$.

En $t = 2$ esta rama y su derivada toman los valores $y(2) = e^{-2} - e^{-4}$ y $y'(2) = -e^{-2} + 2e^{-4}$. En $t \ge 2$ la ecuación es $y'' + 3y' + 2y = 1$, con solución particular constante $y_p = \tfrac{1}{2}$ y solución general $y = \tfrac{1}{2} + Ae^{-t} + Be^{-2t}$. Imponer las condiciones heredadas en $t = 2$ conduce a $A = 1 - e^{2}$ y $B = \tfrac{e^{4}}{2} - 1$, que coincide con el resultado obtenido por transformada de Laplace.
