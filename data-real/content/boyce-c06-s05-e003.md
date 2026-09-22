
## Enunciado

Demuestre, por medio del ejemplo $f(t) = \operatorname{sen} t$, que $f * f$ no necesariamente es no negativa.

## Solución

La convolución de $f(t)=\sin t$ consigo misma es

$$
(f*f)(t)=\frac{1}{2}\left(\sin t-t\cos t\right),
$$

que toma valores negativos; en particular,

$$
(f*f)(2\pi)=-\pi<0.
$$

Por tanto, $f*f$ no necesariamente es no negativa.

## Resolución

Se parte de la definición de la integral de convolución,

$$
(f*f)(t)=\int_0^t f(t-\tau)f(\tau)\,d\tau
=\int_0^t \sin(t-\tau)\sin\tau\,d\tau .
$$

Se aplica la identidad de producto a suma $\sin A\,\sin B=\tfrac{1}{2}\left[\cos(A-B)-\cos(A+B)\right]$ con $A=t-\tau$ y $B=\tau$:

$$
\sin(t-\tau)\sin\tau=\frac{1}{2}\left[\cos(t-2\tau)-\cos t\right].
$$

Al sustituir e integrar término a término,

$$
\begin{aligned}
(f*f)(t)
&=\frac{1}{2}\int_0^t \left[\cos(t-2\tau)-\cos t\right]d\tau\\
&=\frac{1}{2}\left[-\frac{1}{2}\sin(t-2\tau)-\tau\cos t\right]_0^t\\
&=\frac{1}{2}\left(\frac{1}{2}\sin t+\frac{1}{2}\sin t-t\cos t\right)\\
&=\frac{1}{2}\left(\sin t-t\cos t\right).
\end{aligned}
$$

La expresión obtenida cambia de signo. En $t=2\pi$,

$$
(f*f)(2\pi)=\frac{1}{2}\left(\sin 2\pi-2\pi\cos 2\pi\right)
=\frac{1}{2}(0-2\pi)=-\pi<0.
$$

Como existe un valor de $t$ para el que $f*f$ es negativa, la convolución de una función consigo misma no es necesariamente no negativa.

## Observaciones

El resultado muestra que $f*f$ no conserva un signo fijo aunque el integrando sea el producto de la misma función. La convolución no es, en general, una operación que preserve la no negatividad.

### Método alternativo: teorema de convolución

Por el teorema de convolución, $\mathcal{L}\{f*f\}=F(s)^2=\dfrac{1}{(s^2+1)^2}$. Como $\mathcal{L}\{\sin t-t\cos t\}=\dfrac{2}{(s^2+1)^2}$, la transformada inversa devuelve $(f*f)(t)=\dfrac{1}{2}\left(\sin t-t\cos t\right)$, en coincidencia con el cálculo directo.
