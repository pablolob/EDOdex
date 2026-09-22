
## Enunciado

En cada uno de los problemas 1 a 12 determine la solución general de la ecuación diferencial dada que sea válida en cualquier intervalo que no incluya el punto singular.

10. $(x - 2)^2 y'' + 5(x - 2)y' + 8y = 0$

## Solución

La ecuación es de **segundo orden**, **lineal**, **homogénea** y de tipo **Cauchy-Euler**. Su solución general, válida en cualquier intervalo que no contenga el punto singular $x=2$, es

$$
y = (x-2)^{-2}\left[C_1\cos\!\left(2\ln|x-2|\right) + C_2\sin\!\left(2\ln|x-2|\right)\right].
$$

Los intervalos de validez son $(-\infty,2)$ y $(2,\infty)$.

## Resolución

La ecuación

$$
(x-2)^2 y'' + 5(x-2)y' + 8y = 0
$$

tiene la forma de una **ecuación de Cauchy-Euler** centrada en $x_0=2$,

$$
(x-x_0)^2 y'' + \alpha\,(x-x_0)y' + \beta\,y = 0,
$$

con $\alpha=5$ y $\beta=8$. El único punto singular es $x_0=2$.

Se introduce el cambio de variable independiente

$$
t = x-2,
$$

con el que la ecuación se escribe

$$
t^2 y'' + 5t\,y' + 8y = 0.
$$

Se buscan soluciones de la forma $y=t^r$, con $r$ por determinar. Sus derivadas son

$$
y' = r\,t^{r-1}, \qquad y'' = r(r-1)\,t^{r-2}.
$$

Al sustituir en la ecuación,

$$
t^2\,r(r-1)\,t^{r-2} + 5t\,r\,t^{r-1} + 8t^{r}
= t^{r}\left[r(r-1) + 5r + 8\right]
= t^{r}\left(r^2 + 4r + 8\right) = 0.
$$

Como $t^r\ne 0$ para $t\ne 0$, se obtiene la **ecuación característica**

$$
r^2 + 4r + 8 = 0,
$$

cuyas raíces son

$$
r = \frac{-4\pm\sqrt{16-32}}{2} = -2\pm 2i.
$$

Las raíces son complejas conjugadas $r=\alpha\pm i\beta$, con $\alpha=-2$ y $\beta=2$. Para $t>0$ esto produce las dos soluciones reales linealmente independientes

$$
t^{-2}\cos(2\ln t), \qquad t^{-2}\sin(2\ln t),
$$

y la misma forma con $\ln|t|$ cuando $t<0$. Al volver a la variable original $t=x-2$,

$$
y = (x-2)^{-2}\left[C_1\cos\!\left(2\ln|x-2|\right) + C_2\sin\!\left(2\ln|x-2|\right)\right].
$$

El único punto singular es $x=2$: allí se anula el coeficiente de $y''$ y los coeficientes de la forma estándar dejan de ser analíticos. Por tanto, la solución general es válida en cualquier intervalo que no incluya $x=2$, es decir, en $(-\infty,2)$ o en $(2,\infty)$.

## Observaciones

El punto $x=2$ es el punto singular de la ecuación. La solución no está definida en él, pues el factor $(x-2)^{-2}$ diverge cuando $x\to 2$.

### Método alternativo: cambio de variable $x-2=e^z$

Para $x>2$, el cambio $z=\ln(x-2)$ transforma la ecuación de Cauchy-Euler en la ecuación con coeficientes constantes

$$
\frac{d^2y}{dz^2} + 4\frac{dy}{dz} + 8y = 0,
$$

cuya ecuación característica $\lambda^2+4\lambda+8=0$ tiene raíces $\lambda=-2\pm 2i$. La solución $y=e^{-2z}\left[C_1\cos(2z)+C_2\sin(2z)\right]$ coincide con la anterior al deshacer el cambio.
