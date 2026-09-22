
## Enunciado

En cada uno de los problemas 1 a 12 determine la solución general de la ecuación diferencial dada que sea válida en cualquier intervalo que no incluya el punto singular.

1. $x^2 y'' + 4xy' + 2y = 0$

## Solución

La solución general, válida en cualquier intervalo que no contenga a $x=0$, es

$$
y(x)=C_1x^{-1}+C_2x^{-2}.
$$

## Resolución

La ecuación es lineal, homogénea, de **segundo orden** y de tipo **Cauchy-Euler** (equidimensional): cada término contiene una potencia de $x$ cuyo exponente coincide con el orden de la derivada. Se buscan soluciones de la forma $y=x^r$ para $x\ne 0$. Sus derivadas son

$$
y'=rx^{r-1},\qquad y''=r(r-1)x^{r-2}.
$$

Al sustituir en la ecuación,

$$
\begin{aligned}
x^2\cdot r(r-1)x^{r-2}+4x\cdot rx^{r-1}+2x^r
  &= \left[r(r-1)+4r+2\right]x^r \\
  &= \left(r^2+3r+2\right)x^r=0.
\end{aligned}
$$

Como $x^r\ne 0$ para $x\ne 0$, se obtiene la **ecuación característica** (o indicial)

$$
r^2+3r+2=(r+1)(r+2)=0,
$$

cuyas raíces son $r_1=-1$ y $r_2=-2$. Son reales y distintas, de modo que $x^{-1}$ y $x^{-2}$ son dos soluciones linealmente independientes. Por lo tanto, la solución general es

$$
y(x)=C_1x^{-1}+C_2x^{-2}.
$$

El único punto singular es $x=0$: allí el coeficiente de $y''$, $x^2$, se anula y los coeficientes de la forma estándar dejan de ser analíticos. En consecuencia, la solución general es válida en cualquier intervalo que no incluya $x=0$, es decir, en $(-\infty,0)$ o en $(0,\infty)$.

## Observaciones

La ecuación es homogénea y lineal, por lo que no existen soluciones singulares fuera del punto singular.

### Método alternativo: cambio a coeficientes constantes

Para $x>0$ puede usarse la sustitución $x=e^t$, con $t=\ln x$. La ecuación se transforma en una de coeficientes constantes, $\ddot{y}+3\dot{y}+2y=0$, cuya ecuación característica es la misma, $r^2+3r+2=0$. Las raíces $r=-1$ y $r=-2$ devuelven $y=C_1e^{-t}+C_2e^{-2t}=C_1x^{-1}+C_2x^{-2}$.
