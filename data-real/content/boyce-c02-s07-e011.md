
## Enunciado

Un cuerpo de masa constante $m$ se proyecta verticalmente hacia arriba con una velocidad inicial $v_0$ en un medio que presenta una resistencia $k|v|$, en donde $k$ es una constante. Desprecíense los cambios en la fuerza de la gravedad.

a) Encuentre la altura máxima $x_m$ que alcanza el cuerpo y el instante $t_m$ en el que alcanza esta altura máxima.

b) Demuestre que si $kv_0/mg < 1$, entonces $t_m$ y $x_m$ pueden expresarse como

$$t_m = \frac{v_0}{g}\left[1 - \frac{1}{2}\frac{kv_0}{mg} + \frac{1}{3}\left(\frac{kv_0}{mg}\right)^2 - \cdots\right],$$

$$x_m = \frac{v_0^2}{2g}\left[1 - \frac{2}{3}\frac{kv_0}{mg} + \frac{1}{2}\left(\frac{kv_0}{mg}\right)^2 - \cdots\right].$$

## Solución

a) Las respuestas exactas son

$$
t_m = \frac{m}{k}\ln\!\left(1 + \frac{kv_0}{mg}\right),
\qquad
x_m = \frac{mv_0}{k} - \frac{m^2g}{k^2}\ln\!\left(1 + \frac{kv_0}{mg}\right).
$$

b) Con $\varepsilon = \dfrac{kv_0}{mg}$ y la condición $\varepsilon < 1$, el desarrollo de $\ln(1+\varepsilon)$ da

$$
t_m = \frac{v_0}{g}\left[1 - \frac{1}{2}\varepsilon + \frac{1}{3}\varepsilon^2 - \cdots\right],
$$

$$
x_m = \frac{v_0^2}{2g}\left[1 - \frac{2}{3}\varepsilon + \frac{1}{2}\varepsilon^2 - \cdots\right].
$$

## Resolución

Se toma el eje vertical positivo hacia arriba y se designa con $x(t)$ la altura y con $v = dx/dt$ la velocidad. Durante el ascenso $v > 0$, de modo que la resistencia tiene magnitud $kv$ y sentido opuesto al movimiento. La segunda ley de Newton en esa etapa es

$$
m\frac{dv}{dt} = -mg - kv.
$$

Al escribirla en forma estándar se obtiene una ecuación **lineal no homogénea** de primer orden con coeficientes constantes:

$$
\frac{dv}{dt} + \frac{k}{m}v = -g.
$$

El **factor integrante** es

$$
\mu(t) = \exp\!\left(\int \frac{k}{m}\,dt\right) = e^{(k/m)t}.
$$

Al multiplicar por $\mu(t)$, el miembro izquierdo es la derivada de un producto:

$$
\frac{d}{dt}\!\left[e^{(k/m)t}v\right] = -g\,e^{(k/m)t}.
$$

La integración da

$$
e^{(k/m)t}v = -\frac{mg}{k}e^{(k/m)t} + C,
$$

es decir,

$$
v(t) = -\frac{mg}{k} + C e^{-(k/m)t}.
$$

La condición inicial $v(0) = v_0$ fija la constante:

$$
v_0 = -\frac{mg}{k} + C \quad\Longrightarrow\quad C = v_0 + \frac{mg}{k}.
$$

Así,

$$
v(t) = -\frac{mg}{k} + \left(v_0 + \frac{mg}{k}\right)e^{-(k/m)t}.
$$

**a)** La altura máxima se alcanza cuando la velocidad se anula. En ese instante $t_m$,

$$
\left(v_0 + \frac{mg}{k}\right)e^{-(k/m)t_m} = \frac{mg}{k},
$$

de donde

$$
e^{-(k/m)t_m} = \frac{mg}{kv_0 + mg}
= \frac{1}{1 + \dfrac{kv_0}{mg}}.
$$

Al tomar logaritmos,

$$
t_m = \frac{m}{k}\ln\!\left(\frac{kv_0 + mg}{mg}\right)
= \frac{m}{k}\ln\!\left(1 + \frac{kv_0}{mg}\right).
$$

La posición se obtiene integrando la velocidad, con $x(0) = 0$:

$$
x(t) = \int_0^t v(s)\,ds
= -\frac{mg}{k}t + \frac{m}{k}\left(v_0 + \frac{mg}{k}\right)\left(1 - e^{-(k/m)t}\right).
$$

En $t = t_m$ el factor exponencial vale $mg/(kv_0 + mg)$, luego

$$
1 - e^{-(k/m)t_m} = \frac{kv_0}{kv_0 + mg}.
$$

Al sustituir,

$$
x_m = -\frac{mg}{k}t_m
+ \frac{m}{k}\left(v_0 + \frac{mg}{k}\right)\frac{kv_0}{kv_0 + mg}.
$$

El segundo sumando se simplifica a $mv_0/k$ y el primero es $(mg/k)t_m = m^2g/k^2\ln(1 + kv_0/mg)$. Por tanto,

$$
x_m = \frac{mv_0}{k} - \frac{m^2g}{k^2}\ln\!\left(1 + \frac{kv_0}{mg}\right).
$$

**b)** Sea $\varepsilon = \dfrac{kv_0}{mg}$. La hipótesis $\varepsilon < 1$ sitúa $\varepsilon$ dentro del radio de convergencia del desarrollo

$$
\ln(1 + \varepsilon) = \varepsilon - \frac{\varepsilon^2}{2} + \frac{\varepsilon^3}{3} - \cdots
$$

Para el tiempo, $m/k = v_0/(\varepsilon g)$, así que

$$
t_m = \frac{m}{k}\ln(1 + \varepsilon)
= \frac{v_0}{\varepsilon g}\left(\varepsilon - \frac{\varepsilon^2}{2} + \frac{\varepsilon^3}{3} - \cdots\right)
= \frac{v_0}{g}\left(1 - \frac{\varepsilon}{2} + \frac{\varepsilon^2}{3} - \cdots\right).
$$

Para la altura se escriben los dos términos con $\varepsilon$. Como $mv_0/k = v_0^2/(\varepsilon g)$ y $m^2g/k^2 = v_0^2/(\varepsilon^2 g)$,

$$
x_m = \frac{v_0^2}{g}\left[\frac{1}{\varepsilon} - \frac{1}{\varepsilon^2}\ln(1 + \varepsilon)\right].
$$

Al desarrollar el corchete,

$$
\frac{1}{\varepsilon^2}\ln(1 + \varepsilon)
= \frac{1}{\varepsilon} - \frac{1}{2} + \frac{\varepsilon}{3} - \frac{\varepsilon^2}{4} + \cdots,
$$

de modo que

$$
\frac{1}{\varepsilon} - \frac{1}{\varepsilon^2}\ln(1 + \varepsilon)
= \frac{1}{2} - \frac{\varepsilon}{3} + \frac{\varepsilon^2}{4} - \cdots
= \frac{1}{2}\left(1 - \frac{2}{3}\varepsilon + \frac{1}{2}\varepsilon^2 - \cdots\right).
$$

Por tanto,

$$
x_m = \frac{v_0^2}{2g}\left(1 - \frac{2}{3}\varepsilon + \frac{1}{2}\varepsilon^2 - \cdots\right).
$$

## Observaciones

Las dos series son el desarrollo de Taylor de $\ln(1+\varepsilon)$ alrededor de $\varepsilon = 0$; convergen para $\varepsilon < 1$, que es exactamente la hipótesis del apartado b).

En el límite $k \to 0$ (sin resistencia) los resultados se reducen a los del vacío: $t_m = v_0/g$ y $x_m = v_0^2/(2g)$. La resistencia del medio disminuye la altura máxima y adelanta el instante en que se alcanza, en concordancia con los signos de los términos correctivos.

La ecuación es lineal, de modo que no existen soluciones singulares. Las expresiones obtenidas describen únicamente la etapa de ascenso; son válidas mientras $v \ge 0$ y $x \ge 0$.
