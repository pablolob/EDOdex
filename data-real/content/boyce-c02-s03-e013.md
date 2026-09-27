
## Enunciado

Para cada uno de los problemas 9 a 16, encuentre la solución del problema con valor inicial dado en forma explícita y determine (por lo menos aproximadamente) el intervalo en que está definida.

13. $y' = 2x/(1 + 2y), \quad y(2) = 0$

## Solución

La solución explícita del problema con valor inicial es

$$
y(x) = \frac{-1 + \sqrt{4x^2 - 15}}{2}.
$$

Está definida en el intervalo

$$
\left(\frac{\sqrt{15}}{2}, \infty\right) \approx (1.9365, \infty).
$$

## Resolución

Se aplica **separación de variables**. Se agrupan los términos que dependen de $y$ y los que dependen de $x$:

$$
(1 + 2y)\,dy = 2x\,dx.
$$

Se integran ambos miembros:

$$
\begin{aligned}
\int (1 + 2y)\,dy &= \int 2x\,dx, \\
y + y^2 &= x^2 + C.
\end{aligned}
$$

La condición inicial $y(2) = 0$ fija la constante:

$$
0 + 0 = 4 + C \quad\Longrightarrow\quad C = -4.
$$

Por tanto, la solución implícita es

$$
y^2 + y = x^2 - 4.
$$

La expresión es cuadrática en $y$:

$$
y^2 + y - (x^2 - 4) = 0.
$$

Con la fórmula general,

$$
y = \frac{-1 \pm \sqrt{1 + 4(x^2 - 4)}}{2} = \frac{-1 \pm \sqrt{4x^2 - 15}}{2}.
$$

La condición inicial selecciona una sola rama. En $x = 2$, $\sqrt{4x^2 - 15} = \sqrt{1} = 1$, de modo que las dos opciones son $y = 0$ y $y = -1$. Solo el signo positivo cumple $y(2) = 0$. Así,

$$
y(x) = \frac{-1 + \sqrt{4x^2 - 15}}{2}.
$$

Para determinar el intervalo se examina dónde la solución y la ecuación original están bien definidas. El radicando exige $4x^2 - 15 \ge 0$, es decir $|x| \ge \sqrt{15}/2$. El intervalo que contiene a $x = 2$ es $x \ge \sqrt{15}/2$. En el extremo $x = \sqrt{15}/2$ se tiene $y = -1/2$, y allí el denominador $1 + 2y$ de la ecuación original se anula, por lo que $y'$ no está definida. El extremo queda excluido y el intervalo máximo es

$$
\left(\frac{\sqrt{15}}{2}, \infty\right).
$$

## Observaciones

La solución implícita $y^2 + y - x^2 + 4 = 0$ describe una hipérbola de dos ramas; la condición inicial $y(2) = 0$ selecciona la rama superior. La rama inferior, $y = (-1 - \sqrt{4x^2 - 15})/2$, también satisface la ecuación diferencial, pero no la condición inicial.

El extremo $x = \sqrt{15}/2$ es una asíntota vertical de la solución: cuando $x \to \sqrt{15}/2^{+}$, el denominador $1 + 2y$ tiende a cero y $y' \to +\infty$.
