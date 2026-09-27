
## Enunciado

En los problemas 13 y 14, encuentre el wronskiano de soluciones de la ecuación diferencial dada sin resolver ésta

14. $(\cos x)y'' + (\sin x)y' - xy = 0$

## Solución

La ecuación es **lineal de segundo orden** y homogénea. El wronskiano de dos soluciones cualesquiera es

$$
W(x) = c\cos x,
$$

donde $c$ es una constante arbitraria.

## Resolución

Primero se escribe la ecuación en la forma estándar. Al dividir por $\cos x$,

$$
y'' + \tan x\,y' - \frac{x}{\cos x}\,y = 0.
$$

Aquí $p(x) = \tan x$. Para una ecuación lineal homogénea de segundo orden $y'' + p(x)y' + q(x)y = 0$, la **identidad de Abel** establece que el wronskiano de dos soluciones satisface

$$
W' + p(x)W = 0.
$$

Por tanto,

$$
W' = -\tan x\,W.
$$

Esta es una ecuación separable para $W$. Al separar las variables,

$$
\frac{W'}{W} = -\tan x.
$$

Integrando respecto de $x$,

$$
\ln|W| = -\int \tan x\,dx = \ln|\cos x| + c_0,
$$

donde $c_0$ es una constante. Al exponenciar,

$$
|W| = e^{c_0}|\cos x|.
$$

El signo se absorbe en la constante arbitraria, de modo que

$$
W(x) = c\cos x.
$$

El procedimiento es válido en cualquier intervalo donde $p(x) = \tan x$ sea continua y $\cos x$ no se anule, es decir, en intervalos que no contengan los puntos $x = \pi/2 + k\pi$, con $k$ entero. En tales intervalos el wronskiano es idénticamente nulo o nunca se anula; en consecuencia, $c \ne 0$ corresponde a un par fundamental de soluciones.

## Observaciones

La **identidad de Abel** permite obtener el wronskiano sin conocer las soluciones. Como $W$ es un múltiplo constante de $\cos x$, solo se anula donde $\cos x = 0$, fuera de los intervalos de validez. El valor absoluto y el signo de $\cos x$ quedan recogidos en la constante $c$.
