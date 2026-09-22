
## Enunciado

$dy/dt = (\Gamma \cos t + T)y - y^3$, en donde $\Gamma$ y $T$ son constantes. Esta ecuación también se presenta en el estudio de la estabilidad del flujo de fluidos.

## Solución

La ecuación es de **primer orden**, **no lineal** y de **Bernoulli** con $n = 3$. Su solución general es

$$
y(t) = \pm \frac{e^{\Gamma\sin t + Tt}}{\sqrt{C + 2\displaystyle\int_{0}^{t} e^{2(\Gamma\sin s + Ts)}\,ds}},
$$

con $C$ constante arbitraria, junto con la solución singular $y \equiv 0$.

## Resolución

La ecuación se escribe en la forma de Bernoulli $y' + p(t)y = q(t)y^n$:

$$
y' - (\Gamma\cos t + T)y = -y^3,
$$

con $p(t) = -(\Gamma\cos t + T)$, $q(t) = -1$ y $n = 3$. Como $n \ne 0, 1$, la **sustitución de Bernoulli** $v = y^{1-n} = y^{-2}$ la reduce a una ecuación lineal. Derivando la sustitución,

$$
v' = -2y^{-3}y'.
$$

Al dividir la ecuación entre $y^3$ para $y \ne 0$,

$$
y^{-3}y' = (\Gamma\cos t + T)y^{-2} - 1.
$$

Multiplicando por $-2$ y sustituyendo $v$ y $v'$ resulta una ecuación lineal en $v$:

$$
v' = -2(\Gamma\cos t + T)v + 2, \qquad v' + 2(\Gamma\cos t + T)v = 2.
$$

El **factor integrante** es

$$
\mu(t) = \exp\!\left(2\int (\Gamma\cos t + T)\,dt\right) = e^{2\Gamma\sin t + 2Tt}.
$$

Al multiplicar la ecuación por $\mu(t)$, el miembro izquierdo es la derivada de un producto:

$$
\frac{d}{dt}\!\left[e^{2\Gamma\sin t + 2Tt}v\right] = 2e^{2\Gamma\sin t + 2Tt}.
$$

Integrando desde $0$ hasta $t$,

$$
e^{2\Gamma\sin t + 2Tt}v = C + 2\int_{0}^{t} e^{2(\Gamma\sin s + Ts)}\,ds.
$$

Se despeja $v$ y, como $v = y^{-2}$, se tiene $y = \pm v^{-1/2}$:

$$
y(t) = \pm \frac{e^{\Gamma\sin t + Tt}}{\sqrt{C + 2\displaystyle\int_{0}^{t} e^{2(\Gamma\sin s + Ts)}\,ds}}.
$$

La solución constante $y \equiv 0$ se descartó al dividir entre $y^3$. Satisface la ecuación y no se recupera para ningún valor finito de $C$, por lo que es una solución singular.

El integrando es estrictamente positivo, de modo que el radicando es estrictamente creciente en $t$. La solución es válida en el mayor intervalo en el que el radicando es positivo; si este nunca se anula, es válida en todo $\mathbb{R}$.

## Observaciones

La primitiva $\int e^{2(\Gamma\sin s + Ts)}\,ds$ no es elemental en general, por lo que la solución general se deja en forma integral. Es el mismo tratamiento que la sección 2.2 da a las ecuaciones lineales cuyo integrando no admite primitiva elemental.

En el modelo de estabilidad del flujo de fluidos, el término $(\Gamma\cos t + T)y$ actúa como forzamiento periódico y el término $-y^3$ limita el crecimiento de las soluciones.
