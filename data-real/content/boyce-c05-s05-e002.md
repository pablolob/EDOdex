
## Enunciado

En cada uno de los problemas 1 a 12 determine la solución general de la ecuación diferencial dada que sea válida en cualquier intervalo que no incluya el punto singular.

2. $(x + 1)^2 y'' + 3(x + 1)y' + 0.75y = 0$

## Solución

La ecuación es de **segundo orden** y **lineal**, con un punto singular en $x = -1$. Su solución general es

$$
y(x) = C_1\,(x+1)^{-1/2} + C_2\,(x+1)^{-3/2},
$$

válida en el intervalo $(-1, \infty)$. En el intervalo $(-\infty, -1)$ la forma real correspondiente es $y(x) = C_1\,|x+1|^{-1/2} + C_2\,|x+1|^{-3/2}$.

## Resolución

La ecuación

$$
(x+1)^2 y'' + 3(x+1)y' + \frac{3}{4}\,y = 0
$$

tiene la forma de una **ecuación de Cauchy-Euler** centrada en $x_0 = -1$,

$$
(x-x_0)^2 y'' + \alpha\,(x-x_0)y' + \beta\,y = 0,
$$

con $\alpha = 3$ y $\beta = \dfrac{3}{4}$. El único punto singular es $x_0 = -1$.

Se introduce el cambio de variable independiente

$$
t = x + 1,
$$

con el que la ecuación se escribe

$$
t^2 y'' + 3t\,y' + \frac{3}{4}\,y = 0.
$$

Se buscan soluciones de la forma $y = t^r$, con $r$ por determinar. Sus derivadas son

$$
y' = r\,t^{r-1}, \qquad y'' = r(r-1)\,t^{r-2}.
$$

Al sustituir en la ecuación,

$$
t^2\,r(r-1)\,t^{r-2} + 3t\,r\,t^{r-1} + \frac{3}{4}\,t^{r}
= \left[r(r-1) + 3r + \frac{3}{4}\right] t^{r} = 0.
$$

Como $t \ne 0$, el corchete debe anularse. Se obtiene así la ecuación indicial

$$
r(r-1) + 3r + \frac{3}{4} = 0
\quad\Longrightarrow\quad
r^2 + 2r + \frac{3}{4} = 0.
$$

Multiplicando por $4$,

$$
4r^2 + 8r + 3 = 0
\quad\Longrightarrow\quad
(2r+1)(2r+3) = 0,
$$

cuyas raíces son

$$
r_1 = -\frac{1}{2}, \qquad r_2 = -\frac{3}{2}.
$$

Las raíces son reales y distintas, de modo que dos soluciones linealmente independientes son $t^{-1/2}$ y $t^{-3/2}$. La solución general en la variable $t$ es

$$
y = C_1\,t^{-1/2} + C_2\,t^{-3/2}.
$$

Al volver a la variable original $t = x+1$,

$$
y(x) = C_1\,(x+1)^{-1/2} + C_2\,(x+1)^{-3/2}.
$$

Esta expresión es real donde $x+1 > 0$, es decir, en $(-1, \infty)$, intervalo que no contiene el punto singular. En $(-\infty, -1)$ la variable $t = x+1$ toma valores negativos; como $|t|$ satisface la misma ecuación de Cauchy-Euler, la solución general real se escribe

$$
y(x) = C_1\,|x+1|^{-1/2} + C_2\,|x+1|^{-3/2}.
$$

## Observaciones

La ecuación es de tipo **Cauchy-Euler** con punto singular en $x=-1$. Los exponentes $r_1 = -\tfrac{1}{2}$ y $r_2 = -\tfrac{3}{2}$ son reales y distintos, por lo que la solución general no contiene términos logarítmicos.

Ambas soluciones se hacen infinitas cuando $x \to -1$, de modo que la solución no admite una extensión finita al punto singular.
