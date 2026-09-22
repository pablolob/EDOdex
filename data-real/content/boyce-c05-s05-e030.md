
## Enunciado

Demuestre que si $L[y] = x^2 y'' + \alpha x y' + \beta y$, entonces

$$L[(-x)^r] = (-x)^r F(r)$$

para toda $x < 0$, en donde $F(r) = r(r-1) + \alpha r + \beta$. De donde, concluye que si $r_1 \neq r_2$ son raíces de $F(r) = 0$, entonces dos soluciones linealmente independientes de $L[y] = 0$ para $x < 0$ son $(-x)^{r_1}$ y $(-x)^{r_2}$.

## Solución

Para $x<0$ se cumple la identidad

$$
L[(-x)^r] = (-x)^r F(r), \qquad F(r)=r(r-1)+\alpha r+\beta.
$$

En consecuencia, si $r_1\ne r_2$ son raíces de $F(r)=0$, las funciones $(-x)^{r_1}$ y $(-x)^{r_2}$ son dos soluciones linealmente independientes de $L[y]=0$ en $x<0$.

## Resolución

Se fija $x<0$. Entonces $-x>0$ y la potencia $(-x)^r$ está definida para todo $r\in\mathbb{R}$.

**Sustitución directa.** Con $y=(-x)^r$, la **regla de la cadena** da

$$
\begin{aligned}
y' &= r(-x)^{r-1}(-1) = -r(-x)^{r-1}, \\
y'' &= -r(r-1)(-x)^{r-2}(-1) = r(r-1)(-x)^{r-2}.
\end{aligned}
$$

Al sustituir en $L$ resulta

$$
\begin{aligned}
L[(-x)^r]
&= x^2\, r(r-1)(-x)^{r-2} + \alpha x\left[-r(-x)^{r-1}\right] + \beta(-x)^r \\
&= r(r-1)(-x)^2(-x)^{r-2} - \alpha r\, x(-x)^{r-1} + \beta(-x)^r.
\end{aligned}
$$

Como $x=-(-x)$ y $(-x)^2(-x)^{r-2}=(-x)^r$, se tiene $x(-x)^{r-1}=-(-x)^r$. Por tanto

$$
\begin{aligned}
L[(-x)^r]
&= r(r-1)(-x)^r + \alpha r(-x)^r + \beta(-x)^r \\
&= (-x)^r\left[r(r-1)+\alpha r+\beta\right] \\
&= (-x)^r F(r).
\end{aligned}
$$

**Independencia lineal.** Si $r_1$ y $r_2$ son raíces de $F(r)=0$, la identidad anterior da $L[(-x)^{r_i}]=(-x)^{r_i}F(r_i)=0$ para $i=1,2$. El **Wronskiano** de ambas soluciones es

$$
W[(-x)^{r_1},(-x)^{r_2}]
= (-x)^{r_1}\left[-r_2(-x)^{r_2-1}\right] - \left[-r_1(-x)^{r_1-1}\right](-x)^{r_2}
= (r_1-r_2)(-x)^{r_1+r_2-1}.
$$

Como $r_1\ne r_2$ y $(-x)^{r_1+r_2-1}\ne 0$ para $x<0$, el Wronskiano no se anula. En consecuencia, $(-x)^{r_1}$ y $(-x)^{r_2}$ son linealmente independientes en $x<0$.

## Observaciones

Para $x>0$ el mismo cálculo con $y=x^r$ conduce a $L[x^r]=x^r F(r)$. La rama $(-x)^r$ es la que corresponde al intervalo $x<0$.

El argumento cubre el caso de raíces reales distintas. Las raíces complejas o repetidas requieren el tratamiento específico de la ecuación de Euler.

### Método alternativo: cambio de variable $t=-x$

Con $t=-x>0$ y $Y(t)=y(-x)$, la ecuación se transforma en $t^2Y''+\alpha tY'+\beta Y=0$. La solución $Y=t^r$ conduce a la misma ecuación $F(r)=0$, de modo que este camino reutiliza la teoría de la ecuación de Euler en $t>0$.
