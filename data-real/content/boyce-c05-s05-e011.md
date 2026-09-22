
## Enunciado

En cada uno de los problemas 1 a 12 determine la solución general de la ecuación diferencial dada que sea válida en cualquier intervalo que no incluya el punto singular.

11. $x^2 y'' + 2xy' + 4y = 0$

## Solución

La ecuación es de **segundo orden**, **lineal**, **homogénea** y de tipo **Cauchy-Euler**. Su solución general, válida en cualquier intervalo que no contenga el punto singular $x=0$, es

$$
y = \frac{1}{\sqrt{|x|}}\left[C_1\cos\!\left(\frac{\sqrt{15}}{2}\ln|x|\right) + C_2\sin\!\left(\frac{\sqrt{15}}{2}\ln|x|\right)\right].
$$

## Resolución

La ecuación

$$
x^2 y'' + 2xy' + 4y = 0
$$

tiene la forma de una **ecuación de Cauchy-Euler** $ax^2y''+bxy'+cy=0$, con $a=1$, $b=2$ y $c=4$. Para $x\ne 0$ los coeficientes de la forma estándar son continuos, de modo que la solución general se busca en un intervalo que no contenga el origen.

Se propone $y=x^r$ con $x\ne 0$. Sus derivadas son

$$
y' = r x^{r-1}, \qquad y'' = r(r-1)x^{r-2}.
$$

Al sustituir en la ecuación,

$$
x^2\, r(r-1)x^{r-2} + 2x\, r x^{r-1} + 4x^r
= x^r\left[r(r-1)+2r+4\right]
= x^r\left(r^2+r+4\right).
$$

Como $x^r\ne 0$, la condición se reduce a la **ecuación característica**

$$
r^2 + r + 4 = 0,
$$

cuyas raíces son

$$
r = \frac{-1\pm\sqrt{1-16}}{2} = -\frac{1}{2} \pm i\frac{\sqrt{15}}{2}.
$$

Las raíces son complejas conjugadas $r=\alpha\pm i\beta$, con $\alpha=-\dfrac{1}{2}$ y $\beta=\dfrac{\sqrt{15}}{2}$. Para $x>0$ esto produce las dos soluciones reales linealmente independientes

$$
x^{-1/2}\cos\!\left(\frac{\sqrt{15}}{2}\ln x\right), \qquad
x^{-1/2}\sin\!\left(\frac{\sqrt{15}}{2}\ln x\right),
$$

y la misma forma con $\ln|x|$ cuando $x<0$. Por tanto,

$$
y = \frac{1}{\sqrt{|x|}}\left[C_1\cos\!\left(\frac{\sqrt{15}}{2}\ln|x|\right) + C_2\sin\!\left(\frac{\sqrt{15}}{2}\ln|x|\right)\right],
$$

que es válida en cualquier intervalo que no incluya $x=0$.

## Observaciones

El punto $x=0$ es el punto singular de la ecuación. La solución no está definida en él, pues el factor $|x|^{-1/2}$ diverge cuando $x\to 0$. Los intervalos de validez son $(-\infty,0)$ y $(0,\infty)$.

### Método alternativo: cambio de variable $x=e^z$

Para $x>0$, el cambio $z=\ln x$ transforma la ecuación de Cauchy-Euler en la ecuación con coeficientes constantes

$$
\frac{d^2y}{dz^2} + \frac{dy}{dz} + 4y = 0,
$$

cuya ecuación característica $\lambda^2+\lambda+4=0$ tiene raíces $\lambda=-\frac{1}{2}\pm i\frac{\sqrt{15}}{2}$. La solución

$$
y=e^{-z/2}\left[C_1\cos\!\left(\frac{\sqrt{15}}{2}z\right) + C_2\sin\!\left(\frac{\sqrt{15}}{2}z\right)\right]
$$

coincide con la anterior al deshacer el cambio.
