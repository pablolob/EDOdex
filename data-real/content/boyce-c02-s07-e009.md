
## Enunciado

Un cuerpo de masa $m$ cae desde el reposo en un medio que presenta una resistencia proporcional al cuadrado de la velocidad. Determine la relación entre la velocidad $v$ y el tiempo $t$. Determine la velocidad límite.

## Solución

La velocidad en función del tiempo es

$$
v(t)=\sqrt{\frac{mg}{k}}\,\tanh\!\left(t\sqrt{\frac{kg}{m}}\right),
$$

y la velocidad límite es

$$
v_{\text{lim}}=\sqrt{\frac{mg}{k}}.
$$

## Resolución

**Modelo.** Se toma el sentido positivo hacia abajo. Sobre el cuerpo actúan el peso $mg$ hacia abajo y la resistencia $kv^2$ hacia arriba, con $k>0$ la constante de proporcionalidad. La segunda ley de Newton conduce al problema con valor inicial

$$
m\frac{dv}{dt}=mg-kv^2,\qquad v(0)=0.
$$

Esta ecuación es **de primer orden**, **no lineal** y **separable**. La velocidad límite $v_T$ es el valor que anula la fuerza neta, $mg-kv_T^2=0$, de modo que

$$
v_T=\sqrt{\frac{mg}{k}}.
$$

Al dividir la ecuación entre $m$ y sustituir $g=\dfrac{k}{m}v_T^2$, se obtiene

$$
\frac{dv}{dt}=g\left(1-\frac{v^2}{v_T^2}\right).
$$

**Separación de variables.** Como $v(0)=0$, se cumple $0\le v<v_T$ mientras el movimiento es de caída y la fuerza neta es positiva. En ese intervalo el miembro derecho es positivo y la separación es válida:

$$
\frac{dv}{1-\dfrac{v^2}{v_T^2}}=g\,dt.
$$

Se descompone el integrando en fracciones simples,

$$
\frac{1}{1-\dfrac{v^2}{v_T^2}}=\frac{v_T^2}{v_T^2-v^2}=\frac{v_T}{2}\left(\frac{1}{v_T-v}+\frac{1}{v_T+v}\right).
$$

Integrando ambos miembros,

$$
\frac{v_T}{2}\ln\!\left(\frac{v_T+v}{v_T-v}\right)=gt+C.
$$

La condición inicial $v(0)=0$ da $\ln 1=0$, luego $C=0$. Despejando el logaritmo,

$$
\ln\!\left(\frac{v_T+v}{v_T-v}\right)=\frac{2g}{v_T}t,
\qquad\text{es decir}\qquad
\frac{v_T+v}{v_T-v}=e^{2gt/v_T}.
$$

Al resolver para $v$,

$$
v(t)=v_T\,\frac{e^{2gt/v_T}-1}{e^{2gt/v_T}+1}=v_T\tanh\!\left(\frac{gt}{v_T}\right).
$$

Sustituyendo $v_T=\sqrt{mg/k}$ resulta la forma final de $v(t)$.

**Velocidad límite.** Cuando $t\to\infty$, $\tanh(gt/v_T)\to 1$, por lo que $v(t)\to v_T$. El mismo valor se obtiene al imponer $dv/dt=0$ en el modelo: $mg=kv_T^2$, es decir,

$$
v_{\text{lim}}=v_T=\sqrt{\frac{mg}{k}}.
$$

**Comprobación.** Derivando $v=v_T\tanh(gt/v_T)$,

$$
\frac{dv}{dt}=g\,\operatorname{sech}^2\!\left(\frac{gt}{v_T}\right)
=g\left(1-\tanh^2\!\left(\frac{gt}{v_T}\right)\right)
=g\left(1-\frac{v^2}{v_T^2}\right),
$$

que coincide con la ecuación del modelo. Además $v(0)=v_T\tanh 0=0$.

## Observaciones

La velocidad crece desde cero de forma estrictamente creciente y se aproxima a $v_T$ sin alcanzarla en tiempo finito; la resistencia al cuadrado produce el perfil en tangente hiperbólica. La solución constante $v\equiv v_T$ satisface la ecuación pero no se alcanza desde el reposo, porque la condición $v(0)=0$ queda en la componente $0\le v<v_T$.

### Método alternativo: integral directa

La integración puede abreviarse con la integral inmediata

$$
\int\frac{dv}{v_T^2-v^2}=\frac{1}{v_T}\operatorname{artanh}\!\left(\frac{v}{v_T}\right),
$$

pues el integrando separado es $\dfrac{v_T^2}{v_T^2-v^2}$. De aquí resulta directamente $\operatorname{artanh}(v/v_T)=gt/v_T$, equivalente a $v=v_T\tanh(gt/v_T)$.
