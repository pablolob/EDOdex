
## Enunciado

En cada uno de los problemas 9 a 12, resuelva el problema con valor inicial dado y determine de qué manera el intervalo en el que la solución existe depende del valor inicial $y_0$.
$$y' = -\frac{4x}{y}, \quad y(0) = y_0$$

## Solución

La ecuación es **de primer orden** y **no lineal**. Separando variables e imponiendo la condición inicial se obtiene, para $y_0 \neq 0$,

$$
y(x) = y_0\sqrt{1-\frac{4x^2}{y_0^2}},
$$

rama definida en el intervalo máximo

$$
\left(-\frac{|y_0|}{2}, \frac{|y_0|}{2}\right).
$$

La longitud de ese intervalo es $|y_0|$, de modo que crece al aumentar $|y_0|$. Para $y_0 = 0$ el miembro derecho $-4x/y$ no está definido en el punto inicial y el problema no tiene solución.

## Resolución

La ecuación $y' = -4x/y$ admite **separación de variables**. Se multiplican ambos miembros por $y$ y se escribe la derivada como cociente de diferenciales:

$$
y\,dy = -4x\,dx.
$$

Esta reescritura supone $y \neq 0$. Para $y_0 \neq 0$ la condición inicial garantiza que la solución no alcanza $y = 0$ en un entorno de $x = 0$; el caso $y_0 = 0$ se trata al final.

Integrando ambos miembros,

$$
\frac{y^2}{2} = -2x^2 + C.
$$

Multiplicando por $2$ y renombrando la constante arbitraria,

$$
y^2 + 4x^2 = C_1.
$$

Al imponer $y(0) = y_0$ resulta $C_1 = y_0^2$, así que la solución satisface la relación implícita

$$
y^2 + 4x^2 = y_0^2.
$$

La condición inicial selecciona la rama con el signo de $y_0$:

$$
y(x) = y_0\sqrt{1 - \frac{4x^2}{y_0^2}}.
$$

El radicando debe ser positivo, lo que exige

$$
1 - \frac{4x^2}{y_0^2} > 0 \quad\Longleftrightarrow\quad |x| < \frac{|y_0|}{2}.
$$

En los extremos $x = \pm |y_0|/2$ se tiene $y = 0$ y el miembro derecho $-4x/y$ deja de estar definido. La solución no puede prolongarse más allá de esos puntos, de modo que su intervalo máximo de existencia es el intervalo abierto simétrico

$$
\left(-\frac{|y_0|}{2},\, \frac{|y_0|}{2}\right),
$$

cuya longitud es $|y_0|$. Así, el intervalo de existencia depende del valor inicial: se ensancha a medida que $|y_0|$ crece.

Para comprobar la solución, se deriva la rama obtenida mediante la regla de la cadena:

$$
y'(x) = y_0\cdot\frac{1}{2}\left(1-\frac{4x^2}{y_0^2}\right)^{-1/2}\left(-\frac{8x}{y_0^2}\right)
= -\frac{4x}{y_0\sqrt{1-4x^2/y_0^2}}
= -\frac{4x}{y(x)},
$$

y además $y(0) = y_0$.

Caso $y_0 = 0$. La función $f(x,y) = -4x/y$ no está definida en $(0,0)$, punto que impone la condición inicial. El problema no tiene solución en ningún intervalo que contenga a $x = 0$.

## Observaciones

La solución general de la ecuación es la familia de elipses $y^2 + 4x^2 = C$, con $C > 0$. Cada valor inicial $y_0 \neq 0$ fija $C = y_0^2$ y la rama superior o inferior según el signo de $y_0$.

La dependencia del intervalo respecto de $y_0$ es propia de las ecuaciones no lineales. En una ecuación lineal el intervalo de validez viene determinado por las discontinuidades de los coeficientes y no por el valor inicial.

La curva completa cruza el eje $x$ en $x = \pm |y_0|/2$. Esos puntos quedan excluidos porque allí la pendiente deja de ser finita y la ecuación no está definida.
