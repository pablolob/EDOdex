---
title: "Boyce 3.5 Ejercicio 19"
exercise-id: boyce-c03-s05-e019
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.5, ejercicio 19"
statement-status: accepted
solution-status: draft
metadata-status: pending
topics:
  - orden-superior
competencies:
  - resolver.lineal.orden-superior.reduccion-orden
prerequisitos:
  - derivacion.producto
  - integracion.directa
  - ecuaciones-diferenciales.primer-orden
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c03s05i02-p176.png
---

## Enunciado

En cada uno de los problemas 18 a 25, aplique el método de reducción de orden para hallar una segunda solución de la ecuación diferencial dada.

19. $x^2 y'' + 2xy' - 2y = 0, \quad x > 0; \quad y_1(x) = x$

## Solución

Una segunda solución, linealmente independiente de $y_1(x)=x$, es

$$
y_2(x)=x^{-2}.
$$

## Resolución

La ecuación

$$
x^2y''+2xy'-2y=0
$$

es de **segundo orden**, **lineal** y **homogénea**. Se conoce la solución $y_1(x)=x$ y se pide una segunda solución, por lo que se aplica **reducción de orden** con la sustitución

$$
y=v(x)\,y_1(x)=v(x)\,x.
$$

Al derivar con la regla del producto,

$$
\begin{aligned}
y' &= v+xv',\\
y'' &= 2v'+xv''.
\end{aligned}
$$

Al sustituir en la ecuación,

$$
x^2(2v'+xv'')+2x(v+xv')-2xv=0.
$$

Los términos $2xv$ se cancelan y, tras agrupar,

$$
x^3v''+4x^2v'=0.
$$

Como $x>0$, se divide entre $x^2$ y resulta una ecuación que no contiene $v$,

$$
xv''+4v'=0.
$$

El cambio $w=v'$ la reduce a una ecuación de primer orden separable,

$$
xw'+4w=0.
$$

Separando variables e integrando,

$$
\frac{dw}{w}=-\frac{4}{x}\,dx
\quad\Rightarrow\quad
\ln|w|=-4\ln x+C_1,
$$

de donde

$$
w=C_2x^{-4}.
$$

Basta con una segunda solución, así que se toma $C_2=1$. Entonces $v'=x^{-4}$ y, por integración directa,

$$
v(x)=\int x^{-4}\,dx=-\frac{1}{3x^3}.
$$

Multiplicando por $y_1=x$, se obtiene

$$
v(x)\,x=-\frac{1}{3x^2}.
$$

El factor constante no aporta información, de modo que se elige

$$
y_2(x)=x^{-2}.
$$

Las dos soluciones son linealmente independientes, pues su Wronskiano en $x>0$ es

$$
W(x,x^{-2})=
\begin{vmatrix}
x & x^{-2}\\
1 & -2x^{-3}
\end{vmatrix}
=x(-2x^{-3})-(x^{-2})(1)=-3x^{-2}\ne 0.
$$

## Observaciones

La función dada $y_1(x)=x$ satisface la ecuación, ya que $x^2\cdot 0+2x\cdot 1-2x=0$, y $y_2(x)=x^{-2}$ también la satisface. Ambas están definidas en el intervalo $x>0$ que fija el enunciado; no aparecen soluciones singulares ni ramas perdidas. Al ser $y_1$ y $y_2$ un conjunto fundamental, la solución general es

$$
y(x)=C_1x+C_2x^{-2}, \qquad x>0.
$$

El punto $x=0$ queda fuera del dominio, por lo que no se estudia la continuidad allí.

### Método alternativo: fórmula de reducción de orden

Escrita en forma estándar, la ecuación es $y''+\frac{2}{x}y'-\frac{2}{x^2}y=0$, con coeficiente $p(x)=\frac{2}{x}$. La segunda solución se obtiene directamente con la fórmula de **reducción de orden**,

$$
y_2=y_1\int\frac{e^{-\int p(x)\,dx}}{y_1^2}\,dx
=x\int\frac{x^{-2}}{x^2}\,dx
=x\int x^{-4}\,dx
=-\frac{1}{3x^2},
$$

lo que vuelve a dar $y_2=x^{-2}$, salvo el factor constante.
