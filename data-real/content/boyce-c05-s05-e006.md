
## Enunciado

En cada uno de los problemas 1 a 12 determine la solución general de la ecuación diferencial dada que sea válida en cualquier intervalo que no incluya el punto singular.

6. $(x - 1)^2 y'' + 8(x - 1)y' + 12y = 0$

## Solución

La ecuación es de **segundo orden**, **lineal**, **homogénea** y de tipo **Cauchy-Euler** centrada en $x=1$. Su solución general, válida en cualquier intervalo que no contenga el punto singular $x=1$, es

$$
y(x)=C_1(x-1)^{-3}+C_2(x-1)^{-4}.
$$

## Resolución

La ecuación

$$
(x-1)^2 y'' + 8(x-1)y' + 12y = 0
$$

tiene la forma de una **ecuación de Cauchy-Euler** centrada en $x_0=1$,

$$
(x-x_0)^2 y'' + \alpha\,(x-x_0)y' + \beta\,y = 0,
$$

con $\alpha=8$ y $\beta=12$. El único punto singular es $x_0=1$.

Se introduce el cambio de variable independiente

$$
t=x-1,
$$

con el que la ecuación se escribe

$$
t^2 y'' + 8t\,y' + 12y = 0.
$$

Se buscan soluciones de la forma $y=t^r$ para $t\ne 0$. Sus derivadas son

$$
y'=r\,t^{r-1},\qquad y''=r(r-1)\,t^{r-2}.
$$

Al sustituir en la ecuación,

$$
t^2\cdot r(r-1)t^{r-2}+8t\cdot rt^{r-1}+12t^{r}
= \left[r(r-1)+8r+12\right]t^{r}
= \left(r^2+7r+12\right)t^{r}=0.
$$

Como $t^{r}\ne 0$ para $t\ne 0$, se obtiene la **ecuación característica** (o indicial)

$$
r^2+7r+12=(r+3)(r+4)=0,
$$

cuyas raíces son $r_1=-3$ y $r_2=-4$. Son reales y distintas, de modo que $t^{-3}$ y $t^{-4}$ son dos soluciones linealmente independientes. La solución general en la variable $t$ es

$$
y=C_1t^{-3}+C_2t^{-4}.
$$

Al volver a la variable original $t=x-1$,

$$
y(x)=C_1(x-1)^{-3}+C_2(x-1)^{-4}.
$$

El único punto singular es $x=1$: allí se anula el coeficiente de $y''$ y los coeficientes de la forma estándar dejan de ser analíticos. En consecuencia, la solución general es válida en cualquier intervalo que no incluya $x=1$, es decir, en $(-\infty,1)$ o en $(1,\infty)$.

## Observaciones

La ecuación es lineal y homogénea, por lo que no hay soluciones singulares fuera del punto singular.

### Método alternativo: cambio a coeficientes constantes

Para $x>1$ puede usarse la sustitución $t=e^z$, con $z=\ln(x-1)$. La ecuación se transforma en una de coeficientes constantes, $\ddot{y}+7\dot{y}+12y=0$, cuya ecuación característica es la misma, $r^2+7r+12=0$. Las raíces $r=-3$ y $r=-4$ devuelven $y=C_1e^{-3z}+C_2e^{-4z}=C_1(x-1)^{-3}+C_2(x-1)^{-4}$.
