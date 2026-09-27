
## Enunciado

Para cada uno de los problemas 9 a 16, encuentre la solución del problema con valor inicial dado en forma explícita y determine (por lo menos aproximadamente) el intervalo en que está definida.

15. $\operatorname{sen} 2x\, dx + \cos 3y\, dy = 0, \quad y(\pi/2) = \pi/3$

## Solución

$$
y(x) = \frac{\pi - \arcsin\!\left(3\cos^{2} x\right)}{3},
\qquad
\arccos\!\left(\frac{1}{\sqrt{3}}\right) < x < \pi - \arccos\!\left(\frac{1}{\sqrt{3}}\right),
$$

es decir, aproximadamente para $0.955 < x < 2.186$.

## Resolución

La ecuación es **separable**. Se separan las variables:

$$
\cos 3y\, dy = -\sin 2x\, dx.
$$

Se integran ambos miembros:

$$
\int \cos 3y\, dy = -\int \sin 2x\, dx,
$$

de donde

$$
\frac{1}{3}\sin 3y = \frac{1}{2}\cos 2x + C.
$$

Al imponer la condición inicial $y(\pi/2) = \pi/3$ se obtiene

$$
\begin{aligned}
\frac{1}{3}\sin\pi &= \frac{1}{2}\cos\pi + C, \\
0 &= -\frac{1}{2} + C,
\end{aligned}
$$

por lo que $C = \dfrac{1}{2}$. Sustituyendo este valor,

$$
\frac{1}{3}\sin 3y = \frac{1}{2}\cos 2x + \frac{1}{2}
\quad\Longrightarrow\quad
\sin 3y = \frac{3}{2}\left(\cos 2x + 1\right) = 3\cos^{2} x,
$$

donde se empleó la identidad $\cos 2x + 1 = 2\cos^{2} x$.

Para despejar $y$ se invierte el seno. La condición inicial exige $3y(\pi/2) = \pi$, así que se elige la rama

$$
3y = \pi - \arcsin\!\left(3\cos^{2} x\right),
$$

y la solución explícita es

$$
y(x) = \frac{1}{3}\left[\pi - \arcsin\!\left(3\cos^{2} x\right)\right].
$$

La expresión requiere $0 \le 3\cos^{2} x \le 1$, es decir $\cos^{2} x \le 1/3$, o $|\cos x| \le 1/\sqrt{3}$. En torno a $x = \pi/2$, esta condición equivale a

$$
\arccos\!\left(\frac{1}{\sqrt{3}}\right) < x < \pi - \arccos\!\left(\frac{1}{\sqrt{3}}\right),
$$

esto es, $0.955 < x < 2.186$ aproximadamente. En los extremos $3\cos^{2} x = 1$ y $\sin 3y = 1$, con lo que $\cos 3y = 0$ y la derivada $y' = -\sin 2x/\cos 3y$ deja de estar definida. Ese intervalo abierto es el intervalo máximo de validez.

## Observaciones

La solución admite también la forma implícita $\sin 3y = 3\cos^{2} x$. La rama del arco seno se fija con la condición inicial: la rama principal, $3y = \arcsin\!\left(3\cos^{2} x\right)$, daría $y(\pi/2) = 0$ y no satisface el dato.

La ecuación no tiene soluciones constantes, pues $y \equiv c$ exigiría $\sin 2x = 0$ para todo $x$.
