
## Enunciado

En cada uno de los problemas 1 a 4, demuestre que la ecuación diferencial dada tiene un punto singular regular en $x = 0$ y determine dos soluciones linealmente independientes para $x > 0$.

3. $x^2 y'' + xy' + 2xy = 0$

## Solución

El punto $x=0$ es un **punto singular regular**. Dos soluciones linealmente independientes para $x>0$ son las funciones de Bessel de orden cero

$$
y_1(x)=J_0\!\left(2\sqrt{2x}\right),\qquad y_2(x)=Y_0\!\left(2\sqrt{2x}\right).
$$

La solución general es

$$
y(x)=C_1J_0\!\left(2\sqrt{2x}\right)+C_2Y_0\!\left(2\sqrt{2x}\right),\qquad x>0.
$$

## Resolución

Para $x\ne 0$ la ecuación se escribe en la forma estándar

$$
y''+\frac{1}{x}y'+\frac{2}{x}y=0,
$$

de modo que $p(x)=\dfrac{1}{x}$ y $q(x)=\dfrac{2}{x}$. En $x=0$ ninguno de los dos coeficientes es analítico, así que $x=0$ es un punto singular. Los productos

$$
x\,p(x)=1,\qquad x^2q(x)=2x
$$

son analíticos en $x=0$. Se cumplen las dos condiciones de regularidad; por tanto, $x=0$ es un **punto singular regular**.

La ecuación indicial es

$$
r(r-1)+p_0r+q_0=r(r-1)+r=r^2=0,
$$

con $p_0=\lim_{x\to 0}x\,p(x)=1$ y $q_0=\lim_{x\to 0}x^2q(x)=0$. Tiene la raíz doble $r=0$.

Para $x>0$ se introduce la variable $t=2\sqrt{2x}$, de manera que $t^2=8x$ y $x=t^2/8$. Entonces

$$
\frac{dt}{dx}=\frac{4}{t},\qquad \frac{d}{dx}=\frac{4}{t}\frac{d}{dt}.
$$

Aplicando la **regla de la cadena** dos veces,

$$
y'=\frac{4}{t}y_t,\qquad
y''=\frac{16}{t^2}y_{tt}-\frac{16}{t^3}y_t,
$$

donde los subíndices denotan derivadas respecto de $t$. Al sustituir en la ecuación,

$$
\begin{aligned}
x^2y'' &= \frac{t^4}{64}\left(\frac{16}{t^2}y_{tt}-\frac{16}{t^3}y_t\right)
        = \frac{t^2}{4}y_{tt}-\frac{t}{4}y_t, \\
xy' &= \frac{t^2}{8}\cdot\frac{4}{t}y_t = \frac{t}{2}y_t, \\
2xy &= \frac{t^2}{4}y.
\end{aligned}
$$

Sumando los tres términos y multiplicando por $4/t^2$,

$$
y_{tt}+\frac{1}{t}y_t+y=0.
$$

Esta es la **ecuación de Bessel** de orden cero, $t^2v''+tv'+(t^2-\nu^2)v=0$ con $\nu=0$. Sus dos soluciones linealmente independientes para $t>0$ son $J_0(t)$ y $Y_0(t)$. Al deshacer el cambio,

$$
y(x)=C_1J_0\!\left(2\sqrt{2x}\right)+C_2Y_0\!\left(2\sqrt{2x}\right).
$$

Las funciones $J_0$ y $Y_0$ son linealmente independientes porque su wronskiano vale $W(J_0,Y_0)(t)=\dfrac{2}{\pi t}\ne 0$ para $t>0$. En consecuencia, $y_1$ y $y_2$ también lo son para $x>0$.

## Observaciones

La solución $J_0$ es analítica en $x=0$; $Y_0$ no está acotada cuando $t\to 0^+$. Por ello $J_0$ es la única solución (salvo un factor constante) regular en el punto singular.

### Método alternativo: serie de Frobenius

El **método de Frobenius** con $y=\sum_{n\ge 0}a_nx^{n+r}$ conduce a la recurrencia $(n+r)^2a_n+2a_{n-1}=0$. Para $r=0$ resulta $a_n=-\dfrac{2a_{n-1}}{n^2}$, es decir,

$$
y_1(x)=\sum_{n=0}^{\infty}\frac{(-2)^n}{(n!)^2}x^n
=1-2x+x^2-\frac{2}{9}x^3+\cdots=J_0\!\left(2\sqrt{2x}\right).
$$

Como $r=0$ es una raíz doble, la segunda solución contiene un logaritmo:

$$
y_2(x)=y_1(x)\ln x+4x-3x^2+\frac{22}{27}x^3+\cdots,
$$

que coincide con $Y_0(2\sqrt{2x})$ salvo una combinación lineal con $y_1$.
