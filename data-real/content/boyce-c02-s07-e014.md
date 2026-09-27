
## Enunciado

Una masa de 0.25 kg se deja caer desde el reposo en un medio que presenta una resistencia de $0.2|v|$, en donde $v$ se da en metros/segundo.

a) Si la masa se deja caer desde una altura de 30 m, determine su velocidad al chocar contra el piso.

b) Si la masa debe alcanzar una velocidad no mayor de 10 m/s, encuentre la altura máxima desde la que puede dejarse caer.

c) Suponga que la fuerza de resistencia es $k|v|$, en donde $v$ se da en metros/segundo y $k$ es una constante. Si la masa se deja caer desde una altura de 30 m y debe chocar contra el piso con una velocidad no mayor de 10 m/s, determine el coeficiente de resistencia $k$ que se requiere.

## Solución

Con el eje positivo hacia abajo, la relación entre la velocidad $v$ y el descenso $x$ desde el reposo es

$$
x(v)=-\frac{m v}{k}-\frac{m^{2}g}{k^{2}}\ln\!\left(1-\frac{k v}{m g}\right).
$$

a) Para $m=0.25\ \mathrm{kg}$, $g=9.8\ \mathrm{m/s^2}$, $k=0.2\ \mathrm{kg/s}$ y $x=30\ \mathrm{m}$,

$$
v\approx 11.58\ \mathrm{m/s}.
$$

b) Con $v=10\ \mathrm{m/s}$ en la misma relación, la altura máxima es

$$
x_{\max}\approx 13.45\ \mathrm{m}.
$$

c) Imponiendo $x=30\ \mathrm{m}$ cuando $v=10\ \mathrm{m/s}$, el coeficiente requerido es

$$
k\approx 0.2394\ \mathrm{kg/s}\approx 0.24\ \mathrm{kg/s}.
$$

## Resolución

Se toma el eje positivo hacia abajo, con el origen en el punto de partida, de modo que la velocidad $v=dx/dt$ y el descenso $x$ son positivos durante la caída. Sobre la masa actúan el peso, de magnitud $mg$ y en el sentido del movimiento, y la resistencia, de magnitud $k|v|$ y sentido opuesto. Mientras cae, $v\ge 0$ y la resistencia vale $kv$. La segunda ley de Newton conduce a

$$
m\frac{dv}{dt}=mg-kv,\qquad v(0)=0,\quad x(0)=0.
$$

La ecuación es de **primer orden** y **separable**. Para relacionar la velocidad con el descenso se elimina el tiempo con la regla de la cadena, $dv/dt=(dv/dx)(dx/dt)=v\,dv/dx$:

$$
m v\frac{dv}{dx}=mg-kv.
$$

Al separar las variables,

$$
dx=\frac{m v}{mg-k v}\,dv.
$$

La integración desde el reposo, con $x=0$ cuando $v=0$, da

$$
x(v)=\int_0^v \frac{m s}{m g-k s}\,ds.
$$

El integrando se descompone en fracciones simples:

$$
\frac{s}{m g-k s}=-\frac{1}{k}+\frac{m g}{k}\cdot\frac{1}{m g-k s}.
$$

Por tanto,

$$
x(v)=m\left[-\frac{v}{k}-\frac{m g}{k^{2}}\ln\!\left(1-\frac{k v}{m g}\right)\right]
=-\frac{m v}{k}-\frac{m^{2}g}{k^{2}}\ln\!\left(1-\frac{k v}{m g}\right).
$$

Esta es la relación entre la velocidad y la altura descendida. El logaritmo exige $kv<mg$, es decir, $v<v_L=mg/k$, que es la velocidad límite del movimiento.

**a)** Con $m=0.25\ \mathrm{kg}$, $g=9.8\ \mathrm{m/s^2}$ y $k=0.2\ \mathrm{kg/s}$ resultan $m g=2.45$, $m/k=1.25$ y $m^{2}g/k^{2}=15.3125$. Al imponer $x=30$,

$$
30=-1.25\,v-15.3125\ln\!\left(1-\frac{v}{12.25}\right).
$$

La ecuación es trascendente y se resuelve numéricamente en $0<v<12.25$. La raíz es

$$
v\approx 11.58\ \mathrm{m/s}.
$$

**b)** Con $k=0.2$ y $v=10$ en la relación general,

$$
x_{\max}=-\frac{0.25(10)}{0.2}-\frac{0.25^{2}(9.8)}{0.2^{2}}\ln\!\left(1-\frac{0.2(10)}{2.45}\right)
\approx 13.45\ \mathrm{m}.
$$

**c)** Se impone $x=30$ cuando $v=10$ y se despeja $k$ de

$$
30=-\frac{2.5}{k}-\frac{0.6125}{k^{2}}\ln\!\left(1-4.0816\,k\right).
$$

La resolución numérica, válida para $0<k<0.245$, donde el argumento del logaritmo es positivo, da

$$
k\approx 0.2394\ \mathrm{kg/s}\approx 0.24\ \mathrm{kg/s}.
$$

## Observaciones

La velocidad límite es $v_L=mg/k$. Con $k=0.2$ vale $12.25\ \mathrm{m/s}$; la velocidad de impacto del apartado a) se aproxima a ese valor sin alcanzarlo, porque la caída desde una altura finita dura un tiempo finito.

La solución de equilibrio $v\equiv v_L$ satisface $dv/dt=0$ y es una solución singular de la ecuación separada; no se alcanza desde el reposo en un tiempo ni en una distancia finitos. No hay soluciones espurias.

En los apartados a) y c) la incógnita aparece dentro de un logaritmo y en un término lineal, de modo que no admite despeje elemental; el valor se obtiene por resolución numérica de la ecuación trascendente.

### Método alternativo: integración en el tiempo

También puede integrarse directamente $m\,dv/dt=mg-kv$ con $v(0)=0$, lo que proporciona la velocidad explícita

$$
v(t)=\frac{m g}{k}\left(1-e^{-k t/m}\right),
$$

y, tras integrar de nuevo con $x(0)=0$,

$$
x(t)=\frac{m g}{k}\left[t-\frac{m}{k}\left(1-e^{-k t/m}\right)\right].
$$

Eliminar $t$ entre ambas expresiones conduce a la misma relación $x(v)$.
