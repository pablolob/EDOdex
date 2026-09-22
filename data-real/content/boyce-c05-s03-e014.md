
## Enunciado

Resuelva la ecuación diferencial dada mediante una serie de potencias de $x$ y compruebe que $a_0$ es arbitraria en cada caso:

14. $y' - y = 0$

## Solución

La solución general es

$$
y = a_0\sum_{n=0}^{\infty}\frac{x^n}{n!} = a_0 e^{x},
$$

con $a_0$ arbitraria.

## Resolución

La ecuación es **lineal de primer orden** con coeficientes constantes; todo punto es un **punto ordinario**, en particular $x_0=0$. Se busca una solución en serie de potencias de $x$,

$$
y=\sum_{n=0}^{\infty}a_n x^n,
$$

válida en algún intervalo $|x|<R$. La serie puede derivarse término a término:

$$
y'=\sum_{n=1}^{\infty} n\,a_n x^{n-1}.
$$

Al reindexar con $m=n-1$,

$$
y'=\sum_{m=0}^{\infty}(m+1)\,a_{m+1}x^{m}=\sum_{n=0}^{\infty}(n+1)\,a_{n+1}x^{n}.
$$

Sustituyendo en $y'-y=0$,

$$
\sum_{n=0}^{\infty}\bigl[(n+1)a_{n+1}-a_n\bigr]x^{n}=0.
$$

Una serie de potencias idénticamente nula tiene todos sus coeficientes nulos, luego

$$
(n+1)a_{n+1}-a_n=0,\qquad n\ge 0,
$$

es decir,

$$
a_{n+1}=\frac{a_n}{n+1}.
$$

Esta relación de recurrencia determina cada coeficiente a partir de $a_0$. Iterando,

$$
a_1=a_0,\qquad a_2=\frac{a_1}{2}=\frac{a_0}{2!},\qquad a_3=\frac{a_2}{3}=\frac{a_0}{3!},
$$

y, por inducción, $a_n=\dfrac{a_0}{n!}$ para todo $n\ge 0$. Ninguna condición fija $a_0$: es la constante arbitraria de la solución general.

La solución es entonces

$$
y=a_0\sum_{n=0}^{\infty}\frac{x^n}{n!}=a_0 e^{x}.
$$

Comprobación: $y'=a_0 e^{x}=y$, de modo que $y'-y=0$; además $y(0)=a_0$, lo que confirma que $a_0$ es arbitraria.

## Observaciones

La serie obtenida es la de la función exponencial. El **criterio del cociente** da

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|=\lim_{n\to\infty}\frac{1}{n+1}=0,
$$

por lo que el radio de convergencia es infinito y la solución está definida para todo $x$ real. Esto concuerda con que $x_0=0$ sea punto ordinario de una ecuación con coeficientes analíticos en todo $\mathbb{R}$.

### Método alternativo: separación de variables

La ecuación $y'=y$ es separable. Separando variables, $\dfrac{dy}{y}=dx$ e integrando, $\ln|y|=x+C$, de donde $y=Ce^{x}$. Al comparar con la solución en serie, la constante $C$ es precisamente $a_0=y(0)$.
