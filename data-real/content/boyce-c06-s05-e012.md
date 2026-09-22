
## Enunciado

En cada uno de los problemas 12 a 19 exprese la solución del problema con valor inicial dado en términos de una integral de convolución.

12. $y'' + \omega^2 y = g(t); \quad y(0) = 0, \ y'(0) = 1$

## Solución

$$
y(t)=\frac{1}{\omega}\int_0^t \sin\!\bigl(\omega(t-\tau)\bigr)\,g(\tau)\,d\tau+\frac{1}{\omega}\sin(\omega t).
$$

## Resolución

Se aplica la **transformada de Laplace** a la ecuación. Con $Y(s)=\mathcal{L}\{y(t)\}$ y $G(s)=\mathcal{L}\{g(t)\}$,

$$
s^2Y(s)-s\,y(0)-y'(0)+\omega^2Y(s)=G(s).
$$

Al sustituir $y(0)=0$ y $y'(0)=1$ se obtiene

$$
(s^2+\omega^2)Y(s)=G(s)+1,
$$

de modo que

$$
Y(s)=\frac{G(s)}{s^2+\omega^2}+\frac{1}{s^2+\omega^2}.
$$

El primer sumando es el producto $G(s)\cdot\dfrac{1}{s^2+\omega^2}$. Con el par básico

$$
\mathcal{L}^{-1}\!\left\{\frac{1}{s^2+\omega^2}\right\}=\frac{1}{\omega}\sin(\omega t),
$$

el **teorema de convolución** da

$$
\mathcal{L}^{-1}\!\left\{\frac{G(s)}{s^2+\omega^2}\right\}
=\int_0^t \frac{1}{\omega}\sin\!\bigl(\omega(t-\tau)\bigr)\,g(\tau)\,d\tau .
$$

El segundo sumando no es un producto, sino la contribución directa de la condición inicial $y'(0)=1$, y su inversa es $\dfrac{1}{\omega}\sin(\omega t)$.

Al sumar ambas contribuciones resulta

$$
y(t)=\frac{1}{\omega}\int_0^t \sin\!\bigl(\omega(t-\tau)\bigr)\,g(\tau)\,d\tau+\frac{1}{\omega}\sin(\omega t).
$$

## Observaciones

El resultado es válido para $t\ge 0$ y $\omega\ne 0$. La integral es la respuesta forzada por $g(t)$; el término $\frac{1}{\omega}\sin(\omega t)$ es la respuesta libre asociada a $y'(0)=1$. La expresión satisface $y(0)=0$ y $y'(0)=1$.
