
## Enunciado

En cada uno de los problemas 11 a 23 aplique la transformada de Laplace para resolver el problema con valor inicial dado.

23. $y'' + 2y' + y = 4e^{-t}; \quad y(0) = 2, \quad y'(0) = -1$

## Solución

La solución del problema con valor inicial es

$$
y(t) = \left(2 + t + 2t^2\right)e^{-t}, \qquad t \ge 0.
$$

## Resolución

Se aplica la **transformada de Laplace** a ambos miembros de la ecuación. Sea $Y(s) = \mathcal{L}\{y(t)\}$. Con $y(0) = 2$ y $y'(0) = -1$,

$$
\mathcal{L}\{y''\} = s^2Y(s) - s\,y(0) - y'(0) = s^2Y(s) - 2s + 1,
\qquad
\mathcal{L}\{y'\} = sY(s) - y(0) = sY(s) - 2.
$$

La transformada del término no homogéneo se obtiene de la definición:

$$
\mathcal{L}\{4e^{-t}\} = 4\int_0^{\infty} e^{-t}e^{-st}\,dt = \frac{4}{s+1}.
$$

Al transformar la ecuación resulta

$$
s^2Y(s) - 2s + 1 + 2\bigl(sY(s) - 2\bigr) + Y(s) = \frac{4}{s+1}.
$$

Se agrupan los términos en $Y(s)$:

$$
(s+1)^2 Y(s) - 2s - 3 = \frac{4}{s+1},
$$

y se despeja:

$$
(s+1)^2 Y(s) = 2s + 3 + \frac{4}{s+1} = \frac{2s^2 + 5s + 7}{s+1},
\qquad
Y(s) = \frac{2s^2 + 5s + 7}{(s+1)^3}.
$$

El numerador se escribe en potencias de $s+1$. Con $u = s+1$,

$$
2s^2 + 5s + 7 = 2u^2 + u + 4,
$$

por lo que la descomposición en fracciones simples es

$$
Y(s) = \frac{2}{s+1} + \frac{1}{(s+1)^2} + \frac{4}{(s+1)^3}.
$$

Los pares inversos se obtienen también de la definición, ya que

$$
\int_0^{\infty} t^n e^{-t}e^{-st}\,dt = \int_0^{\infty} t^n e^{-(s+1)t}\,dt = \frac{n!}{(s+1)^{n+1}}.
$$

Por linealidad de la transformada inversa, con $n = 0, 1, 2$,

$$
y(t) = 2e^{-t} + t\,e^{-t} + 4\cdot\frac{t^2}{2}e^{-t}.
$$

Al agrupar términos se obtiene la solución

$$
y(t) = \left(2 + t + 2t^2\right)e^{-t}.
$$

La solución satisface las condiciones iniciales. Como

$$
y'(t) = \left(1 + 4t\right)e^{-t} - \left(2 + t + 2t^2\right)e^{-t} = \left(-1 + 3t - 2t^2\right)e^{-t},
$$

entonces

$$
y(0) = 2,
\qquad
y'(0) = -1.
$$

## Observaciones

El término no homogéneo $4e^{-t}$ tiene la misma exponencial que las raíces $r = -1$ de la ecuación característica $(r+1)^2 = 0$. Esa coincidencia hace que la transformada presente un polo triple en $s = -1$ y que la solución contenga los términos seculares $t\,e^{-t}$ y $t^2e^{-t}$. Sin la coincidencia, la solución sería un único múltiplo de $e^{-t}$.

La solución está definida y es continua para todo $t \ge 0$.
