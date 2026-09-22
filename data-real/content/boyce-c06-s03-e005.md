
## Enunciado

En cada uno de los problemas 1 a 13, encuentre la solución del problema con valor inicial dado.

5. $y'' + 2y' + y = f(t); \quad y(0) = 1, \ y'(0) = 0 \quad f(t) = \begin{cases} 1, & 0 \le t < 1 \\ 0, & t \ge 1 \end{cases}$

## Solución

$$
y(t) = \begin{cases} 1, & 0 \le t < 1, \\[4pt] t\,e^{-(t-1)}, & t \ge 1. \end{cases}
$$

De forma equivalente, con la función escalón unitario $u_1(t)$,

$$
y(t) = 1 + \left(t\,e^{-(t-1)} - 1\right)u_1(t), \qquad t \ge 0.
$$

## Resolución

El miembro derecho se escribe con la **función escalón unitario** $u_1(t)$ como

$$
f(t) = 1 - u_1(t),
$$

pues $u_1(t) = 0$ para $t < 1$ y $u_1(t) = 1$ para $t \ge 1$.

Se aplica la **transformada de Laplace** a ambos miembros de la ecuación. Sea $Y(s) = \mathcal{L}\{y(t)\}$. Las transformadas de las derivadas incorporan las condiciones iniciales:

$$
\mathcal{L}\{y'\} = sY(s) - y(0) = sY(s) - 1,
$$

$$
\mathcal{L}\{y''\} = s^2Y(s) - s\,y(0) - y'(0) = s^2Y(s) - s.
$$

La transformada de la fuerza es

$$
\mathcal{L}\{f(t)\} = \frac{1}{s} - \frac{e^{-s}}{s} = \frac{1-e^{-s}}{s}.
$$

Al sustituir en $y'' + 2y' + y = f(t)$ resulta

$$
\begin{aligned}
\left(s^2Y(s) - s\right) + 2\left(sY(s) - 1\right) + Y(s) &= \frac{1-e^{-s}}{s}, \\
(s+1)^2 Y(s) - s - 2 &= \frac{1-e^{-s}}{s}.
\end{aligned}
$$

Se despeja $Y(s)$:

$$
Y(s) = \frac{s+2}{(s+1)^2} + \frac{1-e^{-s}}{s(s+1)^2}.
$$

El primer término se separa de forma directa,

$$
\frac{s+2}{(s+1)^2} = \frac{1}{s+1} + \frac{1}{(s+1)^2},
$$

y su transformada inversa es $(1+t)e^{-t}$.

Para el segundo término se emplean **fracciones parciales**:

$$
\frac{1}{s(s+1)^2} = \frac{1}{s} - \frac{1}{s+1} - \frac{1}{(s+1)^2}.
$$

Su inversa es

$$
g(t) = 1 - e^{-t} - t\,e^{-t} = 1 - (1+t)e^{-t}.
$$

El **segundo teorema de traslación** da

$$
\mathcal{L}^{-1}\left\{\frac{1-e^{-s}}{s(s+1)^2}\right\} = g(t) - g(t-1)\,u_1(t).
$$

Al reunir los dos términos,

$$
y(t) = (1+t)e^{-t} + g(t) - g(t-1)\,u_1(t).
$$

Como $(1+t)e^{-t} + g(t) = 1$, la expresión se reduce a

$$
y(t) = 1 - g(t-1)\,u_1(t).
$$

En el intervalo $0 \le t < 1$ el escalón se anula, de modo que $y(t) = 1$. Para $t \ge 1$,

$$
g(t-1) = 1 - \bigl(1+(t-1)\bigr)e^{-(t-1)} = 1 - t\,e^{-(t-1)},
$$

y por tanto

$$
y(t) = 1 - \left(1 - t\,e^{-(t-1)}\right) = t\,e^{-(t-1)}.
$$

La solución satisface $y(0) = 1$ y $y'(0) = 0$, como exige el enunciado.

## Observaciones

La solución es continua y de clase $C^1$ en $t = 1$: ambos tramos valen $1$ y sus derivadas laterales valen $0$. La segunda derivada presenta un salto, en correspondencia con la discontinuidad de $f$. Para $t \ge 1$ no hay fuerza aplicada y el término $t\,e^{-(t-1)}$ tiende a cero cuando $t \to \infty$.

### Método alternativo: resolución por tramos

En $0 \le t < 1$ la fuerza es constante e igual a $1$, y la función constante $y = 1$ satisface la ecuación y las condiciones iniciales. Para $t \ge 1$ la ecuación es homogénea, $y'' + 2y' + y = 0$, con condiciones de empalme $y(1) = 1$ y $y'(1) = 0$. Con $\tau = t-1$, la solución general es $(C_1 + C_2\tau)e^{-\tau}$; las condiciones dan $C_1 = C_2 = 1$, es decir, $y(t) = t\,e^{-(t-1)}$.
