
## Enunciado

Mediante un cambio adecuado de variables a menudo es posible transformar una ecuación diferencial con coeficientes variables en una ecuación de Bessel de cierto orden. Por ejemplo, demuestre que una solución de

$$x^2 y'' + (\alpha^2 \beta^2 x^{2\beta} + \frac{1}{4} - \nu^2 \beta^2) y = 0, \quad x > 0,$$

se expresa por $y = x^{1/2} f(\alpha x^\beta)$ en donde $f(\xi)$ es una solución de la ecuación de Bessel de orden $\nu$.

## Solución

Con el **cambio de variable** $\xi=\alpha x^\beta$, la ecuación se transforma en la ecuación de Bessel de orden $\nu$,

$$
\xi^2 f''(\xi) + \xi f'(\xi) + (\xi^2-\nu^2)f(\xi)=0 .
$$

Por tanto, $y=x^{1/2}f(\alpha x^\beta)$ es solución de la ecuación dada siempre que $f$ sea una solución de la ecuación de Bessel de orden $\nu$.

## Resolución

Se aplica el **cambio de variable** $\xi=\alpha x^\beta$, con $\alpha,\beta\ne0$ y $x>0$, y se busca la solución en la forma

$$
y(x)=x^{1/2}f(\xi),\qquad \xi=\alpha x^\beta .
$$

Las derivadas de la nueva variable son

$$
\xi'=\alpha\beta\,x^{\beta-1},\qquad \xi''=\alpha\beta(\beta-1)x^{\beta-2}.
$$

Se calculan $y'$ y $y''$ con la **regla del producto** y la **regla de la cadena**:

$$
\begin{aligned}
y' &= \frac{1}{2}x^{-1/2}f + x^{1/2}f'\,\xi'
     = \frac{1}{2}x^{-1/2}f + \alpha\beta\,x^{\beta-1/2}f', \\[4pt]
y'' &= \frac{d}{dx}\left[\frac{1}{2}x^{-1/2}f + \alpha\beta\,x^{\beta-1/2}f'\right] \\
    &= -\frac{1}{4}x^{-3/2}f + \frac{1}{2}\alpha\beta\,x^{\beta-3/2}f'
       + \alpha\beta\left(\beta-\frac{1}{2}\right)x^{\beta-3/2}f'
       + \alpha^2\beta^2 x^{2\beta-3/2}f'' \\
    &= -\frac{1}{4}x^{-3/2}f + \alpha\beta^2 x^{\beta-3/2}f'
       + \alpha^2\beta^2 x^{2\beta-3/2}f'' .
\end{aligned}
$$

En la segunda línea los dos términos con $f'$ se agrupan, pues $\frac{1}{2}\alpha\beta+\alpha\beta(\beta-\frac{1}{2})=\alpha\beta^2$.

Se multiplica $y''$ por $x^2$ y se escribe por separado el término restante:

$$
x^2y'' = \alpha^2\beta^2 x^{2\beta+1/2}f'' + \alpha\beta^2 x^{\beta+1/2}f' - \frac{1}{4}x^{1/2}f,
$$

$$
\left(\alpha^2\beta^2 x^{2\beta}+\frac{1}{4}-\nu^2\beta^2\right)y
= \alpha^2\beta^2 x^{2\beta+1/2}f + \left(\frac{1}{4}-\nu^2\beta^2\right)x^{1/2}f .
$$

Al sumar ambos miembros, los términos $\pm\frac{1}{4}x^{1/2}f$ se cancelan:

$$
\begin{aligned}
&x^2y''+\left(\alpha^2\beta^2 x^{2\beta}+\frac{1}{4}-\nu^2\beta^2\right)y \\
&\quad = \alpha^2\beta^2 x^{2\beta+1/2}f'' + \alpha\beta^2 x^{\beta+1/2}f'
        + \alpha^2\beta^2 x^{2\beta+1/2}f - \nu^2\beta^2 x^{1/2}f \\
&\quad = \beta^2 x^{1/2}\left[\alpha^2 x^{2\beta}f'' + \alpha x^{\beta}f'
        + \left(\alpha^2 x^{2\beta}-\nu^2\right)f\right].
\end{aligned}
$$

Como $\beta^2x^{1/2}\ne0$, la ecuación diferencial equivale a que se anule el corchete. Con $\xi=\alpha x^\beta$ se tiene $\alpha^2x^{2\beta}=\xi^2$ y $\alpha x^\beta=\xi$, de modo que el corchete es

$$
\xi^2 f''(\xi) + \xi f'(\xi) + (\xi^2-\nu^2)f(\xi).
$$

Esta expresión es la ecuación de Bessel de orden $\nu$ evaluada en $\xi$. Por consiguiente, la ecuación dada se satisface siempre que $f$ sea una solución de la ecuación de Bessel de orden $\nu$, y su solución es $y=x^{1/2}f(\alpha x^\beta)$.

## Observaciones

El exponente $1/2$ de $y=x^{1/2}f(\xi)$ hace que los dos términos con $f'$ se combinen en uno solo, proporcional a $x^{\beta+1/2}f'$, que tras el cambio es $\xi f'$. El término constante $1/4$ cancela el residuo $-\frac{1}{4}x^{1/2}f$ que deja la potencia $x^{1/2}$ al derivarse dos veces.

El cambio exige $\beta\ne0$; si $\beta=0$ la ecuación degenera y $\xi$ no depende de $x$. Para que $\xi>0$ cuando $x>0$ se toma $\alpha>0$.

Si $f$ es una función de Bessel de primera o de segunda clase, $J_\nu$ o $Y_\nu$, las soluciones correspondientes son $y=x^{1/2}J_\nu(\alpha x^\beta)$ y $y=x^{1/2}Y_\nu(\alpha x^\beta)$.
