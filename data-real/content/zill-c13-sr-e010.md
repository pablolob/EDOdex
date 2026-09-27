
## Enunciado

Resuelva el problema con valores en la frontera
$$\frac{\partial^2 u}{\partial r^2} + \frac{1}{r}\frac{\partial u}{\partial r} + \frac{\partial^2 u}{\partial z^2} = 0, \quad 0 < r < 1, \quad 0 < z < 1$$
$$\left.\frac{\partial u}{\partial r}\right|_{r=1} = 0, \quad 0 < z < 1$$
$$u(r,0) = f(r), \quad u(r,1) = g(r), \quad 0 < r < 1.$$

## Solución

La solución es

$$
u(r,z)=a_0(1-z)+c_0z+\sum_{n=1}^{\infty}\frac{a_n\sinh\!\big(\alpha_n(1-z)\big)+c_n\sinh(\alpha_n z)}{\sinh\alpha_n}\,J_0(\alpha_n r),
$$

donde $\alpha_1<\alpha_2<\cdots$ son los ceros positivos de $J_1$ y

$$
\begin{aligned}
a_0&=2\int_0^1 f(r)\,r\,dr, & c_0&=2\int_0^1 g(r)\,r\,dr, \\
a_n&=\frac{2}{J_0(\alpha_n)^2}\int_0^1 f(r)J_0(\alpha_n r)\,r\,dr, &
c_n&=\frac{2}{J_0(\alpha_n)^2}\int_0^1 g(r)J_0(\alpha_n r)\,r\,dr.
\end{aligned}
$$

La fórmula es válida en $0\le r\le 1$, $0\le z\le 1$.

## Resolución

La ecuación es la de Laplace en coordenadas cilíndricas para una función independiente de $\theta$. Se aplica **separación de variables** con $u(r,z)=R(r)Z(z)$. Al sustituir en la ecuación y dividir por $RZ$ resulta

$$
\frac{R''+\frac{1}{r}R'}{R}=-\frac{Z''}{Z}=\lambda,
$$

de modo que cada miembro es igual a una misma constante. La única condición de frontera homogénea actúa en $r$; por eso el problema con valores propios se plantea en la variable radial. La elección $\lambda=-\alpha^2$ conduce a soluciones radiales oscilatorias y a las ecuaciones

$$
r^2R''+rR'+\alpha^2r^2R=0,\qquad Z''-\alpha^2Z=0.
$$

Para $\alpha>0$, la ecuación radial es la **ecuación de Bessel** de orden cero, con solución general $R=C_1J_0(\alpha r)+C_2Y_0(\alpha r)$. La finitud en $r=0$ obliga a $C_2=0$. La condición $R'(1)=0$, junto con $J_0'=-J_1$, exige $J_1(\alpha)=0$. Por tanto $\alpha=\alpha_n$, los ceros positivos de $J_1$, y las autofunciones radiales son $R_n(r)=J_0(\alpha_n r)$. La ecuación en $z$ da

$$
Z_n(z)=A_n\cosh(\alpha_n z)+B_n\sinh(\alpha_n z).
$$

Para $\alpha=0$ la ecuación radial se reduce a $(rR')'=0$, con $R=C_1+C_2\ln r$. La finitud en $r=0$ deja $R_0(r)$ constante, que satisface $R_0'(1)=0$. La ecuación en $z$ es $Z_0''=0$, de donde $Z_0(z)=A_0+B_0z$. Por **superposición**,

$$
u(r,z)=A_0+B_0z+\sum_{n=1}^{\infty}\big(A_n\cosh(\alpha_n z)+B_n\sinh(\alpha_n z)\big)J_0(\alpha_n r).
$$

Las funciones $1,J_0(\alpha_1 r),J_0(\alpha_2 r),\dots$ son ortogonales en $[0,1]$ con peso $r$:

$$
\int_0^1 J_0(\alpha_n r)J_0(\alpha_m r)\,r\,dr=0\quad(n\ne m),
\qquad
\int_0^1 J_0(\alpha_n r)\,r\,dr=\frac{J_1(\alpha_n)}{\alpha_n}=0.
$$

También $\int_0^1 J_0(\alpha_n r)^2\,r\,dr=\frac{1}{2}J_0(\alpha_n)^2$. Al expandir las condiciones de frontera,

$$
f(r)=a_0+\sum_{n=1}^{\infty}a_nJ_0(\alpha_n r),
\qquad
g(r)=c_0+\sum_{n=1}^{\infty}c_nJ_0(\alpha_n r),
$$

la ortogonalidad con peso $r$ proporciona los coeficientes $a_0,c_0,a_n,c_n$ escritos en la solución. Al imponer $u(r,0)=f(r)$ se obtiene $A_0=a_0$ y $A_n=a_n$. Al imponer $u(r,1)=g(r)$ se obtiene $A_0+B_0=c_0$, es decir $B_0=c_0-a_0$, y $A_n\cosh\alpha_n+B_n\sinh\alpha_n=c_n$. La combinación de $\cosh(\alpha_n z)$ y $\sinh(\alpha_n z)$ que toma el valor $a_n$ en $z=0$ y $c_n$ en $z=1$ es

$$
a_n\frac{\sinh\!\big(\alpha_n(1-z)\big)}{\sinh\alpha_n}
+c_n\frac{\sinh(\alpha_n z)}{\sinh\alpha_n}.
$$

Al sustituir y reunir el término constante se llega a la expresión de la solución. Cada término es armónico: la parte constante y la lineal en $z$ lo son trivialmente, y para los demás, $J_0(\alpha_n r)$ satisface $J_0''+\frac{1}{r}J_0'=-\alpha_n^2J_0$ y $\sinh(\alpha_n z)$ satisface $(\sinh\alpha_n z)''=\alpha_n^2\sinh(\alpha_n z)$. En $r=1$ cada $J_0(\alpha_n r)$ tiene derivada $-\alpha_nJ_1(\alpha_n)=0$, y en $z=0$ y $z=1$ la serie reproduce $f(r)$ y $g(r)$.

## Observaciones

El término $a_0(1-z)+c_0z$ es la parte lineal en $z$; los coeficientes $a_0$ y $c_0$ son los valores promedio de $f$ y $g$ en el disco, ponderados con peso $r$.

La condición de frontera aislante en $r=1$ selecciona las autofunciones $J_0(\alpha_n r)$ con $\alpha_n$ los ceros de $J_1$. Si la superficie lateral se mantuviera a temperatura cero, los valores propios serían los ceros de $J_0$, como ocurre en el problema de Dirichlet del disco.

La solución supone $f$ y $g$ continuas a trozos; en un punto de discontinuidad la serie converge al valor promedio entre los límites laterales.
