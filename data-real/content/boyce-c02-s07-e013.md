
## Enunciado

Sobre un cuerpo que cae en un líquido relativamente denso, por ejemplo aceite, actúan tres fuerzas (ver la figura 2.7.3): una fuerza de resistencia $R$, una fuerza de empuje $B$ y su peso $w$ debido a la gravedad. La fuerza de empuje es igual al peso del fluido desplazado por el objeto. Para un cuerpo esférico de radio $a$ que se mueve lentamente, la fuerza de resistencia queda definida por la ley de Stokes $R = 6\pi\mu a|v|$, en donde $v$ es la velocidad del cuerpo y $\mu$ es el coeficiente de viscosidad del fluido circundante.

a) Encuentre la velocidad límite de una esfera maciza de radio $a$ y densidad $\rho$ que cae libremente en un medio de densidad $\rho'$ y coeficiente de viscosidad $\mu$.

b) En 1910, el físico estadounidense R. A. Millikan (1868-1953) determinó la carga de un electrón al estudiar el movimiento de gotas de aceite diminutas al caer en un campo eléctrico. Un campo de intensidad $E$ ejerce una fuerza $Ee$ sobre una gota con carga $e$. Suponga que se ha ajustado $E$ de modo que la gota se mantenga estacionaria ($v = 0$) y que $w$ y $B$ son como se dan en el inciso a). Encuentre una fórmula para $e$. Millikan pudo identificar $e$ como la carga sobre un electrón y determinar que $e = 4.803 \times 10^{-10}$ ues.

## Solución

Con el eje positivo dirigido hacia abajo, la velocidad límite de la esfera es

$$
v_T=\frac{2a^2(\rho-\rho')g}{9\mu}.
$$

La carga que mantiene estacionaria la gota es

$$
e=\frac{w-B}{E}=\frac{4\pi a^3(\rho-\rho')g}{3E}=\frac{6\pi\mu a\,v_T}{E}.
$$

## Resolución

Se toma el eje positivo hacia abajo y $v(t)$ como la velocidad de descenso de la esfera. Su volumen es $V=\frac{4}{3}\pi a^3$, su masa es $m=\rho V$ y su peso es $w=\rho V g$. El empuje es el peso del fluido desplazado, $B=\rho' V g$. La resistencia de Stokes se opone al movimiento, luego para $v\ge 0$ vale $R=6\pi\mu a v$.

**Modelo.** Sobre la esfera actúan el peso hacia abajo y el empuje y la resistencia hacia arriba. La **segunda ley de Newton** conduce a

$$
m\frac{dv}{dt}=w-B-R=(\rho-\rho')Vg-6\pi\mu a v.
$$

La ecuación es **de primer orden**, **lineal** y de **coeficientes constantes**.

**Velocidad límite.** Al dividir entre $m=\rho V$,

$$
\frac{dv}{dt}=\frac{\rho-\rho'}{\rho}g-\frac{6\pi\mu a}{\rho V}v.
$$

La velocidad límite es el límite de $v(t)$ cuando $t\to\infty$. Su valor anula la aceleración; como la ecuación es lineal de primer orden con pendiente negativa, toda solución tiende a ese estado de equilibrio. Imponiendo $dv/dt=0$,

$$
(\rho-\rho')Vg-6\pi\mu a v_T=0
\quad\Longrightarrow\quad
v_T=\frac{(\rho-\rho')Vg}{6\pi\mu a}.
$$

Al sustituir $V=\frac{4}{3}\pi a^3$ y simplificar,

$$
v_T=\frac{(\rho-\rho')\frac{4}{3}\pi a^3 g}{6\pi\mu a}=\frac{2a^2(\rho-\rho')g}{9\mu}.
$$

De forma explícita, la solución con velocidad inicial $v_0$ es

$$
v(t)=v_T+(v_0-v_T)e^{-6\pi\mu a\,t/(\rho V)},
$$

de donde $v(t)\to v_T$. Para $v(0)=0$ resulta $v(t)=v_T\left(1-e^{-6\pi\mu a\,t/(\rho V)}\right)$, y la velocidad límite se alcanza solo asintóticamente.

**Carga de la gota.** Si la gota permanece estacionaria, $v=0$ y la resistencia de Stokes es nula. La fuerza eléctrica $Ee$ equilibra la fuerza neta gravitatoria $w-B$. Con el mismo eje positivo hacia abajo,

$$
Ee=w-B=(\rho-\rho')Vg.
$$

Por tanto,

$$
e=\frac{w-B}{E}=\frac{(\rho-\rho')Vg}{E}=\frac{4\pi a^3(\rho-\rho')g}{3E}.
$$

Como $w-B=6\pi\mu a v_T$, también $e=6\pi\mu a v_T/E$.

**Comprobación.** La expresión de $v_T$ satisface la ecuación del modelo: al sustituirla, $(\rho-\rho')Vg-6\pi\mu a v_T=0$, luego $dv/dt=0$. En el inciso b, sustituir $e$ en el balance $w-B-Ee$ da cero, que es la condición de gota estacionaria.

## Observaciones

La velocidad límite no depende de la velocidad inicial. Si $\rho>\rho'$ la esfera desciende; si $\rho=\rho'$ la fuerza neta gravitatoria se anula y la fórmula deja de describir una caída. La fórmula supone $\rho>\rho'$.

En el inciso b, la gota se mantiene estacionaria cuando la fuerza eléctrica iguala la diferencia entre el peso y el empuje. Esa relación es la base del experimento de Millikan para medir la carga elemental.
