---
title: "Boyce 5.5 Ejercicio 4"
exercise-id: boyce-c05-s05-e004
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.5, ejercicio 4"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
  - frobenius
competencies:
  - resolver-analiticamente.cauchy-euler
hidden-competencies:
  - clasificar.cauchy-euler
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.numeros-complejos
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c05s05i01-p278.png
---

## Enunciado

En cada uno de los problemas 1 a 12 determine la solución general de la ecuación diferencial dada que sea válida en cualquier intervalo que no incluya el punto singular.

4. $x^2 y'' + 3xy' + 5y = 0$

## Solución

La ecuación es de **segundo orden**, **lineal**, **homogénea** y de tipo **Cauchy-Euler**. Su solución general, válida en cualquier intervalo que no contenga el punto singular $x=0$, es

$$
y = \frac{1}{x}\left[C_1\cos(2\ln|x|) + C_2\sin(2\ln|x|)\right].
$$

## Resolución

La ecuación

$$
x^2 y'' + 3xy' + 5y = 0
$$

tiene la forma de una **ecuación de Cauchy-Euler** $ax^2y''+bxy'+cy=0$, con $a=1$, $b=3$ y $c=5$. Para $x\ne 0$ los coeficientes de la forma estándar son continuos, de modo que la solución general se busca en un intervalo que no contenga el origen.

Se propone $y=x^r$ con $x\ne 0$. Sus derivadas son

$$
y' = r x^{r-1}, \qquad y'' = r(r-1)x^{r-2}.
$$

Al sustituir en la ecuación,

$$
x^2\, r(r-1)x^{r-2} + 3x\, r x^{r-1} + 5x^r
= x^r\left[r(r-1)+3r+5\right]
= x^r\left(r^2+2r+5\right).
$$

Como $x^r\ne 0$, la condición se reduce a la **ecuación característica**

$$
r^2 + 2r + 5 = 0,
$$

cuyas raíces son

$$
r = \frac{-2\pm\sqrt{4-20}}{2} = -1 \pm 2i.
$$

Las raíces son complejas conjugadas $r=\alpha\pm i\beta$, con $\alpha=-1$ y $\beta=2$. Para $x>0$ esto produce las dos soluciones reales linealmente independientes

$$
x^{-1}\cos(2\ln x), \qquad x^{-1}\sin(2\ln x),
$$

y la misma forma con $\ln|x|$ cuando $x<0$. Por tanto,

$$
y = \frac{1}{x}\left[C_1\cos(2\ln|x|) + C_2\sin(2\ln|x|)\right],
$$

que es válida en cualquier intervalo que no incluya $x=0$.

## Observaciones

El punto $x=0$ es el punto singular de la ecuación. La solución no está definida en él, pues el factor $x^{-1}$ diverge cuando $x\to 0$. Los intervalos de validez son $(-\infty,0)$ y $(0,\infty)$.

### Método alternativo: cambio de variable $x=e^z$

Para $x>0$, el cambio $z=\ln x$ transforma la ecuación de Cauchy-Euler en la ecuación con coeficientes constantes

$$
\frac{d^2y}{dz^2} + 2\frac{dy}{dz} + 5y = 0,
$$

cuya ecuación característica $\lambda^2+2\lambda+5=0$ tiene raíces $\lambda=-1\pm 2i$. La solución $y=e^{-z}\left[C_1\cos(2z)+C_2\sin(2z)\right]$ coincide con la anterior al deshacer el cambio.
