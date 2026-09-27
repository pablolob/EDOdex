
## Enunciado

Determine la velocidad de escape para un cuerpo que se proyecta hacia arriba con una velocidad inicial $v_0$ desde un punto $x_0 = \xi R$ arriba de la superficie terrestre, en donde $R$ es el radio de la tierra y $\xi$ es una constante. Despreciese la resistencia del aire. Halle la altitud inicial desde la que debe lanzarse el cuerpo a fin de reducir la velocidad de escape a un 85% de su valor en la superficie terrestre.

## Solución

Con $x$ la distancia al centro de la Tierra y $g$ la aceleración de la gravedad en la superficie, la velocidad de escape desde $x_0 = \xi R$ es

$$
v_e(\xi) = \sqrt{\frac{2gR}{\xi}}.
$$

Para reducirla al 85% de su valor en la superficie terrestre ($\xi = 1$) se necesita

$$
\xi = \frac{1}{0.85^2} \approx 1.384.
$$

La altitud inicial sobre la superficie es

$$
h = x_0 - R = (\xi - 1)R = \left(\frac{1}{0.85^2} - 1\right)R \approx 0.384\,R.
$$

## Resolución

Se toma $x$ como la distancia desde el centro de la Tierra, con sentido positivo hacia arriba. La fuerza gravitatoria sobre el cuerpo tiene magnitud $mgR^2/x^2$ y apunta hacia el centro, de modo que la segunda ley de Newton es

$$
m\frac{d^2x}{dt^2} = -\frac{mgR^2}{x^2}.
$$

Con $v = \dfrac{dx}{dt}$ y la regla de la cadena, $\dfrac{d^2x}{dt^2} = v\dfrac{dv}{dx}$, la ecuación se reduce a una de **primer orden**:

$$
v\frac{dv}{dx} = -\frac{gR^2}{x^2}.
$$

Esta ecuación es de **variables separables**. Al separar e integrar,

$$
v\,dv = -gR^2 x^{-2}\,dx
\quad\Longrightarrow\quad
\frac{v^2}{2} = \frac{gR^2}{x} + C.
$$

La condición de lanzamiento es $v(x_0) = v_0$ con $x_0 = \xi R$. Al sustituirla,

$$
\frac{v_0^2}{2} = \frac{gR}{\xi} + C
\quad\Longrightarrow\quad
C = \frac{v_0^2}{2} - \frac{gR}{\xi}.
$$

Por tanto,

$$
v^2 = v_0^2 + \frac{2gR^2}{x} - \frac{2gR}{\xi}.
$$

El cuerpo escapa si $v^2$ no se anula en ningún punto del recorrido. El término $\dfrac{2gR^2}{x}$ disminuye cuando $x$ crece, así que el valor más desfavorable es el límite cuando $x \to \infty$:

$$
\lim_{x\to\infty} v^2 = v_0^2 - \frac{2gR}{\xi}.
$$

Para que el cuerpo no regrese se necesita $v^2 \ge 0$ en ese límite, esto es,

$$
v_0^2 \ge \frac{2gR}{\xi}.
$$

La velocidad de escape es el valor mínimo que cumple la desigualdad:

$$
v_e(\xi) = \sqrt{\frac{2gR}{\xi}}.
$$

En la superficie, $\xi = 1$, se obtiene $v_e(1) = \sqrt{2gR}$. Al imponer $v_e(\xi) = 0.85\,v_e(1)$,

$$
\sqrt{\frac{2gR}{\xi}} = 0.85\sqrt{2gR}
\quad\Longrightarrow\quad
\frac{1}{\sqrt{\xi}} = 0.85
\quad\Longrightarrow\quad
\xi = \frac{1}{0.85^2} \approx 1.384.
$$

La altitud inicial sobre la superficie terrestre es

$$
h = x_0 - R = (\xi - 1)R = \left(\frac{1}{0.85^2} - 1\right)R \approx 0.384\,R.
$$

## Observaciones

La coordenada $x$ mide la distancia al centro de la Tierra, no la altura sobre la superficie: la superficie corresponde a $\xi = 1$ y la altitud pedida es $(\xi - 1)R$.

La velocidad de escape depende solo de la distancia al centro y no de $v_0$: $v_0$ es la rapidez de lanzamiento y $v_e$ es el umbral mínimo que debe alcanzar. Lanzar desde más lejos reduce la velocidad de escape necesaria.

La ecuación es de variables separables y su solución queda definida para $x \ge R$ mientras $v^2 \ge 0$; no hay soluciones singulares perdidas en la separación.
