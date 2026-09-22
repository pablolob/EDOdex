
## Enunciado

En cada uno de los problemas 1 a 12 determine la solución general de la ecuación diferencial dada que sea válida en cualquier intervalo que no incluya el punto singular.

3. $x^2 y'' - 3xy' + 4y = 0$

## Solución

La solución general, válida en cualquier intervalo que no contenga a $x=0$, es

$$
y(x)=C_1x^2+C_2x^2\ln|x|.
$$

## Resolución

La ecuación es lineal, homogénea, de **segundo orden** y de tipo **Cauchy-Euler** (equidimensional): cada término contiene una potencia de $x$ cuyo exponente coincide con el orden de la derivada. Se buscan soluciones de la forma $y=x^r$ para $x\ne 0$. Sus derivadas son

$$
y'=rx^{r-1},\qquad y''=r(r-1)x^{r-2}.
$$

Al sustituir en la ecuación,

$$
\begin{aligned}
x^2\cdot r(r-1)x^{r-2}-3x\cdot rx^{r-1}+4x^r
  &= \left[r(r-1)-3r+4\right]x^r \\
  &= \left(r^2-4r+4\right)x^r=0.
\end{aligned}
$$

Como $x^r\ne 0$ para $x\ne 0$, se obtiene la **ecuación característica** (o indicial)

$$
r^2-4r+4=(r-2)^2=0,
$$

con la raíz doble $r=2$. Una solución es $y_1=x^2$. Cuando la ecuación característica tiene una raíz doble, la segunda solución linealmente independiente de una ecuación de Cauchy-Euler incorpora un factor logarítmico y es $y_2=x^2\ln|x|$. Por lo tanto, la solución general es

$$
y(x)=C_1x^2+C_2x^2\ln|x|.
$$

El único punto singular es $x=0$: allí se anula el coeficiente de $y''$ y los coeficientes de la forma estándar, $y''-\frac{3}{x}y'+\frac{4}{x^2}y=0$, dejan de ser analíticos. En consecuencia, la solución general es válida en cualquier intervalo que no incluya $x=0$, es decir, en $(-\infty,0)$ o en $(0,\infty)$.

## Observaciones

La ecuación es lineal y homogénea, por lo que no hay soluciones singulares fuera del punto singular.

### Método alternativo: cambio a coeficientes constantes

Para $x>0$ puede usarse la sustitución $x=e^t$, con $t=\ln x$. Con las identidades $x\frac{dy}{dx}=\frac{dy}{dt}$ y $x^2\frac{d^2y}{dx^2}=\frac{d^2y}{dt^2}-\frac{dy}{dt}$, la ecuación se transforma en

$$
\ddot y-4\dot y+4y=0,
$$

cuya ecuación característica, $(r-2)^2=0$, vuelve a tener la raíz doble $r=2$. La solución $y=C_1e^{2t}+C_2te^{2t}$ se escribe, al volver a $x$, como $y=C_1x^2+C_2x^2\ln x$. El valor absoluto $\ln|x|$ extiende la expresión a $x<0$.
