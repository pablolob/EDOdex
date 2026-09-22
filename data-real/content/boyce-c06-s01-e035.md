
## Enunciado

Considere la ecuación de Bessel de orden cero

$$ty'' + y' + ty = 0.$$

Recuerde por lo visto en la sección 5.4 que $t = 0$ es un punto singular regular de esta ecuación y que, por lo tanto, las soluciones pueden volverse no acotadas cuando $t \to 0$. Sin embargo, se intentará determinar si existen soluciones que permanezcan finitas en $t = 0$ y tengan derivadas finitas allí. Si se supone que existe una solución de este tipo $y = \phi(t)$, sea $Y(s) = \mathcal{L}\{\phi(t)\}$.

a) Demuestre que $Y(s)$ satisface

$$(1 + s^2)Y'(s) + sY(s) = 0.$$

b) Demuestre que $Y(s) = c(1 + s^2)^{-1/2}$, en donde $c$ es una constante arbitraria.

c) Desarrolle $(1 + s^2)^{-1/2}$ en una serie binomial válida para $s > 1$ y si se supone que es permisible tomar la transformada inversa término a término, demuestre que

$$y = c \sum_{n=0}^{\infty} \frac{(-1)^n t^{2n}}{2^{2n}(n!)^2} = cJ_0(t),$$

en donde $J_0$ es la función de Bessel de primera clase de orden cero. Observe que $J_0(0) = 1$ y que $J_0$ tiene derivadas finitas de todos los órdenes en $t = 0$. En la sección 5.9 se demostró que la segunda solución de esta ecuación se vuelve no acotada cuando $t \to 0$.

## Solución

La transformada de la solución acotada es

$$
Y(s) = \frac{c}{\sqrt{1+s^2}}, \qquad s>1,
$$

y su transformada inversa es la función de Bessel de primera clase de orden cero:

$$
y(t) = c \sum_{n=0}^{\infty} \frac{(-1)^n t^{2n}}{2^{2n}(n!)^2} = cJ_0(t).
$$

## Resolución

### Apartado a)

Se aplica la **transformada de Laplace** a cada término de $ty''+y'+ty=0$. Con $Y(s)=\mathcal{L}\{y(t)\}$ y las propiedades

$$
\mathcal{L}\{y'\}=sY(s)-y(0),\qquad
\mathcal{L}\{ty\}=-Y'(s),\qquad
\mathcal{L}\{ty''\}=-\frac{d}{ds}\bigl[s^2Y(s)-sy(0)-y'(0)\bigr],
$$

la ecuación se transforma en

$$
-\frac{d}{ds}\bigl[s^2Y-sy(0)-y'(0)\bigr]+\bigl[sY-y(0)\bigr]-Y'=0.
$$

La hipótesis de que $\phi$ y sus derivadas son finitas en $t=0$ hace que $y(0)$ y $y'(0)$ sean constantes. Entonces la derivada del primer corchete es $2sY+s^2Y'-y(0)$ y resulta

$$
-2sY-s^2Y'+y(0)+sY-y(0)-Y'=0.
$$

Los términos constantes se cancelan:

$$
-sY-(1+s^2)Y'=0,
$$

esto es,

$$
(1+s^2)Y'(s)+sY(s)=0.
$$

### Apartado b)

La ecuación del apartado a) es de variables separables. Se escribe

$$
\frac{Y'}{Y}=-\frac{s}{1+s^2}.
$$

Al integrar ambos miembros,

$$
\ln|Y|=-\frac{1}{2}\ln(1+s^2)+k,
$$

de donde

$$
Y(s)=c\,(1+s^2)^{-1/2},
$$

con $c$ una constante arbitraria.

### Apartado c)

Para $s>1$ se factoriza la potencia,

$$
(1+s^2)^{-1/2}=s^{-1}\bigl(1+s^{-2}\bigr)^{-1/2},
$$

y se usa el **desarrollo binomial** de $(1+z)^{-1/2}$ con $z=s^{-2}$, válido cuando $|z|<1$:

$$
\bigl(1+s^{-2}\bigr)^{-1/2}=\sum_{n=0}^{\infty}\binom{-1/2}{n}s^{-2n}.
$$

Los coeficientes se calculan como

$$
\binom{-1/2}{n}
=\frac{(-1/2)(-3/2)\cdots\bigl(-(2n-1)/2\bigr)}{n!}
=\frac{(-1)^n(2n)!}{2^{2n}(n!)^2}.
$$

Por lo tanto,

$$
Y(s)=c\sum_{n=0}^{\infty}\frac{(-1)^n(2n)!}{2^{2n}(n!)^2}\,s^{-(2n+1)}.
$$

Bajo la hipótesis de inversión término a término, y con $\mathcal{L}^{-1}\{s^{-(2n+1)}\}=t^{2n}/(2n)!$,

$$
y(t)=c\sum_{n=0}^{\infty}\frac{(-1)^n(2n)!}{2^{2n}(n!)^2}\frac{t^{2n}}{(2n)!}
=c\sum_{n=0}^{\infty}\frac{(-1)^n t^{2n}}{2^{2n}(n!)^2}
=cJ_0(t).
$$

## Observaciones

La finitud de $\phi$ y de sus derivadas en $t=0$ es esencial en el apartado a). Es lo que convierte a $y(0)$ y $y'(0)$ en constantes que se cancelan; sin esa hipótesis, la ecuación para $Y$ conserva esos valores y su solución general incorpora la segunda solución de Bessel, no acotada en $t=0$.

El desarrollo binomial converge para $s>1$, pues entonces $|s^{-2}|<1$. El enunciado no requiere el comportamiento en la frontera $s=1$.

La serie obtenida cumple $J_0(0)=1$ y tiene derivadas finitas de todos los órdenes en $t=0$, en coherencia con la hipótesis de partida sobre $\phi$.
