
## Enunciado

En cada uno de los problemas 1 a 4, demuestre que la ecuación diferencial dada tiene un punto singular regular en $x = 0$ y determine dos soluciones linealmente independientes para $x > 0$.

1. $x^2 y'' + 2xy' + xy = 0$

## Solución

La ecuación tiene un **punto singular regular** en $x=0$. La **ecuación indicial** es

$$
r(r+1)=0,
$$

con raíces $r_1=0$ y $r_2=-1$. Las dos soluciones linealmente independientes para $x>0$ son

$$
y_1(x)=\sum_{n=0}^{\infty}\frac{(-1)^n x^n}{n!\,(n+1)!}
$$

y

$$
y_2(x)=-y_1(x)\ln x+\frac{1}{x}\left[1+x-\frac{5}{4}x^2+\frac{5}{18}x^3-\frac{47}{1728}x^4+\cdots\right].
$$

La solución general en $x>0$ es $y(x)=C_1y_1(x)+C_2y_2(x)$.

## Resolución

Se escribe la ecuación en forma estándar. Para $x\ne0$,

$$
y''+\frac{2}{x}\,y'+\frac{1}{x}\,y=0,
\qquad p(x)=\frac{2}{x},\qquad q(x)=\frac{1}{x}.
$$

En $x=0$ los productos $xp(x)=2$ y $x^2q(x)=x$ son analíticos y tienen límite finito. Por tanto, $x=0$ es un **punto singular regular**.

Se aplica el **método de Frobenius** con

$$
y=\sum_{n=0}^{\infty}a_nx^{n+r},\qquad a_0\ne0 .
$$

Las derivadas son $y'=\sum_{n\ge0}(n+r)a_nx^{n+r-1}$ y $y''=\sum_{n\ge0}(n+r)(n+r-1)a_nx^{n+r-2}$. Al sustituir, como $(n+r)(n+r-1)+2(n+r)=(n+r)(n+r+1)$,

$$
x^2y''+2xy'+xy=\sum_{n=0}^{\infty}(n+r)(n+r+1)a_nx^{n+r}+\sum_{n=0}^{\infty}a_nx^{n+r+1}.
$$

La potencia más baja, $x^{r}$, proviene solo del primer sumando. Su coeficiente es $r(r+1)a_0$, de modo que la **ecuación indicial** es

$$
r(r+1)=0,
$$

cuyas raíces son

$$
r_1=0,\qquad r_2=-1 .
$$

El coeficiente de $x^{n+r}$ para $n\ge1$ conduce a la **relación de recurrencia**

$$
(n+r)(n+r+1)a_n+a_{n-1}=0
\quad\Longrightarrow\quad
a_n(r)=-\frac{a_{n-1}(r)}{(n+r)(n+r+1)} .
$$

Tomando $a_0=1$ e iterando,

$$
a_n(r)=\frac{(-1)^n}{\prod_{k=1}^{n}(k+r)\prod_{k=1}^{n}(k+r+1)} .
$$

**Raíz mayor $r_1=0$.** La recurrencia se reduce a $a_n=-\dfrac{a_{n-1}}{n(n+1)}$, y por iteración $a_n=\dfrac{(-1)^n}{n!\,(n+1)!}$. Así,

$$
y_1(x)=\sum_{n=0}^{\infty}\frac{(-1)^n x^n}{n!\,(n+1)!}
=1-\frac{x}{2}+\frac{x^2}{12}-\frac{x^3}{144}+\cdots .
$$

**Raíz menor $r_2=-1$.** Las raíces difieren en el entero $N=r_1-r_2=1$, por lo que la segunda solución tiene la forma

$$
y_2(x)=a\,y_1(x)\ln x+x^{-1}\sum_{n=0}^{\infty}c_nx^n,\qquad c_0=1,
$$

con

$$
a=\lim_{r\to-1}(r+1)a_1(r),
\qquad
c_n=\frac{d}{dr}\Big[(r+1)a_n(r)\Big]\Big|_{r=-1}.
$$

Para el coeficiente del logaritmo,

$$
(r+1)a_1(r)=\frac{-1}{r+2},
\qquad
a=\frac{-1}{r+2}\Big|_{r=-1}=-1 .
$$

Para los coeficientes de la serie, de la expresión general de $a_n(r)$,

$$
(r+1)a_n(r)=\frac{(-1)^n}{(r+2)\cdots(r+n)\,(r+2)\cdots(r+n+1)},\qquad n\ge1 .
$$

En $r=-1$ los dos productos valen $(n-1)!$ y $n!$, respectivamente. La derivada logarítmica da

$$
c_n=\frac{(-1)^n}{(n-1)!\,n!}\left(-\sum_{k=1}^{n-1}\frac{1}{k}-\sum_{k=1}^{n}\frac{1}{k}\right)
=\frac{(-1)^{n+1}\,(H_{n-1}+H_n)}{(n-1)!\,n!},
$$

donde $H_m=\sum_{k=1}^{m}\dfrac{1}{k}$ y $H_0=0$. Los primeros coeficientes son

$$
c_1=1,\qquad c_2=-\frac{5}{4},\qquad c_3=\frac{5}{18},\qquad c_4=-\frac{47}{1728}.
$$

Por tanto,

$$
y_2(x)=-y_1(x)\ln x+\frac{1}{x}\left[1+x-\frac{5}{4}x^2+\frac{5}{18}x^3-\frac{47}{1728}x^4+\cdots\right].
$$

Como $r_1-r_2=1\in\mathbb{Z}$, la segunda solución contiene el término logarítmico y es linealmente independiente de $y_1$. La solución general para $x>0$ es

$$
y(x)=C_1y_1(x)+C_2y_2(x).
$$

## Observaciones

El único punto singular es $x=0$, de modo que ambas series convergen para todo $x>0$ (en realidad, para todo $x\ne0$). La solución $y_1$ es analítica en $x=0$; $y_2$ presenta allí una singularidad logarítmica, coherente con el exponente $r_2=-1$.

La ecuación es un caso de la ecuación de Bessel de orden $1$: con el cambio $z=2\sqrt{x}$ se obtiene $y_1(x)=J_1(2\sqrt{x})/\sqrt{x}$ y $y_2$ es proporcional a $Y_1(2\sqrt{x})/\sqrt{x}$.
