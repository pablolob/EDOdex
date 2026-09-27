---
title: "Boyce 3.3 Ejercicio 13"
exercise-id: boyce-c03-s03-e013
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.3, ejercicio 13"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - determinar.independencia-lineal
prerequisitos:
  - ecuaciones-diferenciales.wronskiano
  - ecuaciones-diferenciales.linealidad
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c03s03i01-p159.png
---

## Enunciado

En los problemas 13 y 14, encuentre el wronskiano de soluciones de la ecuación diferencial dada sin resolver ésta

13. $x^2 y'' - x(x + 2)y' + (x + 2)y = 0$

## Solución

El wronskiano de cualquier par de soluciones es

$$
W(x) = C\,x^{2}e^{x}, \qquad x \neq 0,
$$

con $C$ una constante arbitraria.

## Resolución

La ecuación es **lineal**, **homogénea** y de **segundo orden**. Como no se conocen sus soluciones, el wronskiano se obtiene con la **identidad de Abel**, que lo determina salvo una constante a partir del coeficiente de $y'$.

Primero se escribe la ecuación en forma estándar. Para $x \neq 0$ se divide por $x^{2}$:

$$
y'' - \frac{x+2}{x}\,y' + \frac{x+2}{x^{2}}\,y = 0.
$$

Por tanto, $p(x) = -\dfrac{x+2}{x} = -1 - \dfrac{2}{x}$.

La identidad de Abel establece que dos soluciones cualesquiera $y_1$ y $y_2$ cumplen $W' = -p(x)\,W$, de modo que

$$
W(x) = C\exp\!\left(-\int p(x)\,dx\right).
$$

Se calcula la integral:

$$
-\int p(x)\,dx = \int \frac{x+2}{x}\,dx = \int \left(1 + \frac{2}{x}\right)dx = x + 2\ln|x|.
$$

Las constantes de integración se absorben en $C$. Al sustituir y usar $e^{2\ln|x|} = x^{2}$,

$$
\begin{aligned}
W(x)
&= C\exp\!\left(x + 2\ln|x|\right) \\
&= C\,e^{x}\,|x|^{2} \\
&= C\,x^{2}e^{x}.
\end{aligned}
$$

La fórmula vale en cada intervalo donde los coeficientes de la forma estándar son continuos, es decir, $x > 0$ o $x < 0$ por separado.

## Observaciones

La constante $C$ depende del par de soluciones elegido: para un conjunto fundamental es distinta de cero. Como $x^{2}e^{x}$ no se anula si $x \neq 0$, el wronskiano de dos soluciones linealmente independientes nunca se anula en $(-\infty,0)$ ni en $(0,\infty)$, lo que confirma que forman un conjunto fundamental en cada uno de esos intervalos.

El punto $x = 0$ es singular: la ecuación no está en forma estándar allí y la fórmula de Abel no se aplica. La constante $C$ puede tomar valores distintos en $(-\infty,0)$ y en $(0,\infty)$.
