
## Enunciado

Considere un tanque usado en ciertos experimentos de hidrodinámica. Después de realizar un experimento, el tanque contiene 200 litros de una solución de colorante con una concentración de 1 g/litro. A fin de preparar el siguiente experimento, el tanque debe lavarse con agua limpia que fluye a razón de 2 litros/min y la solución bien revuelta sale a la misma razón. Halle el tiempo que transcurrirá antes de que la concentración de colorante en el tanque alcance el 1% de su valor original.

## Solución

El tiempo buscado es

$$
t=100\ln 100\approx 460.5\ \text{min}\approx 7.68\ \text{h}.
$$

## Resolución

Sea $Q(t)$ la cantidad de colorante, en gramos, presente en el tanque en el instante $t$, medido en minutos. El agua limpia entra a razón de 2 litros/min y la mezcla sale a la misma razón; como los caudales de entrada y salida coinciden, el volumen de líquido permanece constante en $V=200$ litros.

El agua que entra no aporta colorante, de modo que la razón de entrada es $0$ g/min. La solución sale bien revuelta, por lo que su concentración es la del tanque, $Q(t)/V$. La razón de salida es entonces

$$
\frac{Q(t)}{200}\cdot 2=\frac{Q(t)}{100}\ \text{g/min}.
$$

La cantidad de colorante satisface la **ecuación lineal de primer orden**

$$
\frac{dQ}{dt}=-\frac{Q}{100},\qquad Q(0)=200,
$$

donde la condición inicial proviene del volumen y la concentración dados, $Q(0)=200\cdot 1=200$ g.

En la forma estándar $Q'+\frac{1}{100}Q=0$, el coeficiente es $P(t)=\frac{1}{100}$, así que el **factor integrante** es

$$
\mu(t)=\exp\!\left(\int \frac{1}{100}\,dt\right)=e^{t/100}.
$$

Al multiplicar por $\mu(t)$, el miembro izquierdo es la derivada de un producto:

$$
\frac{d}{dt}\!\left[e^{t/100}Q\right]=0.
$$

La integración da $e^{t/100}Q=C$; al despejar,

$$
Q(t)=C e^{-t/100}.
$$

La condición inicial $Q(0)=200$ fija $C=200$, por lo que

$$
Q(t)=200\,e^{-t/100}.
$$

La concentración en el tanque es $c(t)=Q(t)/200=e^{-t/100}$ g/litro. La concentración inicial vale $1$ g/litro y el $1\%$ de ese valor es $0.01$ g/litro. Se plantea

$$
e^{-t/100}=0.01.
$$

Al aplicar logaritmo natural y usar $\ln 0.01=-\ln 100$,

$$
-\frac{t}{100}=-\ln 100
\quad\Longrightarrow\quad
t=100\ln 100\approx 460.5\ \text{min}.
$$

En horas, $t\approx 7.68$ h, es decir, aproximadamente 7 horas y 40 minutos.

## Observaciones

La concentración decae de forma exponencial, $c(t)=e^{-t/100}$, y tiende a cero cuando $t\to\infty$. El tiempo necesario para alcanzar una fracción dada de la concentración inicial no depende de la concentración inicial ni del tamaño del tanque por separado: solo depende de la razón $V/\,\text{caudal}=200/2=100$ min, que es la constante de tiempo del lavado.
