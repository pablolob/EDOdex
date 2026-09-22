
## Enunciado

En cada uno de los problemas 13 a 16, encuentre la solución del problema con valor inicial dado.

13. $2x^2 y'' + xy' - 3y = 0, \quad y(1) = 1, \quad y'(1) = 4$

## Solución

La solución del problema con valor inicial, válida en el intervalo $(0,\infty)$, es

$$
y(x)=2x^{3/2}-\frac{1}{x}.
$$

## Resolución

La ecuación es lineal, homogénea, de **segundo orden** y de tipo **Cauchy-Euler** (equidimensional). Como las condiciones iniciales se dan en $x=1>0$, la solución se busca en un intervalo que no contenga el punto singular $x=0$, por ejemplo $(0,\infty)$.

Se proponen soluciones de la forma $y=x^r$ para $x>0$. Sus derivadas son

$$
y'=rx^{r-1},\qquad y''=r(r-1)x^{r-2}.
$$

Al sustituir en la ecuación,

$$
\begin{aligned}
2x^2\cdot r(r-1)x^{r-2}+x\cdot rx^{r-1}-3x^r
  &= \left[2r(r-1)+r-3\right]x^r \\
  &= \left(2r^2-r-3\right)x^r=0.
\end{aligned}
$$

Como $x^r\ne 0$, se obtiene la **ecuación característica** (o indicial)

$$
2r^2-r-3=(2r-3)(r+1)=0,
$$

cuyas raíces son $r_1=\dfrac{3}{2}$ y $r_2=-1$. Son reales y distintas, de modo que $x^{3/2}$ y $x^{-1}$ son dos soluciones linealmente independientes. La solución general es

$$
y(x)=C_1x^{3/2}+C_2x^{-1}.
$$

Su derivada es

$$
y'(x)=\frac{3}{2}C_1x^{1/2}-C_2x^{-2}.
$$

Al imponer las condiciones iniciales en $x=1$ se obtiene el sistema

$$
\begin{aligned}
C_1+C_2 &= 1, \\
\frac{3}{2}C_1-C_2 &= 4.
\end{aligned}
$$

Sumando ambas ecuaciones, $\dfrac{5}{2}C_1=5$, de donde $C_1=2$. Sustituyendo en la primera, $C_2=1-2=-1$. Por lo tanto,

$$
y(x)=2x^{3/2}-\frac{1}{x}.
$$

La sustitución directa confirma el resultado: con $y'=3x^{1/2}+x^{-2}$ y $y''=\dfrac{3}{2}x^{-1/2}-2x^{-3}$,

$$
2x^2y''+xy'-3y=\left(3x^{3/2}-4x^{-1}\right)+\left(3x^{3/2}+x^{-1}\right)+\left(-6x^{3/2}+3x^{-1}\right)=0.
$$

El intervalo de validez es $(0,\infty)$: el punto singular $x=0$ queda excluido y el intervalo contiene el punto $x=1$ donde se imponen las condiciones iniciales.

## Observaciones

El único punto singular es $x=0$, donde se anula el coeficiente de $y''$. La solución no está definida en él porque el término $x^{-1}$ diverge cuando $x\to 0^+$.

### Método alternativo: cambio a coeficientes constantes

Para $x>0$ puede usarse la sustitución $x=e^t$, con $t=\ln x$. Con las identidades $x\dfrac{dy}{dx}=\dfrac{dy}{dt}$ y $x^2\dfrac{d^2y}{dx^2}=\dfrac{d^2y}{dt^2}-\dfrac{dy}{dt}$, la ecuación se transforma en

$$
2\left(\ddot y-\dot y\right)+\dot y-3y=2\ddot y-\dot y-3y=0,
$$

cuya ecuación característica $2\lambda^2-\lambda-3=0$ tiene las mismas raíces $\lambda=\tfrac{3}{2}$ y $\lambda=-1$. La solución $y=C_1e^{3t/2}+C_2e^{-t}$ coincide con la anterior al deshacer el cambio.
