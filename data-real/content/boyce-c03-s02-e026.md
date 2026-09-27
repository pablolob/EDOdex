
## Enunciado

En cada uno de los problemas 23 a 26, verifique que las funciones $y_1$ y $y_2$ son soluciones de la ecuación diferencial dada. ¿Constituyen un conjunto fundamental de soluciones?

26. $(1 - x \cot x)y'' - xy' + y = 0, \quad 0 < x < \pi; \quad y_1(x) = x, \quad y_2(x) = \sin x$

## Solución

Ambas funciones son soluciones de la ecuación en $0 < x < \pi$. El par $\{y_1, y_2\}$ sí constituye un **conjunto fundamental** de soluciones, porque su wronskiano

$$
W(y_1, y_2)(x) = x\cos x - \sin x
$$

no se anula en ese intervalo, por ejemplo $W(\pi/2) = -1 \neq 0$. La solución general es

$$
y(x) = C_1 x + C_2 \sin x.
$$

## Resolución

Se verifica primero que cada función satisface la ecuación diferencial.

Para $y_1(x) = x$ las derivadas son $y_1'(x) = 1$ y $y_1''(x) = 0$. Al sustituir,

$$
(1 - x\cot x)(0) - x(1) + x = -x + x = 0.
$$

Para $y_2(x) = \sin x$ las derivadas son $y_2'(x) = \cos x$ y $y_2''(x) = -\sin x$. Al sustituir y usar la identidad $\cot x\,\sin x = \cos x$,

$$
\begin{aligned}
(1 - x\cot x)(-\sin x) - x\cos x + \sin x
&= -\sin x + x\cot x\,\sin x - x\cos x + \sin x \\
&= -\sin x + x\cos x - x\cos x + \sin x \\
&= 0.
\end{aligned}
$$

Por tanto, $y_1$ y $y_2$ son soluciones de la ecuación en todo el intervalo $0 < x < \pi$.

Para decidir si forman un conjunto fundamental se calcula el **wronskiano**:

$$
\begin{aligned}
W(y_1, y_2)(x) &= y_1 y_2' - y_1' y_2 \\
&= x\cos x - (1)\sin x \\
&= x\cos x - \sin x.
\end{aligned}
$$

Las funciones $y_1$ y $y_2$ son soluciones de una ecuación lineal homogénea de segundo orden con coeficientes continuos en $0 < x < \pi$. Por el criterio del wronskiano, dos soluciones forman un conjunto fundamental si y solo si su wronskiano no se anula en algún punto del intervalo. En $x = \pi/2 \in (0, \pi)$,

$$
W(y_1, y_2)\!\left(\tfrac{\pi}{2}\right) = \frac{\pi}{2}\cos\frac{\pi}{2} - \sin\frac{\pi}{2} = -1 \neq 0.
$$

En consecuencia, $y_1$ y $y_2$ son linealmente independientes y $\{y_1, y_2\}$ es un conjunto fundamental de soluciones de la ecuación en $0 < x < \pi$.

## Observaciones

La ecuación es de **segundo orden**, **lineal** y **homogénea**. El intervalo $0 < x < \pi$ deja fuera $x = 0$ y $x = \pi$, donde $\cot x$ no está definida. Dentro de ese intervalo el coeficiente $1 - x\cot x$ no se anula, de modo que la ecuación no tiene puntos singulares.

El wronskiano también se escribe como $W = \cos x\,(x - \tan x)$. En $0 < x < \pi/2$ se tiene $\cos x > 0$ y $\tan x > x$; en $\pi/2 < x < \pi$ se tiene $\cos x < 0$ y $\tan x < 0$. En ambos casos $W < 0$, así que no se anula en ningún punto del intervalo; basta evaluarlo en uno solo para concluirlo.
