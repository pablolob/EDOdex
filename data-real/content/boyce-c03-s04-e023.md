
## Enunciado

Demuestre que $W(e^{\lambda x}\cos\mu x, e^{\lambda x}\sin\mu x) = \mu e^{2\lambda x}$.

## Solución

El wronskiano de las dos funciones es

$$
W\!\left(e^{\lambda x}\cos\mu x,\ e^{\lambda x}\sin\mu x\right) = \mu e^{2\lambda x}.
$$

## Resolución

Se escriben $y_1 = e^{\lambda x}\cos\mu x$ y $y_2 = e^{\lambda x}\sin\mu x$. Por definición,

$$
W(y_1,y_2) = y_1y_2' - y_1'y_2.
$$

Las derivadas se calculan con la **regla del producto** y la **regla de la cadena**:

$$
\begin{aligned}
y_1' &= \lambda e^{\lambda x}\cos\mu x - \mu e^{\lambda x}\sin\mu x
      = e^{\lambda x}\left(\lambda\cos\mu x - \mu\sin\mu x\right), \\[4pt]
y_2' &= \lambda e^{\lambda x}\sin\mu x + \mu e^{\lambda x}\cos\mu x
      = e^{\lambda x}\left(\lambda\sin\mu x + \mu\cos\mu x\right).
\end{aligned}
$$

Al sustituir en el wronskiano y factorizar $e^{2\lambda x}$,

$$
\begin{aligned}
W &= e^{\lambda x}\cos\mu x \cdot e^{\lambda x}\left(\lambda\sin\mu x + \mu\cos\mu x\right)
   - e^{\lambda x}\left(\lambda\cos\mu x - \mu\sin\mu x\right)\cdot e^{\lambda x}\sin\mu x \\[4pt]
  &= e^{2\lambda x}\Big[\lambda\sin\mu x\cos\mu x + \mu\cos^2\mu x
   - \lambda\sin\mu x\cos\mu x + \mu\sin^2\mu x\Big].
\end{aligned}
$$

Los términos en $\lambda$ se cancelan. Queda

$$
W = e^{2\lambda x}\left(\mu\cos^2\mu x + \mu\sin^2\mu x\right)
  = \mu e^{2\lambda x}\left(\cos^2\mu x + \sin^2\mu x\right).
$$

Como $\cos^2\mu x + \sin^2\mu x = 1$, resulta

$$
W = \mu e^{2\lambda x}.
$$

## Observaciones

La identidad es válida para todo $\lambda$ y $\mu$ reales y todo $x \in \mathbb{R}$, pues no aparece ningún cociente ni restricción de dominio.

Cuando $\mu \ne 0$, se tiene $W \ne 0$ para todo $x$; el par es un conjunto fundamental de soluciones de la ecuación de coeficientes constantes cuya ecuación característica tiene raíces $\lambda \pm i\mu$, es decir, de $y'' - 2\lambda y' + (\lambda^2+\mu^2)y = 0$. En el caso $\mu = 0$ las dos funciones coinciden, $W = 0$, y no forman un conjunto fundamental.
