
## Enunciado

En cada uno de los problemas 12 a 19 exprese la solución del problema con valor inicial dado en términos de una integral de convolución.

14. $4y'' + 4y' + 17y = g(t); \quad y(0) = 0, \ y'(0) = 0$

## Solución

$$
y(t)=\frac{1}{8}\int_0^t e^{-(t-\tau)/2}\,\sin\!\bigl(2(t-\tau)\bigr)\,g(\tau)\,d\tau .
$$

## Resolución

Se aplica la **transformada de Laplace** al problema de valor inicial. Con $Y(s)=\mathcal{L}\{y\}$ y $G(s)=\mathcal{L}\{g\}$, y las condiciones iniciales nulas,

$$
\mathcal{L}\{y'\}=sY(s),\qquad \mathcal{L}\{y''\}=s^2Y(s).
$$

La ecuación se transforma en

$$
4s^2Y(s)+4sY(s)+17Y(s)=G(s),
$$

es decir,

$$
\left(4s^2+4s+17\right)Y(s)=G(s).
$$

Al despejar,

$$
Y(s)=\frac{1}{4s^2+4s+17}\,G(s)=H(s)G(s).
$$

El primer factor se escribe completando el cuadrado:

$$
4s^2+4s+17=4\left[\left(s+\tfrac{1}{2}\right)^2+4\right],
$$

de modo que

$$
H(s)=\frac{1}{4}\cdot\frac{1}{\left(s+\frac{1}{2}\right)^2+4}.
$$

Con el par básico $\mathcal{L}^{-1}\!\left\{\dfrac{1}{s^2+4}\right\}=\dfrac{1}{2}\sin 2t$, el **primer teorema de traslación** da

$$
h(t)=\mathcal{L}^{-1}\{H(s)\}
=\frac{1}{4}\cdot\frac{1}{2}e^{-t/2}\sin 2t
=\frac{1}{8}e^{-t/2}\sin 2t .
$$

Por el **teorema de convolución**, $\mathcal{L}^{-1}\{H G\}=(h*g)(t)$, por lo que

$$
y(t)=\int_0^t h(t-\tau)g(\tau)\,d\tau
=\frac{1}{8}\int_0^t e^{-(t-\tau)/2}\sin\!\bigl(2(t-\tau)\bigr)g(\tau)\,d\tau .
$$

La ecuación es lineal con coeficientes constantes y las condiciones iniciales son nulas; por tanto, esta integral es la solución completa del problema.

## Observaciones

La función $h(t)=\frac{1}{8}e^{-t/2}\sin 2t$ es la respuesta al impulso del sistema: satisface $4h''+4h'+17h=0$ con $h(0)=0$ y $h'(0)=\frac{1}{4}$. La solución es la convolución de esa respuesta con la excitación $g(t)$.

Las raíces de la ecuación característica $4r^2+4r+17=0$ son $r=-\frac{1}{2}\pm 2i$, de modo que la respuesta al impulso es una oscilación amortiguada.
