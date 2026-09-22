
## Enunciado

En cada uno de los problemas 1 a 4, determine $\phi''(x_0)$, $\phi'''(x_0)$ y $\phi^{\text{iv}}(x_0)$ para el punto $x_0$ dado si $y = \phi(x)$ es una solución del problema con valor inicial que se da.

1. $y'' + xy' + y = 0; \quad y(0) = 1, \quad y'(0) = 0$

## Solución

$$
\phi''(0)=-1,\qquad \phi'''(0)=0,\qquad \phi^{\text{iv}}(0)=3.
$$

## Resolución

La función $y=\phi(x)$ satisface la ecuación en un intervalo que contiene a $x_0=0$. Los coeficientes son polinomios, continuos en todo $\mathbb{R}$; como la ecuación es lineal de segundo orden, la solución está definida para todo $x$ real. Los valores pedidos se obtienen derivando la ecuación sucesivamente y evaluando en $x_0=0$ con los datos iniciales.

Al despejar $y''$ de la ecuación y evaluar en $x=0$,

$$
y''(0) = -0\cdot y'(0) - y(0) = -1.
$$

Se deriva la ecuación miembro a miembro. Con la **regla del producto**,

$$
y''' + \left(y' + xy''\right) + y' = 0
\quad\Longrightarrow\quad
y''' + 2y' + xy'' = 0.
$$

Al evaluar en $x=0$ y usar $y'(0)=0$ y $y''(0)=-1$,

$$
y'''(0) + 2(0) + 0\cdot(-1) = 0
\quad\Longrightarrow\quad
y'''(0)=0.
$$

Se deriva una vez más:

$$
y^{\text{iv}} + 2y'' + \left(y'' + xy'''\right) = 0
\quad\Longrightarrow\quad
y^{\text{iv}} + 3y'' + xy''' = 0.
$$

Al evaluar en $x=0$,

$$
y^{\text{iv}}(0) + 3(-1) + 0 = 0
\quad\Longrightarrow\quad
y^{\text{iv}}(0)=3.
$$

Como $y=\phi(x)$, los valores pedidos son

$$
\phi''(0)=-1,\qquad \phi'''(0)=0,\qquad \phi^{\text{iv}}(0)=3.
$$

## Observaciones

Los valores obtenidos son los coeficientes de Taylor de la solución en torno a $x_0=0$:

$$
\phi(x)=1-\frac{x^2}{2}+\frac{x^4}{8}+\cdots,
$$

pues $\phi''(0)/2!=-1/2$ y $\phi^{\text{iv}}(0)/4!=3/24=1/8$. El punto $x_0=0$ es un punto ordinario de la ecuación; como los coeficientes son polinomios, la serie converge para todo $x$.

### Método alternativo: reducción a una ecuación de primer orden

La ecuación también se escribe como

$$
\frac{d}{dx}\left(y'+xy\right)=y''+xy'+y=0,
$$

de modo que $y'+xy=C$. Con $y(0)=1$ y $y'(0)=0$ resulta $C=0$, y la ecuación $y'=-xy$ es separable, con solución $y=e^{-x^2/2}$. Derivar esta expresión en $x=0$ confirma $\phi''(0)=-1$, $\phi'''(0)=0$ y $\phi^{\text{iv}}(0)=3$.
