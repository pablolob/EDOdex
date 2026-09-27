
## Enunciado

Resuelva el problema del valor en la frontera
$$\frac{\partial^2 u}{\partial r^2} + \frac{1}{r}\frac{\partial u}{\partial r} + \frac{\partial^2 u}{\partial z^2} = 0, \quad 0 < r < 1, \quad z > 0$$
$$u(1, z) = 0, \quad z > 0$$
$$u(r, 0) = 1 - r^2, \quad 0 < r < 1.$$
[Sugerencia: Véase el problema 10 en los ejercicios 11.5.]

## Solución

La solución es

$$
u(r,z)=\sum_{n=1}^{\infty}\frac{8}{\alpha_n^{3}J_1(\alpha_n)}\,J_0(\alpha_n r)\,e^{-\alpha_n z},
$$

donde $\alpha_n$ son los ceros positivos de $J_0$, con $0\le r\le 1$ y $z\ge 0$.

## Resolución

La ecuación es la **ecuación de Laplace** en coordenadas cilíndricas con simetría axial: la incógnita $u$ no depende de $\theta$. Se aplica **separación de variables** con el producto $u(r,z)=R(r)Z(z)$. Las derivadas parciales son $u_{rr}=R''Z$, $u_r=R'Z$ y $u_{zz}=RZ''$. Al sustituir resulta

$$
R''Z+\frac{1}{r}R'Z+RZ''=0.
$$

Se divide por el producto no nulo $RZ$ y se separan las variables:

$$
\frac{R''+\frac{1}{r}R'}{R}=-\frac{Z''}{Z}.
$$

El miembro izquierdo depende solo de $r$ y el derecho solo de $z$, de modo que ambos igualan una constante. Se denota esa constante con $-\alpha^{2}$:

$$
\frac{R''+\frac{1}{r}R'}{R}=-\alpha^{2},\qquad \frac{Z''}{Z}=\alpha^{2}.
$$

La ecuación axial es $Z''-\alpha^{2}Z=0$, con solución

$$
Z(z)=Ae^{\alpha z}+Be^{-\alpha z}.
$$

No hay una condición de frontera en $z\to\infty$, pero la solución debe permanecer acotada en esa dirección. El término $e^{\alpha z}$ crece sin límite, por lo que se toma $A=0$ y $Z(z)=Be^{-\alpha z}$. Esto requiere $\alpha>0$; el caso $\alpha=0$ da $Z=A+Bz$, también no acotado, y valores negativos del cuadrado no generan funciones propias que satisfagan $R(1)=0$.

La ecuación radial se multiplica por $r^{2}$ y queda

$$
r^{2}R''+rR'+\alpha^{2}r^{2}R=0.
$$

Con el cambio de variable $x=\alpha r$ se transforma en

$$
x^{2}\frac{d^{2}R}{dx^{2}}+x\frac{dR}{dx}+x^{2}R=0,
$$

que es la **ecuación de Bessel** de orden cero. Su solución general es $R(r)=CJ_0(\alpha r)+DY_0(\alpha r)$. La finitud de $u$ en el eje $r=0$ descarta $Y_0$, que diverge en el origen, de modo que $D=0$. La condición $u(1,z)=0$ exige $R(1)=0$, es decir,

$$
J_0(\alpha)=0.
$$

Si $\alpha_1<\alpha_2<\cdots$ son los ceros positivos de $J_0$, los valores propios son $\alpha=\alpha_n$ y las funciones propias son $J_0(\alpha_n r)$.

Por el **principio de superposición**,

$$
u(r,z)=\sum_{n=1}^{\infty}A_nJ_0(\alpha_n r)e^{-\alpha_n z}.
$$

Al imponer $z=0$ queda la condición

$$
1-r^{2}=\sum_{n=1}^{\infty}A_nJ_0(\alpha_n r),\qquad 0<r<1.
$$

Esta es la expansión de $1-r^{2}$ en **serie de Fourier-Bessel**. Por la **ortogonalidad** de las funciones $J_0(\alpha_n r)$ con peso $r$ en $[0,1]$,

$$
A_n=\frac{\displaystyle\int_0^{1} r(1-r^{2})J_0(\alpha_n r)\,dr}
{\displaystyle\int_0^{1} r\,J_0(\alpha_n r)^{2}\,dr}.
$$

La integral del denominador es la normalización de Neumann: con $J_0(\alpha_n)=0$,

$$
\int_0^{1}r\,J_0(\alpha_n r)^{2}\,dr=\frac{1}{2}J_1(\alpha_n)^{2}.
$$

Para el numerador se emplean las relaciones $\frac{d}{dx}\big(xJ_1(x)\big)=xJ_0(x)$ y $J_2(x)=\frac{2}{x}J_1(x)-J_0(x)$. Con $x=\alpha_n r$,

$$
\int_0^{1}r\,J_0(\alpha_n r)\,dr=\frac{1}{\alpha_n^{2}}\int_0^{\alpha_n}xJ_0(x)\,dx=\frac{J_1(\alpha_n)}{\alpha_n},
$$

$$
\begin{aligned}
\int_0^{1}r^{3}J_0(\alpha_n r)\,dr
&=\frac{1}{\alpha_n^{4}}\int_0^{\alpha_n}x^{3}J_0(x)\,dx \\
&=\frac{1}{\alpha_n^{4}}\Big[x^{3}J_1(x)-2x^{2}J_2(x)\Big]_0^{\alpha_n} \\
&=\frac{\alpha_n^{3}J_1(\alpha_n)-2\alpha_n^{2}J_2(\alpha_n)}{\alpha_n^{4}} \\
&=\frac{J_1(\alpha_n)(\alpha_n^{2}-4)}{\alpha_n^{3}},
\end{aligned}
$$

pues $J_2(\alpha_n)=\frac{2}{\alpha_n}J_1(\alpha_n)$ por ser $J_0(\alpha_n)=0$. El numerador vale entonces

$$
\int_0^{1}r(1-r^{2})J_0(\alpha_n r)\,dr
=\frac{J_1(\alpha_n)}{\alpha_n}-\frac{J_1(\alpha_n)(\alpha_n^{2}-4)}{\alpha_n^{3}}
=\frac{4J_1(\alpha_n)}{\alpha_n^{3}}.
$$

Al dividir por la normalización,

$$
A_n=\frac{4J_1(\alpha_n)/\alpha_n^{3}}{\frac{1}{2}J_1(\alpha_n)^{2}}
=\frac{8}{\alpha_n^{3}J_1(\alpha_n)}.
$$

Sustituyendo en la serie se obtiene

$$
u(r,z)=\sum_{n=1}^{\infty}\frac{8}{\alpha_n^{3}J_1(\alpha_n)}\,J_0(\alpha_n r)\,e^{-\alpha_n z}.
$$

La solución es finita en $r=0$, se anula en $r=1$ porque $J_0(\alpha_n)=0$, y reproduce $u(r,0)=1-r^{2}$ por construcción de los coeficientes.

## Observaciones

La sugerencia remite a la expansión de $1-x^{2}$ en serie de Fourier-Bessel del ejercicio 11.5, que proporciona directamente los coeficientes aquí reobtenidos.

Como $J_0(\alpha_n)=0$, la recurrencia $J_2(\alpha_n)=\frac{2}{\alpha_n}J_1(\alpha_n)$ permite el coeficiente alternativo $A_n=\dfrac{16}{\alpha_n^{4}J_2(\alpha_n)}$.

Los ceros $\alpha_n$ de $J_0$ no son múltiplos enteros, de modo que la serie no es una serie de Fourier en senos. El término $e^{-\alpha_n z}$ muestra que la temperatura decae al aumentar $z$; el perfil de mayor amplitud está en la base $z=0$.
