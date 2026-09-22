
## Enunciado

En cada uno de los problemas 1 a 8, resuelva la ecuación diferencial dada. $$y' = \frac{x^2}{y}$$

## Solución

La ecuación es **de primer orden** y **separable**. Su solución general, en forma implícita, es

$$
3y^2 - 2x^3 = C.
$$

Despejando $y$ se obtienen las dos ramas explícitas

$$
y(x) = \pm\sqrt{\frac{2x^3}{3} + C_1}.
$$

## Resolución

La ecuación $y' = x^2/y$ admite **separación de variables**. Se multiplican ambos miembros por $y$ y se escribe la derivada como cociente de diferenciales:

$$
y\,dy = x^2\,dx.
$$

Esta reescritura supone $y \neq 0$; en la ecuación original el miembro derecho no está definido para $y = 0$, de modo que $y = 0$ no es una solución y no se pierde ninguna.

Integrando ambos miembros,

$$
\frac{y^2}{2} = \frac{x^3}{3} + C.
$$

Multiplicando por $6$ y renombrando la constante arbitraria, la solución general queda en forma implícita:

$$
3y^2 - 2x^3 = C.
$$

Al despejar $y$ resultan dos ramas, correspondientes a los dos signos de la raíz:

$$
y(x) = \pm\sqrt{\frac{2x^3}{3} + C_1}.
$$

La solución se comprueba por derivación implícita de $3y^2 - 2x^3 = C$. Derivando respecto de $x$,

$$
6y\,y' - 6x^2 = 0 \quad\Longrightarrow\quad y' = \frac{x^2}{y},
$$

que es la ecuación dada. Cada rama explícita es solución en todo intervalo donde el radicando es positivo; la condición $y \neq 0$ exige $\frac{2x^3}{3} + C_1 > 0$. Por ejemplo, para $C_1 = 0$ el intervalo es $x > 0$, y para $C_1 > 0$ es $x > -\sqrt[3]{3C_1/2}$.

## Observaciones

La constante de la forma implícita y la de la forma explícita no son la misma: $C_1 = C/3$. La rama elegida la fija el signo de $y$ en el punto inicial cuando se impone una condición inicial. La curva solución completa consta de las dos ramas simétricas respecto del eje $x$, unidas en el punto donde $y = 0$; ese punto queda excluido porque la ecuación no está definida allí.
