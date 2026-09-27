
## Enunciado

Considere el problema con valores en la frontera
$$y'' + \lambda y = 0, \quad y(0) = y(2\pi), \quad y'(0) = y'(2\pi).$$
Demuestre que excepto para el caso $\lambda = 0$, hay dos funciones propias independientes que corresponden a cada eigenvalor.

## Solución

El valor propio $\lambda = 0$ tiene una única función propia independiente, la constante. Para cada $\lambda_n = n^2$, con $n = 1, 2, 3, \dots$, existen dos funciones propias linealmente independientes:

$$y_1(x) = \cos(nx), \qquad y_2(x) = \sin(nx).$$

No hay valores propios negativos.

## Resolución

La ecuación $y'' + \lambda y = 0$ es lineal homogénea de segundo orden con coeficientes constantes. Las condiciones de frontera son periódicas: relacionan $y$ y $y'$ en los extremos del intervalo $[0, 2\pi]$. La forma de la solución general depende del signo de $\lambda$, por lo que se analizan los tres casos.

**Caso $\lambda = 0$.** La ecuación se reduce a $y'' = 0$, cuya solución general es

$$y(x) = c_1 x + c_2.$$

De $y(0) = y(2\pi)$ se obtiene $c_2 = 2\pi c_1 + c_2$, luego $c_1 = 0$. La segunda condición se cumple porque $y' = c_1 = 0$. Por tanto $y(x) = c_2$, de modo que $\lambda = 0$ es un valor propio con una sola función propia independiente, la constante.

**Caso $\lambda < 0$.** Se escribe $\lambda = -k^2$ con $k > 0$. La solución general es

$$y(x) = c_1 e^{kx} + c_2 e^{-kx}.$$

Al imponer las condiciones de frontera resultan

$$
\begin{aligned}
c_1 (1 - e^{2\pi k}) + c_2 (1 - e^{-2\pi k}) &= 0, \\
c_1 (1 - e^{2\pi k}) - c_2 (1 - e^{-2\pi k}) &= 0.
\end{aligned}
$$

Al sumar y restar ambas ecuaciones se obtiene

$$c_1 (1 - e^{2\pi k}) = 0, \qquad c_2 (1 - e^{-2\pi k}) = 0.$$

Como $k > 0$, se tiene $e^{2\pi k} \ne 1$ y $e^{-2\pi k} \ne 1$, luego $c_1 = c_2 = 0$. El sistema solo admite la solución trivial, así que no hay valores propios negativos.

**Caso $\lambda > 0$.** Se escribe $\lambda = k^2$ con $k > 0$. La solución general es

$$y(x) = c_1 \cos(kx) + c_2 \sin(kx).$$

Las condiciones de frontera exigen

$$
\begin{aligned}
c_1 (1 - \cos 2\pi k) - c_2 \sin 2\pi k &= 0, \\
c_1 \sin 2\pi k + c_2 (1 - \cos 2\pi k) &= 0.
\end{aligned}
$$

Este sistema homogéneo admite solución no trivial si y solo si su determinante se anula:

$$(1 - \cos 2\pi k)^2 + \sin^2 2\pi k = 2(1 - \cos 2\pi k) = 0.$$

Por tanto $\cos 2\pi k = 1$, es decir, $2\pi k = 2\pi n$ con $n \in \mathbb{Z}$, o bien $k = n$. Los valores propios positivos son

$$\lambda_n = n^2, \qquad n = 1, 2, 3, \dots$$

Para estos valores se cumple $\cos 2\pi n = 1$ y $\sin 2\pi n = 0$, de modo que ambas ecuaciones se satisfacen para cualesquiera $c_1$ y $c_2$. Las funciones propias correspondientes son

$$y(x) = c_1 \cos(nx) + c_2 \sin(nx).$$

Las funciones $\cos(nx)$ y $\sin(nx)$ son linealmente independientes, pues su Wronskiano vale $n \ne 0$. Así, cada valor propio $\lambda_n = n^2$ con $n \ge 1$ tiene un espacio propio de dimensión dos.

En resumen, el único valor propio con una sola función propia es $\lambda = 0$. Para cada uno de los restantes, $\lambda_n = n^2$ con $n \ge 1$, existen dos funciones propias independientes, $\cos(nx)$ y $\sin(nx)$.

## Observaciones

El caso $\lambda = 0$ es la excepción porque las condiciones periódicas solo admiten la función constante. Para $\lambda > 0$ la periodicidad no impone una combinación concreta de $\cos(nx)$ y $\sin(nx)$; de ahí que el espacio propio tenga dimensión dos en cada valor propio positivo. Los valores propios negativos no aparecen porque las exponenciales reales $e^{\pm kx}$ no son $2\pi$-periódicas para $k > 0$.
