
## Enunciado

En cada uno de los problemas 12 a 19 exprese la solución del problema con valor inicial dado en términos de una integral de convolución.

18. $y^{iv} - y = g(t); \quad y(0) = 0, \ y'(0) = 0, \ y''(0) = 0, \ y'''(0) = 0$

## Solución

La solución del problema con valor inicial, expresada mediante una integral de convolución, es

$$
y(t)=\frac{1}{2}\int_0^t\left[\sinh(t-\tau)-\sin(t-\tau)\right]g(\tau)\,d\tau,\qquad t\ge 0.
$$

## Resolución

Se aplica la **transformada de Laplace**. Sean $Y(s)=\mathcal{L}\{y(t)\}$ y $G(s)=\mathcal{L}\{g(t)\}$. Como las cuatro condiciones iniciales son nulas, la transformada de la derivada cuarta es $\mathcal{L}\{y^{iv}\}=s^4Y(s)$. Al transformar la ecuación resulta

$$
s^4Y(s)-Y(s)=G(s),
$$

de donde

$$
Y(s)=\frac{G(s)}{s^4-1}.
$$

El denominador se factoriza con la diferencia de cuadrados, $s^4-1=(s^2-1)(s^2+1)$, y se descompone en fracciones simples:

$$
\frac{1}{s^4-1}=\frac{1}{(s^2-1)(s^2+1)}
=\frac{1}{2}\left(\frac{1}{s^2-1}-\frac{1}{s^2+1}\right).
$$

Con los pares $\mathcal{L}^{-1}\{1/(s^2-1)\}=\sinh t$ y $\mathcal{L}^{-1}\{1/(s^2+1)\}=\sin t$, la transformada inversa de este factor es

$$
h(t)=\mathcal{L}^{-1}\!\left\{\frac{1}{s^4-1}\right\}
=\frac{1}{2}\left(\sinh t-\sin t\right).
$$

Por el **teorema de convolución**, $\mathcal{L}^{-1}\{G(s)H(s)\}=(h*g)(t)$, de modo que

$$
y(t)=\int_0^t h(t-\tau)g(\tau)\,d\tau
=\frac{1}{2}\int_0^t\left[\sinh(t-\tau)-\sin(t-\tau)\right]g(\tau)\,d\tau .
$$

## Observaciones

La función $h(t)=\frac{1}{2}(\sinh t-\sin t)$ es la respuesta al impulso del operador $y^{iv}-y$. Como las cuatro condiciones iniciales son nulas, la respuesta libre se anula y la solución coincide con la respuesta forzada. La expresión es válida para todo $t\ge 0$ y para toda $g$ continua en $[0,\infty)$.

### Método alternativo: función de Green

El mismo resultado se obtiene con la función de Green del operador para condiciones iniciales nulas. La función $h$ resuelve $h^{iv}-h=0$ con $h(0)=h'(0)=h''(0)=0$ y $h'''(0)=1$; al integrar esta ecuación de cuarto orden se recupera $h(t)=\frac{1}{2}(\sinh t-\sin t)$, y la solución es $y(t)=\int_0^t h(t-\tau)g(\tau)\,d\tau$.
