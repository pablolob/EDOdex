---
title: "Boyce 5.5 Ejercicio 8"
exercise-id: boyce-c05-s05-e008
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.5, ejercicio 8"
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

8. $2x^2 y'' - 4xy' + 6y = 0$

## Solución

La ecuación es de **segundo orden**, **lineal**, **homogénea** y de tipo **Cauchy-Euler**. Su solución general, válida en cualquier intervalo que no contenga el punto singular $x=0$, es

$$
y=|x|^{3/2}\left[C_1\cos\left(\frac{\sqrt{3}}{2}\ln|x|\right)+C_2\sin\left(\frac{\sqrt{3}}{2}\ln|x|\right)\right].
$$

En el intervalo $(0,\infty)$ esta expresión coincide con $x^{3/2}\left[C_1\cos\left(\frac{\sqrt{3}}{2}\ln x\right)+C_2\sin\left(\frac{\sqrt{3}}{2}\ln x\right)\right]$.

## Resolución

La ecuación

$$
2x^2 y'' - 4xy' + 6y = 0
$$

tiene la forma de una **ecuación de Cauchy-Euler** $ax^2y''+bxy'+cy=0$, con $a=2$, $b=-4$ y $c=6$. El coeficiente de $y''$ se anula en $x=0$, de modo que ese es el único punto singular y la solución general se busca en un intervalo que no contenga el origen.

Se propone $y=x^r$ con $x\ne 0$. Sus derivadas son

$$
y' = r x^{r-1}, \qquad y'' = r(r-1)x^{r-2}.
$$

Al sustituir en la ecuación,

$$
2x^2\, r(r-1)x^{r-2} - 4x\, r x^{r-1} + 6x^r
= x^r\left[2r(r-1)-4r+6\right]
= 2x^r\left(r^2-3r+3\right).
$$

Como $x^r\ne 0$, la condición se reduce a la **ecuación característica**

$$
r^2 - 3r + 3 = 0,
$$

cuyas raíces son

$$
r = \frac{3\pm\sqrt{9-12}}{2} = \frac{3\pm i\sqrt{3}}{2} = \frac{3}{2} \pm i\frac{\sqrt{3}}{2}.
$$

Las raíces son complejas conjugadas $r=\alpha\pm i\beta$, con $\alpha=\dfrac{3}{2}$ y $\beta=\dfrac{\sqrt{3}}{2}$. Para $x>0$ esto produce las dos soluciones reales linealmente independientes

$$
x^{3/2}\cos\left(\frac{\sqrt{3}}{2}\ln x\right), \qquad x^{3/2}\sin\left(\frac{\sqrt{3}}{2}\ln x\right),
$$

y la misma forma con $\ln|x|$ y $|x|^{3/2}$ cuando $x<0$. Por tanto,

$$
y=|x|^{3/2}\left[C_1\cos\left(\frac{\sqrt{3}}{2}\ln|x|\right)+C_2\sin\left(\frac{\sqrt{3}}{2}\ln|x|\right)\right],
$$

que es válida en cualquier intervalo que no incluya $x=0$, es decir, en $(-\infty,0)$ o en $(0,\infty)$.

## Observaciones

El punto $x=0$ es el punto singular de la ecuación. La solución no está definida en él, pues el factor $|x|^{3/2}$ se anula y la fase $\ln|x|$ diverge cuando $x\to 0$.

### Método alternativo: cambio de variable $x=e^z$

Para $x>0$, el cambio $z=\ln x$ transforma la ecuación de Cauchy-Euler en la ecuación con coeficientes constantes

$$
2\frac{d^2y}{dz^2} - 6\frac{dy}{dz} + 6y = 0,
$$

o, dividiendo por $2$,

$$
\frac{d^2y}{dz^2} - 3\frac{dy}{dz} + 3y = 0.
$$

Su ecuación característica $\lambda^2-3\lambda+3=0$ tiene raíces $\lambda=\dfrac{3}{2}\pm i\dfrac{\sqrt{3}}{2}$. La solución $y=e^{3z/2}\left[C_1\cos\left(\frac{\sqrt{3}}{2}z\right)+C_2\sin\left(\frac{\sqrt{3}}{2}z\right)\right]$ coincide con la anterior al deshacer el cambio.
