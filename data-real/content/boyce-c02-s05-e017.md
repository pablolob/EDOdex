
## Enunciado

Suponga que una gota de lluvia esférica se evapora con una rapidez proporcional a su área superficial. Si originalmente su radio mide 3 mm y media hora después se ha reducido hasta 2 mm, encuentre una expresión para calcular el radio de la gota de lluvia en cualquier instante.

## Solución

Con el tiempo $t$ medido en horas, el radio de la gota, en milímetros, es

$$
r(t)=3-2t,\qquad 0\le t\le \tfrac{3}{2}.
$$

La gota desaparece cuando $t=\tfrac{3}{2}$ h, es decir, a los $90$ minutos.

## Resolución

Sea $r(t)$ el radio de la gota, en milímetros, en el instante $t$ medido en horas. El volumen y el área superficial de una esfera de radio $r$ son

$$
V=\frac{4}{3}\pi r^3,\qquad A=4\pi r^2.
$$

La rapidez de evaporación es proporcional al área superficial: el volumen disminuye a razón de

$$
\frac{dV}{dt}=-kA=-4\pi k\,r^2,
$$

con $k>0$. Como el volumen depende del radio, la regla de la cadena da

$$
\frac{dV}{dt}=\frac{dV}{dr}\frac{dr}{dt}=4\pi r^2\frac{dr}{dt}.
$$

Al igualar ambas expresiones de $\dfrac{dV}{dt}$ y cancelar el factor $4\pi r^2$, válido para $r>0$, resulta

$$
\frac{dr}{dt}=-k.
$$

La ecuación para el radio es **de primer orden** y **de variables separables**; el miembro derecho no depende de $r$. La integración directa da

$$
r(t)=C-kt.
$$

La condición inicial es $r(0)=3$ mm, de donde $C=3$. La condición $r\!\left(\tfrac{1}{2}\right)=2$ conduce a

$$
2=3-\frac{k}{2}\quad\Longrightarrow\quad k=2\ \text{mm/h}.
$$

Por tanto,

$$
r(t)=3-2t\ \text{mm}.
$$

El radio se anula cuando $t=\tfrac{3}{2}$ h. A partir de ese instante el modelo no describe una gota con radio positivo, de modo que el intervalo de validez es $0\le t\le \tfrac{3}{2}$ h.

## Observaciones

El radio disminuye linealmente, no el volumen. La pérdida de volumen por unidad de tiempo también disminuye con el tiempo, porque la superficie expuesta se reduce a medida que la gota se encoge; en cambio, la pérdida de radio por unidad de tiempo es constante mientras $r>0$.

El factor $4\pi k$ absorbido en la constante de proporcionalidad no interviene en la expresión final: los dos radios conocidos en dos instantes fijan por completo la pendiente. La gota desaparece en tiempo finito, a diferencia de los modelos de decaimiento exponencial, y el intervalo de validez termina en ese instante.
