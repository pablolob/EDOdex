
## Enunciado

Resuelva el problema con valor inicial

$$y' = 3x^2/(3y^2 - 4), \quad y(1) = 0$$

y determine el intervalo en que la solución es válida.

Sugerencia: Para encontrar el intervalo de definición, busque los puntos en los que $dx/dy = 0$.

## Solución

La ecuación es **de primer orden** y **separable**. Su solución, en forma implícita, es

$$
y^3 - 4y = x^3 - 1,
$$

y el intervalo máximo en que es válida es

$$
\sqrt[3]{1 - \frac{16\sqrt3}{9}} < x < \sqrt[3]{1 + \frac{16\sqrt3}{9}}
\;\approx\; (-1.2763,\; 1.5978).
$$

## Resolución

La ecuación admite **separación de variables**. Se escriben los diferenciales agrupados por variable:

$$
(3y^2 - 4)\,dy = 3x^2\,dx.
$$

Se integran ambos miembros:

$$
\int (3y^2 - 4)\,dy = \int 3x^2\,dx
\quad\Longrightarrow\quad
y^3 - 4y = x^3 + C.
$$

La condición inicial $y(1) = 0$ fija la constante:

$$
0^3 - 4(0) = 1^3 + C
\quad\Longrightarrow\quad
C = -1.
$$

Por tanto, la solución implícita del problema con valor inicial es

$$
y^3 - 4y = x^3 - 1,
$$

que también puede escribirse como $x^3 = y^3 - 4y + 1$.

No existen soluciones constantes: $y \equiv c$ exigiría $3x^2 = 0$ para todo $x$, lo que es imposible. El factor $3y^2 - 4$ no es idénticamente nulo, de modo que la separación no descarta ninguna solución singular.

Para hallar el intervalo de validez se observa que la ecuación original da

$$
y' = \frac{3x^2}{3y^2 - 4},
\qquad\text{o, invirtiendo,}\qquad
\frac{dx}{dy} = \frac{3y^2 - 4}{3x^2}.
$$

La derivada $y'$ deja de estar definida cuando $3y^2 - 4 = 0$; de forma equivalente, $dx/dy$ se anula en esos puntos, donde la curva solución presenta tangente vertical. Resolviendo $3y^2 - 4 = 0$ se obtiene $y = \pm 2/\sqrt3$. Estos dos valores acotan la rama que pasa por $(1,0)$.

Al sustituir cada uno en la solución implícita $x^3 = y^3 - 4y + 1$ se obtienen los extremos en $x$:

$$
\begin{aligned}
y = -\frac{2}{\sqrt3}: &\quad x^3 = -\frac{8}{3\sqrt3} + \frac{8}{\sqrt3} + 1 = 1 + \frac{16}{3\sqrt3}, \\[4pt]
y = \frac{2}{\sqrt3}: &\quad x^3 = \frac{8}{3\sqrt3} - \frac{8}{\sqrt3} + 1 = 1 - \frac{16}{3\sqrt3}.
\end{aligned}
$$

Como $\dfrac{16}{3\sqrt3} = \dfrac{16\sqrt3}{9}$, los extremos son

$$
x_{\min} = \sqrt[3]{1 - \frac{16\sqrt3}{9}} \approx -1.2763,
\qquad
x_{\max} = \sqrt[3]{1 + \frac{16\sqrt3}{9}} \approx 1.5978.
$$

En el intervalo abierto $(x_{\min}, x_{\max})$ se cumple $3y^2 - 4 \neq 0$, de modo que el teorema de la función implícita garantiza una única rama derivable. En los extremos el denominador de $y'$ se anula, así que el intervalo de validez es abierto.

La solución se comprueba por derivación implícita de $y^3 - 4y = x^3 - 1$. Derivando respecto de $x$,

$$
(3y^2 - 4)\,y' = 3x^2
\quad\Longrightarrow\quad
y' = \frac{3x^2}{3y^2 - 4},
$$

que reproduce la ecuación dada; además $y(1) = 0$ satisface $0^3 - 4(0) = 1^3 - 1$.

## Observaciones

La relación implícita $x^3 = y^3 - 4y + 1$ no admite un despeje elemental de $y$, pues conduce a una ecuación cúbica; por ello la forma implícita es la respuesta natural del problema.

Los extremos del intervalo no son puntos donde la ecuación deje de estar definida en $x$, sino puntos donde la tangente de la curva solución es vertical, es decir, donde $y'$ tiende a infinito. La curva $x^3 = y^3 - 4y + 1$ tiene otras porciones fuera de ese intervalo, pero la rama que pasa por $(1,0)$ es la única solución del problema con valor inicial.
