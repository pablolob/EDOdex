
## Enunciado

40. Un tanque que tiene la forma de cilindro circular recto, de 0.6 m de radio y 3 m de altura, está parado sobre su base. Inicialmente, el tanque está lleno de agua y ésta sale por un agujero circular de 12.5 mm de radio en el fondo. Determine una ecuación diferencial para la altura $h$ del agua al tiempo $t > 0$. Desprecie la fricción y contracción del agua en el agujero.

## Solución

La ecuación diferencial que modela la altura $h(t)$ del agua es

$$
\frac{dh}{dt} = -\frac{r_0^{2}}{R^{2}}\sqrt{2g}\,\sqrt{h},
$$

donde $R = 0.6\,\text{m}$ es el radio del tanque, $r_0 = 0.0125\,\text{m}$ es el radio del agujero y $g = 9.8\,\text{m}/\text{s}^{2}$. Con los datos numéricos, la ecuación resulta

$$
\frac{dh}{dt} = -\frac{\sqrt{19.6}}{2304}\,\sqrt{h}.
$$

## Resolución

Sean:

- $R = 0.6\,\text{m}$ el radio del tanque,
- $r_0 = 12.5\,\text{mm} = 0.0125\,\text{m}$ el radio del agujero,
- $g = 9.8\,\text{m}/\text{s}^{2}$ la aceleración de la gravedad,
- $h(t)$ la altura del agua en el instante $t > 0$.

El área de la base del tanque es $A = \pi R^{2}$. El volumen de agua en el tanque en el instante $t$ es

$$
V(t) = A\,h(t) = \pi R^{2}\,h(t).
$$

La rapidez con la que el agua sale por el agujero, según la ley de Torricelli (sin fricción ni contracción), es $v = \sqrt{2gh}$. El área del agujero es $A_0 = \pi r_0^{2}$. Por tanto, el caudal de salida es

$$
\frac{dV}{dt} = -A_0\,v = -\pi r_0^{2}\sqrt{2gh},
$$

donde el signo negativo indica que el volumen disminuye.

Por otro lado, derivando $V = \pi R^{2} h$ se obtiene

$$
\frac{dV}{dt} = \pi R^{2}\,\frac{dh}{dt}.
$$

Igualando ambas expresiones:

$$
\pi R^{2}\,\frac{dh}{dt} = -\pi r_0^{2}\sqrt{2gh}.
$$

Se cancelan los factores $\pi$ y se despeja $dh/dt$:

$$
\frac{dh}{dt} = -\frac{r_0^{2}}{R^{2}}\sqrt{2g}\,\sqrt{h}.
$$

Sustituyendo los valores numéricos,

$$
\frac{r_0^{2}}{R^{2}} = \frac{(0.0125)^{2}}{(0.6)^{2}}
                     = \frac{0.00015625}{0.36}
                     = \frac{1}{2304},
$$

y $\sqrt{2g} = \sqrt{2\cdot 9.8} = \sqrt{19.6}$. Por tanto,

$$
\frac{dh}{dt} = -\frac{\sqrt{19.6}}{2304}\,\sqrt{h}.
$$

La condición inicial es $h(0) = 3\,\text{m}$ (tanque inicialmente lleno) y la ecuación es válida para $0 < h \le 3$.

## Observaciones

El modelo emplea la ley de Torricelli, que supone flujo ideal (sin fricción ni contracción). En un tanque real, la velocidad de salida se reduce por un coeficiente de descarga $C_d < 1$, pero el enunciado pide explícitamente despreciar estos efectos. La ecuación resultante es de primer orden, no lineal y de **variables separables**; su resolución proporcionaría el tiempo de vaciado del tanque.
