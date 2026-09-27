
## Enunciado

Clasifique cada ecuación diferencial como separable, exacta, lineal, homogénea o Bernoulli. Algunas ecuaciones pueden ser de más de una clase. No las resuelva.

a) $\dfrac{dy}{dx} = \dfrac{x - y}{x}$
b) $\dfrac{dy}{dx} = \dfrac{1}{y - x}$
c) $(x + 1)\dfrac{dy}{dx} = -y + 10$
d) $\dfrac{dy}{dx} = \dfrac{1}{x(x - y)}$
e) $\dfrac{dy}{dx} = \dfrac{y^2 + y}{x^2 + x}$
f) $\dfrac{dy}{dx} = 5y + y^2$
g) $y \, dx = (y - xy^2) \, dy$
h) $x \dfrac{dy}{dx} = y e^{x/y} - x$
i) $xy y' + y^2 = 2x$
j) $2xy y' + y^2 = 2x^2$
k) $y \, dx + x \, dy = 0$
l) $\left(x^2 + \dfrac{2y}{x}\right) dx = (3 - \ln x^2) \, dy$
m) $\dfrac{dy}{dx} = \dfrac{x}{y} + \dfrac{y}{x} + 1$
n) $\dfrac{y}{x^2}\dfrac{dy}{dx} + e^{2x^3+y^2} = 0$

## Solución

La clasificación de cada inciso es:

- a) **exacta**, **lineal** (en $y$), **homogénea**.
- b) **lineal** (en $x$).
- c) **separable**, **exacta**, **lineal** (en $y$).
- d) **Bernoulli** (en $x$, con $n=2$).
- e) **separable**, **Bernoulli** (en $y$, con $n=2$).
- f) **separable**, **Bernoulli** (en $y$, con $n=2$).
- g) **lineal** (en $x$).
- h) **homogénea**.
- i) **Bernoulli** (en $y$, con $n=-1$).
- j) **exacta**, **homogénea**, **Bernoulli** (en $y$, con $n=-1$).
- k) **separable**, **exacta**, **lineal** (en $y$ y en $x$), **homogénea**.
- l) **exacta**, **lineal** (en $y$).
- m) **homogénea**.
- n) **separable**.

En esta clasificación el nombre de **Bernoulli** se reserva para $n\ne 0,1$; los casos $n=0$ (lineal) y $n=1$ (separable) son degenerados y no se cuentan como tales.

## Resolución

Se emplean las definiciones siguientes. Una ecuación es **separable** si admite la forma $y'=g(x)h(y)$. Es **exacta** si, al escribirla como $M(x,y)\,dx+N(x,y)\,dy=0$ con las fracciones simplificadas, cumple $M_y=N_x$. Es **lineal** si admite la forma $y'+P(x)y=Q(x)$, y también se reconoce la linealidad en $x$. Es **homogénea** si $f(tx,ty)=f(x,y)$. Es de **Bernoulli** si admite la forma $y'+P(x)y=Q(x)y^n$ con $n\ne 0,1$.

**a)** $y'=1-\dfrac{y}{x}$. El miembro derecho no factoriza como $g(x)h(y)$, luego no es separable. Es lineal en $y$:

$$
y'+\frac{1}{x}y=1.
$$

Escrita como $(x-y)\,dx-x\,dy=0$, se tiene $M_y=-1=N_x$; es exacta. Además $f(tx,ty)=\dfrac{tx-ty}{tx}=\dfrac{x-y}{x}$, luego es homogénea de grado $0$. Resulta **exacta**, **lineal** y **homogénea**.

**b)** $y'=\dfrac{1}{y-x}$. No es separable ni exacta; con $dx-(y-x)\,dy=0$ se obtiene $M_y=0$ y $N_x=1$. No es homogénea, pues $f(tx,ty)=\dfrac{1}{t(y-x)}$. Al invertirla,

$$
\frac{dx}{dy}=y-x \quad\Longrightarrow\quad x'+x=y,
$$

que es lineal en $x$. Resulta **lineal** en $x$.

**c)** $(x+1)y'=-y+10$. Se separa como $\dfrac{dy}{10-y}=\dfrac{dx}{x+1}$; es separable. Escrita como $(y-10)\,dx+(x+1)\,dy=0$ se tiene $M_y=1=N_x$; es exacta. Es lineal en $y$:

$$
y'+\frac{1}{x+1}y=\frac{10}{x+1}.
$$

Resulta **separable**, **exacta** y **lineal**.

**d)** $y'=\dfrac{1}{x(x-y)}$. No es separable, exacta ni homogénea. Al invertirla,

$$
\frac{dx}{dy}=x(x-y)=x^2-xy \quad\Longrightarrow\quad x'+y\,x=x^2,
$$

que es de Bernoulli en $x$ con $n=2$. Resulta **Bernoulli** en $x$.

**e)** $y'=\dfrac{y^2+y}{x^2+x}=\dfrac{1}{x^2+x}\,y(y+1)$. Es separable:

$$
\frac{dy}{y(y+1)}=\frac{dx}{x(x+1)}.
$$

Reordenando,

$$
y'-\frac{1}{x^2+x}y=\frac{1}{x^2+x}y^2,
$$

que es de Bernoulli en $y$ con $n=2$. No es exacta, porque $M_y=2y+1$ y $N_x=-(2x+1)$. Resulta **separable** y **Bernoulli**.

**f)** $y'=y^2+5y=y(y+5)$. Es separable, pues $\dfrac{dy}{y(y+5)}=dx$. Además

$$
y'-5y=y^2,
$$

que es de Bernoulli con $n=2$. Resulta **separable** y **Bernoulli**.

**g)** $y\,dx=(y-xy^2)\,dy$. Para $y\ne 0$ equivale a $\dfrac{dx}{dy}=1-xy$, es decir,

$$
x'+y\,x=1,
$$

lineal en $x$. No es exacta, porque $M=y$ y $N=xy^2-y$ dan $M_y=1$ y $N_x=y^2$. Resulta **lineal** en $x$.

**h)** $xy'=ye^{x/y}-x$, o $y'=\dfrac{y}{x}e^{x/y}-1$. Al sustituir $x\to tx$, $y\to ty$ el miembro derecho no cambia, luego es homogénea de grado $0$. No admite las formas separable, exacta, lineal o de Bernoulli. Resulta **homogénea**.

**i)** $xyy'+y^2=2x$. Al dividir por $xy$,

$$
y'+\frac{1}{x}y=2y^{-1},
$$

que es de Bernoulli con $n=-1$. La forma $(y^2-2x)\,dx+xy\,dy=0$ da $M_y=2y\ne y=N_x$, luego no es exacta. Resulta **Bernoulli**.

**j)** $2xyy'+y^2=2x^2$. Al dividir por $2xy$,

$$
y'+\frac{1}{2x}y=x\,y^{-1},
$$

que es de Bernoulli con $n=-1$. Escrita como $(y^2-2x^2)\,dx+2xy\,dy=0$ se tiene $M_y=2y=N_x$; es exacta. Además $f(tx,ty)=\dfrac{2t^2x^2-t^2y^2}{2t^2xy}=f(x,y)$, luego es homogénea. Resulta **exacta**, **homogénea** y **Bernoulli**.

**k)** $y\,dx+x\,dy=0$. Es separable, ya que $\dfrac{dy}{y}=-\dfrac{dx}{x}$. Es exacta, con $M=y$, $N=x$ y $M_y=1=N_x$. Es lineal en ambas variables:

$$
y'+\frac{1}{x}y=0, \qquad x'+\frac{1}{y}x=0.
$$

Es homogénea, pues sus coeficientes son de grado $1$. Resulta **separable**, **exacta**, **lineal** y **homogénea**.

**l)** $\left(x^2+\dfrac{2y}{x}\right)dx=(3-\ln x^2)\,dy$. Escrita como $\left(x^2+\dfrac{2y}{x}\right)dx-(3-\ln x^2)\,dy=0$ se obtiene $M_y=\dfrac{2}{x}=N_x$; es exacta. Despejando $y'$,

$$
y'-\frac{2}{x(3-\ln x^2)}y=\frac{x^2}{3-\ln x^2},
$$

lineal en $y$. Resulta **exacta** y **lineal**.

**m)** $y'=\dfrac{x}{y}+\dfrac{y}{x}+1$. Al sustituir $x\to tx$, $y\to ty$ el miembro derecho no cambia, luego es homogénea. No admite las formas separable, exacta, lineal o de Bernoulli. Resulta **homogénea**.

**n)** $\dfrac{y}{x^2}y'+e^{2x^3+y^2}=0$. Al despejar,

$$
\frac{y}{x^2}y'=-e^{2x^3}e^{y^2}
\quad\Longrightarrow\quad
y\,e^{-y^2}\,dy=-x^2e^{2x^3}\,dx,
$$

luego es separable. La exponencial $e^{y^2}$ impide las formas de Bernoulli y lineal. Resulta **separable**.

## Observaciones

El nombre de **Bernoulli** se reserva aquí para $n\ne 0,1$. Los incisos lineales (a), (c), (k) y (l) corresponden al caso degenerado $n=0$. Si se admitieran los casos degenerados, toda ecuación lineal sería también de Bernoulli con $n=0$ y toda separable del tipo $y'=g(x)y$ lo sería con $n=1$.

La prueba de exactitud se aplica a la forma $M\,dx+N\,dy=0$ con los denominadores simplificados, como en (a) y (c). Multiplicar por un factor no constante cambia el resultado, por lo que la convención debe fijarse antes de clasificar.

La linealidad puede reconocerse en cualquiera de las dos variables. Los incisos (b), (d) y (g) solo se revelan como lineales, o como Bernoulli en (d), después de invertir la ecuación y tomar $x$ como variable dependiente.
