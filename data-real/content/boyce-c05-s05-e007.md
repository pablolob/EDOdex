
## Enunciado

En cada uno de los problemas 1 a 12 determine la solución general de la ecuación diferencial dada que sea válida en cualquier intervalo que no incluya el punto singular.

7. $x^2 y'' + 6xy' - y = 0$

## Solución

La ecuación es de **segundo orden**, **lineal** y **homogénea**, de tipo **Cauchy-Euler**. Su solución general es

$$
y(x)=C_1 |x|^{r_1}+C_2 |x|^{r_2},\qquad r_{1,2}=\frac{-5\pm\sqrt{29}}{2},
$$

válida en $(-\infty,0)$ y en $(0,\infty)$, es decir, en cualquier intervalo que no contenga el punto singular $x=0$.

## Resolución

La ecuación

$$
x^2 y'' + 6xy' - y = 0
$$

es una **ecuación de Euler** (o Cauchy-Euler): en cada término la potencia de $x$ coincide con el orden de la derivada. El punto $x=0$ es singular, de modo que la solución se busca primero en el intervalo $x>0$.

Para $x>0$ se propone $y=x^r$, con $r$ por determinar. Sus derivadas son

$$
y'=r x^{r-1},\qquad y''=r(r-1)x^{r-2}.
$$

Al sustituir en la ecuación,

$$
\begin{aligned}
x^2\, r(r-1)x^{r-2} + 6x\, r x^{r-1} - x^r &= 0, \\
\left[ r(r-1)+6r-1 \right] x^r &= 0.
\end{aligned}
$$

Como $x^r\ne 0$ para $x>0$, el corchete debe anularse. Esto da la ecuación característica

$$
r^2+5r-1=0,
$$

cuyas raíces son

$$
r_{1,2}=\frac{-5\pm\sqrt{29}}{2}.
$$

Son reales y distintas, por lo que $x^{r_1}$ y $x^{r_2}$ son dos soluciones linealmente independientes en $x>0$. La solución general en ese intervalo es

$$
y(x)=C_1 x^{r_1}+C_2 x^{r_2}.
$$

Para $x<0$ la sustitución conduce a las potencias $|x|^{r_1}$ y $|x|^{r_2}$. Por ello la solución general en cualquier intervalo que no contenga el punto singular $x=0$ se escribe

$$
y(x)=C_1 |x|^{r_1}+C_2 |x|^{r_2},\qquad r_{1,2}=\frac{-5\pm\sqrt{29}}{2}.
$$

La sustitución directa confirma el resultado: cada término de la ecuación aporta el factor común $r^2+5r-1$, que se anula para las raíces obtenidas.

## Observaciones

El punto $x=0$ es el único punto singular de la ecuación. La solución general es válida por separado en $(-\infty,0)$ y en $(0,\infty)$; la constante de cada intervalo se fija con condiciones iniciales dadas en él.

### Método alternativo: cambio $x=e^t$

Para $x>0$ el cambio $x=e^t$, con $t=\ln x$, transforma la ecuación de Euler en una de coeficientes constantes. Como $x\frac{d}{dx}=\frac{d}{dt}$, resulta $x^2\frac{d^2}{dx^2}=\frac{d^2}{dt^2}-\frac{d}{dt}$, y la ecuación se convierte en

$$
\left( \frac{d^2}{dt^2}+5\frac{d}{dt}-1 \right) y=0.
$$

Su ecuación característica es $r^2+5r-1=0$, la misma obtenida antes, lo que conduce a la misma solución general.
