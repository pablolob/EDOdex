---
title: "Boyce 3.5 Ejercicio 18"
exercise-id: boyce-c03-s05-e018
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.5, ejercicio 18"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver.lineal.orden-superior.reduccion-orden
prerequisitos:
  - ecuaciones-diferenciales.linealidad
  - ecuaciones-diferenciales.primer-orden
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s05i02-p176.png
---

## Enunciado

En cada uno de los problemas 18 a 25, aplique el método de reducción de orden para hallar una segunda solución de la ecuación diferencial dada.

18. $x^2 y'' + 2xy' = 0, \quad x > 0; \quad y_1(x) = 1$

## Solución

Una segunda solución linealmente independiente de $y_1(x)=1$ es

$$
y_2(x)=\frac{1}{x}.
$$

## Resolución

La ecuación es lineal y homogénea de **segundo orden**, y $y_1(x)=1$ es una solución conocida. Se aplica **reducción de orden** con la sustitución

$$
y(x)=u(x)\,y_1(x)=u(x).
$$

Sus derivadas son $y'=u'$ y $y''=u''$. Al sustituir en $x^2y''+2xy'=0$,

$$
x^2u''+2xu'=0.
$$

La función $u$ no aparece de forma aislada, porque $y_1=1$ resuelve la ecuación y el término en $u$ se cancela. El cambio $w=u'$ rebaja el orden y da la ecuación de primer orden

$$
x^2w'+2xw=0.
$$

Con $x>0$ se divide entre $x^2$ y se separan variables:

$$
\frac{w'}{w}=-\frac{2}{x}.
$$

Integrando ambos miembros,

$$
\ln|w|=-2\ln x+C,
$$

de modo que $w=C_1x^{-2}$. Una segunda integración determina $u$:

$$
u(x)=\int C_1x^{-2}\,dx=-C_1x^{-1}+C_2.
$$

Por lo tanto,

$$
y(x)=u(x)=C_2-C_1x^{-1}.
$$

El término constante reproduce la solución ya conocida $y_1=1$. El término en $x^{-1}$ aporta la solución nueva e independiente:

$$
y_2(x)=x^{-1}.
$$

La comprobación es directa. Con $y_2=x^{-1}$ se tiene $y_2'=-x^{-2}$ y $y_2''=2x^{-3}$, así que

$$
x^2y_2''+2xy_2'=x^2\left(2x^{-3}\right)+2x\left(-x^{-2}\right)=2x^{-1}-2x^{-1}=0.
$$

Las funciones $y_1=1$ y $y_2=x^{-1}$ son linealmente independientes, pues su Wronskiano

$$
W(1,x^{-1})=1\cdot\left(-x^{-2}\right)-0\cdot x^{-1}=-x^{-2}
$$

no se anula para $x>0$.

## Observaciones

La solución general de la ecuación es

$$
y(x)=C_1+\frac{C_2}{x},
$$

definida en el intervalo $x>0$ indicado en el enunciado. La solución conocida $y_1=1$ es la única constante admisible, de modo que la reducción de orden conduce de inmediato a una ecuación separable en $w=u'$; no se requiere ningún paso adicional para eliminar el término en $u$.
