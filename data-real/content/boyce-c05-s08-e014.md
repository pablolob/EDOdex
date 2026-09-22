
## Enunciado

Es posible demostrar que $J_0$ tiene una infinidad de ceros para $x > 0$. En particular, los tres primeros ceros son aproximadamente $2.405$, $5.520$ y $8.653$ (ver la figura 5.9.1). Si se denota por $\lambda_j, j = 1, 2, \dots$, los ceros de $J_0$, se concluye que

$$J_0(\lambda_j x) = \begin{cases} 1, & x = 0, \\ 0, & x = 1. \end{cases}$$

Comprende que $y = J_0(\lambda_i x)$ satisface la ecuación diferencial,

$$y'' + \frac{1}{x} y' + \lambda_i^2 y = 0, \quad x > 0.$$

De donde, demuestre que

$$\int_0^1 x J_0(\lambda_i x) J_0(\lambda_j x) \,dx = 0 \quad \text{si } \lambda_i \neq \lambda_j.$$

Esta importante propiedad de $J_0(\lambda_i x)$, conocida como propiedad de ortogonalidad, es útil al resolver problemas con valores en la frontera. Sugerencia: escriba la ecuación diferencial para $J_0(\lambda_i x)$. Multiplíquela por $x J_0(\lambda_j x)$ y réstela de $x J_0(\lambda_i x)$ multiplicado por la ecuación diferencial para $J_0(\lambda_j x)$; a continuación, integre de 0 a 1.

## Solución

Las funciones $J_0(\lambda_i x)$ son ortogonales en $[0,1]$ respecto al peso $x$:

$$
\int_0^1 x J_0(\lambda_i x) J_0(\lambda_j x)\,dx = 0, \qquad \lambda_i \neq \lambda_j.
$$

## Resolución

Se escriben $u_i(x)=J_0(\lambda_i x)$ y $u_j(x)=J_0(\lambda_j x)$. Por el enunciado, cada una satisface la ecuación de Bessel de orden cero,

$$
u_i''+\frac{1}{x}u_i'+\lambda_i^2u_i=0, \qquad
u_j''+\frac{1}{x}u_j'+\lambda_j^2u_j=0, \qquad x>0.
$$

Se multiplica la primera ecuación por $x u_j$ y la segunda por $x u_i$:

$$
\begin{aligned}
x u_j u_i''+u_j u_i'+\lambda_i^2 x u_i u_j &= 0, \\
x u_i u_j''+u_i u_j'+\lambda_j^2 x u_i u_j &= 0.
\end{aligned}
$$

Al restar la segunda de la primera se cancelan los términos con $u_i u_j$ salvo el que contiene la diferencia de los cuadrados de los ceros:

$$
x\left(u_j u_i''-u_i u_j''\right)+\left(u_j u_i'-u_i u_j'\right)+\left(\lambda_i^2-\lambda_j^2\right)x u_i u_j=0.
$$

Los dos primeros términos forman la derivada de un producto. En efecto, por la **regla del producto**,

$$
\frac{d}{dx}\left[x\left(u_j u_i'-u_i u_j'\right)\right]
=x\left(u_j u_i''-u_i u_j''\right)+\left(u_j u_i'-u_i u_j'\right).
$$

La ecuación se escribe entonces como una derivada exacta más el término restante:

$$
\frac{d}{dx}\left[x\left(u_j u_i'-u_i u_j'\right)\right]+\left(\lambda_i^2-\lambda_j^2\right)x u_i u_j=0.
$$

Se integra de $0$ a $1$ y se aplica el **teorema fundamental del cálculo**:

$$
\left[x\left(u_j u_i'-u_i u_j'\right)\right]_0^1
+\left(\lambda_i^2-\lambda_j^2\right)\int_0^1 x u_i u_j\,dx=0.
$$

Resta comprobar que el término de frontera se anula. En $x=1$ se tiene $u_i(1)=J_0(\lambda_i)=0$ y $u_j(1)=J_0(\lambda_j)=0$, pues $\lambda_i$ y $\lambda_j$ son ceros de $J_0$; por tanto, el corchete evaluado en $1$ es $0$. En $x=0$ se tiene $u_i(0)=u_j(0)=J_0(0)=1$ y $u_i'(0)=\lambda_i J_0'(0)=0$, $u_j'(0)=\lambda_j J_0'(0)=0$, porque $J_0'(0)=0$. El corchete es entonces $1\cdot 0-1\cdot 0=0$ y, multiplicado por $x=0$, también se anula. Así, el término de frontera completo vale $0$.

Queda

$$
\left(\lambda_i^2-\lambda_j^2\right)\int_0^1 x J_0(\lambda_i x)J_0(\lambda_j x)\,dx=0.
$$

Como los ceros son positivos y distintos, $\lambda_i\neq\lambda_j$ implica $\lambda_i^2-\lambda_j^2\neq0$. Dividiendo por ese factor se obtiene la propiedad de ortogonalidad,

$$
\int_0^1 x J_0(\lambda_i x)J_0(\lambda_j x)\,dx=0, \qquad \lambda_i\neq\lambda_j.
$$

## Observaciones

La propiedad es la ortogonalidad con peso $x$ de las funciones propias del problema singular de Sturm-Liouville

$$
\left(x y'\right)'+\lambda^2 x y=0, \qquad y \text{ acotada en } x=0,\quad y(1)=0,
$$

cuyos valores propios son $\lambda_j^2$ y cuyas funciones propias son $J_0(\lambda_j x)$. El peso $x$ es el factor $x$ que aparece en la integral.

Para $i=j$ el mismo cálculo no da información, pues el factor $\lambda_i^2-\lambda_j^2$ se anula. La norma de cada función propia vale

$$
\int_0^1 x J_0(\lambda_i x)^2\,dx=\frac{1}{2}J_1(\lambda_i)^2,
$$

resultado que completa la relación de ortogonalidad y permite normalizar las funciones propias.

Los tres primeros ceros positivos de $J_0$ son aproximadamente $2.405$, $5.520$ y $8.653$, de modo que los primeros valores propios del problema son $2.405^2$, $5.520^2$ y $8.653^2$.
