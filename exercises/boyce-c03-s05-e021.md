---
title: "Boyce 3.5 Ejercicio 21"
exercise-id: boyce-c03-s05-e021
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.5, ejercicio 21"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver.lineal.orden-superior.reduccion-orden
prerequisitos:
  - derivacion.producto
  - integracion.directa
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c03s05i02-p176.png
---

## Enunciado

En cada uno de los problemas 18 a 25, aplique el método de reducción de orden para hallar una segunda solución de la ecuación diferencial dada.

21. $x^2 y'' - x(x + 2)y' + (x + 2)y = 0, \quad x > 0; \quad y_1(x) = x$

## Solución

Conocida $y_1(x)=x$, una segunda solución linealmente independiente en $x>0$ es

$$
y_2(x)=xe^x.
$$

## Resolución

La ecuación es lineal, homogénea, de **segundo orden** y con coeficientes variables. El enunciado proporciona una solución, $y_1(x)=x$, y pide una segunda solución, así se aplica **reducción de orden** con la sustitución

$$
y(x)=u(x)\,y_1(x)=u(x)\,x.
$$

Sus derivadas, por la regla del producto, son

$$
y'=u'x+u, \qquad y''=u''x+2u'.
$$

Al sustituir en $x^2y''-x(x+2)y'+(x+2)y=0$ resulta

$$
x^2\left(u''x+2u'\right)-x(x+2)\left(u'x+u\right)+(x+2)ux=0.
$$

Se desarrolla y se agrupa:

$$
x^3u''+2x^2u'-x^2(x+2)u'-x(x+2)u+x(x+2)u=0.
$$

Los dos últimos términos se cancelan, de modo que la ecuación no contiene a $u$:

$$
x^3u''+\left[2x^2-x^2(x+2)\right]u'=x^3u''-x^3u'=0.
$$

Como $x>0$, se divide por $x^3$ y queda

$$
u''-u'=0.
$$

Con el cambio $w=u'$ la ecuación es $w'-w=0$, de variables separables, cuya solución general es $w=Ce^x$. Se toma $u'=e^{x}$, ya que multiplicar $u$ por una constante solo reproduce la solución conocida $y_1$. Al integrar,

$$
u(x)=\int e^{x}\,dx=e^{x}.
$$

Por tanto,

$$
y_2(x)=u(x)y_1(x)=xe^{x}.
$$

Las funciones $y_1=x$ y $y_2=xe^{x}$ son linealmente independientes en $x>0$, pues su wronskiano es

$$
W=x\left(e^{x}+xe^{x}\right)-xe^{x}=x^2e^{x}\ne 0.
$$

## Observaciones

La solución general de la ecuación en el intervalo $x>0$ es $y(x)=C_1x+C_2xe^{x}$.

### Método alternativo: fórmula de Abel

En forma estándar, la ecuación es $y''-\frac{x+2}{x}y'+\frac{x+2}{x^2}y=0$. Con $P(x)=-\frac{x+2}{x}$, la fórmula de Abel da

$$
y_2=y_1\int\frac{e^{-\int P\,dx}}{y_1^2}\,dx
=x\int\frac{e^{x+2\ln x}}{x^2}\,dx
=x\int e^{x}\,dx
=xe^{x}.
$$
