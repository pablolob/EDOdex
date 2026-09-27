
## Enunciado

Suponga que se lanza un cohete directamente hacia arriba desde la superficie de la Tierra con una velocidad inicial $v_0\sqrt{2gR}$, en donde $R$ es el radio de la Tierra. Despreciese la resistencia del aire.

a) Encuentre una expresión para la velocidad $v$ en términos de la distancia $x$ desde la superficie de la Tierra.

b) Encuentre el tiempo necesario para que el cohete recorra 240 000 millas (la distancia aproximada de la Tierra a la Luna). Supóngase que $R = 4\,000$ millas.

## Solución

a) La velocidad en función de la distancia $x$ desde la superficie es

$$
v(x)=\sqrt{\frac{2gR^2}{R+x}}.
$$

b) El tiempo pedido es

$$
t=\frac{2}{3R\sqrt{2g}}\left[(R+x)^{3/2}-R^{3/2}\right]
=\frac{2}{3}\sqrt{\frac{R}{2g}}\left[\left(1+\frac{x}{R}\right)^{3/2}-1\right].
$$

Con $R=4\,000$ millas, $x=240\,000$ millas y $g=32\ \text{ft/s}^2$,

$$
t\approx 1.82\times 10^{5}\ \text{s}\approx 50.6\ \text{h}.
$$

## Resolución

Se elige el eje $x$ positivo hacia arriba, con origen en la superficie de la Tierra, y se designa con $v=dx/dt$ la velocidad del cohete. A la distancia $x$ de la superficie, el cohete se encuentra a $R+x$ del centro de la Tierra. La aceleración gravitacional tiene magnitud $GM/(R+x)^2$ y sentido hacia el centro. Como en la superficie $GM/R^2=g$, resulta $GM=gR^2$, de modo que la aceleración en la dirección del movimiento es

$$
a=-\frac{gR^2}{(R+x)^2}.
$$

Con la segunda ley de Newton y sin resistencia del aire, la masa se cancela y la velocidad satisface

$$
\frac{dv}{dt}=-\frac{gR^2}{(R+x)^2}.
$$

El miembro derecho depende de $x$, así que se emplea la **regla de la cadena** para tomar $x$ como variable independiente:

$$
\frac{dv}{dt}=\frac{dv}{dx}\frac{dx}{dt}=v\frac{dv}{dx}.
$$

La ecuación resultante es **separable**:

$$
v\frac{dv}{dx}=-\frac{gR^2}{(R+x)^2}
\quad\Longrightarrow\quad
v\,dv=-gR^2(R+x)^{-2}\,dx.
$$

Al integrar ambos miembros,

$$
\frac{v^2}{2}=\frac{gR^2}{R+x}+C.
$$

La velocidad inicial es la velocidad de escape, $v(0)=v_0$ con $v_0=\sqrt{2gR}$. Al imponerla en $x=0$,

$$
\frac{v_0^2}{2}=\frac{2gR}{2}=gR=\frac{gR^2}{R}+C=gR+C,
$$

de donde $C=0$. Por tanto,

$$
v^2=\frac{2gR^2}{R+x}
\quad\Longrightarrow\quad
v(x)=\sqrt{\frac{2gR^2}{R+x}},
$$

pues $v>0$ mientras el cohete asciende. Esto responde el apartado a).

Para el apartado b) se usa $v=dx/dt$, es decir,

$$
\frac{dx}{dt}=\sqrt{\frac{2gR^2}{R+x}}
\quad\Longrightarrow\quad
dt=\frac{\sqrt{R+x}}{R\sqrt{2g}}\,dx.
$$

Al integrar desde la superficie, $x=0$, hasta la distancia pedida,

$$
t=\frac{1}{R\sqrt{2g}}\int_0^x (R+s)^{1/2}\,ds
=\frac{2}{3R\sqrt{2g}}\left[(R+x)^{3/2}-R^{3/2}\right].
$$

Al factorizar $R^{3/2}$ se obtiene la forma alternativa

$$
t=\frac{2}{3}\sqrt{\frac{R}{2g}}\left[\left(1+\frac{x}{R}\right)^{3/2}-1\right].
$$

Con $R=4\,000$ millas $=4\,000\cdot 5280=2.112\times 10^{7}$ ft y $x=240\,000$ millas, de modo que $x/R=60$, y con $g=32\ \text{ft/s}^2$:

$$
\sqrt{\frac{R}{2g}}=\sqrt{\frac{2.112\times 10^{7}}{64}}=\sqrt{3.3\times 10^{5}}\approx 574.5\ \text{s},
$$

$$
t=\frac{2}{3}(574.5)\left(61^{3/2}-1\right)\approx \frac{2}{3}(574.5)(475.4)\approx 1.82\times 10^{5}\ \text{s}\approx 50.6\ \text{h}.
$$

## Observaciones

La velocidad inicial impuesta es la de escape, $v_0=\sqrt{2gR}$ (en el enunciado, $v_0$ es la etiqueta de esa velocidad inicial). Su energía mecánica total por unidad de masa es nula, de modo que $v\to 0$ cuando $x\to\infty$. El cohete no regresa y alcanza cualquier distancia finita, incluida la de la Luna.

A diferencia de los modelos con $g$ constante, aquí la aceleración de la gravedad disminuye con la altura como $1/(R+x)^2$. Esta variación es imprescindible a distancias comparables al radio terrestre.

El resultado no depende de la masa del cohete; la masa se cancela en la segunda ley de Newton.
