---
title: "Boyce 5.3 Ejercicio 18"
exercise-id: boyce-c05-s03-e018
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.3, ejercicio 18"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - resolver-series.serie-potencias
  - resolver-series.recurrencia
prerequisitos:
  - calculo-avanzado.series-potencias
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c05s03i02-p264.png
---

## Enunciado

Resuelva la ecuación diferencial dada mediante una serie de potencias de $x$ y compruebe que $a_0$ es arbitraria en cada caso:

18. $y' - y = x^2$

## Solución

La solución general es

$$
y(x)=a_0\,e^{x}+2\left(e^{x}-1-x-\frac{x^{2}}{2}\right)
=(a_0+2)e^{x}-x^{2}-2x-2,
$$

con $a_0$ arbitraria.

## Resolución

La ecuación es **lineal de primer orden** con coeficientes constantes; todo punto es un **punto ordinario**, en particular $x_0=0$. Se busca una solución en **serie de potencias** de $x$,

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

El segundo miembro es $x^2$, que como serie tiene coeficiente $1$ en $x^2$ y $0$ en las demás potencias. Sustituyendo en $y'-y=x^2$,

$$
\sum_{n=0}^{\infty}\bigl[(n+1)a_{n+1}-a_n\bigr]x^{n}=x^{2}.
$$

Una serie de potencias idénticamente nula tiene todos sus coeficientes nulos. Igualando coeficiente a coeficiente:

$$
\begin{aligned}
n=0:&\quad a_1-a_0=0 \;\Longrightarrow\; a_1=a_0,\\
n=1:&\quad 2a_2-a_1=0 \;\Longrightarrow\; a_2=\frac{a_0}{2},\\
n=2:&\quad 3a_3-a_2=1 \;\Longrightarrow\; a_3=\frac{a_0+2}{6},\\
n\ge 3:&\quad (n+1)a_{n+1}-a_n=0 \;\Longrightarrow\; a_{n+1}=\frac{a_n}{n+1}.
\end{aligned}
$$

El término no homogéneo solo modifica la ecuación de $n=2$; para $n\ge 3$ la recurrencia es la homogénea. Iterando a partir de $a_3$,

$$
a_4=\frac{a_3}{4}=\frac{a_0+2}{24},\qquad
a_5=\frac{a_4}{5}=\frac{a_0+2}{120},\qquad\ldots
$$

y, por inducción,

$$
a_n=\frac{a_0+2}{n!},\qquad n\ge 3.
$$

Ninguna de las ecuaciones fija $a_0$: permanece como constante arbitraria, como corresponde a la solución general de una ecuación de primer orden. Sustituyendo los coeficientes en la serie,

$$
\begin{aligned}
y&=a_0+a_0x+\frac{a_0}{2}x^{2}+\sum_{n=3}^{\infty}\frac{a_0+2}{n!}x^{n}\\
&=a_0\sum_{n=0}^{\infty}\frac{x^{n}}{n!}+2\sum_{n=3}^{\infty}\frac{x^{n}}{n!}\\
&=a_0e^{x}+2\left(e^{x}-1-x-\frac{x^{2}}{2}\right)
=(a_0+2)e^{x}-x^{2}-2x-2.
\end{aligned}
$$

Comprobación: al derivar la forma cerrada, $y'=(a_0+2)e^{x}-2x-2$, de modo que

$$
y'-y=\bigl[(a_0+2)e^{x}-2x-2\bigr]-\bigl[(a_0+2)e^{x}-x^{2}-2x-2\bigr]=x^{2},
$$

y $y(0)=a_0$, lo que confirma que $a_0$ es arbitraria.

## Observaciones

La serie del exponencial tiene radio de convergencia infinito. Como $x_0=0$ es un punto ordinario de una ecuación con coeficientes analíticos en todo $\mathbb{R}$, la solución es válida para todo $x\in\mathbb{R}$.

### Método alternativo: factor integrante

La ecuación también es **lineal de primer orden**. Con el factor integrante $\mu(x)=e^{-x}$ se obtiene $\left(e^{-x}y\right)'=x^{2}e^{-x}$. Integrando por partes dos veces,

$$
e^{-x}y=C-\left(x^{2}+2x+2\right)e^{-x},
$$

de donde $y=Ce^{x}-x^{2}-2x-2$. La constante $C$ coincide con $a_0+2$, pues $y(0)=C-2=a_0$.
