
## Enunciado

Suponga que la temperatura de una taza de café obedece la ley de Newton del enfriamiento. Si el café tiene una temperatura de $200°F$ cuando acaba de servirse y un minuto después se ha enfriado hasta $190°F$ en un recinto cuya temperatura es de $70°F$, determine cuándo el café alcanza una temperatura de $150°F$.

## Solución

El café alcanza los $150\,^\circ\text{F}$ aproximadamente $6.07$ minutos después de servirse:

$$
t=\frac{\ln(13/8)}{\ln(13/12)}\approx 6.07\text{ min}\approx 6\text{ min }4\text{ s}.
$$

## Resolución

Sea $T(t)$ la temperatura del café, en grados Fahrenheit, en el instante $t$, medido en minutos desde que se sirve. La temperatura del recinto es la constante $T_m=70$. La **ley de enfriamiento de Newton** establece que la rapidez de cambio de la temperatura es proporcional a la diferencia entre la temperatura del cuerpo y la del medio:

$$
\frac{dT}{dt}=-k\,(T-70),\qquad k>0,
$$

donde el signo negativo expresa que el café se enfría cuando $T>70$. En forma estándar, la ecuación es lineal de primer orden:

$$
\frac{dT}{dt}+kT=70k.
$$

El **factor integrante** es $\mu(t)=e^{\int k\,dt}=e^{kt}$. Al multiplicar la ecuación por $\mu(t)$,

$$
\frac{d}{dt}\!\left(e^{kt}T\right)=70k\,e^{kt}.
$$

Al integrar ambos miembros,

$$
e^{kt}T=70e^{kt}+C,
$$

y al despejar $T$,

$$
T(t)=70+Ce^{-kt}.
$$

La condición inicial es $T(0)=200$, porque el café acaba de servirse. Entonces $70+C=200$, de modo que $C=130$ y

$$
T(t)=70+130e^{-kt}.
$$

El dato $T(1)=190$ determina la constante $k$:

$$
\begin{aligned}
190 &= 70+130e^{-k}, \\
120 &= 130e^{-k}, \\
e^{-k} &= \frac{12}{13}, \\
k &= \ln\!\left(\frac{13}{12}\right).
\end{aligned}
$$

El café alcanza $150\,^\circ\text{F}$ cuando $T(t)=150$. Al sustituir en la solución particular,

$$
\begin{aligned}
150 &= 70+130e^{-kt}, \\
80 &= 130e^{-kt}, \\
e^{-kt} &= \frac{8}{13}.
\end{aligned}
$$

Al tomar logaritmos y usar $k=\ln(13/12)$,

$$
-kt=\ln\!\left(\frac{8}{13}\right) \quad\Longrightarrow\quad t=\frac{\ln(13/8)}{\ln(13/12)}\approx 6.07\text{ min}.
$$

Por tanto, el café alcanza $150\,^\circ\text{F}$ aproximadamente $6$ minutos y $4$ segundos después de servirse.

## Observaciones

La temperatura $T_m=70\,^\circ\text{F}$ es el valor de equilibrio: cuando $t\to\infty$, $T(t)\to 70$. La constante $k=\ln(13/12)\approx 0.0800\text{ min}^{-1}$ es positiva, de acuerdo con un enfriamiento.

### Método alternativo: separación de variables

La misma ecuación es separable. Separando e integrando,

$$
\int \frac{dT}{T-70}=-\int k\,dt \quad\Longrightarrow\quad \ln|T-70|=-kt+C_1,
$$

de donde $T(t)=70+C_2e^{-kt}$, equivalente a la solución obtenida.
