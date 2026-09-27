---
title: "Zill Repaso C2 Ejercicio 24"
exercise-id: zill-c02-sr-e024
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 2, ejercicio 24"
language: es
competencies:
  - resolver-analiticamente.lineales-primer-orden
hidden-competencies:
  - clasificar.linealidad
  - seleccionar-metodo.factor-integrante
prerequisitos:
  - integracion.por-partes
solution-status: draft
statement-status: accepted
topics:
  - primer-orden
source-images:
  - c02sri02-p095.png
difficulty:
  conceptual: 2
  technical: 2
---

## Enunciado

En los problemas 19-26 resuelva la ecuación diferencial dada.

$$(2x + y + 1)y' = 1$$

## Solución

La ecuación es de **primer orden** y **lineal en $x$** cuando se toma $y$ como
variable independiente. Su solución general es

$$
x(y) = Ce^{2y} - \frac{y}{2} - \frac{3}{4}.
$$

## Resolución

La ecuación no es separable y no es lineal en $y$, porque el producto $y\,y'$
hace no lineal al miembro izquierdo. Sí es lineal en $x$. Despejando la derivada
recíproca, para $y'\ne 0$,

$$
\frac{dx}{dy} = 2x + y + 1,
$$

que en forma estándar es

$$
\frac{dx}{dy} - 2x = y + 1.
$$

Aquí $P(y) = -2$ y $f(y) = y + 1$. El **factor integrante** es

$$
\mu(y) = \exp\!\left(\int -2\,dy\right) = e^{-2y}.
$$

Al multiplicar la ecuación por $\mu(y)$,

$$
e^{-2y}\frac{dx}{dy} - 2e^{-2y}x = (y+1)e^{-2y},
$$

el miembro izquierdo es la derivada de un producto:

$$
\frac{d}{dy}\!\left[x e^{-2y}\right] = (y+1)e^{-2y}.
$$

Integrando respecto de $y$,

$$
x e^{-2y} = \int (y+1)e^{-2y}\,dy.
$$

La integral se calcula **por partes** con $u = y+1$ y $dv = e^{-2y}\,dy$, de modo
que $du = dy$ y $v = -e^{-2y}/2$:

$$
\begin{aligned}
\int (y+1)e^{-2y}\,dy
&= -\frac{y+1}{2}e^{-2y} + \frac{1}{2}\int e^{-2y}\,dy \\
&= -\frac{y+1}{2}e^{-2y} - \frac{1}{4}e^{-2y} + C \\
&= -\left(\frac{y}{2} + \frac{3}{4}\right)e^{-2y} + C.
\end{aligned}
$$

Sustituyendo y multiplicando por $e^{2y}$,

$$
x e^{-2y} = -\left(\frac{y}{2} + \frac{3}{4}\right)e^{-2y} + C
\quad\Longrightarrow\quad
x(y) = Ce^{2y} - \frac{y}{2} - \frac{3}{4}.
$$

La sustitución directa confirma el resultado. De la solución,
$2x + y + 1 = 2Ce^{2y} - 1/2$, y derivando respecto de $y$,

$$
\frac{dx}{dy} = 2Ce^{2y} - \frac{1}{2} = 2x + y + 1,
$$

de donde $\dfrac{dy}{dx} = \dfrac{1}{2x+y+1}$, que es la ecuación original.

La ecuación escrita para $y(x)$ exige $2x+y+1\ne 0$. Como
$2x+y+1 = 2Ce^{2y}-1/2$, para $C\le 0$ esta cantidad nunca se anula y la
solución está definida para todo $x\in\mathbb{R}$. Para $C>0$ la curva presenta
una tangente vertical en $y_0 = \frac{1}{2}\ln\!\frac{1}{4C}$, de abscisa
$x_0 = \frac{1}{4}\ln(4C) - \frac{1}{2}$; cada rama que define $y(x)$ es válida
en el intervalo $(x_0,\infty)$. La familia es lineal en $x$, así que contiene
todas las soluciones y no hay soluciones singulares. El caso $C = 0$ da la
solución lineal $x = -y/2 - 3/4$, es decir, $y = -2x - 3/2$.

## Observaciones

La ecuación no es lineal en $y$, pero al calcular $dx/dy$ se revela lineal en
$x$. Reconocer qué variable conviene tomar como dependiente evita forzar una
separación de variables que no existe.

### Método alternativo: sustitución $u = 2x + y + 1$

La misma solución se obtiene con el cambio $u = 2x+y+1$. Entonces
$\dfrac{du}{dx} = 2 + y' = 2 + \dfrac{1}{u} = \dfrac{2u+1}{u}$, que es
**separable**:

$$
dx = \frac{u}{2u+1}\,du.
$$

Integrando,

$$
x = \int \frac{u}{2u+1}\,du
= \frac{1}{2}\int\left(1 - \frac{1}{2u+1}\right)du
= \frac{u}{2} - \frac{1}{4}\ln|2u+1| + C.
$$

Al sustituir $u = 2x+y+1$ resulta la solución implícita

$$
x = \frac{2x+y+1}{2} - \frac{1}{4}\ln|4x+2y+3| + C,
$$

equivalente a la familia explícita $x(y) = Ce^{2y} - y/2 - 3/4$. La solución
lineal $y = -2x - 3/2$, excluida al separar por $2u+1 = 0$, se recupera con
$C = 0$; no es una solución singular.
