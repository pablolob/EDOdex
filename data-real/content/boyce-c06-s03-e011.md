
## Enunciado

En cada uno de los problemas 1 a 13, encuentre la solución del problema con valor inicial dado.

11. $y'' + 4y = u_\pi(t) - u_{2\pi}(t); \quad y(0) = 1, \ y'(0) = 0$

## Solución

$$
y(t)=\cos 2t+\bigl[u_\pi(t)-u_{2\pi}(t)\bigr]\frac{1-\cos 2t}{4}
=
\begin{cases}
\cos 2t, & 0\le t<\pi,\\[6pt]
\dfrac14+\dfrac34\cos 2t, & \pi\le t<2\pi,\\[10pt]
\cos 2t, & t\ge 2\pi.
\end{cases}
$$

## Resolución

Se aplica la **transformada de Laplace**. Sea $Y(s)=\mathcal{L}\{y(t)\}$. Con $y(0)=1$ y $y'(0)=0$,

$$
\mathcal{L}\{y''\}=s^2Y(s)-s\,y(0)-y'(0)=s^2Y(s)-s,
\qquad
\mathcal{L}\{4y\}=4Y(s).
$$

Por el **segundo teorema de traslación**, o directamente de la tabla,

$$
\mathcal{L}\{u_\pi(t)-u_{2\pi}(t)\}=\frac{e^{-\pi s}-e^{-2\pi s}}{s}.
$$

La ecuación transformada es

$$
(s^2+4)Y(s)=s+\frac{e^{-\pi s}-e^{-2\pi s}}{s},
$$

de donde

$$
Y(s)=\frac{s}{s^2+4}+\frac{e^{-\pi s}-e^{-2\pi s}}{s(s^2+4)}.
$$

El primer término se invierte de forma directa: $\mathcal{L}^{-1}\{s/(s^2+4)\}=\cos 2t$. Para el segundo se descompone en **fracciones parciales**:

$$
\frac{1}{s(s^2+4)}=\frac{1}{4s}-\frac{s}{4(s^2+4)}.
$$

Con $\mathcal{L}^{-1}\{1/s\}=1$ y $\mathcal{L}^{-1}\{s/(s^2+4)\}=\cos 2t$,

$$
g(t)=\mathcal{L}^{-1}\!\left\{\frac{1}{s(s^2+4)}\right\}=\frac{1-\cos 2t}{4}.
$$

El segundo teorema de traslación aplicado a cada factor exponencial da

$$
y(t)=\cos 2t+u_\pi(t)\,g(t-\pi)-u_{2\pi}(t)\,g(t-2\pi).
$$

Como $\cos(2(t-\pi))=\cos(2t-2\pi)=\cos 2t$ y $\cos(2(t-2\pi))=\cos(2t-4\pi)=\cos 2t$, resulta $g(t-\pi)=g(t-2\pi)=\dfrac{1-\cos 2t}{4}$. Por tanto,

$$
y(t)=\cos 2t+\bigl[u_\pi(t)-u_{2\pi}(t)\bigr]\frac{1-\cos 2t}{4}.
$$

Al evaluar según el valor del escalón se obtiene la expresión por tramos:

$$
y(t)=
\begin{cases}
\cos 2t, & 0\le t<\pi,\\[6pt]
\dfrac14+\dfrac34\cos 2t, & \pi\le t<2\pi,\\[10pt]
\cos 2t, & t\ge 2\pi.
\end{cases}
$$

Las condiciones iniciales se satisfacen: $y(0)=\cos 0=1$ y $y'(0)=-2\sin 0=0$. En $t=\pi$ las dos ramas valen $1$ y sus derivadas $0$, de modo que $y$ y $y'$ son continuas; la segunda derivada salta en $1$, igual que el salto de la forzante. Lo mismo ocurre en $t=2\pi$, con salto $-1$.

## Observaciones

La forzante es un pulso rectangular de altura $1$ sobre $[\pi,2\pi)$ y nula fuera de ese intervalo. El sistema es un oscilador armónico sin amortiguamiento de frecuencia $2$.

La solución es de clase $C^1$: $y'$ es continua en $t=\pi$ y en $t=2\pi$. La discontinuidad de la forzante se manifiesta en $y''$, que salta en $\pm 1$ en los extremos del pulso, pues $y''=f-4y$.

Para $t\ge 2\pi$ la forzante se anula y la solución vuelve a ser $\cos 2t$, la misma oscilación libre de $[0,\pi)$. El pulso no deja efecto neto porque $g$ tiene periodo $\pi$ y los dos desplazamientos $g(t-\pi)$ y $g(t-2\pi)$ se cancelan.

### Método alternativo: resolución por tramos

En $0\le t<\pi$ la ecuación es $y''+4y=0$; con $y(0)=1$ y $y'(0)=0$ resulta $y=\cos 2t$. En $\pi\le t<2\pi$ la ecuación es $y''+4y=1$, con solución general $y=\dfrac14+C_1\cos 2t+C_2\sin 2t$; imponer $y(\pi)=1$ y $y'(\pi)=0$ conduce a $C_1=\dfrac34$ y $C_2=0$. En $t\ge 2\pi$ la ecuación vuelve a ser homogénea; imponer $y(2\pi)=1$ y $y'(2\pi)=0$ reproduce $y=\cos 2t$.
