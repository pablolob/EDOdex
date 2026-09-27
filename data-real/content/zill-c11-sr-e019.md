
## Enunciado

Encuentre los eigenvalores y las eigenfunciones del problema con valores en la frontera
$$x^2 y'' + xy' + 9\lambda y = 0, \quad y'(1) = 0, \quad y(e) = 0.$$

## Solución

$$
\lambda_n = \frac{(2n-1)^2\pi^2}{36}, \qquad
y_n(x) = \cos\!\left(\frac{(2n-1)\pi}{2}\ln x\right), \qquad n = 1, 2, 3, \dots
$$

## Resolución

La ecuación es una ecuación de **Cauchy-Euler** en el intervalo $[1, e]$, donde $x > 0$. Se proponen soluciones de la forma $y = x^m$. Al sustituir,

$$
x^2 y'' + xy' + 9\lambda y
= x^m\bigl(m(m-1) + m + 9\lambda\bigr)
= x^m\bigl(m^2 + 9\lambda\bigr).
$$

Por tanto, $y = x^m$ es solución si y solo si el polinomio auxiliar se anula:

$$
m^2 + 9\lambda = 0.
$$

El signo de $\lambda$ determina la forma de la solución general.

**Caso $\lambda > 0$.** Las raíces son $m = \pm 3i\sqrt{\lambda}$ y la solución general es

$$
y(x) = C_1\cos\!\left(3\sqrt{\lambda}\,\ln x\right)
+ C_2\sin\!\left(3\sqrt{\lambda}\,\ln x\right).
$$

Su derivada resulta

$$
y'(x) = \frac{3\sqrt{\lambda}}{x}
\left[-C_1\sin\!\left(3\sqrt{\lambda}\,\ln x\right)
+ C_2\cos\!\left(3\sqrt{\lambda}\,\ln x\right)\right].
$$

Como $\ln 1 = 0$, la condición $y'(1) = 0$ da $3\sqrt{\lambda}\,C_2 = 0$; con $\lambda > 0$ se obtiene $C_2 = 0$. La solución se reduce a

$$
y(x) = C_1\cos\!\left(3\sqrt{\lambda}\,\ln x\right).
$$

La condición $y(e) = 0$ exige

$$
C_1\cos\!\left(3\sqrt{\lambda}\right) = 0.
$$

Para una solución no trivial, $C_1 \neq 0$, de modo que

$$
3\sqrt{\lambda} = \frac{(2n-1)\pi}{2}, \qquad n = 1, 2, 3, \dots
$$

De aquí surgen los eigenvalores y las eigenfunciones

$$
\lambda_n = \frac{(2n-1)^2\pi^2}{36}, \qquad
y_n(x) = \cos\!\left(\frac{(2n-1)\pi}{2}\ln x\right).
$$

**Caso $\lambda = 0$.** La ecuación se reduce a $x^2 y'' + xy' = 0$, con raíz doble $m = 0$; su solución general es $y = C_1 + C_2\ln x$. La condición $y'(1) = C_2 = 0$ deja $y = C_1$, y $y(e) = C_1 = 0$ obliga a la solución trivial. No hay eigenvalor nulo.

**Caso $\lambda < 0$.** Sea $\mu = 3\sqrt{-\lambda} > 0$, de modo que $m = \pm\mu$ y la solución general es $y = C_1 x^{\mu} + C_2 x^{-\mu}$. Su derivada es

$$
y'(x) = \mu C_1 x^{\mu-1} - \mu C_2 x^{-\mu-1},
$$

y la condición $y'(1) = \mu(C_1 - C_2) = 0$ implica $C_1 = C_2$. Entonces $y = C_1\left(x^{\mu} + x^{-\mu}\right)$, y

$$
y(e) = C_1\left(e^{\mu} + e^{-\mu}\right) = 0.
$$

Como $e^{\mu} + e^{-\mu} > 0$, se concluye $C_1 = 0$ y solo existe la solución trivial. Tampoco hay eigenvalores negativos.

En consecuencia, los eigenvalores y las eigenfunciones del problema son los del caso $\lambda > 0$.

## Observaciones

### Método alternativo: cambio de variable $t = \ln x$

El cambio $t = \ln x$ transforma la ecuación de Cauchy-Euler en una de coeficientes constantes. Con $x\frac{d}{dx} = \frac{d}{dt}$ y $x^2\frac{d^2}{dx^2} = \frac{d^2}{dt^2} - \frac{d}{dt}$, la ecuación se reduce a

$$
\ddot{y} + 9\lambda y = 0, \qquad t \in [0, 1],
$$

con condiciones $\dot{y}(0) = 0$ y $y(1) = 0$. La solución es $y = C\cos\!\left(3\sqrt{\lambda}\,t\right)$, y la condición en $t = 1$ vuelve a exigir $\cos\!\left(3\sqrt{\lambda}\right) = 0$, lo que conduce a los mismos eigenvalores y eigenfunciones. El punto $x = 0$, donde el coeficiente de $y''$ se anula, queda fuera del intervalo $[1, e]$; en este intervalo el problema es regular.
