
## Enunciado

En cada uno de los problemas 11 a 23 aplique la transformada de Laplace para resolver el problema con valor inicial dado.

13. $y'' - 2y' + 2y = 0; \quad y(0) = 0, \quad y'(0) = 1$

## Solución

La solución del problema con valor inicial es

$$
y(t) = e^{t}\sin t, \qquad t \ge 0.
$$

## Resolución

Se aplica la **transformada de Laplace** a ambos miembros de la ecuación. Sea $Y(s)=\mathcal{L}\{y(t)\}$. Con las condiciones iniciales $y(0)=0$ y $y'(0)=1$, las transformadas de las derivadas son

$$
\mathcal{L}\{y'\} = sY(s)-y(0) = sY(s), \qquad
\mathcal{L}\{y''\} = s^{2}Y(s)-s\,y(0)-y'(0) = s^{2}Y(s)-1.
$$

Al transformar la ecuación diferencial resulta

$$
s^{2}Y(s)-1-2sY(s)+2Y(s)=0.
$$

Se agrupan los términos con $Y(s)$ y se despeja:

$$
(s^{2}-2s+2)\,Y(s)=1, \qquad Y(s)=\frac{1}{s^{2}-2s+2}.
$$

El denominador se escribe en forma canónica al **completar el cuadrado**:

$$
s^{2}-2s+2=(s-1)^{2}+1=(s-1)^{2}+1^{2}.
$$

Por tanto,

$$
Y(s)=\frac{1}{(s-1)^{2}+1^{2}}.
$$

Se emplea el par de la tabla

$$
\mathcal{L}\{e^{at}\sin bt\}=\frac{b}{(s-a)^{2}+b^{2}},
$$

con $a=1$ y $b=1$. La **transformada inversa** es entonces

$$
y(t)=\mathcal{L}^{-1}\{Y(s)\}=e^{t}\sin t.
$$

Comprobación: $y(0)=0$ y $y'(t)=e^{t}(\sin t+\cos t)$, de modo que $y'(0)=1$. Además, $y''(t)=2e^{t}\cos t$ y

$$
y''-2y'+2y = 2e^{t}\cos t-2e^{t}(\sin t+\cos t)+2e^{t}\sin t = 0.
$$

## Observaciones

El denominador tiene raíces $s=1\pm i$. La parte real $1$ origina el factor exponencial $e^{t}$ y la parte imaginaria $1$ fija la frecuencia angular de la oscilación. La solución está definida para todo $t\ge 0$.
