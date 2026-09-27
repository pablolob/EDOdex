
## Enunciado

Resuelva la ecuación de Laplace para una placa rectangular sujeta a las condiciones de valor de frontera
$$\begin{aligned}u(0, y) &= 0, \quad u(\pi, y) = 0, \quad 0 < y < \pi \\ u(x, 0) &= x^2 - \pi x, \quad u(x, \pi) = x^2 - \pi x, \quad 0 < x < \pi\end{aligned}$$

## Solución

$$
u(x,y)=-\frac{8}{\pi}\sum_{k=0}^{\infty}
\frac{\sin\!\big((2k+1)x\big)\;
\cosh\!\Big((2k+1)\big(y-\tfrac{\pi}{2}\big)\Big)}
{(2k+1)^{3}\;
\cosh\!\Big(\tfrac{(2k+1)\pi}{2}\Big)}.
$$

## Resolución

La ecuación es la **ecuación de Laplace**, una EDP de **segundo orden**, **lineal** y **homogénea**. Las condiciones en $x=0$ y en $x=\pi$ son homogéneas, por lo que el problema de valores propios se plantea en la variable $x$. Se aplica **separación de variables** con el producto

$$
u(x,y)=X(x)\,Y(y).
$$

Al sustituir en $u_{xx}+u_{yy}=0$ resulta $X''Y+XY''=0$. Al dividir entre $XY$, cada miembro depende de una sola variable, de modo que ambos igualan una constante de separación:

$$
\frac{X''}{X}=-\frac{Y''}{Y}=-\lambda.
$$

Se obtienen dos EDO lineales con coeficientes constantes,

$$
X''+\lambda X=0,\qquad Y''-\lambda Y=0.
$$

**Problema de valores propios en $X$.** Las condiciones homogéneas se reparten como $X(0)=X(\pi)=0$. Si $\lambda\le 0$, la solución de $X''+\lambda X=0$ es lineal o una combinación de funciones hiperbólicas, y las condiciones de frontera fuerzan $X\equiv 0$. Para $\lambda=\alpha^{2}>0$,

$$
X(x)=c_1\cos(\alpha x)+c_2\sin(\alpha x).
$$

La condición $X(0)=0$ da $c_1=0$; entonces $X(\pi)=0$ exige $\sin(\alpha\pi)=0$, es decir $\alpha=n$. Los valores y funciones propias son

$$
\lambda_n=n^{2},\qquad X_n(x)=\sin(nx),\qquad n=1,2,\dots
$$

**Ecuación en $Y$.** Para cada $n$, la ecuación $Y''-n^{2}Y=0$ tiene por solución

$$
Y_n(y)=A_n\cosh(ny)+B_n\sinh(ny).
$$

Por el **principio de superposición**,

$$
u(x,y)=\sum_{n=1}^{\infty}\big[A_n\cosh(ny)+B_n\sinh(ny)\big]\sin(nx).
$$

**Condiciones en $y=0$ y $y=\pi$.** Ambas fronteras llevan el mismo dato $f(x)=x^{2}-\pi x$. Al evaluar en $y=0$,

$$
u(x,0)=\sum_{n=1}^{\infty}A_n\sin(nx)=f(x),
$$

de modo que $A_n=b_n$, el coeficiente $n$-ésimo del desarrollo en serie de senos de $f$ en $(0,\pi)$:

$$
b_n=\frac{2}{\pi}\int_0^{\pi}(x^{2}-\pi x)\sin(nx)\,dx.
$$

Integrando por partes dos veces,

$$
\int_0^{\pi}(x^{2}-\pi x)\sin(nx)\,dx=\frac{2\big((-1)^{n}-1\big)}{n^{3}},
$$

por lo que

$$
b_n=\frac{4\big((-1)^{n}-1\big)}{\pi n^{3}}.
$$

El coeficiente se anula para $n$ par y vale $b_n=-\dfrac{8}{\pi n^{3}}$ para $n$ impar.

Al evaluar ahora en $y=\pi$,

$$
A_n\cosh(n\pi)+B_n\sinh(n\pi)=b_n.
$$

Como $A_n=b_n$, se despeja

$$
B_n=b_n\,\frac{1-\cosh(n\pi)}{\sinh(n\pi)}=-b_n\tanh\!\Big(\frac{n\pi}{2}\Big),
$$

usando $\tanh\!\big(\tfrac{n\pi}{2}\big)=\dfrac{\cosh(n\pi)-1}{\sinh(n\pi)}$. Con esto,

$$
Y_n(y)=b_n\left[\cosh(ny)-\tanh\!\Big(\frac{n\pi}{2}\Big)\sinh(ny)\right].
$$

La identidad $\cosh A\cosh B-\sinh A\sinh B=\cosh(A-B)$ con $A=\tfrac{n\pi}{2}$ y $B=ny$ reescribe el corchete como

$$
Y_n(y)=b_n\,\frac{\cosh\!\big(n(y-\tfrac{\pi}{2})\big)}{\cosh\!\big(\tfrac{n\pi}{2}\big)}.
$$

Sustituyendo $b_n$ solo sobre los $n$ impares, $n=2k+1$, la solución es

$$
u(x,y)=-\frac{8}{\pi}\sum_{k=0}^{\infty}
\frac{\sin\!\big((2k+1)x\big)\;
\cosh\!\Big((2k+1)\big(y-\tfrac{\pi}{2}\big)\Big)}
{(2k+1)^{3}\;
\cosh\!\Big(\tfrac{(2k+1)\pi}{2}\Big)}.
$$

**Comprobación.** Cada modo $u_n=\sin(nx)\cosh\!\big(n(y-\tfrac{\pi}{2})\big)$ cumple $u_{n,xx}+u_{n,yy}=-n^{2}u_n+n^{2}u_n=0$; por linealidad la serie satisface la ecuación de Laplace en el interior. En $x=0$ y $x=\pi$ cada término se anula, luego $u(0,y)=u(\pi,y)=0$. En $y=0$ y en $y=\pi$ el cociente hiperbólico vale $1$ y la serie se reduce al desarrollo en senos de $f(x)$, cuyos coeficientes no nulos son los $b_n$ con $n$ impar. Entonces $u(x,0)=u(x,\pi)=x^{2}-\pi x$, que es la condición pedida.

## Observaciones

El dato $f(x)=x^{2}-\pi x$ se anula en $x=0$ y en $x=\pi$, de modo que los valores que imponen las fronteras $x=0,\pi$ y $y=0,\pi$ coinciden en las cuatro esquinas; no hay discontinuidad en la frontera.

Como $f$ es simétrica respecto a $x=\pi/2$, solo sobreviven los armónicos impares. Además, el dato es idéntico en las dos fronteras horizontales; por eso $A_n=b_n$ y la solución resulta simétrica respecto a la recta $y=\pi/2$.

Los coeficientes decaen como $n^{-3}$ y el cociente de cosenos hiperbólicos está acotado, así que la serie converge absoluta y uniformemente en el rectángulo cerrado. El problema de Dirichlet tiene solución única, de manera que la serie obtenida es la solución del problema.
