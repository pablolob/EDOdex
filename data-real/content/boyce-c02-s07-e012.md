
## Enunciado

Un cuerpo de masa $m$ se proyecta verticalmente hacia arriba con una velocidad inicial $v_0$ en un medio que ofrece una resistencia $k|v|$, en donde $k$ es una constante. Suponga que la atracción gravitacional de la Tierra es constante.

a) Determine la velocidad $v(t)$ del cuerpo en cualquier instante.

b) Aplique el resultado del inciso a) para calcular el límite de $v(t)$ cuando $k \to 0$; es decir, a medida que la resistencia tiende a cero. ¿Concuerda este resultado con la velocidad de una masa $m$ proyectada hacia arriba con una velocidad inicial $v_0$ en un vacío?

c) Aplique el resultado del inciso a) para calcular el límite de $v(t)$ cuando $m \to 0$; es decir, a medida que la masa tiende a cero.

## Solución

Con el eje vertical positivo hacia arriba y $v=v(t)$ la velocidad del cuerpo,

$$
v(t)=\left(v_0+\frac{mg}{k}\right)e^{-kt/m}-\frac{mg}{k}.
$$

Los límites pedidos son

$$
\lim_{k\to 0} v(t)=v_0-gt,
\qquad
\lim_{m\to 0} v(t)=0 \quad (t>0).
$$

El primer límite es la velocidad $v_0-gt$ de un cuerpo lanzado hacia arriba en un vacío, de modo que el resultado concuerda.

## Resolución

Se toma el eje vertical con sentido positivo hacia arriba. Sobre el cuerpo actúan dos fuerzas: el peso, $mg$ dirigido hacia abajo, y la resistencia del medio, de magnitud $k|v|$ y sentido opuesto a la velocidad. Como el vector $-kv$ siempre se opone al movimiento, la segunda ley de Newton se escribe, tanto en el ascenso como en el descenso,

$$
m\frac{dv}{dt}=-mg-kv.
$$

La ecuación es de **primer orden** y **lineal**. En forma estándar,

$$
\frac{dv}{dt}+\frac{k}{m}v=-g.
$$

Se aplica el método del **factor integrante** con

$$
\mu(t)=\exp\!\left(\int \frac{k}{m}\,dt\right)=e^{kt/m}.
$$

Al multiplicar la ecuación por $\mu(t)$, el miembro izquierdo es la derivada de un producto,

$$
\frac{d}{dt}\!\left(e^{kt/m}v\right)=-g\,e^{kt/m}.
$$

Integrando ambos miembros,

$$
e^{kt/m}v=-\frac{mg}{k}e^{kt/m}+C,
\qquad
v(t)=-\frac{mg}{k}+Ce^{-kt/m}.
$$

La condición inicial $v(0)=v_0$ fija la constante, $C=v_0+\dfrac{mg}{k}$, de donde

$$
v(t)=\left(v_0+\frac{mg}{k}\right)e^{-kt/m}-\frac{mg}{k}.
$$

**b)** Conviene reescribir la solución como

$$
v(t)=v_0e^{-kt/m}-\frac{mg}{k}\left(1-e^{-kt/m}\right).
$$

Cuando $k\to 0$, el primer término tiende a $v_0$ y el segundo admite el límite

$$
\lim_{k\to 0}\frac{mg}{k}\left(1-e^{-kt/m}\right)
=mg\lim_{k\to 0}\frac{1-e^{-kt/m}}{k}
=mg\cdot\frac{t}{m}
=gt.
$$

Por tanto,

$$
\lim_{k\to 0}v(t)=v_0-gt.
$$

Esta es exactamente la velocidad de una masa proyectada hacia arriba con velocidad inicial $v_0$ cuando solo actúa la gravedad, es decir, en un vacío. El resultado concuerda.

**c)** Para $t>0$ fijo, el exponente $-kt/m$ tiende a $-\infty$ cuando $m\to 0^+$, de modo que $e^{-kt/m}\to 0$. En la forma original de la solución,

$$
\lim_{m\to 0}v(t)
=\lim_{m\to 0}\left[-\frac{mg}{k}+\left(v_0+\frac{mg}{k}\right)e^{-kt/m}\right]
=0.
$$

Así, la velocidad tiende a cero para todo $t>0$. En $t=0$ la velocidad sigue siendo $v_0$, porque la condición inicial se impone para cualquier masa.

## Observaciones

La misma ecuación describe el ascenso y el descenso. La resistencia $k|v|$ se escribe en forma vectorial como $-kv$, que apunta siempre en sentido contrario a la velocidad; por eso no es necesario plantear una ecuación distinta al cambiar el sentido del movimiento.

El término $-\dfrac{mg}{k}$ es la velocidad límite de caída del cuerpo en el medio: cuando $t\to\infty$, la solución se aproxima a ese valor, en el que la resistencia equilibra al peso.

El resultado del inciso c) muestra que, en este modelo, una masa que tiende a cero es detenida de inmediato por el medio para cualquier instante positivo. La masa solo interviene en la escala de tiempo $m/k$ con que la velocidad se aproxima a su valor límite.
