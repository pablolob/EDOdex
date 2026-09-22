
## Enunciado

En cada uno de los problemas 1 a 4, demuestre que la ecuación diferencial dada tiene un punto singular regular en $x = 0$ y determine dos soluciones linealmente independientes para $x > 0$.

2. $x^2 y'' + 3xy' + (1 + x)y = 0$

## Solución

La ecuación tiene un **punto singular regular** en $x=0$. Su **ecuación indicial** es

$$
(r+1)^2=0,
$$

con la raíz doble $r=-1$. Dos soluciones linealmente independientes para $x>0$ son

$$
y_1(x)=x^{-1}\sum_{n=0}^{\infty}\frac{(-1)^n}{(n!)^2}x^n
=x^{-1}\left(1-x+\frac{x^2}{4}-\frac{x^3}{36}+\cdots\right)
$$

y

$$
y_2(x)=y_1(x)\ln x+2x^{-1}\sum_{n=1}^{\infty}\frac{(-1)^{n+1}H_n}{(n!)^2}x^n,
\qquad H_n=1+\frac12+\cdots+\frac1n .
$$

## Resolución

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. Para $x\ne0$,

$$
y''+\frac{3}{x}y'+\frac{1+x}{x^2}y=0,\qquad p(x)=\frac{3}{x},\qquad q(x)=\frac{1+x}{x^2}.
$$

Los productos

$$
x\,p(x)=3,\qquad x^2q(x)=1+x
$$

son analíticos en $x=0$ (el primero es constante y el segundo un polinomio). Se satisfacen las dos condiciones de regularidad, luego $x=0$ es un **punto singular regular**; además es el único punto singular, pues es el único cero del coeficiente de $y''$.

Por el **método de Frobenius** se propone

$$
y=\sum_{n=0}^{\infty}a_nx^{n+r},\qquad a_0\ne0 .
$$

Al sustituir y agrupar potencias de $x$,

$$
x^2y''+3xy'+(1+x)y
=\sum_{n=0}^{\infty}\bigl[(n+r)(n+r-1)+3(n+r)+1\bigr]a_nx^{n+r}
+\sum_{n=0}^{\infty}a_nx^{n+r+1}.
$$

El corchete se factoriza como $(n+r+1)^2$. Reindexando el segundo sumando,

$$
\sum_{n=0}^{\infty}(n+r+1)^2a_nx^{n+r}+\sum_{n=1}^{\infty}a_{n-1}x^{n+r}=0 .
$$

El coeficiente de $x^{r}$ conduce a la **ecuación indicial**

$$
(r+1)^2a_0=0\quad\Longrightarrow\quad (r+1)^2=0,
$$

con la raíz doble $r=-1$. Para $n\ge1$ se anula el coeficiente de $x^{n+r}$:

$$
(n+r+1)^2a_n+a_{n-1}=0
\quad\Longrightarrow\quad
a_n(r)=-\frac{a_{n-1}(r)}{(n+r+1)^2}.
$$

Con $a_0=1$, iterando se obtiene

$$
a_n(r)=\frac{(-1)^n}{(r+2)^2(r+3)^2\cdots(r+n+1)^2}
=\frac{(-1)^n}{\prod_{k=2}^{n+1}(r+k)^2}.
$$

**Primera solución.** Para $r=-1$ se tiene $\prod_{k=2}^{n+1}(k-1)^2=(n!)^2$, de modo que $a_n(-1)=\dfrac{(-1)^n}{(n!)^2}$ y

$$
y_1(x)=x^{-1}\sum_{n=0}^{\infty}\frac{(-1)^n}{(n!)^2}x^n.
$$

**Segunda solución.** Como las raíces de la ecuación indicial coinciden, $r_1=r_2=-1$, la segunda solución tiene la forma

$$
y_2(x)=y_1(x)\ln x+x^{-1}\sum_{n=1}^{\infty}b_nx^n,
\qquad b_n=a_n'(-1),
$$

donde $a_n'(r)$ es la derivada de los coeficientes respecto del exponente $r$. De

$$
a_n(r)=\frac{(-1)^n}{\prod_{k=2}^{n+1}(r+k)^2}
$$

resulta

$$
a_n'(r)=-2a_n(r)\sum_{k=2}^{n+1}\frac{1}{r+k}.
$$

Al evaluar en $r=-1$,

$$
b_n=a_n'(-1)=-2\,\frac{(-1)^n}{(n!)^2}\sum_{j=1}^{n}\frac{1}{j}
=\frac{2(-1)^{n+1}H_n}{(n!)^2},
\qquad H_n=\sum_{j=1}^{n}\frac{1}{j}.
$$

Por tanto,

$$
y_2(x)=y_1(x)\ln x+2x^{-1}\sum_{n=1}^{\infty}\frac{(-1)^{n+1}H_n}{(n!)^2}x^n
=y_1(x)\ln x+x^{-1}\left(2x-\frac34x^2+\frac{11}{108}x^3-\cdots\right).
$$

Las dos soluciones son linealmente independientes: $y_1$ no contiene término logarítmico y $y_2$ sí, de modo que su cociente no es constante. La solución general para $x>0$ es

$$
y(x)=C_1y_1(x)+C_2y_2(x).
$$

## Observaciones

La raíz de la ecuación indicial es doble, $r_1=r_2=-1$. Este es el caso en que la segunda solución de Frobenius incorpora necesariamente un término con $\ln x$; la serie que lo acompaña se obtiene derivando los coeficientes $a_n(r)$ respecto de $r$ y evaluando en $r=r_1$.

La serie que define $y_1$ converge para todo $x$, y la de $y_2$ también; ambas soluciones son válidas en $x>0$, ya que $x=0$ es el único punto singular y el logaritmo solo está definido allí para $x>0$.
