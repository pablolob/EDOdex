
## Enunciado

**Coeficientes complejos.** Si las constantes $\alpha$ y $\beta$ de la ecuación de Euler $x^2 y'' + \alpha x y' + \beta y = 0$ son números complejos, sigue siendo posible obtener soluciones de la forma $x^r$. Sin embargo, en general, las soluciones ya no son de valores reales. En cada uno de los problemas 32 a 34, determine la solución general de la ecuación dada.

33. $x^2 y'' + (1 - i)xy' + 2y = 0$

## Solución

La ecuación es una **ecuación de Euler** con coeficientes complejos. Su solución general, con constantes complejas arbitrarias y válida en $x>0$, es

$$
y(x)=C_1 x^{2i}+C_2 x^{-i}.
$$

## Resolución

La ecuación es lineal, homogénea, de **segundo orden** y de tipo **Euler** (equidimensional). Se buscan soluciones de la forma $y=x^r$, con $r$ complejo, para $x>0$. Sus derivadas son

$$
y'=rx^{r-1},\qquad y''=r(r-1)x^{r-2}.
$$

Al sustituir en $x^2y''+(1-i)xy'+2y=0$,

$$
\begin{aligned}
x^2\cdot r(r-1)x^{r-2}+(1-i)x\cdot rx^{r-1}+2x^r
  &= \left[r(r-1)+(1-i)r+2\right]x^r \\
  &= \left(r^2-ir+2\right)x^r=0.
\end{aligned}
$$

Como $x^r\ne 0$ para $x>0$, se obtiene la **ecuación característica** (o indicial)

$$
r^2-ir+2=0.
$$

Con la fórmula cuadrática, y teniendo en cuenta que $(-i)^2=-1$,

$$
r=\frac{i\pm\sqrt{(-i)^2-8}}{2}=\frac{i\pm\sqrt{-9}}{2}=\frac{i\pm 3i}{2}.
$$

Las raíces son $r_1=2i$ y $r_2=-i$. Son distintas, de modo que $x^{2i}$ y $x^{-i}$ son dos soluciones linealmente independientes. Por lo tanto, la solución general es

$$
y(x)=C_1x^{2i}+C_2x^{-i}, \qquad x>0,
$$

con $C_1$ y $C_2$ constantes complejas arbitrarias.

**Comprobación.** Cada exponente satisface la ecuación característica: para $r=2i$,

$$
(2i)^2-i(2i)+2=-4+2+2=0,
$$

y para $r=-i$,

$$
(-i)^2-i(-i)+2=-1-1+2=0.
$$

Así, $x^{2i}$ y $x^{-i}$ satisfacen la ecuación diferencial, y por linealidad también lo hace cualquier combinación lineal de ambas.

## Observaciones

La ecuación es homogénea y lineal, por lo que no existen soluciones singulares. El único punto singular es $x=0$, donde se anula el coeficiente de $y''$; por eso la solución general es válida en cualquier intervalo que no contenga a $x=0$. La forma $x^r$ con exponente complejo se interpreta como $x^r=e^{r\ln x}$, definida para $x>0$.

Como $r_1=2i$ y $r_2=-i$ no son conjugados, la solución general es genuinamente compleja: no se reduce a dos soluciones reales emparejadas. En términos de funciones reales, $x^{2i}=\cos(2\ln x)+i\sin(2\ln x)$ y $x^{-i}=\cos(\ln x)-i\sin(\ln x)$.

### Método alternativo: cambio a coeficientes constantes

Para $x>0$, la sustitución $x=e^t$, con $t=\ln x$, transforma la ecuación de Euler en $\ddot{y}-i\dot{y}+2y=0$, de coeficientes constantes. Su ecuación característica es la misma, $r^2-ir+2=0$, y devuelve $y=C_1e^{2it}+C_2e^{-it}=C_1x^{2i}+C_2x^{-i}$.
