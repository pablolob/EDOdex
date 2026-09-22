
## Enunciado

En cada uno de los problemas 1 a 4, halle la solución general de la ecuación diferencial dada.

$$y' + (\tan x)y = x \sin 2x, \quad -\frac{\pi}{2} < x < \frac{\pi}{2}$$

## Solución

La ecuación es **lineal de primer orden**. Su solución general, válida en $-\pi/2 < x < \pi/2$, es

$$
y = C\cos x + \sin 2x - 2x\cos^2 x.
$$

## Resolución

La ecuación dada,

$$
y' + (\tan x)\,y = x\sin 2x,
$$

es lineal de primer orden y ya está escrita en la forma estándar $y' + P(x)y = f(x)$, con $P(x) = \tan x$ y $f(x) = x\sin 2x$.

El **factor integrante** es

$$
\mu(x) = \exp\!\left(\int \tan x\,dx\right) = \exp\!\left(-\ln|\cos x|\right) = \sec x,
$$

porque en el intervalo $-\pi/2 < x < \pi/2$ se cumple $\cos x > 0$ y, por tanto, $|\cos x| = \cos x$.

Al multiplicar la ecuación por $\mu(x) = \sec x$, resulta

$$
(\sec x)\,y' + (\sec x\tan x)\,y = x\sin 2x\,\sec x.
$$

El miembro izquierdo es la derivada del producto $y\sec x$. En el miembro derecho se emplea la identidad $\sin 2x = 2\sin x\cos x$:

$$
\frac{d}{dx}\!\left(y\sec x\right) = x\,\frac{2\sin x\cos x}{\cos x} = 2x\sin x.
$$

Se aplica **integración por partes** con $u = 2x$ y $dv = \sin x\,dx$:

$$
\int 2x\sin x\,dx = -2x\cos x + \int 2\cos x\,dx = -2x\cos x + 2\sin x + C.
$$

Por tanto,

$$
y\sec x = -2x\cos x + 2\sin x + C,
$$

y, al multiplicar por $\cos x$,

$$
y = -2x\cos^2 x + 2\sin x\cos x + C\cos x = C\cos x + \sin 2x - 2x\cos^2 x.
$$

Los coeficientes $P(x) = \tan x$ y $f(x) = x\sin 2x$ son continuos en $-\pi/2 < x < \pi/2$; el intervalo de validez de la solución general es $(-\pi/2, \pi/2)$.

## Observaciones

El término $C\cos x$ es la solución de la ecuación homogénea asociada $y' + (\tan x)y = 0$, y el término $\sin 2x - 2x\cos^2 x$ es una solución particular de la ecuación no homogénea.

La restricción $-\pi/2 < x < \pi/2$ es necesaria: en $x = \pm\pi/2$ el coeficiente $\tan x$ no está definido. La constante $C$ es arbitraria y se determina con una condición inicial.
