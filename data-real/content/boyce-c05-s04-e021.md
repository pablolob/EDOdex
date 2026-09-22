
## Enunciado

**Singularidades en el infinito.** Las definiciones de punto ordinario y de punto singular regular que se dieron en las secciones precedentes son válidas sólo si el punto $x_0$ es finito. En trabajo más avanzado en las ecuaciones diferenciales a menudo es necesario analizar el punto en el infinito. Esto se lleva a cabo al efectuar el cambio de variable $\xi = 1/x$ y estudiar la ecuación resultante en $\xi = 0$. Demuestre que para la ecuación diferencial $P(x)y'' + Q(x)y' + R(x)y = 0$ el punto en el infinito es un punto ordinario si

$$\frac{1}{P(1/\xi)} \left[ \frac{2P(1/\xi)}{\xi} - \frac{Q(1/\xi)}{\xi^2} \right] \quad \text{y} \quad \frac{R(1/\xi)}{\xi^4 P(1/\xi)}$$

tienen desarrollos en serie de Taylor alrededor de $\xi = 0$. También demuestre que el punto en el infinito es un punto singular regular si por lo menos una de las funciones anteriores no tiene un desarrollo en serie de Taylor, pero que tanto

$$\frac{\xi}{P(1/\xi)} \left[ \frac{2P(1/\xi)}{\xi} - \frac{Q(1/\xi)}{\xi^2} \right] \quad \text{como} \quad \frac{R(1/\xi)}{\xi^2 P(1/\xi)}$$

sí tienen esos desarrollos.

## Solución

Con el cambio $\xi = 1/x$ y $Y(\xi) = y(1/\xi)$, la ecuación $P(x)y'' + Q(x)y' + R(x)y = 0$ se transforma en

$$
Y'' + p(\xi)Y' + q(\xi)Y = 0,
$$

donde

$$
p(\xi) = \frac{1}{P(1/\xi)}\left[\frac{2P(1/\xi)}{\xi} - \frac{Q(1/\xi)}{\xi^2}\right], \qquad q(\xi) = \frac{R(1/\xi)}{\xi^4 P(1/\xi)}.
$$

El punto en el infinito corresponde a $\xi = 0$. Es un **punto ordinario** si y solo si $p$ y $q$ admiten desarrollo en serie de Taylor alrededor de $\xi = 0$. Es un **punto singular regular** si $p$ o $q$ no tienen ese desarrollo, pero

$$
\xi p(\xi) = \frac{\xi}{P(1/\xi)}\left[\frac{2P(1/\xi)}{\xi} - \frac{Q(1/\xi)}{\xi^2}\right], \qquad \xi^2 q(\xi) = \frac{R(1/\xi)}{\xi^2 P(1/\xi)}
$$

sí lo admiten.

## Resolución

Se busca la ecuación que satisface $Y(\xi)=y(1/\xi)$ cerca de $\xi=0$. Como $x=1/\xi$, la regla de la cadena da

$$
\frac{d\xi}{dx} = -\frac{1}{x^2} = -\xi^2.
$$

En consecuencia,

$$
\begin{aligned}
y'(x) &= Y'(\xi)\,\frac{d\xi}{dx} = -\xi^2 Y'(\xi), \\
y''(x) &= \frac{d}{dx}\left[-\xi^2 Y'(\xi)\right]
= \left[-2\xi Y'(\xi) - \xi^2 Y''(\xi)\right](-\xi^2)
= \xi^4 Y''(\xi) + 2\xi^3 Y'(\xi).
\end{aligned}
$$

Al sustituir en la ecuación original, con $P$, $Q$ y $R$ evaluadas en $x=1/\xi$, resulta

$$
\xi^4 P(1/\xi)\,Y'' + \left[2\xi^3 P(1/\xi) - \xi^2 Q(1/\xi)\right]Y' + R(1/\xi)\,Y = 0.
$$

Para $\xi\ne 0$ con $P(1/\xi)\ne 0$ se divide entre $\xi^4 P(1/\xi)$ y se obtiene la forma estándar

$$
Y'' + p(\xi)Y' + q(\xi)Y = 0,
$$

cuyos coeficientes son

$$
\begin{aligned}
p(\xi) &= \frac{2\xi^3 P(1/\xi) - \xi^2 Q(1/\xi)}{\xi^4 P(1/\xi)}
= \frac{1}{P(1/\xi)}\left[\frac{2P(1/\xi)}{\xi} - \frac{Q(1/\xi)}{\xi^2}\right], \\
q(\xi) &= \frac{R(1/\xi)}{\xi^4 P(1/\xi)}.
\end{aligned}
$$

El punto $x=\infty$ corresponde a $\xi=0$. Por la definición de punto ordinario, $\xi=0$ es un punto ordinario de la ecuación transformada precisamente cuando los coeficientes $p$ y $q$ son analíticos en $\xi=0$; esto es, cuando ambos admiten desarrollo en serie de Taylor alrededor de $\xi=0$. Queda demostrada la primera afirmación.

Si al menos uno de esos dos coeficientes no tiene desarrollo de Taylor en $\xi=0$, el punto es singular. Es singular regular cuando los productos $\xi p(\xi)$ y $\xi^2 q(\xi)$ son analíticos allí. Al multiplicar se obtiene

$$
\xi p(\xi) = \frac{\xi}{P(1/\xi)}\left[\frac{2P(1/\xi)}{\xi} - \frac{Q(1/\xi)}{\xi^2}\right],
\qquad
\xi^2 q(\xi) = \frac{\xi^2 R(1/\xi)}{\xi^4 P(1/\xi)} = \frac{R(1/\xi)}{\xi^2 P(1/\xi)}.
$$

Estas son exactamente las dos funciones que aparecen en la segunda parte del enunciado. Por tanto, el punto en el infinito es un punto singular regular si al menos una de las funciones de la primera parte carece de desarrollo de Taylor, pero las dos funciones anteriores sí lo tienen. Queda demostrada la segunda afirmación.

## Observaciones

La condición «admite desarrollo en serie de Taylor alrededor de $\xi=0$» equivale a que la función sea analítica en $\xi=0$, con radio de convergencia positivo. Este resultado es el criterio de clasificación del punto en el infinito que se utiliza en los problemas 22 a 25. El punto en el infinito es único: tanto $x\to+\infty$ como $x\to-\infty$ corresponden a $\xi\to 0$.
