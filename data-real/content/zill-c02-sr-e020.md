
## Enunciado

En los problemas 19-26 resuelva la ecuación diferencial dada.

$$y(\ln x - \ln y) \, dx = (x \ln x - x \ln y - y) \, dy$$

## Solución

En el dominio $x>0$, $y>0$, la solución general implícita es

$$
\frac{x}{y}\ln\!\left(\frac{x}{y}\right)-\frac{x}{y}+\ln y=C.
$$

## Resolución

Se escribe la ecuación en la forma $M(x,y)\,dx+N(x,y)\,dy=0$:

$$
y(\ln x-\ln y)\,dx-\left(x\ln x-x\ln y-y\right)dy=0.
$$

Con

$$
L=\ln x-\ln y=\ln\frac{x}{y},
$$

los coeficientes son

$$
M(x,y)=yL, \qquad N(x,y)=-(xL-y).
$$

El **test de exactitud** compara las derivadas parciales cruzadas:

$$
\frac{\partial M}{\partial y}=L-1, \qquad \frac{\partial N}{\partial x}=-L-1.
$$

Como $\dfrac{\partial M}{\partial y}\ne\dfrac{\partial N}{\partial x}$, la ecuación no es exacta. Se busca un **factor integrante** que dependa solo de $y$ mediante el cociente

$$
\frac{1}{M}\left(\frac{\partial N}{\partial x}-\frac{\partial M}{\partial y}\right)
=\frac{-2L}{yL}=-\frac{2}{y},
$$

que depende solo de $y$. Entonces

$$
\mu(y)=\exp\!\left(\int-\frac{2}{y}\,dy\right)=e^{-2\ln y}=\frac{1}{y^2}.
$$

Al multiplicar la ecuación por $\mu$ se agrupa el término con $L$:

$$
\begin{aligned}
L\left(y\,dx-x\,dy\right)+y\,dy &=0, \\
\frac{1}{y^2}\Bigl[L\left(y\,dx-x\,dy\right)+y\,dy\Bigr] &=0, \\
L\,\frac{y\,dx-x\,dy}{y^2}+\frac{dy}{y} &=0.
\end{aligned}
$$

Se reconocen los diferenciales exactos

$$
\frac{y\,dx-x\,dy}{y^2}=d\!\left(\frac{x}{y}\right),
\qquad
\frac{dy}{y}=d(\ln y).
$$

Con $u=\dfrac{x}{y}$ se tiene $L=\ln u$, y la ecuación se reduce a

$$
\ln u\,du+d(\ln y)=0.
$$

Al integrar, con $\displaystyle\int\ln u\,du=u\ln u-u$,

$$
u\ln u-u+\ln y=C.
$$

Se vuelve a $u=\dfrac{x}{y}$ y se obtiene la solución general implícita

$$
\frac{x}{y}\ln\!\left(\frac{x}{y}\right)-\frac{x}{y}+\ln y=C.
$$

El dominio lo fijan los logaritmos de la ecuación original: $x>0$ y $y>0$. El factor $\mu=1/y^2$ no se anula allí, de modo que no se pierden ni se añaden soluciones; $y=0$ queda fuera del dominio y no es solución.

## Observaciones

### Método alternativo: sustitución $y=ux$

La ecuación también es **homogénea** de primer orden, pues sus coeficientes $M$ y $N$ son homogéneos de grado $1$. Con $y=ux$, $dy=u\,dx+x\,du$ y $\ln(x/y)=-\ln u$, la ecuación se reduce a

$$
-ux\ln u\,dx=-x(\ln u+u)\left(u\,dx+x\,du\right).
$$

Tras simplificar y separar las variables,

$$
\frac{dx}{x}=-\frac{\ln u+u}{u^2}\,du.
$$

La integración, con integración por partes en $\displaystyle\int\frac{\ln u}{u^2}\,du$, da $\ln x=\dfrac{\ln u}{u}+\dfrac{1}{u}-\ln u+C$; al volver a $u=x/y$ se recupera la misma solución implícita.

La ecuación admite así dos caminos dentro del repaso: el factor integrante $\mu(y)=1/y^2$, que la vuelve exacta, y la sustitución homogénea. Ambos conducen a la misma familia de curvas.
