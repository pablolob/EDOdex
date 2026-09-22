
## Enunciado

En cada uno de los problemas 1 a 12 determine la solución general de la ecuación diferencial dada que sea válida en cualquier intervalo que no incluya el punto singular.

12. $x^2 y'' - 4xy' + 4y = 0$

## Solución

La ecuación es de **segundo orden**, **lineal**, **homogénea** y de tipo **Cauchy-Euler**. Su solución general, válida en cualquier intervalo que no contenga el punto singular $x=0$, es

$$
y = C_1 x + C_2 x^4.
$$

## Resolución

La ecuación

$$
x^2 y'' - 4xy' + 4y = 0
$$

tiene la forma de una **ecuación de Cauchy-Euler** $ax^2y''+bxy'+cy=0$, con $a=1$, $b=-4$ y $c=4$. Para $x\ne 0$ los coeficientes de la forma estándar son continuos, de modo que la solución general se busca en un intervalo que no contenga el origen.

Se propone $y=x^r$ con $x\ne 0$. Sus derivadas son

$$
y' = r x^{r-1}, \qquad y'' = r(r-1)x^{r-2}.
$$

Al sustituir en la ecuación,

$$
x^2\, r(r-1)x^{r-2} - 4x\, r x^{r-1} + 4x^r
= x^r\left[r(r-1)-4r+4\right]
= x^r\left(r^2-5r+4\right).
$$

Como $x^r\ne 0$, la condición se reduce a la **ecuación característica**

$$
r^2 - 5r + 4 = (r-1)(r-4) = 0,
$$

cuyas raíces son $r_1=1$ y $r_2=4$. Son reales y distintas, de modo que $x$ y $x^4$ son dos soluciones linealmente independientes. Por tanto,

$$
y = C_1 x + C_2 x^4.
$$

El único punto singular es $x=0$, donde el coeficiente de $y''$ se anula. En consecuencia, la solución general es válida en cualquier intervalo que no incluya $x=0$, es decir, en $(-\infty,0)$ o en $(0,\infty)$.

## Observaciones

El punto $x=0$ es el punto singular de la ecuación. Aunque la combinación $C_1x+C_2x^4$ está definida en el origen, el teorema de existencia y unicidad solo garantiza la solución en intervalos que no contengan el punto singular; los intervalos de validez son $(-\infty,0)$ y $(0,\infty)$.

### Método alternativo: cambio de variable $x=e^z$

Para $x>0$, el cambio $z=\ln x$ transforma la ecuación de Cauchy-Euler en la ecuación con coeficientes constantes

$$
\frac{d^2y}{dz^2} - 5\frac{dy}{dz} + 4y = 0,
$$

cuya ecuación característica es $\lambda^2-5\lambda+4=(\lambda-1)(\lambda-4)=0$. Las raíces $\lambda=1$ y $\lambda=4$ devuelven $y=C_1e^{z}+C_2e^{4z}=C_1x+C_2x^4$ al deshacer el cambio.
