
## Enunciado

Considere la ecuación diferencial

$$x^3 y'' + \alpha x y' + \beta y = 0,$$

en donde $\alpha$ y $\beta$ son constantes reales.

a) Demuestre que $x = 0$ es un punto singular irregular.

b) Al intentar determinar una solución de la forma $x^r \sum_{n=0}^{\infty} a_n x^n$, demuestre que la ecuación indicial para $r$ es lineal y, en consecuencia, que solamente existe una solución formal de la forma supuesta.

c) Demuestre que si $\beta/\alpha = -1, 0, 1, 2, \dots$, entonces la solución formal en serie termina y, por consiguiente, en realidad es una solución. Para otros valores de $\beta/\alpha$, demuestre que la solución formal en serie tiene un radio cero de convergencia y, por tanto, no representa en realidad una solución en cualquier intervalo.

## Solución

a) El punto $x=0$ es un **punto singular irregular**.

b) La **ecuación indicial** es lineal en $r$,

$$
\alpha r+\beta=0,
$$

cuya única raíz es $r=-\beta/\alpha$. En consecuencia, solo existe una solución formal de la forma supuesta.

c) Con $r=-\beta/\alpha$ la relación de recurrencia es

$$
a_m=-\frac{(m+r-1)(m+r-2)}{\alpha m}\,a_{m-1},\qquad m\ge 1.
$$

La serie termina, y por tanto define una solución, si y solo si $\beta/\alpha\in\{-1,0,1,2,\dots\}$. Para cualquier otro valor, su radio de convergencia es $0$ y no representa una solución en ningún intervalo.

## Resolución

**a) Clasificación de $x=0$.**

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. Para $x\ne 0$, tras dividir por $x^3$,

$$
y''+\frac{\alpha}{x^2}\,y'+\frac{\beta}{x^3}\,y=0,
\qquad
p(x)=\frac{\alpha}{x^2},\quad q(x)=\frac{\beta}{x^3}.
$$

El coeficiente de $y''$ es $x^3$, que se anula en $x=0$; por tanto $x=0$ es un punto singular. Un punto singular $x_0$ es **regular** si los productos $(x-x_0)p(x)$ y $(x-x_0)^2q(x)$ son analíticos en $x_0$. Aquí

$$
x\,p(x)=\frac{\alpha}{x},\qquad x^2q(x)=\frac{\beta}{x}.
$$

Si $\alpha\ne 0$, la primera función tiene un polo en $x=0$ y no admite desarrollo de Taylor allí, de modo que falla la condición de regularidad. Si $\alpha=0$, el mismo tipo de polo aparece en $x^2q(x)=\beta/x$, salvo en el caso trivial $\alpha=\beta=0$. En todos los casos no triviales, $x=0$ es un **punto singular irregular**.

**b) Ecuación indicial.**

Se busca una solución de la forma

$$
y=\sum_{n=0}^{\infty}a_n x^{n+r},\qquad a_0\ne 0,
$$

con derivadas

$$
y'=\sum_{n=0}^{\infty}(n+r)a_n x^{n+r-1},\qquad
y''=\sum_{n=0}^{\infty}(n+r)(n+r-1)a_n x^{n+r-2}.
$$

Al sustituir en la ecuación, los tres sumandos son

$$
x^3y''=\sum_{n=0}^{\infty}(n+r)(n+r-1)a_n x^{n+r+1},
\qquad
\alpha x y'+\beta y=\sum_{n=0}^{\infty}\bigl[\alpha(n+r)+\beta\bigr]a_n x^{n+r}.
$$

En el primero se desplaza el índice con $m=n+1$:

$$
x^3y''=\sum_{m=1}^{\infty}(m+r-1)(m+r-2)a_{m-1}x^{m+r}.
$$

El término de menor potencia, $x^r$, solo recibe la contribución $n=0$ del segundo grupo. Al igualar su coeficiente a cero y usar $a_0\ne 0$,

$$
\alpha r+\beta=0.
$$

Esta ecuación es lineal en $r$ y tiene la única raíz $r=-\beta/\alpha$. El **método de Frobenius** necesita en general dos raíces para producir dos soluciones linealmente independientes; con una sola raíz, solo existe una solución formal de la forma supuesta.

**c) Terminación de la serie.**

El coeficiente de $x^{m+r}$ para $m\ge 1$ es

$$
(m+r-1)(m+r-2)a_{m-1}+\bigl[\alpha(m+r)+\beta\bigr]a_m=0.
$$

Como $r=-\beta/\alpha$ satisface $\alpha r+\beta=0$, resulta $\alpha(m+r)+\beta=\alpha m$, y la **relación de recurrencia** queda

$$
a_m=-\frac{(m+r-1)(m+r-2)}{\alpha m}\,a_{m-1},\qquad m\ge 1.
$$

El numerador se anula cuando $m+r-1=0$ o $m+r-2=0$, esto es, para $m=1-r=1+\beta/\alpha$ o $m=2-r=2+\beta/\alpha$. Con $m\ge 1$, alguno de estos valores es admisible exactamente cuando $\beta/\alpha=-1,0,1,2,\dots$. En tal caso un coeficiente $a_m$ se anula y, por la propia recurrencia, todos los siguientes también; la serie se reduce a una suma finita de potencias de $x$ y define una solución.

**c) Radio de convergencia para los demás valores.**

Si $\beta/\alpha$ no pertenece a esa lista, ningún coeficiente se anula. El cociente de coeficientes sucesivos verifica

$$
\frac{a_m}{a_{m-1}}
=-\frac{(m+r-1)(m+r-2)}{\alpha m}
\sim-\frac{m}{\alpha}
\qquad(m\to\infty),
$$

de modo que $\left|\dfrac{a_m}{a_{m-1}}\right|\sim\dfrac{m}{|\alpha|}\to\infty$. Al aplicar el **criterio del cociente** a la serie $\sum_{m\ge 0}a_mx^m$,

$$
R=\lim_{m\to\infty}\left|\frac{a_{m-1}}{a_m}\right|=0.
$$

La serie converge solo en $x=0$; por tanto no representa una solución en ningún intervalo.

## Observaciones

El resultado muestra por qué el **método de Frobenius** exige un punto singular regular: en $x=0$, que aquí es irregular, la serie formal no converge salvo en el propio punto.

En los casos de terminación la solución es una suma finita de potencias enteras de $x$. Por ejemplo, $\beta/\alpha=-1$ da $r=1$ y $y=a_0x$; $\beta/\alpha=0$ da $r=0$ y $y=a_0$; $\beta/\alpha=1$ da $r=-1$ y $y=a_0\left(x^{-1}-2/\alpha\right)$.
