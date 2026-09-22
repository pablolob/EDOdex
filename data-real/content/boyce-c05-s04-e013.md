
## Enunciado

En cada uno de los problemas 1 a 18, halle todos los puntos singulares de la ecuación dada y determine si cada uno de ellos es singular o irregular.

13. $y'' + (\ln |x|)y' + 3xy = 0$

## Solución

La ecuación tiene un único punto singular, $x=0$, y es un **punto singular irregular**.

## Resolución

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. Como el coeficiente de $y''$ es $1$, resulta

$$
p(x)=\ln|x|,\qquad q(x)=3x.
$$

Los puntos singulares son aquellos en los que $p$ o $q$ no son analíticos. La función $q(x)=3x$ es un polinomio, luego analítica en todo $\mathbb{R}$. La función $p(x)=\ln|x|$ es analítica en todo $x\ne 0$ y no está definida en $x=0$. Por tanto, el único punto singular es $x=0$.

Un punto singular $x_0$ es regular si $(x-x_0)p(x)$ y $(x-x_0)^2q(x)$ son analíticas en $x_0$; si alguna de las dos no lo es, el punto es irregular. En $x_0=0$,

$$
x\,p(x)=x\ln|x|,\qquad x^2q(x)=3x^3.
$$

La función $3x^3$ es un polinomio y es analítica en $x=0$. La función $x\ln|x|$ no lo es. Si se define $f(x)=x\ln|x|$ para $x\ne 0$ y $f(0)=0$, el cociente diferencial en el origen es

$$
\frac{f(h)-f(0)}{h}=\frac{h\ln|h|}{h}=\ln|h|,
$$

y $\ln|h|\to -\infty$ cuando $h\to 0$. Por tanto $f'(0)$ no existe y $f$ no puede ser analítica en $x=0$. Al fallar una de las dos condiciones de regularidad, $x=0$ es un **punto singular irregular**.

## Observaciones

La sutileza del ejercicio es que el límite

$$
\lim_{x\to 0} x\ln|x| = 0
$$

es finito. Un criterio basado solo en límites finitos clasificaría $x=0$ como regular, pero la definición exige que $x\ln|x|$ sea analítica en el origen, y no lo es porque su derivada no existe allí. Todos los puntos $x\ne 0$ son puntos ordinarios.
