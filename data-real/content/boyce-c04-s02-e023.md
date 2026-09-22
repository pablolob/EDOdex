
## Enunciado

En cada uno de los problemas 23 a 26, halle la solución del problema con valor inicial dado.

23. $y''' + y' = 0; \quad y(0) = 0, \quad y'(0) = 1, \quad y''(0) = 2$

## Solución

La solución del problema con valor inicial es

$$
y(x)=2-2\cos x+\sin x,
$$

válida para todo $x\in\mathbb{R}$.

## Resolución

La ecuación

$$
y'''+y'=0
$$

es **lineal homogénea de tercer orden con coeficientes constantes**. Se propone $y=e^{rx}$, con $y'=re^{rx}$, $y''=r^2e^{rx}$ y $y'''=r^3e^{rx}$. Al sustituir,

$$
e^{rx}\left(r^3+r\right)=0.
$$

Como $e^{rx}\ne 0$, se obtiene la **ecuación característica**

$$
r^3+r=r\left(r^2+1\right)=0.
$$

Sus raíces son $r_1=0$ y el par complejo conjugado $r_{2,3}=\pm i$, todas simples. La raíz real $r=0$ aporta la solución constante; el par $\lambda\pm i\mu$ con $\lambda=0$ y $\mu=1$ aporta $\cos x$ y $\sin x$. La solución general es

$$
y(x)=C_1+C_2\cos x+C_3\sin x.
$$

Las condiciones iniciales fijan las tres constantes. Al evaluar en $x=0$,

$$
y(0)=C_1+C_2=0.
$$

Las derivadas sucesivas son

$$
\begin{aligned}
y'(x)&=-C_2\sin x+C_3\cos x, \\
y''(x)&=-C_2\cos x-C_3\sin x.
\end{aligned}
$$

De $y'(0)=1$ resulta $C_3=1$. De $y''(0)=2$ resulta $-C_2=2$, es decir $C_2=-2$. Finalmente, $C_1=-C_2=2$. Al sustituir,

$$
y(x)=2-2\cos x+\sin x.
$$

Comprobación directa: $y'=2\sin x+\cos x$, $y''=2\cos x-\sin x$ y $y'''=-2\sin x-\cos x$, de modo que $y'''+y'=0$. Además, $y(0)=2-2=0$, $y'(0)=1$ y $y''(0)=2$.

## Observaciones

La raíz $r=0$ produce el término constante y el par $\pm i$ la parte oscilatoria, de modo que la solución es acotada y periódica en todo $\mathbb{R}$.

La ecuación es lineal homogénea de tercer orden; su solución general contiene tres constantes arbitrarias y no presenta soluciones singulares ni perdidas.
