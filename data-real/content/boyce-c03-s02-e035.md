
## Enunciado

En cada uno de los problemas 33 a 35, aplique el resultado del problema 32 para hallar la adjunta de la ecuación diferencial dada.

35. $y'' - xy = 0, \quad \text{Ecuación de Airy}$

## Solución

La ecuación adjunta de la ecuación de Airy es

$$
\mu'' - x\mu = 0.
$$

Coincide con la ecuación original, de modo que la ecuación de Airy es **autoadjunta**.

## Resolución

El problema 32 establece que, si la ecuación lineal homogénea de segundo orden se escribe como

$$
P(x)y'' + Q(x)y' + R(x)y = 0,
$$

su adjunta es la ecuación que satisface el factor integrante $\mu(x)$,

$$
P\mu'' + (2P' - Q)\mu' + (P'' - Q' + R)\mu = 0.
$$

La ecuación de Airy,

$$
y'' - xy = 0,
$$

tiene los coeficientes

$$
P(x) = 1, \qquad Q(x) = 0, \qquad R(x) = -x.
$$

Sus derivadas son

$$
P'(x) = 0, \qquad P''(x) = 0, \qquad Q'(x) = 0.
$$

Se calculan los tres coeficientes de la adjunta:

$$
\begin{aligned}
P &= 1, \\
2P' - Q &= 2(0) - 0 = 0, \\
P'' - Q' + R &= 0 - 0 - x = -x.
\end{aligned}
$$

Al sustituirlos en la fórmula del problema 32 se obtiene

$$
\mu'' + 0\cdot\mu' - x\mu = 0,
$$

es decir,

$$
\mu'' - x\mu = 0.
$$

## Observaciones

La adjunta coincide con la ecuación original salvo por el nombre de la incógnita. La ecuación de Airy es, por tanto, **autoadjunta**.

Una ecuación $P y'' + Q y' + R y = 0$ es autoadjunta cuando su adjunta reproduce la ecuación original, lo que ocurre si $Q = P'$.
