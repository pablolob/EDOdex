
## Enunciado

En cada uno de los problemas 17 a 20, determine (sin resolver el problema) un intervalo en el que se tenga la certeza de que la solución del problema con valor inicial dado existe.

20. $(\ln x)y' + y = \cot x, \quad y(2) = 3$

## Solución

La ecuación es **lineal de primer orden**. El teorema de existencia y unicidad garantiza que el problema con valor inicial tiene una solución única en el mayor intervalo que contiene a $x_0=2$ y en el que los coeficientes de la ecuación en forma normal son continuos:

$$
(1,\pi).
$$

En los extremos $x=1$ y $x=\pi$ los coeficientes dejan de ser continuos; la ecuación en forma normal no está definida allí.

## Resolución

La ecuación se escribe en la forma normal $y'+p(x)y=g(x)$. Como $\ln x\ne 0$ para $x>0$ con $x\ne 1$, se divide entre $\ln x$:

$$
y' + \frac{1}{\ln x}\,y = \frac{\cot x}{\ln x}.
$$

Así, $p(x)=1/\ln x$ y $g(x)=\cot x/\ln x$. El teorema de existencia y unicidad para ecuaciones lineales de primer orden asegura que el problema con valor inicial tiene una solución única en todo intervalo abierto que contenga a $x_0=2$ y en el que $p$ y $g$ sean continuas.

Se determinan los intervalos de continuidad de cada coeficiente.

- $p(x)=1/\ln x$ es continua en $(0,1)$ y en $(1,\infty)$; no está definida en $x=1$ ni para $x\le 0$.
- $g(x)=\cot x/\ln x$ es continua donde $\ln x\ne 0$ y $\sin x\ne 0$, es decir, en los intervalos que no contienen a $x=1$ ni a los múltiplos enteros de $\pi$.

Como $x_0=2$ verifica $1<2<\pi$, el mayor intervalo que contiene a $x_0$ y en el que ambos coeficientes son continuos es la intersección de $(1,\infty)$ con $(0,\pi)$:

$$
(1,\pi).
$$

Por tanto, la solución del problema con valor inicial existe y es única en $(1,\pi)$.

## Observaciones

El intervalo $(1,\pi)$ es el mayor que contiene a $x_0=2$ con $p$ y $g$ continuas. Sus extremos son las primeras discontinuidades de los coeficientes a cada lado de $x_0$, a saber, $x=1$ (donde $\ln x=0$) y $x=\pi$ (donde $\cot x$ no está definida). Fuera de $(1,\pi)$ el teorema no garantiza la existencia de la solución.
