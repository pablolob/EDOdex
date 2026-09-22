
## Enunciado

En cada uno de los problemas 12 a 19 exprese la solución del problema con valor inicial dado en términos de una integral de convolución.

19. $y^{iv} + 5y'' + 4y = g(t); \quad y(0) = 1, \ y'(0) = 0, \ y''(0) = 0, \ y'''(0) = 0$

## Solución

$$
y(t)=\frac{4}{3}\cos t-\frac{1}{3}\cos 2t+\int_0^t\left[\frac{1}{3}\sin(t-\tau)-\frac{1}{6}\sin 2(t-\tau)\right]g(\tau)\,d\tau .
$$

## Resolución

Se aplica la **transformada de Laplace** al problema con valor inicial. Sean

$$
Y(s)=\mathcal{L}\{y(t)\},\qquad G(s)=\mathcal{L}\{g(t)\}.
$$

Las transformadas de las derivadas presentes, usando $y(0)=1$ y $y'(0)=y''(0)=y'''(0)=0$, son

$$
\mathcal{L}\{y''\}=s^2Y(s)-s\,y(0)-y'(0)=s^2Y(s)-s,
$$

$$
\mathcal{L}\{y^{iv}\}=s^4Y(s)-s^3y(0)-s^2y'(0)-s\,y''(0)-y'''(0)=s^4Y(s)-s^3 .
$$

Al transformar la ecuación,

$$
s^4Y-s^3+5\bigl(s^2Y-s\bigr)+4Y=G(s),
$$

y al agrupar los términos en $Y(s)$,

$$
\bigl(s^4+5s^2+4\bigr)Y(s)=G(s)+s^3+5s .
$$

El polinomio se factoriza como

$$
s^4+5s^2+4=(s^2+1)(s^2+4),
$$

de modo que

$$
Y(s)=\frac{s^3+5s}{(s^2+1)(s^2+4)}+\frac{G(s)}{(s^2+1)(s^2+4)} .
$$

El primer término se descompone en **fracciones parciales**:

$$
\frac{s^3+5s}{(s^2+1)(s^2+4)}=\frac{4}{3}\frac{s}{s^2+1}-\frac{1}{3}\frac{s}{s^2+4} .
$$

Al invertir cada fracción se obtiene la respuesta a las condiciones iniciales,

$$
y_h(t)=\mathcal{L}^{-1}\!\left\{\frac{s^3+5s}{(s^2+1)(s^2+4)}\right\}
=\frac{4}{3}\cos t-\frac{1}{3}\cos 2t .
$$

Para el segundo término se define

$$
H(s)=\frac{1}{(s^2+1)(s^2+4)}=\frac{1}{3}\left(\frac{1}{s^2+1}-\frac{1}{s^2+4}\right),
$$

cuya transformada inversa es

$$
h(t)=\mathcal{L}^{-1}\{H(s)\}=\frac{1}{3}\sin t-\frac{1}{6}\sin 2t .
$$

Como $Y_p(s)=H(s)G(s)$, el **teorema de convolución** da

$$
y_p(t)=\mathcal{L}^{-1}\{H(s)G(s)\}=(h*g)(t)=\int_0^t h(t-\tau)g(\tau)\,d\tau .
$$

Sustituyendo $h$,

$$
y_p(t)=\int_0^t\left[\frac{1}{3}\sin(t-\tau)-\frac{1}{6}\sin 2(t-\tau)\right]g(\tau)\,d\tau .
$$

La solución del problema con valor inicial es la suma de ambas contribuciones:

$$
y(t)=\frac{4}{3}\cos t-\frac{1}{3}\cos 2t+\int_0^t\left[\frac{1}{3}\sin(t-\tau)-\frac{1}{6}\sin 2(t-\tau)\right]g(\tau)\,d\tau .
$$

## Observaciones

La función $y_h$ es la respuesta a las condiciones iniciales y resuelve la ecuación homogénea. El término de convolución es la respuesta forzada, con condiciones iniciales nulas.

La expresión es válida para $t\ge 0$ y para $g$ continua o continua a trozos en $[0,\infty)$, hipótesis bajo las cuales existe la transformada de $g$ y se cumple el teorema de convolución.
